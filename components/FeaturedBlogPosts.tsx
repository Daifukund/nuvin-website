'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from '@/app/blog/posts'

export default function FeaturedBlogPosts() {
  // Get the 2 most recent blog posts
  const featuredPosts = blogPosts.slice(0, 2)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-white/90 drop-shadow">
            Evidence-based tips and techniques for managing anxiety
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                <span className="bg-nuvin-purple/10 text-nuvin-purple px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-nuvin-purple transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-nuvin-purple hover:text-nuvin-blue font-semibold transition-colors group"
              >
                Read full article
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Blog Posts
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
