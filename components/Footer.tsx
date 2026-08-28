import Link from "next/link";
import { features, footerNav, modules, site, stats } from "@/lib/content";
import { Button, Logo, Stars } from "./ui";
import { Icon, type IconName } from "./icons";

/**
 * Footer in four bands: CTA panel, a trust strip of published figures, the
 * link map with contact details, and the module index.
 *
 * No social icons — hrmagix.com publishes no social profiles, and inventing
 * them would fabricate the brand's presence. Same for certifications: the trust
 * strip below only restates figures HRMagix already publishes.
 */

const trust: { icon: IconName; value: string; label: string }[] = [
  { icon: "users", value: stats[1].value + stats[1].suffix, label: "Companies on HRMagix" },
  { icon: "shield", value: stats[2].value + stats[2].suffix, label: "Platform uptime" },
  { icon: "layers", value: String(stats[3].value), label: "Modules included" },
  { icon: "calendar", value: "14 days", label: "Free trial, no card" },
];

export default function Footer() {
  const contact: { icon: IconName; value: string; href?: string }[] = [
    { icon: "mail", value: site.contact.email, href: `mailto:${site.contact.email}` },
    {
      icon: "phone",
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/[^+\d]/g, "")}`,
    },
    { icon: "pin", value: site.contact.location },
  ];

  return (
    <footer className="border-t border-line bg-surface-sunken/60">
      {/* CTA panel */}
      <div className="shell pt-16 sm:pt-20">
        <div className="relative overflow-hidden rounded-[24px] bg-violet-950 p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute inset-0 dotted opacity-25" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-brand/35 blur-[90px]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <h2 className="display display-md !text-white">
                Start your <strong>14-day free trial</strong>
              </h2>
              <p className="mt-3 text-[15.5px] text-violet-200/85">{site.trial}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="light" size="md">
                Get Started
              </Button>
              <Button
                href="/how-it-works"
                variant="outline"
                size="md"
                arrow={false}
                className="!bg-transparent !text-white !ring-white/30 hover:!ring-white/70"
              >
                See how it works
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip — published figures only */}
      <div className="shell mt-12">
        <ul className="grid gap-x-8 gap-y-6 border-y border-line-strong/70 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <li key={t.label} className="flex items-center gap-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface text-accent ring-1 ring-line">
                <Icon name={t.icon} className="h-[18px] w-[18px]" />
              </span>
              <span>
                <span className="block font-display text-[17px] font-bold leading-none text-heading">
                  {t.value}
                </span>
                <span className="mt-1.5 block text-[12.5px] text-subtle">{t.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Link map */}
      <div className="shell pb-16 pt-12 sm:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
              Modern HR, from hire to retire. Everything your people team needs, in one delightful
              platform.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Stars size="h-3.5 w-3.5" />
              <span className="text-[12.5px] text-subtle">{site.proof.trustline}</span>
            </div>

            <address className="mt-8 space-y-3 not-italic">
              {contact.map((c) => (
                <div key={c.value} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface text-accent-soft ring-1 ring-line">
                    <Icon name={c.icon} className="h-4 w-4" />
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-[14.5px] font-medium text-accent-strong transition-colors hover:text-accent-soft"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-[14.5px] text-muted">{c.value}</span>
                  )}
                </div>
              ))}
            </address>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-label">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-label">
                Capabilities
              </h3>
              <ul className="mt-4 space-y-2.5">
                {features.map((f) => (
                  <li key={f.key}>
                    <FooterLink href="/features">{f.title}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Module index */}
        <div className="mt-14 border-t border-line pt-8">
          <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-label">
            All modules
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-2.5 gap-y-2">
            {modules.map((m) => (
              <li key={m.name}>
                <Link
                  href="/modules"
                  className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[12.5px] text-muted ring-1 ring-line transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-strong hover:ring-line-accent motion-reduce:hover:translate-y-0"
                >
                  <Icon name={m.icon} className="h-3.5 w-3.5 text-label" />
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-7 text-[13.5px] text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>{site.footNote}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative inline-block text-[14px] text-muted transition-colors hover:text-accent-strong"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
