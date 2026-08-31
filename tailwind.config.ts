import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette from the Nuvin app (Colors.swift)
        'nuvin-purple': '#9747ff',
        'nuvin-purple-pressed': '#8537e8',
        'nuvin-navy': '#2c2a60',
        'nuvin-pink': '#ff73a9',
        'nuvin-pink-soft': '#ffb6d9',
        'nuvin-blush': '#fff0f5',
        'nuvin-red': '#ff3b30',
        'nuvin-gold': '#ffb800',
        'nuvin-orange': '#ff9500',
        // legacy aliases kept so existing blog components still compile
        'nuvin-blue': '#6bb8ff',
      },
      backgroundImage: {
        'nuvin-purple-gradient':
          'linear-gradient(135deg, #9747ff 0%, #7c3aed 100%)',
        'nuvin-soft': 'linear-gradient(180deg, #f8f6ff 0%, #ffffff 100%)',
      },
      fontFamily: {
        sans: [
          'var(--font-nunito)',
          'Nunito',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        'nuvin-card': '0 4px 24px rgba(44, 42, 96, 0.08)',
        'nuvin-card-lg': '0 12px 40px rgba(44, 42, 96, 0.12)',
        'nuvin-purple': '0 10px 30px rgba(151, 71, 255, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
