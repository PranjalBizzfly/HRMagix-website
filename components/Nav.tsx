"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Logo, Button, Arrow } from "./ui";
import { Icon, type IconName } from "./icons";
import ThemeToggle from "./ThemeToggle";
import SearchDialog from "./SearchDialog";
import type { IndexGroup } from "@/lib/siteIndex";
import { primaryNav, policyNav, type NavSection } from "@/lib/nav";
import { site } from "@/lib/content";

/**
 * The header.
 *
 * Three layers, top to bottom:
 *  1. A platform strip — the one line of product news, collapsed once the page
 *     scrolls so it never costs reading space.
 *  2. A glass bar — logo, four section triggers plus Pricing, and the actions.
 *  3. A floating mega card per section: icon-tile links with a one-line note
 *     each, and a closing card that routes to the hub.
 *
 * On small screens the bar collapses to a menu button that opens a drawer from
 * the right with one accordion per section.
 *
 * Accessibility rules this component keeps:
 *  - Panels are only rendered while open, so hidden links are never tabbable.
 *  - Section labels are links to their hub; a separate chevron button carries
 *    aria-expanded for keyboard and screen-reader users.
 *  - Escape closes the open layer and returns focus to whatever opened it.
 *  - The drawer traps focus while open and locks page scroll.
 *  - Every open/close of the drawer is broadcast as `hrmagix:nav` so the
 *    mobile sticky CTA can get out of the way.
 */

/** Icon per destination. Unknown routes fall back to `sparkle`. */
const linkIcons: Record<string, IconName> = {
  "/features": "grid",
  "/hr/topics": "folder",
  "/solutions/hrms": "layers",
  "/solutions/employee-management": "users",
  "/solutions/onboarding": "rocket",
  "/solutions/ess": "fingerprint",
  "/solutions/payroll": "wallet",
  "/solutions/attendance": "clock",
  "/solutions/leave-management": "calendar",
  "/solutions/hr-analytics": "chart",
  "/solutions/performance": "target",
  "/solutions/compliance": "scale",
  "/industries/startups": "rocket",
  "/industries/small-business": "gift",
  "/industries/smes": "grid",
  "/industries/manufacturing": "layers",
  "/industries/it-services": "compass",
  "/industries/professional-services": "users",
  "/blog": "chat",
  "/resources/white-papers": "folder",
  "/resources/guides": "compass",
  "/resources/glossary": "grid",
  "/resources/calculator": "equals",
  "/resources/faqs": "chat",
  "/resources/payroll": "wallet",
  "/resources/hrms-comparison": "scale",
  "/resources/media": "sparkle",
  "/company/about": "sparkle",
  "/company/careers": "users",
  "/company/press-kit": "folder",
  "/company/contact": "mail",
  "/vendor": "gift",
  "/pricing": "wallet",
  "/policy": "shield",
};

const iconFor = (href: string): IconName => linkIcons[href] ?? "sparkle";

const SIGN_IN = "https://app.hrmagix.com/login";

