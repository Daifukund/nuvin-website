export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: '5-minute-breathing-exercises',
    title: '5-Minute Breathing Exercises for Instant Anxiety Relief',
    excerpt: 'Learn powerful breathing techniques that can calm your nervous system in just five minutes. Perfect for moments when anxiety strikes.',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Techniques',
  },
  {
    slug: 'understanding-5-4-3-2-1-grounding',
    title: 'Understanding the 5-4-3-2-1 Grounding Technique',
    excerpt: 'Discover how this simple sensory exercise can anchor you in the present moment and reduce overwhelming feelings of anxiety.',
    date: 'January 12, 2025',
    readTime: '4 min read',
    category: 'Techniques',
  },
  {
    slug: 'using-nuvin-during-panic-attack',
    title: 'How to Use Nuvin During a Panic Attack',
    excerpt: 'A step-by-step guide to using Nuvin when you need it most. Learn how to access immediate relief during moments of crisis.',
    date: 'January 10, 2025',
    readTime: '6 min read',
    category: 'Guide',
  },
]
