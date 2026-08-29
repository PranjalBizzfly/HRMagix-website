import Link from "next/link";
import { Logo, Button, Arrow } from "./ui";
import { Icon } from "./icons";
import { Reveal } from "./motion";
import { site } from "@/lib/content";
import { solutionsNav, industriesNav, resourcesNav, companyNav, policyNav } from "@/lib/nav";

/**
 * The footer doubles as the site index. Every page reachable from the header is
 * reachable from here too, which is the simplest guarantee that no page is
 * orphaned — and the reason the columns mirror the navigation exactly rather
 * than being maintained separately.
 */

const columns = [
  { heading: "Solutions", links: solutionsNav.flatMap((c) => c.links) },
  { heading: "Industries", links: industriesNav.flatMap((c) => c.links) },
  { heading: "Resources", links: resourcesNav.flatMap((c) => c.links) },
  { heading: "Company", links: companyNav.flatMap((c) => c.links) },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      {/* ---- Closing invitation ---- */}
      <div className="border-b border-line bg-surface-sunken">
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            <Reveal y={14}>
              <h2 className="display display-md max-w-[17ch] text-balance">
                See it run against <strong>your own payroll month</strong>
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-muted">
                {site.contact.blurb}
              </p>
            </Reveal>
            <Reveal delay={120} className="flex flex-wrap gap-3">
              <Button href="/company/contact" size="lg">
                Book a demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing
              </Button>
            </Reveal>
          </div>
          <p className="mt-8 text-[13.5px] text-subtle">{site.trial}</p>
        </div>
      </div>

      {/* ---- Index ---- */}
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Link href="/" aria-label="HRMagix home" className="inline-flex">
              <Logo />
            </Link>
            <p className="mt-5 max-w-[30ch] text-[14.5px] leading-relaxed text-muted">
              An HRMS and payroll platform for Indian companies — twelve modules on one
              employee record, with statutory compliance built into the run.
            </p>

            <ul className="mt-7 space-y-3 text-[14px]">
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
                {site.contact.location}
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-muted transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ---- Policy row ---- */}
        <div className="mt-12 border-t border-line pt-7">
          <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
            Policy
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {policyNav.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-[14px] text-muted transition-colors hover:text-accent"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Baseline ---- */}
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-subtle">
            © {new Date().getFullYear()} HRMagix. {site.footNote}
          </p>
          <Link
            href="https://app.hrmagix.com/login"
            className="group inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent"
          >
            Sign in to the workspace <Arrow />
          </Link>
        </div>
      </div>
    </footer>
  );
}
