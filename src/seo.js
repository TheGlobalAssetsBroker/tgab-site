import { siteConfig } from "./config.js";

// One definition for both the initial HTML and client-side route changes.
export function getPageSeo(page, title, description, pathname, article, faqItems = []) {
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonical = `${siteConfig.siteUrl}${path}`;
  const image = `${siteConfig.siteUrl}/images/og-tgab.png`;
  const organization = { "@type": "Organization", "@id": `${siteConfig.siteUrl}/#organization`, name: "The Global Assets Broker", url: `${siteConfig.siteUrl}/company` };
  const meta = [
    ["name", "description", description],
    ["name", "robots", page === "login" || page === "not-found" ? "noindex, follow" : "index, follow, max-image-preview:large"],
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:url", canonical],
    ["property", "og:type", article ? "article" : "website"],
    ["property", "og:image", image],
    ["property", "og:image:alt", "TGAB — The Global Assets Broker"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
    ["name", "twitter:image", image],
    ["name", "twitter:image:alt", "TGAB — The Global Assets Broker"],
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": article ? "Article" : page === "faq" ? "FAQPage" : page === "insights" ? "CollectionPage" : "WebPage",
    "@id": `${canonical}#${article ? "article" : "webpage"}`,
    url: canonical,
    name: title,
    description,
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    inLanguage: "en",
    ...(page === "faq" ? { mainEntity: faqItems } : {}),
    ...(article ? {
      headline: `${article.heading} ${article.accent}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical },
      image: { "@type": "ImageObject", url: image, width: 1200, height: 630 },
      datePublished: article.date,
      dateModified: article.date,
      author: organization,
      publisher: { ...organization, logo: { "@type": "ImageObject", url: `${siteConfig.siteUrl}/images/tgab-new-logo.webp` } },
      articleSection: article.category,
      keywords: article.keywords.join(", "),
      citation: article.sources.map((source) => source.url),
      isAccessibleForFree: true,
    } : { about: { "@id": organization["@id"] } }),
  };
  if (article) meta.push(
    ["name", "author", "The Global Assets Broker"],
    ["property", "article:published_time", article.date],
    ["property", "article:modified_time", article.date],
    ["property", "article:section", article.category],
  );
  const breadcrumbs = [
    { name: "Home", item: `${siteConfig.siteUrl}/` },
    ...(article ? [{ name: "Insights", item: `${siteConfig.siteUrl}/insights` }] : []),
    { name: article ? `${article.heading} ${article.accent}` : title.split("—")[0].trim(), item: canonical },
  ];
  return {
    canonical,
    meta,
    schemas: {
      "page-schema": schema,
      ...(path !== "/" ? { "page-breadcrumb-schema": {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, ...item })),
      } } : {}),
    },
  };
}
