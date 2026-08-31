import Link from 'next/link'
import Footer from '@/components/Footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-nuvin-soft">
      {/* Blog Header */}
      <header className="bg-nuvin-purple-gradient py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-4 font-semibold"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Nuvin Blog
          </h1>
          <p className="text-xl text-white/90 mt-2">
            Tips and insights for managing anxiety
          </p>
        </div>
      </header>

      {/* Blog Content */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}
