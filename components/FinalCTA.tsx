'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AppStoreButton from '@/components/AppStoreButton'

export default function FinalCTA() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        className="relative max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] bg-nuvin-purple-gradient px-6 py-16 text-center shadow-nuvin-purple"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-nuvin-pink/20 blur-3xl" />

        <div className="relative">
          <Image
            src="/nuvin-mascot-happy.png"
            alt=""
            width={140}
            height={140}
            className="mx-auto w-28 h-auto animate-float"
          />
          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white text-balance">
            Your calm is one tap away
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Download Nuvin free and take your first calming moment today. Your
            companion is waiting.
          </p>
          <div className="mt-9 flex justify-center">
            <AppStoreButton
              href="https://apps.apple.com/us/app/nuvin-anxiety-relief/id6753338724"
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
