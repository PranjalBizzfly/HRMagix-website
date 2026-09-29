import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions, bySlug } from "@/lib/solutions";
import { Ledger, UseCases, CapabilityIndex } from "@/components/editorial";
import { Reveal } from "@/components/motion";
import {
  PageHero,
  GlanceCard,
  StatsStrip,
  Block,
  ProcessTimeline,
  FaqSection,
  EnquirySection,
  CtaBand,
  RelatedCards,
} from "@/components/sky9";
import Photo from "@/components/Photo";
import FeatureMap from "@/components/FeatureMap";

/** Which areas of the app (lib/appFeatures.ts) each solution page covers. */
const appAreasFor: Record<string, string[]> = {
  hrms: ["overview", "people", "time", "performance", "engagement", "payroll", "system"],
  "employee-management": ["people"],
  onboarding: ["people"],
  ess: ["overview", "system"],
  payroll: ["payroll", "time"],
  attendance: ["time"],
  "leave-management": ["time"],
  "hr-analytics": ["overview"],
};

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = bySlug(slug);
  if (!s) return {};
  // The tab title opens with the page's name, exactly as the header and footer link it.
  const title = s.seo.title.startsWith(s.name) ? s.seo.title : `${s.name}: ${s.seo.title}`;
  return {
    title,
    description: s.seo.description,
    keywords: s.seo.keywords,
    alternates: { canonical: s.href },
    openGraph: {
      title: `${title} · HRMagix`,
      description: s.seo.description,
      url: s.href,
      siteName: "HRMagix",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }],
    },
  };
}

/**
 * One solution page, laid out in the site's standard page order:
 *
 *   hero → stats strip → overview → capabilities → highlight → the long-form
 *   sections → how it runs → reference → who uses it → in the app → FAQs →
 *   enquiry → CTA → related.
 *
 * Every word comes from lib/solutions.ts; the per-page highlight lines below
 * are the ones these pages have always carried.
 */
