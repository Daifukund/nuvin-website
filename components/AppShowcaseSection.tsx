'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AppShowcaseSection() {
  return (
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
                <span className="text-2xl" aria-hidden="true">✓</span>
                <span>Works completely offline</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">✓</span>
                <span>Private & secure—your data stays on your device</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">✓</span>
                <span>Track your progress with mood logging</span>
              </li>
            </ul>
          </motion.div>

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
  )
}
