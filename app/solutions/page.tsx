import type { Metadata } from "next";
import { SiteStats, CtaBand, Block, FaqSection } from "@/components/sky9";
import { marketingFaqs } from "@/lib/pageFaqs/marketing";
import Link from "next/link";
import { solutionGroups, bySlug } from "@/lib/solutions";
import { modules, moduleGroups, contrast } from "@/lib/content";
import { Statement, SplitPassage } from "@/components/editorial";
import { Button, Arrow, TickCircle, CrossCircle } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import { Icon } from "@/components/icons";
import OnThisPage from "@/components/OnThisPage";
import FeatureMap from "@/components/FeatureMap";

export const metadata: Metadata = {
  title: "Solutions: HRMS, Payroll, Attendance & ESS",
  description:
    "The HRMagix HR SaaS platform: HRMS tools for companies, payroll with PF, ESI, PT and TDS, attendance, leave management, employee self-service, onboarding and HR analytics, twelve modules on one employee record.",
  keywords: [
    "HR SaaS platform",
    "HRMS tools for companies",
  ],
  alternates: { canonical: "/solutions" },
};

/**
 * The solutions hub.
 *
 * Two jobs. First, route a reader to the right one of eight pages. Second — and
 * this is why the page is long — hold the complete twelve-module reference, so
 * that everything HRMagix publishes about its product remains on the site even
 * though only eight of the twelve have a page of their own.
 */
