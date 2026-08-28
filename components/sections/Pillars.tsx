import Image from "next/image";
import { modules } from "@/lib/content";
import { Button, SectionHead } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";

/**
 * Three distinct, non-repeating editorial storytelling pillars:
 * 1. Time & Attendance (Wide light split with biometric & geo-fencing policy narrative)
 * 2. Performance & Growth (Inverted split with OKR cascade & 1-on-1 mentorship)
 * 3. Indian Statutory Payroll (Deep violet enterprise band with EPF, ESI & multi-state PT)
 */
export default function Pillars() {
  return (
    <section id="platform" className="bg-surface py-24 sm:py-28 lg:py-32">
      <div className="shell space-y-20 lg:space-y-28">
        <SectionHead
          eyebrow="The Three Operational Pillars"
          title={
            <>
              Hire <strong>faster.</strong> Pay <strong>accurately.</strong> Grow{" "}
              <strong>everyone.</strong>
            </>
          }
          sub="Engineered to cover the complete employee lifecycle for Indian businesses — from biometric punch-in to statutory salary credits, OKRs, and cultural recognition."
        />

        {/* PILLAR 1: Time & Attendance — Wide Editorial Split */}
        <Reveal y={24}>
          <article className="overflow-hidden rounded-[32px] bg-gradient-to-br from-surface-sunken/90 via-surface to-surface-raised/60 p-7 ring-1 ring-line-strong/70 sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[12px] font-bold text-accent-deep">
                  <Icon name="clock" className="h-3.5 w-3.5 text-accent" />
                  Pillar 01 · Time & Work
                </span>
                <h3 className="display display-lg mt-4 text-heading">
                  Real-time presence across all your Indian branches
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                  Eliminate spreadsheet loss-of-pay (LOP) calculations. Connect your biometric hardware (eSSL, Matrix, ZKTeco) across offices in Bangalore, Pune, Mumbai, and Delhi NCR directly into real-time shift detection engines.
                </p>

                <div className="mt-6 space-y-3 border-y border-line-strong/60 py-5">
                  <div className="flex items-start gap-3 text-[14.5px] text-body">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-surface-strong text-accent-deep">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <strong>Geo-Fenced Mobile Punch:</strong> GPS coordinate verification and selfie check-in for hybrid and field sales personnel.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-[14.5px] text-body">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-surface-strong text-accent-deep">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <strong>Automated Shift Rules:</strong> 24/7 rotational shifts, late-mark grace buffers, and comp-off accruals on holiday work.
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/contact" size="md">
                    Schedule Attendance Demo
                  </Button>
                  <Button href="/modules" variant="outline" size="md">
                    Explore Time Modules
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-[24px] bg-surface p-6 shadow-lift ring-1 ring-line-strong">
                  <div className="flex items-center justify-between border-b border-line pb-4">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-ok-dot animate-pulse" />
                      <div>
                        <p className="font-display text-[15px] font-bold text-heading">
                          Multi-Branch Live Presence Engine
                        </p>
                        <p className="text-[12px] text-subtle">
                          Pune HQ · Mumbai Tech Hub · Bangalore R&D
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-ok-soft px-2.5 py-1 text-[11.5px] font-bold text-ok">
                      Live Sync Active
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-surface-sunken/80 p-3">
                      <p className="font-display text-[22px] font-extrabold text-heading">820</p>
                      <p className="text-[11.5px] font-medium text-muted">Present Today</p>
                    </div>
                    <div className="rounded-xl bg-warn-soft/80 p-3">
                      <p className="font-display text-[22px] font-extrabold text-warn">37</p>
                      <p className="text-[11.5px] font-medium text-muted">Approved Leaves</p>
                    </div>
                    <div className="rounded-xl bg-info-soft/80 p-3">
                      <p className="font-display text-[22px] font-extrabold text-info">09</p>
                      <p className="text-[11.5px] font-medium text-muted">Remote Punch</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center justify-between rounded-xl bg-surface-sunken/40 p-3 text-[13.5px]">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-surface-strong text-[11px] font-bold text-accent-deep">
                          RP
                        </span>
                        <div>
                          <p className="font-semibold text-heading">Rohan Patil</p>
                          <p className="text-[11px] text-subtle">Biometric eSSL · Pune HQ · 09:02 AM</p>
                        </div>
                      </div>
                      <span className="rounded-md bg-ok-soft px-2 py-0.5 text-[11px] font-bold text-ok-strong">
                        On Time
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-surface-sunken/40 p-3 text-[13.5px]">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-surface-strong text-[11px] font-bold text-accent-deep">
                          AK
                        </span>
                        <div>
                          <p className="font-semibold text-heading">Anita Kulkarni</p>
                          <p className="text-[11px] text-subtle">Geo-Fenced Mobile Punch · Mumbai · 08:55 AM</p>
                        </div>
                      </div>
                      <span className="rounded-md bg-surface-raised px-2 py-0.5 text-[11px] font-bold text-accent-deep">
                        Geo Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* PILLAR 2: Performance & Growth — Inverted Narrative Split */}
        <Reveal y={24}>
          <article className="overflow-hidden rounded-[32px] bg-surface p-7 shadow-soft ring-1 ring-line-strong/80 sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6 lg:order-1">
                <div className="overflow-hidden rounded-[24px] bg-surface-sunken/70 p-6 ring-1 ring-line-strong">
                  <div className="flex items-center justify-between border-b border-line-strong/60 pb-4">
                    <p className="font-display text-[15px] font-bold text-heading">
                      Q3 OKR & Talent Matrix Cascade
                    </p>
                    <span className="rounded-full bg-surface-strong px-2.5 py-0.5 text-[11px] font-bold text-accent-deep">
                      Q3 Review Cycle
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-[13.5px]">
                        <span className="font-semibold text-heading">Reduce engineering time-to-hire to 14 days</span>
                        <span className="font-bold text-accent-strong">82%</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-surface-strong/60">
                        <div className="h-full rounded-full bg-brand" style={{ width: "82%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-[13.5px]">
                        <span className="font-semibold text-heading">Maintain team eNPS above 65</span>
                        <span className="font-bold text-accent-strong">68%</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-surface-strong/60">
                        <div className="h-full rounded-full bg-brand" style={{ width: "68%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-[13.5px]">
                        <span className="font-semibold text-heading">Launch Indian Tax & Compliance Academy</span>
                        <span className="font-bold text-accent-strong">45%</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-surface-strong/60">
                        <div className="h-full rounded-full bg-brand" style={{ width: "45%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-2.5 border-t border-line-strong/60 pt-4 text-center">
                    <div className="rounded-xl bg-surface p-2.5 shadow-sm">
                      <p className="font-display text-[16px] font-bold text-accent-deep">+38%</p>
                      <p className="text-[10px] text-subtle">Goal Completion</p>
                    </div>
                    <div className="rounded-xl bg-surface p-2.5 shadow-sm">
                      <p className="font-display text-[16px] font-bold text-ok">4.8 / 5</p>
                      <p className="text-[10px] text-subtle">Review Score</p>
                    </div>
                    <div className="rounded-xl bg-surface p-2.5 shadow-sm">
                      <p className="font-display text-[16px] font-bold text-accent-deep">126</p>
                      <p className="text-[10px] text-subtle">Kudos Sent</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[12px] font-bold text-accent-deep">
                  <Icon name="target" className="h-3.5 w-3.5 text-accent" />
                  Pillar 02 · Talent & Meritocracy
                </span>
                <h3 className="display display-lg mt-4 text-heading">
                  Goals, 9-box talent matrix & structured career growth
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                  Replace awkward annual reviews with continuous 1-on-1 cadences. Align company objectives with individual Key Result Areas (KRAs), visualize leadership potential on the 9-box talent matrix, and manage structured Performance Improvement Plans (PIPs).
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                  <li className="flex items-center gap-2 text-[14px] text-body">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>Quarterly OKR cascades with transparent weightage calculation</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-body">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>9-Box grid identifying high-potential future leadership talent</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-body">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>Culture wall for social peer recognition and spot awards</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact" size="md">
                    Explore Performance System
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* PILLAR 3: Payroll & Indian Compliance — Deep Violet Luxury Band */}
        <Reveal y={24}>
          <article className="relative overflow-hidden rounded-[32px] bg-violet-950 p-8 text-white shadow-2xl sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 dotted opacity-20" />
            <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
                  <Icon name="wallet" className="h-3.5 w-3.5 text-violet-300" />
                  Pillar 03 · Statutory Payroll
                </span>
                <h3 className="display display-lg mt-4 !text-white">
                  Automated Indian payroll with zero spreadsheet risk
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-violet-200/90 sm:text-[17px]">
                  Run monthly payroll for hundreds of employees across multiple Indian entities in under 3 minutes. EPF, ESI, Professional Tax (PT), and TDS (Old vs. New tax regime) are calculated with 100% statutory precision.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4.5 backdrop-blur-md ring-1 ring-white/15">
                    <p className="font-display text-[15px] font-bold text-white">EPF & ESI Auto-Challans</p>
                    <p className="mt-1 text-[13px] text-violet-200/80">
                      ECR files formatted for direct upload to EPFO and ESIC government portals.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4.5 backdrop-blur-md ring-1 ring-white/15">
                    <p className="font-display text-[15px] font-bold text-white">Multi-State PT Slabs</p>
                    <p className="mt-1 text-[13px] text-violet-200/80">
                      Pre-configured rules for Maharashtra, Karnataka, Telangana, Tamil Nadu & more.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/contact" variant="light" size="md">
                    Schedule Payroll Walkthrough
                  </Button>
                  <Button href="/pricing" variant="outline" size="md" className="!bg-transparent !text-white !ring-white/30 hover:!ring-white/70">
                    View Pricing Plans
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[24px] bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
                  <p className="font-display text-[14px] font-bold uppercase tracking-wider text-violet-300">
                    Monthly Payroll Summary
                  </p>
                  <div className="mt-4 space-y-3.5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[14px]">
                      <span className="text-violet-200">Total Active Employees</span>
                      <span className="font-bold text-white">820 Headcount</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[14px]">
                      <span className="text-violet-200">Net Salary Disbursed</span>
                      <span className="font-bold text-emerald-400">₹2,48,50,000</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[14px]">
                      <span className="text-violet-200">EPF & ESI Contribution</span>
                      <span className="font-bold text-white">₹32,40,000</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[14px]">
                      <span className="text-violet-200">TDS Deduction (24Q)</span>
                      <span className="font-bold text-white">₹18,20,000</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[14px]">
                      <span className="text-violet-200">Bank Transfer Batch</span>
                      <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-300">
                        NEFT/RTGS Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}


