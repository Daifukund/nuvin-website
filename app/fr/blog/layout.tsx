import Link from 'next/link'
import Footer from '@/components/Footer'

export default function FrBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-nuvin-soft">
      <header className="bg-nuvin-purple-gradient py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-4 font-semibold"
          >
            ← Accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Blog Nuvin
          </h1>
          <p className="text-xl text-white/90 mt-2">
            Conseils et ressources pour gérer l&apos;anxiété
          </p>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}
