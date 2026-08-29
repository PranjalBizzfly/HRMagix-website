import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries, industryBySlug } from "@/lib/industries";
import { Band, Opening, NumberedNarrative, Onward } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import Accordion from "@/components/Accordion";
import OnThisPage from "@/components/OnThisPage";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = industryBySlug(slug);
  if (!i) return {};
  return {
    title: i.seo.title,
    description: i.seo.description,
    keywords: i.seo.keywords,
    alternates: { canonical: i.href },
    openGraph: {
      title: `${i.seo.title} · HRMagix`,
      description: i.seo.description,
      url: i.href,
      siteName: "HRMagix",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
    },
  };
}

/**
 * The industry template.
 *
 * Structurally the opposite of a solution page, on purpose. A solution page
 * opens asymmetrically with the photograph beside the headline; an industry
 * page opens with a full-bleed photograph the headline sits *on*, because the
 * subject here is a place and a kind of work rather than a mechanism.
 *
 * The body is an argument in four movements — situation, pressures, priority
 * order, closing — and the priority list is the part that does the real work:
 * it says which module to switch on first for this kind of company, and why,
 * which is the question these readers actually arrive with.
 */
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) notFound();

  const others = industries.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      {/* ---- Immersive opener ---- */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo slot={industry.image} cover rounded="rounded-none" hover={false} sizes="100vw" />
          {/*
            Two overlays rather than one. The horizontal ramp keeps the headline
            column dark enough for white text; the vertical one darkens the top
            strip so the breadcrumb and the fixed header stay legible even where
            the photograph is brightest.
          */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-violet-950/97 via-violet-950/88 to-violet-950/55"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-violet-950/85 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="shell relative pb-16 pt-[128px] sm:pb-24 sm:pt-[168px] lg:pb-28 lg:pt-[184px]">
          <Reveal y={8}>
            <Breadcrumbs
              tone="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: industry.name },
              ]}
            />
          </Reveal>

          <Reveal delay={80} y={10}>
            <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.22em] text-violet-300">
              {industry.audience}
            </p>
          </Reveal>

          <h1 className="display display-lg mt-5 max-w-[18ch] text-balance !text-white">
            {industry.title}
          </h1>

          <Reveal delay={220} className="mt-7 max-w-2xl">
            <p className="text-[17px] leading-[1.65] text-violet-100/90 sm:text-[19px]">
              {industry.standfirst}
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-9 flex flex-wrap gap-3">
            <Button href="/company/contact" variant="light">
              Talk to the team
            </Button>
            <Link
              href="/pricing"
              className="group inline-flex h-12 items-center gap-2 rounded-full px-5 text-[14.5px] font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/10"
            >
              See pricing <Arrow />
            </Link>
          </Reveal>
        </div>
      </header>

      {/* ---- The situation, in the reader's own terms ---- */}
      <Band ground="surface" size="lg">
        <Opening label="The situation" paragraphs={industry.situation} />
      </Band>

      {/* ---- Pressures ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">What makes this hard</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Not a feature gap — the specific operational pressures this kind of company runs into,
            and why each one resists a spreadsheet.
          </p>
        </Reveal>
        <NumberedNarrative items={industry.pressures} className="mt-14" />
      </Band>

      {/* ---- Priority order: the distinctive block of these pages ---- */}
      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">Where to start</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              You do not have to switch everything on at once, and for a company like yours there is
              a sensible order. This is it, with the reasoning attached.
            </p>
          </Reveal>

          <ol className="divide-y divide-line border-y border-line">
            {industry.priority.map((p, i) => (
              <Reveal as="li" key={p.module} delay={i * 70} y={12} className="py-7">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-accent-strong">
                    {p.order}
                  </span>
                  <Link
                    href={p.href}
                    className="group inline-flex items-center gap-2 font-display text-[19px] font-bold text-heading transition-colors hover:text-accent"
                  >
                    {p.module}
                    <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                      <Arrow />
                    </span>
                  </Link>
                </div>
                <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.7] text-muted">{p.why}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Band>

      {/* ---- Closing argument, set as a quiet full-width note ---- */}
      <Band ground="raised" size="md">
        <Reveal y={14} className="mx-auto max-w-3xl">
          <p className="border-l-2 border-line-accent pl-6 text-[17.5px] leading-[1.7] text-body sm:text-[19px] sm:leading-[1.68]">
            {industry.closing}
          </p>
        </Reveal>
      </Band>

      {/* ---- Questions ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">
            Questions from {industry.name.toLowerCase()} teams
          </h2>
        </Reveal>
        <Accordion items={industry.questions} className="mt-10" />
      </Band>

      <Onward
        title="Other kinds of company"
        links={others.map((o) => ({ label: o.name, href: o.href, note: o.audience }))}
      />
    </>
  );
}
