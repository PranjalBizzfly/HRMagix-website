import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "HRMagix Master Subscription Agreement and Terms of Service governing enterprise use of the HRMagix cloud platform.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Governance"
        title="Terms of Service & Subscription Agreement"
        boldFrom={3}
        lede="These terms govern your organization's subscription to the HRMagix cloud human resources, attendance, performance, and payroll platform."
        crumb="Terms"
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <div className="prose prose-violet mx-auto max-w-4xl space-y-10 text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wider text-accent">
                Last Updated: January 2026 · Effective Date: January 1, 2026
              </p>
              <h2 className="display display-md mt-2 text-heading">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By creating an account, initiating a 14-day free trial, executing an Order Form, or accessing the HRMagix platform (&ldquo;Service&rdquo;), you (&ldquo;Customer&rdquo; or &ldquo;Subscriber&rdquo;) agree to be legally bound by this Master Subscription Agreement (&ldquo;Terms&rdquo;). If you are entering into this agreement on behalf of a company or other legal entity, you represent that you possess the authority to bind such entity.
              </p>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                2. Subscription Services & Free Trial
              </h2>
              <p className="mt-3">
                HRMagix provides a software-as-a-service cloud platform designed to manage attendance, leaves, performance appraisals, OKRs, payroll, recognition, and the employee lifecycle.
              </p>
              <p className="mt-3">
                <strong>14-Day Free Trial:</strong> We offer a 14-day complimentary trial period without requiring payment card information. At the conclusion of the trial, access to premium modules may require selecting an active subscription tier (Starter, Growth, or Enterprise).
              </p>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                3. Customer Responsibilities & Data Ownership
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li><strong>Customer Data Ownership:</strong> As between Customer and HRMagix, Customer retains all right, title, and interest in all data, personal records, and files uploaded or generated within the platform.</li>
                <li><strong>Compliance with Employment Laws:</strong> Customer remains solely responsible for ensuring that its company policies, salary structures, tax deductions, and working hours comply with applicable Indian national and state labor statutes.</li>
                <li><strong>Credential Security:</strong> Customer is responsible for maintaining the confidentiality of administrative credentials and enforcing Multi-Factor Authentication (MFA) across authorized user accounts.</li>
              </ul>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                4. Service Level Agreement (SLA) & Support
              </h2>
              <p className="mt-3">
                HRMagix commits to maintaining a minimum of <strong>99.9% platform availability</strong> during each calendar month, excluding scheduled maintenance windows announced in advance. Enterprise tier subscribers receive dedicated technical support with guaranteed response times under 2 business hours.
              </p>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                5. Billing, Pricing & Taxes
              </h2>
              <p className="mt-3">
                Subscription fees are billed on an active employee headcount basis (per employee per month) or under an annual enterprise contract. All quoted fees are exclusive of applicable Indian Goods and Services Tax (GST at 18%), which will be calculated and invoiced in accordance with statutory requirements.
              </p>
            </div>

            <hr className="border-line" />

            <div>
              <h2 className="display display-md text-heading">
                6. Governing Law & Dispute Resolution
              </h2>
              <p className="mt-3">
                These Terms shall be governed by and construed in accordance with the substantive laws of the Republic of India. Any legal dispute or arbitration arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Pune, Maharashtra, India</strong>.
              </p>
              <div className="mt-6 rounded-2xl bg-surface-sunken/80 p-6 ring-1 ring-line-strong">
                <p className="font-bold text-heading">Legal Inquiries — HRMagix</p>
                <p className="mt-1 text-muted">Email: {site.contact.email}</p>
                <p className="text-muted">Phone: {site.contact.phone}</p>
                <p className="text-muted">Corporate Headquarters: {site.contact.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
