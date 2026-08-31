#!/usr/bin/env python3
"""Nuvin Content Engine, article generator.

Reads content-engine/topics.json, authors an English article with OpenAI
(following the topic's honesty guardrails + safety flag), localizes it to
French, writes both as MDX files under app/blog and app/fr/blog, registers
them in lib/blog.ts, and (in live mode) commits + pushes so Vercel deploys.

Stdlib only, no pip. Publishing is git-based: no WordPress, no SSH.

Usage:
  python3 generate.py                 # next pending topic, EN+FR, draft mode
  python3 generate.py --limit 2       # process 2 topics
  python3 generate.py --slug X        # a specific topic
  python3 generate.py --lang en       # English only (repeatable)
  python3 generate.py --dry-run       # call the model but write nothing
  python3 generate.py --publish       # force live (commit + push)

Environment (content-engine/.env):
  OPENAI_API_KEY, OPENAI_MODEL, OPENAI_TRANSLATE_MODEL,
  PUBLISH_MODE (draft|live), GIT_AUTHOR_NAME, GIT_AUTHOR_EMAIL
"""

import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import date, datetime

# --------------------------------------------------------------------------- #
# Paths
# --------------------------------------------------------------------------- #
ENGINE_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(ENGINE_DIR)
TOPICS_PATH = os.path.join(ENGINE_DIR, "topics.json")
APP_DIR = os.path.join(REPO_ROOT, "app")
BLOG_DIR_EN = os.path.join(APP_DIR, "blog")
BLOG_DIR_FR = os.path.join(APP_DIR, "fr", "blog")
LIB_BLOG_PATH = os.path.join(REPO_ROOT, "lib", "blog.ts")

APP_STORE_URL = "https://apps.apple.com/us/app/nuvin-anxiety-relief/id6753338724"

# --------------------------------------------------------------------------- #
# Env loading (tiny .env parser, stdlib only)
# --------------------------------------------------------------------------- #
def load_env():
    path = os.path.join(ENGINE_DIR, ".env")
    if os.path.exists(path):
        with open(path) as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

load_env()

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")
OPENAI_MODEL = os.environ.get("OPENAI_MODEL", "gpt-5.6-terra")
OPENAI_TRANSLATE_MODEL = os.environ.get("OPENAI_TRANSLATE_MODEL", "gpt-5.6-luna")
PUBLISH_MODE = os.environ.get("PUBLISH_MODE", "draft").lower()
GIT_AUTHOR_NAME = os.environ.get("GIT_AUTHOR_NAME", "Nuvin Bot")
GIT_AUTHOR_EMAIL = os.environ.get("GIT_AUTHOR_EMAIL", "bot@nuvin.app")

# Localized display-date formatting (no locale dependency, stdlib only)
MONTHS = {
    "en": ["January", "February", "March", "April", "May", "June", "July",
           "August", "September", "October", "November", "December"],
    "fr": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
           "août", "septembre", "octobre", "novembre", "décembre"],
}
READ_TIME_LABEL = {"en": "min read", "fr": "min de lecture"}

# French crisis resources differ from US; the CrisisDisclaimer component already
# handles this per-language, so the engine only needs to signal the language.

# Word targets by type (completeness, not padding)
WORD_TARGETS = {
    "pillar": (1500, 2200),
    "situational": (1000, 1500),
    "how-to": (1000, 1500),
    "informational": (1100, 1600),
    "faq_short": (800, 1200),
}


