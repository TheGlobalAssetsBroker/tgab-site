import { useEffect } from "react";
import { siteConfig } from "../config";

export function usePageEffects(page, title, description) {
  useEffect(() => {
    document.body.dataset.page = page;
    document.title = title;
    const upsertMeta = (selector, attribute, value, content) => {
      let node = document.head.querySelector(selector);
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute(attribute, value);
        document.head.appendChild(node);
      }
      node.content = content;
    };
    const upsertLink = (rel, href) => {
      let node = document.head.querySelector(`link[rel="${rel}"]`);
      if (!node) {
        node = document.createElement("link");
        node.rel = rel;
        document.head.appendChild(node);
      }
      node.href = href;
    };

    const path = window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/+$/, "");
    const canonicalUrl = `${siteConfig.siteUrl}${path}`;
    const noindex = page === "login" || page === "not-found";
    const socialImage = `${siteConfig.siteUrl}/images/og-tgab.png`;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:image"]', "property", "og:image", socialImage);
    upsertMeta('meta[property="og:image:alt"]', "property", "og:image:alt", title);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage);
    upsertMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", title);
    upsertLink("canonical", canonicalUrl);

    document.getElementById("page-breadcrumb-schema")?.remove();
    document.getElementById("page-schema")?.remove();
    const pageSchema = document.createElement("script");
    pageSchema.id = "page-schema";
    pageSchema.type = "application/ld+json";
    pageSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": page === "faq" ? "FAQPage" : "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
      about: { "@id": `${siteConfig.siteUrl}/#organization` },
      inLanguage: "en",
      ...(page === "faq" ? {
        mainEntity: [...document.querySelectorAll(".faq-item")].map((item) => ({
          "@type": "Question",
          name: item.querySelector(".faq-q")?.textContent.trim(),
          acceptedAnswer: {
            "@type": "Answer",
            text: item.querySelector(".faq-a")?.textContent.trim(),
          },
        })).filter((item) => item.name && item.acceptedAnswer.text),
      } : {}),
    });
    document.head.appendChild(pageSchema);
    if (path !== "/") {
      const breadcrumb = document.createElement("script");
      breadcrumb.id = "page-breadcrumb-schema";
      breadcrumb.type = "application/ld+json";
      breadcrumb.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.siteUrl}/` },
          { "@type": "ListItem", position: 2, name: title.split("—")[0].trim(), item: canonicalUrl },
        ],
      });
      document.head.appendChild(breadcrumb);
    }
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: "start" }));
    } else {
      window.scrollTo(0, 0);
    }

    if (siteConfig.tradingPlatformName) {
      document.querySelectorAll("[data-platform-name]").forEach((node) => {
        node.textContent = siteConfig.tradingPlatformName;
      });
    }

    const cleanups = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealNodes = document.querySelectorAll(".rv");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("in-view"));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
      revealNodes.forEach((node) => revealObserver.observe(node));
      cleanups.push(() => revealObserver.disconnect());
    }

    const countNodes = document.querySelectorAll("[data-count]");
    const countFrames = new Set();
    const animateCount = (node) => {
      const target = Number(node.dataset.count);
      if (!Number.isFinite(target)) return;
      const decimals = Number(node.dataset.countDecimals) || 0;
      const duration = Number(node.dataset.countDuration) || 900;
      const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      if (reducedMotion) {
        node.textContent = formatter.format(target);
        return;
      }
      node.textContent = formatter.format(0);
      const startedAt = performance.now();
      let frame;
      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        node.textContent = formatter.format(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
          countFrames.add(frame);
        }
      };
      frame = requestAnimationFrame(tick);
      countFrames.add(frame);
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      countNodes.forEach(animateCount);
    } else {
      countNodes.forEach((node) => {
        const target = Number(node.dataset.count);
        const decimals = Number(node.dataset.countDecimals) || 0;
        if (Number.isFinite(target)) node.textContent = (0).toFixed(decimals);
      });
      const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCount(entry.target);
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.35 });
      countNodes.forEach((node) => countObserver.observe(node));
      cleanups.push(() => countObserver.disconnect());
    }
    cleanups.push(() => countFrames.forEach((frame) => cancelAnimationFrame(frame)));

    document.querySelectorAll(".faq-cats button").forEach((button) => {
      const handler = () => {
        document.querySelectorAll(".faq-cats button").forEach((item) => {
          item.classList.toggle("active", item === button);
          item.setAttribute("aria-selected", String(item === button));
        });
        document.querySelectorAll(".faq-item").forEach((item) => {
          item.hidden = button.dataset.cat !== "all" && item.dataset.cat !== button.dataset.cat;
        });
      };
      button.addEventListener("click", handler);
      cleanups.push(() => button.removeEventListener("click", handler));
    });

    document.querySelectorAll(".faq-q").forEach((button) => {
      const handler = () => {
        const item = button.closest(".faq-item");
        const willOpen = button.getAttribute("aria-expanded") !== "true";
        item?.classList.toggle("open", willOpen);
        button.setAttribute("aria-expanded", String(willOpen));
      };
      button.addEventListener("click", handler);
      cleanups.push(() => button.removeEventListener("click", handler));
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      pageSchema.remove();
    };
  }, [page, title, description]);
}
