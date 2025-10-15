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
        'nuvin-purple': '#9b59b6',
        'nuvin-blue': '#6c8ef5',
        'nuvin-pink': '#e685c3',
      },
      backgroundImage: {
        'nuvin-gradient': 'linear-gradient(135deg, #6c8ef5 0%, #9b59b6 50%, #e685c3 100%)',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
