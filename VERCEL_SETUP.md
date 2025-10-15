# Vercel Environment Variables Setup

After deploying to Vercel, add these environment variables:

## Google Analytics

Go to: https://vercel.com/YOUR_PROJECT/settings/environment-variables

Add:
- **Name:** `NEXT_PUBLIC_GA_ID`
- **Value:** `G-30039CWE8Y`
- **Environments:** Production, Preview, Development

This will enable Google Analytics tracking on your live site.

## Why This Matters

- The `.env.local` file only works locally
- Vercel needs environment variables added through their dashboard
- This keeps your GA ID secure and separate from the codebase

## Steps:

1. Go to Vercel dashboard
2. Select your project (nuvin-website)
3. Go to Settings → Environment Variables
4. Click "Add New"
5. Enter `NEXT_PUBLIC_GA_ID` as the name
6. Enter `G-30039CWE8Y` as the value
7. Select all environments (Production, Preview, Development)
8. Click "Save"
9. Redeploy your site for changes to take effect

Done! Google Analytics will now track all visitors.
