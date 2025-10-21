'use client'

import { motion } from 'framer-motion'

interface StatProps {
  value: string
  label: string
  icon: string
}

const Stat = ({ value, label, icon }: StatProps) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-5xl mb-2" aria-hidden="true">{icon}</div>
    <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-1">
      {value}
    </div>
    <div className="text-lg text-white/90 drop-shadow">
      {label}
    </div>
  </motion.div>
)

export default function SocialProof() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          <Stat value="4.8★" label="App Store Rating" icon="⭐" />
          <Stat value="10,000+" label="Active Users" icon="👥" />
          <Stat value="50,000+" label="Calming Sessions" icon="🧘" />
        </div>
      </div>
    </section>
  )
}
