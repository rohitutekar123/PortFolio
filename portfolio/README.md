# Cluster Control Portfolio

A Kubernetes-dashboard-styled personal portfolio built with Next.js 14 (App Router) and TypeScript.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours

All content is in **`src/data/portfolio.ts`**: profile, skills, projects, experience, links.
Everything except the name and email is sample content. Replace it, then search for `your-username` to fix the links.

Colours and fonts are CSS variables at the top of `src/app/globals.css`.

## Structure

```
src/
  app/          layout, page, global styles
  components/   Sidebar, Hero, NodePools, Pods, Rollout, Events, Clock, CopyEmail
  data/         portfolio.ts (your content)
```

## Deploy (free)

Push to GitHub, import the repo at https://vercel.com/new, and deploy. No settings needed.
