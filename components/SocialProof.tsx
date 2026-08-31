'use client'

import { motion } from 'framer-motion'

interface Item {
  value: string
  label: string
  icon: string
}

// Honest, verifiable trust signals about how the app actually works,
// not fabricated user/rating counts.
const items: Item[] = [
  { icon: '⏱️', value: '~2 min', label: 'to feel calmer' },
  { icon: '🔬', value: '7 tools', label: 'science-backed techniques' },
  { icon: '📶', value: 'Offline', label: 'works with no signal' },
  { icon: '🔓', value: 'No login', label: 'open and start instantly' },
]

export default function SocialProof() {
  return (
    <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              className="flex flex-col items-center text-center rounded-2xl bg-nuvin-blush/60 px-4 py-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="text-3xl mb-2" aria-hidden="true">{it.icon}</div>
              <div className="text-2xl font-extrabold text-nuvin-navy">{it.value}</div>
              <div className="text-sm text-nuvin-navy/70 font-semibold mt-0.5">{it.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
