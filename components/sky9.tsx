import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./motion";
import { Icon, type IconName } from "./icons";
import { Arrow, Button } from "./ui";
import Breadcrumbs from "./Breadcrumbs";
import Accordion from "./Accordion";
import Typewriter from "./Typewriter";
import ContactForm from "./ContactForm";
import { site } from "@/lib/content";

/**
 * The page kit: the sections every interior page is assembled from, in one
 * place, so all page types share one structure —
 *
 *   PageHero → StatsStrip → Block sections (centred headers + cards)
 *   → ProcessTimeline → FaqSection → EnquirySection → CtaBand → RelatedCards
 *
 * Content always comes from the page's own data; these components only lay it
 * out. Nothing here adds a claim.
 */

type Crumb = { label: string; href?: string };

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function PageHero({
  crumbs,
  badge,
  title,
  typed = false,
  standfirst,
  chips = [],
  primary = { label: "Book a demo", href: "/company/contact" },
  secondary,
  aside,
}: {
  crumbs: Crumb[];
  badge?: string;
  title: string;
  /** Type the title out, as the homepage hero does. */
  typed?: boolean;
  standfirst: string;
  chips?: { icon?: IconName; label: string }[];
  primary?: { label: string; href: string } | null;
  secondary?: { label: string; href: string };
  aside?: ReactNode;
}) {
  return (
    <header className="page-hero relative border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
      <div className="shell relative w-full">
        <Reveal y={8}>
          <Breadcrumbs items={crumbs} />
        </Reveal>
        <div className={`mt-6 grid items-center gap-8 ${aside ? "lg:grid-cols-12" : ""}`}>
          <div className={aside ? "lg:col-span-7" : "max-w-3xl"}>
            {badge && (
              <Reveal y={10}>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {badge}
                </span>
              </Reveal>
            )}
            <h1 className="display display-lg mt-5 text-balance font-bold">
              {typed ? <Typewriter text={title} speed={28} delay={250} /> : title}
            </h1>
            <Reveal y={14} className="mt-5">
              <p className="max-w-2xl text-[16.5px] leading-[1.7] text-body sm:text-[18.5px]">{standfirst}</p>
            </Reveal>
            {chips.length > 0 && (
              <Reveal y={12} className="mt-6">
                <ul className="flex flex-wrap gap-2.5">
                  {chips.map((c) => (
                    <li
                      key={c.label}
                      className="flex items-center gap-2 rounded-lg bg-surface-sunken/80 px-3.5 py-1.5 text-[13px] text-body ring-1 ring-inset ring-line backdrop-blur-md sm:text-[14px]"
                    >
                      <Icon name={c.icon ?? "check"} className="h-4 w-4 shrink-0 text-gold" />
                      {c.label}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {(primary || secondary) && (
              <Reveal y={12} className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primary && (
                  <Button href={primary.href} size="lg" className="w-full sm:w-auto">
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button href={secondary.href} variant="outline" size="lg" className="w-full sm:w-auto">
                    {secondary.label}
                  </Button>
                )}
              </Reveal>
            )}
          </div>
          {aside && (
            <Reveal delay={200} y={22} className="relative lg:col-span-5">
              {aside}
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}

/** A glass "at a glance" card for the hero's right-hand column. */
export function GlanceCard({ title, items }: { title: string; items: { label: string; value: string }[] }) {
  return (
    <div className="relative rounded-[24px] bg-surface/90 p-6 shadow-float ring-1 ring-line backdrop-blur-xl sm:p-7">
      <span className="border-beam" aria-hidden="true" />
      <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-label">{title}</p>
      <dl className="mt-5 divide-y divide-line">
        {items.map((it) => (
          <div key={it.label} className="flex items-start justify-between gap-4 py-3">
            <dt className="text-[14px] text-muted">{it.label}</dt>
            <dd className="text-right text-[14px] font-semibold text-heading">{it.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stats strip                                                         */
/* ------------------------------------------------------------------ */

/** Floating stats card overlapping the hero's lower edge. Page-derived figures only. */
export function StatsStrip({ items }: { items: { value: string; label: string; icon: IconName }[] }) {
  return (
    <div className="relative z-20 -mt-10 sm:-mt-12">
      <div className="shell">
        <Reveal y={14}>
          <dl
            className={`card grid grid-cols-2 gap-4 px-4 py-5 sm:gap-6 sm:px-8 sm:py-6 md:divide-x md:divide-line ${
              items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
            }`}
          >
            {items.map((s) => (
              <div key={s.label} className="flex flex-col items-center p-2 text-center">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-accent">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <dd className="mt-2.5 font-display text-[26px] font-bold leading-none tracking-[-0.02em] text-heading sm:text-[30px]">
                  {s.value}
                </dd>
                <dt className="mt-1.5 max-w-[150px] text-[12.5px] font-medium leading-snug text-muted sm:text-[13.5px]">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section wrapper                                                     */
/* ------------------------------------------------------------------ */

export function Block({
  id,
  eyebrow,
  title,
  intro,
  ground = "canvas",
  align = "center",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  ground?: "canvas" | "sunken";
  align?: "center" | "left";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[110px] py-8 sm:py-10 md:py-14 ${
        ground === "sunken" ? "border-y border-line bg-surface-sunken" : "bg-canvas"
      }`}
    >
      <div className="shell">
        {title && (
          <Reveal
            y={12}
            className={`mb-6 sm:mb-8 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
          >
            {eyebrow && (
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                {eyebrow}
              </span>
            )}
            <h2 className={`display display-lg text-balance font-bold ${eyebrow ? "mt-4" : ""}`}>{title}</h2>
            {intro && (
              <p
                className={`mt-4 text-[16px] leading-[1.7] text-muted sm:text-[17.5px] ${
                  align === "center" ? "mx-auto max-w-2xl" : ""
                }`}
              >
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

/** Numbered steps on a line: horizontal on desktop, vertical on mobile. */
export function ProcessTimeline({ steps }: { steps: { title: string; body: string }[] }) {
  const cols =
    steps.length <= 3 ? "md:grid-cols-3" : steps.length === 4 ? "md:grid-cols-4" : "md:grid-cols-5";
  return (
    <ol className={`relative mx-auto grid max-w-6xl gap-6 md:gap-4 ${cols}`}>
      <span
        className="absolute left-7 top-0 h-full w-0.5 bg-line md:left-[8%] md:right-[8%] md:top-7 md:h-0.5 md:w-auto"
        aria-hidden="true"
      />
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 100}
          y={14}
          className="relative flex gap-5 md:flex-col md:items-center md:text-center"
        >
          <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand font-display text-[20px] font-bold text-white shadow-glow ring-4 ring-canvas">
            {i + 1}
          </span>
          <div className="md:mt-4">
            <h3 className="font-display text-[16.5px] font-bold text-heading">{s.title}</h3>
            <p className="mt-1.5 text-[14px] leading-[1.6] text-muted md:mx-auto md:max-w-[16rem]">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export function FaqSection({
  title = "Frequently asked questions",
  intro,
  items,
  ground = "canvas",
  more = { label: "Every question, in one place", href: "/resources/faqs" },
}: {
  title?: string;
  intro?: string;
  items: { q: string; a: string }[];
  ground?: "canvas" | "sunken";
  more?: { label: string; href: string } | null;
}) {
  if (!items.length) return null;
  return (
    <Block eyebrow="FAQs" title={title} intro={intro} ground={ground}>
      <div className="mx-auto max-w-3xl">
        <Accordion items={items} single />
        {more && (
          <p className="mt-8 text-center">
            <Link
              href={more.href}
              className="group inline-flex min-h-[44px] items-center gap-2 text-[14.5px] font-semibold text-accent"
            >
              {more.label} <Arrow />
            </Link>
          </p>
        )}
      </div>
    </Block>
  );
}

/* ------------------------------------------------------------------ */
/* Enquiry                                                             */
/* ------------------------------------------------------------------ */

/** Split enquiry band: what happens next on the left, the form on the right. */
export function EnquirySection({ topic }: { topic: string }) {
  return (
    <section id="enquiry" className="scroll-mt-[110px] border-y border-line bg-surface-sunken py-8 sm:py-10 md:py-14">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal y={12} className="lg:col-span-5">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            Talk to us
          </span>
          <h2 className="display display-lg mt-4 text-balance font-bold">
            Questions about {topic.toLowerCase()}?
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.7] text-muted">{site.contact.blurb}</p>
          <ul className="mt-7 grid gap-3">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-3 rounded-xl bg-surface p-3.5 ring-1 ring-line transition-colors hover:ring-line-accent"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-accent">
                  <Icon name="mail" className="h-4 w-4" />
                </span>
                <span className="text-[14.5px] font-semibold text-heading">{site.contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-xl bg-surface p-3.5 ring-1 ring-line transition-colors hover:ring-line-accent"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-accent">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <span className="text-[14.5px] font-semibold text-heading">{site.contact.phone}</span>
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120} y={16} className="card p-5 sm:p-8 lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA band                                                            */
/* ------------------------------------------------------------------ */

export function CtaBand({
  eyebrow = "Book a demo",
  title,
  body,
  primary = { label: "Book a demo", href: "/company/contact" },
  secondary = { label: "See pricing", href: "/pricing" },
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-canvas px-4 py-8 sm:py-10">
      <Reveal
        y={18}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-gradient-to-br from-violet-600 via-violet-500 to-violet-700 px-5 py-9 text-center shadow-float sm:px-12 sm:py-12 dark:from-[#2e2152] dark:via-[#251b44] dark:to-[#1c1533]"
      >
        <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-gold/25 blur-2xl" aria-hidden="true" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-white ring-1 ring-inset ring-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 className="display display-lg mx-auto mt-5 max-w-[22ch] font-bold !text-white">{title}</h2>
          {body && <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7] text-violet-100 sm:text-[18px]">{body}</p>}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primary.href} variant="light" size="lg" className="btn-shimmer w-full sm:w-auto">
              {primary.label}
            </Button>
            <Link
              href={secondary.href}
              className="inline-flex h-[58px] w-full items-center justify-center rounded-full px-7 text-[16px] font-semibold text-white ring-1 ring-inset ring-white/40 transition-colors hover:bg-white/10 sm:w-auto"
            >
              {secondary.label}
            </Link>
          </div>
          <p className="mt-6 text-[13px] text-violet-100/85">{site.trial}</p>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Related                                                             */
/* ------------------------------------------------------------------ */

export function RelatedCards({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: { label: string; href: string; note: string; icon?: IconName }[];
}) {
  if (!items.length) return null;
  return (
    <Block eyebrow="Keep exploring" title={title} intro={intro}>
      <ul
        className={`grid gap-4 sm:grid-cols-2 lg:gap-5 ${items.length >= 3 ? "lg:grid-cols-3" : ""}`}
      >
        {items.map((it, i) => (
          <Reveal as="li" key={it.href} delay={i * 70} y={14}>
            <Link href={it.href} className="card card-hover group flex h-full flex-col p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent transition-transform duration-300 group-hover:rotate-6 motion-reduce:group-hover:rotate-0">
                <Icon name={it.icon ?? "compass"} className="h-5 w-5" />
              </span>
              <span className="mt-5 font-display text-[18px] font-bold text-heading group-hover:text-accent">
                {it.label}
              </span>
              <span className="mt-2 flex-1 text-[14.5px] leading-[1.6] text-muted">{it.note}</span>
              <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent">
                Explore <Arrow />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Block>
  );
}

/* ------------------------------------------------------------------ */
/* Site stats                                                          */
/* ------------------------------------------------------------------ */

/**
 * The stats bar under every interior hero. Only figures hrmagix.com itself
 * publishes: 120+ companies, 9,000+ employees, 12 modules, 14-day trial.
 */
export function SiteStats() {
  return (
    <StatsStrip
      items={[
        { value: "120+", label: "Companies on HRMagix", icon: "users" },
        { value: "9,000+", label: "Employees managed", icon: "fingerprint" },
        { value: "12", label: "Integrated modules", icon: "layers" },
        { value: "14-day", label: "Free trial, no card", icon: "calendar" },
      ]}
    />
  );
}
