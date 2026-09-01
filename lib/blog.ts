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
