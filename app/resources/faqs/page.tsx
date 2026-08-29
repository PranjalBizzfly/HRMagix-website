import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/content";
import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { Band, Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Accordion from "@/components/Accordion";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Questions & Answers",
  description:
    "Answers on Indian statutory compliance, biometric integration, geo-fenced mobile punch-in, the old and new tax regimes, data migration from Excel, hosting and support.",
  keywords: ["HRMS software", "payroll compliance", "biometric attendance system software"],
  alternates: { canonical: "/resources/faqs" },
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
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
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
            industry-specific is indexed further down and answered on the page it belongs to — no
            answer on this site appears twice.
          </p>
        </div>
      </header>

      {/* ---- General, answered in full ---- */}
      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">General</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              Statutory compliance, hardware integration, data migration, hosting and support — the
              eight that come up in almost every first conversation.
            </p>
          </Reveal>
          <Accordion items={faqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </Band>

      {/* ---- Index: by module ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">By module</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Each of these is answered on the page for the module it concerns, where the surrounding
            context makes the answer more useful than it would be in a list.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {solutions.map((s) => (
            <Reveal key={s.slug} y={12} className="grid gap-4 border-t border-line pt-7 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-14">
              <div>
                <Link
                  href={s.href}
                  className="group inline-flex items-center gap-2 font-display text-[17px] font-bold text-heading transition-colors hover:text-accent"
                >
                  {s.name}
                  <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </Link>
              </div>
              <ul className="space-y-2.5">
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
      </Band>

      {/* ---- Index: by industry ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">By kind of company</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            The same question often has a different answer for a thirty-person business and a
            four-hundred-person one across three states.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-14 gap-y-9 lg:grid-cols-2">
          {industries.map((ind) => (
            <Reveal key={ind.slug} y={12} className="border-t border-line pt-6">
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
      </Band>

      <Band ground="raised" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[18ch]">Still unanswered?</h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              Questions about how a specific statutory head behaves in your situation are better
              asked than searched for. The specialists in Pune answer these daily.
            </p>
          </div>
          <Button href="/company/contact">Ask a question</Button>
        </div>
      </Band>

      <Onward
        links={[
          {
            label: "White papers",
            href: "/resources/white-papers",
            note: "The long-form treatment of the subjects these questions circle.",
          },
          {
            label: "Calculators",
            href: "/resources/calculator",
            note: "Check a PF, ESI or gratuity figure against your own numbers.",
          },
          {
            label: "How it works",
            href: "/how-it-works",
            note: "What the first two to three days of setup actually involve.",
          },
        ]}
      />
    </>
  );
}
