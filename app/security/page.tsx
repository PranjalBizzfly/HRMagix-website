import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Enterprise Security & Data Protection",
  description:
    "Bank-grade security, Tier-4 Indian cloud hosting (AWS Mumbai), 256-bit AES encryption, ISO 27001 standards, and role-based access control.",
};

const securityPillars = [
  {
    title: "Indian Data Sovereignty & Tier-4 Infrastructure",
    icon: "shield" as const,
    copy: "All customer personnel records, salary figures, attendance logs, and tax documents are strictly hosted within Indian geographical borders in ISO 27001 certified, Tier-4 cloud data centers located in Mumbai (AWS ap-south-1).",
    points: [
      "Zero cross-border data transfer of sensitive employee financial or identification records",
      "99.9% uptime SLA with active multi-availability zone disaster recovery",
      "Compliant with Indian Digital Personal Data Protection Act (DPDPA 2023)",
    ],
  },
  {
    title: "Military-Grade Encryption Standards",
    icon: "sparkle" as const,
    copy: "Your people data is protected with the highest level of cryptographic security both in transit across networks and at rest on encrypted storage volumes.",
    points: [
      "256-bit AES encryption at rest across all databases, storage buckets, and document repositories",
      "TLS 1.3 encryption with strict HTTPS enforcement for all web and mobile API communications",
      "Automated key rotation managed through dedicated Hardware Security Modules (HSM)",
    ],
  },
  {
    title: "Granular Role-Based Access Control (RBAC)",
    icon: "grid" as const,
    copy: "Prevent unauthorized internal visibility. HRMagix enforces fine-grained permission models ensuring managers, HR specialists, and finance controllers only see authorized data.",
    points: [
      "Field-level permission masking for employee compensation, PAN, and Aadhaar numbers",
      "Custom administrator roles with department, branch, and company entity scoping",
      "Immutable audit logs recording every view, edit, salary export, and policy modification",
    ],
  },
  {
    title: "Single Sign-On (SSO) & Identity Governance",
    icon: "users" as const,
    copy: "Seamlessly integrate HRMagix into your corporate identity provider. Centralize user provisioning and deprovisioning with enterprise-grade authentication protocols.",
    points: [
      "SAML 2.0 and OpenID Connect (OIDC) integration with Google Workspace, Microsoft Azure AD, and Okta",
      "Mandatory Multi-Factor Authentication (MFA) via authenticator apps and SMS OTP",
      "Immediate automated user deprovisioning upon employee offboarding to eliminate zombie accounts",
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust & Security"
        title="Bank-grade protection for your people data"
        boldFrom={3}
        lede="We protect the sensitive compensation, biometric attendance, and personal identity records of over 9,000 employees with uncompromising security standards."
        crumb="Security"
        actions={
          <Button href="/contact" size="lg">
            Request Security Whitepaper
          </Button>
        }
      />

      {/* Security Architecture Pillars */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell space-y-16">
          <SectionHead
            eyebrow="Security Architecture"
            title={
              <>
                Engineered for <strong>maximum enterprise protection</strong>
              </>
            }
            sub="Learn how HRMagix combines physical infrastructure resilience, cryptographic encryption, and identity governance to safeguard enterprise operations."
          />

          <div className="grid gap-8 sm:grid-cols-2">
            {securityPillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 80} y={20}>
                <div className="flex h-full flex-col justify-between rounded-[28px] bg-surface-sunken/60 p-8 ring-1 ring-line transition-all hover:bg-surface-sunken sm:p-10">
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface text-accent-strong shadow-soft ring-1 ring-line-strong">
                      <Icon name={pillar.icon} className="h-6 w-6" />
                    </span>

                    <h3 className="mt-6 font-display text-[20px] font-bold text-heading">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {pillar.copy}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-line-strong/60 pt-5">
                      {pillar.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-body">
                          <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ok" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Audit Certifications Banner */}
      <section className="bg-violet-950 py-20 text-white sm:py-24">
        <div className="shell text-center">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
              <Icon name="shield" className="h-3.5 w-3.5 text-violet-300" />
              Continuous Vulnerability Testing
            </span>
            <h2 className="display display-lg mt-5 !text-white">
              Rigorous penetration testing and automated audits
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-violet-200/90 sm:text-[17.5px]">
              HRMagix undergoes regular third-party penetration testing (VAPT), automated daily vulnerability scans, and continuous code dependency audits to ensure zero vulnerabilities across all application layers.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="light" size="lg">
                Schedule Security Review
              </Button>
              <Button href="/faq" variant="outline" size="lg" className="!bg-transparent !text-white !ring-white/30 hover:!ring-white/70">
                View Technical FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
