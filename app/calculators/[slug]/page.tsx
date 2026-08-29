import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { calculators, calculatorBySlug } from "@/lib/calculators";
import { Band, Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/icons";
import Breadcrumbs from "@/components/Breadcrumbs";
import Accordion from "@/components/Accordion";
import CalculatorRunner from "@/components/CalculatorRunner";
import OnThisPage from "@/components/OnThisPage";

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = calculatorBySlug(slug);
  if (!c) return {};
  return {
    title: c.seo.title,
    description: c.seo.description,
    keywords: c.seo.keywords,
    alternates: { canonical: `/calculators/${c.slug}` },
    openGraph: {
      title: `${c.seo.title} · HRMagix`,
      description: c.seo.description,
      url: `/calculators/${c.slug}`,
      siteName: "HRMagix",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
    },
  };
}

/**
 * A dedicated calculator page.
 *
 * The order answers three questions in the sequence a first-time visitor asks
 * them: what does this calculate → what do I enter and what is my result → how
 * was that worked out. The tool sits high on the page; the explanation follows
 * it rather than delaying it.
 *
 * Every calculator gets this page, but each brings its own title, standfirst,
 * intro, fields, compute, formula, method steps, caveats and FAQs — so no two
 * read alike beyond the shared shell.
 */
export default async function CalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calc = calculatorBySlug(slug);
  if (!calc) notFound();

  const related = calc.related
    .map((s) => calculatorBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      {/* ---- 1. What this calculates ---- */}
      <header className="border-b border-line bg-surface-sunken pb-10 pt-[104px] sm:pb-12 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Calculator", href: "/resources/calculator" },
                { label: calc.name },
              ]}
            />
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-16">
            <div>
              <Reveal y={10} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface text-accent ring-1 ring-line">
                  <Icon name={calc.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent-soft">
                  Calculator
                </span>
              </Reveal>

              <h1 className="display display-lg mt-5 max-w-[18ch] text-balance">{calc.title}</h1>

              <Reveal delay={140}>
                <p className="mt-6 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                  {calc.standfirst}
                </p>
              </Reveal>
            </div>

            <Reveal delay={180} y={14} className="rounded-2xl bg-surface p-6 ring-1 ring-line">
              <h2 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                What this calculates
              </h2>
              {calc.intro.map((p, i) => (
                <p key={i} className={`text-[14.5px] leading-[1.7] text-muted ${i ? "mt-3.5" : "mt-4"}`}>
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </header>

      {/* ---- 2. The tool: inputs → Calculate → result ---- */}
      <Band ground="surface" size="lg" id="calculator">
        <CalculatorRunner slug={calc.slug} />
      </Band>

      {/* ---- 3. How is this calculated? ---- */}
      <Band ground="sunken" size="lg" id="method">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">How is this calculated?</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              {calc.methodIntro}
            </p>
          </Reveal>

          <div className="min-w-0">
            <div className="overflow-x-auto rounded-2xl bg-surface p-5 ring-1 ring-line-accent sm:p-6">
              <p className="whitespace-nowrap font-mono text-[14px] font-semibold text-accent-strong sm:text-[15px]">
                {calc.method.formula}
              </p>
            </div>

            <ol className="mt-9 space-y-0">
              {calc.method.steps.map((s, i) => (
                <Reveal as="li" key={s.label} delay={i * 55} y={10} className="relative flex gap-5 pb-7 last:pb-0">
                  <span className="relative flex flex-col items-center">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface-raised font-display text-[12.5px] font-bold text-accent-strong">
                      {i + 1}
                    </span>
                    {i < calc.method.steps.length - 1 && (
                      <span aria-hidden="true" className="mt-1 w-px flex-1 bg-line" />
                    )}
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

            <Reveal y={12} className="mt-10 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-7">
              <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
                <Icon name="scale" className="h-4 w-4" />
                What this does not include
              </p>
              <ul className="mt-4 space-y-3">
                {calc.method.notes.map((n) => (
                  <li key={n} className="flex gap-3.5 text-[15px] leading-[1.7] text-muted">
                    <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                    {n}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Band>

      {/* ---- 4. Questions about this specific calculator ---- */}
      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">Questions</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              Asked often enough about this calculation to be worth answering beside it.
            </p>
            <Link
              href="/resources/faqs"
              className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
            >
              Every question, in one place <Arrow />
            </Link>
          </Reveal>
          <Accordion items={calc.faqs} />
        </div>
      </Band>

      {/* ---- 5. Cross-links to the other calculators ---- */}
      <Band ground="raised" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[20ch]">
              See this run against your own payroll month
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              A calculator applies a rule to figures you type in. A payroll run applies it to your
              actual employee record, your locations and your verified declarations — which is where
              Professional Tax, LWF and TDS also resolve.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/company/contact">Book a demo</Button>
            <Button href="/resources/calculator" variant="outline">
              All calculators
            </Button>
          </div>
        </div>
      </Band>

      <Onward
        title="Other calculators"
        links={related.map((r) => ({
          label: r.name,
          href: `/calculators/${r.slug}`,
          note: r.standfirst,
        }))}
      />
    </>
  );
}
