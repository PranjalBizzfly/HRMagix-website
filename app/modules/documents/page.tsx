import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Digital Documents Vault Module | HRMagix",
  description:
    "Encrypted employee document repository (256-bit AES), automated Form 16, experience letters, appraisal letters, policy acknowledgment, and expiry alerts.",
};

const documentFeatures = [
  {
    title: "Encrypted Personnel Files",
    badge: "256-Bit AES Storage",
    desc: "Secure cloud vault for employee government IDs (PAN, Aadhaar, Passport), background verification reports, and academic credentials with strict RBAC.",
    icon: "lock",
  },
  {
    title: "Automated Letter Generation",
    badge: "1-Click PDF Templates",
    desc: "Generate digitally signed Appointment Letters, Promotion Letters, Salary Revision Annexures, Experience Letters, and Relieving Letters in bulk.",
    icon: "sparkle",
  },
  {
    title: "Company Policy Sign-offs",
    badge: "Compliance & Audit",
    desc: "Distribute Code of Conduct, Anti-Bribery, POSH (Prevention of Sexual Harassment), and Information Security policies with digital employee acknowledgment timestamps.",
    icon: "shield",
  },
  {
    title: "Expiry & Renewal Watchdog",
    badge: "Automated Alerts",
    desc: "Track expiring work visas, contracts, medical certifications, and regulatory licenses with automated 60/30-day renewal reminders to HR and managers.",
    icon: "clock",
  },
];

export default function DocumentsModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 10 · People & Documents"
        title="Encrypted Digital Document Repository"
        boldFrom={2}
        lede="Organize, generate, and store all personnel documentation in an encrypted, compliant cloud vault with role-based access control."
        crumb="Documents"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Documents Walkthrough
            </Button>
            <Button href="/modules" variant="outline" arrow={false} size="lg">
              All 12 Modules
            </Button>
          </>
        }
      />

      {/* Core Capabilities */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Document Governance"
            title={
              <>
                Every employee document, <strong>secure and searchable</strong>
              </>
            }
            sub="Replace scattered Google Drive folders and physical filing cabinets with an audit-ready, encrypted personnel vault hosted in AWS Mumbai."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {documentFeatures.map((feat, i) => (
              <Reveal
                key={feat.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={feat.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-accent">
                  <TickCircle className="h-4 w-4" />
                  <span>Compliant with Indian DPDPA 2023 privacy norms</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
