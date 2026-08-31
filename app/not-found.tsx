import Link from 'next/link'
import Image from 'next/image'
import AppStoreButton from '@/components/AppStoreButton'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-nuvin-purple-gradient text-center">
      <div className="max-w-2xl w-full space-y-8">
        <Image
          src="/nuvin-mascot-tired.png"
          alt=""
          width={160}
          height={160}
          className="mx-auto w-32 h-auto"
        />

        <div className="space-y-3">
          <h1 className="text-7xl sm:text-8xl font-extrabold text-white/90">404</h1>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Page not found
          </h2>
          <p className="text-lg sm:text-xl text-white/90">
            This page does not exist, but your calm is still just a tap away.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="/"
            className="px-8 py-4 bg-white text-nuvin-purple font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            ← Back to home
          </Link>
          <AppStoreButton
            href="https://apps.apple.com/us/app/nuvin-anxiety-relief/id6753338724"
            className="drop-shadow-xl"
          />
        </div>

        <div className="pt-8">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-white/85 text-sm">
            <Link href="/blog" className="hover:text-white underline decoration-white/40">Blog</Link>
            <span className="text-white/40" aria-hidden>•</span>
            <Link href="/privacy" className="hover:text-white underline decoration-white/40">Privacy Policy</Link>
            <span className="text-white/40" aria-hidden>•</span>
            <Link href="/terms" className="hover:text-white underline decoration-white/40">Terms of Service</Link>
            <span className="text-white/40" aria-hidden>•</span>
            <a href="mailto:nathan@nuvin.app" className="hover:text-white underline decoration-white/40">Support</a>
          </div>
        </div>
      </div>
    </div>
  )
}
