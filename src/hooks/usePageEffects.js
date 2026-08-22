import { useEffect } from "react";
import { siteConfig } from "../config";

const decode = (value) => {
  const node = document.createElement("textarea");
  node.innerHTML = value;
  return node.value;
};

export function usePageEffects(page, title, description) {
  useEffect(() => {
    document.body.dataset.page = page;
    document.title = decode(title);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = decode(description);
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

    document.querySelectorAll("[data-count]").forEach((node) => {
      const target = Number(node.dataset.count);
      if (!Number.isFinite(target) || reducedMotion) {
        node.textContent = String(target);
        return;
      }
      const startedAt = performance.now();
      let frame;
      const tick = (now) => {
        const progress = Math.min((now - startedAt) / 900, 1);
        node.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      cleanups.push(() => cancelAnimationFrame(frame));
    });

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

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [page, title, description]);
}