export default function SolutionsHub() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="solutions-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
            aria-hidden="true"
          />
        </div>
        {/* Editorial glowing ambient wash */}
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[460px] w-[680px] rounded-full bg-glow/18 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-20 h-[340px] w-[500px] rounded-full bg-violet-400/8 blur-[120px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          </Reveal>
          <Reveal y={10} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Unified Modular Platform
            </span>
          </Reveal>
          <h1 className="display display-xl mt-5 max-w-[16ch] text-balance">
            Twelve modules. <strong>One employee record.</strong>
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end lg:gap-16">
            <p className="max-w-2xl text-[18px] leading-[1.65] text-body sm:text-[19.5px]">
              HRMagix is not a suite of products that share a login. Attendance, leave, payroll,
              performance and documents read from the same record, which is why a backdated leave
              approval changes the loss-of-pay register without anyone re-entering anything.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/company/contact-hrmagix">Book a demo</Button>
              <Button href="/how-setup-works" variant="outline">
                How Setup Works
              </Button>
            </div>
          </div>
        </div>
      </header>

      <SiteStats />

      {/* ---- The eight pages, one card section per group ---- */}
      {solutionGroups.map((group, gi) => (
        <Block
          key={group.title}
          eyebrow="Solutions"
          title={group.title}
          intro={group.blurb}
          ground={gi % 2 ? "sunken" : "canvas"}
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
            {group.slugs.map((slug, i) => {
              const s = bySlug(slug);
              if (!s) return null;
              return (
                <Reveal as="li" key={slug} delay={i * 60} y={14}>
                  <Link href={s.href} className="card card-hover group flex h-full flex-col p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="mt-5 flex items-center gap-2 font-display text-[18px] font-bold text-heading transition-colors group-hover:text-accent">
                      {s.name}
                      <Arrow />
                    </span>
                    <span className="mt-2 block text-[15px] leading-[1.65] text-muted">{s.standfirst}</span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Block>
      ))}

      {/* ---- Why integration is the argument, told against a photograph ---- */}
      <Block ground={solutionGroups.length % 2 ? "sunken" : "canvas"}>
        <div className="card p-6 sm:p-8">
          <SplitPassage
            eyebrow="Why one record matters"
            heading="Integration is not a sync. It is the absence of a second copy."
            body={[
              "Plenty of tools claim integration and deliver an overnight job. The distinction that matters operationally is whether a correction propagates, whether an approved leave application backdated on the 28th changes the loss-of-pay register before the cutoff, or whether somebody has to remember to reconcile it.",
              "In HRMagix the modules are not separate products joined by an API. They read the same ledger, so a backdated approval is not a message sent between systems. It is the same number, seen from a different page.",
            ]}
            slot="solutions-overview"
            caption="A working week seen across modules: the same record, read by whoever needs it."
            link={{ label: "Read the HRMS argument in full", href: "/solutions/hrms" }}
          />
        </div>
      </Block>

      <Statement tone="light" attribution="The problem this platform exists to solve">
        The average growing company runs four to six disconnected systems, and the answer to
        &ldquo;how many days was this person present in March&rdquo; depends on who you ask.
      </Statement>

      {/* ---- Before / after, as two cards ---- */}
      <Block
        eyebrow="Before and after"
        title="What actually changes"
        intro={
          <>
            Both columns describe the same five things. The difference is whether each is a person&rsquo;s
            responsibility to remember or a property of the system.
          </>
        }
        ground="canvas"
      >
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          <div className="card p-6">
            <h3 className="flex items-center gap-2.5 border-b border-line pb-3 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-subtle">
              {contrast.before.label}
            </h3>
            <ul className="mt-5 space-y-4">
              {contrast.before.points.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 50} y={10} className="flex gap-3.5">
                  <CrossCircle className="mt-0.5 text-subtle/70" />
                  <span className="text-[15.5px] leading-[1.65] text-subtle">{p}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="flex items-center gap-2.5 border-b border-line-accent pb-3 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
              {contrast.after.label}
            </h3>
            <ul className="mt-5 space-y-4">
              {contrast.after.points.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 50} y={10} className="flex gap-3.5">
                  <TickCircle className="mt-0.5 text-accent" />
                  <span className="text-[15.5px] leading-[1.65] text-body">{p}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Block>

      {/* ---- The complete twelve-module reference ---- */}
      <Block
        id="modules"
        eyebrow="Complete module reference"
        title="All twelve, and what each one does"
        intro="Eight of these have a page of their own. The remaining four, performance, recognition, meetings and succession, are described in full here rather than given a page each, because four near-identical pages would tell you less than one honest list."
        ground="sunken"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {moduleGroups
            .flatMap((group) => modules.filter((m) => m.group === group))
            .map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 50} y={12} className="card card-hover flex flex-col p-6">
                <span className="self-start rounded-full bg-surface-sunken px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-label ring-1 ring-line">
                  {m.group}
                </span>
                <h3 className="mt-4 font-display text-[17px] font-bold leading-snug text-heading">{m.name}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted">{m.desc}</p>
                <ul className="mt-4 space-y-2">
                  {m.features.map((feat) => (
                    <li key={feat} className="flex gap-3 text-[14.5px] leading-[1.6] text-subtle">
                      <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                      {feat}
                    </li>
                  ))}
                </ul>
                {m.statutory && (
                  <p className="mt-4 inline-flex items-start gap-2.5 rounded-lg bg-surface-sunken px-3.5 py-2.5 text-[13px] font-medium leading-snug text-accent-strong ring-1 ring-line">
                    <Icon name="scale" className="mt-px h-3.5 w-3.5 shrink-0" />
                    {m.statutory}
                  </p>
                )}
              </Reveal>
            ))}
        </div>
      </Block>

      {/* ---- The whole app, area by area, as its sidebar names it ---- */}
      <Block
        id="app-features"
        eyebrow="Inside the app"
        title="Every feature in the HRMagix app"
        intro={<>Seven areas, each listed exactly as the app&rsquo;s own navigation names it.</>}
        ground="canvas"
      >
        <FeatureMap dashboard everywhere />
      </Block>

      {/* ---- Custom closing block ---- */}
      <Block eyebrow="Where to start" title="Not sure which module you need first?" ground="sunken">
        <div className="card mx-auto grid max-w-5xl items-center gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
          <div>
            <p className="text-[16.5px] leading-[1.7] text-muted">
              The right starting point depends far more on what kind of company you are than on
              which feature list looks longest. Each industry page sets out an order and says why.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/industries">Find your starting point</Button>
              <Button href="/resources/calculator" variant="outline">
                Work out the cost
              </Button>
            </div>
          </div>
          <Photo
            slot="lifecycle-exit"
            ratio="4 / 3"
            sizes="(max-width: 1024px) 100vw, 384px"
            className="hidden lg:block"
          />
        </div>
      </Block>
      {/* ---- Questions ---- */}
      <FaqSection title="Questions about the platform" items={marketingFaqs["/solutions"]} ground="canvas" />

      <CtaBand title={<>See HRMagix run on <strong>your own payroll month</strong></>} />
    </>
  );
}
