import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      {/* HRMagix's own product mark, taken from app.hrmagix.com/favicon.svg */}
      <Image
        src="/hrmagix-mark.svg"
        alt=""
        width={36}
        height={36}
        unoptimized
        priority
        className="h-9 w-9 shrink-0 rounded-[11px]"
      />
      {!compact && (
        <span
          className={`font-display text-[20px] font-bold tracking-[-0.04em] ${
            light ? "text-white" : "text-heading"
          }`}
        >
          HR<span className="text-accent-soft">Magix</span>
        </span>
      )}
    </span>
  );
}

/** Circular arrow badge that sits inside the pill buttons. */
function ArrowBadge({ tone }: { tone: "onPrimary" | "onLight" | "onDark" }) {
  const skin = {
    onPrimary: "bg-violet-800/95 text-white",
    onLight: "bg-brand text-white",
    onDark: "bg-white text-violet-700",
  }[tone];
  return (
    <span
      aria-hidden="true"
      className={`grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0 ${skin}`}
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8h9M8.5 4l4 4-4 4" />
      </svg>
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  /** Renders as an inert control that still reads correctly to screen readers. */
  disabled?: boolean;
};

const sizes = {
  sm: "h-10 pl-4 pr-1.5 text-[13.5px]",
  md: "h-12 pl-5 pr-2 text-[14.5px]",
  lg: "h-[58px] pl-7 pr-2.5 text-[16px]",
};

const flatSizes = {
  sm: "h-10 px-4 text-[13.5px]",
  md: "h-12 px-5 text-[14.5px]",
  lg: "h-[58px] px-7 text-[16px]",
};

/**
 * Pill button. The primary/outline variants carry a circular arrow badge on the
 * right — the site's signature action shape.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "group inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-out active:scale-95 motion-reduce:active:scale-100";

  const skins = {
    primary:
      "btn-shimmer bg-brand text-white shadow-glow hover:scale-[1.04] hover:bg-brand-hover motion-reduce:hover:scale-100",
    outline:
      "bg-surface text-heading ring-1 ring-inset ring-line-strong hover:scale-[1.04] hover:ring-line-accent hover:shadow-soft motion-reduce:hover:scale-100",
    light:
      "bg-white text-violet-800 hover:scale-[1.04] hover:shadow-lift motion-reduce:hover:scale-100",
    ghost:
      "bg-surface-sunken text-accent-deep ring-1 ring-inset ring-line hover:bg-surface-raised hover:text-accent-strong",
  };

  const tone = variant === "primary" ? "onPrimary" : variant === "ghost" ? "onLight" : "onLight";

  const inert = disabled
    ? "pointer-events-none opacity-50 grayscale hover:translate-y-0 hover:shadow-none"
    : "";

  return (
    <Link
      href={disabled ? "#" : href}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={`${base} ${arrow ? sizes[size] : flatSizes[size]} ${skins[variant]} ${inert} ${className}`}
    >
      {children}
      {arrow && <ArrowBadge tone={tone} />}
    </Link>
  );
}

/**
 * Same shape as Button, for real form submits. Carries the full state set:
 * default, hover, focus, active, disabled and loading (busy + spinner).
 */
export function SubmitButton({
  children,
  className = "",
  disabled = false,
  loading = false,
  loadingLabel = "Sending…",
}: {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingLabel?: string;
}) {
  const off = disabled || loading;
  return (
    <button
      type="submit"
      disabled={off}
      aria-busy={loading || undefined}
      className={`group inline-flex h-[58px] select-none items-center justify-center gap-2.5 rounded-full bg-brand pl-7 pr-2.5 text-[16px] font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover active:scale-[0.98] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-60 disabled:shadow-none ${className}`}
    >
      {loading ? loadingLabel : children}
      {loading ? (
        <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-violet-800/95">
          <Spinner className="h-3.5 w-3.5" />
        </span>
      ) : (
        <ArrowBadge tone="onPrimary" />
      )}
    </button>
  );
}

/** Inline busy indicator used by buttons in their loading state. */
export function Spinner({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={`animate-spin motion-reduce:animate-none ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.25" />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`h-3.5 w-3.5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5 6.3 12 13 4.5" />
    </svg>
  );
}

/** Ringed tick, used in the "after" column and benefit lists. */
export function TickCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 22" aria-hidden="true" className={`h-[22px] w-[22px] shrink-0 ${className}`} fill="none">
      <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.6 11.4 9.6 14.2 15.2 7.9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Ringed cross, used in the "before" column. */
export function CrossCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 22" aria-hidden="true" className={`h-[22px] w-[22px] shrink-0 ${className}`} fill="none">
      <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.8 7.8l6.4 6.4M14.2 7.8l-6.4 6.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

export function Pill({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "solid";
  className?: string;
}) {
  const skins = {
    light: "bg-surface text-accent-strong ring-1 ring-line shadow-soft",
    dark: "bg-white/10 text-violet-100 ring-1 ring-white/15",
    solid: "bg-surface-raised text-accent-strong",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold ${skins[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Centered section header: eyebrow, mixed-weight display heading, sub-line.
 * `title` accepts markup so individual words can be bolded.
 */
export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
  tone = "dark",
  size = "lg",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  /** "md" is the 32–36px sub-section tier. */
  size?: "lg" | "md";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-5 text-[12px] font-bold uppercase tracking-[0.2em] ${
            tone === "light" ? "text-violet-300" : "text-accent-soft"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`display ${size === "lg" ? "display-lg" : "display-md"} ${
          tone === "light" ? "!text-white" : ""
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`lede mt-[38px] ${tone === "light" ? "!text-violet-200/85" : ""} ${
            align === "center" ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/** Five-star rating drawn as SVG so it renders identically everywhere. */
/**
 * Small status badge. Only ever carries a fact HRMagix publishes — the platform
 * version or the trial length — never decoration.
 */
export function Badge({
  children,
  tone = "solid",
}: {
  children: ReactNode;
  tone?: "solid" | "outline";
}) {
  const skins = {
    solid: "bg-surface-raised text-accent-strong",
    outline: "bg-surface text-accent ring-1 ring-inset ring-line-strong",
  };
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.08em] ${skins[tone]}`}
    >
      {children}
    </span>
  );
}

export function Stars({ className = "", size = "h-3.5 w-3.5" }: { className?: string; size?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-gold ${className}`} role="img" aria-label="Rated 5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={size} fill="currentColor" aria-hidden="true" focusable="false">
          <path d="m12 3.4 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 9.6l5.9-.8L12 3.4Z" />
        </svg>
      ))}
    </span>
  );
}
