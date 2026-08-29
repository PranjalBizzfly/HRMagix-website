import type { Metadata } from "next";
import Link from "next/link";
import { solutions, solutionGroups, bySlug } from "@/lib/solutions";
import { modules, moduleGroups, contrast } from "@/lib/content";
import { Band, Opening, Statement, SplitPassage } from "@/components/editorial";
import { Button, Arrow, TickCircle, CrossCircle } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions — HRMS, Payroll, Attendance & ESS",
  description:
    "The HRMagix platform: HRMS, payroll with PF, ESI, PT and TDS, attendance, leave management, employee self-service, onboarding and HR analytics — twelve modules on one employee record.",
  keywords: [
    "HRMS and payroll software",
    "HR platform for companies",
    "HR management system",
    "HRMS tools for companies",
    "HR automation software",
  ],
  alternates: { canonical: "/solutions" },
};

/**
 * The solutions hub.
 *
 * Two jobs. First, route a reader to the right one of eight pages. Second — and
 * this is why the page is long — hold the complete twelve-module reference, so
 * that everything HRMagix publishes about its product remains on the site even
 * though only eight of the twelve have a page of their own. The modules are set
 * as a written index, not as a wall of cards.
 */
export default function SolutionsHub() {
  return (
    <>
      {/* ---- Opener: a wide statement over a single band, deliberately unlike
             the asymmetric opener the eight detail pages use. ---- */}
      <header className="relative overflow-hidden wash pb-14 pt-[104px] sm:pb-20 sm:pt-[132px]">
        <div className="pointer-events-none absolute inset-0 dotted opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-25%] h-[380px] w-[720px] max-w-[130vw] -translate-x-1/2 rounded-full bg-glow/20 blur-[120px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          </Reveal>
          <h1 className="display display-xl mt-8 max-w-[16ch] text-balance">
            Twelve modules. <strong>One employee record.</strong>
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end lg:gap-16">
            <p className="max-w-2xl text-[18px] leading-[1.65] text-body sm:text-[19.5px]">
              HRMagix is not a suite of products that share a login. Attendance, leave, payroll,
              performance and documents read from the same record, which is why a backdated leave
              approval changes the loss-of-pay register without anyone re-entering anything.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/company/contact">Book a demo</Button>
              <Button href="/how-it-works" variant="outline">
                How setup works
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ---- The eight pages, as a two-column written index ---- */}
      <Band ground="surface" size="lg">
        {solutionGroups.map((group, gi) => (
          <div key={group.title} className={gi ? "mt-16 sm:mt-20" : ""}>
            <Reveal y={12} className="grid gap-4 border-b border-line-strong pb-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
              <h2 className="font-display text-[22px] font-bold tracking-[-0.02em] text-heading">
                {group.title}
              </h2>
              <p className="max-w-2xl text-[16px] leading-[1.7] text-muted">{group.blurb}</p>
            </Reveal>

            <ul className="grid gap-x-14 sm:grid-cols-2">
              {group.slugs.map((slug, i) => {
                const s = bySlug(slug);
                if (!s) return null;
                return (
                  <Reveal
                    as="li"
                    key={slug}
                    delay={i * 60}
                    y={14}
                    className="border-b border-line"
                  >
                    <Link href={s.href} className="group block py-7">
                      <span className="flex items-start gap-4">
                        <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-sunken text-accent ring-1 ring-line transition-colors group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                          <Icon name={s.icon} className="h-[18px] w-[18px]" />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-2 font-display text-[18px] font-bold text-heading transition-colors group-hover:text-accent">
                            {s.name}
                            <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                              <Arrow />
                            </span>
                          </span>
                          <span className="mt-2 block text-[15px] leading-[1.65] text-muted">
                            {s.standfirst}
                          </span>
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        ))}
      </Band>

      {/* ---- Why integration is the argument, told against a photograph ---- */}
      <Band ground="sunken" size="lg">
        <SplitPassage
          eyebrow="Why one record matters"
          heading="Integration is not a sync. It is the absence of a second copy."
          body={[
            "Plenty of tools claim integration and deliver an overnight job. The distinction that matters operationally is whether a correction propagates — whether an approved leave application backdated on the 28th changes the loss-of-pay register before the cutoff, or whether somebody has to remember to reconcile it.",
            "In HRMagix the modules are not separate products joined by an API. They read the same ledger, so a backdated approval is not a message sent between systems. It is the same number, seen from a different page.",
          ]}
          slot="solutions-overview"
          caption="A working week seen across modules: the same record, read by whoever needs it."
          link={{ label: "Read the HRMS argument in full", href: "/solutions/hrms" }}
        />
      </Band>

      <Statement tone="light" attribution="The problem this platform exists to solve">
        The average growing company runs four to six disconnected systems, and the answer to
        &ldquo;how many days was this person present in March&rdquo; depends on who you ask.
      </Statement>

      {/* ---- Before / after, as two ruled lists rather than two cards ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">What actually changes</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Both columns describe the same five things. The difference is whether each is a person&rsquo;s
            responsibility to remember or a property of the system.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
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

          <div>
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
      </Band>

      {/* ---- The complete twelve-module reference ---- */}
      <Band ground="raised" size="xl" id="modules">
        <Reveal y={12} className="max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
            Complete module reference
          </p>
          <h2 className="display display-md mt-5">All twelve, and what each one does</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Eight of these have a page of their own. The remaining four — performance, recognition,
            meetings and succession — are described in full here rather than given a page each,
            because four near-identical pages would tell you less than one honest list.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {moduleGroups.map((group) => {
            const inGroup = modules.filter((m) => m.group === group);
            if (!inGroup.length) return null;
            return (
              <section key={group}>
                <h3 className="border-b border-line-strong pb-3 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
                  {group}
                </h3>
                <div className="divide-y divide-line">
                  {inGroup.map((m, i) => (
                    <Reveal
                      key={m.slug}
                      delay={i * 50}
                      y={12}
                      className="grid gap-4 py-7 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-14"
                    >
                      <h4 className="font-display text-[17px] font-bold leading-snug text-heading">
                        {m.name}
                      </h4>
                      <div className="max-w-3xl">
                        <p className="text-[15.5px] leading-[1.7] text-muted">{m.desc}</p>
                        <ul className="mt-4 space-y-2">
                          {m.features.map((f) => (
                            <li key={f} className="flex gap-3 text-[14.5px] leading-[1.6] text-subtle">
                              <span
                                aria-hidden="true"
                                className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                              />
                              {f}
                            </li>
                          ))}
                        </ul>
                        {m.statutory && (
                          <p className="mt-4 inline-flex items-start gap-2.5 rounded-lg bg-surface-sunken px-3.5 py-2.5 text-[13px] font-medium leading-snug text-accent-strong ring-1 ring-line">
                            <Icon name="scale" className="mt-px h-3.5 w-3.5 shrink-0" />
                            {m.statutory}
                          </p>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Band>

      {/* ---- Onward, composed differently from the standard Onward block ---- */}
      <Band ground="surface" size="lg">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[16ch]">
              Not sure which module you need first?
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
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
            slot="analytics"
            ratio="4 / 3"
            sizes="(max-width: 1024px) 100vw, 384px"
            className="hidden lg:block"
          />
        </div>
      </Band>
    </>
  );
}
