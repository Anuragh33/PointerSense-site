# PointerSense Site

Marketing and download site for [PointerSense](https://github.com/Anuragh33/PointerSense) — the macOS menu bar assistant that explains text under your cursor.

Live at **[pointersense-site.vercel.app](https://pointersense-site.vercel.app)**.

## What this is

A static Next.js site with one job: tell people what PointerSense does and give them the latest macOS download. Release data is pulled live from the GitHub Releases API of the [Anuragh33/PointerSense](https://github.com/Anuragh33/PointerSense) repository, so the download links update automatically whenever a new version is published.

## Stack

- Next.js 15 (App Router, server components)
- React 19
- TypeScript
- Plain CSS (no Tailwind, no UI library)
- Vercel for hosting
- ISR revalidation every 5 minutes for the release list

## Local development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

To raise the GitHub API rate limit (60/hour unauthenticated, 5000/hour authenticated), set:

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

Any token with `public_repo` scope works.

## Build

```bash
npm run build
npm run start
```

## Project layout

```
app/
  layout.tsx          Root layout and metadata
  page.tsx            Single-page site (nav, hero, features, releases, footer)
  globals.css         Light theme styles
lib/
  releases.ts         GitHub Releases API fetch and helpers
```

## How release data flows

`lib/releases.ts` calls `https://api.github.com/repos/Anuragh33/PointerSense/releases` with a 5-minute ISR window. The home page renders the latest release prominently in the hero (download button) and lists every release in a card below. Each release card auto-detects the `.dmg` asset and shows its size and download link.

Publishing a new release on the [PointerSense](https://github.com/Anuragh33/PointerSense) repo with `gh release create` is enough — the site picks it up automatically.

## Deployment

The `main` branch auto-deploys to Vercel. No manual steps.
