import Link from "next/link";
import { Button, Pill, Arrow } from "@/components/ui";
import { primaryNav, policyNav } from "@/lib/nav";

/**
 * 404.
 *
 * A dead end is the one place a site index genuinely helps, so this page lists
 * the real destinations rather than offering a search box and an apology.
 */
export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden wash pb-14 pt-[128px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 dotted opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/4 h-[360px] w-[680px] max-w-[130vw] -translate-x-1/2 rounded-full bg-glow/25 blur-[110px]"
          aria-hidden="true"
        />
        <div className="shell relative text-center">
          <div className="flex justify-center">
            <Pill>
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Page not found
            </Pill>
          </div>
          <p className="display mt-7 text-[clamp(3.5rem,14vw,8rem)] font-bold leading-none text-gradient">
            404
          </p>
          <h1 className="display display-md mt-4">
            That page is not <strong>part of this site</strong>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-muted">
            It may have moved during the site rebuild, or the link may simply be wrong. Everything
            that does exist is listed below.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              Back home
            </Button>
            <Button href="/company/contact" variant="outline" size="lg">
              Ask us directly
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="shell">
          <h2 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
            Everything on this site
          </h2>

          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {primaryNav.map((section) => (
              <div key={section.label}>
                <h3 className="font-display text-[15.5px] font-bold text-heading">
                  <Link href={section.href} className="transition-colors hover:text-accent">
                    {section.label}
                  </Link>
                </h3>
                <ul className="mt-3.5 space-y-2.5">
                  {section.columns
                    .flatMap((c) => c.links)
                    .map((link) => (
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
          </div>

          <div className="mt-11 border-t border-line pt-7">
            <h3 className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
              Policy
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {policyNav.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-accent"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/pricing"
                  className="text-[14px] text-muted transition-colors hover:text-accent"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="group inline-flex items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-accent"
                >
                  How it works <Arrow />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
