'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AppStoreButton from '@/components/AppStoreButton'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Purple brand panel, echoing the App Store screenshots */}
      <div className="bg-nuvin-purple-gradient">
        {/* soft decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-nuvin-pink/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Copy */}
            <motion.div
              className="text-center lg:text-left"
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-sm"
              >
                <Image src="/nuvin-icon.png" alt="" width={22} height={22} className="rounded-md" />
                Nuvin, anxiety relief
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight text-balance"
              >
                Calm your mind in 2 minutes
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Instant, science-backed relief for anxious moments. Breathe,
                ground, and reset in under two minutes, with a gentle companion
                who grows as you build calmer habits.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <AppStoreButton
                  href="https://apps.apple.com/us/app/nuvin-anxiety-relief/id6753338724"
                  className="drop-shadow-xl"
                />
                <span className="text-white/80 text-sm font-semibold">
                  Free to download &bull; iPhone &bull; Works offline
                </span>
              </motion.div>
            </motion.div>

            {/* Mascot */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10 m-auto h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-white/20 blur-2xl" />
                <Image
                  src="/nuvin-mascot-happy.png"
                  alt="Nuvin, a cheerful axolotl mascot celebrating"
                  width={380}
                  height={380}
                  priority
                  className="w-64 sm:w-80 lg:w-[380px] h-auto animate-float drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curved transition into the white body */}
      <div className="h-10 sm:h-16 bg-nuvin-purple-gradient">
        <div className="h-full w-full rounded-t-[2.5rem] bg-white" />
      </div>
    </section>
  )
}
