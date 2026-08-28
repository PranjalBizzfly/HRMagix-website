import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import Contrast from "@/components/sections/Contrast";
import TestimonialDeck from "@/components/TestimonialDeck";
import { Button, SectionHead } from "@/components/ui";
import { IconTile } from "@/components/icons";
import { Counter, Reveal, Words } from "@/components/motion";
import { assurances, features, modules, site, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "HRMagix builds modern HR software — people, performance and payroll in one workspace, trusted by 120+ HR teams worldwide.",
};

export default function AboutPage() {
  const channels = [
    { label: "Email us", value: site.contact.email, href: `mailto:${site.contact.email}` },
    {
      label: "Call us",
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/[^+\d]/g, "")}`,
    },
    { label: "Visit us", value: site.contact.location, href: "" },
  ];

  return (
    <>
      <PageHero
        eyebrow="About HRMagix"
        title="Modern HR, from hire to retire"
        boldFrom={2}
        lede="Everything your people team needs, in one delightful platform — built for scale, audited by design."
        crumb="About"
        actions={
          <Button href="/contact" size="lg">
            Talk to the team
          </Button>
        }
      />

      {/* Mission & Pune Origin Showcase */}
      <section className="bg-surface py-12">
        <div className="shell">
          <Reveal y={20} className="overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-950 via-violet-900 to-indigo-950 p-8 text-white shadow-lift sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
                Origin Story & Engineering Principles
              </span>
              <h2 className="display display-lg mt-5 !text-white">
                Built in Pune. Trusted across Indian enterprise ecosystems.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-violet-200/90 sm:text-[18px]">
                HRMagix was created with a single mission: to eliminate the administrative exhaustion that plagues Indian People Operations teams. By unifying biometric time-tracking, statutory payroll compliance, continuous OKR meritocracy, and authentic employee recognition into a single cloud platform, we give leaders their working weeks back.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="light" size="md">
                  Visit Our Pune Headquarters
                </Button>
                <Button href="/features" variant="outline" size="md" className="!bg-transparent !text-white !ring-white/30 hover:!ring-white/70">
                  Explore Platform Philosophy
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="shell text-center">
          <p className="display mx-auto max-w-[20ch] text-[clamp(1.9rem,5.4vw,3.4rem)]">
            <Words text="People, performance, and payroll —" />{" "}
            <Words text="all in one workspace." className="font-bold" delay={180} />
          </p>
          <Reveal delay={280} className="mx-auto mt-10 grid max-w-4xl gap-8 border-t border-line pt-10 text-left sm:grid-cols-3">
            <p className="text-[16px] leading-relaxed text-muted sm:col-span-2">
              {site.name} replaces the spreadsheet-and-inbox routine with a single workspace:{" "}
              {modules.length} modules covering attendance, leaves, payroll, performance, recognition
              and the whole employee lifecycle — switched on to match your policies, no code
              required.
            </p>
            <p className="text-[16px] leading-relaxed text-muted">{site.footNote}</p>
          </Reveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="relative overflow-hidden bg-violet-950 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 dotted opacity-25" aria-hidden="true" />
        <div className="shell relative">
          <SectionHead
            tone="light"
            eyebrow="By the numbers"
            title={
              <>
                Trusted by <strong>people teams worldwide</strong>
              </>
            }
          />
          <dl className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} y={14} className="text-center">
                <dd className="display text-[clamp(2rem,5vw,3rem)] font-bold !text-white">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-3 text-[13.5px] text-violet-300/80">{s.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <Contrast />

      {/* What the platform covers */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="The platform"
            title={
              <>
                Built for scale. <strong>Audited by design.</strong>
              </>
            }
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal
                as="li"
                key={f.key}
                delay={i * 60}
                y={18}
                className="rounded-[24px] bg-surface-sunken/70 p-7 ring-1 ring-line"
              >
                <IconTile name={f.icon} className="!bg-surface shadow-soft" />
                <h3 className="mt-5 font-display text-[17px] font-bold">{f.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{f.copy}</p>
              </Reveal>
            ))}
          </ul>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal
                as="li"
                key={a.title}
                delay={i * 70}
                y={16}
                className="rounded-[24px] bg-surface p-6 shadow-soft ring-1 ring-line"
              >
                <h3 className="font-display text-[15.5px] font-bold">{a.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{a.copy}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Voices */}
      <section className="bg-surface-sunken/70 py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Customer voices"
            title={
              <>
                Loved by <strong>teams everywhere</strong>
              </>
            }
            sub={`${site.proof.trustline}.`}
          />
          <div className="mt-12">
            <TestimonialDeck />
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="shell grid gap-4 sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 80}
              y={14}
              className="rounded-[24px] bg-surface-sunken/70 p-7 ring-1 ring-line"
            >
              <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-label">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-2.5 block font-display text-[17px] font-bold text-heading transition-colors hover:text-accent"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-2.5 font-display text-[17px] font-bold text-heading">{c.value}</p>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
