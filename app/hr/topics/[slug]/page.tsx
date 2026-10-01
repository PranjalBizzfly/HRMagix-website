import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { topics, topicBySlug } from "@/lib/topics";
import { relatedPages } from "@/lib/related";
import { Band, Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { topicName, titleWithName } from "@/lib/names";
import { StatsStrip } from "@/components/sky9";
import Accordion from "@/components/Accordion";
import { Icon } from "@/components/icons";

/**
 * One HR topic guide. Content from lib/topics — see the writing rules there.
 * Related pages are computed from what the rest of the site says.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = topicBySlug(slug);
  if (!t) return {};
  const title = titleWithName(topicName(t.name), t.name, t.seo.title);
  return {
    title,
    description: t.seo.description,
    ...(t.seo.keywords ? { keywords: t.seo.keywords } : {}),
    alternates: { canonical: `/hr/topics/${t.slug}` },
    openGraph: { type: "article", title, description: t.seo.description },
  };
}

const sections = [
  ["what", "What it is"],
  ["why", "Why it matters"],
  ["challenges", "Common challenges"],
  ["process", "The process"],
  ["practices", "Best practices"],
  ["mistakes", "Mistakes to avoid"],
  ["software", "How software helps"],
  ["faqs", "Questions"],
] as const;

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = topicBySlug(slug);
  if (!t) notFound();

  const related = relatedPages(t.phrases, { limit: 6 });
  const siblings = topics.filter((o) => o.category === t.category && o.slug !== t.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t.title,
      description: t.seo.description,
      about: t.name,
      publisher: { "@type": "Organization", name: "HRMagix", url: "https://hrmagix.com" },
      mainEntityOfPage: `https://hrmagix.com/hr/topics/${t.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="page-hero border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "HR Topics", href: "/hr/topics" },
                { label: topicName(t.name) },
              ]}
            />
          </Reveal>
          <span className="eyebrow mt-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {t.category} · {t.name}
          </span>
          <h1 className="display display-lg mt-5 max-w-[22ch] text-balance">{t.title}</h1>
          <p className="mt-6 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">{t.standfirst}</p>
        </div>
      </header>

      <StatsStrip
        items={[
          { value: `${t.process.length}`, label: "Steps in the process", icon: "compass" },
          { value: `${t.practices.length}`, label: "Best practices", icon: "check" },
          { value: `${t.mistakes.length}`, label: "Mistakes to avoid", icon: "shield" },
          { value: `${t.faqs.length}`, label: "Questions answered", icon: "chat" },
        ]}
      />

      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-14">
          {/* Contents */}
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-[120px]">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-label">On this page</p>
              <ol className="mt-4 space-y-1 border-l border-line">
                {sections.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[13.5px] text-muted transition-colors hover:border-brand hover:text-accent"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="min-w-0 max-w-3xl space-y-14">
            <section id="what" className="scroll-mt-[120px]">
              <h2 className="display display-md">What {t.name.toLowerCase()} is</h2>
              {t.definition.map((p, i) => (
                <p key={i} className="mt-5 text-[17px] leading-[1.75] text-body">
                  {p}
                </p>
              ))}
            </section>

            <section id="why" className="scroll-mt-[120px]">
              <h2 className="display display-md">Why it matters</h2>
              {t.whyItMatters.map((p, i) => (
                <p key={i} className="mt-5 text-[17px] leading-[1.75] text-body">
                  {p}
                </p>
              ))}
            </section>

            <section id="challenges" className="scroll-mt-[120px]">
              <h2 className="display display-md">Common challenges</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {t.challenges.map((c) => (
                  <div key={c.title} className="card p-5">
                    <h3 className="font-display text-[16.5px] font-bold text-heading">{c.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-muted">{c.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="process" className="scroll-mt-[120px]">
              <h2 className="display display-md">The process, step by step</h2>
              <ol className="relative mt-6 space-y-6 border-l-2 border-line pl-8">
                {t.process.map((p, i) => (
                  <li key={p.step} className="relative">
                    <span className="absolute -left-[45px] grid h-8 w-8 place-items-center rounded-full bg-brand font-display text-[13px] font-bold text-white ring-4 ring-surface">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-[17px] font-bold text-heading">{p.step}</h3>
                    <p className="mt-1.5 text-[15.5px] leading-[1.7] text-muted">{p.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="grid gap-4 md:grid-cols-2">
              <section id="practices" className="card scroll-mt-[120px] p-6">
                <h2 className="font-display text-[19px] font-bold text-heading">Best practices</h2>
                <ul className="mt-4 space-y-3">
                  {t.practices.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[14.5px] leading-[1.6] text-body">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-ok" />
                      {p}
                    </li>
                  ))}
                </ul>
              </section>
              <section id="mistakes" className="card scroll-mt-[120px] p-6">
                <h2 className="font-display text-[19px] font-bold text-heading">Mistakes to avoid</h2>
                <ul className="mt-4 space-y-3">
                  {t.mistakes.map((m) => (
                    <li key={m} className="flex gap-2.5 text-[14.5px] leading-[1.6] text-body">
                      <Icon name="cross" className="mt-1 h-4 w-4 shrink-0 text-danger" />
                      {m}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section id="software" className="scroll-mt-[120px]">
              <h2 className="display display-md">How software helps</h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-body">{t.software}</p>

              <div className="mt-8 rounded-[20px] bg-panel p-6 text-white sm:p-8">
                <h3 className="font-display text-[18px] font-bold text-white">
                  {t.name} in HRMagix
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {t.inHRMagix.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group flex h-full flex-col rounded-xl bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10 transition-colors hover:ring-violet-300/60"
                      >
                        <span className="flex items-center gap-2 font-semibold text-white">
                          {l.label}
                          <span className="text-gold transition-transform group-hover:translate-x-0.5">
                            <Arrow />
                          </span>
                        </span>
                        <span className="mt-1 text-[13.5px] leading-snug text-violet-200">{l.note}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/company/contact-hrmagix" variant="light">
                    Book a demo
                  </Button>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-[120px]">
              <h2 className="display display-md">Questions about {t.name.toLowerCase()}</h2>
              <div className="mt-6">
                <Accordion items={t.faqs} />
              </div>
            </section>
          </article>
        </div>
      </Band>

      {(related.length > 0 || siblings.length > 0) && (
        <Band ground="sunken" size="md">
          <div className="grid gap-10 lg:grid-cols-2">
            {siblings.length > 0 && (
              <div>
                <h2 className="display display-md">More on {t.category.toLowerCase()}</h2>
                <ul className="mt-6 grid gap-3">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/hr/topics/${s.slug}`} className="card card-hover group flex items-center justify-between gap-4 p-4">
                        <span className="font-display text-[15.5px] font-bold text-heading group-hover:text-accent">
                          {topicName(s.name)}
                        </span>
                        <span className="text-accent">
                          <Arrow />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {related.length > 0 && (
              <div>
                <h2 className="display display-md">Across the site</h2>
                <ul className="mt-6 grid gap-3">
                  {related.map((p) => (
                    <li key={p.href}>
                      <Link href={p.href} className="card card-hover group flex items-center justify-between gap-4 p-4">
                        <span>
                          <strong className="block font-display text-[15.5px] font-bold text-heading group-hover:text-accent">
                            {p.title}
                          </strong>
                          <span className="text-[12px] text-subtle">{p.kind}</span>
                        </span>
                        <span className="text-accent">
                          <Arrow />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Band>
      )}

      <Onward
        links={[
          { label: "HR Topics", href: "/hr/topics", note: `${topics.length} guides across five areas of HR.` },
          { label: "HR & Payroll Glossary", href: "/resources/hr-and-payroll-glossary", note: "The terms these guides use, defined." },
          { label: "Calculator", href: "/resources/calculator", note: "Statutory formulas on your own figures." },
        ]}
      />
    </>
  );
}
