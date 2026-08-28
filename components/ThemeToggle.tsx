"use client";

import { useTheme } from "./theme";

/**
 * Light ↔ dark toggle.
 *
 * A real <button>, so Enter/Space and focus order come for free. Both glyphs
 * are always in the DOM and crossfade — swapping the element would make the
 * icon jump on every press. Before hydration the button renders in a neutral
 * state with `suppressHydrationWarning`, because the server cannot know which
 * theme the blocking script picked.
 */
export default function ThemeToggle({
  className = "",
  size = "md",
}: {
  className?: string;
  /** "sm" matches the nav's 40px controls; "md" the 44px touch targets. */
  size?: "sm" | "md";
}) {
  const { theme, toggle, ready } = useTheme();
  const dark = ready && theme === "dark";
  const box = size === "sm" ? "h-10 w-10" : "h-11 w-11";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      suppressHydrationWarning
      className={`group relative grid ${box} shrink-0 place-items-center overflow-hidden rounded-full bg-surface text-accent ring-1 ring-inset ring-line-strong transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-strong hover:ring-line-accent motion-reduce:hover:translate-y-0 ${className}`}
    >
      {/* Brand glow that only blooms on hover, and only in dark. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_50%_120%,rgba(124,92,255,0.45),transparent_70%)]"
      />

      <span className="relative block h-[18px] w-[18px]">
        {/* Sun — shown in dark mode, i.e. "press for light". */}
        <Glyph shown={dark}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" />
        </Glyph>
        {/* Moon — shown in light mode. */}
        <Glyph shown={!dark}>
          <path d="M20.2 14.2A8.4 8.4 0 0 1 9.8 3.8a8.4 8.4 0 1 0 10.4 10.4Z" />
        </Glyph>
      </span>
    </button>
  );
}

function Glyph({ shown, children }: { shown: boolean; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`absolute inset-0 h-full w-full transition-all duration-300 ease-out motion-reduce:transition-none ${
        shown ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
      }`}
    >
      {children}
    </svg>
  );
}
