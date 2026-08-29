import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  site,
  manifesto,
  indianCompliance,
  pillars,
  stats,
  assurances,
  contrast,
} from "@/lib/content";
import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { Band, Opening, Statement, Onward } from "@/components/editorial";
import { Button, Arrow, Pill, TickCircle } from "@/components/ui";
import { Reveal, Words, Counter } from "@/components/motion";
import { Icon } from "@/components/icons";
import Photo from "@/components/Photo";
import TestimonialDeck from "@/components/TestimonialDeck";
import OnThisPage from "@/components/OnThisPage";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "HRMagix — HRMS & Payroll Software for India",
  description:
    "HRMS and payroll software built for Indian companies. Attendance, leave, payroll with PF, ESI, PT and TDS, employee self-service and HR analytics — twelve modules on one employee record.",
  keywords: [
    "HRMS software",
    "payroll software",
    "HR software",
    "HRMS and payroll software",
    "employee management system",
    "HR management system",
    "HR platform for companies",
    "payroll management system",
    "cloud HR software",
    "best HRMS software",
  ],
  alternates: { canonical: "/" },
};

/**
 * The homepage.
 *
 * It has one job the rest of the site does not: establish, in about four
 * seconds, that this is a serious Indian payroll product rather than a generic
 * SaaS template. Two decisions carry most of that weight.
 *
 * First, the hero pairs a real photograph of an Indian office with the product
 * itself — and the product image here is the ONLY dashboard on the entire
 * website. Every other page describes the product in words and shows the people
 * who use it.
 *
 * Second, the compliance section is placed third, above pricing, testimonials
 * and anything persuasive, because EPF, ESI, PT and TDS are the actual reason a
 * company in India changes payroll systems.
 */
