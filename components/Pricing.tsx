import { plans, site } from "@/lib/content";
import { Button, Check } from "./ui";
import { Reveal } from "./motion";

/** The price rolls up into place as the card scrolls in; the text itself never changes. */
function PriceRoll({ price }: { price: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span className="price-roll inline-block">{price}</span>
    </span>
  );
}

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
                className={`relative flex h-full flex-col rounded-[24px] p-7 transition-all duration-500 sm:p-9 ${
                  featured
                    ? "bg-panel text-white shadow-lift ring-2 ring-gold/60"
                    : "card card-hover"
                }`}
              >
                {featured && <span className="border-beam" aria-hidden="true" />}
                <div className="flex items-center justify-between gap-3">
                  <h3
                    className={`font-display text-[20px] font-bold ${featured ? "text-white" : "text-heading"}`}
                  >
                    {plan.name}
                  </h3>
                  {featured && (
                    <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2b1c00]">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-[13.5px] ${featured ? "text-violet-300/85" : "text-subtle"}`}>
                  {plan.blurb}
                </p>

                <p className="mt-8 flex items-baseline gap-1.5">
                  <span
                    className={`display text-[clamp(2.4rem,5.5vw,3.2rem)] font-bold ${
                      featured ? "!text-white" : ""
                    }`}
                  >
                    <PriceRoll price={plan.price} />
                  </span>
                  {plan.unit && (
                    <span className={`text-[14px] ${featured ? "text-violet-300/85" : "text-subtle"}`}>
                      {plan.unit}
                    </span>
                  )}
                </p>

                <ul
                  className={`mt-8 flex-1 space-y-3.5 border-t pt-7 ${
                    featured ? "border-white/10" : "border-line"
                  }`}
                >
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className={`mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                          featured ? "bg-brand text-white" : "bg-surface-raised text-accent-strong"
                        }`}
                      >
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span
                        className={`text-[14px] leading-snug ${featured ? "text-violet-100" : "text-muted"}`}
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
        <p className="text-[13.5px] text-subtle">{site.trial}</p>
      </Reveal>
    </div>
  );
}
