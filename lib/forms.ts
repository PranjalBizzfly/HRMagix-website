/**
 * Shared form rules and the one submit path every HRMagix form uses.
 *
 * Validation lives here so the browser and the /api/forms route apply the
 * same rules. Submission always goes to /api/forms; that route decides where
 * the message is delivered (see app/api/forms/route.ts). A form shows its
 * success state only when the route confirms delivery.
 */
import { parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js/min";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function checkEmail(v: string): string | undefined {
  const s = v.trim();
  if (!s) return "Enter your email address.";
  if (!EMAIL_RE.test(s) || s.length > 254) return "Enter a valid email address, like name@company.com.";
}

export function checkName(v: string): string | undefined {
  const s = v.trim();
  if (!s) return "Enter your full name.";
  if (s.length < 2 || !/\p{L}/u.test(s) || /\d/.test(s)) return "Enter a valid name.";
}

export function checkUrl(v: string): string | undefined {
  const s = v.trim();
  if (!s) return;
  try {
    const u = new URL(s);
    if (!/^https?:$/.test(u.protocol) || !u.hostname.includes(".")) throw 0;
  } catch {
    return "Enter a full web address, starting with https://";
  }
}

/**
 * Validates a phone number against its country's numbering plan and returns
 * it in E.164 (+<country code><national number>) when valid.
 */
export function checkPhone(
  national: string,
  country: CountryCode,
): { error?: string; e164?: string } {
  const s = national.trim();
  if (!s) return { error: "Enter your phone number." };
  if (!/^[\d\s().-]+$/.test(s)) return { error: "Use digits only; the country code is chosen on the left." };
  const parsed = parsePhoneNumberFromString(s, country);
  if (!parsed || !parsed.isValid()) return { error: "Enter a valid phone number for the selected country." };
  return { e164: parsed.number };
}

/** Server-side check of an already formatted E.164 number. */
export function isE164(v: string): boolean {
  if (!/^\+[1-9]\d{6,14}$/.test(v)) return false;
  const p = parsePhoneNumberFromString(v);
  return !!p && p.isValid();
}

export type FormKind = "contact" | "careers" | "vendor" | "download";

export type SubmitOutcome =
  | { ok: true }
  | { ok: false; reason: "invalid" | "unavailable" | "network"; fields?: Record<string, string> };

/** Posts a form to /api/forms. Never reports success the server did not confirm. */
export async function submitForm(
  form: FormKind,
  data: Record<string, string>,
  context: Record<string, string> = {},
): Promise<SubmitOutcome> {
  try {
    const res = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form, data, context, page: typeof location !== "undefined" ? location.pathname : "" }),
    });
    if (res.ok) return { ok: true };
    const body = await res.json().catch(() => ({}));
    if (res.status === 422) return { ok: false, reason: "invalid", fields: body.fields };
    return { ok: false, reason: "unavailable" };
  } catch {
    return { ok: false, reason: "network" };
  }
}

export function failureMessage(reason: "invalid" | "unavailable" | "network"): string {
  if (reason === "network") return "We couldn't reach the server. Check your connection and try again.";
  if (reason === "invalid") return "Some details need attention. Please check the highlighted fields.";
  return "We couldn't send this right now. Please try again in a moment, or email us directly.";
}
