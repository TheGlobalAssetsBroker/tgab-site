import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { articles, articlePath, insightsMeta } from "../src/content/insights.js";
import { getPageSeo } from "../src/seo.js";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (html) => decode(html.replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, ""));
const readMeta = (head, attribute, key) => [...head.matchAll(new RegExp(`<meta ${attribute}="${key}" content="([^"]*)"`, "g"))].map((match) => decode(match[1]));
const pages = [{ path: "/insights", page: "insights", ...insightsMeta }, ...articles.map((article) => ({ path: articlePath(article), page: "insight-article", title: article.title, description: article.description, article }))];

for (const page of pages) {
  test(`${page.path}: initial HTML includes content, unique metadata and valid structured data`, async () => {
    const html = await read(`dist${page.path}/index.html`);
    const head = html.split("</head>")[0];
    const body = html.split("<body")[1];
    const expected = getPageSeo(page.page, page.title, page.description, page.path, page.article);
    assert.equal((head.match(/<title>/g) || []).length, 1);
    assert.equal(decode(head.match(/<title>(.*?)<\/title>/)[1]), page.title);
    assert.equal((body.match(/<h1\b/g) || []).length, 1);
    assert.equal((head.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(head.includes(`href="https://tgab.com${page.path}"`));
    for (const [attribute, name, content] of expected.meta) assert.deepEqual(readMeta(head, attribute, name), [content]);
    assert.ok(!head.includes('href="/images/tgab-hero.webp"'), "Do not preload the unrelated homepage image");
    for (const [id, schema] of Object.entries(expected.schemas)) {
      const scripts = [...head.matchAll(new RegExp(`<script id="${id}" type="application/ld\\+json">([\\s\\S]*?)<\\/script>`, "g"))];
      assert.equal(scripts.length, 1);
      assert.deepEqual(JSON.parse(scripts[0][1]), schema);
    }
    for (const script of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) assert.doesNotThrow(() => JSON.parse(script[1]));
    if (page.article) {
      for (const section of page.article.sections) {
        assert.ok(body.includes(`id="${section.id}"`));
        assert.ok(body.includes(`href="#${section.id}"`));
        for (const paragraph of [...(section.paragraphs || []), ...(section.after || [])]) assert.ok(strip(body).includes(paragraph));
      }
      for (const source of page.article.sources) assert.ok(body.includes(`href="${source.url}"`));
      for (const faq of page.article.faqs) assert.ok(strip(body).includes(faq.answer), "FAQ answers must exist without JavaScript");
      assert.equal(expected.schemas["page-breadcrumb-schema"].itemListElement.length, 3);
    }
    for (const article of articles.filter((article) => article !== page.article)) assert.ok(body.includes(`href="${articlePath(article)}"`));
    const ids = [...body.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, "No duplicate element IDs");
    for (const anchor of body.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(anchor[1]), `Missing anchor ${anchor[1]}`);
  });
}

test("new guides have sitemap coverage and static rewrites ahead of the SPA fallback", async () => {
  const [sitemap, mirrored, redirects] = await Promise.all([read("dist/sitemap.xml"), read("dist/seo/sitemap.xml"), read("dist/_redirects")]);
  assert.equal(sitemap, mirrored);
  for (const page of pages) {
    assert.equal(sitemap.split(`<loc>https://tgab.com${page.path}</loc>`).length - 1, 1);
    for (const path of [page.path, `${page.path}/`]) {
      const rewrite = `${path} ${page.path}/index.html 200`;
      assert.ok(redirects.includes(rewrite));
      assert.ok(redirects.indexOf(rewrite) < redirects.indexOf("/* /index.html 200"));
    }
  }
});

test("online and stock investing guides expose their target topics in searchable HTML", async () => {
  const targets = [
    ["how-to-start-investing-online", "how to start investing online"],
    ["how-to-research-stocks", "how to research stocks"],
  ];
  const [hub, markets] = await Promise.all([read("dist/insights/index.html"), read("dist/markets/index.html")]);
  for (const [slug, phrase] of targets) {
    const path = `/insights/${slug}`;
    const html = await read(`dist${path}/index.html`);
    const head = html.split("</head>")[0];
    const h1 = strip(html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/)[0]).toLowerCase();
    assert.ok(strip(head.match(/<title>[\s\S]*?<\/title>/)[0]).toLowerCase().includes(phrase));
    assert.ok(h1.includes(phrase));
    assert.ok(readMeta(head, "name", "description")[0].toLowerCase().includes(phrase));
    assert.ok(hub.includes(`href="${path}"`));
    assert.ok(markets.includes(`href="${path}"`));
  }
});

test("every sitemap URL has useful initial HTML and a route-specific canonical", async () => {
  const [sitemap, redirects] = await Promise.all([read("dist/sitemap.xml"), read("dist/_redirects")]);
  const paths = [...sitemap.matchAll(/<loc>https:\/\/tgab\.com(\/[^<]*)<\/loc>/g)].map(([, path]) => path);
  for (const path of paths) {
    const html = await read(path === "/" ? "dist/index.html" : `dist${path}/index.html`);
    const head = html.split("</head>")[0];
    const body = html.split("<body")[1];
    assert.equal((head.match(/<title>/g) || []).length, 1, path);
    assert.equal((head.match(/rel="canonical"/g) || []).length, 1, path);
    assert.ok(head.includes(`rel="canonical" href="https://tgab.com${path}"`), path);
    assert.equal(readMeta(head, "name", "robots")[0], "index, follow, max-image-preview:large", path);
    assert.ok(body.includes("<main"), path);
    assert.ok(body.includes("<h1"), path);
    assert.ok(strip(body).length > 500, path);
    if (path !== "/") {
      assert.ok(redirects.includes(`${path} ${path}/index.html 200`), path);
      assert.ok(redirects.includes(`${path}/ ${path}/index.html 200`), path);
    }
  }
});

test("every local page link in static guides resolves to a declared site URL", async () => {
  const sitemap = await read("dist/sitemap.xml");
  const paths = new Set([...sitemap.matchAll(/<loc>https:\/\/tgab.com([^<]*)<\/loc>/g)].map((match) => match[1]));
  paths.add("/login");
  for (const page of pages) {
    const html = await read(`dist${page.path}/index.html`);
    const body = html.split("<body")[1];
    for (const [, href] of body.matchAll(/<a\b[^>]*href="(\/[^"#]*)(?:#[^"]*)?"/g)) assert.ok(paths.has(href), `Unknown page: ${href}`);
  }
});

test("non-article routes keep correct SEO types and indexing rules", () => {
  const ordinary = getPageSeo("markets", "Markets", "Market coverage", "/markets/");
  assert.equal(ordinary.canonical, "https://tgab.com/markets");
  assert.equal(ordinary.schemas["page-schema"]["@type"], "WebPage");
  assert.ok(!ordinary.meta.some(([, name]) => name.startsWith("article:") || name === "author"));
  for (const page of ["login", "not-found"]) assert.equal(getPageSeo(page, page, page, `/${page}`).meta.find(([, name]) => name === "robots")[2], "noindex, follow");
  const questions = [{ "@type": "Question", name: "Example", acceptedAnswer: { "@type": "Answer", text: "Answer" } }];
  assert.deepEqual(getPageSeo("faq", "FAQ", "Questions", "/faq", undefined, questions).schemas["page-schema"].mainEntity, questions);
});
