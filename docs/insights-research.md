# Insights content research — 25 September 2026

These topics support TGAB's stated launch products (US equities, US-listed ETFs and listed options) and replace the empty Insights page. They address separate informational needs without competing with the Markets, Pricing or Platforms product pages.

| Page | Primary query | Supporting queries | Reader intent and value |
| --- | --- | --- | --- |
| `/insights/stocks-vs-etfs` | stocks vs ETFs | difference between stocks and ETFs; ETF fees; US-listed ETFs | Compare exposure and costs before researching an instrument. Includes a concentration example, cost calculations and a research checklist. |
| `/insights/market-vs-limit-orders` | market vs limit orders | stop vs stop-limit orders; stock order types; limit order example | Understand execution before submitting an order. Includes partial-fill arithmetic, gap scenarios and time-in-force explanations. |
| `/insights/options-trading-basics` | options trading basics | calls vs puts; options premium; options exercise and assignment | Understand the contract and its obligations. Includes call/put payoff examples, premium vs exercise funding, and expiration mechanics. |

Selection used live search results and primary investor-education material from SEC Investor.gov, FINRA, OCC and the Options Industry Council. These are relevant evergreen search intents, not measured keyword-volume or difficulty estimates. No Search Console, paid keyword dataset or ranking guarantee is implied. Exact source URLs appear beside the relevant sections and in each article's source list in `src/content/insights.js`.

The content uses original prose and hypothetical worked examples. No individual reviewer, advisory credential, performance forecast or live trading availability is claimed. Dates represent this initial content release; update the article date only when its substantive content is updated. Publication should use the actual release date if the deployment is delayed.

## Implementation and maintenance

- `src/content/insights.js` holds content, search topics and article metadata.
- `src/seo.js` generates the same metadata and structured data for initial HTML and client navigation. Keywords are used naturally in titles, headings, prose and Article schema; there is no obsolete meta-keywords tag.
- Each article has a unique title, description, canonical URL, Open Graph and Twitter metadata, publisher/author organization, dates, Article schema and three-level BreadcrumbList. Visible FAQs use native details elements; no FAQ rich-result claim is made.
- The hub, related articles, Markets page and HTML sitemap link to the guides. Both existing XML sitemap copies and both existing llms.txt files include the new URLs.
- `npm run build` emits complete HTML for the hub and three guides in `dist/insights/…/index.html`, with styles, content and head metadata available without JavaScript. The client hydrates that markup. Other existing routes retain their current rendering behavior.
- Upload the entire `dist` output. The generated `_redirects` places explicit article and hub rewrites ahead of the existing SPA fallback. Hosts that do not implement this format need equivalent rewrites to the generated HTML. Vite preview mirrors these exact routes for local verification.
- Run `npm run build`, then `npm run check:seo`. Review source links, examples, product claims and both mobile and desktop layouts when editing.

After deployment, inspect the three URLs in Search Console and submit the updated sitemap. Use real impressions and query data to refine titles and expand content; avoid creating near-duplicate pages for small keyword variants.
