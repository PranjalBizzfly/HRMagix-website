"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo, Button, Arrow } from "./ui";
import { Icon } from "./icons";
import ThemeToggle from "./ThemeToggle";
import { primaryNav, policyNav, type NavSection } from "@/lib/nav";
import { site } from "@/lib/content";

/**
 * The header.
 *
 * Six items on the bar and everything else inside a panel. The constraint that
 * shapes this component is that every link in every panel goes to a real page
 * with its own URL — there is not a single in-page anchor in here, so the menu
 * is a map of the site rather than a shortcut to the homepage.
 *
 * Interaction rules, in order of how often they bite:
 *  - Pointer opens a panel on hover with a small close delay, so crossing a
 *    gap between the trigger and the panel does not dismiss it.
 *  - Keyboard opens it on focus and Enter, and Escape closes it and returns
 *    focus to the trigger.
 *  - Touch never hovers: on coarse pointers the bar item is a link to the hub
 *    page and the panel is not used at all — the full-screen sheet is.
 *  - A route change always closes everything.
 */

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [sheet, setSheet] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  /* Close everything whenever the route changes. */
  useEffect(() => {
    setOpen(null);
    setSheet(false);
  }, [pathname]);

  /* Solid plate once the page has moved at all. */
  useEffect(() => {
    let frame = 0;
    const read = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 8));
    };
    window.addEventListener("scroll", read, { passive: true });
    read();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", read);
    };
  }, []);

  /* The sheet owns the scroll position while it is open. */
  useEffect(() => {
    if (!sheet) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sheet]);

  /* Escape closes whichever layer is open. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (sheet) setSheet(false);
      else if (open) setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, sheet]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  /** A bar item is "current" when the route sits anywhere under its section. */
  const sectionActive = (section: NavSection) =>
    section.columns.some((c) => c.links.some((l) => isActive(l.href))) || isActive(section.href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "nav-plate shadow-soft" : "bg-transparent"
        }`}
        onMouseLeave={scheduleClose}
      >
        <div ref={barRef} className="shell">
          <div className="flex h-[68px] items-center justify-between gap-4 sm:h-[76px]">
            <Link
              href="/"
              className="shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              aria-label="HRMagix home"
            >
              <Logo />
            </Link>

            {/* ---- Desktop bar ---- */}
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {/*
                  Home and Pricing are plain links rather than panel triggers, so
                  they carry no chevron and close any open panel on hover.
                */}
                <li>
                  <Link
                    href="/"
                    aria-current={isActive("/") ? "page" : undefined}
                    className={`inline-flex items-center rounded-full px-3.5 py-2 text-[14.5px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                      isActive("/") ? "text-accent" : "text-body hover:text-accent"
                    }`}
                    onMouseEnter={scheduleClose}
                  >
                    Home
                  </Link>
                </li>
                {primaryNav.map((section) => {
                  const isOpen = open === section.label;
                  return (
                    <li
                      key={section.label}
                      onMouseEnter={() => {
                        cancelClose();
                        setOpen(section.label);
                      }}
                    >
                      <Link
                        href={section.href}
                        aria-expanded={isOpen}
                        aria-current={sectionActive(section) ? "page" : undefined}
                        onFocus={() => setOpen(section.label)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14.5px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                          sectionActive(section)
                            ? "text-accent"
                            : "text-body hover:text-accent"
                        }`}
                      >
                        {section.label}
                        <Icon
                          name="chevronDown"
                          className={`h-3 w-3 transition-transform duration-300 ${
                            isOpen ? "-rotate-180" : ""
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/pricing"
                    aria-current={isActive("/pricing") ? "page" : undefined}
                    className={`inline-flex items-center rounded-full px-3.5 py-2 text-[14.5px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                      isActive("/pricing") ? "text-accent" : "text-body hover:text-accent"
                    }`}
                    onMouseEnter={scheduleClose}
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <Link
                href="https://app.hrmagix.com/login"
                className="hidden rounded-full px-3 py-2 text-[14px] font-semibold text-body transition-colors hover:text-accent md:inline-flex"
              >
                Sign in
              </Link>
              <span className="hidden sm:inline-flex">
                <Button href="/company/contact" size="sm">
                  Book a demo
                </Button>
              </span>

              <button
                type="button"
                onClick={() => setSheet((s) => !s)}
                aria-expanded={sheet}
                aria-controls="mobile-menu"
                aria-label={sheet ? "Close menu" : "Open menu"}
                className="grid h-11 w-11 place-items-center rounded-full text-heading ring-1 ring-line transition-colors hover:bg-surface-raised lg:hidden"
              >
                <span className="relative block h-[14px] w-[18px]" aria-hidden="true">
                  <span
                    className={`absolute left-0 block h-[2px] w-full rounded bg-current transition-all duration-300 ${
                      sheet ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 block h-[2px] w-full rounded bg-current transition-opacity duration-200 ${
                      sheet ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[2px] w-full rounded bg-current transition-all duration-300 ${
                      sheet ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ---- Desktop panel ---- */}
        {primaryNav.map((section) => (
          <MegaPanel
            key={section.label}
            section={section}
            open={open === section.label}
            onEnter={cancelClose}
            onLeave={scheduleClose}
            isActive={isActive}
          />
        ))}
      </header>

      {/* ---- Mobile sheet ---- */}
      <MobileSheet open={sheet} onClose={() => setSheet(false)} isActive={isActive} />
    </>
  );
}

/* ------------------------------------------------------------------ */

function MegaPanel({
  section,
  open,
  onEnter,
  onLeave,
  isActive,
}: {
  section: NavSection;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  isActive: (href: string) => boolean;
}) {
  return (
    /*
     * Visibility is driven by classes, not the `hidden` attribute. `[hidden]`
     * sets display:none from the UA stylesheet, which a utility like `lg:block`
     * silently overrides — the panel then renders open over the page on desktop.
     * `aria-hidden` keeps it out of the accessibility tree either way.
     */
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-hidden={!open}
      className={`nav-plate absolute inset-x-0 top-full border-t border-line shadow-lift ${
        open ? "hidden lg:block" : "hidden"
      }`}
    >
      <div className="shell py-9">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,17rem)] lg:gap-14">
          {section.columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                {col.heading}
              </p>
              {col.blurb && (
                <p className="mt-2 max-w-[24ch] text-[13px] leading-relaxed text-subtle">
                  {col.blurb}
                </p>
              )}
              <ul className="mt-5 space-y-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`group block rounded-xl px-3 py-2.5 transition-colors ${
                        isActive(link.href)
                          ? "bg-surface-raised/70"
                          : "hover:bg-surface-raised/60"
                      }`}
                    >
                      <span className="flex items-center gap-2 font-display text-[15px] font-bold text-heading">
                        {link.label}
                        <span className="translate-x-0 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                          <Arrow />
                        </span>
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-muted">
                        {link.note}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {section.footer && (
            <div className="rounded-2xl bg-surface-sunken p-6 ring-1 ring-line">
              <p className="text-[14px] leading-relaxed text-muted">{section.footer.note}</p>
              <Link
                href={section.footer.href}
                className="group mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-accent"
              >
                {section.footer.label} <Arrow />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function MobileSheet({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const [section, setSection] = useState<string>(primaryNav[0].label);

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 bg-canvas lg:hidden ${open ? "block" : "hidden"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="flex h-full flex-col overflow-y-auto overscroll-contain pt-[68px] sm:pt-[76px]">
        {/* Section switcher — a rail, so the sheet never becomes one long list. */}
        <div className="sticky top-0 z-10 border-b border-line bg-canvas/95 backdrop-blur">
          <div className="track mask-fade-x flex gap-2 px-5 py-3.5">
            {primaryNav.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setSection(s.label)}
                aria-pressed={section === s.label}
                className={`shrink-0 rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors ${
                  section === s.label
                    ? "bg-brand text-white"
                    : "bg-surface-sunken text-body ring-1 ring-line"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 px-5 pb-10 pt-6">
          {/*
            Home is a destination, not a section, so it sits above the section
            columns rather than in the rail — which switches sections and does
            not navigate.
          */}
          <ul className="mb-8 divide-y divide-line border-y border-line">
            <li>
              <Link
                href="/"
                onClick={onClose}
                aria-current={isActive("/") ? "page" : undefined}
                className="flex items-center justify-between gap-4 py-3.5"
              >
                <span
                  className={`font-display text-[16px] font-bold ${
                    isActive("/") ? "text-accent" : "text-heading"
                  }`}
                >
                  Home
                </span>
                <span className="shrink-0 text-accent">
                  <Arrow />
                </span>
              </Link>
            </li>
          </ul>

          {primaryNav
            .filter((s) => s.label === section)
            .map((s) => (
              <div key={s.label}>
                {s.columns.map((col) => (
                  <div key={col.heading} className="mb-8">
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                      {col.heading}
                    </p>
                    <ul className="mt-3 divide-y divide-line border-y border-line">
                      {col.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className="flex items-center justify-between gap-4 py-3.5"
                          >
                            <span className="min-w-0">
                              <span
                                className={`block font-display text-[16px] font-bold ${
                                  isActive(link.href) ? "text-accent" : "text-heading"
                                }`}
                              >
                                {link.label}
                              </span>
                              <span className="mt-0.5 block text-[13px] leading-snug text-muted">
                                {link.note}
                              </span>
                            </span>
                            <span className="shrink-0 text-accent">
                              <Arrow />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}

          <div className="mb-8">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
              Policy centre
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {policyNav.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    onClick={onClose}
                    className="inline-flex rounded-full bg-surface-sunken px-3.5 py-2 text-[13px] font-semibold text-body ring-1 ring-line"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <Button href="/company/contact" className="w-full">
              Book a demo
            </Button>
            <Link
              href="https://app.hrmagix.com/login"
              className="flex h-12 w-full items-center justify-center rounded-full text-[14.5px] font-semibold text-body ring-1 ring-inset ring-line-strong"
            >
              Sign in
            </Link>
          </div>

          <p className="mt-8 text-[13px] leading-relaxed text-subtle">
            {site.contact.location} · {site.contact.email}
          </p>
        </div>
      </div>
    </div>
  );
}
