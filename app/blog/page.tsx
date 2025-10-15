import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from './posts'

export const metadata: Metadata = {
  title: 'Blog - Anxiety Relief Tips & Techniques',
  description: 'Learn effective techniques and strategies for managing anxiety with insights from the Nuvin team.',
}

export default function BlogPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-white hover:text-white/80 transition-colors mb-8"
        >
          ← Back to Home
        </Link>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span className="bg-nuvin-purple/10 text-nuvin-purple px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-nuvin-purple transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-nuvin-purple hover:text-nuvin-blue font-semibold transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
