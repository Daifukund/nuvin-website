import Link from 'next/link'
import AppStoreButton from '@/components/AppStoreButton'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Large 404 */}
        <h1 className="text-9xl sm:text-[12rem] font-bold text-white/20 drop-shadow-2xl">
          404
        </h1>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Page Not Found
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 drop-shadow">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-lg text-white/80 drop-shadow">
            But don't worry—finding calm is just a tap away.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Link
            href="/"
            className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            ← Back to Home
          </Link>

          <AppStoreButton
            href="https://apps.apple.com/us/app/nuvin-anxiety-relief/id6753338724"
            className="drop-shadow-2xl"
          />
        </div>

        {/* Helpful Links */}
        <div className="pt-12">
          <p className="text-white/70 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-white/90">
            <Link href="/blog" className="hover:text-white underline decoration-white/50 hover:decoration-white transition-colors">
              Blog
            </Link>
            <span className="text-white/50">•</span>
            <Link href="/privacy" className="hover:text-white underline decoration-white/50 hover:decoration-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/50">•</span>
            <Link href="/terms" className="hover:text-white underline decoration-white/50 hover:decoration-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/50">•</span>
            <a href="mailto:support@nuvin.app" className="hover:text-white underline decoration-white/50 hover:decoration-white transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
