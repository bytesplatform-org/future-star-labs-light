/** Simplified helix mark, after the Future Star Labs logo. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 20"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
    >
      <g stroke="currentColor" strokeWidth="1.1" opacity="0.55">
        {[6, 10, 14, 18, 30, 34, 38, 42].map((x) => (
          <line key={x} x1={x} x2={x} y1="4.5" y2="15.5" />
        ))}
      </g>
      <path
        d="M2 10 C 8 -1, 16 -1, 24 10 S 40 21, 46 10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M2 10 C 8 21, 16 21, 24 10 S 40 -1, 46 10"
        stroke="var(--cyan)"
        strokeWidth="2"
      />
    </svg>
  );
}
