// Single source of truth for all blog posts, in every language.
//
// The content engine (generate.py) appends entries here. Everything else
// derives from this file: the /blog and /fr/blog index pages, the sitemap
// (with hreflang), and the internal link resolver. Never hand-edit the
// ordering logic below; just add post objects to `blogPosts`.

export type Locale = 'en' | 'fr'

export const LOCALES: Locale[] = ['en', 'fr']
export const DEFAULT_LOCALE: Locale = 'en'

export interface BlogPost {
  /** URL slug for this language (localized, not shared across languages). */
  slug: string
  /** Which language this post is written in. */
  lang: Locale
  title: string
  excerpt: string
  /** ISO date (YYYY-MM-DD) for machines. */
  date: string
  /** Human-facing display date, already localized. */
  displayDate: string
  readTime: string
  category: string
  /**
   * Stable key shared by all language versions of the SAME article.
   * Used to build hreflang alternates and to link translations together.
   * e.g. both the EN and FR version of the breathing article use
   * translationKey: '5-minute-breathing-exercises'.
   */
  translationKey: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-do-i-wake-up-at-3am",
    lang: 'en',
    title: "Why Do I Wake Up at 3am With Anxiety? What to Do in the Moment",
    excerpt: "Waking at 3am with anxiety can feel alarming. Learn why it happens, how body rhythms may play a role, and a calm reset to try tonight.",
    date: '2026-09-09',
    displayDate: "September 9, 2026",
    readTime: "8 min read",
    category: "Sleep",
    translationKey: "why-do-i-wake-up-at-3am",
  },
  {
    slug: "pourquoi-est-ce-que-je-me-reveille-a-3-h-avec-de-l-anxiete-que-faire-sur-le-moment",
    lang: 'fr',
    title: "Pourquoi est-ce que je me réveille à 3 h avec de l’anxiété ? Que faire sur le moment",
    excerpt: "Se réveiller à 3 h avec de l’anxiété peut être angoissant. Découvrez pourquoi cela peut arriver, quel rôle les rythmes de l’organisme peuvent jouer et comment retrouver son calme dès ce soir.",
    date: '2026-09-09',
    displayDate: "9 septembre 2026",
    readTime: "5 min de lecture",
    category: "Sommeil",
    translationKey: "why-do-i-wake-up-at-3am",
  },
  {
    slug: "quiet-racing-thoughts-at-night",
    lang: 'en',
    title: "How to Quiet Racing Thoughts at Night: A Lights-Off Routine for Sleep",
    excerpt: "Learn a lights-off routine using grounding, slower breathing, and a mental “file it away” step to quiet racing thoughts at night and settle calmly for sleep.",
    date: '2026-09-07',
    displayDate: "September 7, 2026",
    readTime: "9 min read",
    category: "Sleep",
    translationKey: "quiet-racing-thoughts-at-night",
  },
  {
    slug: "comment-calmer-les-pensees-qui-s-emballent-la-nuit-une-routine-dans-le-noir-pour-dormir",
    lang: 'fr',
    title: "Comment calmer les pensées qui s’emballent la nuit : une routine dans le noir pour dormir",
    excerpt: "Découvrez une routine à pratiquer dans le noir, fondée sur l’ancrage, une respiration plus lente et une étape pour « mettre de côté » les pensées, afin de calmer le flot mental le soir et de vous préparer sereinement au sommeil.",
    date: '2026-09-07',
    displayDate: "7 septembre 2026",
    readTime: "5 min de lecture",
    category: "Sommeil",
    translationKey: "quiet-racing-thoughts-at-night",
  },
  {
    slug: "nocturnal-panic-attacks",
    lang: 'en',
    title: "Nocturnal Panic Attacks: What to Do When You Wake Up in Panic",
    excerpt: "Woke up in a panic? Try a quiet, in-bed longer-exhale breathing routine to settle a night panic attack, then use a gentle plan to return to sleep tonight.",
    date: '2026-09-05',
    displayDate: "September 5, 2026",
    readTime: "7 min read",
    category: "Panic",
    translationKey: "nocturnal-panic-attacks",
  },
  {
    slug: "crises-de-panique-nocturnes-que-faire-lorsque-vous-vous-reveillez-en-pleine-panique",
    lang: 'fr',
    title: "Crises de panique nocturnes : que faire lorsque vous vous réveillez en pleine panique",
    excerpt: "Vous vous êtes réveillé en pleine panique ? Essayez une respiration calme, au lit, avec une expiration plus longue pour apaiser la crise, puis suivez un plan simple pour vous rendormir ce soir.",
    date: '2026-09-05',
    displayDate: "5 septembre 2026",
    readTime: "5 min de lecture",
    category: "Panique",
    translationKey: "nocturnal-panic-attacks",
  },
  {
    slug: "panic-attack-vs-anxiety-attack",
    lang: 'en',
    title: "Panic Attack vs. Anxiety Attack: Key Differences",
    excerpt: "Learn the practical difference between panic attacks and anxiety attacks, why the line can blur, and what to do when intense symptoms hit feel overwhelming.",
    date: '2026-09-03',
    displayDate: "September 3, 2026",
    readTime: "8 min read",
    category: "Understanding",
    translationKey: "panic-attack-vs-anxiety-attack",
  },
  {
    slug: "crise-de-panique-ou-crise-d-anxiete-les-principales-differences",
    lang: 'fr',
    title: "Crise de panique ou crise d’anxiété : les principales différences",
    excerpt: "Comprenez la différence concrète entre une crise de panique et une crise d’anxiété, pourquoi la frontière peut être floue et que faire lorsque l’intensité des symptômes devient difficile à gérer.",
    date: '2026-09-03',
    displayDate: "3 septembre 2026",
    readTime: "5 min de lecture",
    category: "Comprendre",
    translationKey: "panic-attack-vs-anxiety-attack",
  },
  {
    slug: "54321-grounding-when-panicking",
    lang: 'en',
    title: "The 5-4-3-2-1 Grounding Technique: How to Do It When You’re Panicking",
    excerpt: "Learn the 5-4-3-2-1 grounding technique for panic, with simple fallback steps for when your mind goes blank or your surroundings feel limited right now.",
    date: '2026-09-01',
    displayDate: "September 1, 2026",
    readTime: "7 min read",
    category: "Panic",
    translationKey: "54321-grounding-when-panicking",
  },
  {
    slug: "la-technique-d-ancrage-5-4-3-2-1-comment-l-utiliser-en-cas-de-panique",
    lang: 'fr',
    title: "La technique d’ancrage 5-4-3-2-1 : comment l’utiliser en cas de panique",
    excerpt: "Découvrez la technique d’ancrage 5-4-3-2-1 pour faire face à la panique, avec des solutions simples si votre esprit se vide ou si vos possibilités d’observation sont limitées sur le moment.",
    date: '2026-09-01',
    displayDate: "1 septembre 2026",
    readTime: "5 min de lecture",
    category: "Panique",
    translationKey: "54321-grounding-when-panicking",
  },
  {
    slug: "you-dont-have-to-calm-down-instantly",
    lang: 'en',
    title: "A Panic Attack Ends on Its Own: Stop Forcing Calm and Let the Wave Pass",
    excerpt: "Panic feels urgent, but it is self-limiting. Learn a gentle way to stop fighting the wave, let it peak, and know when to seek support if needed.",
    date: '2026-09-01',
    displayDate: "September 1, 2026",
    readTime: "7 min read",
    category: "Panic",
    translationKey: "you-dont-have-to-calm-down-instantly",
  },
  {
    slug: "une-attaque-de-panique-s-arrete-d-elle-meme-cessez-de-forcer-le-calme-et-laissez-la-vague-passer",
    lang: 'fr',
    title: "Une attaque de panique s’arrête d’elle-même : cessez de forcer le calme et laissez la vague passer",
    excerpt: "La panique donne un sentiment d’urgence, mais elle est limitée dans le temps. Découvrez une manière douce de cesser de lutter contre la vague, de la laisser atteindre son pic et de savoir quand demander de l’aide si nécessaire.",
    date: '2026-09-01',
    displayDate: "1 septembre 2026",
    readTime: "5 min de lecture",
    category: "Panique",
    translationKey: "you-dont-have-to-calm-down-instantly",
  },
  {
    slug: "how-to-stop-a-panic-attack",
    lang: 'en',
    title: "How to Stop a Panic Attack: A Step-by-Step Script for Right Now",
    excerpt: "A gentle, step-by-step box breathing and 5-4-3-2-1 grounding script to calm a panic attack now, plus clear guidance on when to seek care during sudden anxiety.",
    date: '2026-08-31',
    displayDate: "August 31, 2026",
    readTime: "9 min read",
    category: "Panic",
    translationKey: "how-to-stop-a-panic-attack",
  },
  {
    slug: "comment-arreter-une-attaque-de-panique-un-guide-etape-par-etape-a-suivre-maintenant",
    lang: 'fr',
    title: "Comment arrêter une attaque de panique : un guide étape par étape à suivre maintenant",
    excerpt: "Un guide doux, étape par étape, combinant la respiration en carré et l’ancrage 5-4-3-2-1 pour apaiser une attaque de panique maintenant, avec des indications claires sur les situations qui nécessitent des soins face à une anxiété soudaine.",
    date: '2026-08-31',
    displayDate: "31 août 2026",
    readTime: "5 min de lecture",
    category: "Panique",
    translationKey: "how-to-stop-a-panic-attack",
  },
  {
    slug: '5-minute-breathing-exercises',
    lang: 'en',
    title: '5-Minute Breathing Exercises for Instant Anxiety Relief',
    excerpt:
      'Learn powerful breathing techniques that can calm your nervous system in just five minutes. Perfect for moments when anxiety strikes.',
    date: '2025-10-15',
    displayDate: 'October 15, 2025',
    readTime: '5 min read',
    category: 'Techniques',
    translationKey: '5-minute-breathing-exercises',
  },
  {
    slug: 'understanding-5-4-3-2-1-grounding',
    lang: 'en',
    title: 'Understanding the 5-4-3-2-1 Grounding Technique',
    excerpt:
      'Discover how this simple sensory exercise can anchor you in the present moment and reduce overwhelming feelings of anxiety.',
    date: '2025-10-12',
    displayDate: 'October 12, 2025',
    readTime: '4 min read',
    category: 'Techniques',
    translationKey: 'understanding-5-4-3-2-1-grounding',
  },
  {
    slug: 'using-nuvin-during-panic-attack',
    lang: 'en',
    title: 'How to Use Nuvin During a Panic Attack',
    excerpt:
      'A step-by-step guide to using Nuvin when you need it most. Learn how to access immediate relief during moments of crisis.',
    date: '2025-10-10',
    displayDate: 'October 10, 2025',
    readTime: '6 min read',
    category: 'Guide',
    translationKey: 'using-nuvin-during-panic-attack',
  },
]

