import type { Metadata } from "next";
import { SiteStats } from "@/components/sky9";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossary, type Term } from "@/lib/glossary";
import { relatedPages, relatedQuestions, slugify } from "@/lib/related";
import { Band, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Icon } from "@/components/icons";

/**
 * One glossary term.
 *
 * The definition is the glossary's own. Everything else on the page is
 * computed from what the rest of the site says: terms whose definitions use
 * this one, pages that discuss it (ranked by mentions), and questions that
 * mention it — linked to where each is answered, not repeated here.
 */

export const dynamicParams = false;

const termSlug = (t: Term) => slugify(t.term);
const bySlug = (slug: string) => glossary.find((t) => termSlug(t) === slug);

/** Phrases that count as a mention of the term. */
const phrasesFor = (t: Term) => [t.term, ...(t.expands ? [t.expands] : [])];

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: termSlug(t) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const t = bySlug((await params).slug);
  if (!t) return {};
  const name = t.expands ? `${t.term} (${t.expands})` : t.term;
  return {
    title: `${name} — HR & Payroll Glossary`,
    description: t.definition.length > 158 ? `${t.definition.slice(0, 155).trimEnd()}…` : t.definition,
    alternates: { canonical: `/resources/glossary/${termSlug(t)}` },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const t = bySlug((await params).slug);
  if (!t) notFound();

  const phrases = phrasesFor(t);
  const usedBy = glossary.filter(
    (o) =>
      o.term !== t.term &&
      phrases.some((p) =>
        new RegExp(`(^|[^a-z0-9])${p.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`).test(
          `${o.definition} ${o.confusedWith ?? ""}`.toLowerCase(),
        ),
      ),
  );
  const pages = relatedPages(phrases, { limit: 6 });
  const questions = relatedQuestions(phrases, { limit: 5 });

  const index = glossary.findIndex((o) => o.term === t.term);
  const prev = glossary[index - 1];
  const next = glossary[index + 1];

  return (
    <>
      <header className="page-hero border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "HR Glossary", href: "/resources/glossary" },
                { label: t.term },
              ]}
            />
          </Reveal>
          <span className="eyebrow mt-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            HR &amp; payroll glossary
          </span>
          <h1 className="display display-xl mt-5 text-balance">{t.term}</h1>
          {t.expands && (
            <p className="mt-3 font-display text-[18px] font-semibold text-accent sm:text-[20px]">
              {t.expands}
            </p>
          )}
        </div>
      </header>

      <SiteStats />

      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-14">
          <div className="min-w-0">
            <Reveal y={12}>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-label">
                Definition
              </h2>
              <p className="mt-4 text-[19px] leading-[1.7] text-heading sm:text-[21px]">
                {t.definition}
              </p>
            </Reveal>

            {t.confusedWith && (
              <Reveal y={12} className="mt-8 rounded-2xl border-l-4 border-gold bg-gold-soft p-5 sm:p-6">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-ink">
                  Often confused
                </h2>
                <p className="mt-2 text-[16px] leading-[1.7] text-body">{t.confusedWith}</p>
              </Reveal>
            )}

            {t.see && (
              <Reveal y={12} className="mt-8">
                <Link
                  href={t.see.href}
                  className="card card-hover group flex items-center justify-between gap-4 p-5"
                >
                  <span>
                    <span className="block text-[12px] font-bold uppercase tracking-[0.14em] text-label">
                      Treated in depth
                    </span>
                    <span className="mt-1 block font-display text-[17px] font-bold text-heading">
                      {t.see.label}
                    </span>
                  </span>
                  <span className="text-accent">
                    <Arrow />
                  </span>
                </Link>
              </Reveal>
            )}

            {questions.length > 0 && (
              <Reveal y={12} className="mt-12">
                <h2 className="display display-md">Questions that involve {t.term}</h2>
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
              </Reveal>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-[120px] lg:self-start">
            {pages.length > 0 && (
              <div className="card p-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-label">
                  Where the site discusses it
                </h2>
                <ul className="mt-4 space-y-1">
                  {pages.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="group flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-surface-sunken"
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-[14px] font-semibold text-heading group-hover:text-accent">
                            {p.title}
                          </span>
                          <span className="block text-[12px] text-subtle">{p.kind}</span>
                        </span>
                        <Icon name="arrowRight" className="h-3.5 w-3.5 shrink-0 text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {usedBy.length > 0 && (
              <div className="card p-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-label">
                  Terms defined using it
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {usedBy.map((o) => (
                    <li key={o.term}>
                      <Link
                        href={`/resources/glossary/${termSlug(o)}`}
                        className="inline-flex min-h-[36px] items-center rounded-full bg-surface-sunken px-3.5 text-[13px] font-semibold text-body ring-1 ring-line transition-colors hover:text-accent hover:ring-line-accent"
                      >
                        {o.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <nav
          aria-label="Neighbouring terms"
          className="mt-10 grid gap-3 border-t border-line pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link href={`/resources/glossary/${termSlug(prev)}`} className="card card-hover p-5">
              <span className="block text-[12px] text-subtle">Previous term</span>
              <span className="mt-1 block font-display text-[16px] font-bold text-heading">
                ← {prev.term}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/resources/glossary/${termSlug(next)}`} className="card card-hover p-5 sm:text-right">
              <span className="block text-[12px] text-subtle">Next term</span>
              <span className="mt-1 block font-display text-[16px] font-bold text-heading">
                {next.term} →
              </span>
            </Link>
          )}
        </nav>
      </Band>

      <Onward
        links={[
          {
            label: "The full glossary",
            href: "/resources/glossary",
            note: `All ${glossary.length} terms, A to Z, searchable on one page.`,
          },
          {
            label: "Calculators",
            href: "/resources/calculator",
            note: "Run the statutory formulas on your own figures.",
          },
          {
            label: "HR guides",
            href: "/resources/guides",
            note: "Where these terms are worked through end to end.",
          },
        ]}
      />
    </>
  );
}
