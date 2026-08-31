'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Shot {
  src: string
  caption: string
  alt: string
}

// Real App Store screenshots with the app's own tagline captions.
const shots: Shot[] = [
  { src: '/screenshot-home.jpg', caption: 'Calm your mind in 2 minutes', alt: 'Nuvin home screen with the axolotl companion in a cozy room and a Calm Now button' },
  { src: '/screenshot-techniques.jpg', caption: 'Proven methods to relax instantly', alt: 'Relief Techniques list: Breathing, Grounding, Physical Reset, Zoom Out, Quick Dump, Reframe Stress, Emotion Reset' },
  { src: '/screenshot-breathing.jpg', caption: 'Take a moment to breathe', alt: 'Guided box breathing screen with the axolotl mascot' },
  { src: '/screenshot-emotion.jpg', caption: 'Find your calm today', alt: 'Emotion Reset screen asking what are you feeling with emotion choices' },
  { src: '/screenshot-routine.jpg', caption: 'Personalized daily habits', alt: 'Daily Routine screen with calming habit goals and progress' },
]

export default function ScreenshotGallery() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-extrabold uppercase tracking-widest text-nuvin-purple">
            Inside the app
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-nuvin-navy text-balance">
            Designed to feel calm, not clinical
          </h2>
        </div>

        <div className="mt-14 flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory sm:justify-center sm:flex-wrap sm:overflow-visible">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              className="snap-center flex-none w-56 sm:w-52"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="overflow-hidden rounded-3xl shadow-nuvin-card-lg ring-1 ring-nuvin-navy/5">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={462}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-bold text-nuvin-navy/70">
                {s.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
