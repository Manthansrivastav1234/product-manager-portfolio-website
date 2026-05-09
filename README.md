# Manthan Srivastav Portfolio

Premium, modern, animated portfolio built with a static-friendly architecture and deployable for free on Vercel.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Static-friendly front-end only setup (no backend, no database)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm run start
```

## Resume and Assets

- Resume path: `public/resume.pdf`
- Add all images/assets under `public/`

## Free Deployment on Vercel

1. Push this folder to a GitHub repository.
2. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and import the repository.
4. Keep default settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output: default
5. Click **Deploy**.

Vercel free tier is sufficient for this static-friendly portfolio.

## Suggested GitHub Commands

```bash
git init
git add .
git commit -m "Create premium animated portfolio website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
