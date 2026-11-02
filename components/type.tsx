import type { CSSProperties, ReactNode } from "react";

/** Each child line rises from behind a mask. Use inside an element with
 *  data-reveal="lines" (scroll) or on its own (plays on load). */
export function Lines({
  lines,
  delay = 0,
  stagger = 110,
}: {
  lines: ReactNode[];
  delay?: number;
  stagger?: number;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span style={{ "--d": delay + i * stagger } as CSSProperties}>{line}</span>
        </span>
      ))}
    </>
  );
}

/** Paragraph whose words illuminate as it scrolls through the viewport.
 *  Screen readers get the plain sentence. */
export function Words({
  text,
  className = "",
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  as?: "p" | "h2";
}) {
  const words = text.split(" ");
  return (
    <Tag
      className={`words ${className}`}
      data-progress=""
      style={{ "--n": words.length } as CSSProperties}
    >
      <span className="sr-only">{text.replace(/_/g, "")}</span>
      {words.map((w, i) => {
        const em = w.startsWith("_");
        const clean = em ? w.replace(/_/g, "") : w;
        return (
          <span
            key={i}
            aria-hidden="true"
            className={`w ${em ? "serif-italic text-cyan" : ""}`}
            style={{ "--i": i } as CSSProperties}
          >
            {clean}{" "}
          </span>
        );
      })}
    </Tag>
  );
}
