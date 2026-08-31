import Link from 'next/link'
import Footer from '@/components/Footer'

export default function FrBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-white/80 transition-colors mb-4"
          >
            ← Accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Blog Nuvin
          </h1>
          <p className="text-xl text-white/90 drop-shadow mt-2">
            Conseils et ressources pour gérer l&apos;anxiété
          </p>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}
