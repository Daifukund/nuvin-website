'use client'

import { motion } from 'framer-motion'

interface Technique {
  name: string
  desc: string
  icon: string
  color: string
}

// The 7 relief techniques exactly as they appear in the app
// ("Relief Techniques, scientifically validated tools for calm").
const techniques: Technique[] = [
  { name: 'Breathing', desc: 'Guided box breathing to calm your body fast.', icon: '🫧', color: '#6bb8ff' },
  { name: 'Grounding', desc: 'Break racing thoughts with your five senses.', icon: '🌱', color: '#4caf7d' },
  { name: 'Physical Reset', desc: 'Release built-up tension through movement.', icon: '🤸', color: '#ff9500' },
  { name: 'Zoom Out', desc: 'Shift perspective and shrink the worry.', icon: '🔭', color: '#9747ff' },
  { name: 'Quick Dump', desc: 'Empty your thoughts onto the page in 60 seconds.', icon: '📝', color: '#ff73a9' },
  { name: 'Reframe Stress', desc: 'Change the story your mind is telling you.', icon: '🔄', color: '#6bb8ff' },
  { name: 'Emotion Reset', desc: 'Name what you feel, then heal and grow.', icon: '💗', color: '#ff73a9' },
]

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-extrabold uppercase tracking-widest text-nuvin-purple">
            Relief techniques
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-nuvin-navy text-balance">
            Proven ways to relax, instantly
          </h2>
          <p className="mt-4 text-lg text-nuvin-navy/70 leading-relaxed">
            Seven scientifically grounded tools, each built for a different kind
            of overwhelm. Pick what fits the moment and feel the shift in
            minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techniques.map((t, i) => (
            <motion.div
              key={t.name}
              className="group rounded-2xl bg-white p-6 shadow-nuvin-card ring-1 ring-nuvin-navy/5 hover:shadow-nuvin-card-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ backgroundColor: `${t.color}22` }}
                aria-hidden="true"
              >
                {t.icon}
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-nuvin-navy">{t.name}</h3>
              <p className="mt-2 text-nuvin-navy/70 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}

          {/* Emotion Reset spans nicely; add a soft closing card */}
          <motion.div
            className="rounded-2xl bg-nuvin-purple-gradient p-6 text-white shadow-nuvin-purple flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-extrabold">All of it, offline</h3>
            <p className="mt-2 text-white/90 leading-relaxed">
              Every technique works with no signal and no account. Your calm is
              always one tap away.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
