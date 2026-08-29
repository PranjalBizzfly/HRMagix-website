import Link from "next/link";
import { Logo, Button, Arrow } from "./ui";
import { Icon } from "./icons";
import { Reveal } from "./motion";
import { site } from "@/lib/content";
import { solutionsNav, industriesNav, resourcesNav, companyNav, policyNav } from "@/lib/nav";
import { social, payments } from "@/lib/footer";
import { SocialMark, PaymentMark } from "./BrandMarks";

/**
 * High-end Picky Assist-style comprehensive footer structure.
 * Featuring 5 structured columns, authentic brand-colored social media icons,
 * enterprise accreditation badges, action pills, accepted payments, and strict content preservation.
 */

const socialBrandStyles: Record<string, string> = {
  linkedin: "bg-[#0A66C2] text-white hover:bg-[#084e96] hover:shadow-[0_4px_14px_rgba(10,102,194,0.4)]",
  x: "bg-[#0F1419] text-white hover:bg-[#000000] hover:shadow-[0_4px_14px_rgba(15,20,25,0.4)]",
  facebook: "bg-[#1877F2] text-white hover:bg-[#0f60c7] hover:shadow-[0_4px_14px_rgba(24,119,242,0.4)]",
  instagram: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-95 hover:shadow-[0_4px_14px_rgba(220,39,67,0.4)]",
  youtube: "bg-[#FF0000] text-white hover:bg-[#cc0000] hover:shadow-[0_4px_14px_rgba(255,0,0,0.4)]",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-[0_4px_14px_rgba(37,211,102,0.4)]",
};

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      {/* ---- Top Closing Invitation (Picky Assist style CTA) ---- */}
      <div className="relative overflow-hidden border-b border-line bg-surface-sunken">
        <div
          className="pointer-events-none absolute -left-20 top-0 h-[380px] w-[500px] rounded-full bg-glow/12 blur-[120px]"
          aria-hidden="true"
        />
        <div className="shell relative py-16 sm:py-20">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            <Reveal y={14}>
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                Live Implementation & Support
              </span>
              <h2 className="display display-md mt-4 max-w-[17ch] text-balance">
                See it run against <strong>your own payroll month</strong>
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-muted">
                {site.contact.blurb}
              </p>
            </Reveal>
            <Reveal delay={120} className="flex flex-wrap items-center gap-3">
              <Button href="/company/contact" size="lg">
                Book a demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing
              </Button>
              <Link
                href="/company/careers"
                className="group inline-flex items-center gap-2 rounded-xl bg-surface px-4 py-2.5 text-[13px] font-semibold text-heading ring-1 ring-line transition-all hover:bg-surface-raised hover:ring-line-accent"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                We&rsquo;re Hiring
                <span className="text-accent transition-transform group-hover:translate-x-0.5">
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          </div>
          <p className="mt-8 text-[13.5px] text-subtle">{site.trial}</p>
        </div>
      </div>

      {/* ---- Main Navigation Index (5-Column Picky Assist Structure) ---- */}
      <div className="shell py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[minmax(0,18rem)_repeat(4,minmax(0,1fr))] lg:gap-8 xl:gap-10">
          {/* Column 1: Brand, Contact, Real-Color Socials & Accreditations */}
          <div>
            <Link href="/" aria-label="HRMagix home" className="inline-flex">
              <Logo />
            </Link>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              An HRMS and payroll platform for Indian companies — twelve modules on one
              employee record, with statutory compliance built into the run.
            </p>

            {/* Direct Contact */}
            <ul className="mt-6 space-y-2.5 text-[13.5px]">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group inline-flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-accent-soft" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="group inline-flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-accent-soft" />
                  {site.contact.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-muted">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                <span>{site.contact.location}</span>
              </li>
            </ul>

            {/* Real Color Social Media Icons (Picky Assist Style) */}
            <div className="mt-7 border-t border-line pt-5">
              <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                Connect With Us
              </h3>
              <ul className="mt-3.5 flex flex-wrap gap-2.5">
                {social.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`HRMagix on ${s.label}`}
                      title={s.label}
                      className={`grid h-9 w-9 place-items-center rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:hover:translate-y-0 shadow-sm ${
                        socialBrandStyles[s.name] ?? "bg-surface text-body"
                      }`}
                    >
                      <SocialMark name={s.name} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Accreditations & Certifications (Picky Assist Member-of Style) */}
            <div className="mt-6 border-t border-line pt-5">
              <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                Accreditations
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-heading ring-1 ring-line">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  SOC 2 Type II
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-heading ring-1 ring-line">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  ISO 27001
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-heading ring-1 ring-line">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  DPDP & GDPR Ready
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-heading ring-1 ring-line">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  EPF & ESI Ready
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Products & Modules */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-heading">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {solutionsNav.flatMap((c) => c.links).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-heading">
              Industries
            </h3>
            <ul className="mt-4 space-y-2.5">
              {industriesNav.flatMap((c) => c.links).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Tools */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-heading">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/pricing"
                  className="text-[13.5px] text-muted transition-colors hover:text-accent"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-[13.5px] text-muted transition-colors hover:text-accent"
                >
                  How Setup Works
                </Link>
              </li>
              {resourcesNav.flatMap((c) => c.links).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal, Company & Compare */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-heading">
              Legal & Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyNav.flatMap((c) => c.links).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {policyNav.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-accent"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column Action Buttons (Picky Assist Style) */}
            <div className="mt-7 space-y-2.5 border-t border-line pt-5">
              <Link
                href="/company/careers"
                className="group flex w-full items-center justify-between rounded-xl bg-surface-raised px-3.5 py-2 text-[12.5px] font-semibold text-heading ring-1 ring-line transition-colors hover:bg-surface-sunken hover:ring-line-accent"
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  We&rsquo;re Hiring
                </span>
                <span className="text-accent transition-transform group-hover:translate-x-0.5">
                  <Arrow />
                </span>
              </Link>
              <Link
                href="https://app.hrmagix.com/login"
                className="flex w-full items-center justify-center rounded-xl bg-brand px-3.5 py-2 text-[12.5px] font-bold text-white shadow-sm transition-all hover:bg-brand-hover"
              >
                Sign In to Workspace
              </Link>
            </div>
          </div>
        </div>

        {/* ---- Accepted Payments & Security Strip ---- */}
        <div className="mt-14 border-t border-line pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                Accepted Payment Methods & Gateway Security
              </h3>
              <p className="mt-1 text-[13px] text-muted">
                Card, UPI and corporate banking transactions are secured with 256-bit SSL encryption. HRMagix does not store card credentials.
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-2.5">
              {payments.map((p) => (
                <li
                  key={p.name}
                  title={p.label}
                  className="grid h-[34px] w-[54px] place-items-center rounded-lg bg-white px-2 shadow-sm ring-1 ring-black/10 transition-transform hover:scale-105"
                >
                  <PaymentMark name={p.name} className="h-full w-full" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---- Baseline Copyright & Legal Notice ---- */}
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between text-[13px] text-subtle">
          <p>
            © {new Date().getFullYear()} HRMagix Technologies Pvt Ltd (India) &amp; HRMagix Inc (USA). {site.footNote}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px]">
            <Link href="/policy/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policy/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/policy/security" className="hover:text-accent transition-colors">
              Security
            </Link>
            <Link href="/policy/cookies" className="hover:text-accent transition-colors">
              Cookies
            </Link>
            <Link
              href="https://app.hrmagix.com/login"
              className="font-semibold text-accent hover:underline"
            >
              Workspace Login →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
