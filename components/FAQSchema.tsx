import Script from 'next/script'

interface FAQItem {
  question: string
  answer: string
}

// Emits FAQPage JSON-LD. Google can show these as rich results, and AI answer
// engines (ChatGPT, Perplexity) lift the Q&A pairs directly, which is one of
// the highest-leverage GEO signals for how-to / anxiety-relief content.
export default function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
