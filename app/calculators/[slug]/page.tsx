import type { Metadata } from "next";
import { SiteStats, Block, ProcessTimeline, FaqSection } from "@/components/sky9";
import { notFound } from "next/navigation";
import { calculators, calculatorBySlug } from "@/lib/calculators";
import { Onward } from "@/components/editorial";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/icons";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorRunner from "@/components/CalculatorRunner";
import OnThisPage from "@/components/OnThisPage";
import Photo from "@/components/Photo";

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
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }],
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
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface-sunken pb-10 pt-[104px] sm:pb-12 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot={`calc-${calc.slug}`} cover rounded="rounded-none" hover={false} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="shell relative">
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

      <SiteStats />

      {/* ---- 2. The tool: inputs → Calculate → result ---- */}
      <Block id="calculator" eyebrow="Calculator" title={calc.name}>
        <CalculatorRunner slug={calc.slug} />
      </Block>

      {/* ---- 3. How is this calculated? ---- */}
      <Block
        id="method"
        eyebrow="Method"
        title="How is this calculated?"
        intro={calc.methodIntro}
        ground="sunken"
      >
        <div className="mx-auto mb-10 max-w-3xl overflow-x-auto rounded-2xl bg-surface p-5 text-center ring-1 ring-line-accent sm:p-6">
          <p className="whitespace-nowrap font-mono text-[14px] font-semibold text-accent-strong sm:text-[15px]">
            {calc.method.formula}
          </p>
        </div>

        <ProcessTimeline steps={calc.method.steps.map((s) => ({ title: s.label, body: s.text }))} />

        <Reveal y={12} className="card mx-auto mt-12 max-w-3xl p-6 sm:p-7">
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
      </Block>

      {/* ---- 4. Questions about this specific calculator ---- */}
      <FaqSection
        title="Questions"
        intro="Asked often enough about this calculation to be worth answering beside it."
        items={calc.faqs}
      />

      {/* ---- 5. Cross-links to the other calculators ---- */}
      <Block
        eyebrow="Next step"
        title="See this run against your own payroll month"
        intro="A calculator applies a rule to figures you type in. A payroll run applies it to your actual employee record, your locations and your verified declarations, which is where Professional Tax, LWF and TDS also resolve."
        ground="sunken"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/company/contact-hrmagix">Book a demo</Button>
          <Button href="/resources/calculator" variant="outline">
            All calculators
          </Button>
        </div>
      </Block>

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
