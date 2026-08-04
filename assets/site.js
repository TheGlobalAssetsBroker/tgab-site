/* ============================================================
   TGAB shared chrome + live data
   ============================================================ */
(function () {
  const C = window.TGAB_CONFIG || {};
  const page = document.body.dataset.page || "";

  /* official TGAB mark (assets/brand/tgab-logo-mark.svg), inlined so the
     header/footer need no extra request and it inherits crisp SVG scaling */
  const MARK_SVG = `
    <svg class="brand-mark" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="translate(44 44) scale(1.27) translate(-44 -44)">
        <circle cx="44" cy="44" r="26" stroke="#46566E" stroke-width="1.5"/>
        <ellipse cx="44" cy="44" rx="26" ry="10.2" stroke="#46566E" stroke-width="1" opacity="0.7"/>
        <ellipse cx="44" cy="44" rx="10.8" ry="26" stroke="#46566E" stroke-width="1" opacity="0.7"/>
        <circle cx="44" cy="18" r="2.2" fill="#6E9BC7"/>
        <circle cx="66.5" cy="34" r="2.2" fill="#6E9BC7"/>
        <circle cx="21.5" cy="54" r="2.2" fill="#6E9BC7"/>
        <circle cx="27" cy="30" r="2" fill="#A8C8E8"/>
        <circle cx="56" cy="59" r="2" fill="#A8C8E8"/>
        <path d="M21.5 54 Q42 39 66.5 34" stroke="#2EEB7A" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="66.5" cy="34" r="2.9" fill="#2EEB7A"/>
      </g>
    </svg>`;

  /* ---------- scroll progress ---------- */
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.prepend(progress);

  /* ---------- header ---------- */
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="nav" aria-label="Main">
      <a class="brand" href="index.html" aria-label="TGAB home">
        ${MARK_SVG}
        <span class="brand-text">
          <span class="mark">TGAB<span class="mark-sq"></span></span>
          <span class="sub">The Global Assets Broker</span>
        </span>
      </a>
      <div class="nav-links">
        <a href="markets.html" data-nav="markets">Markets</a>
        <a href="platforms.html" data-nav="platforms">Platforms</a>
        <a href="pricing.html" data-nav="pricing">Pricing</a>
        <a href="security.html" data-nav="security">Security</a>
        <a href="company.html" data-nav="company">Company</a>
        <a href="faq.html" data-nav="faq">FAQ</a>
        <a href="legal.html" data-nav="legal">Legal</a>
        <a href="contact.html" data-nav="contact">Contact</a>
      </div>
      <div class="nav-cta">
        <a class="login" href="${C.LOGIN_URL || "#"}">Client login</a>
        <a class="btn btn-amber" href="register.html">Open account</a>
      </div>
      <button class="nav-burger" aria-label="Toggle menu">MENU</button>
    </nav>`;
  document.body.prepend(header);

  const active = header.querySelector(`[data-nav="${page}"]`);
  if (active) active.classList.add("active");
  header.querySelector(".nav-burger").addEventListener("click", () =>
    header.querySelector(".nav").classList.toggle("open")
  );

  /* ---------- ticker tape ---------- */
  const tape = document.createElement("div");
  tape.className = "tape";
  tape.setAttribute("aria-hidden", "true");
  tape.innerHTML = `<div class="tape-track" id="tapeTrack"></div><span class="tape-note" id="tapeNote">Indicative</span>`;
  header.after(tape);

  /* ---------- footer ---------- */
  const year = new Date().getFullYear();
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <div class="lockup">
            ${MARK_SVG}
            <div>
              <div class="mark">TGAB<span class="mark-sq"></span></div>
              <span class="sub">The Global Assets Broker</span>
            </div>
          </div>
          <p>Institutional-grade access to global markets, built on regulated infrastructure and transparent pricing.</p>
          <span class="foot-badge"><span class="dot"></span>In formation &middot; FSC Mauritius application pending</span>
        </div>
        <div>
          <h4>Trading</h4>
          <a href="markets.html">Markets</a>
          <a href="platforms.html">Platforms</a>
          <a href="pricing.html">Pricing &amp; fees</a>
          <a href="pricing-details.html">Core vs Prime</a>
          <a href="markets.html#hours">Market hours</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="company.html">About TGAB</a>
          <a href="security.html">Security &amp; trust</a>
          <a href="careers.html">Careers</a>
          <a href="insights.html">Insights</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="faq.html">FAQ</a>
          <a href="support.html">Help centre</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="legal.html#regulatory">Regulatory status</a>
          <a href="legal.html#risk">Risk disclosure</a>
          <a href="legal.html#terms">Terms of use</a>
          <a href="legal.html#privacy">Privacy</a>
          <a href="legal.html#complaints">Complaints</a>
        </div>
      </div>
      <div class="legalese">
        <p><b>Company in formation.</b> The Global Assets Broker ("TGAB") is being established under a group structure comprising a licensed Mauritius broking entity and affiliated companies. An application for an Investment Dealer (Full Service Dealer, excluding Underwriting) licence has been made to the Financial Services Commission, Mauritius (licence number to be confirmed upon approval). TGAB does not offer, solicit, or provide any investment services or accept clients until all required licences and approvals have been granted. Nothing on this website constitutes an offer, solicitation, or recommendation. Details of any applicable investor-compensation or protection scheme will be published once confirmed by the regulator.</p>
        <p><b>Risk warning.</b> Trading in equities, options, and other financial instruments involves significant risk and can result in the loss of your entire invested capital. Options are complex instruments and are not suitable for all investors. Past performance is not a reliable indicator of future results. Market data shown on this site may be delayed or indicative and must not be relied upon for trading decisions.</p>
      </div>
      <div class="foot-utility">
        <a href="sitemap.html">Sitemap</a>
        <span class="sep">/</span>
        <a href="cookies.html">Cookie policy</a>
        <span class="sep">/</span>
        <a href="accessibility.html">Accessibility</a>
        <span class="sep">/</span>
        <span class="tape-note" style="position:static;background:none;padding:0;color:var(--mut-2)">System status — published at launch</span>
      </div>
      <div class="foot-meta">
        <span>© ${year} The Global Assets Broker</span>
        <span>${C.CONTACT_EMAIL || ""}</span>
      </div>
    </div>`;
  document.body.append(footer);

  /* ---------- trading platform name (single source in config.js) ---------- */
  document.querySelectorAll("[data-platform-name]").forEach((el) => {
    el.textContent = C.TRADING_PLATFORM_NAME || "our trading platform";
  });

  /* ---------- "open account" / "register interest" CTAs -> register.html ---------- */
  /* add data-tier="core"/"prime" on any CTA to deep-link the account dropdown. */
  document.querySelectorAll('[data-cta="signup"]').forEach((el) => {
    const tier = el.dataset.tier;
    el.href = tier ? `register.html?tier=${encodeURIComponent(tier)}` : "register.html";
  });

  /* ---------- quotes: Finnhub with fallback ---------- */
  const SYMBOLS = C.SYMBOLS || ["SPY","QQQ","AAPL","MSFT","NVDA"];
  const FALLBACK = {
    SPY:{c:634.12,dp:0.42}, QQQ:{c:562.88,dp:0.61}, AAPL:{c:228.4,dp:-0.32},
    MSFT:{c:512.7,dp:0.28}, NVDA:{c:171.35,dp:1.24}, TSLA:{c:318.9,dp:-1.05},
    AMZN:{c:231.66,dp:0.44}, META:{c:718.2,dp:0.19}, GOOGL:{c:196.5,dp:0.36},
    AMD:{c:162.4,dp:0.88}
  };

  const fmt = (n) => Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function renderTape(data, liveLabel) {
    const track = document.getElementById("tapeTrack");
    const note = document.getElementById("tapeNote");
    if (!track) return;
    const items = SYMBOLS.map((s) => {
      const q = data[s];
      if (!q || !q.c) return "";
      const up = (q.dp || 0) >= 0;
      return `<span class="tape-item"><span class="sym">${s}</span> ${fmt(q.c)} <span class="${up ? "up" : "down"}">${up ? "▲" : "▼"} ${Math.abs(q.dp || 0).toFixed(2)}%</span></span>`;
    }).join("");
    track.innerHTML = items + items; /* duplicate for seamless loop */
    if (note) note.textContent = liveLabel;
  }

  function renderPanel(data) {
    const panel = document.getElementById("quotesPanel");
    if (!panel) return;
    panel.innerHTML = SYMBOLS.map((s) => {
      const q = data[s];
      if (!q || !q.c) return "";
      const up = (q.dp || 0) >= 0;
      return `<div class="q"><div class="sym">${s}</div><div class="px">${fmt(q.c)}</div><div class="chg ${up ? "up" : "down"}">${up ? "+" : "−"}${Math.abs(q.dp || 0).toFixed(2)}%</div></div>`;
    }).join("");
  }

  async function loadQuotes() {
    if (!C.FINNHUB_KEY) {
      renderTape(FALLBACK, "Indicative");
      renderPanel(FALLBACK);
      return;
    }
    try {
      const out = {};
      await Promise.all(SYMBOLS.map(async (s) => {
        const r = await fetch(`https://finnhub.io/api/v1/quote?symbol=${s}&token=${C.FINNHUB_KEY}`);
        if (!r.ok) throw new Error(String(r.status));
        out[s] = await r.json();
      }));
      renderTape(out, "Live · Finnhub");
      renderPanel(out);
    } catch (e) {
      renderTape(FALLBACK, "Indicative");
      renderPanel(FALLBACK);
    }
  }
  loadQuotes();
  if (C.FINNHUB_KEY) setInterval(loadQuotes, 60000);

  /* ---------- word marquee ---------- */
  const wt = document.getElementById("wordTrack");
  if (wt) {
    const words = ["Equities","Options","ETFs","Futures","FX","Metals","Indices","Fixed Income","Digital Assets"];
    const seq = words.map((w, i) => `<span class="${i % 3 === 1 ? "solid" : ""}">${w}</span><span aria-hidden="true" style="-webkit-text-stroke:0;color:var(--gold)">·</span>`).join("");
    wt.innerHTML = seq + seq;
  }

  /* ---------- stagger indices for grid children ---------- */
  document.querySelectorAll(".mgrid,.cards,.quotes,.tiers-grid").forEach((g) => {
    Array.from(g.children).forEach((c, i) => c.style.setProperty("--i", i));
  });

  /* ---------- animated counters ---------- */
  function runCounters(scope) {
    scope.querySelectorAll(".count").forEach((el) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const target = parseInt(el.dataset.count, 10) || 0;
      const t0 = performance.now(), dur = 1400;
      (function tick(t) {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }

  /* ---------- reveal on scroll ---------- */
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rvs = document.querySelectorAll(".rv");
  if (reduced || !("IntersectionObserver" in window)) {
    rvs.forEach((el) => el.classList.add("in"));
    runCounters(document);
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); runCounters(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    rvs.forEach((el) => io.observe(el));
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-q").forEach((btn) => {
    const ans = document.getElementById(btn.getAttribute("aria-controls"));
    if (!ans) return;
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      ans.style.maxHeight = open ? null : ans.scrollHeight + "px";
    });
  });

  /* ---------- FAQ category filter (optional, present only on faq.html) ---------- */
  const faqCats = document.querySelector(".faq-cats");
  if (faqCats) {
    const buttons = faqCats.querySelectorAll("button");
    const items = document.querySelectorAll(".faq-item");
    buttons.forEach((b) => b.addEventListener("click", () => {
      buttons.forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      const cat = b.dataset.cat;
      items.forEach((it) => {
        const show = cat === "all" || it.dataset.cat === cat;
        it.style.display = show ? "" : "none";
      });
    }));
  }

  /* ---------- scroll progress bar ---------- */
  const bar = document.querySelector(".scroll-progress");
  if (bar) {
    const setBar = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    document.addEventListener("scroll", setBar, { passive: true });
    setBar();
  }

  /* ---------- pointer-driven micro-interactions (skipped under reduced motion) ---------- */
  if (!reduced) {
    /* cursor-follow spotlight on cards / market-access cells */
    document.querySelectorAll(".card, .mcell").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", e.clientX - r.left + "px");
        el.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });

    /* magnetic pull — reserved for 1-2 focal elements per page */
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.25;
        const y = (e.clientY - r.top - r.height / 2) * 0.25;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });

    /* hero tilt panel — subtle 3D pointer tilt, disabled on touch */
    const tilt = document.querySelector(".tilt-card");
    if (tilt && window.matchMedia("(hover: hover)").matches) {
      const stage = tilt.closest(".hero") || tilt.parentElement;
      stage.addEventListener("mousemove", (e) => {
        const r = stage.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
      });
      stage.addEventListener("mouseleave", () => { tilt.style.transform = ""; });
    }

    /* parallax on decorative background layers only */
    const parallaxEls = document.querySelectorAll("[data-parallax]");
    if (parallaxEls.length) {
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          parallaxEls.forEach((el) => {
            const speed = parseFloat(el.dataset.parallax) || 0.12;
            el.style.transform = `translateY(${y * speed}px)`;
          });
          ticking = false;
        });
      }, { passive: true });
    }
  }
})();
