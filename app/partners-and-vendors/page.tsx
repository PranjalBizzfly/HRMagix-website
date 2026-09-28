import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { marketingFaqs } from "@/lib/pageFaqs/marketing";
import Link from "next/link";
import { vendor } from "@/lib/resources";
import { Opening, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import EnquiryForm from "@/components/EnquiryForm";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Partners & Vendors",
  description:
    "HRMagix works with accounting firms, HR implementation consultants and biometric hardware suppliers. There is no tiered partner programme, here is how each relationship actually works.",
  alternates: { canonical: "/partners-and-vendors" },
};

/**
 * Partners and vendors.
 *
 * The brief for this page was explicit: build it only if genuine information
 * supports it, and do not invent a programme. HRMagix publishes no partner
 * programme — no tiers, no badges, no commission schedule, no directory.
 *
 * So this page describes the three working relationships that genuinely exist
 * around the product, says in its own words that there is no programme to join,
 * and routes people to the real channel. The final section lists what is
 * deliberately absent, so nobody has to guess whether they missed a page.
 */
export default function VendorPage() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface-sunken pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="vendor-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Partners & Vendors" }]} />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[18ch] text-balance">
                No tiers, no badges. <strong>Three real relationships.</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                {vendor.standfirst}
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <div className="card border-line/60 bg-surface/85 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-lift">
                <span className="text-[12px] font-bold uppercase tracking-wider text-accent-soft">
                  Partner Ecosystem
                </span>
                <p className="font-display text-lg font-bold text-heading mt-2">
                  Direct hardware & practice integrations
                </p>
                <p className="text-[14px] text-body mt-2 leading-relaxed">
                  Engineered partnerships with biometric terminal makers (eSSL, Matrix, ZKTeco), chartered accountancy practices, and enterprise systems.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        <Opening label="The position" paragraphs={vendor.position} />
      </Block>

      {/* ---- The three relationships ---- */}
      <Block ground="sunken">
        <ol className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {vendor.relationships.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 70} y={14} className="card card-hover flex flex-col p-6">
              <div className="flex flex-1 flex-col gap-4">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 font-display text-[16px] font-bold text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-1 flex-col">
                  <h2 className="font-display text-[20px] font-bold leading-snug tracking-[-0.02em] text-heading">
                    {r.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15.5px] leading-[1.7] text-muted">{r.body}</p>
                  <p className="mt-5 flex flex-col items-start gap-1.5 rounded-lg bg-surface-sunken px-4 py-3 text-[14px] leading-snug text-accent-strong ring-1 ring-line">
                    <span className="font-semibold uppercase tracking-[0.08em]">Who this is for</span>
                    <span className="text-muted">{r.forWhom}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Block>

      {/* ---- Procurement ---- */}
      <Block eyebrow="Suppliers" title="Selling to us" ground="canvas">
          <div className="card mx-auto max-w-3xl p-6 sm:p-8">
            {vendor.procurement.map((p, i) => (
              <Reveal key={i} delay={i * 80} y={12}>
                <p className={`text-[16.5px] leading-[1.72] text-muted ${i ? "mt-5" : ""}`}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
      </Block>

      {/* ---- A real enquiry route, without inventing a programme ---- */}
      <Block
        id="enquiry"
        eyebrow="Contact"
        title="Start a conversation"
        intro="There is no programme to apply to, so this is not an application. It routes a specific proposal to the team in Pune, who arrange each relationship individually."
        ground="sunken"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10">
          <Reveal y={12} className="card self-start p-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-subtle">
              Who writes to us
            </p>
            <ul className="mt-4 space-y-2.5">
              {vendor.enquiryKinds.map((k) => (
                <li key={k} className="flex gap-3 text-[14.5px] leading-[1.6] text-muted">
                  <span aria-hidden="true" className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                  {k}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="card p-5 sm:p-8">
          <EnquiryForm form="vendor"
            subject="Partner or supplier enquiry"
            submitLabel="Send the proposal"
            successTitle="Thanks, your proposal has been sent"
            intro="Write with a specific proposal rather than a capability deck. What you do, who you already do it for, and your commercial terms."
            fields={[
              { name: "name", label: "Your name", required: true, half: true },
              { name: "company", label: "Company", required: true, half: true },
              { name: "email", label: "Email", type: "email", required: true, half: true },
              {
                name: "kind",
                label: "Which of the above describes you",
                required: true,
                half: true,
                placeholder: "e.g. Biometric hardware reseller",
              },
              {
                name: "proposal",
                label: "The proposal",
                type: "textarea",
                required: true,
                hint: "What you supply or advise on, and how it relates to HRMagix customers.",
              },
              {
                name: "clients",
                label: "Who you already work with",
                type: "textarea",
                hint: "Kinds of company rather than named clients, if confidentiality applies.",
              },
              {
                name: "terms",
                label: "Your commercial terms",
                type: "textarea",
                hint: "We do not publish a commission schedule, so tell us how you normally work.",
              },
              { name: "site", label: "Website", type: "url", placeholder: "https://", half: true },
            ]}
          />
          </div>
        </div>
      </Block>

      {/* ---- What is absent, and why ---- */}
      {/* ---- Procurement questions ---- */}
      <Block
        eyebrow="Procurement"
        title="What a procurement team usually needs to establish"
        intro="Most vendor assessments ask the same questions in a different order. These are the ones we can answer here; the rest depend on your requirements and are better handled in writing."
        ground="canvas"
      >
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Where the data sits, and who can reach it
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Employee records, attendance, payroll and documents are held in the platform under role-based access, and views of restricted fields are recorded. An employee sees their own record; a manager sees their team's attendance, leave and goals; salary components are visible only to roles with payroll access.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Specific hosting, retention and sub-processor questions belong in a written response against your own template rather than on a marketing page, because the answers have to be precise enough to sign.
              </p>
            </section>
            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                What the platform produces for audit and inspection
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Attendance records with the original capture, any correction, the reason and the approver. Payroll runs that lock once processed, with corrections carried as identified adjustments rather than edits. Statutory outputs generated from the run that produced the figures. Policy acknowledgement recorded per person, per version.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Those four together are what allow a past period to be reconstructed as it stood, which is the substance of most inspection and diligence questions.
              </p>
            </section>
            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Commercial terms, stated plainly
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Rates are published per employee per month across three plans, with Enterprise quoted because its scope varies. There is no setup or implementation fee. The trial is fourteen days with full access to every module and no credit card.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Cancellation is available at any time. We recommend exporting payroll, attendance and leave history before access ends, those are records you may be required to produce long after you stop using the software that created them.
              </p>
            </section>
            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                What this page does not claim
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                No certification, accreditation, audit standard or compliance attestation is asserted anywhere on this site, because none has been published. If your assessment requires one, ask directly rather than inferring it from the absence of a claim.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Nor are there customer references, case studies or named logos here. Where you need them, they are a conversation rather than a page.
              </p>
            </section>
          </div>
      </Block>

      <Block eyebrow="Transparency" title={vendor.honesty.heading} ground="sunken">
        <Reveal y={12} className="card mx-auto max-w-3xl p-6 sm:p-8">
          <ul className="space-y-3.5">
            {vendor.honesty.points.map((p) => (
              <li key={p} className="flex gap-3.5 text-[15.5px] leading-[1.7] text-muted">
                <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-subtle/60" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[15px] leading-[1.7] text-subtle">
            Publishing a partner programme before one exists produces applications nobody can
            process and expectations nobody set. If a programme is introduced, it will be described
            here with its actual terms.
          </p>
          <Link
            href="/company/contact-hrmagix"
            className="group mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Talk to the team instead <Arrow />
          </Link>
        </Reveal>
      </Block>

      {/* ---- Questions ---- */}
      <FaqSection title="Questions from partners and suppliers" items={marketingFaqs["/partners-and-vendors"]} ground="canvas" />

      <Onward
        links={[
          {
            label: "Attendance & Shifts",
            href: "/solutions/attendance-and-shifts",
            note: "The biometric hardware HRMagix integrates with today.",
          },
          {
            label: "Payroll",
            href: "/solutions/payroll",
            note: "The filing output an accounting partner would be reviewing.",
          },
          {
            label: "Terms of Service",
            href: "/policy-centre/terms-of-service",
            note: "Including the clause on where statutory responsibility sits.",
          },
        ]}
      />
    </>
  );
}
