"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Photo from "./Photo";
import { Arrow, Button } from "./ui";
import { Icon } from "./icons";
import { useReducedMotion } from "./motion";
import { site } from "@/lib/content";

/**
 * The homepage hero — an editorial, cinematic opening.
 *
 * Desktop: the section pins while the visitor scrolls through it. A full-bleed
 * photograph of an Indian office sits under very large glass-like type; three
 * layers (a photo card of colleagues and three glass information cards) are layered in front of and behind
 * the words. Scroll drives it: the two lines of type slide apart, the cards
 * rise at different speeds, and the photograph contracts into a rounded card
 * that hands over to the next section. The pointer adds a slight parallax.
 *
 * Tablet keeps the idea with two cards and gentler movement. Mobile is its own
 * vertical composition — headline, one photograph with a card, copy, actions —
 * with no pinning. Reduced motion shows the settled state and nothing moves.
 *
 * Scroll progress is one CSS variable (--p, 0→1) written once per frame, so
 * every movement is a transform or clip-path the compositor can run cheaply.
 */
export default function HeroCinematic() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);

  /* Entrance: one frame after mount, so the settled state animates in. */
  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 120);
    return () => window.clearTimeout(id);
  }, []);

  /* Scroll progress through the pinned section, desktop and tablet only. */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduced) return;
    const wide = window.matchMedia("(min-width: 768px)");
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!wide.matches) {
          el.style.setProperty("--p", "0");
          return;
        }
        const r = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -r.top / r.height));
        el.style.setProperty("--p", p.toFixed(4));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    wide.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      wide.removeEventListener("change", update);
    };
  }, [reduced]);

  /* Pointer parallax, fine pointers only. */
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType !== "mouse" || !sectionRef.current) return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    sectionRef.current.style.setProperty("--mx", x.toFixed(3));
    sectionRef.current.style.setProperty("--my", y.toFixed(3));
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={onMove}
      data-ready={ready}
      data-reduced={reduced}
      className="hero-cine relative isolate bg-canvas"
      style={{ "--p": 0, "--mx": 0, "--my": 0 } as CSSProperties}
    >
      <div className="relative overflow-hidden md:h-screen md:min-h-[640px]">
        {/* ---------- Full-bleed photograph (desktop / tablet) ---------- */}
        <div className="hero-cine-stage absolute inset-0 -z-10 hidden md:block" aria-hidden="true">
          <div className="hero-cine-photo absolute inset-0">
            <Photo slot="home-hero" cover rounded="rounded-none" hover={false} sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#150d33]/70 via-[#1a1233]/25 to-[#150d33]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#150d33]/50 via-transparent to-[#150d33]/40" />
          <div className="hero-cine-vignette absolute inset-0" />
        </div>

        <div className="shell relative flex flex-col pb-10 pt-[92px] md:h-full md:pb-10 md:pt-[128px]">
          {/* ---------- Top-left label ---------- */}
          <p className="hero-cine-fade order-1 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-accent md:text-violet-200">
            <span className="ping-dot h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {site.hero.eyebrow}
          </p>

          {/* ---------- The headline ---------- */}
          <h1
            data-h="self"
            className="order-2 mt-6 font-display font-semibold uppercase leading-[0.88] tracking-[-0.045em] text-heading md:absolute md:inset-x-0 md:top-1/2 md:mt-0 md:-translate-y-[58%] md:text-center"
          >
            <span className="sr-only">
              {site.hero.title[0]} {site.hero.title[1]}
            </span>
            <span aria-hidden="true" className="hero-cine-line hero-cine-line-a block text-[clamp(2.1rem,11vw,4.5rem)] md:whitespace-nowrap md:text-[clamp(3.75rem,7.4vw,8.5rem)]">
              <span className="hero-cine-glass hero-cine-shine">{site.hero.title[0]}</span>
            </span>
            <span aria-hidden="true" className="hero-cine-line hero-cine-line-b block text-[clamp(2.1rem,11vw,4.5rem)] md:whitespace-nowrap md:text-[clamp(3.75rem,7.4vw,8.5rem)]">
              <span className="hero-cine-glass hero-cine-glass-accent">{site.hero.title[1]}</span>
            </span>
          </h1>

          {/* Statutory heads — glass card in front of the type, upper right. */}
          <div className="hero-cine-card hero-cine-card-b relative z-10 order-3 mt-6 w-fit md:absolute md:right-[2%] md:top-[20%] md:mr-0 md:mt-0">
            <div className="rounded-2xl border border-white/15 bg-panel px-4 py-3.5 shadow-float md:bg-white/10 md:backdrop-blur-xl">
              <p className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-gold">
                <Icon name="wallet" className="h-3.5 w-3.5" />
                In every payroll run
              </p>
              <ul className="mt-2.5 grid grid-cols-2 gap-x-5 gap-y-1.5">
                {["EPF", "ESI", "Professional Tax", "TDS"].map((h) => (
                  <li key={h} className="flex items-center gap-1.5 text-[13px] font-semibold text-white">
                    <Icon name="check" className="h-3.5 w-3.5 text-emerald-300" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The platform in one line — glass chip, lower left. Desktop only. */}
          <div className="hero-cine-card hero-cine-card-d hidden lg:absolute lg:bottom-[24%] lg:left-[16%] lg:z-10 lg:block">
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-panel px-4 py-3.5 shadow-float md:bg-white/10 md:backdrop-blur-xl">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-gold">
                <Icon name="layers" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-[15px] font-semibold leading-tight text-white">12 modules</span>
                <span className="block text-[12.5px] text-violet-200">One employee record</span>
              </span>
            </div>
          </div>

          {/* ---------- Bottom-right: copy and actions ---------- */}
          <div className="hero-cine-fade hero-cine-copy order-4 mt-8 md:absolute md:bottom-10 md:right-0 md:mt-0 md:w-[min(460px,62vw)] lg:w-[min(440px,40vw)]">
            <p className="text-[17px] leading-[1.6] text-body md:text-[16px] md:text-violet-100 lg:text-[17px]">
              {site.hero.lede}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] font-semibold text-heading md:text-white">
              {site.hero.highlights.map((h) => (
                <li key={h} className="flex items-center gap-1.5">
                  <Icon name="check" className="h-3.5 w-3.5 text-gold" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              <Button href="/company/contact-hrmagix" size="md" className="w-full sm:w-auto">
                Book a demo
              </Button>
              <Link
                href="/solutions"
                className="group inline-flex min-h-[44px] items-center gap-2 text-[14.5px] font-semibold text-accent md:text-white"
              >
                See the platform <Arrow />
              </Link>
            </div>
          </div>

        </div>

        {/* Scroll progress rail. */}
        <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[2px] w-full md:block" aria-hidden="true">
          <div className="hero-cine-rail h-full w-full origin-left bg-gradient-to-r from-violet-400 via-gold to-violet-300" />
        </div>
      </div>
    </section>
  );
}
