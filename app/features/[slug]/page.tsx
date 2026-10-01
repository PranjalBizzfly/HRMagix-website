import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "@/lib/content";
import { featureLinks } from "@/lib/featurePages";
import { relatedPages, relatedQuestions } from "@/lib/related";
import { Band, Onward } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { featureName } from "@/lib/names";
import { StatsStrip, FaqSection } from "@/components/sky9";
import { featureFaqs } from "@/lib/pageFaqs/features";
import { Icon } from "@/components/icons";
import FeatureMap from "@/components/FeatureMap";
import Photo from "@/components/Photo";
import ContentSections from "@/components/ContentSections";
import { featureDetail } from "@/lib/pageContent";

/**
 * One module of the platform.
 *
 * The description and capability list are HRMagix's own (lib/content.ts,
 * modules). Where the module sits in the app comes from the app's sidebar
 * (lib/appFeatures.ts). Related pages and questions are computed from what the
 * rest of the site says (lib/related.ts).
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = modules.find((x) => x.slug === slug);
  if (!m) return {};
  return {
    title: `${featureName(m.name)}: HRMagix Feature`,
    description: m.desc,
    alternates: { canonical: `/features/${m.slug}` },
  };
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = modules.find((x) => x.slug === slug);
  if (!m) notFound();

  const link = featureLinks[m.slug];
  const pages = relatedPages(link.phrases, { limit: 6, exclude: [link.solution.href] });
  const questions = relatedQuestions(link.phrases, { limit: 6, inQuestionOnly: true });
  const siblings = modules.filter((x) => x.group === m.group && x.slug !== m.slug);

  return (
    <>
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot={`feature-${m.slug}`} cover rounded="rounded-none" hover={false} sizes="100vw" />
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
                { label: "Features", href: "/features" },
                { label: featureName(m.name) },
              ]}
            />
          </Reveal>
          <div className="mt-8 flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-glow">
              <Icon name={m.icon} className="h-6 w-6" />
            </span>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              {m.group}
            </span>
          </div>
          <h1 className="display display-xl mt-6 max-w-[16ch] text-balance">{m.name}</h1>
          <p className="mt-6 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            {m.desc}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/company/contact-hrmagix" size="lg">
              Book a demo
            </Button>
            <Button href={link.solution.href} variant="outline" size="lg">
              Read the full {link.solution.label.toLowerCase()} page
            </Button>
          </div>
        </div>
      </header>

      <StatsStrip
        items={[
          { value: `${m.features.length}`, label: "Core capabilities", icon: m.icon },
          { value: m.group, label: "Module group", icon: "grid" },
          { value: `${questions.length}`, label: "Related questions", icon: "chat" },
          { value: "12", label: "Modules on one record", icon: "layers" },
        ]}
      />

      {/* ---- Capabilities ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            What it does
          </span>
          <h2 className="display display-md mt-5">{m.name}, capability by capability</h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
          {m.features.map((f, i) => (
            <Reveal as="li" key={f} delay={i * 70} y={14} className="card card-hover p-6">
              <span className="font-display text-[13px] font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[16px] font-semibold leading-snug text-heading">{f}</p>
            </Reveal>
          ))}
        </ol>

        {m.statutory && (
          <Reveal y={12} className="mt-6 flex gap-4 rounded-2xl border-l-4 border-gold bg-gold-soft p-5 sm:p-6">
            <Icon name="scale" className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink" />
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-ink">
                Statutory link
              </h3>
              <p className="mt-1.5 text-[15.5px] leading-[1.65] text-body">{m.statutory}</p>
            </div>
          </Reveal>
        )}
      </Band>

      {/* ---- Where it lives in the app ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="mb-10 max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            In the HRMagix app
          </span>
          <h2 className="display display-md mt-5">Where {m.name.toLowerCase()} sits in the app</h2>
        </Reveal>
        <FeatureMap areas={[link.area]} />
      </Band>

      <ContentSections content={featureDetail[m.slug]} ground="canvas" />

      <FaqSection
        title={`${m.name}: frequently asked questions`}
        items={featureFaqs[m.slug] ?? []}
        ground="canvas"
      />

      {/* ---- Related ---- */}
      {(questions.length > 0 || pages.length > 0) && (
        <Band ground="surface" size="lg">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14">
            {questions.length > 0 && (
              <div>
                <h2 className="display display-md">Questions about {m.name.toLowerCase()}</h2>
                <p className="mt-3 text-[15px] text-muted">
                  Each is answered in full on the page linked.
                </p>
                <ul className="mt-6 grid gap-3">
                  {questions.map((q) => (
                    <li key={q.q}>
                      <Link
                        href={q.href}
                        className="card card-hover group flex items-center justify-between gap-5 px-5 py-4"
                      >
                        <span>
                          <span className="block font-display text-[15.5px] font-semibold leading-snug text-heading group-hover:text-accent">
                            {q.q}
                          </span>
                          <span className="mt-1 block text-[12.5px] text-subtle">
                            Answered on {q.source}
                          </span>
                        </span>
                        <span className="shrink-0 text-accent">
                          <Arrow />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {pages.length > 0 && (
              <aside className="card h-fit p-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-label">
                  Further reading
                </h2>
                <ul className="mt-4 space-y-1">
                  {pages.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="group flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-surface-sunken"
                      >
                        <span className="min-w-0">
                          <strong className="block truncate text-[14px] font-semibold text-heading group-hover:text-accent">
                            {p.title}
                          </strong>
                          <span className="block text-[12px] text-subtle">{p.kind}</span>
                        </span>
                        <Icon name="arrowRight" className="h-3.5 w-3.5 shrink-0 text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </Band>
      )}

      {/* ---- Siblings ---- */}
      {siblings.length > 0 && (
        <Band ground="sunken" size="md">
          <h2 className="display display-md">More in {m.group}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link href={`/features/${s.slug}`} className="card card-hover group flex h-full gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-accent">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[16px] font-bold text-heading group-hover:text-accent">
                      {featureName(s.name)}
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-snug text-muted">{s.desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Band>
      )}

      <Onward
        links={[
          { label: "All twelve features", href: "/features", note: "Every module on one page, by group." },
          { label: link.solution.label, href: link.solution.href, note: "The full page on this subject." },
          { label: "Pricing", href: "/pricing", note: "Which plan switches this module on." },
        ]}
      />
    </>
  );
}
