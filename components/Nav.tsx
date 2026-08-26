"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { features, modules, moduleGroups } from "@/lib/content";
import { Arrow, Button, Logo, Pill } from "./ui";

type MenuKey = "platform" | "company" | null;

const COMPANY = [
  { label: "About", href: "/about", note: "Modern HR, from hire to retire" },
  { label: "Pricing", href: "/pricing", note: "Simple, transparent pricing" },
  { label: "FAQ", href: "/faq", note: "Answers before you ask" },
  { label: "Contact", href: "/contact", note: "Talk to the HRMagix team" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileGroup, setMobileGroup] = useState<Exclude<MenuKey, null>>("platform");
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

  const linkClass = (active: boolean) =>
    `flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
      active ? "text-violet-600" : "text-ink hover:text-violet-600"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menu || open
          ? "bg-white/90 shadow-[0_1px_0_rgba(31,17,71,0.07)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
      onMouseLeave={hoverClose}
    >
      <div className="shell relative z-[60] flex h-[76px] items-center justify-between gap-4">
        <Link href="/" aria-label="HRMagix home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          <button
            type="button"
            aria-expanded={menu === "platform"}
            onMouseEnter={() => hoverOpen("platform")}
            onClick={() => setMenu(menu === "platform" ? null : "platform")}
            className={linkClass(menu === "platform")}
          >
            Platform
            <Chevron open={menu === "platform"} />
          </button>

          <Link href="/features" className={linkClass(pathname === "/features")}>
            Features
          </Link>
          <Link href="/how-it-works" className={linkClass(pathname === "/how-it-works")}>
            How it works
          </Link>
          <Link href="/pricing" className={linkClass(pathname === "/pricing")}>
            Pricing
          </Link>

          <button
            type="button"
            aria-expanded={menu === "company"}
            onMouseEnter={() => hoverOpen("company")}
            onClick={() => setMenu(menu === "company" ? null : "company")}
            className={linkClass(menu === "company")}
          >
            Company
            <Chevron open={menu === "company"} />
          </button>
        </nav>

        <div className="hidden items-center gap-2.5 xl:flex">
          <Link
            href="/contact"
            className="text-[14.5px] font-medium text-ink transition-colors hover:text-violet-600"
          >
            Contact Sales
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-white px-5 text-[14px] font-semibold text-violet-950 ring-1 ring-inset ring-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:ring-violet-400 motion-reduce:hover:translate-y-0"
          >
            Sign in
          </Link>
          <Button href="/contact" size="sm">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative grid h-11 w-11 place-items-center rounded-full ring-1 ring-violet-200 transition-colors hover:bg-violet-50 xl:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded-full bg-violet-900 transition-transform duration-300 ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] block h-[2px] rounded-full bg-violet-900 transition-all duration-300 ${
                open ? "w-0 opacity-0" : "w-3.5 opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded-full bg-violet-900 transition-transform duration-300 ${
                open ? "top-[5px] -rotate-45" : "top-[11px]"
              }`}
            />
          </span>
        </button>
      </div>

      {/* ---- Desktop megamenu ---- */}
      <div
        className={`absolute inset-x-0 top-[76px] hidden origin-top px-4 transition-all duration-300 ease-out xl:block ${
          menu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
        onMouseEnter={() => hoverOpen(menu)}
      >
        <div className="mx-auto w-full max-w-shell overflow-hidden rounded-[24px] border border-violet-100 bg-white shadow-lift">
          {menu === "platform" && (
            <div className="grid gap-8 p-7 lg:grid-cols-[1.15fr_1.35fr_0.9fr]">
              <div>
                <MenuHeading>Capabilities</MenuHeading>
                <ul className="mt-4 space-y-1">
                  {features.map((f) => (
                    <li key={f.key}>
                      <Link
                        href="/features"
                        className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-violet-50"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet-50 text-[15px] ring-1 ring-violet-100">
                          {f.glyph}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[13.5px] font-semibold text-violet-950">
                            {f.title}
                          </span>
                          <span className="mt-0.5 block truncate text-[11.5px] leading-snug text-ink-faint">
                            {f.copy}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <MenuHeading>Modules</MenuHeading>
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
                  {moduleGroups.map((g) => {
                    const items = modules.filter((m) => m.group === g);
                    if (!items.length) return null;
                    return (
                      <div key={g}>
                        <p className="px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-400">
                          {g}
                        </p>
                        <ul className="mt-1.5">
                          {items.map((m) => (
                            <li key={m.name}>
                              <Link
                                href="/modules"
                                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-ink-soft transition-colors hover:bg-violet-50 hover:text-violet-700"
                              >
                                <span aria-hidden="true">{m.glyph}</span>
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

              <div className="rounded-[20px] bg-violet-50 p-6">
                <Pill tone="solid">All 12 included</Pill>
                <p className="mt-4 font-display text-[19px] font-bold leading-snug text-violet-950">
                  One platform.
                  <br />
                  Every HR workflow.
                </p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">
                  Switch on the modules your policies need — no code, no implementation project.
                </p>
                <Link
                  href="/modules"
                  className="group mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-violet-600"
                >
                  Browse modules <Arrow />
                </Link>
              </div>
            </div>
          )}

          {menu === "company" && (
            <div className="grid gap-2 p-5 sm:grid-cols-2">
              {COMPANY.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group flex items-start gap-3 rounded-2xl px-4 py-3.5 transition-colors hover:bg-violet-50"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300 transition-colors group-hover:bg-violet-500" />
                  <span>
                    <span className="flex items-center gap-1.5 text-[14px] font-semibold text-violet-950">
                      {c.label}
                      <Arrow className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="mt-0.5 block text-[12px] text-ink-faint">{c.note}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ---- Mobile sheet ---- */}
      <div
        className={`fixed inset-0 z-40 xl:hidden ${open ? "" : "pointer-events-none invisible"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-violet-950/35 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto overscroll-contain bg-white pb-10 pt-[88px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="shell">
            <div className="flex gap-2 rounded-full bg-violet-50 p-1.5">
              {(["platform", "company"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setMobileGroup(k)}
                  className={`flex-1 rounded-full py-2.5 text-[13.5px] font-semibold capitalize transition-all duration-300 ${
                    mobileGroup === k ? "bg-white text-violet-700 shadow-soft" : "text-ink-faint"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>

            {mobileGroup === "platform" ? (
              <div className="mt-6">
                <MenuHeading>Capabilities</MenuHeading>
                <ul className="mt-3 grid gap-1">
                  {features.map((f, i) => (
                    <li
                      key={f.key}
                      style={{
                        transition: "opacity .4s ease, transform .5s cubic-bezier(.22,1,.36,1)",
                        transitionDelay: open ? `${120 + i * 40}ms` : "0ms",
                        opacity: open ? 1 : 0,
                        transform: open ? "none" : "translateY(10px)",
                      }}
                    >
                      <Link
                        href="/features"
                        className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-violet-50"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-50 text-[16px] ring-1 ring-violet-100">
                          {f.glyph}
                        </span>
                        <span className="text-[15.5px] font-semibold text-violet-950">{f.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-violet-100 pt-5">
                  <MenuHeading>Modules</MenuHeading>
                  <div className="mask-fade-x -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-2">
                    {modules.map((m) => (
                      <Link key={m.name} href="/modules" className="chip shrink-0">
                        <span aria-hidden="true">{m.glyph}</span>
                        {m.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <ul className="mt-6 grid gap-1">
                {COMPANY.map((c, i) => (
                  <li
                    key={c.href}
                    style={{
                      transition: "opacity .4s ease, transform .5s cubic-bezier(.22,1,.36,1)",
                      transitionDelay: open ? `${120 + i * 45}ms` : "0ms",
                      opacity: open ? 1 : 0,
                      transform: open ? "none" : "translateY(10px)",
                    }}
                  >
                    <Link
                      href={c.href}
                      className="flex items-center justify-between rounded-2xl px-3 py-3.5 transition-colors hover:bg-violet-50"
                    >
                      <span>
                        <span className="block text-[17px] font-semibold text-violet-950">{c.label}</span>
                        <span className="mt-0.5 block text-[12.5px] text-ink-faint">{c.note}</span>
                      </span>
                      <Arrow className="text-violet-400" />
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
    <svg
      viewBox="0 0 10 6"
      aria-hidden="true"
      className={`h-[6px] w-2.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

function MenuHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-400">{children}</p>
  );
}
