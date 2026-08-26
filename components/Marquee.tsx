import type { CSSProperties } from "react";

/**
 * Infinite ticker. The list is rendered twice and translated -50%, so the loop
 * is seamless with a single CSS animation and no JS.
 */
export default function Marquee({
  items,
  duration = 42,
  reverse = false,
  tone = "light",
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
  tone?: "light" | "dark";
}) {
  const row = [...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden" aria-hidden="true">
      <div
        className="flex w-max animate-marquee items-center gap-3 will-change-transform"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as CSSProperties
        }
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium ${
              tone === "dark"
                ? "bg-white/[0.06] text-violet-100 ring-1 ring-inset ring-white/10"
                : "bg-white text-ink-soft ring-1 ring-inset ring-violet-100"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
