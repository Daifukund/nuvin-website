import Link from 'next/link'
import type { Locale } from '@/lib/blog'
import { blogIndexPath } from '@/lib/blog'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import FAQSchema from '@/components/FAQSchema'
import CrisisDisclaimer from '@/components/CrisisDisclaimer'

export interface FAQItem {
  question: string
  answer: string
}

interface BlogArticleProps {
  lang: Locale
  slug: string
  title: string
  description: string
  category: string
  displayDate: string
  datePublished: string // ISO YYYY-MM-DD
  readTime: string
  faq?: FAQItem[]
  children: React.ReactNode
}

// The single wrapper every blog post renders inside. Generated MDX files import
// this and pass their metadata + body as children. It guarantees, on every
// post, in every language: Article schema, optional FAQPage schema (GEO),
// a consistent header, and the crisis-safety disclaimer.
export default function BlogArticle({
  lang,
  slug,
  title,
  description,
  category,
  displayDate,
  datePublished,
  readTime,
  faq,
  children,
}: BlogArticleProps) {
  const backLabel = lang === 'fr' ? '← Retour au blog' : '← Back to blog'

  return (
    <>
      <BlogArticleSchema
        title={title}
        description={description}
        datePublished={datePublished}
        slug={slug}
      />
      {faq && faq.length > 0 && <FAQSchema items={faq} />}

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12">
            <Link
              href={blogIndexPath(lang)}
              className="inline-flex items-center text-nuvin-purple hover:text-nuvin-blue font-medium mb-6 transition-colors"
            >
              {backLabel}
            </Link>

            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="bg-nuvin-purple/10 text-nuvin-purple px-3 py-1 rounded-full font-medium">
                  {category}
                </span>
                <span>{displayDate}</span>
                <span aria-hidden>&bull;</span>
                <span>{readTime}</span>
              </div>
            </div>

            <article className="blog-body">{children}</article>

            <CrisisDisclaimer lang={lang} />
          </div>
        </div>
      </div>
    </>
  )
}
