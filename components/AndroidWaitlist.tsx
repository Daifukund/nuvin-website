'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AndroidWaitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    // For now, just show success - you can integrate with your email service later
    setTimeout(() => {
      setStatus('success')
      setMessage('Thanks! We\'ll notify you when Android launches.')
      setEmail('')
    }, 500)
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto text-center rounded-3xl bg-nuvin-blush/60 px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-nuvin-navy mb-4">
          Want Nuvin on Android?
        </h2>
        <p className="text-lg sm:text-xl text-nuvin-navy/70 mb-8">
          We&apos;re working on it. Join the waitlist to be the first to know when
          Nuvin launches on Android.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white text-nuvin-navy placeholder-nuvin-navy/40 ring-1 ring-nuvin-navy/10 focus:outline-none focus:ring-2 focus:ring-nuvin-purple shadow-sm"
              disabled={status === 'loading' || status === 'success'}
              required
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8 py-4 bg-nuvin-purple hover:bg-nuvin-purple-pressed text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-nuvin-purple disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
            </button>
          </div>

          {message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-sm font-semibold ${
                status === 'success' ? 'text-green-600' : 'text-nuvin-red'
              }`}
            >
              {message}
            </motion.p>
          )}
        </form>

        <p className="text-sm text-nuvin-navy/50 mt-6">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  )
}
