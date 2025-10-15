import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700 mb-6">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-nuvin-purple pl-6 py-2 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">
        {children}
      </strong>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-nuvin-purple hover:text-nuvin-blue underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  }
}
