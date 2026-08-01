# TGAB — Website

Static site. No build step, no dependencies.

## Before deploying — edit `assets/config.js`
1. `FINNHUB_KEY` — paste your Finnhub API key. Empty = static indicative quotes (site still works).
2. `LOGIN_URL` / `SIGNUP_URL` — point at your B2Core portal once the subdomain is live. Until then they can stay as placeholders or be set to `mailto:hello@tgab.com`.
3. `SYMBOLS` — tape/board symbols, edit freely.

## Deploy to Cloudflare Pages
**Option A — drag and drop:** Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets → drop this whole folder → deploy. Then add the custom domain `tgab.com` under the project's Custom Domains tab.

**Option B — Git (recommended):** push this folder to a GitHub repo, connect it in Pages, build command: none, output directory: `/`. Every push auto-deploys.

## Structure
- `index.html` — home (hero + globe, live board, market access suite, infrastructure, why TGAB)
- `markets.html` — coverage table + US market hours (`#hours`)
- `platforms.html` — web / desktop / mobile + client portal
- `pricing.html` — indicative pre-launch fee schedule
- `company.html` — about, group structure (`#structure`), principles
- `legal.html` — regulatory status, risk disclosure, terms, privacy, complaints
- `contact.html`
- `assets/` — `site.css` (design system), `site.js` (nav/tape/footer + Finnhub), `globe.js`, `config.js`

Nav, ticker tape, and footer are injected by `site.js`, so edits there apply site-wide.

## Notes
- The footer carries the in-formation / FSC-application disclaimer site-wide — keep it until the licence is granted, then replace with the licence number.
- Pricing tables are marked indicative; swap in final numbers before launch.
- Finnhub free tier: 60 calls/min. The site fetches 10 symbols per refresh, once per minute — well within limits.
