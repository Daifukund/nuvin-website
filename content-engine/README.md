# Nuvin Content Engine

Automated SEO/GEO content pipeline for the Nuvin anxiety-relief blog.
Authors articles in English, localizes to French, and publishes them by
committing MDX files to this repo (Vercel deploys on push). No WordPress, no
server, no database.

## How it works

1. `topics.json` is the topic bank (49 topics across 8 clusters), each with an
   honest evidence footing, a safety flag, a crisis-disclaimer level, seed FAQ
   questions, and internal links.
2. `generate.py` takes the next pending topic and:
   - authors the English article with OpenAI, following the topic's honesty
     guardrails and safety flag,
   - localizes it to French,
   - writes `app/blog/<slug>/page.mdx` (EN) and `app/fr/blog/<slug>/page.mdx`
     (FR), each wrapping the shared `BlogArticle` component (which injects the
     Article + FAQPage schema and the per-language crisis disclaimer),
   - registers both posts in `lib/blog.ts` (so the sitemap, hreflang, and index
     pages pick them up automatically),
   - marks the topic `publish` in `topics.json`,
   - commits (and, in live mode, pushes) so Vercel deploys.

## Setup

Create a **separate** OpenAI key named `nuvin` (not the Vylo key), then:

```bash
cp content-engine/.env.example content-engine/.env
# edit content-engine/.env and paste OPENAI_API_KEY
```

`.env` is gitignored and must never be committed.

## Run locally

```bash
cd content-engine
python3 generate.py --dry-run            # call the model, write nothing
python3 generate.py --limit 1            # generate 1 topic, EN+FR (draft)
python3 generate.py --slug how-to-stop-a-panic-attack --lang en
python3 generate.py --publish            # commit + push (Vercel deploys)
```

Draft mode (default) writes files and commits locally but does not push.
Set `PUBLISH_MODE=live` in `.env` (or pass `--publish`) to push.

## Automation (GitHub Actions)

`.github/workflows/publish.yml` runs on a schedule (every 2nd day at 08:00 UTC)
and publishes the next pending topic. It needs:

- **Secret** `OPENAI_API_KEY` (repo Settings, Secrets and variables, Actions)
- Optional **Variables**: `OPENAI_MODEL`, `OPENAI_TRANSLATE_MODEL`,
  `PUBLISH_MODE` (defaults to `live` in CI)

The workflow has `permissions: contents: write` so it can commit generated
files back to `main`. Pushing the workflow file itself requires the `workflow`
OAuth scope on your `gh` login (`gh auth refresh -h github.com -s workflow`).

## Safety

This is health (YMYL) content. The crisis-safety disclaimer is baked into the
shared article layout, so every post carries it automatically. Topics flagged
`elevated` or `strict` get extra in-body cautions and stricter editorial rules
(no reassurance, non-diagnostic). Nuvin is a self-help tool, never positioned
as medical care, therapy, or a crisis service.
