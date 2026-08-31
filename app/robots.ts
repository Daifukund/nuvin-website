import { MetadataRoute } from 'next'

// GEO / AI-answer-engine optimization: explicitly welcome the major AI
// crawlers so ChatGPT, Claude, Perplexity, and Google's AI Overviews can read
// and cite Nuvin's anxiety-relief content. Search bots (Googlebot, Bingbot)
// are covered by the '*' rule.
const AI_CRAWLERS = [
  'GPTBot', // OpenAI training
  'OAI-SearchBot', // ChatGPT search
  'ChatGPT-User', // ChatGPT live browsing
  'ClaudeBot', // Anthropic training
  'Claude-Web', // Claude browsing
  'anthropic-ai',
  'PerplexityBot', // Perplexity
  'Perplexity-User',
  'Google-Extended', // Google Gemini / AI Overviews
  'Applebot-Extended', // Apple Intelligence
  'CCBot', // Common Crawl (feeds many models)
  'cohere-ai',
  'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: 'https://nuvin.app/sitemap.xml',
  }
}
