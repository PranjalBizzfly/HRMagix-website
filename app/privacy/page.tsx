import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "HRMagix Privacy Policy and Data Governance Charter. Compliant with the Indian Digital Personal Data Protection Act (DPDPA 2023) and global standards.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Governance"
        title="Privacy Policy & Data Protection Charter"
        boldFrom={3}
        lede="At HRMagix, data privacy is not an afterthought — it is an architectural foundation. Learn how we collect, process, safeguard, and respect customer enterprise data."
        crumb="Privacy"
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <div className="prose prose-violet mx-auto max-w-4xl space-y-10 text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wider text-accent">
                Last Updated: January 2026 · Effective Date: January 1, 2026
              </p>
              <h2 className="display display-md mt-2 text-heading">
                1. Overview & Commitment to Privacy
              </h2>
              <p className="mt-3">
                This Privacy Policy explains how HRMagix (&ldquo;HRMagix&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, and protects personal and professional data when you use our web platform (hrmagix.com), mobile applications, APIs, and associated cloud services (collectively, the &ldquo;Platform&rdquo;).
              </p>
              <p className="mt-3">
                We operate strictly as a <strong>Data Processor</strong> on behalf of our enterprise customers (the <strong>Data Fiduciaries</strong>), who determine the lawful purposes for collecting and managing employee information.
              </p>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                2. Information We Process
              </h2>
              <p className="mt-3">
                Depending on the modules enabled by your employer organization, HRMagix may process:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li><strong>Identity & Profile Data:</strong> Full legal name, date of birth, gender, employee identification number, designation, reporting hierarchy, and corporate email.</li>
                <li><strong>Statutory & Financial Data:</strong> Permanent Account Number (PAN), Aadhaar details (where legally required for EPFO/ESIC linking), bank account numbers, IFSC codes, salary structure, tax declarations, and payslip history.</li>
                <li><strong>Attendance & Work Logs:</strong> Biometric punch timestamps, geo-location coordinates during mobile punch-in (if enabled by company policy), shift schedules, and leave balances.</li>
                <li><strong>Performance & Engagement:</strong> Objective key results (OKRs), key result areas (KRAs), 9-box talent ratings, manager 1-on-1 review notes, peer recognition kudos, and growth plans.</li>
              </ul>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                3. Purpose & Legal Basis of Processing
              </h2>
              <p className="mt-3">
                We process your information exclusively to provide the contracted HR, payroll, attendance, and talent management services, including:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Executing accurate salary calculations, tax withholdings (TDS under Section 192), and generating government challan export files (EPF ECR, ESIC).</li>
                <li>Facilitating leave request approvals, attendance reconciliation, and shift management.</li>
                <li>Providing authenticated access to employee self-service portals and mobile applications.</li>
                <li>Ensuring security, preventing fraudulent logins, and maintaining immutable audit trails.</li>
              </ul>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                4. Data Sovereignty & Indian Cloud Hosting
              </h2>
              <p className="mt-3">
                All customer personnel records, salary figures, attendance logs, and tax documents are strictly hosted within Indian geographical borders in ISO 27001 certified, Tier-4 cloud data centers located in Mumbai (AWS ap-south-1). We strictly adhere to the provisions of the <strong>Digital Personal Data Protection Act (DPDPA 2023)</strong> and do not transfer sensitive employee data outside of India without explicit authorization.
              </p>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                5. Data Retention & Deletion
              </h2>
              <p className="mt-3">
                We retain enterprise customer data for the duration of the active service contract. Upon contract termination or formal deletion request by the Data Fiduciary, all associated company data is permanently wiped from our production databases within 30 days, following strict cryptographic data sanitization protocols.
              </p>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                6. Contact the Data Protection Officer
              </h2>
              <p className="mt-3">
                If you have questions regarding this Privacy Policy, your statutory data rights, or data security practices, please contact our Data Protection Officer:
              </p>
              <div className="mt-4 rounded-2xl bg-surface-sunken/80 p-6 ring-1 ring-line-strong">
                <p className="font-bold text-heading">Data Protection Officer — HRMagix</p>
                <p className="mt-1 text-muted">Email: {site.contact.email}</p>
                <p className="text-muted">Phone: {site.contact.phone}</p>
                <p className="text-muted">Corporate Location: {site.contact.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
