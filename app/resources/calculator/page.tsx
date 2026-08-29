import type { Metadata } from "next";
import Link from "next/link";
import { calculators, unavailable } from "@/lib/calculators";
import { Band, Opening, Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/icons";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Salary, PF, ESI & Gratuity Calculators",
  description:
    "Free Indian payroll calculators: salary breakup and take-home, EPF and pension contributions, ESI eligibility, gratuity under the Payment of Gratuity Act, and total payroll cost.",
  keywords: [
    "employee salary calculator",
    "PF calculation",
    "ESI calculation",
    "gratuity calculator",
    "payroll cost calculator",
    "salary calculation software",
  ],
  alternates: { canonical: "/resources/calculator" },
};

/**
 * The calculator hub.
 *
 * This page has one job: present the options and route to a dedicated page. It
 * deliberately contains no calculator of its own — putting one here would make
 * it the default and leave the individual pages looking like overflow.
 *
 * The second half is the part most calculator hubs omit: the calculators that
 * are NOT offered, and why. A visitor looking for TDS learns that income tax
 * cannot be computed without current-year slabs and verified declarations,
 * rather than assuming it was forgotten.
 */
export default function CalculatorHub() {
  return (
    <>
      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Calculator" },
              ]}
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[18ch] text-balance">
                Six calculators, <strong>and every formula shown</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                Each one opens on its own page with its own inputs, its own worked result and a
                full explanation of how the figure was reached. Nothing is modelled, estimated or
                projected — you should be able to reproduce every number by hand.
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <Photo slot="calculator" ratio="3 / 2" sizes="(max-width: 1024px) 100vw, 420px" />
            </Reveal>
          </div>
        </div>
      </header>

      {/* ---- The options ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">Choose a calculator</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Each opens a dedicated page. The first four apply provisions of central Indian statute;
            the last two apply those rules across a team, and the published HRMagix rates.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
          {calculators.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 55} y={12} className="bg-surface">
              <Link
                href={`/calculators/${c.slug}`}
                className="group flex h-full flex-col gap-4 p-7 transition-colors hover:bg-surface-raised/50 sm:p-8"
              >
                <span className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-sunken text-accent ring-1 ring-line transition-colors group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                    <Icon name={c.icon} className="h-[19px] w-[19px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 font-display text-[19px] font-bold text-heading transition-colors group-hover:text-accent">
                      {c.name}
                      <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                        <Arrow />
                      </span>
                    </span>
                    <span className="mt-2.5 block text-[15px] leading-[1.65] text-muted">
                      {c.standfirst}
                    </span>
                  </span>
                </span>

                <span className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line pt-4 text-[12.5px] text-subtle">
                  <span>
                    <span className="font-semibold text-body">You enter:</span>{" "}
                    {c.fields
                      .filter((f) => !f.toggle)
                      .map((f) => f.label.toLowerCase())
                      .join(", ")}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Band>

      {/* ---- How to use them ---- */}
      <Band ground="sunken" size="md">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12}>
            <h2 className="display display-md">How each page works</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              The same three questions in the same order, on every calculator.
            </p>
          </Reveal>

          <ol className="min-w-0 space-y-0">
            {[
              {
                label: "What do I enter?",
                text: "Clearly labelled inputs with a hint under each, and a note on what the figure should be — basic rather than gross, gross rather than basic, completed years rather than months.",
              },
              {
                label: "What will be calculated?",
                text: "A short explanation sits beside the title before you touch anything, so the tool is never the first thing you have to interpret.",
              },
              {
                label: "What is my result?",
                text: "Press Calculate for headline figures, then the full breakdown underneath — every intermediate line, with the rate or rule that produced it named beside it.",
              },
              {
                label: "How was that worked out?",
                text: "The formula in full, the steps in order, and an explicit list of what the calculation does not include and why.",
              },
            ].map((s, i, arr) => (
              <Reveal as="li" key={s.label} delay={i * 60} y={10} className="relative flex gap-5 pb-7 last:pb-0">
                <span className="relative flex flex-col items-center">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface font-display text-[12.5px] font-bold text-accent-strong ring-1 ring-line">
                    {i + 1}
                  </span>
                  {i < arr.length - 1 && <span aria-hidden="true" className="mt-1 w-px flex-1 bg-line" />}
                </span>
                <span className="min-w-0 pb-1">
                  <span className="block font-display text-[16.5px] font-bold leading-snug text-heading">
                    {s.label}
                  </span>
                  <span className="mt-2 block max-w-2xl text-[15.5px] leading-[1.7] text-muted">
                    {s.text}
                  </span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </Band>

      {/* ---- What is deliberately not offered ---- */}
      <Band ground="surface" size="lg">
        <Opening
          label="Not offered"
          paragraphs={[
            "Three calculations people look for are missing from the list above, and they are missing deliberately rather than by omission.",
            "Each depends on figures that change by statute every year, or that differ by state, and that HRMagix does not publish. A calculator built on a guessed slab produces a confident wrong number — which is worse than no calculator, because someone will act on it.",
          ]}
        />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {unavailable.map((u, i) => (
            <Reveal
              key={u.name}
              delay={i * 60}
              y={12}
              className="grid gap-4 py-7 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-12"
            >
              <h3 className="flex items-start gap-2.5 font-display text-[17px] font-bold leading-snug text-heading">
                <Icon name="cross" className="mt-1 h-4 w-4 shrink-0 text-subtle" />
                {u.name}
              </h3>
              <div className="max-w-3xl">
                <p className="text-[15.5px] leading-[1.7] text-muted">{u.why}</p>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-accent-strong">
                  <span className="font-semibold uppercase tracking-[0.08em] text-subtle">
                    What it would need —{" "}
                  </span>
                  {u.needs}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          <Button href="/solutions/payroll">How payroll resolves all three</Button>
          <Button href="/company/contact" variant="outline">
            Ask about your own case
          </Button>
        </Reveal>
      </Band>

      <Onward
        links={[
          {
            label: "White papers",
            href: "/resources/white-papers",
            note: "The reasoning behind these figures, at length.",
          },
          {
            label: "Insights",
            href: "/blog",
            note: "Shorter pieces on ESI thresholds, gratuity and payroll cost.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            note: "The published plan rates the cost calculator uses.",
          },
        ]}
      />
    </>
  );
}
