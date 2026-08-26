import { modules, pillars, workspace } from "@/lib/content";
import Bar from "@/components/Bar";
import { Button, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/motion";

/**
 * Three tinted panels, media and copy alternating sides, each closing with the
 * modules it includes as white chips.
 */
export default function Pillars() {
  return (
    <section id="platform" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHead
          eyebrow="The platform"
          title={
            <>
              Hire <strong>faster.</strong> Pay <strong>accurately.</strong> Grow{" "}
              <strong>everyone.</strong>
            </>
          }
          sub="We cover the whole employee journey — attendance and leave, payroll and compliance, goals and recognition — through one workspace and one login."
        />

        <div className="mt-14 space-y-5 sm:space-y-6">
          {pillars.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.key} y={26} delay={i * 60}>
                <article className={`panel ${p.tint} p-5 sm:p-8 lg:p-10`}>
                  <div
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                      flip ? "" : ""
                    }`}
                  >
                    <div className={flip ? "lg:order-2" : ""}>
                      <h3 className="display text-[clamp(1.6rem,4vw,2.6rem)]">{p.name}</h3>
                      <p className="mt-3 font-display text-[clamp(1rem,2.2vw,1.25rem)] font-semibold text-violet-700">
                        {p.tagline}
                      </p>
                      <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
                        {p.copy}
                      </p>

                      <p className="mt-7 text-[13px] font-bold uppercase tracking-[0.14em] text-violet-500">
                        Included modules
                      </p>
                      <ul className="mt-3.5 flex flex-wrap gap-2.5">
                        {p.includes.map((name) => {
                          const mod = modules.find((m) => m.name === name);
                          return (
                            <li key={name} className="chip">
                              <span aria-hidden="true">{mod?.glyph}</span>
                              {name}
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Button href="/modules" variant="outline" size="md">
                          Read more
                        </Button>
                        <Button href="/contact" size="md">
                          Get Started
                        </Button>
                      </div>
                    </div>

                    <div className={flip ? "lg:order-1" : ""}>
                      {p.key === "time" && <PresenceCard />}
                      {p.key === "growth" && <GoalsCard />}
                      {p.key === "payroll" && <PayrollCard />}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Shell({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-lift ring-1 ring-violet-100 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-[14.5px] font-bold text-violet-950">{title}</p>
        {badge && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function PresenceCard() {
  return (
    <Shell title="Today's attendance" badge="Live">
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {workspace.attendance.map((a) => (
          <div key={a.label} className="rounded-xl bg-violet-50 px-3 py-3">
            <p className="font-display text-[21px] font-bold leading-none tabular-nums text-violet-950">
              {a.value}
            </p>
            <p className="mt-1.5 text-[11px] text-ink-faint">{a.label}</p>
          </div>
        ))}
      </div>
      <ul className="mt-4 divide-y divide-violet-100 border-t border-violet-100">
        {workspace.people.map((p) => (
          <li key={p.initials} className="flex items-center gap-3 py-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-100 text-[12px] font-bold text-violet-700">
              {p.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13.5px] font-semibold text-violet-950">{p.name}</span>
              <span className="block truncate text-[11.5px] text-ink-faint">{p.meta}</span>
            </span>
            <span className="shrink-0 rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
              {p.tag}
            </span>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

function GoalsCard() {
  return (
    <Shell title="Performance · Q3 OKRs" badge="On track">
      <ul className="mt-5 space-y-4">
        {workspace.okrs.map((o, i) => (
          <li key={o.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[13px] text-ink-soft">{o.label}</span>
              <span className="text-[12.5px] font-bold tabular-nums text-violet-950">{o.pct}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-violet-100">
              <Bar pct={o.pct} delay={i * 130} tone="dark" />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-violet-100 pt-5">
        {workspace.growthStats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-[19px] font-bold leading-none text-violet-950">{s.value}</p>
            <p className="mt-1.5 text-[11px] leading-tight text-ink-faint">{s.label}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function PayrollCard() {
  const rows = [
    { label: "Payslips generated", value: "Ready" },
    { label: "Taxes & compliance", value: "Built in" },
    { label: "Run time", value: "2 min" },
  ];
  return (
    <Shell title="Payroll run" badge="Done">
      <div className="mt-4 rounded-xl bg-violet-50 px-4 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-500">
          This month
        </p>
        <p className="mt-1 font-display text-[clamp(1.6rem,4vw,2.1rem)] font-bold leading-none text-violet-950">
          Closed in minutes
        </p>
      </div>
      <ul className="mt-4 divide-y divide-violet-100 border-t border-violet-100">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center justify-between gap-3 py-3">
            <span className="text-[13.5px] text-ink-soft">{r.label}</span>
            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[11.5px] font-semibold text-violet-700">
              {r.value}
            </span>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
