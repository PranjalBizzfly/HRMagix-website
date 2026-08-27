import { plans, site } from "@/lib/content";
import { Button, Check, Pill } from "./ui";
import { Reveal } from "./motion";

/** Three plan cards; the Growth plan is inverted and lifted. */
export default function Pricing() {
  return (
    <div>
      <div className="grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
        {plans.map((plan, i) => {
          const featured = plan.featured;
          return (
            <Reveal key={plan.name} delay={i * 100} y={22} className={featured ? "lg:-my-4" : ""}>
              <div
                className={`flex h-full flex-col rounded-[24px] p-7 transition-all duration-500 sm:p-9 ${
                  featured
                    ? "bg-violet-950 text-white shadow-lift"
                    : "bg-white shadow-soft ring-1 ring-violet-100 hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3
                    className={`font-display text-[20px] font-bold ${featured ? "text-white" : "text-violet-950"}`}
                  >
                    {plan.name}
                  </h3>
                  {featured && <Pill tone="dark">Most Popular</Pill>}
                </div>
                <p className={`mt-2 text-[13.5px] ${featured ? "text-violet-300/85" : "text-ink-faint"}`}>
                  {plan.blurb}
                </p>

                <p className="mt-8 flex items-baseline gap-1.5">
                  <span
                    className={`display text-[clamp(2.4rem,5.5vw,3.2rem)] font-bold ${
                      featured ? "!text-white" : ""
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className={`text-[14px] ${featured ? "text-violet-300/85" : "text-ink-faint"}`}>
                      {plan.unit}
                    </span>
                  )}
                </p>

                <ul
                  className={`mt-8 flex-1 space-y-3.5 border-t pt-7 ${
                    featured ? "border-white/10" : "border-violet-100"
                  }`}
                >
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className={`mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                          featured ? "bg-violet-500 text-white" : "bg-violet-100 text-violet-700"
                        }`}
                      >
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span
                        className={`text-[14px] leading-snug ${featured ? "text-violet-100" : "text-ink-soft"}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Button
                    href={plan.href}
                    variant={featured ? "light" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={180} className="mt-8 text-center">
        <p className="text-[13.5px] text-ink-faint">{site.trial}</p>
      </Reveal>
    </div>
  );
}
