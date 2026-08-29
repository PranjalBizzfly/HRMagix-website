"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./icons";

/**
 * In-page section index for long pages.
 *
 * WHY IT EXISTS. Several pages on this site run to four, five or six thousand
 * words across five to ten sections. Once a reader is two screens down there is
 * nothing telling them where they are, how much is left, or how to reach the
 * one section they actually came for. The blog and the white papers already
 * solved this with a contents rail; the solution, industry, policy and hub
 * pages had no equivalent.
 *
 * WHAT IT ADDS — AND DOES NOT. It adds no content. Every label is the text of a
 * heading that already exists on the page, read from the DOM at run time. It
 * changes no route, no navigation and no page structure: the bar is fixed
 * positioned, so nothing around it moves.
 *
 * HOW IT BEHAVES. Hidden until the reader passes the page header, so it never
 * competes with the hero. Then it docks under the site header showing the
 * section currently in view, and expands to the full list on click. Identical
 * on desktop and mobile, because the orientation problem is identical.
 *
 * Headings without an `id` are given a slugified one on mount, so a section can
 * be linked to directly without every page having to hand-author anchors.
 *
 * WHY IT PORTALS TO THE BODY. Pages render inside `RouteTransition`, whose
 * `route-fade` animation lists `transform` in its keyframes and uses
 * `fill-mode: both`. An animation that stays in effect keeps the property
 * animated, and an animated `transform` makes the element a containing block —
 * so a `position: fixed` child resolves against the page wrapper instead of the
 * viewport and ends up pinned near the top of the document, invisible once
 * scrolled. Portalling to `document.body` puts the bar outside that subtree,
 * which is where a viewport-fixed overlay belongs anyway.
 */

type Section = { id: string; label: string };

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);

export default function OnThisPage({
  /** Skip headings whose text matches — closing CTAs are not sections. */
  exclude = [],
  /** Only render when the page has at least this many sections. */
  min = 3,
}: {
  exclude?: string[];
  min?: number;
}) {
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState<string>("");
  const [docked, setDocked] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  /* Build the index from the headings already on the page. */
  useEffect(() => {
    const main = document.getElementById("main") ?? document.body;
    const found: Section[] = [];
    const used = new Set<string>();

    main.querySelectorAll("h2").forEach((h) => {
      const label = (h.textContent ?? "").trim();
      if (!label || label.length > 70) return;
      if (exclude.some((e) => label.toLowerCase().includes(e.toLowerCase()))) return;
      // A heading inside a disclosure or a card is not a page section.
      if (h.closest("[role='dialog'], details, aside")) return;

      let id = h.id || slug(label);
      while (used.has(id)) id = `${id}-2`;
      used.add(id);
      if (!h.id) h.id = id;
      // Clear the fixed header when jumped to.
      h.style.scrollMarginTop = "132px";
      found.push({ id, label });
    });

    setSections(found.length >= min ? found : []);
  }, [exclude, min]);

  /* Dock once the reader is past the header, and track the section in view. */
  useEffect(() => {
    if (!sections.length) return;
    let frame = 0;

    const read = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setDocked(window.scrollY > 420);

        // The active section is the last one whose top has passed the header.
        let current = sections[0]?.id ?? "";
        for (const s of sections) {
          const el = document.getElementById(s.id);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= 160) current = s.id;
          else break;
        }
        setActive(current);
      });
    };

    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    read();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [sections]);

  /* Close the list on outside click or Escape. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  if (!sections.length || !mounted) return null;

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === active));
  const activeLabel = sections[activeIndex]?.label ?? sections[0].label;

  const jump = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    // Move focus so keyboard and screen-reader users land in the section too.
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  return createPortal(
    <div
      ref={panelRef}
      className={`fixed inset-x-0 top-[68px] z-40 transition-all duration-300 sm:top-[76px] ${
        docked ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <div className="border-b border-line bg-canvas shadow-soft">
        <div className="shell">
          {/* Progress through the page, as a hairline rather than a widget. */}
          <div className="relative h-px w-full bg-line" aria-hidden="true">
            <span
              className="absolute inset-y-0 left-0 bg-brand transition-[width] duration-300"
              style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
            />
          </div>

          <div className="flex items-center gap-3 py-2.5">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="on-this-page-list"
              className="group flex min-w-0 flex-1 items-center gap-3 rounded-lg py-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span className="hidden shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-subtle sm:inline">
                On this page
              </span>
              <span className="shrink-0 font-display text-[12px] font-bold tabular-nums text-accent">
                {activeIndex + 1}/{sections.length}
              </span>
              <span className="min-w-0 flex-1 truncate text-[14px] font-semibold text-heading transition-colors group-hover:text-accent">
                {activeLabel}
              </span>
              <Icon
                name="chevronDown"
                className={`h-3.5 w-3.5 shrink-0 text-accent transition-transform duration-300 ${
                  open ? "-rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {open && (
            <nav
              id="on-this-page-list"
              aria-label="Sections on this page"
              className="max-h-[60vh] overflow-y-auto border-t border-line pb-4 pt-3"
            >
              <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => jump(s.id)}
                      aria-current={s.id === active ? "true" : undefined}
                      className={`flex w-full items-baseline gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-surface-raised/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                        s.id === active ? "text-accent" : "text-muted"
                      }`}
                    >
                      <span className="shrink-0 font-display text-[11px] font-bold tabular-nums text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 text-[14px] leading-snug">{s.label}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
