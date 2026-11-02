"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  /** wavelength in px at 1440px viewport width; scales with width */
  wavelength?: number;
  speed?: number;
  /** stroke colours: navy strand, cyan strand, rungs */
  colors?: [string, string, string];
};

/**
 * The Future Star Labs helix, drawn live. A horizontal double helix with
 * depth-shaded strands and base-pair rungs, rotating slowly. Pauses when
 * off-screen or when the tab is hidden; renders one still frame for
 * reduced-motion users.
 */
export function Helix({
  className,
  wavelength = 520,
  speed = 0.00035,
  colors = ["11,27,58", "58,166,200", "11,27,58"],
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let elapsed = 0;
    let last = 0;
    let phaseOffset = 0;
    const [cA, cB, cR] = colors;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const lambda = Math.max(260, wavelength * (Math.max(w, 360) / 1440));
      const k = (Math.PI * 2) / lambda;
      const amp = h * 0.36;
      const cy = h / 2;
      const phase = t * speed + phaseOffset;
      const step = 3;

      // rungs (drawn first, sit behind strands)
      const rungGap = lambda / 11;
      const startX = -((phase / k) % rungGap);
      for (let x = startX; x <= w + rungGap; x += rungGap) {
        const a = x * k + phase;
        const yA = cy + Math.sin(a) * amp;
        const yB = cy + Math.sin(a + Math.PI) * amp;
        const depth = Math.abs(Math.cos(a));
        ctx.strokeStyle = `rgba(${cR},${0.08 + depth * 0.22})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, yA);
        ctx.lineTo(x, yB);
        ctx.stroke();
        ctx.fillStyle = `rgba(${cR},${0.25 + depth * 0.45})`;
        ctx.beginPath();
        ctx.arc(x, yA, 1.4, 0, Math.PI * 2);
        ctx.arc(x, yB, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // strands as short segments so thickness/opacity follow depth
      const strand = (offset: number, rgb: string) => {
        let px = 0;
        let py = cy + Math.sin(phase + offset) * amp;
        for (let x = step; x <= w + step; x += step) {
          const a = x * k + phase + offset;
          const y = cy + Math.sin(a) * amp;
          const z = (Math.cos(a) + 1) / 2; // 0 back … 1 front
          ctx.strokeStyle = `rgba(${rgb},${0.25 + z * 0.75})`;
          ctx.lineWidth = 0.75 + z * 2.25;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(x, y);
          ctx.stroke();
          px = x;
          py = y;
        }
      };
      ctx.lineCap = "round";
      strand(0, cA);
      strand(Math.PI, cB);
    };

    const loop = (now: number) => {
      elapsed += Math.min(50, last ? now - last : 16);
      last = now;
      draw(elapsed);
      raf = visible ? requestAnimationFrame(loop) : 0;
    };
    const start = () => {
      if (!raf && visible && !reduce) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    };

    // small scroll coupling: the helix "turns" as you scroll
    const onScroll = () => {
      phaseOffset = window.scrollY * 0.004;
      if (reduce || !raf) draw(elapsed);
    };

    resize();
    draw(0);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && !document.hidden;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      draw(elapsed);
    });
    ro.observe(canvas);
    const onVis = () => {
      visible = !document.hidden;
      if (visible) start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("scroll", onScroll);
    };
    // colors is a tuple literal; stringify to keep deps stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wavelength, speed, colors.join("|")]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