export default function Nav({ searchIndex }: { searchIndex: IndexGroup[] }) {
  const [searchOpen, setSearchOpen] = useState(false);

  /* Ctrl/⌘ K opens search from anywhere on the site. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  /* Close everything whenever the route changes. */
  useEffect(() => {
    setOpen(null);
    setDrawer(false);
  }, [pathname]);

  /* Collapse the strip and solidify the bar once the page has moved. */
  useEffect(() => {
    let frame = 0;
    const read = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    window.addEventListener("scroll", read, { passive: true });
    read();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", read);
    };
  }, []);

  /* The drawer owns the scroll position while it is open, and tells the
     sticky CTA to hide. */
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("hrmagix:nav", { detail: { open: drawer } }));
    if (!drawer) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawer]);

  /* Escape closes whichever layer is open and returns focus to its opener. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (drawer) {
        setDrawer(false);
        menuButtonRef.current?.focus();
      } else if (open) {
        const trigger = triggerRefs.current[open];
        setOpen(null);
        trigger?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, drawer]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const sectionActive = (section: NavSection) =>
    section.columns.some((c) => c.links.some((l) => isActive(l.href))) || isActive(section.href);

  const barLink = (active: boolean) =>
    `relative inline-flex items-center whitespace-nowrap py-2 text-[14.5px] font-semibold transition-colors ${
      active ? "text-accent" : "text-body hover:text-accent"
    }`;

  return (
    <MotionConfig reducedMotion="user">
      <header
        className="fixed inset-x-0 top-0 z-50"
        onMouseLeave={scheduleClose}
      >
        {/* ---- 1. Platform strip ---- */}
        <div
          className={`hidden overflow-hidden bg-panel text-white transition-[max-height,opacity] duration-300 sm:block ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="shell flex h-9 items-center justify-between gap-3 text-[12.5px]">
            <p className="flex min-w-0 items-center gap-2 truncate">
              <span className="ping-dot h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              <span className="truncate font-semibold">{site.hero.eyebrow}</span>
            </p>
            <p className="hidden items-center gap-5 text-violet-200 sm:flex">
              <span>14-day free trial · No credit card</span>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:underline"
              >
                <Icon name="mail" className="h-3.5 w-3.5" />
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>

        {/* ---- 2. Glass bar ---- */}
        <div
          className={`border-b transition-[background-color,box-shadow,border-color] duration-300 ${
            // Interior pages open on a dark hero, so the bar is solid there from
            // the first frame; only the light homepage hero shows through it.
            scrolled || open || pathname !== "/"
              ? "nav-plate border-line shadow-soft"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-7 lg:px-8">
            <div className="flex h-[64px] items-center justify-between gap-4 sm:h-[72px]">
              <Link
                href="/"
                className="shrink-0 rounded-lg"
                aria-label="HRMagix home"
                onMouseEnter={scheduleClose}
              >
                <Logo />
              </Link>

              {/* Desktop sections */}
              <nav aria-label="Primary" className="hidden lg:block">
                <ul className="flex items-center gap-3 xl:gap-5 2xl:gap-6">
                  <li onMouseEnter={scheduleClose}>
                    <Link
                      href="/"
                      aria-current={isActive("/") ? "page" : undefined}
                      className={barLink(isActive("/"))}
                    >
                      Home
                      {isActive("/") && (
                        <motion.span
                          layoutId="nav-underline"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute inset-x-0 -bottom-[3px] h-0.5 rounded-full bg-brand"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                  {primaryNav.map((section, idx) => {
                    const isOpen = open === section.label;
                    const active = sectionActive(section);
                    return (
                      <li
                        key={section.label}
                        className="relative flex items-center gap-0.5"
                        onMouseEnter={() => {
                          cancelClose();
                          setOpen(section.label);
                        }}
                      >
                        <Link
                          href={section.href}
                          aria-current={active ? "page" : undefined}
                          className={barLink(active || isOpen)}
                        >
                          {section.label}
                          {active && (
                            <motion.span
                              layoutId="nav-underline"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                              className="absolute inset-x-0 -bottom-[3px] h-0.5 rounded-full bg-brand"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                        <button
                          type="button"
                          ref={(el) => {
                            triggerRefs.current[section.label] = el;
                          }}
                          aria-expanded={isOpen}
                          aria-controls={`panel-${section.label}`}
                          aria-label={`${isOpen ? "Hide" : "Show"} ${section.label} menu`}
                          onClick={() => setOpen(isOpen ? null : section.label)}
                          className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
                            isOpen ? "text-accent" : "text-subtle hover:text-accent"
                          }`}
                        >
                          <Icon
                            name="chevronDown"
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              isOpen ? "-rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <MegaCard
                              section={section}
                              align={idx === primaryNav.length - 1 ? "right" : "left"}
                              onEnter={cancelClose}
                              onLeave={scheduleClose}
                              isActive={isActive}
                            />
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                  <li onMouseEnter={scheduleClose}>
                    <Link
                      href="/pricing"
                      aria-current={isActive("/pricing") ? "page" : undefined}
                      className={barLink(isActive("/pricing"))}
                    >
                      Pricing
                      {isActive("/pricing") && (
                        <motion.span
                          layoutId="nav-underline"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute inset-x-0 -bottom-[3px] h-0.5 rounded-full bg-brand"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-2 lg:gap-2.5" onMouseEnter={scheduleClose}>
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search the site"
                  aria-keyshortcuts="Control+K Meta+K"
                  title="Search (Ctrl K)"
                  className="grid h-11 w-11 place-items-center rounded-full text-brand ring-1 ring-inset ring-brand/30 transition-colors hover:bg-brand hover:text-white hover:ring-brand"
                >
                  <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" aria-hidden="true">
                    <circle cx="10.5" cy="10.5" r="6" />
                    <path d="m15 15 5 5" />
                  </svg>
                </button>
                <ThemeToggle />
                <Link
                  href={SIGN_IN}
                  className="hidden h-10 items-center whitespace-nowrap rounded-full px-4 text-[14px] font-semibold text-heading ring-1 ring-inset ring-line-strong transition-colors hover:text-accent hover:ring-line-accent xl:inline-flex"
                >
                  Sign in
                </Link>
                <span className="hidden sm:inline-flex">
                  <Button href="/company/contact" size="sm">
                    Book a demo
                  </Button>
                </span>

                <button
                  ref={menuButtonRef}
                  type="button"
                  onClick={() => setDrawer(true)}
                  aria-expanded={drawer}
                  aria-controls="mobile-menu"
                  aria-label="Open menu"
                  className="grid h-11 w-11 place-items-center rounded-full text-heading ring-1 ring-line transition-colors hover:bg-surface-raised lg:hidden"
                >
                  <span className="relative block h-[12px] w-[18px]" aria-hidden="true">
                    <span className="absolute left-0 top-0 block h-[2px] w-full rounded bg-current" />
                    <span className="absolute left-0 top-[5px] block h-[2px] w-3/4 rounded bg-current" />
                    <span className="absolute left-0 top-[10px] block h-[2px] w-full rounded bg-current" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} groups={searchIndex} />

      <Drawer
        open={drawer}
        onClose={() => {
          setDrawer(false);
          menuButtonRef.current?.focus();
        }}
        isActive={isActive}
      />
    </MotionConfig>
  );
}

/* ------------------------------------------------------------------ */

function MegaCard({
  section,
  align,
  onEnter,
  onLeave,
  isActive,
}: {
  section: NavSection;
  align: "left" | "right";
  onEnter: () => void;
  onLeave: () => void;
  isActive: (href: string) => boolean;
}) {
  /* One list, in menu order. Long menus split into two columns so the card
     never runs past the bottom of the screen. */
  const links = section.columns.flatMap((c) => c.links);
  const twoCol = links.length > 7;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      id={`panel-${section.label}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`absolute top-full z-50 hidden pt-3 lg:block ${align === "right" ? "right-0" : "left-0"}`}
    >
      <ul
        className={`grid gap-1 rounded-[20px] border border-line bg-surface/95 p-2.5 shadow-float backdrop-blur-xl ${
          twoCol ? "w-[640px] max-w-[90vw] grid-cols-2" : "w-[385px] max-w-[90vw]"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`group flex items-start gap-3 rounded-xl p-2.5 transition-colors ${
                isActive(link.href) ? "bg-surface-raised" : "hover:bg-surface-sunken"
              }`}
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand/10 text-accent transition-transform duration-200 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                <Icon name={iconFor(link.href)} className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block whitespace-nowrap text-[14px] font-semibold text-heading transition-colors group-hover:text-accent">
                  {link.label}
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-muted">{link.note}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */

function Drawer({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  /* Move focus in on open, and keep Tab inside the drawer. */
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("button, a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
    {open && (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu" id="mobile-menu">
      <motion.button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <motion.div
        ref={panelRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 26, stiffness: 220 }}
        className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col border-l border-line bg-canvas shadow-float"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-4">
          <Link href="/" onClick={onClose} aria-label="HRMagix home">
            <Logo />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full text-heading ring-1 ring-line transition-colors hover:bg-surface-raised"
          >
            <Icon name="cross" className="h-4 w-4" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
          <Link
            href="/"
            onClick={onClose}
            aria-current={isActive("/") ? "page" : undefined}
            className={`flex items-center justify-between rounded-xl px-3 py-3 text-[16px] font-bold ${
              isActive("/") ? "text-accent" : "text-heading"
            }`}
          >
            Home
          </Link>

          {primaryNav.map((section) => {
            const isOpen = expanded === section.label;
            return (
              <div key={section.label} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : section.label)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-[16px] font-bold text-heading"
                >
                  {section.label}
                  <Icon
                    name="chevronDown"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "-rotate-180 text-accent" : "text-subtle"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mb-3 ml-3 space-y-4 border-l-2 border-line-accent/60 pl-4">
                    {section.columns.map((col) => (
                      <div key={col.heading}>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-label">
                          {col.heading}
                        </p>
                        <ul className="mt-1.5">
                          {col.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={onClose}
                                aria-current={isActive(link.href) ? "page" : undefined}
                                className={`flex min-h-[44px] items-center gap-2.5 py-1.5 text-[14.5px] font-medium ${
                                  isActive(link.href) ? "text-accent" : "text-body"
                                }`}
                              >
                                <Icon
                                  name={iconFor(link.href)}
                                  className="h-4 w-4 shrink-0 text-accent-soft"
                                />
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      href={section.href}
                      onClick={onClose}
                      className="inline-flex min-h-[44px] items-center gap-2 text-[13.5px] font-semibold text-accent"
                    >
                      All of {section.label.toLowerCase()} <Arrow />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/pricing"
            onClick={onClose}
            aria-current={isActive("/pricing") ? "page" : undefined}
            className={`flex items-center rounded-xl px-3 py-3.5 text-[16px] font-bold ${
              isActive("/pricing") ? "text-accent" : "text-heading"
            }`}
          >
            Pricing
          </Link>

          <div className="mt-4 px-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-label">
              Policy centre
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {policyNav.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    onClick={onClose}
                    className="inline-flex min-h-[40px] items-center rounded-full bg-surface-sunken px-3.5 text-[13px] font-semibold text-body ring-1 ring-line"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="shrink-0 space-y-2.5 border-t border-line p-4">
          <Link
            href={SIGN_IN}
            className="flex h-12 w-full items-center justify-center rounded-full text-[14.5px] font-semibold text-heading ring-1 ring-inset ring-line-strong"
          >
            Sign in
          </Link>
          <Button href="/company/contact" className="w-full">
            Book a demo
          </Button>
          <p className="pt-1 text-center text-[12px] text-subtle">
            {site.contact.email} · {site.contact.location}
          </p>
        </div>
      </motion.div>
    </div>
    )}
    </AnimatePresence>
  );
}
