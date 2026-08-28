"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { features, modules, moduleGroups } from "@/lib/content";
import { Arrow, Badge, Button, Logo, Pill } from "./ui";
import { Icon, IconTile } from "./icons";
import ThemeToggle from "./ThemeToggle";

type MenuKey = "platform" | "company" | null;

/** `badge` is only set where HRMagix publishes the fact behind it. */
const COMPANY: { label: string; href: string; note: string; badge?: string }[] = [
  { label: "About", href: "/about", note: "Our mission, Pune origin & engineering philosophy" },
  { label: "Compliance", href: "/compliance", note: "100% Indian Statutory & Labor Law Engine", badge: "EPF · ESI · TDS" },
  { label: "Security", href: "/security", note: "AWS Mumbai Tier-4, SOC 2 & ISO 27001 data protection" },
  { label: "FAQ", href: "/faq", note: "Detailed answers before you onboard" },
  { label: "Contact", href: "/contact", note: "Talk to our product specialists in Pune" },
];

type MobileGroup = "platform" | "company";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileGroup, setMobileGroup] = useState<MobileGroup>("platform");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("hrmagix:nav", { detail: { open } }));
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hoverOpen = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(key);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 160);
  };

  /** Link styling helper */
  const linkClass = (active: boolean) =>
    `items-center gap-1.5 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
      active ? "text-accent font-semibold" : "text-body hover:text-accent"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menu || open
          ? "nav-plate backdrop-blur-xl"
          : "bg-transparent"
      }`}
      onMouseLeave={hoverClose}
    >
      {/* Top enterprise contact & compliance bar */}
      <div className="panel-fixed-dark hidden border-b border-violet-900/40 bg-violet-950 px-4 py-1.5 text-[12px] text-violet-200 sm:block">
        <div className="shell flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+919006007955" className="flex items-center gap-1.5 text-violet-100 hover:text-white transition-colors">
              <Icon name="phone" className="h-3 w-3 text-emerald-400" />
              <span>+91 900 600 7955</span>
            </a>
            <span aria-hidden="true" className="text-violet-400/80">|</span>
            <span className="flex items-center gap-1.5 text-violet-300">
              <Icon name="pin" className="h-3 w-3 text-violet-400" />
              <span>Pune & Mumbai, India</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/compliance" className="hidden lg:inline text-violet-300 hover:text-white font-medium transition-colors">
              100% Indian Statutory Compliance (EPF · ESI · Multi-State PT · TDS)
            </Link>
            <Link href="/contact" className="font-bold text-white underline underline-offset-2 hover:text-violet-200">
              Book a Free Walkthrough &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="shell relative z-[60] flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="HRMagix home" className="shrink-0">
          <Logo />
        </Link>

        {/* Clean, minimalist primary navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <Link href="/" className={`flex ${linkClass(pathname === "/")}`}>
            Home
          </Link>

          <button
            type="button"
            aria-expanded={menu === "platform"}
            onMouseEnter={() => hoverOpen("platform")}
            onClick={() => setMenu(menu === "platform" ? null : "platform")}
            className={`flex ${linkClass(menu === "platform" || pathname === "/modules" || pathname === "/how-it-works" || pathname === "/industries" || pathname === "/compliance")}`}
          >
            Platform
            <Chevron open={menu === "platform"} />
          </button>

          <Link href="/features" className={`flex ${linkClass(pathname === "/features")}`}>
            Features
          </Link>

          <Link href="/pricing" className={`flex ${linkClass(pathname === "/pricing")}`}>
            Pricing
          </Link>

          <button
            type="button"
            aria-expanded={menu === "company"}
            onMouseEnter={() => hoverOpen("company")}
            onClick={() => setMenu(menu === "company" ? null : "company")}
            className={`flex ${linkClass(menu === "company" || pathname.startsWith("/about") || pathname.startsWith("/contact") || pathname.startsWith("/faq") || pathname.startsWith("/security"))}`}
          >
            Company
            <Chevron open={menu === "company"} />
          </button>
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Link
            href="/contact"
            className="hidden text-[14.5px] font-medium text-body transition-colors hover:text-accent xl:inline"
          >
            Contact Sales
          </Link>
          <ThemeToggle size="sm" />
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-surface px-5 text-[14px] font-semibold text-heading ring-1 ring-inset ring-line-strong transition-all duration-300 hover:-translate-y-0.5 hover:ring-line-accent motion-reduce:hover:translate-y-0"
          >
            Sign in
          </Link>
          <Button href="/contact" size="sm">
            Get Started
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative grid h-11 w-11 place-items-center rounded-full ring-1 ring-line-strong transition-colors hover:bg-surface-sunken lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded-full bg-heading transition-transform duration-300 ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] block h-[2px] rounded-full bg-heading transition-all duration-300 ${
                open ? "w-0 opacity-0" : "w-3.5 opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded-full bg-heading transition-transform duration-300 ${
                open ? "top-[5px] -rotate-45" : "top-[11px]"
              }`}
            />
          </span>
        </button>
        </div>
      </div>

      {/* ---- Desktop megamenu ---- */}
      <div
        className={`absolute inset-x-0 top-[76px] hidden origin-top px-4 transition-all duration-300 ease-out lg:block ${
          menu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
        onMouseEnter={() => hoverOpen(menu)}
      >
        <div className="mx-auto w-full max-w-shell overflow-hidden rounded-[24px] border border-line bg-surface shadow-lift dark:bg-surface-raised">
          {menu === "platform" && (
            <div className="grid gap-8 p-7 lg:grid-cols-[1.15fr_1.35fr_0.9fr]">
              {/* Column 1: Capabilities & Solutions */}
              <div>
                <MenuHeading>Platform Core</MenuHeading>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      href="/features"
                      className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface-sunken"
                    >
                      <IconTile name="sparkle" size="sm" className="h-8 w-8" />
                      <span className="min-w-0">
                        <span className="block text-[13.5px] font-semibold text-heading">
                          Features Overview
                        </span>
                        <span className="mt-0.5 block truncate text-[11.5px] leading-snug text-subtle">
                          Explore all 6 core platform capabilities
                        </span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/how-it-works"
                      className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface-sunken"
                    >
                      <IconTile name="rocket" size="sm" className="h-8 w-8" />
                      <span className="min-w-0">
                        <span className="block text-[13.5px] font-semibold text-heading">
                          How it works
                        </span>
                        <span className="mt-0.5 block truncate text-[11.5px] leading-snug text-subtle">
                          3-step setup & autonomous workflows
                        </span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/industries"
                      className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface-sunken"
                    >
                      <IconTile name="layers" size="sm" className="h-8 w-8" />
                      <span className="min-w-0">
                        <span className="block text-[13.5px] font-semibold text-heading">
                          Solutions by Industry
                        </span>
                        <span className="mt-0.5 block truncate text-[11.5px] leading-snug text-subtle">
                          IT, Services, Finance & Remote teams
                        </span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/compliance"
                      className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface-sunken"
                    >
                      <IconTile name="shield" size="sm" className="h-8 w-8" />
                      <span className="min-w-0">
                        <span className="block text-[13.5px] font-semibold text-heading">
                          Indian Statutory Engine
                        </span>
                        <span className="mt-0.5 block truncate text-[11.5px] leading-snug text-subtle">
                          EPF, ESI, Multi-State PT & TDS 192
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Modules Directory */}
              <div>
                <div className="flex items-center justify-between px-2">
                  <MenuHeading>All 12 Modules</MenuHeading>
                  <Link href="/modules" className="text-[11.5px] font-bold text-accent hover:underline">
                    View All &rarr;
                  </Link>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-4">
                  {moduleGroups.map((g) => {
                    const items = modules.filter((m) => m.group === g);
                    if (!items.length) return null;
                    return (
                      <div key={g}>
                        <p className="px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-label">
                          {g}
                        </p>
                        <ul className="mt-1">
                          {items.map((m) => (
                            <li key={m.name}>
                              <Link
                                href={m.href}
                                className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] text-muted transition-colors hover:bg-surface-sunken hover:text-accent-strong"
                              >
                                <Icon name={m.icon} className="h-3.5 w-3.5 text-label" />
                                {m.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 3: Platform Highlight */}
              <div className="rounded-[20px] bg-surface-sunken p-6 flex flex-col justify-between">
                <div>
                  <span className="flex flex-wrap items-center gap-2">
                    <Pill tone="solid">All 12 included</Pill>
                    <Badge tone="outline">v2.0</Badge>
                  </span>
                  <p className="mt-4 font-display text-[18px] font-bold leading-snug text-heading">
                    One platform.
                    <br />
                    Every HR workflow.
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    100% Indian Statutory compliance pre-configured. Switch on the modules your team needs with zero code.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-line flex flex-col gap-2">
                  <Link
                    href="/modules"
                    className="group inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent hover:text-accent-deep"
                  >
                    Browse module directory <Arrow />
                  </Link>
                  <Link
                    href="/compliance"
                    className="group inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent hover:text-accent-deep"
                  >
                    Explore compliance engine <Arrow />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {menu === "company" && (
            <div className="grid gap-2 p-5 sm:grid-cols-2">
              {COMPANY.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group flex items-start gap-3 rounded-2xl px-4 py-3.5 transition-colors hover:bg-surface-sunken"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-line-accent transition-colors group-hover:bg-accent-soft" />
                  <span>
                    <span className="flex items-center gap-2 text-[14px] font-semibold text-heading">
                      {c.label}
                      {c.badge && <Badge>{c.badge}</Badge>}
                      <Arrow className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="mt-0.5 block text-[12px] text-subtle">{c.note}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ---- Mobile sheet ---- */}
      <div
        className={`fixed inset-0 z-40 overflow-hidden lg:hidden ${
          open ? "" : "pointer-events-none invisible"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-violet-950/35 backdrop-blur-sm transition-opacity duration-300 dark:bg-black/70 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto overscroll-contain bg-surface pb-10 pt-[88px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="shell">
            <div className="flex gap-2 rounded-full bg-surface-sunken p-1.5">
              {(["platform", "company"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setMobileGroup(k)}
                  className={`flex-1 rounded-full py-2.5 text-[13.5px] font-semibold capitalize transition-all duration-300 ${
                    mobileGroup === k ? "bg-surface text-accent-strong shadow-soft dark:bg-surface-raised" : "text-subtle hover:text-body"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>

            {/* Quick Home link */}
            <div className="mt-3.5">
              <Link
                href="/"
                className="flex items-center justify-between rounded-2xl bg-surface-sunken/70 px-4 py-3 text-[15px] font-bold text-heading transition-colors hover:bg-surface-raised"
              >
                <div className="flex items-center gap-2.5">
                  <Icon name="sparkle" className="h-4 w-4 text-accent" />
                  <span>Home</span>
                </div>
                <Arrow className="text-label" />
              </Link>
            </div>

            {mobileGroup === "platform" ? (
              <div className="mt-5">
                <MenuHeading>Platform Core</MenuHeading>
                <div className="mt-2.5 grid grid-cols-2 gap-2">
                  <Link
                    href="/features"
                    className="flex items-center gap-2 rounded-xl bg-surface-sunken/60 p-3 text-[13.5px] font-bold text-heading"
                  >
                    <Icon name="sparkle" className="h-4 w-4 text-accent" />
                    <span>Features</span>
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="flex items-center gap-2 rounded-xl bg-surface-sunken/60 p-3 text-[13.5px] font-bold text-heading"
                  >
                    <Icon name="rocket" className="h-4 w-4 text-accent" />
                    <span>How it works</span>
                  </Link>
                  <Link
                    href="/industries"
                    className="flex items-center gap-2 rounded-xl bg-surface-sunken/60 p-3 text-[13.5px] font-bold text-heading"
                  >
                    <Icon name="layers" className="h-4 w-4 text-accent" />
                    <span>Industries</span>
                  </Link>
                  <Link
                    href="/compliance"
                    className="flex items-center gap-2 rounded-xl bg-surface-sunken/60 p-3 text-[13.5px] font-bold text-heading"
                  >
                    <Icon name="shield" className="h-4 w-4 text-accent" />
                    <span>Compliance</span>
                  </Link>
                  <Link
                    href="/modules"
                    className="flex items-center gap-2 rounded-xl bg-surface-sunken/60 p-3 text-[13.5px] font-bold text-heading"
                  >
                    <Icon name="grid" className="h-4 w-4 text-accent" />
                    <span>All 12 Modules</span>
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex items-center gap-2 rounded-xl bg-surface-sunken/60 p-3 text-[13.5px] font-bold text-heading"
                  >
                    <Icon name="wallet" className="h-4 w-4 text-accent" />
                    <span>Pricing Plans</span>
                  </Link>
                </div>

                <div className="mt-5 border-t border-line pt-4">
                  <div className="flex items-center justify-between">
                    <MenuHeading>Modules Directory</MenuHeading>
                    <Link href="/modules" className="text-[11.5px] font-bold text-accent">
                      View All &rarr;
                    </Link>
                  </div>
                  <div className="mask-fade-x -mx-5 mt-2.5 flex gap-2 overflow-x-auto px-5 pb-2">
                    {modules.map((m) => (
                      <Link key={m.name} href={m.href} className="chip shrink-0">
                        <Icon name={m.icon} className="h-4 w-4 text-accent-soft" />
                        {m.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <ul className="mt-5 grid gap-1.5">
                {COMPANY.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="flex items-center justify-between rounded-2xl px-3.5 py-3 transition-colors hover:bg-surface-sunken"
                    >
                      <span>
                        <span className="flex items-center gap-2 text-[15.5px] font-semibold text-heading">
                          {c.label}
                          {c.badge && <Badge>{c.badge}</Badge>}
                        </span>
                        <span className="mt-0.5 block text-[12px] text-subtle">{c.note}</span>
                      </span>
                      <Arrow className="text-label" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-7 grid gap-3">
              <Button href="/contact" size="lg" className="w-full">
                Get Started
              </Button>
              <Button href="/contact" variant="outline" size="lg" arrow={false} className="w-full">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <Icon
      name="chevronDown"
      className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    />
  );
}

function MenuHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-2 text-[11.5px] font-bold uppercase tracking-[0.18em] text-label">{children}</p>
  );
}
