/* Ambient background shooting stars — homepage trial.
   A fixed full-viewport canvas behind all content, spawning occasional
   faint green streaks. Deliberately much subtler than the hero-globe
   layer: no labels, lower opacity, long spawn intervals, max two live.
   Disabled entirely under prefers-reduced-motion; spawning pauses while
   the tab is hidden. */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const cv = document.createElement("canvas");
  cv.setAttribute("aria-hidden", "true");
  cv.style.cssText = "position:fixed;inset:0;z-index:-1;pointer-events:none";
  document.body.prepend(cv);
  const ctx = cv.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const GREEN = "46,235,122"; /* Signal Green #2EEB7A */

  let W, H;
  function size() {
    W = window.innerWidth;
    H = window.innerHeight;
    cv.width = W * DPR;
    cv.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  size();
  window.addEventListener("resize", size);

  function bez(s, t) {
    const mt = 1 - t;
    return {
      x: mt * mt * s.x1 + 2 * mt * t * s.mx + t * t * s.x2,
      y: mt * mt * s.y1 + 2 * mt * t * s.my + t * t * s.y2,
    };
  }

  function spawnStreak(now) {
    const angle = Math.random() * Math.PI * 2;
    const dx = Math.cos(angle), dy = Math.sin(angle);
    /* anchor anywhere on screen; path passes through it */
    const px = Math.random() * W;
    const py = Math.random() * H;
    const halfLen = Math.max(W, H) * 0.55;
    const x1 = px - dx * halfLen, y1 = py - dy * halfLen;
    const x2 = px + dx * halfLen, y2 = py + dy * halfLen;
    const bow = (Math.random() - 0.5) * Math.min(W, H) * 0.25;
    const mx = (x1 + x2) / 2 - dy * bow, my = (y1 + y2) / 2 + dx * bow;
    return { x1, y1, x2, y2, mx, my, start: now, duration: 6000 + Math.random() * 2000 };
  }

  function drawStreak(s, now) {
    const t = (now - s.start) / s.duration;
    if (t <= 0 || t >= 1) return;
    const headT = t, tailT = Math.max(0, t - 0.26);
    const steps = 10;
    for (let i = 0; i < steps; i++) {
      const t1 = tailT + (headT - tailT) * (i / steps);
      const t2 = tailT + (headT - tailT) * ((i + 1) / steps);
      const p1 = bez(s, t1), p2 = bez(s, t2);
      const localP = i / steps;
      const alpha = 0.14 * localP * localP; /* far fainter than the globe's 0.7 */
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(${GREEN},${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    /* edge fade so heads never pop in/out abruptly */
    let fade;
    if (t < 0.2) fade = t / 0.2;
    else if (t > 0.8) fade = (1 - t) / 0.2;
    else fade = 1;
    const head = bez(s, headT);
    const pulse = 0.7 + 0.3 * Math.sin(now / 240);
    ctx.beginPath();
    ctx.arc(head.x, head.y, 1.5 * pulse, 0, Math.PI * 2);
    ctx.shadowColor = `rgba(${GREEN},.8)`;
    ctx.shadowBlur = 7 * pulse;
    ctx.fillStyle = `rgba(${GREEN},${(0.3 * fade).toFixed(3)})`;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  let streaks = [];
  let nextSpawnAt = performance.now() + 4000 + Math.random() * 6000;
  let raf = null;

  function draw(now) {
    ctx.clearRect(0, 0, W, H);
    streaks = streaks.filter((s) => now - s.start < s.duration);
    if (streaks.length < 2 && now >= nextSpawnAt) {
      streaks.push(spawnStreak(now));
      nextSpawnAt = now + 8000 + Math.random() * 7000; /* every 8–15s */
    }
    for (const s of streaks) drawStreak(s, now);
    raf = requestAnimationFrame(draw);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
    } else if (!raf) {
      /* drop stale streaks and hold off spawning briefly on return */
      streaks = [];
      nextSpawnAt = performance.now() + 4000 + Math.random() * 6000;
      raf = requestAnimationFrame(draw);
    }
  });

  raf = requestAnimationFrame(draw);
})();
