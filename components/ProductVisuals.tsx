"use client";

import { workspace } from "@/lib/content";
import { Icon } from "./icons";
import { useInView } from "./motion";
import Bar from "./Bar";

/**
 * Product renderings.
 *
 * hrmagix.com ships no photography or screenshots — its own product visual is
 * drawn in the browser — so these are built the same way, in markup, from the
 * figures HRMagix publishes. Nothing here is a fabricated screenshot, and they
 * cost no image bytes.
 */

import Image from "next/image";
import { bySlot } from "@/lib/media";

/** Phone frame showing the one-tap punch-in flow. */
export function PunchInPhone({ className = "" }: { className?: string }) {
  const { ref, shown } = useInView<HTMLDivElement>();
  const mobileMedia = bySlot("mobile");

  return (
    <div
      ref={ref}
      role="img"
      aria-label="HRMagix mobile punch-in app"
      className={`relative mx-auto w-[240px] select-none ${className}`}
    >
      <div className="rounded-[2.4rem] bg-violet-950 p-2.5 shadow-[0_30px_70px_-25px_rgba(31,17,71,0.7)] ring-1 ring-white/20">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-surface">
          {mobileMedia?.src ? (
            <div className="relative aspect-[9/18.5] w-full overflow-hidden bg-violet-950">
              <Image
                src={mobileMedia.src}
                alt={mobileMedia.alt}
                width={600}
                height={1230}
                sizes="240px"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          ) : (
            <>
              <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[76px] -translate-x-1/2 rounded-full bg-violet-950" />

              <div className="bg-surface-sunken/80 px-4 pb-4 pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-label">
                  Attendance
                </p>
                <p className="mt-1 font-display text-[26px] font-bold leading-none tabular-nums text-heading">
                  {workspace.snapshot[2].value}
                </p>
                <p className="mt-1 text-[10.5px] text-subtle">Hours logged today</p>
              </div>

              <div className="px-4 py-4">
                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-[13.5px] font-semibold text-white"
                >
                  <Icon name="fingerprint" className="h-4 w-4" />
                  Punch in
                </button>

                <ul className="mt-4 space-y-2.5">
                  {[
                    { icon: "pin", label: "Geo verified", value: "On site" },
                    { icon: "clock", label: "Shift", value: "09:00–18:00" },
                    { icon: "calendar", label: "Leave balance", value: "12 days" },
                  ].map((row, i) => (
                    <li
                      key={row.label}
                      className="flex items-center gap-2.5 rounded-xl bg-surface-sunken/70 px-3 py-2.5"
                      style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "none" : "translateY(8px)",
                        transition: "opacity .5s ease, transform .7s cubic-bezier(.22,1,.36,1)",
                        transitionDelay: `${260 + i * 90}ms`,
                      }}
                    >
                      <Icon name={row.icon as "pin"} className="h-3.5 w-3.5 text-accent-soft" />
                      <span className="flex-1 text-[11.5px] text-muted">{row.label}</span>
                      <span className="text-[11.5px] font-semibold text-heading">{row.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/** Payslip / payroll-run rendering for the payroll pillar. */
export function PayslipCard({ className = "" }: { className?: string }) {
  const { ref, shown } = useInView<HTMLDivElement>();
  const lines = [
    { label: "Payslips generated", value: "Ready" },
    { label: "Taxes & compliance", value: "Built in" },
    { label: "Approvals", value: "Cleared" },
  ];

  return (
    <div ref={ref} className={`relative ${className}`} role="img" aria-label="HRMagix payroll run">
      <div className="rounded-[20px] bg-surface p-5 shadow-lift ring-1 ring-line sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-[14.5px] font-bold text-heading">Payroll run</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-sunken px-2.5 py-1 text-[11.5px] font-semibold text-accent">
            <Icon name="check" className="h-3 w-3" />
            Done
          </span>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl bg-violet-950 px-4 py-5 text-white">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-violet-300">
            Run time
          </p>
          <p className="mt-1 font-display text-[30px] font-bold leading-none">2 min</p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
            <Bar pct={100} delay={220} />
          </div>
        </div>

        <ul className="mt-4 divide-y divide-line border-t border-line">
          {lines.map((l, i) => (
            <li
              key={l.label}
              className="flex items-center justify-between gap-3 py-3"
              style={{
                opacity: shown ? 1 : 0,
                transition: "opacity .5s ease",
                transitionDelay: `${320 + i * 100}ms`,
              }}
            >
              <span className="flex items-center gap-2.5 text-[13.5px] text-muted">
                <Icon name="check" className="h-3.5 w-3.5 text-accent-soft" />
                {l.label}
              </span>
              <span className="rounded-full bg-surface-sunken px-2.5 py-1 text-[11.5px] font-semibold text-accent-strong">
                {l.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Kudos / culture-wall rendering used in the engagement band. */
export function KudosWall({ className = "" }: { className?: string }) {
  const { ref, shown } = useInView<HTMLDivElement>();
  const kudos = [
    { from: "Priya", to: "Rohan", note: "Closed the payroll run a day early" },
    { from: "Anita", to: "Priya", note: "Onboarded four new joiners this week" },
  ];

  return (
    <div ref={ref} className={`grid gap-3 ${className}`} role="img" aria-label="HRMagix recognition wall">
      {kudos.map((k, i) => (
        <div
          key={k.from}
          className="flex items-start gap-3 rounded-[20px] bg-surface px-4 py-4 shadow-soft ring-1 ring-line"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "none" : "translateY(12px)",
            transition: "opacity .5s ease, transform .7s cubic-bezier(.22,1,.36,1)",
            transitionDelay: `${140 + i * 120}ms`,
          }}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-raised text-accent">
            <Icon name="trophy" className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-[13.5px] font-semibold text-heading">
              {k.from} → {k.to}
            </span>
            <span className="mt-0.5 block text-[12px] leading-snug text-subtle">{k.note}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function BoardShell({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[20px] bg-surface p-5 shadow-lift ring-1 ring-line sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-[14.5px] font-bold text-heading">{title}</p>
        {badge && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-sunken px-2.5 py-1 text-[11.5px] font-semibold text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export function PresenceBoard() {
  return (
    <BoardShell title="Today's attendance" badge="Live">
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {workspace.attendance.map((a) => (
          <div key={a.label} className="rounded-xl bg-surface-sunken px-3 py-3">
            <p className="font-display text-[21px] font-bold leading-none tabular-nums text-heading">
              {a.value}
            </p>
            <p className="mt-1.5 text-[11.5px] text-subtle">{a.label}</p>
          </div>
        ))}
      </div>
      <ul className="mt-4 divide-y divide-line border-t border-line">
        {workspace.people.map((p) => (
          <li key={p.initials} className="flex items-center gap-3 py-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-raised text-[12px] font-bold text-accent-strong">
              {p.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13.5px] font-semibold text-heading">{p.name}</span>
              <span className="block truncate text-[11.5px] text-subtle">{p.meta}</span>
            </span>
            <span className="shrink-0 rounded-full bg-surface-sunken px-2.5 py-1 text-[11.5px] font-semibold text-accent-strong">
              {p.tag}
            </span>
          </li>
        ))}
      </ul>
    </BoardShell>
  );
}

export function GoalsBoard() {
  return (
    <BoardShell title="Performance · Q3 OKRs" badge="On track">
      <ul className="mt-5 space-y-4">
        {workspace.okrs.map((o, i) => (
          <li key={o.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[13.5px] text-muted">{o.label}</span>
              <span className="text-[12.5px] font-bold tabular-nums text-heading">{o.pct}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-raised">
              <Bar pct={o.pct} delay={i * 130} tone="dark" />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
        {workspace.growthStats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-[19px] font-bold leading-none text-heading">{s.value}</p>
            <p className="mt-1.5 text-[11.5px] leading-tight text-subtle">{s.label}</p>
          </div>
        ))}
      </div>
    </BoardShell>
  );
}

