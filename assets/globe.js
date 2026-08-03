/* Refined dot-sphere: steel-blue glowing points, revolving glow ring, slow drift,
   plus an ambient "live activity" layer — faint green streaks with sample
   fill/P&L labels arcing near the globe. Purely decorative/illustrative. */
(function () {
  const cv = document.getElementById("globe");
  if (!cv) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = cv.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const GLOW = "rgba(110,155,199,1)";
  const UP = "87,200,143"; /* --up, as r,g,b */
  const STREAK_GREEN = "46,235,122"; /* brighter, more saturated green for the activity streaks */

  let W, H, R;
  function size() {
    const s = Math.min(760, Math.max(420, window.innerWidth * 0.52));
    W = s; H = s; R = s * 0.36;
    cv.width = W * DPR; cv.height = H * DPR;
    cv.style.width = W + "px"; cv.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
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
      const amt = Math.floor(80 + Math.random() * 24000);
      return "+$" + amt.toLocaleString("en-US");
    }
    const ticker = TICKERS[Math.floor(Math.random() * TICKERS.length)];
    const isContract = Math.random() < 0.35;
    const qty = isContract ? Math.floor(1 + Math.random() * 40) : Math.floor(10 + Math.random() * 480);
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
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    const cos = Math.cos(rot), sin = Math.sin(rot);

    /* revolving glow ring */
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ringAngle);
    ctx.scale(1, 0.28);
    ctx.beginPath();
    ctx.arc(0, 0, R * 1.28, 0, Math.PI * 2);
    ctx.shadowColor = GLOW;
    ctx.shadowBlur = 14;
    ctx.strokeStyle = "rgba(110,155,199,.55)";
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.restore();

    ctx.shadowBlur = 0;

    for (const p of pts) {
      const x = p.x * cos - p.z * sin;
      const z = p.x * sin + p.z * cos;
      const sx = cx + x * R, sy = cy + p.y * R;
      const depth = (z + 1) / 2;
      const twinkle = 0.75 + 0.25 * Math.sin(t * 0.8 + p.tw);
      const a = (0.1 + depth * 0.7) * twinkle;
      const s = (0.8 + depth * 1.5) * (1 / (1.9 - z * 0.7));
      ctx.beginPath();
      ctx.arc(sx, sy, s, 0, Math.PI * 2);
      if (depth > 0.45) {
        ctx.shadowColor = GLOW;
        ctx.shadowBlur = 5 + depth * 5;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fillStyle = `rgba(110,155,199,${Math.min(a, 1)})`;
      ctx.fill();
    }
    ctx.shadowBlur = 0;

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
    if (!reduced) requestAnimationFrame(draw);
  }
  draw();
})();
