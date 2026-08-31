// Backwards-compatible shim. The real source of truth is lib/blog.ts.
// The existing English blog index imports { blogPosts } from here; we keep
// that working by re-exporting the English posts in the original shape.

import { getPostsByLang, type BlogPost as FullBlogPost } from '@/lib/blog'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = getPostsByLang('en').map(
  (p: FullBlogPost) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.displayDate,
    readTime: p.readTime,
    category: p.category,
  })
)
