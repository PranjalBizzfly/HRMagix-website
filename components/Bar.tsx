"use client";

import { useInView } from "./motion";

/** Progress meter that fills once it scrolls into view. */
export default function Bar({
  pct,
  delay = 0,
  tone = "light",
}: {
  pct: number;
  delay?: number;
  tone?: "light" | "dark";
}) {
  const { ref, shown } = useInView<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`block h-full rounded-full ${
        tone === "light"
          ? "bg-gradient-to-r from-violet-400 to-violet-200"
          : "bg-gradient-to-r from-violet-500 to-violet-400"
      }`}
      style={{
        width: shown ? `${pct}%` : "0%",
        transition: "width 1.1s cubic-bezier(.22,1,.36,1)",
        transitionDelay: `${delay}ms`,
      }}
    />
  );
}
