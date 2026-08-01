/* ============================================================
   TGAB shared chrome + live data
   ============================================================ */
(function () {
  const C = window.TGAB_CONFIG || {};
  const page = document.body.dataset.page || "";

  /* ---------- header ---------- */
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="nav" aria-label="Main">
      <a class="brand" href="index.html" aria-label="TGAB home">
        <span class="mark">TGAB<span>.</span></span>
        <span class="sub">The Global Assets Broker</span>
      </a>
      <div class="nav-links">
        <a href="markets.html" data-nav="markets">Markets</a>
        <a href="platforms.html" data-nav="platforms">Platforms</a>
        <a href="pricing.html" data-nav="pricing">Pricing</a>
        <a href="company.html" data-nav="company">Company</a>
        <a href="legal.html" data-nav="legal">Legal</a>
        <a href="contact.html" data-nav="contact">Contact</a>
      </div>
      <div class="nav-cta">
        <a class="login" href="${C.LOGIN_URL || "#"}">Client login</a>
        <a class="btn btn-amber" href="${C.SIGNUP_URL || "#"}">Open account</a>
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
          <div class="mark">TGAB<span>.</span></div>
          <p>Institutional-grade access to global markets, built on regulated infrastructure and transparent pricing.</p>
        </div>
        <div>
          <h4>Trading</h4>
          <a href="markets.html">Markets</a>
          <a href="platforms.html">Platforms</a>
          <a href="pricing.html">Pricing &amp; fees</a>
          <a href="markets.html#hours">Market hours</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="company.html">About TGAB</a>
          <a href="company.html#structure">Group structure</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="legal.html#regulatory">Regulatory status</a>
          <a href="legal.html#risk">Risk disclosure</a>
          <a href="legal.html#terms">Terms of use</a>
          <a href="legal.html#privacy">Privacy</a>
        </div>
      </div>
      <div class="legalese">
        <p><b>Company in formation.</b> The Global Assets Broker ("TGAB") is being established under a group structure comprising a licensed Mauritius broking entity and affiliated companies. An application for an Investment Dealer (Full Service Dealer, excluding Underwriting) licence has been made to the Financial Services Commission, Mauritius. TGAB does not offer, solicit, or provide any investment services or accept clients until all required licences and approvals have been granted. Nothing on this website constitutes an offer, solicitation, or recommendation.</p>
        <p><b>Risk warning.</b> Trading in equities, options, and other financial instruments involves significant risk and can result in the loss of your entire invested capital. Options are complex instruments and are not suitable for all investors. Past performance is not a reliable indicator of future results. Market data shown on this site may be delayed or indicative and must not be relied upon for trading decisions.</p>
      </div>
      <div class="foot-meta">
        <span>© ${year} The Global Assets Broker</span>
        <span>${C.CONTACT_EMAIL || ""}</span>
      </div>
    </div>`;
  document.body.append(footer);

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
  document.querySelectorAll(".mgrid,.cards,.quotes").forEach((g) => {
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
})();
