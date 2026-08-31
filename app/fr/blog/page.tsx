import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostsByLang, postPath } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog - Conseils et techniques anti-anxiété',
  description:
    "Découvrez des techniques efficaces pour gérer l'anxiété, avec les conseils de l'équipe Nuvin.",
  alternates: {
    canonical: 'https://nuvin.app/fr/blog',
    languages: {
      en: 'https://nuvin.app/blog',
      fr: 'https://nuvin.app/fr/blog',
    },
  },
}

export default function FrBlogPage() {
  const posts = getPostsByLang('fr')

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {posts.length === 0 ? (
          <p className="text-nuvin-navy/70 text-lg">
            Les premiers articles arrivent bientôt.
          </p>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="bg-nuvin-purple/10 text-nuvin-purple px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span>{post.displayDate}</span>
                  <span aria-hidden>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-nuvin-purple transition-colors">
                  <Link href={postPath(post)}>{post.title}</Link>
                </h2>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={postPath(post)}
                  className="inline-flex items-center text-nuvin-purple hover:text-nuvin-blue font-semibold transition-colors"
                >
                  Lire la suite →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
