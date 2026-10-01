import { createServer } from "vite";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { articles, articlePath, insightsMeta } from "../src/content/insights.js";
import { getPageSeo } from "../src/seo.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const escape = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const template = await readFile(resolve(root, "dist/index.html"), "utf8");
const pages = [
  { path: "/", page: "home", title: "TGAB — The Global Assets Broker | Institutional access to global markets", description: "Institutional-grade access to US equities, options, ETFs, and global markets through regulated infrastructure and transparent pricing." },
  { path: "/markets", page: "markets", title: "Markets — TGAB | US equities, options & multi-asset access", description: "Trade US equities, listed options, and ETFs at launch, with futures, FX, metals, and more on the TGAB roadmap. Market hours and instrument coverage." },
  { path: "/platforms", page: "platforms", title: "Platforms — TGAB | Trading platform & client portal", description: "TGAB clients trade through a licensed third-party trading platform, paired with a regulated client portal for onboarding, funding, and account management." },
  { path: "/pricing", page: "pricing", title: "Pricing — TGAB | Transparent commissions & fees", description: "TGAB's indicative pre-launch fee schedule for US equities, options, and account services. Transparent pricing with no hidden spreads." },
  { path: "/pricing-details", page: "pricing-details", title: "Pricing Details — TGAB | Core vs Prime account comparison", description: "A side-by-side comparison of TGAB's Core and Prime account tiers — commissions, account minimums, platform access, support, and roadmap-market priority." },
  { path: "/security", page: "security", title: "Security & Trust — TGAB | Client asset protection & infrastructure", description: "How TGAB is built to protect client assets and data: segregation, KYC/AML, two-factor authentication, and regulated clearing infrastructure." },
  { path: "/company", page: "company", title: "Company — TGAB | About The Global Assets Broker", description: "About TGAB: a licensed Investment Dealer (Full Service Dealer, excluding Underwriting) built around institutional clearing and a global structure." },
  { path: "/careers", page: "careers", title: "Careers — TGAB | Building the founding team", description: "TGAB is building its founding team. No public job listings yet — write to us if you'd be a fit for a regulated brokerage build." },
  { path: "/insights", page: "insights", ...insightsMeta },
  ...articles.map((article) => ({ path: articlePath(article), page: "insight-article", title: article.title, description: article.description, article })),
  { path: "/faq", page: "faq", title: "FAQ — TGAB | Common questions about launch, accounts & fees", description: "Answers to common questions about TGAB's regulatory status, launch timeline, account opening, trading platform, fees, and security." },
  { path: "/support", page: "support", title: "Help Centre — TGAB | Support topics & how it works", description: "Self-serve help topics for TGAB: account & KYC, funding, trading platform, fees, and security — plus how the onboarding flow will work at launch." },
  { path: "/legal", page: "legal", title: "Legal — TGAB | Regulatory status, risk disclosure, terms & privacy", description: "TGAB legal centre: regulatory status, risk disclosure, terms of use, and privacy policy." },
  { path: "/contact", page: "contact", title: "Contact — TGAB | Talk to The Global Assets Broker", description: "Contact TGAB — enquiries, partnerships, and priority onboarding for launch." },
  { path: "/register", page: "register", title: "Register Interest — TGAB", description: "Register your interest in a TGAB account." },
  { path: "/cookies", page: "cookies", title: "Cookie Policy — TGAB", description: "How TGAB uses cookies and similar technologies on this website." },
  { path: "/accessibility", page: "accessibility", title: "Accessibility Statement — TGAB", description: "TGAB's accessibility commitment and how to report an accessibility issue on this website." },
  { path: "/sitemap", page: "sitemap", title: "Sitemap — TGAB", description: "Full list of pages on the TGAB website." },
  { path: "/login", page: "login", title: "Client Login — TGAB", description: "Secure client portal login for TGAB account holders." },
];
const server = await createServer({ root, server: { middlewareMode: true }, appType: "custom" });
try {
  const { render } = await server.ssrLoadModule("/src/prerender.jsx");
  for (const page of pages) {
    const seo = getPageSeo(page.page, page.title, page.description, page.path, page.article);
    let html = template.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escape(page.title)}</title>`);
    for (const [attribute, name, content] of seo.meta) {
      const tag = `<meta ${attribute}="${name}" content="${escape(content)}" />`;
      const existing = new RegExp(`<meta\\b[^>]*\\b${attribute}="${name}"[^>]*>`, "g");
      html = existing.test(html) ? html.replace(existing, () => tag) : html.replace("</head>", `${tag}\n  </head>`);
    }
    const schemas = Object.entries(seo.schemas).map(([id, schema]) => `<script id="${id}" type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`).join("\n");
    html = html
      .replace(/<link\b[^>]*rel="canonical"[^>]*>/g, "")
      .replace(/<link\b[^>]*rel="preload"[^>]*href="\/images\/tgab-hero.webp"[^>]*>/g, "")
      .replace("</head>", `<link rel="canonical" href="${escape(seo.canonical)}" />\n${schemas}\n</head>`)
      .replace("<body>", `<body data-page="${page.page}">`);
    const markup = await render(page.path);
    html = html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
    const output = page.path === "/" ? resolve(root, "dist/index.html") : resolve(root, "dist", page.path.slice(1), "index.html");
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html);
    console.log(`Prerendered ${page.path}`);
  }
  const markup404 = await render("/404");
  let notFoundHtml = template
    .replace(/<title>[\s\S]*?<\/title>/, "<title>Page not found — TGAB</title>")
    .replace(/<meta\b[^>]*name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')
    .replace(/<meta\b[^>]*name="description"[^>]*>/, '<meta name="description" content="The requested TGAB page could not be found." />')
    .replace(/<link\b[^>]*rel="preload"[^>]*href="\/images\/tgab-hero.webp"[^>]*>/g, "")
    .replace("<body>", '<body data-page="not-found">');
  notFoundHtml = notFoundHtml.replace('<div id="root"></div>', () => `<div id="root">${markup404}</div>`);
  await writeFile(resolve(root, "dist/404.html"), notFoundHtml);
} finally {
  await server.close();
}
