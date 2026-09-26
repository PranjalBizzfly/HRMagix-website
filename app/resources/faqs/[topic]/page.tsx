import type { Metadata } from "next";
import { SiteStats } from "@/components/sky9";
import Link from "next/link";
import { notFound } from "next/navigation";
import { faqTopics, questionsByTopic } from "@/lib/faqTopics";
import { Band, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Accordion from "@/components/Accordion";

/**
 * One FAQ topic. Every question here is answered elsewhere on the site too;
 * it is filed under this topic only (see lib/faqTopics.ts) and each carries a
 * link to the page it came from.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return faqTopics.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const t = faqTopics.find((x) => x.slug === topic);
  if (!t) return {};
  const n = questionsByTopic()[t.slug].length;
  return {
    title: `${t.name} FAQs — ${n} Questions Answered`,
    description: `${t.intro} ${n} questions about ${t.name.toLowerCase()} in HRMagix, answered.`,
    alternates: { canonical: `/resources/faqs/${t.slug}` },
  };
}

export default async function FaqTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = faqTopics.find((x) => x.slug === topic);
  if (!t) notFound();

  const byTopic = questionsByTopic();
  const questions = byTopic[t.slug];
  const others = faqTopics.filter((o) => o.slug !== t.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="page-hero border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Questions & Answers", href: "/resources/faqs" },
                { label: t.name },
              ]}
            />
          </Reveal>
          <span className="eyebrow mt-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {questions.length} questions
          </span>
          <h1 className="display display-xl mt-5 max-w-[16ch] text-balance">{t.name} questions</h1>
          <p className="mt-6 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">{t.intro}</p>
        </div>
      </header>

      <SiteStats />

      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] lg:gap-14">
          <div className="min-w-0">
            {questions.length ? (
              <Accordion
                items={questions.map((q) => ({
                  q: q.q,
                  a: `${q.a}`,
                }))}
              />
            ) : (
              <p className="text-muted">No questions are filed under this topic yet.</p>
            )}

            <h2 className="mt-12 text-[12px] font-bold uppercase tracking-[0.16em] text-label">
              Where each answer comes from
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[...new Map(questions.map((q) => [q.href, q.source])).entries()].map(([href, source]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-surface-sunken px-3.5 text-[13px] font-semibold text-body ring-1 ring-line transition-colors hover:text-accent hover:ring-line-accent"
                  >
                    {source} <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-[120px] lg:self-start">
            <div className="card p-5">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-label">Read in depth</h2>
              <ul className="mt-3 space-y-1">
                {t.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-2 text-[14px] font-semibold text-heading hover:bg-surface-sunken hover:text-accent"
                    >
                      {l.label} <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-label">Other topics</h2>
              <ul className="mt-3 space-y-1">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/resources/faqs/${o.slug}`}
                      className="flex min-h-[40px] items-center justify-between gap-3 rounded-lg px-2 text-[14px] text-body hover:bg-surface-sunken hover:text-accent"
                    >
                      {o.name}
                      <span className="text-[12px] tabular-nums text-subtle">{byTopic[o.slug].length}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Band>

      <Onward
        links={[
          { label: "Every question", href: "/resources/faqs", note: "All topics on one page." },
          { label: "Book a demo", href: "/company/contact", note: "Ask the question that is not answered here." },
          { label: "HR glossary", href: "/resources/glossary", note: "The terms these answers use, defined." },
        ]}
      />
    </>
  );
}
