import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, Words } from "./motion";
import { Arrow } from "./ui";
import Photo from "./Photo";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { CtaBand } from "./sky9";

/**
 * The editorial vocabulary.
 *
 * These are compositions, not cards. Each one exists because a particular kind
 * of content reads best in that shape — an argument as a measured text column,
 * a set of statutory facts as a ruled ledger, a sequence as a numbered trail
 * with a line running through it, a set of capabilities as three plain lists
 * rather than nine boxes.
 *
 * The rule that keeps the site from looking generated: a page picks three or
 * four of these, never all of them, and never two adjacent sections built from
 * the same one.
 */

/* ================================================================== */
/* Openers                                                            */
/* ================================================================== */

/**
 * The asymmetric opener used by solution and industry pages: a left-aligned
 * headline against a photograph that bleeds off the right edge on wide screens.
 * Deliberately unlike the centred homepage hero.
 */
export function ArticleOpener({
  eyebrow,
  title,
  standfirst,
  slot,
  crumbs,
  meta,
  actions,
}: {
  eyebrow: string;
  title: string;
  standfirst: string;
  slot: string;
  crumbs: Crumb[];
  /** Short factual pairs shown under the standfirst — never invented metrics. */
  meta?: { label: string; value: string }[];
  actions?: ReactNode;
}) {
  return (
    <header className="page-hero relative overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
      {/* Editorial glowing ambient wash */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[460px] w-[680px] rounded-full bg-glow/18 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-[340px] w-[500px] rounded-full bg-violet-400/8 blur-[120px]"
        aria-hidden="true"
      />
      <div className="shell relative">
        <Reveal y={8}>
          <Breadcrumbs items={crumbs} />
        </Reveal>

        <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
          <div>
            <Reveal y={10}>
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {eyebrow}
              </span>
            </Reveal>

            <h1 className="display display-lg mt-5 max-w-[19ch] text-balance">
              <Words as="span" text={title} />
            </h1>

            <Reveal delay={200} className="mt-6 max-w-xl">
              <p className="text-[17px] leading-[1.65] text-body sm:text-[18.5px]">{standfirst}</p>
            </Reveal>

            {meta && (
              <Reveal delay={280} className="mt-8">
                <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-5">
                  {meta.map((m) => (
                    <div key={m.label} className="min-w-[8rem]">
                      <dt className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-subtle">
                        {m.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-[15px] font-semibold text-heading">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}

            {actions && (
              <Reveal delay={340} className="mt-8 flex flex-wrap gap-3">
                {actions}
              </Reveal>
            )}
          </div>

          <Reveal delay={160} y={26} className="relative lg:-mr-[max(0px,calc((100vw-1240px)/2))]">
            <div className="relative overflow-hidden rounded-[24px] shadow-lift lg:rounded-l-[24px] lg:rounded-r-none">
              <Photo
                slot={slot}
                ratio="4 / 3"
                rounded="rounded-[24px] lg:rounded-l-[24px] lg:rounded-r-none"
                sizes="(max-width: 1024px) 100vw, 620px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

/* ================================================================== */
/* Text                                                               */
/* ================================================================== */

/**
 * The opening argument of a page: a wide measure, larger than body text, set
 * against a narrow standfirst rule. No image, no card — just the claim.
 */
export function Opening({
  paragraphs,
  label,
  className = "",
}: {
  paragraphs: string[];
  label?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-8 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] lg:gap-16 ${className}`}>
      {label && (
        <Reveal y={10}>
          <p className="border-t-2 border-line-accent pt-4 text-[12px] font-bold uppercase tracking-[0.18em] text-accent">
            {label}
          </p>
        </Reveal>
      )}
      <div className={label ? "" : "lg:col-span-2 lg:max-w-4xl"}>
        {paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 90} y={16}>
            <p
              className={`text-body ${
                i === 0
                  ? "text-[19px] leading-[1.6] sm:text-[21px] sm:leading-[1.58]"
                  : "mt-6 text-[16.5px] leading-[1.72]"
              }`}
            >
              {p}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** A run of long-form sections: heading left, body right, ruled between. */
export function Passages({
  items,
  className = "",
  level = "h3",
}: {
  items: { heading: string; body: string[] }[];
  className?: string;
  /**
   * The level these headings sit at. h3 is right when the block sits under a
   * band that already has its own h2; h2 when the passages are the section.
   * Getting this wrong skips a heading level, which assistive technology and
   * search crawlers both read as a structural error.
   */
  level?: "h2" | "h3";
}) {
  const H = level;
  return (
    <div className={`grid gap-4 lg:gap-5 ${className}`}>
      {items.map((item) => (
        <Reveal
          key={item.heading}
          delay={40}
          y={18}
          as="section"
          className="card card-hover grid gap-4 p-6 sm:p-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12"
        >
          <H className="font-display text-[20px] font-bold leading-snug tracking-[-0.02em] text-heading lg:text-[22px]">
            {item.heading}
          </H>
          <div className="max-w-2xl">
            {item.body.map((p, j) => (
              <p key={j} className={`text-[16.5px] leading-[1.72] text-muted ${j ? "mt-5" : ""}`}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Worked use cases: who has the problem, what the situation actually looks
 * like, and how it resolves.
 *
 * Deliberately not a card grid. Each case is a short piece of prose under a
 * role, because the useful part is the situation rather than the label — a
 * three-word feature tile would say less than the sentence it replaced.
 */
export function UseCases({
  title,
  intro,
  items,
  className = "",
}: {
  title: string;
  intro?: string;
  items: { role: string; situation: string; resolution: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal y={12} className="max-w-2xl">
        <h2 className="display display-md">{title}</h2>
        {intro && <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">{intro}</p>}
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
        {items.map((item, i) => (
          <Reveal
            key={item.role}
            delay={i * 45}
            y={14}
            as="section"
            className="card card-hover min-w-0 p-6 sm:p-7"
          >
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
              {item.role}
            </h3>
            <p className="mt-4 text-[16.5px] leading-[1.72] text-body">{item.situation}</p>
            <p className="mt-4 text-[15.5px] leading-[1.72] text-muted">{item.resolution}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** A single sentence given a whole band. Used sparingly — once per page at most. */
export function Statement({
  children,
  attribution,
  tone = "light",
}: {
  children: ReactNode;
  attribution?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={`relative overflow-hidden ${
        dark
          ? "panel-fixed-dark bg-panel py-10 sm:py-12 lg:py-14"
          : "border-y border-line bg-surface-sunken py-10 sm:py-12 lg:py-14"
      }`}
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 font-display text-[120px] font-bold leading-none text-line/20 select-none sm:text-[180px] lg:text-[240px]"
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <div className="shell relative">
        <Reveal y={16}>
          <p
            className={`font-display text-[24px] font-light leading-[1.35] tracking-[-0.025em] text-balance sm:text-[32px] lg:text-[38px] ${
              dark ? "text-white" : "text-heading"
            } max-w-[22ch] sm:max-w-[26ch]`}
          >
            {children}
          </p>
          {attribution && (
            <p
              className={`mt-6 inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.18em] ${
                dark ? "text-violet-300" : "text-accent"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              {attribution}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/* Structured reference                                               */
/* ================================================================== */

/**
 * Ruled reference rows. This is how statutory facts and record fields are set —
 * as a document, not as tiles, because the reader is scanning for one row.
 */
export function Ledger({
  title,
  intro,
  rows,
  className = "",
}: {
  title: string;
  intro?: string;
  rows: { term: string; detail: string; note?: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal y={12} className="max-w-2xl">
        <h2 className="display display-md">{title}</h2>
        {intro && <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">{intro}</p>}
      </Reveal>

      <dl className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-5">
        {rows.map((row, i) => (
          <Reveal
            key={row.term}
            delay={i * 45}
            y={12}
            className="card card-hover flex flex-col gap-2.5 p-6"
          >
            <dt className="font-display text-[15.5px] font-bold leading-snug text-heading">
              {row.term}
            </dt>
            <dd>
              <p className="text-[15.5px] leading-[1.7] text-muted">{row.detail}</p>
              {row.note && (
                <p className="mt-2.5 inline-flex items-center gap-2 text-[12.5px] font-semibold text-accent">
                  <span aria-hidden="true" className="h-px w-5 bg-line-accent" />
                  {row.note}
                </p>
              )}
            </dd>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}

/**
 * An ordered sequence with a rule running through it. Used for processes that
 * genuinely have an order — a payroll month, a lifecycle — and never for a set
 * of unordered features dressed up as steps.
 */
export function Mechanics({
  title,
  intro,
  steps,
  className = "",
}: {
  title: string;
  intro?: string;
  steps: { step: string; title: string; body: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal y={12} className="max-w-2xl">
        <h2 className="display display-md">{title}</h2>
        {intro && <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">{intro}</p>}
      </Reveal>

      <ol className="relative mt-12 space-y-0">
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-brand via-line-accent to-transparent sm:left-[23px]"
        />
        {steps.map((s, i) => (
          <Reveal
            as="li"
            key={s.step}
            delay={i * 60}
            y={14}
            className="relative pb-5 pl-14 sm:pl-[74px]"
          >
            <span className="absolute left-0 top-3 z-10 grid h-10 w-10 place-items-center rounded-2xl bg-brand font-display text-[13px] font-bold text-white shadow-glow sm:h-12 sm:w-12 sm:text-[14px]">
              {s.step}
            </span>
            <div className="card card-hover grid gap-3 p-5 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-8 sm:p-6">
              <h3 className="font-display text-[17.5px] font-bold leading-snug text-heading">
                {s.title}
              </h3>
              <p className="max-w-2xl text-[15.5px] leading-[1.7] text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/**
 * Capability lists as three plain columns of ticked lines. No boxes, no icons
 * per item — this is an index of what the module does, and it should read like
 * one.
 */
export function CapabilityIndex({
  groups,
  className = "",
}: {
  groups: { group: string; items: string[] }[];
  className?: string;
}) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 ${className}`}>
      {groups.map((g, i) => (
        <Reveal key={g.group} delay={i * 80} y={14} className="card card-hover p-6">
          <h3 className="border-b border-line-accent pb-3 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
            {g.group}
          </h3>
          <ul className="mt-5 space-y-3.5">
            {g.items.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-muted">
                <span aria-hidden="true" className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/10 text-accent">
                  <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3.5 8.5 3 3 6-7" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * A numbered narrative used where items are pressures, arguments or reasons
 * rather than steps: a large index number set against a heading and a real
 * paragraph. Two columns, and no border in sight.
 */
export function NumberedNarrative({
  items,
  className = "",
}: {
  items: { title: string; body: string }[];
  className?: string;
}) {
  return (
    <div className={`grid gap-4 lg:grid-cols-2 lg:gap-5 ${className}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 70} y={16} className="card card-hover flex gap-5 p-6 sm:gap-6 sm:p-7">
          <span
            aria-hidden="true"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand/10 font-display text-[18px] font-bold text-accent"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-[17.5px] font-bold leading-snug text-heading">
              {item.title}
            </h3>
            <p className="mt-3 text-[15.5px] leading-[1.7] text-muted">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Text set against a photograph, alternating side by index. The image is
 * genuinely load-bearing here: it is what the passage is about.
 */
export function SplitPassage({
  eyebrow,
  heading,
  body,
  slot,
  caption,
  flip = false,
  link,
  className = "",
}: {
  eyebrow?: string;
  heading: string;
  body: string[];
  slot: string;
  caption?: string;
  flip?: boolean;
  link?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${className}`}
    >
      <Reveal y={20} className={flip ? "lg:order-2" : ""}>
        <figure>
          <Photo slot={slot} ratio="5 / 4" sizes="(max-width: 1024px) 100vw, 560px" />
          {caption && (
            <figcaption className="mt-4 text-[13px] leading-relaxed text-subtle">{caption}</figcaption>
          )}
        </figure>
      </Reveal>

      <div className={flip ? "lg:order-1" : ""}>
        {eyebrow && (
          <Reveal y={8}>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={80} y={14}>
          <h2 className="display display-md mt-4 max-w-[16ch]">{heading}</h2>
        </Reveal>
        {body.map((p, i) => (
          <Reveal key={i} delay={140 + i * 70} y={12}>
            <p className="mt-5 text-[16.5px] leading-[1.72] text-muted">{p}</p>
          </Reveal>
        ))}
        {link && (
          <Reveal delay={260}>
            <Link
              href={link.href}
              className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent transition-colors hover:text-accent-strong"
            >
              {link.label} <Arrow />
            </Link>
          </Reveal>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/* Navigation between pages                                           */
/* ================================================================== */

/**
 * The end of every interior page. Three onward routes with a reason attached to
 * each, so a reader is never left at a dead end with only a CTA.
 */
export function Onward({
  title = "Where to go next",
  links,
  className = "",
}: {
  title?: string;
  links: { label: string; href: string; note: string }[];
  className?: string;
}) {
  return (
    <>
    {/* Every interior page closes the same way: the CTA band, then onward routes. */}
    <CtaBand title={<>See HRMagix run on <strong>your own payroll month</strong></>} />
    <section className={`border-t border-line bg-surface-sunken py-8 sm:py-10 md:py-14 ${className}`}>
      <div className="shell">
        <Reveal y={10} className="mx-auto mb-6 max-w-3xl text-center sm:mb-8">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            Keep exploring
          </span>
          <h2 className="display display-lg mt-4 font-bold">{title}</h2>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-3 lg:gap-5">
          {links.map((l, i) => (
            <Reveal as="li" key={l.href} delay={i * 70} y={12}>
              <Link
                href={l.href}
                className="card card-hover group flex h-full flex-col justify-between gap-6 p-6 sm:p-7"
              >
                <span className="font-display text-[17px] font-bold leading-snug text-heading transition-colors group-hover:text-accent">
                  {l.label}
                </span>
                <span className="flex items-end justify-between gap-4">
                  <span className="text-[13.5px] leading-relaxed text-muted">{l.note}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-sunken text-accent ring-1 ring-line transition-colors group-hover:bg-brand group-hover:text-white">
                    <Arrow />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
}

/**
 * Section wrapper. Grounds alternate down a page and the padding scale varies,
 * which is what stops a long page reading as one repeated block.
 */
export function Band({
  children,
  ground = "surface",
  size = "lg",
  id,
  className = "",
}: {
  children: ReactNode;
  ground?: "surface" | "sunken" | "raised" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  id?: string;
  className?: string;
}) {
  const grounds = {
    surface: "bg-surface",
    sunken: "bg-surface-sunken",
    raised: "bg-surface-raised/45",
    dark: "panel-fixed-dark bg-panel",
  };
  const sizes = {
    sm: "py-6 sm:py-8 lg:py-10",
    // Only values on Tailwind's default spacing scale — `py-18`/`py-22` do not
    // exist there and silently produced no padding at all.
    md: "py-8 sm:py-10 lg:py-12",
    lg: "py-8 sm:py-10 md:py-14",
    xl: "py-10 sm:py-12 md:py-16",
  };
  return (
    <section id={id} className={`${grounds[ground]} ${sizes[size]} ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}
