import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "1-on-1s & Meetings Module | HRMagix",
  description:
    "Structured collaborative 1-on-1 agendas, recurring coaching cadence, private manager notes, and action item accountability tracking for high-performing teams.",
};

const meetingFeatures = [
  {
    title: "Collaborative Talking Points",
    badge: "Shared Agendas",
    desc: "Both managers and direct reports add agenda items ahead of time, ensuring 1-on-1s are focused on growth, priorities, and unblocking progress.",
    icon: "chat",
  },
  {
    title: "Action Item Accountability",
    badge: "Never Forget Next Steps",
    desc: "Assign clear deliverables during the call with automated due-date reminders that automatically carry forward to the next scheduled check-in.",
    icon: "check",
  },
  {
    title: "Private Manager Coaching Notes",
    badge: "Confidential Logs",
    desc: "Record private observations, career aspirations, and developmental coaching notes accessible only to the manager for future appraisal reference.",
    icon: "lock",
  },
  {
    title: "Recurring Cadence Scheduler",
    badge: "Google & Outlook Sync",
    desc: "Integrate with Google Calendar and Microsoft Outlook to maintain weekly or bi-weekly cadence without scheduling friction.",
    icon: "calendar",
  },
];

export default function MeetingsModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 08 · Engagement"
        title="1-on-1 Check-ins & Coaching Cadence"
        boldFrom={2}
        lede="Empower managers to hold meaningful, structured coaching conversations. Track action items, unblock daily friction, and build psychological safety."
        crumb="1-on-1s & Meetings"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Meetings Demo
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
            eyebrow="Continuous Feedback"
            title={
              <>
                1-on-1s that actually <strong>move the needle</strong>
              </>
            }
            sub="Replace unstructured coffee chats with continuous, documented developmental dialogues that keep team members motivated and aligned."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {meetingFeatures.map((feat, i) => (
              <Reveal
                key={feat.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={feat.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-accent">
                  <TickCircle className="h-4 w-4" />
                  <span>Syncs automatically with OKRs and performance goals</span>
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
