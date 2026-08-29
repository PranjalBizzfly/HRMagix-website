import type { Metadata } from "next";
import Link from "next/link";
import { legalPages, policyRegister, policyCount } from "@/lib/policies";
import { Band, Opening } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Policy Centre",
  description:
    "HRMagix privacy, terms, security and cookie policies, plus the workplace policy library of twenty-five HR policy templates shipped for acknowledgement tracking.",
  alternates: { canonical: "/policy" },
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
      <header className="relative overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
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
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Policy" }]} />
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

      {/* ---- Our own commitments ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
            Ours
          </p>
          <h2 className="display display-md mt-5">HRMagix&rsquo;s commitments to you</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            How your data is handled, on what terms the platform is provided, what protects it, and
            what this website stores in your browser.
          </p>
        </Reveal>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {legalPages.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 60} y={12}>
              <Link
                href={p.href}
                className="group grid gap-3 py-7 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] lg:items-baseline lg:gap-10"
              >
                <span className="font-display text-[18px] font-bold text-heading transition-colors group-hover:text-accent">
                  {p.name}
                </span>
                <span className="max-w-2xl text-[15px] leading-[1.65] text-muted">
                  {p.standfirst}
                </span>
                <span className="mt-1 shrink-0 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Band>

      {/* ---- Yours ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
            Yours
          </p>
          <h2 className="display display-md mt-5">The workplace policy library</h2>
        </Reveal>

        <Opening
          className="mt-10"
          paragraphs={[
            `HRMagix ships ${policyCount} workplace policy templates inside the Documents module — a code of conduct and ${policyCount - 1} policies covering conduct, attendance, leave, performance, pay and separation.`,
            "These are your policies, not ours. You write your own rules into them, issue them to the employees each one applies to, and the platform records acknowledgement per employee per policy version — so that when a policy is revised, an earlier acceptance does not silently stand in for the new wording.",
          ]}
        />

        <div className="mt-12 grid gap-x-14 gap-y-8 sm:grid-cols-2">
          {policyRegister.map((group, i) => (
            <Reveal key={group.title} delay={i * 60} y={12} className="border-t border-line pt-5">
              <h3 className="font-display text-[16.5px] font-bold text-heading">{group.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.65] text-muted">{group.intro}</p>
              <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
                {group.entries.length} policies
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10">
          <Link
            href="/policy/workplace-policies"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent"
          >
            Open the full policy library <Arrow />
          </Link>
        </Reveal>
      </Band>

      <Band ground="surface" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-subtle">
            Why the separation matters
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.72] text-muted">
            In data-protection terms HRMagix is a controller of the information you give us directly
            and a processor of the employee records you load into the platform. The workplace policy
            templates sit further away still: they are documents you author and issue, using our
            software, to people we have no relationship with. Keeping the three roles distinct is
            what makes the privacy policy comprehensible rather than a hedge.
          </p>
          <Link
            href="/policy/privacy"
            className="group mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Read how the roles differ <Arrow />
          </Link>
        </Reveal>
      </Band>
    </>
  );
}
