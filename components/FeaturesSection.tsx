'use client'

import { motion } from 'framer-motion'
import FeatureCard from '@/components/FeatureCard'

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

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Find Your Calm
          </h2>
          <p className="text-xl text-white/90 drop-shadow max-w-2xl mx-auto">
            Proven techniques to help you manage anxiety in moments that matter most
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon="🫁"
              title="Guided Breathing"
              description="Box breathing and calming exercises designed to slow your heart rate and bring immediate relief"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon="🌍"
              title="Grounding Techniques"
              description="5-4-3-2-1 sensory method to anchor you in the present moment and reduce overwhelming feelings"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon="💪"
              title="Physical Reset"
              description="Shake, stretch, and release tension from your body with guided movement exercises"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
