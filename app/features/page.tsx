import type { Metadata } from "next";
import { SiteStats, Block } from "@/components/sky9";
import Link from "next/link";
import { modules, moduleGroups } from "@/lib/content";
import { Onward } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Icon } from "@/components/icons";
import FeatureMap from "@/components/FeatureMap";

export const metadata: Metadata = {
  title: "Features — All Twelve HRMagix Modules",
  description:
    "Every HRMagix feature: attendance and shifts, leaves and holidays, payroll, OKRs, KRA and 9-box, PIPs, recognition, 1-on-1s, onboarding, documents, succession and analytics.",
  alternates: { canonical: "/features" },
};

/**
 * The feature hub: the twelve published modules by group, each linking to its
 * own page, then the app's full area-by-area feature list.
 */
export default function FeaturesHub() {
  return (
    <>
      <header className="page-hero border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features" }]} />
          </Reveal>
          <h1 className="display display-xl mt-8 max-w-[16ch] text-balance">
            Every HRMagix feature, <strong>module by module</strong>
          </h1>
          <p className="mt-6 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            Every feature HRMagix publishes, grouped the way the platform groups them. Each one
            has its own page with what it does, where it sits in the app and what to read next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/company/contact" size="lg">
              Book a demo
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See pricing
            </Button>
          </div>
        </div>
      </header>

      <SiteStats />

      {/* All twelve in one grid, ordered by group; each card carries its group. */}
      <Block
        eyebrow={`${modules.length} modules`}
        title="Every module, grouped the way the platform groups them"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
          {moduleGroups
            .flatMap((g) => modules.filter((m) => m.group === g))
            .map((m, i) => (
              <Reveal as="li" key={m.slug} delay={(i % 4) * 60} y={14}>
                <Link href={`/features/${m.slug}`} className="card card-hover group flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent">
                      <Icon name={m.icon} className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-surface-sunken px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-label ring-1 ring-line">
                      {m.group}
                    </span>
                  </div>
                  <span className="mt-5 font-display text-[18px] font-bold text-heading group-hover:text-accent">
                    {m.name}
                  </span>
                  <span className="mt-2 flex-1 text-[14.5px] leading-[1.65] text-muted">{m.desc}</span>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent">
                    Explore {m.name} <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
        </ul>
      </Block>

      <Block
        eyebrow="Inside the app"
        title="Every feature, as the app names it"
        ground="sunken"
      >
        <FeatureMap dashboard everywhere />
      </Block>

      <Onward
        links={[
          { label: "Solutions", href: "/solutions", note: "The same features, organised around the problem they solve." },
          { label: "Industries", href: "/industries", note: "Which features matter first, by kind of company." },
          { label: "Pricing", href: "/pricing", note: "Which plan switches on which modules." },
        ]}
      />
    </>
  );
}
