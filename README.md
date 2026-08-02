# TGAB — Website

Static site. No build step, no dependencies.

## Before deploying — edit `assets/config.js`
1. `FINNHUB_KEY` — paste your Finnhub API key. Empty = static indicative quotes (site still works).
2. `LOGIN_URL` / `SIGNUP_URL` — point at your client portal once the subdomain is live. Until then they can stay as placeholders or be set to `mailto:hello@tgab.com`.
3. `SYMBOLS` — tape/board symbols, edit freely.
4. `TRADING_PLATFORM_NAME` — the third-party trading platform TGAB integrates (currently `cTrader`; MT5/DXtrade are alternatives under evaluation). Change it here only — every page pulls the name from this single value via `[data-platform-name]` elements, so nothing needs hardcoding elsewhere.

## Deploy to Cloudflare Pages
**Option A — drag and drop:** Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets → drop this whole folder → deploy. Then add the custom domain `tgab.com` under the project's Custom Domains tab.

**Option B — Git (recommended):** push this folder to a GitHub repo, connect it in Pages, build command: none, output directory: `/`. Every push auto-deploys.

## Structure

**Primary nav:**
- `index.html` — home (hero + globe, live board, bento market-access suite, infrastructure, how it works, why TGAB)
- `markets.html` — coverage table + US market hours (`#hours`)
- `platforms.html` — trading via the third-party platform (`TRADING_PLATFORM_NAME`) + regulated client portal
- `pricing.html` — indicative pre-launch fee schedule
- `security.html` — asset segregation, KYC/AML, 2FA, regulatory posture, data handling
- `company.html` — about, group structure (`#structure`), principles
- `faq.html` — categorised FAQ accordion
- `legal.html` — regulatory status, risk disclosure, terms, privacy, complaints
- `contact.html`

**Footer-linked (not in primary nav):**
- `support.html` — help-centre topic cards + how-it-works steps
- `careers.html` — honest "no public listings yet" page, routes to email
- `insights.html` — market-commentary placeholder ("coming soon", nothing fabricated)
- `sitemap.html` — full page list
- `cookies.html` — cookie policy (accurate: no analytics/tracking cookies are set today)
- `accessibility.html` — accessibility statement (aim + what's implemented, not a compliance claim)

**Assets:**
- `assets/site.css` — design system (v2 tokens/components + v3 VFX layer: gradient-shimmer text, glow-edge borders, cursor spotlight on cards, magnetic hover, hero tilt panel, parallax, FAQ accordion, steps/timeline, mega footer)
- `assets/site.js` — nav/tape/footer injection, Finnhub quotes, platform-name injection, FAQ accordion + category filter, scroll-progress bar, all pointer-driven micro-interactions (skipped under `prefers-reduced-motion`)
- `assets/globe.js` — hero dot-sphere canvas
- `assets/config.js` — the only file with editable config/secrets

Nav, ticker tape, scroll-progress bar, and the mega footer are injected by `site.js`, so edits there apply site-wide.

## Notes
- The footer carries the in-formation / FSC-application disclaimer site-wide, with clearly-marked placeholders for the licence number and any investor-compensation scheme — keep both until the regulator confirms them, then replace.
- Pricing tables are marked indicative; swap in final numbers before launch.
- Platform copy is written for a third-party stack (third-party trading platform + regulated client portal) — if the trading-platform vendor changes, only `TRADING_PLATFORM_NAME` in `config.js` needs editing.
- No team names/photos, AUM, client counts, licence numbers, or compensation-scheme names are fabricated anywhere on the site — only what's in the source content or clearly-marked placeholders.
- Finnhub free tier: 60 calls/min. The site fetches 10 symbols per refresh, once per minute — well within limits.
