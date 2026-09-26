"use client";

import { useMemo, useState } from "react";
import { plans, site } from "@/lib/content";
import { formatPrice, rateOf, PRICE_UNIT, type PlanName } from "@/lib/pricing";
import { Button, Pill } from "./ui";
import { useSpotlight } from "./motion";

/**
 * Cost calculator. Pure arithmetic on the per-employee prices HRMagix
 * publishes — no modelled savings, no invented figures.
 */
export default function Calculator() {
  const [count, setCount] = useState(50);
  const [plan, setPlan] = useState<PlanName>("Growth");
  const { ref: spotRef, spotlightProps } = useSpotlight<HTMLDivElement>();

  const rate = rateOf(plan);
  const monthly = useMemo(() => (rate == null ? null : rate * count), [rate, count]);

  const money = formatPrice;

  return (
    <div
      ref={spotRef}
      {...spotlightProps}
      className="spotlight panel bg-panel p-6 text-white shadow-lift sm:p-9 lg:p-11"
    >
      <div className="pointer-events-none absolute inset-0 dotted opacity-25" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full panel-bloom blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div>
          <Pill tone="dark">Cost calculator</Pill>
          <h3 className="display display-md mt-5 !text-white">
            What would <strong>HRMagix cost</strong> your team?
          </h3>
          <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-violet-200/85">
            Pricing is per employee, per month. Move the slider and pick a plan — the number below is
            simply the published rate times your headcount.
          </p>

          <div className="mt-9">
            <div className="flex items-baseline justify-between">
              <label htmlFor="headcount" className="text-[13.5px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                Employees
              </label>
              <output htmlFor="headcount" className="font-display text-[22px] font-bold tabular-nums text-white">
                {count.toLocaleString("en-US")}
              </output>
            </div>
            <input
              id="headcount"
              type="range"
              min={1}
              max={1000}
              step={1}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-violet-400 outline-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-glow"
            />
            <div className="mt-2 flex justify-between text-[11.5px] text-violet-300/70">
              <span>1</span>
              <span>1,000</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[13.5px] font-semibold uppercase tracking-[0.14em] text-violet-300">Plan</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {plans.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  aria-pressed={plan === p.name}
                  onClick={() => setPlan(p.name)}
                  className={`rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-300 ${
                    plan === p.name
                      ? "bg-white text-violet-800"
                      : "bg-white/[0.08] text-violet-200 ring-1 ring-inset ring-white/15 hover:bg-white/[0.14]"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-white/[0.07] p-6 ring-1 ring-inset ring-white/12 sm:p-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-violet-300">
            {plan} plan
          </p>

          {monthly == null ? (
            <>
              <p className="display mt-4 text-[clamp(2.2rem,6vw,3.4rem)] font-bold !text-white">Custom</p>
              <p className="mt-3 max-w-[34ch] text-[15.5px] leading-relaxed text-violet-200/85">
                Enterprise is quoted for large organisations and adds SSO &amp; advanced security,
                succession &amp; lifecycle and a dedicated success manager.
              </p>
            </>
          ) : (
            <>
              <p className="display mt-4 text-[clamp(2.2rem,6vw,3.4rem)] font-bold !text-white">
                {money(monthly)}
                <span className="ml-2.5 font-sans text-[15.5px] font-medium tracking-normal text-violet-300">
                  /month
                </span>
              </p>
              <dl className="mt-7 space-y-3.5 border-t border-white/10 pt-6 text-[14px]">
                <Row label="Rate" value={`${formatPrice(rate ?? 0)}${PRICE_UNIT}`} />
                <Row label="Employees" value={count.toLocaleString("en-US")} />
                <Row label="Billed yearly" value={money(monthly * 12)} />
              </dl>
            </>
          )}

          <ul className="mt-7 space-y-2 border-t border-white/10 pt-6">
            {plans
              .find((p) => p.name === plan)!
              .includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-violet-100">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {item}
                </li>
              ))}
          </ul>

          <div className="mt-8">
            <Button href="/company/contact" variant="light" size="md" className="w-full">
              {monthly == null ? "Contact Sales" : "Start Free Trial"}
            </Button>
            <p className="mt-4 text-center text-[11.5px] text-violet-300/70">{site.trial}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-violet-300/85">{label}</dt>
      <dd className="font-semibold tabular-nums text-white">{value}</dd>
    </div>
  );
}
