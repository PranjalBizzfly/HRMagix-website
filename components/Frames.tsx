import type { ReactNode } from "react";

/**
 * Device frames.
 *
 * They give the product visuals the weight of real screenshots — chrome, a URL
 * bar, a bezel — and they are also the drop-in target for actual captures:
 * put a <Media> inside instead of the live rendering and the framing is done.
 */

export function BrowserFrame({
  children,
  url = "app.hrmagix.com",
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  url?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-[20px] ${
        dark
          ? "bg-violet-900 ring-1 ring-white/10"
          : "bg-surface shadow-float ring-1 ring-line"
      } sm:rounded-[24px] ${className}`}
    >
      <div
        className={`flex items-center gap-2 border-b px-4 py-3 ${
          dark ? "border-white/10 bg-white/[0.04]" : "border-line bg-surface-sunken/70"
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6058]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span
          className={`ml-3 hidden truncate rounded-md px-2.5 py-1 text-[10.5px] font-medium sm:block ${
            dark
              ? "bg-white/10 text-violet-200"
              : "bg-surface text-subtle ring-1 ring-line"
          }`}
        >
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

/** Tablet bezel, for the wider module views. */
export function TabletFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[26px] bg-violet-950 p-2.5 shadow-[0_40px_90px_-40px_rgba(31,17,71,0.55)] sm:rounded-[30px] sm:p-3 ${className}`}
    >
      <div className="overflow-hidden rounded-[18px] bg-surface sm:rounded-[20px]">{children}</div>
    </div>
  );
}
