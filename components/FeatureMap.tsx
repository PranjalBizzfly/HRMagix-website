import Link from "next/link";
import { appAreas, dashboardWidgets, everywhere } from "@/lib/appFeatures";
import { Icon } from "./icons";
import { Arrow } from "./ui";
import { Reveal } from "./motion";

/**
 * The app's feature map, in words.
 *
 * Renders the seven areas of the HRMagix app exactly as its sidebar groups
 * them (lib/appFeatures.ts). Text and icons only — never a screenshot or a
 * simulated screen.
 *
 * `areas` limits the map to some areas (for a solution page); `dashboard` and
 * `everywhere` add the dashboard and top-bar lists.
 */
export default function FeatureMap({
  areas,
  dashboard = false,
  everywhere: showEverywhere = false,
}: {
  areas?: string[];
  dashboard?: boolean;
  everywhere?: boolean;
}) {
  const shown = areas ? appAreas.filter((a) => areas.includes(a.key)) : appAreas;

  return (
    <div className="space-y-5">
      <div
        className={`grid gap-4 lg:gap-5 ${
          shown.length === 1 ? "" : shown.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {shown.map((area, i) => (
          <Reveal key={area.key} delay={i * 60} y={14} className="card flex flex-col p-6">
            <div className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-accent">
                <Icon name={area.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[18px] font-bold text-heading">{area.name}</h3>
                <p className="text-[13px] leading-snug text-muted">{area.summary}</p>
              </div>
            </div>
            <ul className="mt-5 flex-1 space-y-3 border-t border-line pt-4">
              {area.features.map((f) => (
                <li key={f.name} className="flex gap-2.5">
                  <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-[14.5px] font-semibold text-heading">{f.name}</span>
                    <span className="block text-[13.5px] leading-snug text-muted">{f.note}</span>
                  </span>
                </li>
              ))}
            </ul>
            {area.href && (
              <Link
                href={area.href}
                className="group mt-5 inline-flex min-h-[44px] items-center gap-2 text-[13.5px] font-semibold text-accent"
              >
                More on {area.name.toLowerCase()} <Arrow />
              </Link>
            )}
          </Reveal>
        ))}
      </div>

      {dashboard && (
        <Reveal y={14} className="card p-6 sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-[19px] font-bold text-heading">
              The dashboard every employee opens
            </h3>
            <p className="text-[13.5px] text-muted">
              Punch state, logged work, leave balance and points, at a glance.
            </p>
          </div>
          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardWidgets.map((w) => (
              <li key={w.name} className="border-l-2 border-line-accent pl-4">
                <span className="block text-[14.5px] font-semibold text-heading">{w.name}</span>
                <span className="mt-0.5 block text-[13.5px] leading-snug text-muted">{w.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {showEverywhere && (
        <Reveal y={14} className="rounded-[20px] bg-panel p-6 text-white sm:p-8">
          <h3 className="font-display text-[19px] font-bold text-white">On every screen</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {everywhere.map((e) => (
              <li key={e.name} className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-gold">
                  <Icon name={e.icon} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-white">{e.name}</span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-violet-200">{e.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  );
}
