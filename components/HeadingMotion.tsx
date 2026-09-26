"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Types every h1 and h2 on the site out, letter by letter, as it scrolls into
 * view.
 *
 * Done without touching the heading's text: the script measures the longest
 * line, and CSS reveals the heading one character-width at a time (a stepped
 * clip) with a blinking caret. React keeps full ownership of the DOM, so
 * headings that re-render (filters, search) are never corrupted.
 *
 * Headings are only hidden once marked, so with JavaScript off every heading
 * is visible. Headings that already type themselves (the Typewriter
 * component) are skipped. Nothing happens under prefers-reduced-motion.
 */
const MS_PER_CHAR = 35;
const MAX_MS = 1800;

export default function HeadingMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = (h: HTMLElement) => {
      const text = (h.textContent ?? "").trim();
      const lineHeight = parseFloat(getComputedStyle(h).lineHeight) || 1;
      const lines = Math.max(1, Math.round(h.getBoundingClientRect().height / lineHeight));
      const chars = Math.max(4, Math.ceil(text.length / lines));
      h.style.setProperty("--chars", String(chars));
      h.style.setProperty("--type-ms", `${Math.min(chars * MS_PER_CHAR, MAX_MS)}ms`);
      h.dataset.h = "in";
      // Drop the caret once typing has finished.
      window.setTimeout(() => (h.dataset.h = "done"), Math.min(chars * MS_PER_CHAR, MAX_MS) + 900);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          start(e.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    const mark = () => {
      document.querySelectorAll<HTMLElement>("main h1, main h2").forEach((h) => {
        if (h.dataset.h) return;
        if (h.closest("[role=dialog]")) return;
        // Already types itself.
        if (h.querySelector(".type-caret, .sr-only")) {
          h.dataset.h = "self";
          return;
        }
        h.dataset.h = "wait";
        // Already on screen: type now rather than waiting for the observer.
        const r = h.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) start(h);
        else io.observe(h);
      });
    };

    const frame = requestAnimationFrame(mark);
    const mo = new MutationObserver(mark);
    const main = document.getElementById("main");
    if (main) mo.observe(main, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
