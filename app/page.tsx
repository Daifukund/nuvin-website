'use client'

import { motion } from 'framer-motion'
import AppStoreButton from '@/components/AppStoreButton'
import FeatureCard from '@/components/FeatureCard'
import Footer from '@/components/Footer'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            className="space-y-8 sm:space-y-12"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl tracking-tight"
              variants={fadeInUp}
            >
              Nuvin
            </motion.h1>

            <motion.div className="space-y-3 sm:space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
                Anxiety Relief
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/95 drop-shadow-md max-w-3xl mx-auto leading-relaxed px-4">
                Find calm in moments of anxiety. Instant relief through breathing, grounding, and reset exercises.
              </p>
            </motion.div>

            <motion.div className="pt-6 sm:pt-10" variants={fadeInUp}>
              <AppStoreButton
                href="https://apps.apple.com/us/app/nuvin-anxiety-relief/id6753338724"
                className="drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Find Your Calm
            </h2>
            <p className="text-xl text-white/90 drop-shadow max-w-2xl mx-auto">
              Proven techniques to help you manage anxiety in moments that matter most
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <FeatureCard
                icon="🫁"
                title="Guided Breathing"
                description="Box breathing and calming exercises designed to slow your heart rate and bring immediate relief"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard
                icon="🌍"
                title="Grounding Techniques"
                description="5-4-3-2-1 sensory method to anchor you in the present moment and reduce overwhelming feelings"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard
                icon="💪"
                title="Physical Reset"
                description="Shake, stretch, and release tension from your body with guided movement exercises"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center md:text-left space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                Relief in Your Pocket
              </h2>
              <p className="text-xl text-white/90 drop-shadow leading-relaxed">
                Access powerful anxiety relief tools whenever you need them. Nuvin works offline, so help is always available—even without an internet connection.
              </p>
              <ul className="space-y-4 text-lg text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Works completely offline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Private & secure—your data stays on your device</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Track your progress with mood logging</span>
                </li>
              </ul>
            </motion.div>

            {/* App Screenshot */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-sm">
                <Image
                  src="/app-screenshot-dashboard.png"
                  alt="Nuvin app dashboard showing SOS button, mood tracking, and anxiety relief tools"
                  width={630}
                  height={1360}
                  className="rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Ready to Find Calm?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 drop-shadow max-w-2xl mx-auto">
            Join thousands finding peace with Nuvin. Download now and start your journey to calmer days.
          </p>
          <div className="pt-4">
            <AppStoreButton
              href="https://apps.apple.com/us/app/nuvin-anxiety-relief/id6753338724"
              className="drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
