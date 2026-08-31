'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from '@/app/blog/posts'

export default function FeaturedBlogPosts() {
  // Get the 2 most recent blog posts
  const featuredPosts = blogPosts.slice(0, 2)

  return (
    <section className="bg-nuvin-soft py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nuvin-navy mb-4">
            Learn to manage anxiety
          </h2>
          <p className="text-xl text-nuvin-navy/70">
            Honest, evidence-based tips and techniques from the Nuvin team
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
              className="bg-white rounded-2xl shadow-nuvin-card ring-1 ring-nuvin-navy/5 p-8 hover:shadow-nuvin-card-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-sm text-nuvin-navy/60 mb-4">
                <span className="bg-nuvin-purple/10 text-nuvin-purple px-3 py-1 rounded-full font-bold">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-nuvin-navy mb-4 leading-tight">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-nuvin-purple transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="text-nuvin-navy/70 mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-nuvin-purple hover:text-nuvin-purple-pressed font-bold transition-colors group"
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
            className="inline-flex items-center px-8 py-4 bg-nuvin-purple hover:bg-nuvin-purple-pressed text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-nuvin-purple"
          >
            View all articles
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
