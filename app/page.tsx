import AppStoreButton from '@/components/AppStoreButton'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <div className="space-y-8 sm:space-y-12">
          {/* App Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg tracking-tight">
            Nuvin
          </h1>

          {/* Tagline */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
              Anxiety Relief
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 drop-shadow max-w-2xl mx-auto leading-relaxed px-4">
              Find calm in moments of anxiety. Instant relief through breathing, grounding, and reset exercises.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-8">
            <AppStoreButton
              href="https://apps.apple.com/us/app/nuvin-anxiety-relief/id6753338724"
              className="drop-shadow-lg"
            />
          </div>

          {/* Optional: Privacy & Support Links */}
          <div className="pt-8 sm:pt-12 space-x-6 text-sm text-white/80">
            <a
              href="mailto:support@nuvin.app"
              className="hover:text-white transition-colors underline decoration-white/50 hover:decoration-white"
            >
              Support
            </a>
            <span className="text-white/50">•</span>
            <a
              href="mailto:privacy@nuvin.app"
              className="hover:text-white transition-colors underline decoration-white/50 hover:decoration-white"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