export default function HomePage() {
  const featured = ["payroll", "attendance", "ess", "hr-analytics"]
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter(Boolean) as typeof solutions;

  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      {/* ================= 1. Hero ================= */}
      <header className="relative overflow-hidden wash pb-16 pt-[100px] sm:pb-20 sm:pt-[128px] lg:pb-24">
        <div className="pointer-events-none absolute inset-0 dotted opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 top-[-15%] h-[460px] w-[680px] rounded-full bg-glow/20 blur-[130px]"
          aria-hidden="true"
        />

        <div className="shell relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-14">
            <div>
              <Reveal y={10}>
                <Pill>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {site.hero.eyebrow}
                </Pill>
              </Reveal>

              <h1 className="display display-xl mt-7 max-w-[15ch] text-balance">
                <Words as="span" text="Modern people operations for" />{" "}
                <Words as="span" text="India's growing teams." className="font-bold" delay={160} />
              </h1>

              <Reveal delay={280} className="mt-8 max-w-xl">
                <p className="text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                  {site.hero.lede}
                </p>
              </Reveal>

              <Reveal delay={360} className="mt-9 flex flex-wrap gap-3">
                <Button href="/company/contact" size="lg">
                  Book a demo
                </Button>
                <Button href="/solutions" variant="outline" size="lg">
                  See the platform
                </Button>
              </Reveal>

              <Reveal delay={440} className="mt-10">
                <dl className="flex flex-wrap gap-x-9 gap-y-5 border-t border-line pt-7">
                  {site.hero.pillars.map(([value, label]) => (
                    <div key={label}>
                      <dt className="sr-only">{label}</dt>
                      <dd>
                        <span className="block font-display text-[16px] font-bold text-heading">
                          {value}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-muted">{label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* The photograph and the one dashboard, deliberately overlapped so
                the product is shown in the context of the people using it
                rather than floating on a gradient. */}
            <Reveal delay={200} y={24} className="relative">
              <Photo
                slot="home-hero"
                ratio="4 / 3"
                sizes="(max-width: 1024px) 100vw, 580px"
                rounded="rounded-[24px]"
                className="shadow-lift"
              />

              <figure className="relative z-10 -mt-16 ml-4 mr-[-4px] sm:-mt-24 sm:ml-10 lg:-mt-20 lg:ml-16 lg:mr-[-40px]">
                <div className="overflow-hidden rounded-[16px] bg-surface p-1.5 shadow-float ring-1 ring-line">
                  <Image
                    src="/media/hero-workspace.jpg"
                    alt="The HRMagix dashboard showing live employee attendance, the weekly attendance trend, Q3 OKR progress and a recent punch-in roster"
                    width={1376}
                    height={768}
                    priority
                    sizes="(max-width: 1024px) 92vw, 520px"
                    className="h-auto w-full rounded-[11px]"
                  />
                </div>
                <figcaption className="mt-3 pl-1 text-[12.5px] text-subtle">
                  The Overview workspace. This is the only product screen on this website —
                  everywhere else, the platform is described in words.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ================= 2. Trust band ================= */}
      <section className="border-y border-line bg-surface py-11 sm:py-14">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
            <p className="max-w-2xl text-[15.5px] leading-[1.65] text-muted">
              {site.proof.trustline}
            </p>
            <dl className="flex flex-wrap gap-x-10 gap-y-6">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 70} y={10}>
                  <dd className="font-display text-[30px] font-bold leading-none tracking-[-0.03em] text-heading tabular-nums sm:text-[34px]">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-2 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-subtle">
                    {s.label}
                  </dt>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ================= 3. Manifesto ================= */}
      <Band ground="surface" size="xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <Reveal y={12}>
              <h2 className="display display-lg max-w-[20ch] text-balance">
                {manifesto.headline}
              </h2>
            </Reveal>
            <Reveal delay={140} className="mt-8">
              <p className="max-w-2xl text-[18px] leading-[1.62] text-body sm:text-[19.5px]">
                {manifesto.lead}
              </p>
            </Reveal>
            {manifesto.paragraphs.map((p, i) => (
              <Reveal key={i} delay={200 + i * 70}>
                <p className="mt-6 max-w-2xl text-[16.5px] leading-[1.72] text-muted">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180} y={22} className="lg:pt-4">
            <figure>
              <Photo
                slot="home-manifesto"
                ratio="4 / 5"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
              <figcaption className="mt-4 max-w-sm text-[13px] leading-relaxed text-subtle">
                Four people, four folders, one figure that has to agree. This is what fragmentation
                looks like before it becomes a payroll deadline.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* The three answers, as ruled columns rather than cards. */}
        <div className="mt-16 grid gap-x-12 gap-y-9 border-t border-line pt-12 sm:grid-cols-3">
          {manifesto.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} y={12}>
              <h3 className="font-display text-[17px] font-bold leading-snug text-heading">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.68] text-muted">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ================= 4. Statutory compliance ================= */}
      <Band ground="sunken" size="xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <Reveal y={12}>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
                {indianCompliance.eyebrow}
              </p>
              <h2 className="display display-md mt-5">{indianCompliance.title}</h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-muted">{indianCompliance.sub}</p>
            </Reveal>
            <Reveal delay={160} y={20} className="mt-9">
              <Photo
                slot="home-compliance"
                ratio="4 / 3"
                sizes="(max-width: 1024px) 100vw, 352px"
              />
            </Reveal>
            <Reveal delay={220}>
              <Link
                href="/solutions/payroll"
                className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
              >
                How a payroll month actually runs <Arrow />
              </Link>
            </Reveal>
          </div>

          <dl className="border-t border-line-strong">
            {indianCompliance.aspects.map((a, i) => (
              <Reveal
                key={a.key}
                delay={i * 55}
                y={12}
                className="border-b border-line py-7"
              >
                <dt className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-[17px] font-bold leading-snug text-heading">
                    {a.title}
                  </span>
                  <span className="rounded-full bg-surface-raised px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-strong">
                    {a.badge}
                  </span>
                </dt>
                <dd className="mt-3 max-w-3xl text-[15.5px] leading-[1.7] text-muted">
                  {a.details}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Band>

      {/* ================= 5. The three pillars ================= */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">Three things the platform is actually for</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Twelve modules is an implementation detail. These are the three outcomes they exist to
            produce.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {pillars.map((p, i) => (
            <Reveal
              key={p.key}
              delay={i * 70}
              y={14}
              className="grid gap-4 py-8 lg:grid-cols-[minmax(0,3rem)_minmax(0,16rem)_minmax(0,1fr)] lg:items-start lg:gap-10"
            >
              <span
                aria-hidden="true"
                className="font-display text-[30px] font-light leading-none text-line-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[19px] font-bold leading-snug text-heading">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-[14px] font-medium text-accent">{p.tagline}</p>
              </div>
              <div>
                <p className="max-w-2xl text-[15.5px] leading-[1.7] text-muted">{p.copy}</p>
                <p className="mt-3 text-[13.5px] text-subtle">
                  Modules: {p.includes.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ================= 6. Featured solutions ================= */}
      {/* ---- What the platform is, stated plainly ---- */}
      <Band ground="sunken" size="lg">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">What HRMagix is, in plain terms</h2>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
              Written for someone comparing options rather than someone already sold. If a claim
              here is not something the platform does, it should not be here.
            </p>
          </Reveal>

          <div className="min-w-0">
            <section className="border-t border-line-strong pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                An HRMS and payroll software in one platform
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                HRMagix is an HR management system built around a single employee record. Twelve
                modules read from it — attendance and shifts, leaves and holidays, payroll,
                objectives and OKRs, KRA and 9-box, PIPs and growth, recognition, 1-on-1s,
                onboarding, documents, succession and analytics.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                The practical consequence is that nothing is re-keyed. An approved leave day is
                already a payroll input; an attendance correction is already reflected in the
                month's paid days; a promotion entered once changes the reporting line, the
                approval routing and the salary in the same act.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Built for Indian statutory reality
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Payroll here means EPF, ESI, professional tax by state, and TDS under Section 192,
                derived from the salary structure on the record rather than entered by hand. The
                run produces the payslips, the statutory returns and the bank file from the same
                set of figures, which is why the return and the ledger cannot disagree.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Employees see the other half of the same thing: payslips, Form 16, leave balances,
                investment declarations and a comparison between the old and new tax regimes on
                their own numbers.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Cloud software, and the phone is the primary device
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Being online payroll software rather than an installed package means there is
                nothing to deploy and no server to maintain. That matters less for the
                office than for everyone else: field engineers, retail staff, drivers and shop-floor
                operators frequently have no company laptop and no work email address, and they are
                often the majority of the workforce.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Attendance capture follows the same logic. A geo-fenced mobile punch, a shared
                kiosk at a factory gate and an existing biometric reader all write to one ledger,
                so mixing methods across locations does not mean maintaining separate records.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Who it is for
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Companies where HR administration has outgrown spreadsheets but has not yet earned
                a department — startups formalising their first policies, small businesses where
                HR is someone's second job, mid-market groups that are several legal entities on
                paper, manufacturers paying staff and workmen under different logic, and services
                firms whose people are rarely in one building.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                What they have in common is not size. It is that the cost of getting a month wrong
                has started to exceed the cost of running it properly.
              </p>
            </section>
          </div>
        </div>
      </Band>

      <Band ground="raised" size="lg">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <Reveal y={12}>
            <h2 className="display display-md max-w-[16ch]">Start where it hurts most</h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              Four of the eight solution pages, chosen because they are where companies switching to
              HRMagix usually begin.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
            >
              All eight, plus the twelve modules <Arrow />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-x-14 sm:grid-cols-2">
          {featured.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60} y={14} className="border-t border-line">
              <Link href={s.href} className="group block py-7">
                <span className="flex items-center gap-2 font-display text-[19px] font-bold text-heading transition-colors group-hover:text-accent">
                  {s.name}
                  <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </span>
                <span className="mt-2.5 block max-w-lg text-[15px] leading-[1.65] text-muted">
                  {s.standfirst}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Band>

      {/* ================= 7. Contrast ================= */}
      <Band ground="surface" size="lg">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
          <Reveal y={12} className="lg:col-span-2 max-w-2xl">
            <h2 className="display display-md">The same five things, twice</h2>
          </Reveal>
          <div>
            <h3 className="border-b border-line pb-3 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-subtle">
              {contrast.before.label}
            </h3>
            <ul className="mt-5 space-y-4">
              {contrast.before.points.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 45} y={10}>
                  <span className="text-[15.5px] leading-[1.65] text-subtle line-through decoration-line-strong decoration-1">
                    {p}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="border-b border-line-accent pb-3 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
              {contrast.after.label}
            </h3>
            <ul className="mt-5 space-y-4">
              {contrast.after.points.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 45} y={10} className="flex gap-3.5">
                  <TickCircle className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-[15.5px] leading-[1.65] text-body">{p}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      <Statement tone="dark" attribution="Why companies actually switch">
        A single formula error in a spreadsheet becomes a delayed salary credit, a statutory
        notice, and a conversation nobody wanted to have.
      </Statement>

      {/* ================= 8. Industries ================= */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">Six kinds of company, six different first moves</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            The statutory rules are identical. What changes is where the difficulty sits.
          </p>
        </Reveal>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={i * 45} y={10}>
              <Link
                href={ind.href}
                className="group grid gap-2 py-5 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_auto] lg:items-baseline lg:gap-8"
              >
                <span className="font-display text-[17px] font-bold text-heading transition-colors group-hover:text-accent">
                  {ind.name}
                </span>
                <span className="text-[15px] leading-[1.6] text-muted">{ind.audience}</span>
                <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Band>

      {/* ================= 9. Customer voices ================= */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">
            From the people who run the cutoff
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            HR and finance leaders describing what changed, in their own words.
          </p>
        </Reveal>
        <div className="mt-12">
          <TestimonialDeck />
        </div>
      </Band>

      {/* ================= 10. Assurances ================= */}
      <section className="border-y border-line bg-surface py-12 sm:py-14">
        <div className="shell">
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 60} y={10} className="flex items-start gap-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-sunken text-accent ring-1 ring-line">
                  <Icon
                    name={(["scale", "shield", "lock", "layers"] as const)[i] ?? "shield"}
                    className="h-4 w-4"
                  />
                </span>
                <span>
                  <span className="block font-display text-[15.5px] font-bold text-heading">
                    {a.title}
                  </span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">
                    {a.copy}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= 11. Questions =================
          Titles only, linking through to where each is answered. Every answer
          on this site lives in exactly one place, and this is not it. */}
      <Band ground="surface" size="xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <Reveal y={12}>
              <h2 className="display display-md">The questions that decide it</h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-muted">
                Biometric integration, PF and ESI challans, multi-state Professional Tax, and moving
                years of history out of Excel. Each is answered in full on the question index.
              </p>
              <Link
                href="/resources/faqs"
                className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
              >
                Read every answer <Arrow />
              </Link>
            </Reveal>
          </div>

          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => (
              <Reveal as="li" key={f.q} delay={i * 40} y={10}>
                <Link
                  href="/resources/faqs"
                  className="group flex items-start justify-between gap-6 py-5"
                >
                  <span className="font-display text-[16px] font-semibold leading-snug text-heading transition-colors group-hover:text-accent sm:text-[17px]">
                    {f.q}
                  </span>
                  <span className="mt-1 shrink-0 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </Band>

      <Onward
        title="Three good next steps"
        links={[
          {
            label: "Work out what it costs",
            href: "/resources/calculator",
            note: "Salary breakup, statutory contributions and plan cost, calculated live.",
          },
          {
            label: "See how setup runs",
            href: "/how-it-works",
            note: "Three steps, two to three days, and a dry-run payroll before the first cutoff.",
          },
          {
            label: "Talk to Pune",
            href: "/company/contact",
            note: "A demo against your own policies rather than a generic walkthrough.",
          },
        ]}
      />
    </>
  );
}
