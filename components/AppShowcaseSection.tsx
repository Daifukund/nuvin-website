'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AppShowcaseSection() {
  return (
    <section className="bg-nuvin-soft py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mascot */}
          <motion.div
            className="order-2 md:order-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 m-auto h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-nuvin-pink-soft/40 blur-2xl" />
              <Image
                src="/nuvin-mascot.png"
                alt="Nuvin, a calm axolotl companion sitting peacefully"
                width={320}
                height={320}
                className="w-56 sm:w-72 h-auto animate-float"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="order-1 md:order-2 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-extrabold uppercase tracking-widest text-nuvin-pink">
              Your calm companion
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-nuvin-navy text-balance">
              A friend who grows with you
            </h2>
            <p className="mt-4 text-lg text-nuvin-navy/70 leading-relaxed">
              Meet your Nuvin. Every time you take a mindful moment, breathe, or
              finish a small habit, your companion grows happier and its cozy
              world comes to life. Building calmer habits finally feels gentle,
              even a little joyful.
            </p>
            <ul className="mt-6 space-y-3 text-left inline-block">
              {[
                'A soothing pet to care for, not another streak to guilt you',
                'Watch your progress bloom instead of counting failures',
                'Small daily wins that add up to real change',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-nuvin-navy/80">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-nuvin-purple text-white text-xs font-black">
                    ✓
                  </span>
                  <span className="font-semibold">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
