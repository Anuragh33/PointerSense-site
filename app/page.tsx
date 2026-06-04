import { getReleases, formatBytes, formatDate, type Release } from "@/lib/releases";

export default async function Home() {
  const releases = await getReleases();

  return (
    <>
      {/* ── Nav ─────────────────────────────── */}
      <nav>
        <div className="container nav-inner">
          <div className="nav-logo">
            <span className="nav-logo-dot" />
            PointerSense
          </div>
          <div className="nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#install">Install</a>
            <a href="#releases">Releases</a>
            <a
              href="https://github.com/Anuragh33/PointerSense"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-gh"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>macOS · Apple Silicon</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>{releases.length > 0 ? `v${releases[0].tag_name.replace(/^v/, "")} available` : "Coming soon"}</span>
          </div>
          <h1>
            Your cursor,<br />
            <span>now reads the screen.</span>
          </h1>
          <p className="hero-sub">
            Select any text on your Mac. PointerSense explains it instantly — no
            copy, no paste, no switching apps.
          </p>
          <div className="hero-actions">
            {releases.length > 0 && releases[0].assets.length > 0 ? (
              <a
                href={releases[0].assets[0].browser_download_url}
                className="btn-primary"
              >
                <DownloadIcon /> Download {releases[0].tag_name} for macOS
              </a>
            ) : (
              <a href="#releases" className="btn-primary">
                View Releases
              </a>
            )}
            <a
              href="https://github.com/Anuragh33/PointerSense"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <GitHubIcon /> Star on GitHub
            </a>
          </div>
          {releases.length > 0 && releases[0].assets.length > 0 && (
            <p className="hero-meta">
              {formatBytes(releases[0].assets[0].size)} · Apple Silicon (M1+) · Released {formatDate(releases[0].published_at)}
            </p>
          )}

          {/* Tooltip demo mockup */}
          <div className="hero-demo">
            <div className="demo-text-block">
              The process of{" "}
              <span className="demo-selected">photosynthesis</span> allows
              plants to convert sunlight and CO₂ into glucose, releasing oxygen
              as a byproduct that sustains most life on Earth.
              <div className="demo-pill">
                <div className="demo-pill-top">
                  <span className="demo-pill-source">Safari</span>
                  <span className="demo-pill-close">×</span>
                </div>
                <p className="demo-pill-text">
                  Photosynthesis is how plants turn sunlight, water, and carbon
                  dioxide into food, releasing oxygen as a byproduct.
                </p>
                <div className="demo-pill-actions">
                  {["More", "Speak", "Copy"].map((label) => (
                    <span key={label} className="demo-pill-btn">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────── */}
      <section id="how-it-works">
        <div className="container">
          <p className="section-label">How it works</p>
          <h2 className="section-title">Three seconds from confusion to clarity</h2>
          <p className="section-sub">
            PointerSense lives in your menu bar and watches for text you select,
            then sends it to your chosen AI model.
          </p>
          <div className="steps">
            {[
              {
                n: 1,
                title: "Select text",
                body: "Highlight any word, sentence, error, or code snippet in any macOS app using your cursor.",
              },
              {
                n: 2,
                title: "AI reads it",
                body: "PointerSense picks up the selection through macOS Accessibility and sends it to your AI provider.",
              },
              {
                n: 3,
                title: "Tooltip appears",
                body: "A concise explanation floats near your cursor. Speak it aloud, copy it, or ask for more detail.",
              },
            ].map((s) => (
              <div key={s.n} className="step">
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────── */}
      <section id="features">
        <div className="container">
          <p className="section-label">Features</p>
          <h2 className="section-title">Built for how you actually work</h2>
          <div className="features-grid">
            {[
              {
                icon: "🔍",
                title: "Works across every app",
                body: "Browsers, terminals, editors, documents, PDFs — anywhere macOS Accessibility exposes text.",
              },
              {
                icon: "🤖",
                title: "Multiple AI providers",
                body: "OpenAI, Anthropic, Google Gemini, and Ollama Cloud. Bring your own key and model.",
              },
              {
                icon: "🔒",
                title: "Privacy-first",
                body: "No screenshots. No history by default. Only the text you select leaves your device.",
              },
              {
                icon: "🔊",
                title: "Optional speech",
                body: "Have answers read aloud using native macOS speech. Ideal for accessibility or hands-free reading.",
              },
              {
                icon: "⚡",
                title: "Instant response",
                body: "Pill tooltip appears within seconds of selection. Compact answer, expandable on demand.",
              },
              {
                icon: "🎛️",
                title: "Menu bar native",
                body: "No dock icon, no heavy UI. Pause, switch modes, and manage settings from the menu bar.",
              },
            ].map((f) => (
              <div key={f.title} className="feature">
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Install ─────────────────────────── */}
      <section id="install">
        <div className="container">
          <p className="section-label">Install</p>
          <h2 className="section-title">Get running in under a minute</h2>
          <p className="section-sub">
            PointerSense is a small unsigned macOS app. You'll need to grant
            Accessibility permission once so it can read selected text.
          </p>
          <div className="install-steps">
            {[
              {
                n: 1,
                title: "Download the .dmg",
                body: "Grab the latest release below. The build is for Apple Silicon Macs (M1, M2, M3, M4).",
              },
              {
                n: 2,
                title: "Open and drag to Applications",
                body: "If macOS warns about an unidentified developer, right-click PointerSense and choose Open, then confirm.",
              },
              {
                n: 3,
                title: "Grant Accessibility",
                body: "On first launch, open System Settings → Privacy & Security → Accessibility and enable PointerSense.",
              },
              {
                n: 4,
                title: "Add an API key",
                body: "Open Setup from the menu bar and paste a key for OpenAI, Anthropic, Gemini, Groq, Ollama Cloud, or Command Code.",
              },
            ].map((s) => (
              <div key={s.n} className="install-step">
                <div className="install-step-num">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Releases ────────────────────────── */}
      <section id="releases">
        <div className="container">
          <p className="section-label">Releases</p>
          <h2 className="section-title">Download PointerSense</h2>
          <p className="section-sub">
            macOS app releases. Each version includes release notes and a direct
            download link.
          </p>
          <div className="releases-list">
            {releases.length === 0 ? (
              <div className="no-releases">
                <strong>No releases yet</strong>
                The first release is on its way. Watch the GitHub repo for
                updates.
              </div>
            ) : (
              releases.map((release, i) => (
                <ReleaseCard key={release.id} release={release} isLatest={i === 0} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────── */}
      <footer>
        <div className="container footer-inner">
          <p className="footer-copy">
            PointerSense &mdash; macOS cursor AI layer
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/Anuragh33/PointerSense"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="#releases">Releases</a>
            <a href="#how-it-works">How it works</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function ReleaseCard({ release, isLatest }: { release: Release; isLatest: boolean }) {
  const dmgAsset = release.assets.find((a) => a.name.endsWith(".dmg"));
  const appAsset = release.assets.find((a) => a.name.endsWith(".app.tar.gz") || a.name.endsWith(".zip"));

  return (
    <div className={`release-card${isLatest ? " latest" : ""}`}>
      <div className="release-top">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="release-tag">{release.tag_name}</span>
          {isLatest && <span className="release-badge">Latest</span>}
          {release.prerelease && <span className="release-pre-badge">Pre-release</span>}
        </div>
        <span className="release-date">{formatDate(release.published_at)}</span>
      </div>

      {release.body && (
        <p className="release-notes">{release.body.trim()}</p>
      )}

      <div className="release-assets">
        {dmgAsset && (
          <a
            href={dmgAsset.browser_download_url}
            className={`release-download${isLatest ? " release-download-primary" : ""}`}
          >
            <DownloadIcon />
            {dmgAsset.name}
            <span className="release-file-size">{formatBytes(dmgAsset.size)}</span>
          </a>
        )}
        {appAsset && appAsset !== dmgAsset && (
          <a href={appAsset.browser_download_url} className="release-download">
            <DownloadIcon />
            {appAsset.name}
            <span className="release-file-size">{formatBytes(appAsset.size)}</span>
          </a>
        )}
        {release.assets.length === 0 && (
          <span style={{ fontSize: 13, color: "var(--muted)" }}>
            No downloadable assets for this release.
          </span>
        )}
        <a
          href={release.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="release-gh-link"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}
