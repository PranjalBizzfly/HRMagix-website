import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { faqTopicName } from "@/lib/names";
import Link from "next/link";
import { faqs } from "@/lib/content";
import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import OnThisPage from "@/components/OnThisPage";
import Photo from "@/components/Photo";
import { faqTopics, questionsByTopic } from "@/lib/faqTopics";

export const metadata: Metadata = {
  title: "Questions & Answers",
  description:
    "Answers on Indian statutory compliance, biometric integration, geo-fenced mobile punch-in, old and new tax regimes, Excel data migration, hosting and support.",
  keywords: [

  ],
  alternates: { canonical: "/resources/questions-and-answers" },
};

/**
 * The question index.
 *
 * The general questions are answered here in full. The module- and
 * industry-specific ones are NOT repeated — they are indexed as links to the
 * page that answers each, because answering the same question twice on one
 * website is how sites end up feeling padded rather than deep.
 *
 * The result is that every answer on this site exists in exactly one place, and
 * this page is the map to all of them.
 */
export default function FaqsPage() {
  const byTopic = questionsByTopic();
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="resources-faqs-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
                { label: "Questions & Answers" },
              ]}
            />
          </Reveal>
          <h1 className="display display-lg mt-8 max-w-[17ch] text-balance">
            Answered once, <strong>in the place it belongs</strong>
          </h1>
          <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            The general questions are answered below. Everything module-specific or
            industry-specific is indexed further down and answered on the page it belongs to, no
            answer on this site appears twice.
          </p>
        </div>
      </header>

      <SiteStats />

      {/* ---- Browse by topic ---- */}
      <Block eyebrow="Topics" title="Browse by topic" ground="canvas">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {faqTopics.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/resources/questions-and-answers/${t.slug}`}
                className="card card-hover group flex h-full items-center justify-between gap-4 p-6"
              >
                <span>
                  <span className="block font-display text-[16.5px] font-bold text-heading group-hover:text-accent">
                    {faqTopicName(t.name)}
                  </span>
                  <span className="mt-1 block text-[13px] text-subtle">
                    {byTopic[t.slug].length} questions
                  </span>
                </span>
                <span className="text-accent">
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Block>

      {/* ---- General, answered in full ---- */}
      <FaqSection
        title="General"
        intro="Statutory compliance, hardware integration, data migration, hosting and support, the eight that come up in almost every first conversation."
        items={faqs.map((f) => ({ q: f.q, a: f.a }))}
        ground="sunken"
        more={null}
      />

      {/* ---- Index: by module ---- */}
      <Block
        eyebrow="Modules"
        title="By module"
        intro="Each of these is answered on the page for the module it concerns, where the surrounding context makes the answer more useful than it would be in a list."
        ground="canvas"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {solutions.map((s) => (
            <Reveal key={s.slug} y={12} className="card card-hover h-full p-6">
              <Link
                href={s.href}
                className="group inline-flex items-center gap-2 font-display text-[17px] font-bold text-heading transition-colors hover:text-accent"
              >
                {s.name}
                <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  <Arrow />
                </span>
              </Link>
              <ul className="mt-4 space-y-2.5">
                {s.questions.map((q) => (
                  <li key={q.q}>
                    <Link
                      href={s.href}
                      className="group flex gap-3 text-[15px] leading-[1.6] text-muted transition-colors hover:text-accent"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                      />
                      {q.q}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* ---- Index: by industry ---- */}
      <Block
        eyebrow="Industries"
        title="By kind of company"
        intro="The same question often has a different answer for a thirty-person business and a four-hundred-person one across three states."
        ground="sunken"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {industries.map((ind) => (
            <Reveal key={ind.slug} y={12} className="card card-hover h-full p-6">
              <Link
                href={ind.href}
                className="group inline-flex items-center gap-2 font-display text-[17px] font-bold text-heading transition-colors hover:text-accent"
              >
                {ind.name}
                <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  <Arrow />
                </span>
              </Link>
              <ul className="mt-4 space-y-2.5">
                {ind.questions.map((q) => (
                  <li key={q.q}>
                    <Link
                      href={ind.href}
                      className="flex gap-3 text-[14.5px] leading-[1.6] text-muted transition-colors hover:text-accent"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                      />
                      {q.q}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Block>

      <Block
        eyebrow="Ask us"
        title="Still unanswered?"
        intro="Questions about how a specific statutory head behaves in your situation are better asked than searched for. The specialists in Pune answer these daily."
        ground="canvas"
      >
        <div className="flex justify-center">
          <Button href="/company/contact-hrmagix">Ask a question</Button>
        </div>
      </Block>

      <Onward
        links={[
          {
            label: "White Papers",
            href: "/resources/white-papers",
            note: "The long-form treatment of the subjects these questions circle.",
          },
          {
            label: "Calculator",
            href: "/resources/calculator",
            note: "Check a PF, ESI or gratuity figure against your own numbers.",
          },
          {
            label: "How Setup Works",
            href: "/how-setup-works",
            note: "What the first two to three days of setup actually involve.",
          },
        ]}
      />
    </>
  );
}
