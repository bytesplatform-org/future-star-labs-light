"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/content";
import { Mark } from "./mark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setScrolled(y > 24);
        if (Math.abs(y - lastY) > 6) {
          setHidden(y > lastY && y > 240);
          lastY = y;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("a");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const items = [
          toggleRef.current,
          ...panelRef.current.querySelectorAll<HTMLElement>("a"),
        ].filter(Boolean) as HTMLElement[];
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          items[items.length - 1].focus();
        } else if (!e.shiftKey && i === items.length - 1) {
          e.preventDefault();
          items[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-700 ease-[var(--ease-out)]",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        solid
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[4.5rem]">
        <a
          href="#top"
          className="group relative z-10 flex items-center gap-3 text-ink"
          aria-label="Future Star Labs — back to top"
        >
          <Mark className="h-4 w-10 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-x-110" />
          <span className="text-[0.8125rem] font-medium uppercase tracking-[0.14em]">
            Future Star Labs
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ol className="flex items-center gap-8 lg:gap-10">
            {nav.slice(0, 4).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-baseline gap-1.5 text-[0.875rem] text-ink"
                >
                  <span className="meta text-muted">{item.n}</span>
                  <span className="link-line">{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 border-b border-ink pb-0.5 text-[0.875rem] font-medium md:inline-flex"
        >
          Start a conversation <span className="arrow">↗</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-10 -mr-2 flex h-11 items-center gap-3 px-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="meta">{open ? "Close" : "Menu"}</span>
          <span className="relative block h-2.5 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-transform duration-500 ${open ? "top-1/2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-transform duration-500 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`}
            />
          </span>
        </button>
      </div>
    </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={[
          "fixed inset-0 z-40 h-[100svh] bg-paper transition-[clip-path] duration-700 ease-[var(--ease-in-out)] md:hidden",
          open
            ? "[clip-path:inset(0_0_0_0)]"
            : "pointer-events-none invisible [clip-path:inset(0_0_100%_0)]",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="wrap flex h-full flex-col justify-between pb-8 pt-28">
          <nav aria-label="Mobile">
            <ol className="border-t border-line">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4"
                    tabIndex={open ? 0 : -1}
                  >
                    <span className="display text-[2.75rem]">{item.label}</span>
                    <span className="meta text-muted">{item.n}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex gap-6 text-sm">
            <a href={site.social.linkedin} tabIndex={open ? 0 : -1} rel="noopener" target="_blank">LinkedIn ↗</a>
            <a href={site.social.instagram} tabIndex={open ? 0 : -1} rel="noopener" target="_blank">Instagram ↗</a>
            <a href={site.social.x} tabIndex={open ? 0 : -1} rel="noopener" target="_blank">X ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}
