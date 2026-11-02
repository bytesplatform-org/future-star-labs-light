"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page.
 *  - [data-reveal]   → gets `data-in` once it enters the viewport
 *  - [data-progress] → receives `--p` (0..1) as it travels through the viewport
 *  - [data-parallax] → receives `--y` (px) offset; value = speed factor
 * Work is done only for elements currently near the viewport, in one rAF.
 */
export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Clip-path hides an element from IntersectionObserver in Chrome, so
    // clipped reveals are triggered by their (unclipped) parent instead.
    const targets = new Map<Element, Element[]>();
    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            targets.get(e.target)?.forEach((el) => el.setAttribute("data-in", ""));
            targets.delete(e.target);
            revealIO.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    const active = new Set<HTMLElement>();
    const trackIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) active.add(el);
          else active.delete(el);
        }
        schedule();
      },
      { rootMargin: "20% 0px 20% 0px" },
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-in])")
        .forEach((el) => {
          const trigger =
            el.dataset.reveal === "image" && el.parentElement ? el.parentElement : el;
          const list = targets.get(trigger) ?? [];
          if (!list.includes(el)) list.push(el);
          targets.set(trigger, list);
          revealIO.observe(trigger);
        });
      if (!reduce) {
        document
          .querySelectorAll<HTMLElement>("[data-progress],[data-parallax]")
          .forEach((el) => trackIO.observe(el));
      }
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of active) {
        const r = el.getBoundingClientRect();
        if (el.dataset.progress !== undefined) {
          // 0 when the element's top hits the 85% line, 1 when its bottom passes 45%
          const start = vh * 0.85;
          const end = vh * 0.45;
          const total = r.height + (start - end);
          const p = Math.min(1, Math.max(0, (start - r.top) / total));
          el.style.setProperty("--p", p.toFixed(4));
        }
        if (el.dataset.parallax !== undefined) {
          const speed = parseFloat(el.dataset.parallax || "0.15");
          const center = r.top + r.height / 2 - vh / 2;
          el.style.setProperty("--y", `${(-center * speed).toFixed(1)}px`);
        }
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    scan();
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      revealIO.disconnect();
      trackIO.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
