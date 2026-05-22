"use client";

import { useEffect, useRef } from "react";

/** Hero background: rising bubbles, drifting steam, warm/cool liquid shimmer. */
export default function LiquidCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w = (canvas.width = canvas.clientWidth * dpr);
    let h = (canvas.height = canvas.clientHeight * dpr);

    type B = { x: number; y: number; r: number; v: number; warm: boolean; wobble: number };
    const COUNT = Math.min(80, Math.floor((w * h) / (30000 * dpr)));
    const mk = (): B => ({
      x: Math.random() * w,
      y: h + Math.random() * h,
      r: (1 + Math.random() * 4) * dpr,
      v: (0.4 + Math.random() * 1.4) * dpr,
      warm: Math.random() < 0.6,
      wobble: Math.random() * Math.PI * 2,
    });
    const bubbles: B[] = Array.from({ length: COUNT }, mk);

    const onResize = () => {
      w = canvas.width = canvas.clientWidth * dpr;
      h = canvas.height = canvas.clientHeight * dpr;
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // warm bottom glow / cool top
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "rgba(95,182,201,0.04)");
      g.addColorStop(1, "rgba(217,154,78,0.07)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const b of bubbles) {
        b.y -= b.v;
        b.wobble += 0.03;
        b.x += Math.sin(b.wobble) * 0.4 * dpr;
        if (b.y < -10) Object.assign(b, mk(), { y: h + 10 });

        const col = b.warm ? "217,154,78" : "95,182,201";
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${col},0.5)`;
        ctx.lineWidth = 1 * dpr;
        ctx.stroke();
        // highlight
        ctx.beginPath();
        ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242,234,217,0.4)`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}
