"use client";

import Image from "next/image";
import { useState } from "react";
import { frontiers } from "@/lib/content";

/**
 * Typographic index of the five frontiers. On desktop, hovering or focusing
 * a row swaps the sticky plate on the right. On mobile, each row carries
 * its own image so nothing depends on hover.
 */
export function Frontiers() {
  const [active, setActive] = useState(0);
  const current = frontiers[active];

  return (
    <div className="grid grid-cols-12 gap-x-5 md:gap-x-8">
      <ol className="col-span-12 border-t border-line lg:col-span-7">
        {frontiers.map((f, i) => {
          const on = i === active;
          return (
            <li
              key={f.n}
              className="group border-b border-line"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              data-reveal="up"
              style={{ "--d": i * 80 } as React.CSSProperties}
            >
              <div
                tabIndex={0}
                className="grid cursor-default grid-cols-[2.5rem_1fr] gap-x-3 py-7 outline-offset-[-2px] md:grid-cols-[4rem_1fr] md:py-9"
                aria-describedby={`frontier-${f.n}`}
              >
                <span
                  className={`meta pt-3 transition-colors duration-500 md:pt-5 ${on ? "text-cyan" : "text-muted"}`}
                >
                  {f.n}
                </span>
                <div>
                  <h3
                    className={`display text-[2.6rem] transition-[transform,color] duration-700 ease-[var(--ease-out)] sm:text-[3.4rem] lg:text-[clamp(3rem,4.6vw,5.25rem)] ${
                      on ? "lg:translate-x-4 text-ink" : "lg:text-ink/45"
                    }`}
                  >
                    {f.name}
                  </h3>
                  <div
                    className={`grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-700 ease-[var(--ease-out)] ${
                      on ? "" : "lg:grid-rows-[0fr] lg:opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden lg:pl-4">
                      <p
                        id={`frontier-${f.n}`}
                        className="mt-4 max-w-[34rem] text-[1rem] leading-relaxed text-muted md:text-[1.0625rem]"
                      >
                        {f.body}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                        {f.tags.map((t) => (
                          <li key={t} className="meta text-ink/70">
                            / {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* mobile + tablet: inline plate */}
                  <div className="relative mt-6 aspect-[4/3] overflow-hidden lg:hidden">
                    <Image
                      src={f.image}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 0px, 92vw"
                      className="object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* desktop sticky plate */}
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
            {frontiers.map((f, i) => (
              <Image
                key={f.n}
                src={f.image}
                alt={i === active ? f.alt : ""}
                aria-hidden={i !== active}
                fill
                sizes="(min-width: 1680px) 1200px, 72vw"
                placeholder="blur"
                className={`object-cover transition-[opacity,transform,clip-path] duration-[1100ms] ease-[var(--ease-out)] ${
                  i === active
                    ? "scale-100 opacity-100 [clip-path:inset(0_0_0_0)]"
                    : "scale-[1.08] opacity-0 [clip-path:inset(0_0_0_100%)]"
                }`}
              />
            ))}
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="meta text-muted">
              Plate {current.n} / 05
            </span>
            <span className="meta text-ink">{current.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
