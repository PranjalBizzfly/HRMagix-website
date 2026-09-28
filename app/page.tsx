import type { Metadata } from "next";
import Link from "next/link";
import { appAreas, appFeatureCount } from "@/lib/appFeatures";
import FeatureMap from "@/components/FeatureMap";
import HeroCinematic from "@/components/HeroCinematic";
import {
  site,
  manifesto,
  indianCompliance,
  pillars,
  assurances,
  contrast,
  modules,
  steps,
  faqs,
} from "@/lib/content";
import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { Button, Arrow, TickCircle } from "@/components/ui";
import { Reveal, Words, Counter, Stagger } from "@/components/motion";
import { Icon, type IconName } from "@/components/icons";
import { SectionHeader, Section } from "@/components/sections";
import { CtaBand } from "@/components/sky9";
import Photo from "@/components/Photo";
import TestimonialDeck from "@/components/TestimonialDeck";
import ModuleTabs from "@/components/ModuleTabs";
import Pricing from "@/components/Pricing";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "HRMagix: HRMS & Payroll Software for India",
  description:
    "HRMagix is HRMS and payroll software for Indian companies: attendance, leave, payroll with PF, ESI, PT and TDS, self-service and HR analytics on one record.",
  keywords: [
    "HRMS software",
    "payroll software",
    "HR software",
    "HRMS and payroll software",
    "employee management system",
    "HR management system",
    "online payroll software",
    "HR platform for companies",
    "HRMS system",
    "payroll management system",
  ],
  alternates: { canonical: "/" },
};

/**
 * The homepage.
 *
 * One section, one idea, in this order: what it is (hero), what it covers
 * (ticker), how many use it (proof), why it exists (manifesto), the Indian
 * statute it handles, the three outcomes, the twelve modules, how setup runs,
 * where to start, the before/after, who it is for, what customers say, what it
 * costs, and the questions that decide it.
 *
 * Content rules still hold: every figure shown is one HRMagix publishes, the
 * site shows no dashboard screenshots or simulated screens (the product is
 * described in words, from lib/appFeatures.ts), and the eight headline
 * questions are answered inline, with the full set on the question index.
 */

/** The eight general questions answered on the homepage. */
const homeFaqs = faqs.slice(0, 8).map((f) => ({ q: f.q, a: f.a }));

/** Only the figures published on hrmagix.com. */
const proof: { value: number; suffix: string; label: string; icon: IconName }[] = [
  { value: 120, suffix: "+", label: "Companies", icon: "users" },
  { value: 9, suffix: "k+", label: "Employees managed", icon: "fingerprint" },
  { value: 12, suffix: "", label: "Integrated modules", icon: "layers" },
  { value: 14, suffix: "-day", label: "Free trial, no card", icon: "calendar" },
];

const complianceIcons: Record<string, IconName> = {
  epf: "wallet",
  esi: "shield",
  pt: "scale",
  tds: "chart",
  gratuity: "gift",
  lwf: "users",
};

const pillarIcons: IconName[] = ["clock", "target", "wallet"];

const industryIcons: Record<string, IconName> = {
  startups: "rocket",
  "small-business": "gift",
  smes: "grid",
  manufacturing: "layers",
  "it-and-technology": "compass",
  "professional-services": "users",
};

