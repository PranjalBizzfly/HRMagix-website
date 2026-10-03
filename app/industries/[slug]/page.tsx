import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries, industryBySlug } from "@/lib/industries";
import { NumberedNarrative, Passages } from "@/components/editorial";
import { StatsStrip, Block, FaqSection, EnquirySection, CtaBand, RelatedCards } from "@/components/sky9";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import { bySlot } from "@/lib/media";

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
  // The tab title opens with the page's name, exactly as the header and footer link it.
  const title = i.seo.title.startsWith(i.name) ? i.seo.title : `${i.name}: ${i.seo.title}`;
  return {
    title,
    description: i.seo.description,
    keywords: i.seo.keywords,
    alternates: { canonical: i.href },
    openGraph: {
      title: `${title} · HRMagix`,
      description: i.seo.description,
      url: i.href,
      siteName: "HRMagix",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }],
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
  // Original industries carry their own photo; expansion industries use their hero slot.
  const heroSlot = industry.image ?? (bySlot(`industry-${industry.slug}`) ? `industry-${industry.slug}` : undefined);

  const others = industries.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ---- Immersive opener ---- */}
      <header className="page-hero relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {heroSlot && <Photo slot={heroSlot} cover rounded="rounded-none" hover={false} sizes="100vw" />}
          {/*
            Two overlays rather than one. The horizontal ramp keeps the headline
            column dark enough for white text; the vertical one darkens the top
            strip so the breadcrumb and the fixed header stay legible even where
            the photograph is brightest.
          */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-panel/97 via-panel/88 to-panel/55"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-panel/85 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="shell relative pb-16 pt-[112px] sm:pb-20 sm:pt-[140px] lg:pb-20 lg:pt-[156px]">
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
            <Button href="/company/contact-hrmagix" variant="light">
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

      <StatsStrip
        items={[
          { value: `${industry.pressures.length}`, label: "Pressures named", icon: "target" },
          { value: `${industry.priority.length}`, label: "Steps in the start order", icon: "compass" },
          { value: `${industry.questions.length}`, label: "Questions answered", icon: "chat" },
          { value: "14-day", label: "Free trial, no card", icon: "calendar" },
        ]}
      />

      {/* ---- The situation ---- */}
      <Block eyebrow="The situation" title={industry.seo.focus ?? `HR for ${industry.name.toLowerCase()}`}>
        <div className="mx-auto grid max-w-4xl gap-5">
          {industry.situation.map((p, i) => (
            <Reveal key={i} delay={i * 60} y={12}>
              <p className={`text-center leading-[1.75] ${i === 0 ? "text-[18px] text-heading sm:text-[19.5px]" : "text-[16.5px] text-muted"}`}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* ---- What usually starts the search ---- */}
      {industry.signals && industry.signals.length > 0 && (
        <Block
          eyebrow="When it starts"
          title="What usually makes a company like this start looking"
          ground="sunken"
        >
          <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:gap-5">
            {industry.signals.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 60} y={12} className="card card-hover flex gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 font-display text-[15px] font-bold text-accent">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-[1.65] text-body">{s}</p>
              </Reveal>
            ))}
          </ul>
        </Block>
      )}

      {/* ---- Pressures ---- */}
      <Block
        eyebrow="Why it is hard"
        title="What makes this hard"
        intro="Not a feature gap, the specific operational pressures this kind of company runs into, and why each one resists a spreadsheet."
        ground="sunken"
      >
        <NumberedNarrative items={industry.pressures} />
      </Block>

      {/* ---- Where to start ---- */}
      <Block
        eyebrow="Where to start"
        title="The order to switch things on"
        intro="You do not have to switch everything on at once, and for a company like yours there is a sensible order. This is it, with the reasoning attached."
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {industry.priority.map((p, i) => (
            <Reveal as="li" key={p.module} delay={i * 80} y={14}>
              <Link href={p.href} className="card card-hover group flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand font-display text-[17px] font-bold text-white shadow-glow">
                    {i + 1}
                  </span>
                  <span className="rounded-full bg-surface-raised px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-strong">
                    {p.order}
                  </span>
                </div>
                <span className="mt-5 font-display text-[18px] font-bold text-heading group-hover:text-accent">
                  {p.module}
                </span>
                <span className="mt-2 flex-1 text-[14.5px] leading-[1.65] text-muted">{p.why}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent">
                  Explore <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Block>

      {/* ---- In practice ---- */}
      {industry.deepDive && (
        <Block
          eyebrow="In practice"
          title={`What this means for ${industry.name.toLowerCase()}`}
          ground="sunken"
        >
          <Passages items={industry.deepDive} />
        </Block>
      )}

      {/* ---- Closing ---- */}
      <section className="bg-canvas py-10 sm:py-12">
        <div className="shell">
          <Reveal y={14} className="relative mx-auto max-w-4xl overflow-hidden rounded-[24px] bg-panel px-6 py-10 sm:px-12">
            <span className="border-beam" aria-hidden="true" />
            <p className="text-center text-[17px] leading-[1.7] text-violet-100 sm:text-[19px]">{industry.closing}</p>
          </Reveal>
        </div>
      </section>

      <FaqSection
        title={`Questions from ${industry.name.toLowerCase()} teams`}
        items={industry.questions}
        ground="sunken"
      />

      <EnquirySection topic={`HRMagix for ${industry.name}`} />

      <CtaBand title={<>Run HRMagix the way <strong>{industry.name.toLowerCase()}</strong> teams work</>} />

      <RelatedCards
        title="Other kinds of company"
        items={others.map((o) => ({ label: o.name, href: o.href, note: o.audience, icon: "users" as const }))}
      />
    </>
  );
}
