'use client'

import { motion } from 'framer-motion'
import AppStoreButton from '@/components/AppStoreButton'

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

export default function HeroSection() {
  return (
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
  )
}
