import Link from "next/link";
import { features, footerNav, modules, site } from "@/lib/content";
import { Arrow, Button, Logo, Stars } from "./ui";

/** Wide, light footer: CTA strip, four link columns, module index, legal row. */
export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-violet-50/60">
      <div className="shell py-16 sm:py-20">
        {/* CTA strip */}
        <div className="flex flex-col items-start justify-between gap-6 rounded-[26px] bg-white p-7 shadow-soft ring-1 ring-violet-100 sm:p-9 lg:flex-row lg:items-center">
          <div>
            <h2 className="display text-[clamp(1.4rem,3.4vw,2rem)]">
              Start your <strong>14-day free trial</strong>
            </h2>
            <p className="mt-2 text-[14.5px] text-ink-soft">
              No credit card required · Cancel anytime
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="outline" size="md" arrow={false}>
              Book a Demo
            </Button>
            <Button href="/contact" size="md">
              Get Started
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_2.5fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[14.5px] leading-relaxed text-ink-soft">
              Modern HR, from hire to retire. Everything your people team needs, in one delightful
              platform.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Stars />
              <span className="text-[12.5px] text-ink-faint">{site.proof.trustline}</span>
            </div>
            <address className="mt-7 space-y-2 text-[14px] not-italic">
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center gap-2 font-semibold text-violet-700 transition-colors hover:text-violet-500"
              >
                {site.contact.email}
                <Arrow className="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                className="block text-ink-soft transition-colors hover:text-violet-600"
              >
                {site.contact.phone}
              </a>
              <p className="text-ink-faint">{site.contact.location}</p>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-400">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group relative inline-block text-[14px] text-ink-soft transition-colors hover:text-violet-700"
                      >
                        {l.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-400">
                Capabilities
              </h3>
              <ul className="mt-4 space-y-2.5">
                {features.map((f) => (
                  <li key={f.key}>
                    <Link
                      href="/features"
                      className="group relative inline-block text-[14px] text-ink-soft transition-colors hover:text-violet-700"
                    >
                      {f.title}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Module index */}
        <div className="mt-14 border-t border-violet-100 pt-8">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-400">
            All modules
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
            {modules.map((m) => (
              <li key={m.name}>
                <Link
                  href="/modules"
                  className="text-[13.5px] text-ink-faint transition-colors hover:text-violet-700"
                >
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-violet-100 pt-7 text-[13px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>{site.footNote}</p>
        </div>
      </div>
    </footer>
  );
}
