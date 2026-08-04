/* Refined dot-sphere: steel-blue glowing points, revolving glow ring, slow drift,
   plus an ambient "live activity" layer — faint green streaks with sample
   fill/P&L labels arcing near the globe. Purely decorative/illustrative. */
(function () {
  const cv = document.getElementById("globe");
  if (!cv) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = cv.getContext("2d");
  /* 1.5x is plenty for soft glowing dots; full retina doubles the pixel work */
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  const GLOW = "rgba(110,155,199,1)";           /* Steel Blue #6E9BC7 */
  const STREAK_GREEN = "46,235,122";            /* Signal Green #2EEB7A */

  let W, H, R;
  function size() {
    const s = Math.min(760, Math.max(420, window.innerWidth * 0.52));
    W = s; H = s; R = s * 0.36;
    cv.width = W * DPR; cv.height = H * DPR;
    cv.style.width = W + "px"; cv.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildRing();
  }

  /* ---------- pre-rendered sprites ----------
     shadowBlur on every dot fill was the single biggest cost on the page
     (620 gaussian blurs per frame). The dots/halo are static artwork, so
     render them once to small offscreen canvases and stamp with drawImage. */
  function makeDotSprite(withGlow) {
    const S = 48, c = document.createElement("canvas");
    c.width = S; c.height = S;
    const g = c.getContext("2d");
    const half = S / 2;
    const grad = g.createRadialGradient(half, half, 0, half, half, half);
    if (withGlow) {
      grad.addColorStop(0, "rgba(110,155,199,1)");
      grad.addColorStop(0.22, "rgba(110,155,199,.9)");
      grad.addColorStop(0.5, "rgba(110,155,199,.22)");
      grad.addColorStop(1, "rgba(110,155,199,0)");
    } else {
      grad.addColorStop(0, "rgba(110,155,199,1)");
      grad.addColorStop(0.42, "rgba(110,155,199,1)");
      grad.addColorStop(0.52, "rgba(110,155,199,0)");
    }
    g.fillStyle = grad;
    g.fillRect(0, 0, S, S);
    return c;
  }
  const SPRITE_GLOW = makeDotSprite(true);   /* core radius ≈ .22 of half-size */
  const SPRITE_PLAIN = makeDotSprite(false); /* core radius ≈ .5 of half-size */

  /* revolving ring, pre-rendered once per resize (only its rotation animates) */
  let ringCv = null;
  function buildRing() {
    ringCv = document.createElement("canvas");
    const pad = 30; /* room for the glow */
    const rw = (R * 1.28 * 2 + pad * 2) * DPR;
    ringCv.width = rw;
    ringCv.height = (R * 1.28 * 2 * 0.28 + pad * 2) * DPR;
    const g = ringCv.getContext("2d");
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    g.translate(R * 1.28 + pad, R * 1.28 * 0.28 + pad);
    g.scale(1, 0.28);
    g.beginPath();
    g.arc(0, 0, R * 1.28, 0, Math.PI * 2);
    g.shadowColor = GLOW;
    g.shadowBlur = 14;
    g.strokeStyle = "rgba(110,155,199,.55)";
    g.lineWidth = 1.4;
    g.stroke();
  }
  size();
  window.addEventListener("resize", size);

  const N = 620, pts = [];
  const GA = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = GA * i;
    pts.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r, tw: Math.random() * Math.PI * 2 });
  }

  /* ---------- ambient activity streaks ---------- */
  const TICKERS = ["AAPL", "MSFT", "NVDA", "TSLA", "AMZN", "META", "GOOGL", "AMD", "SPY", "QQQ"];
  function randomLabel() {
    if (Math.random() < 0.5) {
      const amt = Math.floor(800 + Math.random() * 240000);
      return "+$" + amt.toLocaleString("en-US");
    }
    const ticker = TICKERS[Math.floor(Math.random() * TICKERS.length)];
    const isContract = Math.random() < 0.35;
    const qty = isContract ? Math.floor(10 + Math.random() * 400) : Math.floor(100 + Math.random() * 4800);
    const unit = isContract ? (qty === 1 ? "contract" : "contracts") : "shares";
    return `Filled ${qty} ${unit} ${ticker}`;
  }
  function bez(s, t) {
    const mt = 1 - t;
    return {
      x: mt * mt * s.x1 + 2 * mt * t * s.mx + t * t * s.x2,
      y: mt * mt * s.y1 + 2 * mt * t * s.my + t * t * s.y2,
    };
  }
  function spawnStreak(cx, cy, now) {
    const angle = Math.random() * Math.PI * 2;
    const dx = Math.cos(angle), dy = Math.sin(angle);
    const perpAngle = angle + Math.PI / 2;
    const offset = (Math.random() - 0.5) * R * 2.1;
    const px = cx + Math.cos(perpAngle) * offset;
    const py = cy + Math.sin(perpAngle) * offset;
    const halfLen = Math.max(W, H) * 0.7;
    const x1 = px - dx * halfLen, y1 = py - dy * halfLen;
    const x2 = px + dx * halfLen, y2 = py + dy * halfLen;
    const bow = (Math.random() - 0.5) * R * 0.7;
    const mx = (x1 + x2) / 2 - dy * bow, my = (y1 + y2) / 2 + dx * bow;
    return {
      x1, y1, x2, y2, mx, my,
      label: randomLabel(),
      start: now,
      duration: 5000 + Math.random() * 1000,
    };
  }
  function drawStreak(s, now) {
    const t = (now - s.start) / s.duration;
    if (t <= 0 || t >= 1) return;
    const headT = t, tailT = Math.max(0, t - 0.3);
    const steps = 12;
    for (let i = 0; i < steps; i++) {
      const t1 = tailT + (headT - tailT) * (i / steps);
      const t2 = tailT + (headT - tailT) * ((i + 1) / steps);
      const p1 = bez(s, t1), p2 = bez(s, t2);
      const localP = i / steps;
      const alpha = 0.7 * localP * localP;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(${STREAK_GREEN},${alpha})`;
      ctx.lineWidth = 1.1;
      ctx.stroke();
    }
    let labelAlpha;
    if (t < 0.22) labelAlpha = t / 0.22;
    else if (t > 0.78) labelAlpha = (1 - t) / 0.22;
    else labelAlpha = 1;
    const head = bez(s, headT);

    /* comet head: glowing dot with its own independent pulse */
    const pulse = 0.7 + 0.3 * Math.sin(now / 220);
    ctx.beginPath();
    ctx.arc(head.x, head.y, 2.1 * pulse, 0, Math.PI * 2);
    ctx.shadowColor = `rgba(${STREAK_GREEN},1)`;
    ctx.shadowBlur = 15 * pulse;
    ctx.fillStyle = `rgba(${STREAK_GREEN},${(labelAlpha).toFixed(3)})`;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.font = "500 11px Inter, system-ui, sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillStyle = `rgba(${STREAK_GREEN},${(labelAlpha * 0.95).toFixed(3)})`;
    ctx.fillText(s.label, head.x + 11, head.y - 8);
  }
  let streaks = [];
  let nextSpawnAt = performance.now() + 900 + Math.random() * 1400;

  let rot = 0, t = 0, ringAngle = -0.42;
  let rafId = null;
  let inView = true;

  function draw() {
    rafId = null;
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    const cos = Math.cos(rot), sin = Math.sin(rot);

    /* revolving glow ring — pre-rendered, just rotate the stamp */
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ringAngle);
    ctx.drawImage(ringCv, -ringCv.width / (2 * DPR), -ringCv.height / (2 * DPR), ringCv.width / DPR, ringCv.height / DPR);
    ctx.restore();

    for (const p of pts) {
      const x = p.x * cos - p.z * sin;
      const z = p.x * sin + p.z * cos;
      const sx = cx + x * R, sy = cy + p.y * R;
      const depth = (z + 1) / 2;
      const twinkle = 0.75 + 0.25 * Math.sin(t * 0.8 + p.tw);
      const a = (0.1 + depth * 0.7) * twinkle;
      const s = (0.8 + depth * 1.5) * (1 / (1.9 - z * 0.7));
      ctx.globalAlpha = Math.min(a, 1);
      if (depth > 0.45) {
        /* glow sprite: core is ~.22 of half-size, so scale so core radius = s */
        const d = s * 9;
        ctx.drawImage(SPRITE_GLOW, sx - d / 2, sy - d / 2, d, d);
      } else {
        /* plain sprite: core is ~.5 of half-size */
        const d = s * 4;
        ctx.drawImage(SPRITE_PLAIN, sx - d / 2, sy - d / 2, d, d);
      }
    }
    ctx.globalAlpha = 1;

    if (!reduced) {
      const now = performance.now();
      streaks = streaks.filter((s) => now - s.start < s.duration);
      if (streaks.length < 2 && now >= nextSpawnAt) {
        streaks.push(spawnStreak(cx, cy, now));
        nextSpawnAt = now + 6000 + Math.random() * 2000;
      }
      for (const s of streaks) drawStreak(s, now);
    }

    rot += 0.0016; t += 0.016; ringAngle += 0.0022;
    if (!reduced && inView) rafId = requestAnimationFrame(draw);
  }

  /* stop the loop entirely while the hero is scrolled out of view */
  if (!reduced && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      if (inView && rafId === null) rafId = requestAnimationFrame(draw);
    });
    io.observe(cv);
  }

  draw();
})();