/** All posts for one language, newest first. */
export function getPostsByLang(lang: Locale): BlogPost[] {
  return blogPosts
    .filter((p) => p.lang === lang)
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** Find one post by its (language-specific) slug within a language. */
export function getPost(lang: Locale, slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.lang === lang && p.slug === slug)
}

/**
 * The public URL path for a post, e.g. '/blog/foo' (en) or '/fr/blog/foo' (fr).
 * English (the default locale) is served without a language prefix.
 */
export function postPath(post: Pick<BlogPost, 'lang' | 'slug'>): string {
  return post.lang === DEFAULT_LOCALE
    ? `/blog/${post.slug}`
    : `/${post.lang}/blog/${post.slug}`
}

/** The blog index path for a language: '/blog' (en) or '/fr/blog' (fr). */
export function blogIndexPath(lang: Locale): string {
  return lang === DEFAULT_LOCALE ? '/blog' : `/${lang}/blog`
}

/**
 * hreflang alternates for a given article, keyed by language code, mapping to
 * absolute URLs. Includes every language version that exists for the article.
 */
export function getAlternates(
  translationKey: string,
  baseUrl = 'https://nuvin.app'
): Record<string, string> {
  const alternates: Record<string, string> = {}
  for (const post of blogPosts) {
    if (post.translationKey === translationKey) {
      alternates[post.lang] = `${baseUrl}${postPath(post)}`
    }
  }
  return alternates
}
