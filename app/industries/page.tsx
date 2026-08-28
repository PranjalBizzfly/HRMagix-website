import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import IndustryShowcase from "@/components/sections/IndustryShowcase";
import { Button, SectionHead } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { industries, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions by Industry",
  description:
    "Tailored HRMagix workflows for IT & tech startups, professional services, corporate finance, distributed teams, and high-growth Indian enterprises.",
};

const industryDeepDives = [
  {
    key: "tech",
    name: "IT, SaaS & High-Growth Startups",
    kicker: "Agile Sprints & Remote Synchronization",
    lede: "In fast-paced engineering teams across Bangalore, Pune, and Hyderabad, rigid 9-to-5 rules fail. Developers need flexible check-in windows, sprint-aligned OKRs, and instant leave requests integrated directly into their daily workflow.",
    challenges: [
      "Fragmented sprint tracking disconnected from quarterly performance reviews",
      "Manual shift calculations for round-the-clock DevOps and support shifts",
      "High competition for senior engineering talent requiring continuous meritocracy",
    ],
    solutions: [
      "Quarterly & Sprint OKRs: Cascading objectives directly linked to individual key result areas (KRAs) with live progress sliders.",
      "Mobile Geo-Fencing: iOS & Android GPS check-in with selfie validation for hybrid developers working from home or co-working spaces.",
      "Instant Kudos & Spot Awards: Real-time peer recognition wall embedded in the workspace to celebrate sprint deliverables and customer wins.",
    ],
  },
  {
    key: "services",
    name: "Professional Services & Consulting Agencies",
    kicker: "Billable Accuracy & Multi-Tier Approvals",
    lede: "Consulting firms, legal practices, and digital agencies thrive on accurate time allocation. HRMagix eliminates time leakage with project-tagged attendance rosters and automated manager approvals.",
    challenges: [
      "Discrepancies between client billable logs and internal employee timesheets",
      "Complex multi-tier client manager and internal HR approval bottlenecks",
      "High employee turnover due to opaque promotion and bonus appraisal cycles",
    ],
    solutions: [
      "Project-Specific Timesheet Accruals: Auto-calculate overtime and weekend comp-off credits based on client-approved project hours.",
      "9-Box Talent Matrix: Calibrate high-performing consultants and map future practice leadership during quarterly reviews.",
      "Centralized Document Vault: Securely store client non-disclosure agreements, offer letters, and statutory compliance certifications.",
    ],
  },
  {
    key: "finance",
    name: "Financial Services, BFSI & Corporate Enterprises",
    kicker: "Bank-Grade Security & 100% Statutory Compliance",
    lede: "Financial institutions and corporate headquarters require zero-error multi-entity payroll runs, immutable audit trails, and strict role-based access control.",
    challenges: [
      "Heavy compliance penalties from EPF, ESI, or PT calculation discrepancies across multiple Indian states",
      "Lengthy 3-day payroll reconciliation cycles prone to human spreadsheet errors",
      "Strict data sovereignty requirements requiring Tier-4 Indian cloud infrastructure",
    ],
    solutions: [
      "Automated Statutory Calculations: Pre-configured rules for EPFO wage ceilings, ESIC gross limits, and state-specific Professional Tax slabs.",
      "One-Click Bank Batch Files: Export bank-formatted NEFT, RTGS, and IMPS payment files directly to ICICI, HDFC, Axis, and SBI portals.",
      "Dual Tax Regime Support: Automatically compute monthly TDS under Section 192 comparing Old vs. New tax regimes with Form 24Q quarterly exports.",
    ],
  },
  {
    key: "remote",
    name: "Distributed, Hybrid & Multi-City Workforces",
    kicker: "Single Digital Headquarters Across India",
    lede: "Managing teams across Mumbai, Delhi NCR, Pune, Kolkata, and tier-2 tech hubs requires a centralized platform where attendance, leave balances, and company culture remain unified.",
    challenges: [
      "Uncertainty around employee attendance status across remote home locations",
      "Varying state holiday calendars causing communication mismatches",
      "Disconnection from company values and reduced team engagement in remote settings",
    ],
    solutions: [
      "Multi-State Holiday Calendars: Assign localized state holiday lists (e.g. Maharashtra Day, Gudi Padwa, Pongal, Durga Puja) to specific office locations.",
      "Live Presence Board: Real-time visibility into who is active, on leave, remote, or traveling without intrusive micromanagement.",
      "Interactive 1-on-1 Framework: Shared agendas and private manager coaching notes to ensure remote team members receive continuous mentorship.",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions by Industry"
        title="Engineered for your sector's operational rhythm"
        boldFrom={3}
        lede="From fast-moving IT startups to compliance-intensive financial corporations, explore how HRMagix adapts to your team's specific workforce dynamics."
        crumb="Industries"
        actions={
          <Button href="/contact" size="lg">
            Schedule Industry Walkthrough
          </Button>
        }
      />

      {/* Interactive Showcase */}
      <IndustryShowcase />

      {/* Deep Editorial Industry Workflows */}
      <section className="bg-surface-sunken/70 py-24 sm:py-28">
        <div className="shell space-y-16">
          <SectionHead
            eyebrow="Operational Deep Dives"
            title={
              <>
                How HRMagix solves <strong>sector-specific bottlenecks</strong>
              </>
            }
            sub="Explore the exact challenges and architectural solutions we deploy for Indian enterprises across diverse operational domains."
          />

          <div className="space-y-10">
            {industryDeepDives.map((ind, idx) => (
              <Reveal key={ind.key} delay={idx * 60} y={20}>
                <article className="overflow-hidden rounded-[28px] bg-surface p-8 shadow-soft ring-1 ring-line sm:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
                    <div>
                      <span className="text-[12px] font-bold uppercase tracking-wider text-accent">
                        {ind.kicker}
                      </span>
                      <h3 className="display display-md mt-1 text-heading">
                        {ind.name}
                      </h3>
                    </div>
                    <Button href="/contact" variant="outline" size="sm">
                      Discuss This Workflow
                    </Button>
                  </div>

                  <p className="mt-6 text-[16.5px] leading-relaxed text-muted sm:text-[18px]">
                    {ind.lede}
                  </p>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="rounded-2xl bg-danger-soft/50 p-6 ring-1 ring-danger-line">
                      <p className="font-display text-[14px] font-bold uppercase tracking-wider text-danger-strong">
                        The Core Operational Bottlenecks
                      </p>
                      <ul className="mt-4 space-y-3">
                        {ind.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[14px] text-body">
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-danger" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-surface-sunken/70 p-6 ring-1 ring-line-strong">
                      <p className="font-display text-[14px] font-bold uppercase tracking-wider text-accent-deep">
                        The HRMagix Platform Resolution
                      </p>
                      <ul className="mt-4 space-y-3">
                        {ind.solutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[14px] text-body">
                            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
