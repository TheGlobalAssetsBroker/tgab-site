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
  { path: "/insights", page: "insights", ...insightsMeta },
  ...articles.map((article) => ({ path: articlePath(article), page: "insight-article", title: article.title, description: article.description, article })),
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
    const output = resolve(root, "dist", page.path.slice(1), "index.html");
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html);
    console.log(`Prerendered ${page.path}`);
  }
  // Explicit routes precede the SPA fallback, including hosts without file shadowing.
  const redirects = await readFile(resolve(root, "public/_redirects"), "utf8");
  const routes = pages.flatMap(({ path }) => [
    `${path} ${path}/index.html 200`,
    `${path}/ ${path}/index.html 200`,
  ]).join("\n");
  await writeFile(resolve(root, "dist/_redirects"), `${routes}\n${redirects}`);
} finally {
  await server.close();
}
