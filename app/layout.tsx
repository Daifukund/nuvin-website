import type { Metadata, Viewport } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const title = 'Nuvin - Anxiety Relief'
const description = 'Find calm in moments of anxiety. Instant relief through breathing, grounding, and reset exercises.'
const siteUrl = 'https://nuvin.app'
const ogImageUrl = `${siteUrl}/og-image.png`

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#9b59b6',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    'anxiety relief',
    'mental health',
    'breathing exercises',
    'grounding techniques',
    'anxiety app',
    'stress relief',
    'mindfulness',
    'panic attack help',
    'calm app',
    'mental wellness',
  ],
  authors: [{ name: 'Nuvin' }],
  creator: 'Nuvin',
  publisher: 'Nuvin',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title,
    description,
    siteName: title,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Nuvin - Anxiety Relief App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImageUrl],
    creator: '@nuvinapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Add your Google Analytics 4 Measurement ID here
  // Get it from: https://analytics.google.com/analytics/web/
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

  return (
    <html lang="en">
      <body className="antialiased">
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
        {children}
      </body>
    </html>
  )
}