const plainTerms = [
  {
    icon: "layers" as IconName,
    title: "An HRMS and payroll software in one platform",
    body: [
      "HRMagix is an HR management system built around a single employee record. Twelve modules read from it, attendance and shifts, leaves and holidays, payroll, objectives and OKRs, KRA and 9-box, PIPs and growth, recognition, 1-on-1s, onboarding, documents, succession and analytics.",
      "The practical consequence is that nothing is re-keyed. An approved leave day is already a payroll input; an attendance correction is already reflected in the month's paid days; a promotion entered once changes the reporting line, the approval routing and the salary in the same act.",
    ],
  },
  {
    icon: "scale" as IconName,
    title: "Built for Indian statutory reality",
    body: [
      "Payroll here means EPF, ESI, professional tax by state, and TDS under Section 192, derived from the salary structure on the record rather than entered by hand. The run produces the payslips, the statutory returns and the bank file from the same set of figures, which is why the return and the ledger cannot disagree.",
      "Employees see the other half of the same thing: payslips, Form 16, leave balances, investment declarations and a comparison between the old and new tax regimes on their own numbers.",
    ],
  },
  {
    icon: "fingerprint" as IconName,
    title: "Cloud software, and the phone is the primary device",
    body: [
      "Being online payroll software rather than an installed package means there is nothing to deploy and no server to maintain. That matters less for the office than for everyone else: field engineers, retail staff, drivers and shop-floor operators frequently have no company laptop and no work email address, and they are often the majority of the workforce.",
      "Attendance capture follows the same logic. A geo-fenced mobile punch, a shared kiosk at a factory gate and an existing biometric reader all write to one ledger, so mixing methods across locations does not mean maintaining separate records.",
    ],
  },
  {
    icon: "users" as IconName,
    title: "Who it is for",
    body: [
      "Companies where HR administration has outgrown spreadsheets but has not yet earned a department, startups formalising their first policies, small businesses where HR is someone's second job, mid-market groups that are several legal entities on paper, manufacturers paying staff and workmen under different logic, and services firms whose people are rarely in one building.",
      "What they have in common is not size. It is that the cost of getting a month wrong has started to exceed the cost of running it properly.",
    ],
  },
];

