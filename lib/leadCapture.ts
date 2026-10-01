/**
 * Lead capture for gated PDF downloads.
 *
 * Deliberately split into three independent pieces so a backend can be
 * connected without touching the modal:
 *
 *   validateLead()  — pure field validation
 *   submitLead()    — sends the lead somewhere (the ONLY place to change)
 *   downloadPdf()   — triggers the browser download of the exact file
 *
 * BACKEND STATUS: this project has no API route, form service or CRM. The
 * lead is POSTed as JSON to NEXT_PUBLIC_LEAD_ENDPOINT when that variable is
 * set. When it is not set, submitLead() returns { sent: false } — the form
 * still lets the visitor download, but nothing in the UI claims the details
 * were saved, because they were not.
 */

export type Lead = {
  name: string;
  email: string;
  company: string;
  phone: string;
  jobTitle: string;
};

export type LeadErrors = Partial<Record<keyof Lead, string>>;

export const emptyLead: Lead = { name: "", email: "", company: "", phone: "", jobTitle: "" };

export function validateLead(l: Lead): LeadErrors {
  const e: LeadErrors = {};
  const name = l.name.trim();
  if (!name) e.name = "Enter your full name.";
  else if (name.length < 2 || !/\p{L}/u.test(name) || /\d/.test(name)) e.name = "Enter a valid name.";

  if (!l.email.trim()) e.email = "Enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(l.email.trim())) e.email = "Enter a valid email address.";

  if (!l.company.trim()) e.company = "Enter your company name.";

  const digits = l.phone.replace(/[\s()+-]/g, "");
  if (!l.phone.trim()) e.phone = "Enter your phone number.";
  else if (!/^[\d\s()+-]+$/.test(l.phone) || digits.length < 10 || digits.length > 15)
    e.phone = "Enter a valid phone number (10 to 15 digits).";

  return e;
}

export type SubmitResult = { ok: true; sent: boolean } | { ok: false };

/** The one integration point. Returns ok:false on any failure. */
export async function submitLead(lead: Lead, context: { document: string; source: string }): Promise<SubmitResult> {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[leadCapture] NEXT_PUBLIC_LEAD_ENDPOINT is not set, lead not sent anywhere.");
    }
    return { ok: true, sent: false };
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...Object.fromEntries(Object.entries(lead).map(([k, v]) => [k, v.trim()])),
        ...context,
        submittedAt: new Date().toISOString(),
      }),
    });
    return res.ok ? { ok: true, sent: true } : { ok: false };
  } catch {
    return { ok: false };
  }
}

/** Downloads exactly the given file under the given name. */
export function downloadPdf(href: string, fileName: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = fileName;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
