'use client'

import { motion } from 'framer-motion'
import AppStoreButton from '@/components/AppStoreButton'

export default function FinalCTA() {
  return (
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
  )
}