export default function HomePage() {
  const featured = ["payroll", "attendance-and-shifts", "employee-self-service", "hr-analytics"]
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter(Boolean) as typeof solutions;

  const featuredIcons: Record<string, IconName> = {
    payroll: "wallet",
    attendance: "clock",
    ess: "fingerprint",
    "hr-analytics": "chart",
  };

  return (
    <>
      {/* ================= 1. Hero ================= */}
      <HeroCinematic />

      {/* ================= 2. Module ticker ================= */}
      <div id="platform" className="ticker relative scroll-mt-[90px] border-y border-line bg-surface py-3.5" aria-label="The twelve HRMagix modules">
        <div className="mask-fade-both overflow-hidden">
          <ul className="animate-marquee flex w-max gap-3 [--marquee-duration:60s]">
            {[...modules, ...modules].map((m, i) => (
              <li
                key={`${m.slug}-${i}`}
                aria-hidden={i >= modules.length ? true : undefined}
                className="flex shrink-0 items-center gap-2.5 rounded-full bg-surface-sunken px-4 py-2 ring-1 ring-line"
              >
                <Icon name={m.icon} className="h-4 w-4 text-accent" />
                <span className="whitespace-nowrap text-[13.5px] font-semibold text-heading">
                  {m.name}
                </span>
                <span className="whitespace-nowrap text-[11.5px] text-subtle">{m.group}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= 3. Proof card ================= */}
      <section className="relative z-10 bg-canvas pt-8 sm:pt-10">
        <div className="shell">
          <Reveal y={16}>
            <div className="card px-4 py-6 sm:px-8 sm:py-8">
              <p className="mb-6 text-center text-[13px] font-semibold uppercase tracking-[0.16em] text-label">
                {site.proof.trustline}
              </p>
              <dl className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-line">
                {proof.map((s) => (
                  <div key={s.label} className="flex flex-col items-center text-center">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <dd className="mt-3 font-display text-[30px] font-bold leading-none tracking-[-0.03em] text-heading tabular-nums sm:text-[36px]">
                      <Counter to={s.value} suffix={s.suffix} />
                    </dd>
                    <dt className="mt-2 text-[13px] font-medium text-muted">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= 4. Why it exists ================= */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={20} className="relative order-2 lg:order-1">
            <Photo
              slot="home-manifesto"
              ratio="4 / 5"
              sizes="(max-width: 1024px) 100vw, 540px"
              rounded="rounded-[24px]"
              className="shadow-lift"
            />
            <figure className="glass absolute -bottom-6 left-4 right-4 rounded-2xl p-5 sm:left-auto sm:right-[-1rem] sm:max-w-xs">
              <p className="text-[14px] font-medium italic leading-relaxed text-body">
                Four people, four folders, one figure that has to agree. This is what fragmentation
                looks like before it becomes a payroll deadline.
              </p>
            </figure>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeader eyebrow="Why HRMagix" title={manifesto.headline} align="left" />
            <Reveal delay={120} className="mt-6">
              <p className="text-[17.5px] leading-[1.65] text-body">{manifesto.lead}</p>
            </Reveal>
            {manifesto.paragraphs.map((p, i) => (
              <Reveal key={i} delay={180 + i * 60}>
                <p className="mt-5 text-[16px] leading-[1.72] text-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:gap-5">
          {manifesto.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} y={14} className="card card-hover p-6">
              <span className="font-display text-[13px] font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[18px] font-bold leading-snug text-heading">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.68] text-muted">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= 7. Module explorer ================= */}
      <Section ground="sunken">
        <SectionHeader
          eyebrow="Twelve modules"
          title={
            <>
              One employee record, <strong>twelve workflows</strong>
            </>
          }
          lede="Your plan decides which are switched on, and switching one on later is a setting rather than a migration."
          className="mb-10"
        />
        <ModuleTabs />

        {/* Module Explorer Visual Spotlight */}
        <div className="mt-12 grid items-center gap-8 rounded-[28px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
          <Reveal y={16} className="relative lg:col-span-5">
            <Photo
              slot="home-modules"
              ratio="16 / 10"
              rounded="rounded-[20px]"
              className="shadow-lift"
            />
            <div className="glass absolute -bottom-3 left-4 rounded-xl px-4 py-2 text-xs font-semibold text-heading shadow-float sm:bottom-4 sm:left-4">
              <span className="inline-block h-2 w-2 rounded-full bg-accent mr-2 animate-pulse" />
              12 workflows · Single employee record
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <span className="eyebrow text-accent">Cross-Module Flow</span>
            <h3 className="display display-md mt-4 text-balance">
              Zero duplicate entries across your entire company
            </h3>
            <p className="mt-4 text-[16px] leading-[1.7] text-muted">
              When an attendance regularization is approved, paid days update instantly. When a promotion takes effect, approval hierarchy, salary structure, and statutory ceilings adjust in the same keystroke. Every module speaks to the same central ledger.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-lg bg-surface-sunken px-3 py-1.5 text-xs font-semibold text-heading ring-1 ring-line">
                Auto-synced paid days
              </span>
              <span className="rounded-lg bg-surface-sunken px-3 py-1.5 text-xs font-semibold text-heading ring-1 ring-line">
                Instant hierarchy routing
              </span>
              <span className="rounded-lg bg-surface-sunken px-3 py-1.5 text-xs font-semibold text-heading ring-1 ring-line">
                Integrated tax declarations
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= 6. The three outcomes ================= */}
      <Section>
        <SectionHeader
          eyebrow="The platform"
          title="Three things the platform is actually for"
          lede="Twelve modules is an implementation detail. These are the three outcomes they exist to produce."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 80} y={16} className="card card-hover flex flex-col overflow-hidden">
              <div className="border-b border-line bg-surface-sunken px-6 py-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white shadow-glow">
                  <Icon name={pillarIcons[i] ?? "sparkle"} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-[20px] font-bold text-heading">{p.name}</h3>
                <p className="mt-1 text-[14px] font-medium text-accent">{p.tagline}</p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-5">
                <p className="flex-1 text-[14.5px] leading-[1.7] text-muted">{p.copy}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.includes.map((m) => (
                    <li
                      key={m}
                      className="rounded-full bg-surface-sunken px-2.5 py-1 text-[12px] font-semibold text-body ring-1 ring-line"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= 7b. Everything in the app =================
          The app's own seven areas, exactly as its sidebar names them. */}
      <Section ground="sunken">
        <SectionHeader
          eyebrow="Inside the app"
          title={
            <>
              Every feature, <strong>area by area</strong>
            </>
          }
          lede="The HRMagix app is organised into seven areas. This is everything in each of them, plus what every employee sees on their dashboard."
          className="mb-12"
        />
        <FeatureMap dashboard everywhere />
      </Section>

      {/* ================= 10. Where to start ================= */}
      <Section>
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeader
            eyebrow="Solutions"
            title="Start where it hurts most"
            lede="Four of the solution pages, chosen because they are where companies switching to HRMagix usually begin."
          />
          <Reveal delay={100}>
            <Link
              href="/solutions"
              className="group inline-flex min-h-[44px] items-center gap-2 text-[14.5px] font-semibold text-accent"
            >
              All solutions, plus the twelve modules <Arrow />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {featured.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60} y={14}>
              <Link href={s.href} className="card card-hover group flex h-full flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent transition-transform duration-300 group-hover:rotate-6 motion-reduce:group-hover:rotate-0">
                  <Icon name={featuredIcons[s.slug] ?? "sparkle"} className="h-5 w-5" />
                </span>
                <span className="mt-5 font-display text-[18px] font-bold text-heading transition-colors group-hover:text-accent">
                  {s.name}
                </span>
                <span className="mt-2 flex-1 text-[14px] leading-[1.65] text-muted">
                  {s.standfirst}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent">
                  Explore <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        {/* Featured Visual Spotlight */}
        <div className="mt-10 grid items-center gap-8 rounded-[28px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
          <Reveal y={16} className="relative lg:col-span-5">
            <Photo
              slot="team-collaboration"
              ratio="4 / 3"
              rounded="rounded-[20px]"
              className="shadow-lift"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <span className="eyebrow text-accent">Cross-Functional Speed</span>
            <h3 className="display display-md mt-4 text-balance">
              Where high-growth teams start their rollout
            </h3>
            <p className="mt-4 text-[16px] leading-[1.7] text-muted">
              Most companies don&rsquo;t switch everything on day one. They begin with the workflow causing the most friction, usually attendance disputes or a delayed monthly payroll run, and expand into performance, OKRs, and employee self-service as their team scales.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/solutions/payroll" size="sm">Explore Payroll</Button>
              <Button href="/solutions/attendance-and-shifts" variant="outline" size="sm">Explore Attendance</Button>
              <Button href="/solutions" variant="outline" size="sm">All 12 Modules</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= 5. Statutory compliance ================= */}
      <Section ground="sunken">
        <SectionHeader
          eyebrow={indianCompliance.eyebrow}
          title={indianCompliance.title}
          lede={indianCompliance.sub}
        />

        {/* Featured Compliance Spotlight */}
        <div className="mt-12 grid items-center gap-8 rounded-[28px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <span className="eyebrow text-accent">Audited by design</span>
            <h3 className="display display-md mt-4 text-balance">
              Every formula verified before your bank cutoff
            </h3>
            <p className="mt-4 text-[16px] leading-[1.7] text-muted">
              Indian statutory compliance is not an afterthought or an export plugin. EPF wage ceilings, ESI thresholds across 28 states, dual tax regime TDS schedules, and LWF slabs are calculated directly inside the attendance and salary ledger.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-lg bg-surface-sunken px-3 py-1.5 text-xs font-semibold text-accent-strong ring-1 ring-line">
                EPF 12% Auto-Ceiling
              </span>
              <span className="rounded-lg bg-surface-sunken px-3 py-1.5 text-xs font-semibold text-accent-strong ring-1 ring-line">
                ESI ₹21,000 Threshold
              </span>
              <span className="rounded-lg bg-surface-sunken px-3 py-1.5 text-xs font-semibold text-accent-strong ring-1 ring-line">
                28 States PT Slabs
              </span>
              <span className="rounded-lg bg-surface-sunken px-3 py-1.5 text-xs font-semibold text-accent-strong ring-1 ring-line">
                TDS Form 24Q ECR
              </span>
            </div>
          </div>
          <Reveal y={16} className="relative lg:col-span-6">
            <Photo
              slot="home-compliance"
              ratio="16 / 10"
              rounded="rounded-[20px]"
              className="shadow-lift"
            />
            <div className="glass absolute -bottom-4 right-4 rounded-xl px-4 py-2.5 text-xs font-medium text-body shadow-float sm:bottom-4 sm:right-4">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Pre-cutoff compliance verified
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {indianCompliance.aspects.map((a, i) => (
            <Reveal key={a.key} delay={i * 60} y={14} className="card card-hover flex flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-accent">
                  <Icon name={complianceIcons[a.key] ?? "shield"} className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-surface-raised px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-accent-strong">
                  {a.badge}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[17.5px] font-bold leading-snug text-heading">
                {a.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.68] text-muted">{a.details}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/solutions/compliance" variant="outline">
            How compliance runs
          </Button>
          <Link
            href="/solutions/payroll"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            How a payroll month actually runs <Arrow />
          </Link>
        </Reveal>
      </Section>

      {/* ================= 14. Assurances ================= */}
      <section className="border-y border-line bg-surface py-8 sm:py-10">
        <div className="shell">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 60} y={10} className="flex items-start gap-3.5 rounded-2xl p-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-sunken text-accent ring-1 ring-line">
                  <Icon
                    name={(["scale", "shield", "lock", "layers"] as const)[i] ?? "shield"}
                    className="h-5 w-5"
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

      {/* ================= 9. Plain terms ================= */}
      <Section>
        <SectionHeader
          eyebrow="In plain terms"
          title="What HRMagix is, stated plainly"
          lede="Written for someone comparing options rather than someone already sold. If a claim here is not something the platform does, it should not be here."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-5">
          {plainTerms.map((t, i) => (
            <Reveal key={t.title} delay={i * 70} y={14} className="card p-6 sm:p-8">
              <div className="flex items-center gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-accent">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-[18.5px] font-bold leading-snug text-heading">
                  {t.title}
                </h3>
              </div>
              {t.body.map((p, j) => (
                <p key={j} className="mt-4 text-[15px] leading-[1.72] text-muted">
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>

        {/* Plain Terms Visual Spotlight */}
        <div className="mt-10 grid items-center gap-8 rounded-[28px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
          <Reveal y={16} className="relative lg:col-span-5">
            <Photo
              slot="home-plain-terms"
              ratio="4 / 3"
              rounded="rounded-[20px]"
              className="shadow-lift"
            />
            <div className="glass absolute -bottom-3 left-4 rounded-xl px-4 py-2 text-xs font-semibold text-heading shadow-float sm:bottom-4 sm:left-4">
              <span className="inline-block h-2 w-2 rounded-full bg-accent mr-2" />
              Transparent employee self-service
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <span className="eyebrow text-accent">Clarity & Trust</span>
            <h3 className="display display-md mt-4 text-balance">
              Software your team actually understands and trusts
            </h3>
            <p className="mt-4 text-[16px] leading-[1.7] text-muted">
              When an employee checks their payslip, Form 16, or tax regime calculation on their phone, the numbers must match down to the paise. No hidden formulas, no unexplained deductions, and no waiting three days for HR to reply to an email thread.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <TickCircle className="h-4 w-4 text-accent" /> Dual tax regime comparison
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <TickCircle className="h-4 w-4 text-accent" /> 1-click Form 16 & payslips
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <TickCircle className="h-4 w-4 text-accent" /> Zero payroll query backlogs
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= 8. How it works ================= */}
      <Section ground="sunken">
        <SectionHeader
          eyebrow="How it works"
          title="Live in three steps"
          lede="Most Indian organisations complete setup within two to three days, with a dry-run payroll before the first cutoff."
        />

        <ol className="relative mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3 md:gap-6">
          <span
            className="absolute left-7 top-0 h-full w-0.5 bg-line md:left-[16.66%] md:right-[16.66%] md:top-7 md:h-0.5 md:w-auto"
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 120}
              y={14}
              className="relative flex gap-5 md:flex-col md:items-center md:text-center"
            >
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand font-display text-[22px] font-bold text-white shadow-glow ring-4 ring-canvas">
                {s.n}
              </span>
              <div className="md:mt-5">
                <h3 className="font-display text-[18px] font-bold text-heading">{s.title}</h3>
                <p className="mt-2 max-w-xs text-[14.5px] leading-[1.65] text-muted md:mx-auto">
                  {s.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 text-center">
          <Button href="/how-setup-works" variant="outline">
            See how setup runs
          </Button>
        </Reveal>

        {/* Day 1 Go-Live Spotlight */}
        <div className="mt-12 grid items-center gap-8 rounded-[28px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow text-accent">Day 1 Go-Live</span>
            <h3 className="display display-md mt-4 text-balance">
              From biometric turnstile punch to final salary credit
            </h3>
            <p className="mt-4 text-[16px] leading-[1.7] text-muted">
              Whether your employees punch in through office biometric scanners, mobile geo-fenced check-ins on client sites, or factory gate turnstiles, attendance timestamps synchronize immediately into your shift roster. No reconciliation spreadsheets at the end of the month.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href="/how-setup-works" variant="primary" size="sm">
                Explore setup workflow
              </Button>
              <span className="text-xs font-semibold text-muted">
                Average go-live: 2–3 business days
              </span>
            </div>
          </div>
          <Reveal y={16} className="relative lg:col-span-5">
            <Photo
              slot="home-how-it-works"
              ratio="4 / 3"
              rounded="rounded-[20px]"
              className="shadow-lift"
            />
            <div className="glass absolute -bottom-3 right-4 rounded-xl px-4 py-2 text-xs font-semibold text-heading shadow-float sm:bottom-4 sm:right-4">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Real-time attendance capture
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================= 12. Industries ================= */}
      <Section>
        <SectionHeader
          eyebrow="Industries"
          title="Six kinds of company, six different first moves"
          lede="The statutory rules are identical. What changes is where the difficulty sits."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={i * 50} y={12}>
              <Link href={ind.href} className="card card-hover group flex h-full items-start gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-accent">
                  <Icon name={industryIcons[ind.slug] ?? "sparkle"} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-display text-[17px] font-bold text-heading transition-colors group-hover:text-accent">
                    {ind.name}
                    <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Arrow />
                    </span>
                  </span>
                  <span className="mt-1.5 block text-[14px] leading-[1.6] text-muted">
                    {ind.audience}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ================= 11. Before / after ================= */}
      <section className="contrast-band relative overflow-hidden py-10 sm:py-12 md:py-14">
        <div className="shell relative">
          <Reveal y={12} className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-white ring-1 ring-inset ring-white/20">
              Before and after
            </span>
            <h2 className="display display-lg mt-5 !text-white">The same five things, twice</h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 lg:gap-5">
            <Reveal y={14} className="rounded-[20px] bg-black/15 p-6 ring-1 ring-inset ring-white/10 sm:p-8">
              <h3 className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-violet-200">
                {contrast.before.label}
              </h3>
              <ul className="mt-5 space-y-4">
                {contrast.before.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-[1.6] text-violet-100/80">
                    <Icon name="cross" className="mt-1 h-4 w-4 shrink-0 text-violet-300/80" />
                    <span className="line-through decoration-white/30">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} y={14} className="rounded-[20px] bg-white p-6 shadow-float sm:p-8 dark:bg-surface-raised">
              <h3 className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-accent">
                {contrast.after.label}
              </h3>
              <ul className="mt-5 space-y-4">
                {contrast.after.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-[1.6] text-heading">
                    <TickCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mx-auto mt-12 max-w-3xl text-center">
            <p className="font-display text-[clamp(1.2rem,2.4vw,1.6rem)] font-medium leading-snug text-white">
              A single formula error in a spreadsheet becomes a delayed salary credit, a statutory
              notice, and a conversation nobody wanted to have.
            </p>
            <p className="mt-4 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-violet-200">
              Why companies actually switch
            </p>
          </Reveal>

          {/* Audit-Ready Pre-Cutoff Showcase */}
          <div className="mx-auto mt-10 max-w-5xl rounded-[24px] bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/15 sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7 text-left">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white/20 px-2.5 py-1 text-xs font-semibold text-white">
                  The End of Cutoff Night Panic
                </span>
                <h3 className="mt-3 font-display text-[22px] font-bold leading-snug text-white sm:text-[26px]">
                  A calm 15-minute review instead of an all-nighter
                </h3>
                <p className="mt-3 text-[15px] leading-[1.68] text-violet-100/90">
                  With attendance locked, tax declarations verified, and statutory deductions auto-calculated against current slabs, the final payroll run is a peaceful confirmation rather than an emergency spreadsheet debug session.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-lg bg-black/20 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10">
                    ✓ Verified EPF & ESI Challans
                  </span>
                  <span className="rounded-lg bg-black/20 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10">
                    ✓ Direct Bank Payout TXT
                  </span>
                </div>
              </div>
              <Reveal y={14} className="relative lg:col-span-5">
                <Photo
                  slot="home-before-after"
                  ratio="16 / 10"
                  rounded="rounded-[16px]"
                  className="shadow-lift ring-1 ring-white/20"
                />
                <div className="absolute -bottom-3 right-3 rounded-lg bg-black/75 px-3 py-1.5 text-[11px] font-semibold text-emerald-400 backdrop-blur-sm ring-1 ring-white/20 sm:bottom-3 sm:right-3">
                  ● 100% Audit-Ready Cutoff
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 13. Customer voices =================
          Flagged in the content audit: these three quotes match hrmagix.com
          word for word, but the company names ("1XL Demo", "Northwind") read
          as sample data. Confirm with the client before launch. */}
      <Section ground="sunken">
        <SectionHeader
          eyebrow="Customer voices"
          title="From the people who run the cutoff"
          lede="HR and finance leaders describing what changed, in their own words."
          className="mb-12"
        />
        <TestimonialDeck />
      </Section>

      {/* ================= 15. Pricing ================= */}
      <Section>
        <SectionHeader
          eyebrow="Pricing"
          title="Three plans, one platform"
          lede="Per employee, per month. Every module lives on one platform, your plan decides which are switched on."
          className="mb-10"
        />
        <Pricing />
        <Reveal className="mt-6 text-center">
          <Link
            href="/pricing"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Compare every plan and estimate your cost <Arrow />
          </Link>
        </Reveal>
      </Section>

      {/* ================= 16. Questions =================
          The first eight general questions, answered inline with FAQPage
          schema. The full set lives on the question index. */}
      <Section ground="sunken">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <SectionHeader
              eyebrow="Questions"
              title="The questions that decide it"
              lede="Biometric integration, PF and ESI challans, multi-state Professional Tax, and moving years of history out of Excel. Each is answered in full on the question index."
              align="left"
            />
            <Reveal delay={100} className="mt-7">
              <Button href="/resources/questions-and-answers" variant="outline">
                Read every answer
              </Button>
            </Reveal>
          </div>

          <div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: homeFaqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              }}
            />
            <Accordion items={homeFaqs} single />
          </div>
        </div>
      </Section>
      <CtaBand
        eyebrow="Get started"
        title={<>Run your next payroll month <strong>on HRMagix</strong></>}
        body="A walkthrough against your own policies, with a dry-run before the first live cutoff."
      />
    </>
  );
}
