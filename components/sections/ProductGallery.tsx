"use client";

import { useState } from "react";
import { modules } from "@/lib/content";
import { Icon, type IconName } from "@/components/icons";
import { TabletFrame } from "@/components/Frames";
import Media from "@/components/Media";
import TabRail from "@/components/TabRail";
import { Reveal } from "@/components/motion";
import {
  GoalsBoard,
  KudosWall,
  PayslipCard,
  PresenceBoard,
} from "@/components/ProductVisuals";

/**
 * Product gallery: a vertical rail of module views on the left, the selected
 * view running inside a tablet frame on the right. Each view is a <Media> slot,
 * so a real screenshot replaces the live rendering without touching layout.
 */

type View = {
  slot: string;
  label: string;
  icon: IconName;
  caption: string;
  render: () => React.ReactNode;
};

const views: View[] = [
  {
    slot: "attendance",
    label: "Attendance & Shifts",
    icon: "clock",
    caption: "See who's in, on leave, or remote at a glance.",
    render: () => <PresenceBoard />,
  },
  {
    slot: "performance",
    label: "Objectives & OKRs",
    icon: "target",
    caption: "Aligned OKRs and KRAs with live progress.",
    render: () => <GoalsBoard />,
  },
  {
    slot: "payroll",
    label: "Payroll & Compliance",
    icon: "wallet",
    caption: "Payslips, taxes and compliance, run in minutes.",
    render: () => <PayslipCard />,
  },
  {
    slot: "recognition",
    label: "Recognition & Kudos",
    icon: "trophy",
    caption: "Kudos, badges and a culture wall your team loves.",
    render: () => <KudosWall />,
  },
  {
    slot: "onboarding",
    label: "Onboarding & Lifecycle",
    icon: "rocket",
    caption: "Automated candidate journey from offer to 30-day check-in.",
    render: () => <PresenceBoard />,
  },
  {
    slot: "analytics",
    label: "People Analytics",
    icon: "chart",
    caption: "Executive insights, headcount growth, and retention metrics.",
    render: () => <GoalsBoard />,
  },
];

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const view = views[active];
  const mod = modules.find((m) => m.name === view.label);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.55fr)] lg:items-center lg:gap-14">
      {/* Rail — vertical from lg, a pill track below it. min-w-0 stops the
          track's content from widening the grid column. */}
      <div className="min-w-0">
        {/* Two rails, one panel: the pill track below lg, the vertical list above. */}
        <div className="lg:hidden">
          <TabRail
            items={views.map((v) => v.label)}
            active={active}
            onChange={setActive}
            label="Module views"
            mode="tabs"
            // distinct id space; the desktop rail below owns "gallery-tab-*"
            idBase="gallery-m"
            align="start"
          />
        </div>

        <ul className="hidden lg:block" role="tablist" aria-label="Module views">
          {views.map((v, i) => {
            const on = i === active;
            return (
              <li key={v.slot}>
                <button
                  type="button"
                  role="tab"
                  id={`gallery-tab-${i}`}
                  aria-controls="gallery-panel"
                  aria-selected={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                      e.preventDefault();
                      setActive((a) => (a + 1) % views.length);
                    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      setActive((a) => (a - 1 + views.length) % views.length);
                    }
                  }}
                  className={`group flex w-full items-start gap-4 border-l-2 py-4 pl-5 pr-3 text-left transition-all duration-300 ${
                    on
                      ? "border-violet-500 bg-surface-sunken/70"
                      : "border-line hover:border-line-accent hover:bg-surface-sunken/40"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                      on ? "bg-brand text-white" : "bg-surface text-accent-soft ring-1 ring-line"
                    }`}
                  >
                    <Icon name={v.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-display text-[15.5px] font-bold transition-colors ${
                        on ? "text-heading" : "text-body"
                      }`}
                    >
                      {v.label}
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-snug text-subtle">
                      {v.caption}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Stage */}
      <Reveal y={26} scale={0.98} className="min-w-0">
        <div id="gallery-panel" role="tabpanel" aria-labelledby={`gallery-tab-${active}`}>
          <TabletFrame>
            <div key={view.slot} className="route-fade bg-surface-sunken/40 p-4 sm:p-6">
              <div className="overflow-hidden rounded-[16px]">
                {view.render()}
              </div>
            </div>
          </TabletFrame>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1">
            <p className="flex items-center gap-2.5 text-[13.5px] text-muted">
              {mod && <Icon name={mod.icon} className="h-4 w-4 text-accent-soft" />}
              {view.caption}
            </p>
            <p className="text-[12.5px] font-semibold text-label">
              {active + 1} / {views.length}
            </p>
          </div>
        </div>
      </Reveal>

      <p aria-live="polite" className="sr-only">
        {`Showing ${view.label}`}
      </p>
    </div>
  );
}