# --------------------------------------------------------------------------- #
# OpenAI Chat Completions (stdlib urllib)
# --------------------------------------------------------------------------- #
def openai_chat(system, user, model, max_retries=4, json_mode=False):
    """Call OpenAI Chat Completions. GPT-5.6 models only accept the default
    temperature, so we never pass a temperature param."""
    if not OPENAI_API_KEY:
        raise RuntimeError(
            "OPENAI_API_KEY is not set. Add it to content-engine/.env "
            "(a separate key named 'nuvin')."
        )
    url = "https://api.openai.com/v1/chat/completions"
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
    }
    if json_mode:
        payload["response_format"] = {"type": "json_object"}

    data = json.dumps(payload).encode("utf-8")
    last_err = None
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(
                url, data=data,
                headers={
                    "Authorization": f"Bearer {OPENAI_API_KEY}",
                    "Content-Type": "application/json",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=180) as resp:
                body = json.loads(resp.read().decode("utf-8"))
                return body["choices"][0]["message"]["content"]
        except urllib.error.HTTPError as e:
            detail = e.read().decode("utf-8", "ignore")
            last_err = f"HTTP {e.code}: {detail[:400]}"
            # 429 / 5xx are retryable; 4xx (except 429) usually are not
            if e.code in (429, 500, 502, 503, 504):
                wait = 2 ** attempt
                print(f"  OpenAI {e.code}, retrying in {wait}s...")
                time.sleep(wait)
                continue
            raise RuntimeError(f"OpenAI error (non-retryable): {last_err}")
        except (urllib.error.URLError, TimeoutError) as e:
            last_err = str(e)
            wait = 2 ** attempt
            print(f"  Network error, retrying in {wait}s... ({last_err})")
            time.sleep(wait)
    raise RuntimeError(f"OpenAI failed after {max_retries} tries: {last_err}")


# --------------------------------------------------------------------------- #
# Prompt building
# --------------------------------------------------------------------------- #
def build_author_system():
    return (
        "You are a careful, credible health writer for Nuvin, an iOS app that "
        "gives instant, offline relief for everyday anxiety through breathing, "
        "grounding, and physical-reset exercises. You write blog articles that "
        "coach ONE technique deeply for a reader who is anxious RIGHT NOW.\n\n"
        "NON-NEGOTIABLE RULES:\n"
        "1. This is health (YMYL) content. Be accurate and responsible. Nuvin "
        "is a self-help tool for everyday, situational anxiety, NOT a medical "
        "device, diagnosis, therapy, or crisis service. Never diagnose.\n"
        "2. NEVER use the em-dash character. Use commas, periods, or "
        "parentheses instead.\n"
        "3. Be honest about evidence. Cite real research where it exists and "
        "state its limits. Never overstate. Never claim 'trauma release' for "
        "shaking/movement, frame it as movement and tension-release only.\n"
        "4. Put the actionable technique HIGH in the article (readers are "
        "anxious now). Minimal intro. Coach one method step by step; do not "
        "dump a list of twenty options.\n"
        "5. Respect the topic's SAFETY FLAG exactly. If it says rule out "
        "medical causes, say so. If it says non-diagnostic / no reassurance, "
        "obey strictly.\n"
        "6. Do not invent statistics, studies, or quotes. Only reference the "
        "evidence described in the brief you are given.\n"
        "7. Write in clear, warm, plain English. Short paragraphs.\n\n"
        "OUTPUT FORMAT: Return ONLY a single JSON object with keys: "
        '"title" (string, refined SEO title), "description" (string, 150-160 '
        'char meta description), "category" (one short label like "Panic", '
        '"Sleep", "Techniques", "Work", "Situational", "Science", "Lifestyle", '
        '"Understanding"), "read_time_min" (integer), "body_markdown" (the '
        "article body as GitHub-flavored Markdown, starting with an H1 "
        "'# Title', using ## question-format H2s, no HTML), and \"faq\" (array "
        'of {"question","answer"} objects, answers 1-3 sentences, drawn from '
        "the seed questions provided). Return nothing but the JSON object."
    )


def build_author_user(topic):
    lo, hi = WORD_TARGETS.get(topic["type"], (1100, 1600))
    faq_seed = "\n".join(f"  - {q}" for q in topic.get("faq", []))
    links = ", ".join(topic.get("internal_links", [])) or "(none)"
    return (
        f"Write the article for this topic.\n\n"
        f"TITLE (working): {topic['title']}\n"
        f"TYPE: {topic['type']}  |  SEARCH INTENT: {topic['search_intent']}\n"
        f"PRIMARY KEYWORD: {topic['primary_keyword']}\n"
        f"SECONDARY KEYWORDS: {', '.join(topic.get('secondary_keywords', []))}\n"
        f"TARGET LENGTH: {lo}-{hi} words (completeness over padding).\n\n"
        f"ANGLE: {topic['angle']}\n"
        f"DIFFERENTIATOR: {topic['differentiator']}\n\n"
        f"EVIDENCE FOOTING (cite honestly, respect the limits stated here):\n"
        f"{topic['evidence_footing']}\n\n"
        f"SAFETY FLAG (obey exactly): {topic['safety_flag'] or '(standard care)'}\n"
        f"CRISIS DISCLAIMER LEVEL: {topic['crisis_disclaimer_level']} "
        f"(a crisis-resources box is added automatically at the foot of the "
        f"article; if the level is 'elevated', also include a short in-body "
        f"safety caution where relevant; if 'strict', give NO symptom "
        f"reassurance and route the reader to professional support).\n\n"
        f"SEED FAQ QUESTIONS (answer these in the faq array):\n{faq_seed}\n\n"
        f"INTERNAL LINKS: where natural, link to these related article slugs "
        f"using the exact placeholder form [anchor text](INTERNAL:slug). "
        f"Available slugs: {links}. Always work in a link to "
        f"'when-to-see-a-professional' if it fits.\n\n"
        f"When you mention downloading or opening the app, you may link to "
        f"Nuvin at {APP_STORE_URL}. Do not overdo product mentions; at most "
        f"one or two, and only where genuinely helpful.\n"
    )


def build_translate_system():
    return (
        "You are a professional French localizer for Nuvin, a mental-health / "
        "anxiety-relief app. You localize (not literally machine-translate) an "
        "English article into natural, native French for a French audience.\n\n"
        "RULES:\n"
        "1. Preserve every fact, citation, study reference, number, and safety "
        "caveat exactly. Do not add or remove claims.\n"
        "2. Adapt idioms, examples, tone, the title, and the meta description "
        "so they read as if written in French. France is more skeptical of "
        "American positive-thinking wellness, so keep the tone evidence-forward "
        "and understated, never hyped.\n"
        "3. Localize crisis/help references to France where they appear in "
        "prose (national line 3114, SAMU 15, EU emergency 112). The automatic "
        "footer already handles this, so do not invent US resources.\n"
        "4. NEVER use the em-dash character.\n"
        "5. Keep all [anchor](INTERNAL:slug) link placeholders intact; "
        "translate only the anchor text, keep the slug identical.\n"
        "6. Keep Markdown structure (H1, ## H2s, lists) intact.\n\n"
        "OUTPUT FORMAT: Return ONLY a JSON object with keys: \"title\", "
        '"description", "category" (translate the label), "body_markdown", '
        'and "faq" (array of {"question","answer"} translated). Nothing else.'
    )


def build_translate_user(article_en):
    return (
        "Localize this English article into French. Return the JSON object.\n\n"
        f"ENGLISH TITLE: {article_en['title']}\n"
        f"ENGLISH DESCRIPTION: {article_en['description']}\n"
        f"ENGLISH CATEGORY: {article_en['category']}\n\n"
        f"ENGLISH FAQ (JSON): {json.dumps(article_en['faq'], ensure_ascii=False)}\n\n"
        f"ENGLISH BODY MARKDOWN:\n{article_en['body_markdown']}\n"
    )


# --------------------------------------------------------------------------- #
# Authoring + translating
# --------------------------------------------------------------------------- #
def parse_model_json(raw, where):
    """Models sometimes wrap JSON in ``` fences; strip and parse."""
    txt = raw.strip()
    if txt.startswith("```"):
        txt = re.sub(r"^```[a-zA-Z]*\n", "", txt)
        txt = re.sub(r"\n```$", "", txt.strip())
    try:
        return json.loads(txt)
    except json.JSONDecodeError as e:
        raise RuntimeError(f"{where}: model did not return valid JSON: {e}\n"
                           f"First 300 chars: {txt[:300]}")


def author_english(topic):
    print(f"  Authoring EN: {topic['slug']} ({OPENAI_MODEL})")
    raw = openai_chat(build_author_system(), build_author_user(topic),
                      OPENAI_MODEL, json_mode=True)
    art = parse_model_json(raw, "author_english")
    # sanity + em-dash guard
    art["body_markdown"] = art["body_markdown"].replace("—", ", ")
    art["title"] = art["title"].replace("—", ", ")
    art["description"] = art["description"].replace("—", ", ")
    wc = len(art["body_markdown"].split())
    print(f"    EN done: {wc} words, {len(art.get('faq', []))} FAQ")
    return art


def translate(article_en, lang):
    print(f"  Translating -> {lang} ({OPENAI_TRANSLATE_MODEL})")
    raw = openai_chat(build_translate_system(), build_translate_user(article_en),
                      OPENAI_TRANSLATE_MODEL, json_mode=True)
    art = parse_model_json(raw, f"translate:{lang}")
    for k in ("title", "description", "body_markdown"):
        art[k] = art[k].replace("—", ", ")
    return art


# --------------------------------------------------------------------------- #
# Internal link resolution
# --------------------------------------------------------------------------- #
def resolve_internal_links(markdown, lang, slug_map):
    """Replace [text](INTERNAL:slug) with the real path for that language.
    slug_map: {en_slug: {"en": path, "fr": path}}. If a translation for the
    target language does not exist yet, fall back to the English path so links
    never 404 (they self-heal once the translation is published)."""
    def repl(m):
        anchor, en_slug = m.group(1), m.group(2)
        entry = slug_map.get(en_slug)
        if not entry:
            # Unknown slug (not yet generated). Point at the blog index so it
            # is never a dead link.
            idx = "/blog" if lang == "en" else "/fr/blog"
            return f"[{anchor}]({idx})"
        path = entry.get(lang) or entry.get("en")
        return f"[{anchor}]({path})"
    return re.sub(r"\[([^\]]+)\]\(INTERNAL:([a-z0-9-]+)\)", repl, markdown)


# --------------------------------------------------------------------------- #
# MDX writing
# --------------------------------------------------------------------------- #
def esc_attr(s):
    """Escape a string for a JSX double-quoted attribute."""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def faq_to_jsx(faq):
    items = []
    for f in faq:
        q = esc_attr(f["question"])
        a = esc_attr(f["answer"])
        items.append(f'    {{ question: "{q}", answer: "{a}" }},')
    return "[\n" + "\n".join(items) + "\n  ]"


def build_mdx(article, topic, lang, slug, display_date, iso_date):
    """Produce the MDX file content. The AI body (Markdown) is wrapped inside
    the shared <BlogArticle> component, which supplies schema + crisis footer."""
    read_time = f"{article.get('read_time_min', 5)} {READ_TIME_LABEL[lang]}"
    faq_jsx = faq_to_jsx(article.get("faq", []))
    title = esc_attr(article["title"])
    desc = esc_attr(article["description"])
    category = esc_attr(article["category"])
    meta_title = f"{article['title']} | Nuvin"

    header = (
        "import BlogArticle from '@/components/BlogArticle'\n\n"
        "export const metadata = {\n"
        f"  title: {json.dumps(meta_title, ensure_ascii=False)},\n"
        f"  description: {json.dumps(article['description'], ensure_ascii=False)},\n"
        "  alternates: {\n"
        f"    canonical: 'https://nuvin.app{'/blog/' + slug if lang == 'en' else '/fr/blog/' + slug}',\n"
        "  },\n"
        "}\n\n"
        f'<BlogArticle\n'
        f'  lang="{lang}"\n'
        f'  slug="{slug}"\n'
        f'  title="{title}"\n'
        f'  description="{desc}"\n'
        f'  category="{category}"\n'
        f'  displayDate="{display_date}"\n'
        f'  datePublished="{iso_date}"\n'
        f'  readTime="{read_time}"\n'
        f"  faq={{{faq_jsx}}}\n"
        f">\n\n"
    )
    footer = "\n\n</BlogArticle>\n"
    # The markdown body already starts with an H1; MDX renders it via the
    # mdx-components mapping. Ensure blank lines around it.
    body = article["body_markdown"].strip()
    return header + body + footer


def write_post(article, topic, lang, slug, display_date, iso_date):
    base = BLOG_DIR_EN if lang == "en" else BLOG_DIR_FR
    post_dir = os.path.join(base, slug)
    os.makedirs(post_dir, exist_ok=True)
    path = os.path.join(post_dir, "page.mdx")
    with open(path, "w") as f:
        f.write(build_mdx(article, topic, lang, slug, display_date, iso_date))
    rel = os.path.relpath(path, REPO_ROOT)
    print(f"    wrote {rel}")
    return path


# --------------------------------------------------------------------------- #
# lib/blog.ts registration
# --------------------------------------------------------------------------- #
def slugify(text):
    text = text.lower().strip()
    # strip accents crudely for slugs
    accents = str.maketrans("àâäéèêëîïôöùûüç", "aaaeeeeiioouuuc")
    text = text.translate(accents)
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text


def make_post_object(article, lang, slug, iso_date, display_date, translation_key):
    read_time = f"{article.get('read_time_min', 5)} {READ_TIME_LABEL[lang]}"
    def js(s):
        return json.dumps(s, ensure_ascii=False)
    return (
        "  {\n"
        f"    slug: {js(slug)},\n"
        f"    lang: '{lang}',\n"
        f"    title: {js(article['title'])},\n"
        f"    excerpt: {js(article['description'])},\n"
        f"    date: '{iso_date}',\n"
        f"    displayDate: {js(display_date)},\n"
        f"    readTime: {js(read_time)},\n"
        f"    category: {js(article['category'])},\n"
        f"    translationKey: {js(translation_key)},\n"
        "  },"
    )


def register_posts(post_objects):
    """Insert new post objects into the blogPosts array in lib/blog.ts, right
    after the opening bracket, so newest entries sit on top."""
    with open(LIB_BLOG_PATH) as f:
        content = f.read()
    marker = "export const blogPosts: BlogPost[] = ["
    idx = content.find(marker)
    if idx == -1:
        raise RuntimeError("Could not find blogPosts array in lib/blog.ts")
    insert_at = idx + len(marker)
    block = "\n" + "\n".join(post_objects)
    new_content = content[:insert_at] + block + content[insert_at:]
    with open(LIB_BLOG_PATH, "w") as f:
        f.write(new_content)
    print(f"    registered {len(post_objects)} post(s) in lib/blog.ts")


def existing_slugs_in_lib():
    with open(LIB_BLOG_PATH) as f:
        content = f.read()
    return set(re.findall(r"slug:\s*'([^']+)'", content)) | \
           set(re.findall(r'slug:\s*"([^"]+)"', content))


# --------------------------------------------------------------------------- #
# Display date
# --------------------------------------------------------------------------- #
def display_date_for(lang, d):
    m = MONTHS[lang][d.month - 1]
    if lang == "fr":
        return f"{d.day} {m} {d.year}"
    return f"{m} {d.day}, {d.year}"


# --------------------------------------------------------------------------- #
# Git publishing
# --------------------------------------------------------------------------- #
def git(*args, check=True):
    return subprocess.run(["git", "-C", REPO_ROOT, *args],
                          capture_output=True, text=True, check=check)


def commit_and_push(slugs, live):
    files = ["app/blog", "app/fr/blog", "lib/blog.ts", "content-engine/topics.json"]
    git("add", *files)
    status = git("diff", "--staged", "--name-only").stdout.strip()
    if not status:
        print("  Nothing staged to commit.")
        return
    msg = f"Auto-publish: {', '.join(slugs)} [skip ci]"
    env = os.environ.copy()
    env.update({
        "GIT_AUTHOR_NAME": GIT_AUTHOR_NAME, "GIT_AUTHOR_EMAIL": GIT_AUTHOR_EMAIL,
        "GIT_COMMITTER_NAME": GIT_AUTHOR_NAME, "GIT_COMMITTER_EMAIL": GIT_AUTHOR_EMAIL,
    })
    subprocess.run(["git", "-C", REPO_ROOT, "commit", "-m", msg],
                   check=True, env=env)
    print(f"  committed: {msg}")
    if live:
        subprocess.run(["git", "-C", REPO_ROOT, "push"], check=True)
        print("  pushed (Vercel will deploy)")
    else:
        print("  draft mode: committed locally, not pushed.")


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def load_topics():
    with open(TOPICS_PATH) as f:
        return json.load(f)


def save_topics(doc):
    with open(TOPICS_PATH, "w") as f:
        json.dump(doc, f, indent=2, ensure_ascii=False)


def main():
    ap = argparse.ArgumentParser(description="Nuvin content engine")
    ap.add_argument("--limit", type=int, default=1)
    ap.add_argument("--slug", type=str, default=None)
    ap.add_argument("--lang", action="append", default=None,
                    help="Restrict languages (repeatable). en is always source.")
    ap.add_argument("--dry-run", action="store_true",
                    help="Call the model but write no files, no commit.")
    ap.add_argument("--publish", action="store_true",
                    help="Force live (commit + push) regardless of PUBLISH_MODE.")
    args = ap.parse_args()

    live = args.publish or PUBLISH_MODE == "live"
    langs = args.lang or ["en", "fr"]
    if "en" not in langs:
        langs = ["en"] + langs  # en is always the source

    doc = load_topics()
    topics = doc["topics"]

    # Select topics to process
    if args.slug:
        queue = [t for t in topics if t["slug"] == args.slug]
        if not queue:
            print(f"No topic with slug '{args.slug}'.")
            sys.exit(1)
    else:
        # pending, ordered by stage then original order
        pending = [t for t in topics if t.get("status") == "pending"]
        pending.sort(key=lambda t: (t["stage"],))
        queue = pending[: args.limit]

    if not queue:
        print("No pending topics. All done.")
        return

    # Build a slug map for internal-link resolution across everything already
    # published plus what we produce this run.
    slug_map = {}
    for t in topics:
        if t.get("status") == "publish":
            entry = {"en": f"/blog/{t['slug']}"}
            for lg, ls in (t.get("localized_slugs") or {}).items():
                entry[lg] = f"/{lg}/blog/{ls}"
            slug_map[t["slug"]] = entry

    already = existing_slugs_in_lib()
    had_failures = False

    for topic in queue:
        print(f"\n=== {topic['slug']} (stage {topic['stage']}, "
              f"cluster {topic['cluster']}) ===")
        try:
            today = date.today()
            iso = today.isoformat()

            # 1) author EN
            art_en = author_english(topic)

            # 2) translate to the other languages
            translations = {}
            for lg in langs:
                if lg == "en":
                    continue
                translations[lg] = translate(art_en, lg)

            # 3) figure out per-language slugs (EN keeps topic slug; others get
            #    a localized slug from the translated title)
            slugs_by_lang = {"en": topic["slug"]}
            for lg, art in translations.items():
                slugs_by_lang[lg] = slugify(art["title"]) or f"{topic['slug']}-{lg}"

            # register this topic in the slug map so intra-batch links resolve
            entry = {"en": f"/blog/{topic['slug']}"}
            for lg in translations:
                entry[lg] = f"/{lg}/blog/{slugs_by_lang[lg]}"
            slug_map[topic["slug"]] = entry

            if args.dry_run:
                print(f"  [dry-run] would write EN + {list(translations)} and "
                      f"register in lib/blog.ts; skipping writes.")
                continue

            # 4) write MDX + collect post objects for lib/blog.ts
            post_objects = []
            translation_key = topic["slug"]

            # EN
            body_en = resolve_internal_links(art_en["body_markdown"], "en", slug_map)
            art_en_w = dict(art_en, body_markdown=body_en)
            dd_en = display_date_for("en", today)
            if topic["slug"] in already:
                print(f"  [skip] {topic['slug']} already in lib/blog.ts")
            else:
                write_post(art_en_w, topic, "en", topic["slug"], dd_en, iso)
                post_objects.append(make_post_object(
                    art_en_w, "en", topic["slug"], iso, dd_en, translation_key))

            # other langs
            for lg, art in translations.items():
                slug_lg = slugs_by_lang[lg]
                body_lg = resolve_internal_links(art["body_markdown"], lg, slug_map)
                art_w = dict(art, body_markdown=body_lg)
                dd = display_date_for(lg, today)
                if slug_lg in already:
                    print(f"  [skip] {slug_lg} already in lib/blog.ts")
                    continue
                write_post(art_w, topic, lg, slug_lg, dd, iso)
                post_objects.append(make_post_object(
                    art_w, lg, slug_lg, iso, dd, translation_key))

            if post_objects:
                register_posts(post_objects)

            # 5) mark topic published in topics.json
            topic["status"] = "publish"
            topic["localized_slugs"] = {lg: slugs_by_lang[lg]
                                        for lg in translations}
            topic["generated_at"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            save_topics(doc)
            print(f"  OK: {topic['slug']} published to "
                  f"{['en'] + list(translations)}")

        except Exception as e:
            had_failures = True
            print(f"  FAILED {topic['slug']}: {e}")
            # leave status 'pending' for retry next run
            continue

    # 6) commit (+ push if live), unless dry-run
    if not args.dry_run:
        published = [t["slug"] for t in queue if t.get("status") == "publish"]
        if published:
            commit_and_push(published, live)

    if had_failures:
        sys.exit(1)


if __name__ == "__main__":
    main()
