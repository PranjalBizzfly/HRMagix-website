import type { ReactNode } from "react";
import { Reveal } from "./motion";

/**
 * Section vocabulary for the structured layout.
 *
 * Every section on the redesigned pages opens the same way — an eyebrow pill,
 * a heading and an optional lede — so the rhythm is set by one component
 * rather than re-typed per page.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal
      y={12}
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={`display display-lg text-balance ${eyebrow ? "mt-5" : ""}`}>{title}</h2>
      {lede && (
        <p
          className={`mt-5 text-[16.5px] leading-[1.7] text-muted sm:text-[17.5px] ${
            centered ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}

/** A full-width band with a soft ground and generous, consistent padding. */
export function Section({
  children,
  ground = "canvas",
  id,
  className = "",
}: {
  children: ReactNode;
  ground?: "canvas" | "sunken" | "wash";
  id?: string;
  className?: string;
}) {
  const grounds = {
    canvas: "bg-canvas",
    sunken: "bg-surface-sunken",
    wash: "wash",
  };
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-8 sm:py-10 md:py-14 ${grounds[ground]} ${className}`}
    >
      <div className="shell relative">{children}</div>
    </section>
  );
}
