import Link from "next/link";
import { Button, Pill } from "@/components/ui";
import { nav } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden wash pt-[100px]">
      <div className="pointer-events-none absolute inset-0 dotted opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[380px] w-[700px] max-w-[130vw] -translate-x-1/2 rounded-full bg-glow/25 blur-[110px]"
        aria-hidden="true"
      />
      <div className="shell relative py-20 text-center">
        <div className="flex justify-center">
          <Pill>
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Page not found
          </Pill>
        </div>
        <p className="display mt-8 text-[clamp(4rem,16vw,9rem)] font-bold text-gradient">404</p>
        <h1 className="display mt-2 text-[clamp(1.4rem,3.6vw,2.2rem)]">
          This page has <strong>moved on</strong>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15.5px] text-muted">
          The link you followed is not part of the HRMagix site. Try one of these instead.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Back home
          </Button>
          <Button href="/contact" variant="outline" size="lg" arrow={false}>
            Contact us
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13.5px] text-subtle">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="transition-colors hover:text-accent-strong">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
