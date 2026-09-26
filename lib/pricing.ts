/**
 * Pricing — the single source of truth.
 *
 * Every price on the site (plan cards, comparison table, both cost
 * calculators, page metadata and prose) is derived from this file. Change a
 * rate here and it changes everywhere; nothing else may hard-code a price.
 *
 * VERIFICATION STATUS: the rates below are the ones the project has always
 * carried. They could not be confirmed against a published HRMagix pricing
 * page during the content audit, and are in USD on an India-focused site.
 * Confirm the rates AND the currency with the client before launch — do not
 * convert or invent INR figures.
 */

export const PRICING_CURRENCY = "USD" as const;

export type PlanName = "Starter" | "Growth" | "Enterprise";

export type PlanPrice = {
  name: PlanName;
  /** Per employee per month. `null` means quoted on request. */
  rate: number | null;
};

export const PLAN_PRICES: PlanPrice[] = [
  { name: "Starter", rate: 3 },
  { name: "Growth", rate: 6 },
  { name: "Enterprise", rate: null },
];

export const PRICE_UNIT = "/emp/mo";
export const PRICE_UNIT_LONG = "per employee per month";

/** Formats an amount in the pricing currency, whole units. */
export function formatPrice(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: PRICING_CURRENCY,
    maximumFractionDigits: 0,
  });
}

export function rateOf(name: PlanName): number | null {
  return PLAN_PRICES.find((p) => p.name === name)?.rate ?? null;
}

/** "$3", or "Custom" for a quoted plan. */
export function priceLabel(name: PlanName): string {
  const rate = rateOf(name);
  return rate === null ? "Custom" : formatPrice(rate);
}

/** "Starter $3, Growth $6, Enterprise custom" — for metadata and prose. */
export function pricingSummary(): string {
  return PLAN_PRICES.map((p) =>
    p.rate === null ? `${p.name} custom` : `${p.name} ${formatPrice(p.rate)}`,
  ).join(", ");
}
