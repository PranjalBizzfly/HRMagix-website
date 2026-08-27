"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icons";

const DISMISS_KEY = "hrmagix:sticky-cta-dismissed";

/**
 * Mobile-only action bar.
 *
 * Appears once the hero has scrolled past, hides itself while the nav sheet is
 * open, and can be dismissed for the session. Sits above the iOS home
 * indicator via env(safe-area-inset-bottom), and never renders from lg up.
 */
export default function StickyCta() {
  const pathname = usePathname();
  const [past, setPast] = useState(false);
  const [dismissed, setDismissed] = useState(true); // assume dismissed until storage is read
  const [navOpen, setNavOpen] = useState(false);

  // Read the session flag after mount so SSR markup stays stable.
  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  // Show once roughly a viewport of scrolling has happened.
  useEffect(() => {
    setPast(false);
    let frame = 0;
    const tick = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPast(window.scrollY > window.innerHeight * 0.9));
    };
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", tick);
    };
  }, [pathname]);

  useEffect(() => {
    const onNav = (e: Event) => setNavOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    window.addEventListener("hrmagix:nav", onNav as EventListener);
    return () => window.removeEventListener("hrmagix:nav", onNav as EventListener);
  }, []);

  // The contact page is the destination — no point nagging there.
  const suppressed = pathname === "/contact" || dismissed || navOpen;
  const shown = past && !suppressed;

  // Let the back-to-top button know how much room it has.
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("hrmagix:sticky", { detail: { shown } }));
  }, [shown]);

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* storage blocked — dismissal just won't persist */
    }
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden ${shown ? "" : "pointer-events-none"}`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!shown}
    >
      <div
        className={`mx-3 mb-3 flex items-center gap-3 rounded-full border border-violet-100 bg-white/95 py-2.5 pl-4 pr-2.5 shadow-lift backdrop-blur-md transition-all duration-300 ease-out ${
          shown ? "translate-y-0 opacity-100" : "translate-y-[130%] opacity-0"
        } motion-reduce:transition-none`}
      >
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13.5px] font-bold text-violet-950">
            Start free today
          </span>
          <span className="block truncate text-[11.5px] text-ink-faint">
            No credit card required
          </span>
        </span>

        <Link
          href="/contact"
          tabIndex={shown ? 0 : -1}
          className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-violet-500 pl-4 pr-1.5 text-[13.5px] font-semibold text-white shadow-glow transition-colors hover:bg-violet-600"
        >
          Get Started
          <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-800/95 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0">
            <Icon name="arrowRight" className="h-3.5 w-3.5" />
          </span>
        </Link>

        <button
          type="button"
          onClick={dismiss}
          tabIndex={shown ? 0 : -1}
          aria-label="Dismiss this banner"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink-faint transition-colors hover:bg-violet-50 hover:text-violet-700"
        >
          <Icon name="cross" className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
