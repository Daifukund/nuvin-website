import Script from 'next/script'

interface BlogArticleSchemaProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  slug: string
}

export default function BlogArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author = 'Nuvin',
  slug,
}: BlogArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://nuvin.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nuvin',
      url: 'https://nuvin.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nuvin.app/og-image.png',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nuvin.app/blog/${slug}`,
    },
    image: 'https://nuvin.app/og-image.png',
  }

  return (
    <Script
      id={`article-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
