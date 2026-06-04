# PointerSense Site

Marketing and download site for [PointerSense](https://github.com/Anuragh33/PointerSense) — the macOS menu bar assistant that explains text under your cursor.

Live at **[pointersense-site.vercel.app](https://pointersense-site.vercel.app)**.

## What this is

A static Next.js site with one job: tell people what PointerSense does and give them the latest macOS download. The PointerSense app source lives in a private repo; release artifacts (.dmg builds) are mirrored to this public site repo so the download links are reachable without authentication. The site reads its own release list via the GitHub Releases API and renders it on the home page.

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

`lib/releases.ts` calls `https://api.github.com/repos/Anuragh33/PointerSense-site/releases` with a 5-minute ISR window. The home page renders the latest release prominently in the hero (download button) and lists every release in a card below. Each release card auto-detects the `.dmg` asset and shows its size and download link.

## Publishing a new app release

The app source lives in a private repo, but the build artifacts must be downloadable by anyone. So releases are published on **this** repo, not the app repo:

```bash
# After building the .dmg in the app repo
gh release create v0.2.0 \
  /path/to/PointerSense_0.2.0_aarch64.dmg \
  --repo Anuragh33/PointerSense-site \
  --title "PointerSense v0.2.0" \
  --notes "Release notes here"
```

The site picks it up automatically within 5 minutes (or instantly on the next deploy).

## Deployment

The `main` branch auto-deploys to Vercel. No manual steps.
