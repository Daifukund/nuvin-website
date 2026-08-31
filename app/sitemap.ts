import { MetadataRoute } from 'next'
import {
  blogPosts,
  getAlternates,
  postPath,
  blogIndexPath,
  LOCALES,
} from '@/lib/blog'

const baseUrl = 'https://nuvin.app'

// Auto-generated from lib/blog.ts. New posts appear here automatically the
// moment the content engine adds them to blogPosts, with hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogIndexes: MetadataRoute.Sitemap = LOCALES.map((lang) => ({
    url: `${baseUrl}${blogIndexPath(lang)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const postPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}${postPath(post)}`,
    lastModified: `${post.date}T00:00:00.000Z`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: getAlternates(post.translationKey, baseUrl),
    },
  }))

  return [...staticPages, ...blogIndexes, ...postPages]
}