const highlights: Record<string, string> = {
  hrms: "One record, edited in one place, read by everything else.",
  payroll:
    "Payroll teams do not spend four days calculating. They spend four days establishing what happened.",
  attendance: "Attendance systems are judged on their exceptions, not their happy path.",
  ess: "Most of what an HR team is asked in a week requires access, not judgement.",
};

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = bySlug(slug);
  if (!s) notFound();

  const capabilityCount = s.capabilities.reduce((n, g) => n + g.items.length, 0);
  const areas = appAreasFor[s.slug] ?? [];

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: s.name },
        ]}
        badge={s.kicker}
        title={s.title}
        typed
        standfirst={s.standfirst}
        chips={s.capabilities.slice(0, 3).map((g) => ({ icon: s.icon, label: g.group }))}
        primary={{ label: "Book a demo", href: "/company/contact-hrmagix" }}
        secondary={{ label: "See what it does", href: "#capabilities" }}
        bgSlot={s.image}
        aside={
          <GlanceCard
            title={`${s.name} at a glance`}
            items={[
              { label: "Capabilities", value: `${capabilityCount}` },
              { label: "Capability groups", value: `${s.capabilities.length}` },
              ...(s.mechanics ? [{ label: "Steps in the process", value: `${s.mechanics.steps.length}` }] : []),
              { label: "Questions answered", value: `${s.questions.length}` },
              { label: "Free trial", value: "14 days" },
            ]}
          />
        }
      />

      <StatsStrip
        items={[
          { value: `${capabilityCount}`, label: "Capabilities on this page", icon: s.icon },
          { value: `${s.passages.length}`, label: "Topics covered in depth", icon: "folder" },
          { value: `${s.questions.length}`, label: "Questions answered", icon: "chat" },
          { value: "12", label: "Modules on one record", icon: "layers" },
        ]}
      />

      {/* ---- Overview ---- */}
      <Block eyebrow="Overview" title={s.seo.focus ?? s.name}>
        <div className="mx-auto grid max-w-4xl gap-5">
          {s.opening.map((p, i) => (
            <Reveal key={i} delay={i * 60} y={12}>
              <p className={`text-center leading-[1.75] ${i === 0 ? "text-[18px] text-heading sm:text-[19.5px]" : "text-[16.5px] text-muted"}`}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* ---- Who reaches for it ---- */}
      {s.buyer && (
        <Block eyebrow="Who it is for" title={s.buyer.role} intro={s.buyer.reality} ground="sunken">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-label">
              The moments that usually start the search
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              {s.buyer.signals.map((sig, i) => (
                <Reveal as="li" key={sig} delay={i * 60} y={12} className="card card-hover flex gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 font-display text-[15px] font-bold text-accent">
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-[1.65] text-body">{sig}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Block>
      )}

      {/* ---- Capabilities ---- */}
      <Block id="capabilities" eyebrow="Capabilities" title={s.capabilitiesTitle} intro={s.capabilitiesIntro} ground="sunken">
        <CapabilityIndex groups={s.capabilities} />
      </Block>

      {highlights[s.slug] && (
        <section className="bg-canvas py-10 sm:py-12">
          <div className="shell">
            <Reveal y={14} className="relative mx-auto max-w-4xl overflow-hidden rounded-[24px] bg-panel px-6 py-10 text-center sm:px-12">
              <span className="border-beam" aria-hidden="true" />
              <p className="font-display text-[22px] font-semibold leading-snug text-white sm:text-[28px]">
                &ldquo;{highlights[s.slug]}&rdquo;
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---- In depth ---- */}
      <Block eyebrow="In depth" title={`How ${s.name.toLowerCase()} works in practice`}>
        {/* Summary strip: standfirst on the left, the three system facts on the right. */}
        <Reveal
          y={16}
          className="card grid gap-6 rounded-[24px] p-6 sm:p-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center lg:gap-10"
        >
          <div>
            <span className="eyebrow mb-3 inline-block text-accent">Architecture &amp; System</span>
            <h3 className="font-display text-[20px] font-bold text-heading">{s.name} at scale</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.standfirst}</p>
          </div>
          <dl className="grid grid-cols-3 gap-3">
            {[
              ["100% Unified", "Single system of record"],
              ["Continuous", "Audit trail"],
              ["Native", "Statutory compliance"],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col rounded-2xl bg-surface-sunken p-4 text-center ring-1 ring-inset ring-line">
                <dt className="order-2 mt-1 text-[11.5px] leading-snug text-subtle">{l}</dt>
                <dd className="order-1 font-display text-[15px] font-bold text-accent sm:text-[17px]">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Topics: numbered cards in an even two-column grid. */}
        <div className="mt-5 grid gap-5 md:grid-cols-2 md:items-start">
          {s.passages.map((p, i) => (
            <Reveal
              key={p.heading}
              y={18}
              delay={40}
              as="section"
              className="card card-hover flex flex-col rounded-[24px] p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand font-display text-[14px] font-bold text-white shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="pt-1.5 font-display text-[19px] font-bold leading-snug tracking-[-0.02em] text-heading">
                  {p.heading}
                </h3>
              </div>
              <div className="mt-5 border-t border-line pt-5">
                {p.body.map((para, j) => (
                  <p key={j} className={`text-[15px] leading-[1.7] text-muted ${j ? "mt-4" : ""}`}>
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* ---- Process ---- */}
      {s.mechanics && (
        <Block eyebrow="The process" title={s.mechanics.title} intro={s.mechanics.intro} ground="sunken">
          <ProcessTimeline steps={s.mechanics.steps.map((m) => ({ title: m.title, body: m.body }))} />
        </Block>
      )}

      {/* ---- Reference ---- */}
      {s.ledger && (
        <Block eyebrow="Reference" title={s.ledger.title} intro={s.ledger.intro}>
          <Ledger title="" rows={s.ledger.rows} className="[&>div:first-child]:hidden [&>dl]:mt-0" />
        </Block>
      )}

      {/* ---- Who uses it ---- */}
      {s.useCases && (
        <Block eyebrow="Who uses it" title={s.useCases.title} intro={s.useCases.intro} ground="sunken">
          <UseCases title="" items={s.useCases.items} className="[&>div:first-child]:hidden [&>div:last-child]:mt-0" />
        </Block>
      )}

      {/* ---- In the app ---- */}
      {areas.length > 0 && (
        <Block eyebrow="In the HRMagix app" title={`Where ${s.name.toLowerCase()} lives in the app`}>
          <FeatureMap areas={areas} dashboard={s.slug === "employee-self-service" || s.slug === "hrms"} />
        </Block>
      )}

      <FaqSection
        title={`Questions about ${s.name.toLowerCase()}`}
        intro={s.questionsIntro}
        items={s.questions.map((q) => ({ q: q.q, a: q.a }))}
        ground="sunken"
      />

      <EnquirySection topic={s.name} />

      <CtaBand
        title={<>See {s.name.toLowerCase()} run on <strong>your own data</strong></>}
        body="A walkthrough against your own policies, with a dry-run before the first live cutoff."
      />

      <RelatedCards
        title="Related solutions and resources"
        items={s.onward.map((o) => ({ label: o.label, href: o.href, note: o.note }))}
      />
    </>
  );
}
