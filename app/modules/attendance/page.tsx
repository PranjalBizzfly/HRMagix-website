import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/sections/ClosingCta";
import { Button, SectionHead, TickCircle } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Attendance & Shifts Module | HRMagix",
  description:
    "Real-time biometric sync (eSSL, Matrix, ZKTeco), mobile GPS geo-fencing with selfie validation, rotational 24/7 shifts, and direct loss-of-pay (LOP) payroll integration.",
};

const capabilities = [
  {
    title: "Biometric Hardware Sync",
    subtitle: "LAN & Cloud Push API",
    desc: "Seamlessly connect on-premise biometric fingerprint and facial recognition terminals (eSSL, Matrix, ZKTeco, Realtime). Punches sync to HRMagix within 2 seconds across all office locations.",
    icon: "fingerprint",
  },
  {
    title: "Mobile GPS Geo-Fencing",
    subtitle: "Field & Remote Personnel",
    desc: "Enable remote and on-field sales or service employees to punch in only within authorized geographic perimeters with AI selfie verification and live Google Maps coordinates.",
    icon: "pin",
  },
  {
    title: "Rotational 24/7 Shift Engine",
    subtitle: "Automated Roster Management",
    desc: "Configure complex rotational shifts, day/night differentials, multiple grace periods, half-day cutoffs, and weekly off scheduling with zero spreadsheet manual tracking.",
    icon: "clock",
  },
  {
    title: "Overtime & Grace Policies",
    subtitle: "Factory & Corporate Rules",
    desc: "Set granular early-exit penalties, late-arrival buffer minutes, and overtime multiplier compensation compliant with Indian Factories Act and state Shop & Establishment norms.",
    icon: "target",
  },
];

const hardwareSpecs = [
  { brand: "eSSL", models: "Identix, SilkBio, iClock series", protocol: "Real-time Push API / LAN Server Sync" },
  { brand: "Matrix Comsec", models: "COSEC VEGA, DOOR, ARGO", protocol: "Direct REST Webhook & SQL Bridge" },
  { brand: "ZKTeco", models: "SenseFace, ProFace, MB series", protocol: "ADMS / Cloud Server Communication" },
  { brand: "Mobile Apps", models: "iOS & Android (iOS 15+, Android 9+)", protocol: "GPS Geo-fencing + Camera Liveness" },
];

