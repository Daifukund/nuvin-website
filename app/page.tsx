import HeroSection from '@/components/HeroSection'
import SocialProof from '@/components/SocialProof'
import FeaturesSection from '@/components/FeaturesSection'
import AppShowcaseSection from '@/components/AppShowcaseSection'
import FeaturedBlogPosts from '@/components/FeaturedBlogPosts'
import FAQ from '@/components/FAQ'
import AndroidWaitlist from '@/components/AndroidWaitlist'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <AppShowcaseSection />
      <FeaturedBlogPosts />
      <FAQ />
      <AndroidWaitlist />
      <FinalCTA />
      <Footer />
    </div>
  )
}
