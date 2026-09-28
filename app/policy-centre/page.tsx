import type { Metadata } from "next";
import { SiteStats, CtaBand, Block, FaqSection } from "@/components/sky9";
import { resourcesFaqs } from "@/lib/pageFaqs/resources";
import Link from "next/link";
import { legalPages, policyRegister, policyCount } from "@/lib/policies";
import { Opening } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Policy Centre",
  description:
    "HRMagix privacy, terms, security and cookie policies, plus the workplace policy library of twenty-five HR policy templates shipped for acknowledgement tracking.",
  alternates: { canonical: "/policy-centre" },
};

/**
 * The policy centre.
 *
 * The whole reason this hub exists rather than four footer links is the
 * distinction it draws at the top: HRMagix's own commitments are one thing, and
 * the workplace policy templates a customer issues to their own employees are
 * another. Conflating them is how a company ends up appearing to claim its
 * customers' HR policies as its own.
 */
export default function PolicyHub() {
  return (
    <>
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="policy-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Policy Centre" }]} />
          </Reveal>
          <Reveal y={10} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Governance & Frameworks
            </span>
          </Reveal>
          <h1 className="display display-lg mt-5 max-w-[15ch] text-balance">
            Two kinds of policy, <strong>kept apart on purpose</strong>
          </h1>
          <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            What HRMagix commits to, and what HRMagix ships for you to issue to your own people.
            They are not the same thing, and this page is organised so they never look like it.
          </p>
        </div>
      </header>

      <SiteStats />

      {/* ---- Our own commitments ---- */}
      <Block
        eyebrow="Ours"
        title={<>HRMagix&rsquo;s commitments to you</>}
        intro="How your data is handled, on what terms the platform is provided, what protects it, and what this website stores in your browser."
        ground="canvas"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {legalPages.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 60} y={12}>
              <Link href={p.href} className="card card-hover group flex h-full flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                <span className="mt-5 font-display text-[18px] font-bold text-heading transition-colors group-hover:text-accent">
                  {p.name}
                </span>
                <span className="mt-2 flex-1 text-[14.5px] leading-[1.65] text-muted">{p.standfirst}</span>
                <span className="mt-5 inline-flex text-accent">
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Block>

      {/* ---- Yours ---- */}
      <Block eyebrow="Yours" title="The workplace policy library" ground="sunken">
        <div className="mx-auto max-w-3xl">
          <Opening
            paragraphs={[
              `HRMagix ships ${policyCount} workplace policy templates inside the Documents module, a code of conduct and ${policyCount - 1} policies covering conduct, attendance, leave, performance, pay and separation.`,
              "These are your policies, not ours. You write your own rules into them, issue them to the employees each one applies to, and the platform records acknowledgement per employee per policy version, so that when a policy is revised, an earlier acceptance does not silently stand in for the new wording.",
            ]}
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {policyRegister.map((group, i) => (
            <Reveal key={group.title} delay={i * 60} y={12} className="card card-hover p-6">
              <h3 className="font-display text-[16.5px] font-bold text-heading">{group.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.65] text-muted">{group.intro}</p>
              <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
                {group.entries.length} policies
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <Link
            href="/policy-centre/workplace-policy-library"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent"
          >
            Open the full policy library <Arrow />
          </Link>
        </Reveal>
      </Block>

      <Block eyebrow="Roles" title="Why the separation matters" ground="canvas">
        <Reveal y={12} className="card mx-auto max-w-3xl p-6 sm:p-8">
          <p className="text-[16.5px] leading-[1.72] text-muted">
            In data-protection terms HRMagix is a controller of the information you give us directly
            and a processor of the employee records you load into the platform. The workplace policy
            templates sit further away still: they are documents you author and issue, using our
            software, to people we have no relationship with. Keeping the three roles distinct is
            what makes the privacy policy comprehensible rather than a hedge.
          </p>
          <Link
            href="/policy-centre/privacy-policy"
            className="group mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Read how the roles differ <Arrow />
          </Link>
        </Reveal>
      </Block>
      <FaqSection items={resourcesFaqs["/policy-centre"]} ground="sunken" />

      <CtaBand title={<>See HRMagix run on <strong>your own payroll month</strong></>} />
    </>
  );
}
