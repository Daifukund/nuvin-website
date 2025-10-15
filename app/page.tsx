import AppStoreButton from '@/components/AppStoreButton'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
