/* Refined dot-sphere: steel-blue glowing points, revolving glow ring, slow drift. */
(function () {
  const cv = document.getElementById("globe");
  if (!cv) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = cv.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const GLOW = "rgba(110,155,199,1)";

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

    rot += 0.0016; t += 0.016; ringAngle += 0.0022;
    if (!reduced) requestAnimationFrame(draw);
  }
  draw();
})();
