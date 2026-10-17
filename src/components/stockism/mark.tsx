import { useId } from "react";

export function Mark({ size = 36 }: { size?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="8" y1="6" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e7f3ff" />
          <stop offset="0.45" stopColor="#5eb6ff" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <path
        d="M46 13H24c-6.4 0-11 4.2-11 10.2S17.6 33 24 33h16c6.2 0 11 4 11 10.2C51 50.2 45.4 54 36.2 54H14"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 22.5 47 15l2.2 7.2"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="inline-flex items-baseline gap-1.5 leading-none">
      <span className="text-base font-semibold tracking-tight text-fg">Stock-ism</span>
      <span className="font-mono text-xs font-medium tracking-widest text-primary">AI</span>
    </span>
  );
}
