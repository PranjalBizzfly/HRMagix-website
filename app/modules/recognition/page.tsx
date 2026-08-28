import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Recognition & Kudos Module | HRMagix",
  description:
    "Peer-to-peer appreciation kudos, company core values badges, live social culture wall, monthly recognition leaderboards, and redeemable spot award allowances.",
};

const recognitionCards = [
  {
    title: "Peer-to-Peer Kudos",
    badge: "Everyday Appreciation",
    desc: "Empower colleagues to instantly celebrate each other’s helpfulness, sprint wins, and mentorship moments with personalized kudos notes.",
    icon: "trophy",
  },
  {
    title: "Company Value Badges",
    badge: "Culture Alignment",
    desc: "Reinforce organizational values (e.g. Customer Obsession, Deep Ownership, Extreme Innovation) with customized digital recognition badges.",
    icon: "sparkle",
  },
  {
    title: "Live Social Culture Wall",
    badge: "Company-Wide Visibility",
    desc: "Stream peer appreciation across the organization on the employee home dashboard, fostering genuine cross-department camaraderie.",
    icon: "chat",
  },
  {
    title: "Spot Award Allowances",
    badge: "Redeemable Rewards",
    desc: "Managers allocate monthly reward points or cash bonuses that employees can accumulate and redeem for gift vouchers or wellness perks.",
    icon: "wallet",
  },
];

export default function RecognitionModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 07 · Engagement"
        title="Peer Recognition & Social Culture Wall"
        boldFrom={2}
        lede="Celebrate everyday wins. Turn appreciation into an organic, continuous workplace habit with peer kudos and value-driven recognition badges."
        crumb="Recognition"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Culture Walkthrough
            </Button>
            <Button href="/modules" variant="outline" arrow={false} size="lg">
              All 12 Modules
            </Button>
          </>
        }
      />

      {/* Core Capabilities */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Culture Infrastructure"
            title={
              <>
                Build a culture where <strong>efforts never go unnoticed</strong>
              </>
            }
            sub="Recognition increases retention and job satisfaction. HRMagix embeds recognition directly into the daily workspace rather than a siloed portal."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {recognitionCards.map((rc, i) => (
              <Reveal
                key={rc.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={rc.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {rc.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {rc.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {rc.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-accent">
                  <TickCircle className="h-4 w-4" />
                  <span>Integrated with monthly payroll allowance payout</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
