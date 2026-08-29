"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

/**
 * Back-to-top control.
 *
 * Appears after two viewports of scrolling — never on load — and lifts above
 * the mobile action bar when that is showing, so the two never overlap.
 */
export default function ScrollTop() {
  const [shown, setShown] = useState(false);
  const [barUp, setBarUp] = useState(false);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setShown(window.scrollY > window.innerHeight * 2));
    };
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", tick);
    };
  }, []);

  useEffect(() => {
    const onBar = (e: Event) => setBarUp((e as CustomEvent<{ shown: boolean }>).detail.shown);
    window.addEventListener("hrmagix:sticky", onBar as EventListener);
    return () => window.removeEventListener("hrmagix:sticky", onBar as EventListener);
  }, []);

  const toTop = () => {
    // Move focus first, without scrolling — focusing a target scrolls it into
    // view and would otherwise cancel the smooth scroll half way up.
    document.getElementById("main")?.focus({ preventScroll: true });
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      aria-label="Back to top"
      className={`group fixed right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-white shadow-glow ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-brand-hover hover:shadow-[0_8px_24px_rgba(113,80,240,0.5)] active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:right-6 sm:h-12 sm:w-12 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      } ${barUp ? "bottom-[calc(5.5rem+env(safe-area-inset-bottom))]" : "bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-6"}`}
    >
      <Icon
        name="arrowRight"
        className="h-5 w-5 -rotate-90 text-white transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0"
      />
    </button>
  );
}