export default function AttendanceModulePage() {
  return (
    <>
      <PageHero
        eyebrow="Module 01 · Time & Work"
        title="Biometric & Mobile Attendance Engine"
        boldFrom={2}
        lede="Eliminate proxy attendance and spreadsheet reconciliations. Connect physical biometric terminals and mobile GPS punch-ins directly into real-time payroll."
        crumb="Attendance & Shifts"
        actions={
          <>
            <Button href="/contact" size="lg">
              Book Attendance Demo
            </Button>
            <Button href="/modules" variant="outline" arrow={false} size="lg">
              All 12 Modules
            </Button>
          </>
        }
      />

      {/* Core Capabilities Breakdown */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Presence Infrastructure"
            title={
              <>
                Engineered for <strong>multi-branch Indian enterprises</strong>
              </>
            }
            sub="Whether you manage a 50-person tech office in Bangalore or 2,000 workers across manufacturing plants in Pune and Gujarat, HRMagix captures every punch accurately."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <Reveal
                key={cap.title}
                delay={i * 80}
                y={20}
                className="flex flex-col justify-between rounded-[28px] bg-surface-sunken/70 p-8 ring-1 ring-line sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <IconTile name={cap.icon as any} className="!bg-surface shadow-soft" />
                    <span className="rounded-full bg-surface-raised px-3 py-1 text-[11.5px] font-bold text-accent-deep">
                      {cap.subtitle}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-heading">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-accent">
                  <TickCircle className="h-4 w-4" />
                  <span>Real-time sync to Loss of Pay (LOP) engine</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware & Cloud Sync Matrix */}
      <section className="bg-violet-950 py-20 text-white sm:py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
              Hardware Compatibility
            </span>
            <h2 className="display display-lg mt-4 !text-white">
              Connects to your existing biometric devices in 30 minutes.
            </h2>
            <p className="mt-3 text-[16px] text-violet-200/90">
              No need to replace your current fingerprint or facial recognition hardware. HRMagix communicates directly with leading Indian biometric manufacturers via push APIs.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-[24px] bg-white/5 p-1 ring-1 ring-white/15">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-[12px] font-bold uppercase tracking-wider text-violet-300">
                  <th className="p-5">Hardware Brand</th>
                  <th className="p-5">Supported Terminals</th>
                  <th className="p-5">Integration Protocol</th>
                  <th className="p-5">Sync Latency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[14px]">
                {hardwareSpecs.map((spec) => (
                  <tr key={spec.brand} className="hover:bg-white/5">
                    <td className="p-5 font-bold text-white">{spec.brand}</td>
                    <td className="p-5 text-violet-200">{spec.models}</td>
                    <td className="p-5 text-violet-300 font-mono text-[13px]">{spec.protocol}</td>
                    <td className="p-5 text-emerald-400 font-semibold">&lt; 2 Seconds</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Automated LOP & Payroll Bridge */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead
              align="left"
              eyebrow="Automated Reconciliation"
              title={
                <>
                  Zero manual calculation of <strong>Loss-of-Pay days</strong>
                </>
              }
              sub="At month-end, HRMagix reconciles biometric attendance, approved leaves, outdoor duties, and regularizations automatically. Loss-of-Pay (LOP) deductions feed directly into salary computation."
            />
            <ul className="mt-8 space-y-3.5">
              <li className="flex items-start gap-3">
                <TickCircle className="mt-0.5 text-accent-soft" />
                <span className="text-[15px] text-body">
                  <strong>Sandwich Rule Enforcement:</strong> Automatically detect weekends flanked by unapproved leaves.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TickCircle className="mt-0.5 text-accent-soft" />
                <span className="text-[15px] text-body">
                  <strong>Manager Regularization Workflows:</strong> Employees request punch corrections with reason codes and manager approval chains.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TickCircle className="mt-0.5 text-accent-soft" />
                <span className="text-[15px] text-body">
                  <strong>Shift Allowance Calculation:</strong> Auto-tag night shift allowances and overtime hours into the payroll salary register.
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <Button href="/modules/payroll">See How Payroll Integrates &rarr;</Button>
            </div>
          </div>

          <div className="rounded-[28px] bg-surface-sunken/80 p-8 ring-1 ring-line-strong/80 sm:p-10">
            <div className="flex items-center justify-between border-b border-line-strong/60 pb-4">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-accent">Month-End Attendance Summary</p>
                <p className="font-display text-[17px] font-bold text-heading">Payroll Month: August 2026</p>
              </div>
              <span className="rounded-full bg-ok-soft px-3 py-1 text-[12px] font-bold text-ok-strong">
                100% Reconciled
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between rounded-xl bg-surface p-3.5 text-[14px] shadow-sm ring-1 ring-line">
                <span className="font-medium text-body">Total Working Days</span>
                <span className="font-bold text-heading">22 Days</span>
              </div>
              <div className="flex justify-between rounded-xl bg-surface p-3.5 text-[14px] shadow-sm ring-1 ring-line">
                <span className="font-medium text-body">Present & Shift Days</span>
                <span className="font-bold text-ok">20.5 Days</span>
              </div>
              <div className="flex justify-between rounded-xl bg-surface p-3.5 text-[14px] shadow-sm ring-1 ring-line">
                <span className="font-medium text-body">Paid Leaves (PL & CL)</span>
                <span className="font-bold text-accent-strong">1.0 Day</span>
              </div>
              <div className="flex justify-between rounded-xl bg-surface p-3.5 text-[14px] shadow-sm ring-1 ring-line">
                <span className="font-medium text-body">Unapproved Absences (LOP)</span>
                <span className="font-bold text-danger">0.5 Day (Auto-deducted)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
