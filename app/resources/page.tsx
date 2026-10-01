import type { Metadata } from "next";
import { SiteStats, CtaBand, Block, FaqSection } from "@/components/sky9";
import { resourcesFaqs } from "@/lib/pageFaqs/resources";
import Link from "next/link";
import { titleCase } from "@/lib/names";
import { whitePapers } from "@/lib/papers";
import { sorted as articles } from "@/lib/blog";
import { resourcesNav } from "@/lib/nav";
import { Opening } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { Icon, type IconName } from "@/components/icons";
import Breadcrumbs from "@/components/Breadcrumbs";
import OnThisPage from "@/components/OnThisPage";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Resources: Papers, Calculators & Answers",
  description:
    "Long-form briefings on Indian payroll and people operations, salary and statutory calculators, a media room, and every question asked before a first demo.",
  alternates: { canonical: "/resources" },
};

const moments: { icon: IconName; title: string; paras: string[] }[] = [
  {
    icon: "equals",
    title: "Calculators, when you need a number today",
    paras: [
      "Salary breakdown, PF, ESI, gratuity, payroll cost and plan cost, each on its own page with its inputs, its arithmetic shown, and an explanation of how the figure is arrived at.",
      "They run entirely in your browser on figures you type in. Nothing is submitted, and no email address is asked for, because a calculator that collects a lead before it shows a number is not really a calculator.",
    ],
  },
  {
    icon: "chat",
    title: "Insights, when a specific statutory head is behaving oddly",
    paras: [
      "Short pieces on the things that actually go wrong in an Indian payroll month: why a shift crossing midnight breaks an attendance report, how the sandwich rule interacts with a leave policy, what happens when an employee crosses the ESI wage threshold mid-year, how to read a payslip line by line.",
      "Each one is about a mechanism rather than a product. They are useful whether or not you ever use HRMagix, which is the test we apply before publishing one.",
    ],
  },
  {
    icon: "folder",
    title: "White papers, when you are making a decision rather than fixing a problem",
    paras: [
      "Longer arguments about how HR and payroll systems should be structured, the chain of custody from a punch to a payslip, what self-service actually removes from an HR team's week, why a policy vacuum is more expensive than a bad policy.",
      "These are position papers rather than research. They contain no survey data, no benchmarks and no customer outcomes, because none have been gathered. What they contain is reasoning you can disagree with.",
    ],
  },
  {
    icon: "shield",
    title: "The policy library, when you need the document itself",
    paras: [
      "Twenty-five workplace policy documents as issued, each available to view or download as a PDF, alongside a page explaining what the policy is for and what the platform records against it.",
      "Those explanatory pages deliberately state no rules. A notice period or a leave quota written there would be an invented figure attributed to a real employer's document, so the questions are set out instead of the answers.",
    ],
  },
];

/**
 * The resource centre.
 *
 * Deliberately plain. The point of this page is to get out of the way in one
 * screen, so it is a table of contents rather than a designed experience —
 * which also makes it the one page on the site with no photograph at all.
 */
export default function ResourcesHub() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="resources-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Editorial glowing ambient wash */}
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[460px] w-[680px] rounded-full bg-glow/18 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-20 h-[340px] w-[500px] rounded-full bg-violet-400/8 blur-[120px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          </Reveal>
          <Reveal y={10} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Ungated Knowledge & Calculators
            </span>
          </Reveal>
          <h1 className="display display-xl mt-5 max-w-[16ch] text-balance">
            Everything useful, <strong>with nothing in front of it</strong>
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-body sm:text-[19.5px]">
            No email gates, no download forms and no lead-capture wall. If a paper here is worth
            reading, it is worth reading without giving us your address first.
          </p>
        </div>
      </header>

      <SiteStats />

      <Block eyebrow="Library" title="Browse the resource centre" ground="canvas">
        <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {resourcesNav.flatMap((c) => c.links).map((link, i) => (
            <Reveal as="li" key={link.href} delay={i * 60} y={12}>
              <Link href={link.href} className="card card-hover group flex h-full flex-col gap-3 p-6">
                <span className="flex items-center gap-2 font-display text-[20px] font-bold text-heading transition-colors group-hover:text-accent">
                  {link.label}
                  <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </span>
                <span className="text-[15px] leading-[1.65] text-muted">{link.note}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Block>

      <Block ground="sunken">
        <div className="mx-auto max-w-3xl">
          <Opening
            label="On format"
            paragraphs={[
              "These briefings are published as web pages rather than PDFs. That is a considered choice: a PDF behind a form is a lead-generation artefact wearing the clothes of a research paper, and the reader can usually tell.",
              "Each one is written for a specific person doing a specific job, a payroll lead closing a cutoff, a founder with no HR function, a plant head with three shift patterns, and says plainly what is a provision of law, what is a product capability, and what is an opinion.",
            ]}
          />
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {whitePapers.map((paper, i) => (
            <Reveal as="li" key={paper.slug} delay={i * 55} y={12} className="card card-hover flex flex-col p-6">
              <span aria-hidden="true" className="font-display text-[22px] font-light leading-none text-line-accent">
                {paper.number}
              </span>
              <Link
                href={`/resources/white-papers/${paper.slug}`}
                className="group mt-4 inline-flex items-center gap-2 font-display text-[18px] font-bold text-heading transition-colors hover:text-accent"
              >
                {titleCase(paper.title)}
                <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  <Arrow />
                </span>
              </Link>
              <span className="mt-2 block flex-1 text-[15px] leading-[1.6] text-muted">{paper.reader}</span>            </Reveal>
          ))}
        </ol>
      </Block>

      {/* ---- Latest from Insights: titles only, so the hub stays an index ---- */}
      <Block
        eyebrow="Insights"
        title="Latest from Insights"
        intro="Shorter than the papers and written as arguments rather than references, on ESI against a moving wage base, multi-state Professional Tax, comp-off and the sandwich rule."
        ground="canvas"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {articles.slice(0, 4).map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 45} y={10}>
              <Link href={`/insights/${a.slug}`} className="card card-hover group flex h-full flex-col gap-2 p-6">
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent">{a.category}</span>
                <span className="flex-1 font-display text-[16.5px] font-semibold leading-snug text-heading transition-colors group-hover:text-accent">
                  {titleCase(a.title)}
                </span>              </Link>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <Link href="/insights" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent">
            All {articles.length} articles <Arrow />
          </Link>
        </p>
      </Block>

      {/* ---- Which resource for which moment ---- */}
      <Block
        eyebrow="Guide"
        title="How to use this library"
        intro="Four kinds of material, written for four different moments. Knowing which one you are in saves reading the wrong thing."
        ground="sunken"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {moments.map((m, i) => (
            <Reveal key={m.title} delay={i * 70} y={14} className="card card-hover h-full p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent">
                <Icon name={m.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.02em] text-heading">{m.title}</h3>
              {m.paras.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 text-[16px] leading-[1.72] text-muted">
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </Block>

      <Block
        eyebrow="Ask us"
        title="Looking for something that is not here?"
        intro="If it is a question about how a particular statutory head is implemented, the fastest route is to ask the specialists in Pune rather than to hunt for a document."
        ground="canvas"
      >
        <div className="flex justify-center">
          <Button href="/company/contact-hrmagix">Ask the team</Button>
        </div>
      </Block>
      <FaqSection items={resourcesFaqs["/resources"]} ground="sunken" />

      <CtaBand title={<>See HRMagix run on <strong>your own payroll month</strong></>} />
    </>
  );
}
