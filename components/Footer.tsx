import Link from "next/link";
import { Logo, Arrow } from "./ui";
import { site } from "@/lib/content";
import { solutionsNav, industriesNav, resourcesNav, companyNav, policyNav } from "@/lib/nav";
import { social, payments } from "@/lib/footer";
import { SocialMark, PaymentMark } from "./BrandMarks";

/**
 * The footer.
 *
 * A black index: a tagline tab hanging from the top edge, a fixed-width brand
 * column (logo, blurb, social circles, contact, CTAs), five even link columns,
 * and a bottom bar with the copyright and payment marks.
 *
 * The footer is dark in both themes, so it uses fixed colours rather than
 * theme tokens.
 */

const dedupe = <T extends { href: string }>(links: T[]) =>
  links.filter((l, i, all) => all.findIndex((x) => x.href === l.href) === i);

const groups = [
  { title: "Solutions", links: solutionsNav.flatMap((c) => c.links) },
  { title: "Industries", links: industriesNav.flatMap((c) => c.links) },
  {
    title: "Resources",
    links: dedupe([
      { label: "Pricing", href: "/pricing" },
      { label: "How Setup Works", href: "/how-it-works" },
      ...resourcesNav.flatMap((c) => c.links),
      { label: "Explore All Pages", href: "/all-pages" },
    ]),
  },
  { title: "Legal", links: dedupe([...policyNav]) },
  {
    title: "Company",
    links: dedupe(companyNav.flatMap((c) => c.links)).filter(
      (l) => l.href !== "/pricing" && !policyNav.some((p) => p.href === l.href),
    ),
  },
];

export default function Footer() {
  return (
    <footer className="panel-fixed-dark relative overflow-hidden bg-black text-white">
      {/* Diagonal sheen on the right */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-white/[0.07] via-white/[0.02] to-transparent [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]"
        aria-hidden="true"
      />

      {/* Tagline tab */}
      <div className="relative flex justify-center px-4">
        <div className="w-full max-w-2xl rounded-b-[40px] bg-gradient-to-r from-violet-600 via-violet-500 to-violet-700 px-6 py-4 text-center shadow-float">
          <p className="text-[22px] font-bold italic tracking-tight text-white sm:text-[30px]">
            Payroll, without the month-end panic…
          </p>
        </div>
      </div>

      <div className="shell relative pb-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="HRMagix home" className="inline-flex">
              <Logo light />
            </Link>

            <p className="max-w-xs text-[14px] leading-relaxed text-white/70">
              HRMS and payroll for Indian companies, with statutory compliance built into the run.
            </p>

            <ul className="flex flex-wrap gap-2">
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`HRMagix on ${s.label}`}
                    title={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition-colors hover:bg-violet-500 hover:text-white"
                  >
                    <SocialMark name={s.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-1.5 text-[14px] text-white/80">
              <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-violet-300">
                {site.contact.email}
              </a>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-violet-300"
              >
                {site.contact.phone}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/company/contact"
                className="inline-flex h-10 items-center whitespace-nowrap rounded-full bg-violet-500 px-5 text-[14px] font-semibold text-white transition-colors hover:bg-violet-400"
              >
                Book a Demo
              </Link>
              <Link
                href="/company/careers"
                className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-5 text-[14px] font-medium text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/10"
              >
                We&apos;re Hiring <Arrow />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {groups.map((g) => (
              <nav key={g.title} aria-label={g.title}>
                <h3 className="text-[15px] font-bold text-violet-400">{g.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[14px] leading-snug text-white/85 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-5 border-t border-white/10 pt-6 md:flex-row md:justify-between">
          <p className="text-center text-[13px] text-white/70 md:text-left">
            Copyright © {new Date().getFullYear()} HRMagix Technologies Pvt Ltd (India) &amp; HRMagix
            Inc (USA)
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {payments.map((p) => (
              <li
                key={p.name}
                title={p.label}
                className="grid h-[30px] w-[46px] place-items-center rounded bg-white px-1.5"
              >
                <PaymentMark name={p.name} className="h-full w-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
