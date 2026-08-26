"use client";

import { workspace, workspaceNav } from "@/lib/content";
import { useInView } from "./motion";

/**
 * Light product visual of the HRMagix workspace, built from the figures
 * published on hrmagix.com. Used as the hero centrepiece.
 */
export default function Workspace({ compact = false }: { compact?: boolean }) {
  const { ref, shown } = useInView<HTMLDivElement>("0px");

  return (
    <div
      ref={ref}
      data-shown={shown}
      role="img"
      aria-label="HRMagix workspace preview"
      className="relative w-full select-none overflow-hidden rounded-[20px] bg-white shadow-[0_40px_90px_-40px_rgba(31,17,71,0.45)] ring-1 ring-violet-100 sm:rounded-[24px]"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-violet-100 bg-violet-50/70 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6058]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 hidden rounded-md bg-white px-2.5 py-1 text-[10.5px] font-medium text-ink-faint ring-1 ring-violet-100 sm:block">
          app.hrmagix — Overview
        </span>
      </div>

      <div className={`grid grid-cols-1 ${compact ? "" : "sm:grid-cols-[136px_1fr]"}`}>
        {!compact && (
          <nav className="hidden flex-col gap-0.5 border-r border-violet-100 bg-violet-50/40 p-3 sm:flex">
            <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-400">
              HRMagix
            </p>
            {workspaceNav.map((item, i) => (
              <span
                key={item}
                className={`flex items-center gap-2 rounded-lg px-2 py-[7px] text-[11.5px] font-medium ${
                  i === 0 ? "bg-violet-500 text-white" : "text-ink-soft"
                }`}
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "none" : "translateX(-8px)",
                  transition: "opacity .5s ease, transform .6s cubic-bezier(.22,1,.36,1)",
                  transitionDelay: `${140 + i * 40}ms`,
                }}
              >
                <span className="h-1.5 w-1.5 rounded-[3px] bg-current opacity-70" />
                {item}
              </span>
            ))}
          </nav>
        )}

        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-display text-[15px] font-bold text-violet-950">Welcome Back!</p>
              <p className="text-[11.5px] text-ink-faint">Your people snapshot for today</p>
            </div>
            <span className="rounded-full bg-violet-500 px-3 py-1.5 text-[11px] font-semibold text-white">
              + Hire
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-2.5">
            {workspace.snapshot.map((s, i) => (
              <div
                key={s.label}
                className="rounded-xl bg-violet-50 px-2.5 py-2.5 ring-1 ring-violet-100"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "none" : "translateY(12px)",
                  transition: "opacity .55s ease, transform .7s cubic-bezier(.22,1,.36,1)",
                  transitionDelay: `${220 + i * 55}ms`,
                }}
              >
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-violet-400">
                  {s.label}
                </p>
                <p className="mt-1 font-display text-[17px] font-bold tabular-nums text-violet-950 sm:text-[19px]">
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-2.5 sm:grid-cols-[1.25fr_1fr]">
            <div className="rounded-xl bg-white p-3 ring-1 ring-violet-100">
              <p className="text-[11px] font-semibold text-ink-soft">Attendance trend</p>
              <TrendChart shown={shown} />
            </div>
            <div className="rounded-xl bg-white p-3 ring-1 ring-violet-100">
              <p className="text-[11px] font-semibold text-ink-soft">Task queue</p>
              <ul className="mt-2 space-y-1.5">
                {workspace.queue.map((q, i) => (
                  <li
                    key={q}
                    className="flex items-center gap-2 text-[11.5px] text-ink-soft"
                    style={{
                      opacity: shown ? 1 : 0,
                      transition: "opacity .5s ease",
                      transitionDelay: `${560 + i * 80}ms`,
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TREND = [38, 52, 44, 66, 58, 78, 62, 86, 72, 92];

function TrendChart({ shown }: { shown: boolean }) {
  return (
    <div className="mt-2.5 flex h-[58px] items-end gap-[5px]" aria-hidden="true">
      {TREND.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-[3px] bg-gradient-to-t from-violet-300 to-violet-500"
          style={{
            height: shown ? `${v}%` : "4%",
            transition: "height .9s cubic-bezier(.22,1,.36,1)",
            transitionDelay: `${380 + i * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}
