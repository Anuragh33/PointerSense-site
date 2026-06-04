<div align="center">
  <img src="public/assets/icon.png" alt="PointerSense" width="128" height="128" />

  <h1>PointerSense</h1>

  <p>
    <strong>Your cursor, now reads the screen.</strong><br />
    Select any text on your Mac. Get an instant AI explanation in a floating pill.
  </p>

  <p>
    <a href="https://pointersense-site.vercel.app">Website</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/Anuragh33/PointerSense-site/releases/latest">Latest release</a>
    &nbsp;·&nbsp;
    <a href="#install">Install</a>
    &nbsp;·&nbsp;
    <a href="#how-it-works">How it works</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/platform-macOS-0f172a?style=for-the-badge&logo=apple&logoColor=white" alt="macOS" />
    <img src="https://img.shields.io/badge/architecture-Apple%20Silicon-6366f1?style=for-the-badge" alt="Apple Silicon" />
    <img src="https://img.shields.io/github/v/release/Anuragh33/PointerSense-site?style=for-the-badge&color=6366f1&label=version" alt="Latest version" />
    <img src="https://img.shields.io/github/downloads/Anuragh33/PointerSense-site/total?style=for-the-badge&color=22c55e&label=downloads" alt="Downloads" />
  </p>
</div>

---

## What is PointerSense?

PointerSense is a macOS menu bar app that **explains any text you select** using the AI provider of your choice. No copy, no paste, no switching apps — just highlight something confusing and a small frosted-glass pill appears next to your cursor with a clear answer.

```
┌─────────────────────────────────────────────────────────────┐
│  The process of [photosynthesis] allows plants to convert   │
│  sunlight and CO₂ into glucose, releasing oxygen as a       │
│  byproduct that sustains most life on Earth.                │
└─────────────────────────────────────────────────────────────┘
                          ╲
                           ╲
        ┌──────────────────────────────────────┐
        │  SAFARI                          ✕   │
        │                                      │
        │  Photosynthesis is how plants turn   │
        │  sunlight, water, and carbon dioxide │
        │  into food, releasing oxygen as a    │
        │  byproduct.                          │
        │                                      │
        │  ⊕ More   ♪ Speak   ⧉ Copy           │
        └──────────────────────────────────────┘
```

It works in any macOS app that exposes text through Accessibility — browsers, terminals, editors, PDFs, native input fields, even some Electron apps.

---

## Features

| | |
|---|---|
| **Works everywhere** | Browsers, terminals, editors, PDFs, anywhere macOS exposes text. |
| **Six AI providers** | OpenAI, Anthropic, Google Gemini, Groq, Ollama Cloud, Command Code. Bring your own key. |
| **Privacy-first** | No screenshots. No keystroke logging. No history by default. Only the selected text leaves your Mac. |
| **Three detection modes** | Selected only (default), Hover any text, or Smart (selection-first with hover fallback). |
| **Three trigger modes** | Automatic, Hold ⌥ Option (opt-in per selection), or Manual. |
| **Optional speech** | Have answers read aloud via the native macOS `say` engine. |
| **Menu bar native** | No dock icon, no heavy UI. Pause and switch modes from the menu bar. |
| **Instant** | Sub-second response with Groq's `gpt-oss-20b` (1000 tok/sec). |

---

## How it works

```
   ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
   │              │     │              │     │              │     │              │
   │  1. Select   │ ──▶ │  2. macOS    │ ──▶ │  3. Your AI  │ ──▶ │  4. Tooltip  │
   │     text     │     │     reads    │     │   explains   │     │    appears   │
   │              │     │              │     │              │     │              │
   └──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                          AXSelectedText        provider API        near cursor
```

1. **Select text in any app.** Highlight a word, sentence, code snippet, error message, or passage.
2. **PointerSense reads the selection** via macOS Accessibility APIs.
3. **Your chosen provider explains it** in the answer length you picked (very short → detailed).
4. **A frosted-glass pill floats near your cursor** with the explanation. Pin it, speak it, copy it, or ask for more detail.

---

## AI providers

PointerSense doesn't host any models. You bring your own API key, and PointerSense stays out of the loop.

| Provider | Recommended model | Speed | Notes |
|---|---|---|---|
| **Groq** | `openai/gpt-oss-20b` | ⚡⚡⚡⚡⚡ | ~1000 tok/sec. Fastest cloud option. |
| **OpenAI** | `gpt-5.4-mini` | ⚡⚡⚡⚡ | Sweet spot for quality. |
| **Anthropic** | `claude-haiku-4-5` | ⚡⚡⚡⚡ | Excellent at definitions. |
| **Google Gemini** | `gemini-3.5-flash` | ⚡⚡⚡⚡ | Multimodal, free tier available. |
| **Ollama Cloud** | `gemini-3-flash-preview` | ⚡⚡⚡ | 20+ models available. |
| **Command Code** | `gpt-4o-mini` | ⚡⚡⚡⚡ | Aggregated provider (Pro plan required). |

---

## Install

> macOS 13+ on Apple Silicon (M1, M2, M3, M4). Intel Macs are not supported in this build.

**1.** [**Download the latest .dmg**](https://github.com/Anuragh33/PointerSense-site/releases/latest)

**2.** Open the `.dmg` and drag **PointerSense** to your **Applications** folder.

**3.** Launch PointerSense. If macOS warns about an unidentified developer, right-click the app icon and choose **Open**, then confirm.

**4.** Grant Accessibility permission:
```
System Settings ─▶ Privacy & Security ─▶ Accessibility ─▶ enable PointerSense
```

**5.** Open **Setup** from the menu bar icon, go to **AI Providers**, and paste an API key.

That's it. Select text anywhere on your Mac to test.

---

## This repo

This is the public website and release artifact host for PointerSense. The app source code lives in a private repo. Release `.dmg` files are mirrored here so anyone can download them.

### Tech stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Runtime | React 19 |
| Language | TypeScript |
| Styles | Plain CSS (no Tailwind, no UI lib) |
| Hosting | [Vercel](https://vercel.com) |
| Data | GitHub Releases API · 5-minute ISR |

### Local development

```bash
git clone https://github.com/Anuragh33/PointerSense-site.git
cd PointerSense-site
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

To raise the GitHub API rate limit (60/hour anonymous → 5000/hour authenticated):

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

Any token with `public_repo` scope works.

### Build

```bash
npm run build
npm run start
```

### Project layout

```
.
├── app/
│   ├── layout.tsx        ← root layout + metadata
│   ├── page.tsx          ← single-page site (nav · hero · features · install · releases · footer)
│   └── globals.css       ← light theme styles
├── lib/
│   └── releases.ts       ← GitHub Releases API fetch + helpers
├── public/
│   └── assets/
│       └── icon.png      ← app icon shown in this README
└── README.md
```

---

## Publishing a new release

The app source lives in a **private** repo, but build artifacts have to be downloadable by anyone. So we publish releases on **this** public repo:

```bash
# In the app repo, build the .dmg
cargo tauri build --bundles dmg

# Then from anywhere
gh release create v0.X.Y \
  /path/to/PointerSense_0.X.Y_aarch64.dmg \
  --repo Anuragh33/PointerSense-site \
  --title "PointerSense v0.X.Y" \
  --notes "Release notes here"
```

The website picks up the new release automatically within 5 minutes (ISR), or instantly on the next deploy. The hero download button and Releases section both update from the same source.

---

## License

The website source in this repo is open. The PointerSense app itself is currently distributed as a closed-source binary.

---

<div align="center">
  <sub>Built with ❤ for everyone who's ever right-clicked → Search Google for "X"</sub>
</div>
