import Link from "next/link";
import { features } from "@/lib/content";
import { Arrow, SectionHead } from "@/components/ui";
import { IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

const featureHighlights: Record<string, string[]> = {
  attendance: ["Biometric eSSL/Matrix sync", "Geo-fenced mobile check-in", "Rotational shift rules"],
  leaves: ["Multi-tier manager approvals", "State holiday calendars", "Comp-off & LOP engine"],
  payroll: ["100% EPF, ESI & PT compliance", "Dual tax regime TDS Sec 192", "One-click bank batch payout"],
  performance: ["Quarterly OKR cascades", "9-Box talent matrix", "Structured PIP workflows"],
  recognition: ["Peer kudos & spot badges", "Social culture wall", "Leaderboard milestones"],
  lifecycle: ["Paperless onboarding packets", "Digital document vault", "Automated F&F settlement"],
};

/**
 * Six capability tiles with rich editorial highlights and clean typography.
 */
export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-surface-sunken/70 py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHead
          eyebrow="Core Capabilities"
          title={
            <>
              Everything you need to <strong>manage your people</strong>
            </>
          }
          sub="Six foundational pillars that cover the Indian working week — from the first biometric punch to statutory payslips, OKRs, and cultural celebrations."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const highlights = featureHighlights[f.key] || [];
            return (
              <Reveal as="li" key={f.key} delay={i * 60} y={20}>
                <Link
                  href="/features"
                  className="group flex h-full flex-col justify-between rounded-[26px] bg-surface p-7 shadow-soft ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-line-accent motion-reduce:hover:translate-y-0"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <IconTile name={f.icon} size="md" />
                      <span className="rounded-full bg-surface-sunken px-2.5 py-1 text-[11px] font-bold text-accent-strong">
                        Capability 0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[19px] font-bold text-heading">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                      {f.copy}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-line/80 pt-4">
                      {highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[13px] text-body">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent group-hover:text-accent-deep">
                      Explore detailed workflow <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
