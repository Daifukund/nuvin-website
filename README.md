# Nuvin - Marketing Website

A modern, SEO-optimized marketing website for Nuvin, an iOS anxiety relief app.

## Features

- **Next.js 14+** with App Router and React Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for responsive styling
- **SEO Optimized** with comprehensive meta tags
- **Social Sharing** ready with OpenGraph and Twitter Cards
- **Mobile-First Design** with premium gradient background
- **Vercel Deployment** ready out of the box

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Custom Domain Setup

After deployment, configure your domain `nuvin.app`:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain: `nuvin.app`
4. Add DNS records in CheapName:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

## Google Analytics Setup

To enable Google Analytics 4:

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `app/layout.tsx`
4. Uncomment the Google Analytics script
5. Replace `G-XXXXXXXXXX` with your actual Measurement ID
6. Redeploy

## Project Structure

```
nuvin-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Favicon
├── components/
│   └── AppStoreButton.tsx  # Reusable App Store button
├── public/
│   ├── og-image.png        # Social sharing image
│   ├── apple-touch-icon.png
│   ├── apple-app-store-badge.svg
│   └── site.webmanifest
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
└── postcss.config.mjs
```

## Customization

### Update Meta Tags

Edit `app/layout.tsx` to update:
- Title and description
- Keywords
- OpenGraph tags
- Twitter handle

### Change Colors

Edit `tailwind.config.ts` to customize the brand colors:
```typescript
colors: {
  'nuvin-purple': '#9b59b6',
  'nuvin-blue': '#6c8ef5',
  'nuvin-pink': '#e685c3',
}
```

### Update Content

Edit `app/page.tsx` to change:
- Headline text
- Subheadline
- App Store link
- Support/Privacy links

## Performance

This site is optimized for performance:
- Static generation for instant loading
- Optimized images with Next.js Image component
- Minimal JavaScript bundle
- CSS optimized with Tailwind
- Perfect Lighthouse scores

## License

Private - All rights reserved

## Support

For questions or issues, contact: support@nuvin.app
