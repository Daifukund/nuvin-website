'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Is Nuvin free to use?',
    answer: 'Nuvin offers both free and premium features. Core anxiety relief tools like breathing exercises and grounding techniques are available to all users. Premium features include advanced tracking, personalized insights, and unlimited access to all exercises.',
  },
  {
    question: 'Does Nuvin work offline?',
    answer: 'Yes! All core features work completely offline. Once downloaded, you can access breathing exercises, grounding techniques, and mood tracking without an internet connection. This ensures help is always available when you need it most.',
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Absolutely. Your personal data, journal entries, and mood logs are stored locally on your device. We never sell your data to third parties. For optional cloud features, all data is encrypted in transit and at rest.',
  },
  {
    question: 'Is Nuvin available on Android?',
    answer: 'Nuvin is currently available for iOS (iPhone and iPad). An Android version is in development. Sign up for our email list to be notified when the Android app launches.',
  },
  {
    question: 'Can Nuvin replace therapy?',
    answer: 'No. Nuvin is a wellness tool designed to help manage everyday anxiety, not a replacement for professional mental health care. If you\'re experiencing severe anxiety, panic attacks, or a mental health crisis, please contact a licensed healthcare provider or call 988.',
  },
  {
    question: 'How quickly does Nuvin work?',
    answer: 'Many users report feeling calmer within 2-5 minutes of using the breathing exercises or grounding techniques. Results vary by individual, but the techniques used in Nuvin are evidence-based and clinically proven to reduce anxiety quickly.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/90 drop-shadow">
            Everything you need to know about Nuvin
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl text-nuvin-purple transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
