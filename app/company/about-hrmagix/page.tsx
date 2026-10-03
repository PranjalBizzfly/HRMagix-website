import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { marketingFaqs } from "@/lib/pageFaqs/marketing";
import { site, manifesto, assurances } from "@/lib/content";
import { Opening, SplitPassage, Statement, Onward } from "@/components/editorial";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import TestimonialDeck from "@/components/TestimonialDeck";
import OnThisPage from "@/components/OnThisPage";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "About HRMagix",
  description:
    "HRMagix builds HRMS and payroll software for Indian companies from Pune and Mumbai: twelve modules on one employee record, with compliance as the product.",
  alternates: { canonical: "/company/about-hrmagix" },
};

/**
 * About.
 *
 * The temptation on an about page is to write a founding myth. HRMagix has not
 * published a founding date, a headcount or a funding history, so this page
 * does something more useful and entirely truthful: it explains what the
 * company decided to build and — at equal length — what it decided not to.
 *
 * The "what this is not" section is the point of the page. It is the fastest
 * honest way for a reader to work out whether HRMagix fits.
 */
export default function AboutPage() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="about-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About HRMagix" }]} />
          </Reveal>
          <Reveal y={10} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Company & Engineering
            </span>
          </Reveal>
          <h1 className="display display-xl mt-5 max-w-[16ch] text-balance">
            Built in Pune, <strong>for how India actually pays people</strong>
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-body sm:text-[19.5px]">
            {site.tagline}. Twelve modules on one employee record, with EPF, ESI, Professional Tax
            and TDS treated as the substance of the product rather than a compliance appendix bolted
            to the end of it.
          </p>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        <Opening
          label="What we built"
          paragraphs={[
            manifesto.headline,
            manifesto.lead,
            manifesto.paragraphs[2],
          ]}
        />
      </Block>

      {/* ---- The team photograph, used once, in the place it belongs ---- */}
      <Block ground="sunken">
        <SplitPassage
          eyebrow="Where the work happens"
          heading="Close enough to the cutoff to hear about it"
          body={[
            "HRMagix operates from Pune and Mumbai. That matters less as a marketing fact than as an operational one: support runs on WhatsApp, phone and email with product specialists in the same timezone and the same statutory environment as the people calling.",
            "Customer conversations cluster around two moments, the monthly payroll cutoff and the annual tax cycle, and both are moments where a delayed answer costs real money. Being reachable at those moments is a product decision, not a support policy.",
          ]}
          slot="about"
          caption="Support and product sit in the same room, which is why compliance questions get answered rather than escalated."
          link={{ label: "How to reach us", href: "/company/contact-hrmagix" }}
        />
      </Block>

      <Statement tone="dark" attribution="The founding observation">
        {manifesto.headline}
      </Statement>

      {/* ---- What this is not ---- */}
      <Block
        eyebrow="Scope"
        title="What HRMagix is not"
        intro="Usually the fastest way to tell whether something fits. None of the following is a roadmap item being put off, they are things this product chooses not to do."
        ground="canvas"
      >
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {[
            {
              term: "Not an applicant tracking system",
              detail:
                "HRMagix begins at the accepted offer. Sourcing, interviewing and offer management happen elsewhere; pre-boarding is where the employee record starts.",
            },
            {
              term: "Not a billing or invoicing platform",
              detail:
                "Attendance and project rosters are captured accurately, including at client sites. Turning those hours into an invoice is somebody else's job.",
            },
            {
              term: "Not an employer of record",
              detail:
                "The platform calculates statutory deductions and produces filing-ready output. The obligation to file and to be correct stays with the employer.",
            },
            {
              term: "Not a global payroll product",
              detail:
                "The entire design assumes Indian statute: the EPF ceiling, ESI contribution periods, state Professional Tax, the Gratuity Act. That focus is the reason it works well here.",
            },
            {
              term: "Not a monitoring tool",
              detail:
                "Attendance exists to establish payable days and reconcile leave. Where geo-fencing and selfie validation are used, they are configured by the employer for specific sites, not applied as surveillance by default.",
            },
          ].map((row, i) => (
            <Reveal key={row.term} delay={i * 55} y={12} className="card card-hover p-6">
              <dt className="font-display text-[16.5px] font-bold leading-snug text-heading">
                {row.term}
              </dt>
              <dd className="mt-2.5 text-[15px] leading-[1.68] text-muted">{row.detail}</dd>
            </Reveal>
          ))}
        </dl>
      </Block>

      {/* ---- The refusals ---- */}
      <Block
        eyebrow="Principles"
        title="What we have chosen not to do"
        intro="A product is defined as much by its refusals as by its features. Three of ours are worth stating, because they explain a good deal about how the platform behaves."
        ground="sunken"
      >
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          <section className="card card-hover p-6">
            <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
              We do not calculate statutory figures a customer cannot check
            </h3>
            <p className="mt-4 text-[16px] leading-[1.72] text-muted">
              PF, ESI, professional tax and TDS are derived from the salary structure on the record and the registrations you hold, and every figure can be traced back to the component and the rule that produced it.
            </p>
            <p className="mt-4 text-[16px] leading-[1.72] text-muted">
              The alternative, a number that appears correct and cannot be explained, is worse than a manual calculation, because it fails without warning. A payroll figure that nobody can defend is a liability rather than an output.
            </p>
          </section>
          <section className="card card-hover p-6">
            <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
              We do not overwrite history to make the present tidy
            </h3>
            <p className="mt-4 text-[16px] leading-[1.72] text-muted">
              A regularised attendance record sits alongside the original punch rather than replacing it. A backdated increment produces an arrear in the current month rather than a restatement of payslips already issued. A revised policy re-opens acknowledgement rather than assuming the earlier one still covers it.
            </p>
            <p className="mt-4 text-[16px] leading-[1.72] text-muted">
              Each of these makes the current view slightly messier and the historical record reliable. That trade is the right way round, and it is the one most often made the wrong way.
            </p>
          </section>
          <section className="card card-hover p-6">
            <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
              We do not publish numbers we have not measured
            </h3>
            <p className="mt-4 text-[16px] leading-[1.72] text-muted">
              You will not find an implementation time saved, a percentage reduction in payroll effort, or a customer outcome anywhere on this site, because no such study has been run.
            </p>
            <p className="mt-4 text-[16px] leading-[1.72] text-muted">
              What is published is what the platform does, what Indian statute requires, and what the plans cost. Where a figure would be useful and we do not have it, the page says so rather than estimating.
            </p>
          </section>
        </div>
      </Block>

      {/* ---- Assurances, phrased as commitments ---- */}
      <Block eyebrow="Commitments" title="What we hold ourselves to" ground="canvas">
        <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {assurances.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 60} y={12} className="card card-hover p-6">
              <h3 className="font-display text-[16.5px] font-bold text-heading">{a.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.68] text-muted">{a.copy}</p>
            </Reveal>
          ))}
        </ul>
      </Block>

      {/* ---- Customer voices ---- */}
      <Block
        eyebrow="Customers"
        title="What customers say it changed"
        intro="The people quoted here run monthly cutoffs. Their descriptions are more specific than anything we would write about ourselves."
        ground="sunken"
      >
        <TestimonialDeck />
      </Block>

      <Block
        eyebrow="Next step"
        title="The most useful next step is a demo against your own policies"
        intro={site.contact.blurb}
        ground="canvas"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/company/contact-hrmagix">Book a demo</Button>
          <Button href="/company/careers" variant="outline">
            Work here
          </Button>
        </div>
      </Block>

      {/* ---- Questions ---- */}
      <FaqSection title="Questions about HRMagix" items={marketingFaqs["/company/about-hrmagix"]} ground="sunken" />

      <Onward
        links={[
          {
            label: "Solutions",
            href: "/solutions",
            note: "The twelve modules, and the eight that have pages of their own.",
          },
          {
            label: "Policy Centre",
            href: "/policy-centre",
            note: "Privacy, terms, security and the workplace policy library.",
          },
          {
            label: "Press Kit",
            href: "/company/press-kit",
            note: "Name, mark, colours and boilerplate.",
          },
        ]}
      />
    </>
  );
}
