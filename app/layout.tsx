import type { Metadata } from 'next'
import './globals.css'

const title = 'Nuvin - Anxiety Relief'
const description = 'Find calm in moments of anxiety. Instant relief through breathing, grounding, and reset exercises.'
const siteUrl = 'https://nuvin.app'
const ogImageUrl = `${siteUrl}/og-image.png`

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
  themeColor: '#9b59b6',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 - Add your GA4 Measurement ID below */}
        {/* Uncomment and replace G-XXXXXXXXXX with your actual GA4 Measurement ID
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
