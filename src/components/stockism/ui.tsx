import type { ButtonHTMLAttributes, ReactNode } from "react";

export function PrimaryButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex h-12 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-bg transition-opacity disabled:opacity-40 ${className}`}
      {...props}
    />
  );
}

export function GhostButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex h-12 items-center justify-center rounded-xl border border-line bg-surface px-5 text-sm font-medium text-fg transition-colors hover:bg-surface-2 disabled:opacity-40 ${className}`}
      {...props}
    />
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-line bg-surface p-4 ${className}`}>{children}</section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs tracking-widest text-primary uppercase">{children}</p>;
}

export function Choice({
  selected,
  title,
  detail,
  onClick,
}: {
  selected: boolean;
  title: string;
  detail?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left ${
        selected ? "border-primary bg-surface-2" : "border-line bg-surface"
      }`}
    >
      <span>
        <span className="block text-sm font-medium text-fg">{title}</span>
        {detail ? <span className="mt-0.5 block text-sm text-muted">{detail}</span> : null}
      </span>
      <span
        className={`size-3 shrink-0 rounded-full border ${selected ? "border-primary bg-primary" : "border-line"}`}
        aria-hidden="true"
      />
    </button>
  );
}

export function Spark({ values, up }: { values: number[]; up: boolean }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const d = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 72;
      const y = 22 - ((value - min) / span) * 20;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 72 24" className="h-6 w-16 shrink-0" aria-hidden="true">
      <path d={d} fill="none" stroke={up ? "var(--color-primary)" : "var(--color-risk)"} strokeWidth="1.6" />
    </svg>
  );
}

export function Meter({ score }: { score: number }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-surface-2" aria-hidden="true">
      <div className="h-full rounded-full bg-primary" style={{ width: `${score}%` }} />
    </div>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <Card className="py-10 text-center">
      <h2 className="text-lg font-semibold text-fg">{title}</h2>
      <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{body}</p>
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </Card>
  );
}
