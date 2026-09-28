import { NextResponse } from "next/server";
import { checkEmail, checkName, checkUrl, isE164, type FormKind } from "@/lib/forms";

/**
 * The single endpoint behind every HRMagix form.
 *
 * DELIVERY. A submission is delivered to whichever of these is configured,
 * in this order, and the form is only told "ok" after delivery succeeds:
 *
 *   RESEND_API_KEY + FORMS_TO_EMAIL   email via Resend (FORMS_FROM_EMAIL
 *                                      optional, must be a verified sender)
 *   FORMS_WEBHOOK_URL                 JSON POST to a CRM / Zapier / Make /
 *                                      Slack workflow / any HTTPS endpoint
 *
 * With neither set the route answers 503, and the forms say plainly that the
 * message was not sent. Nothing pretends to succeed.
 */

export const dynamic = "force-dynamic";

type Rule = { required?: boolean; kind?: "email" | "name" | "url" | "phone" | "text"; max?: number };

const RULES: Record<FormKind, Record<string, Rule>> = {
  contact: {
    name: { required: true, kind: "name" },
    email: { required: true, kind: "email" },
    company: { max: 160 },
    message: { required: true, max: 5000 },
  },
  careers: {
    name: { required: true, kind: "name" },
    email: { required: true, kind: "email" },
    work: { max: 5000 },
    built: { max: 5000 },
    link: { kind: "url" },
    location: { max: 160 },
  },
  vendor: {
    name: { required: true, kind: "name" },
    company: { required: true, max: 160 },
    email: { required: true, kind: "email" },
    kind: { max: 500 },
    proposal: { max: 5000 },
    clients: { max: 5000 },
    terms: { max: 5000 },
    site: { kind: "url" },
  },
  download: {
    name: { required: true, kind: "name" },
    email: { required: true, kind: "email" },
    company: { required: true, max: 160 },
    phone: { required: true, kind: "phone" },
    jobTitle: { max: 160 },
  },
};

const SUBJECTS: Record<FormKind, string> = {
  contact: "Demo request",
  careers: "Careers enquiry",
  vendor: "Vendor & partner enquiry",
  download: "Resource download",
};

export async function POST(req: Request) {
  let body: { form?: string; data?: Record<string, unknown>; context?: Record<string, unknown>; page?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const form = body.form as FormKind;
  const rules = RULES[form];
  if (!rules || typeof body.data !== "object" || !body.data) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (typeof body.data._hp === "string" && body.data._hp.trim()) {
    return NextResponse.json({ ok: true });
  }

  const data: Record<string, string> = {};
  const fields: Record<string, string> = {};
  for (const [key, rule] of Object.entries(rules)) {
    const raw = body.data[key];
    const v = typeof raw === "string" ? raw.trim() : "";
    if (rule.required && !v) {
      fields[key] = "Required.";
      continue;
    }
    if (v.length > (rule.max ?? 2000)) fields[key] = "Too long.";
    else if (v && rule.kind === "email") {
      const e = checkEmail(v);
      if (e) fields[key] = e;
    } else if (v && rule.kind === "name") {
      const e = checkName(v);
      if (e) fields[key] = e;
    } else if (v && rule.kind === "url") {
      const e = checkUrl(v);
      if (e) fields[key] = e;
    } else if (v && rule.kind === "phone" && !isE164(v)) fields[key] = "Invalid phone number.";
    if (v) data[key] = v;
  }
  if (Object.keys(fields).length) return NextResponse.json({ error: "invalid", fields }, { status: 422 });

  const context = Object.fromEntries(
    Object.entries(body.context ?? {})
      .filter(([, v]) => typeof v === "string")
      .map(([k, v]) => [k, String(v).slice(0, 300)]),
  );
  const payload = {
    form,
    subject: `${SUBJECTS[form]}${context.document ? `: ${context.document}` : ""}`,
    data,
    context,
    page: typeof body.page === "string" ? body.page.slice(0, 300) : "",
    submittedAt: new Date().toISOString(),
  };

  const delivered = await deliver(payload);
  if (!delivered) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  return NextResponse.json({ ok: true });
}

async function deliver(p: {
  subject: string;
  data: Record<string, string>;
  context: Record<string, string>;
  page: string;
  submittedAt: string;
  form: string;
}): Promise<boolean> {
  const { RESEND_API_KEY, FORMS_TO_EMAIL, FORMS_FROM_EMAIL, FORMS_WEBHOOK_URL } = process.env;

  if (RESEND_API_KEY && FORMS_TO_EMAIL) {
    const lines = [
      ...Object.entries(p.data).map(([k, v]) => `${k}: ${v}`),
      ...Object.entries(p.context).map(([k, v]) => `${k}: ${v}`),
      `page: ${p.page}`,
      `submitted: ${p.submittedAt}`,
    ];
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FORMS_FROM_EMAIL || "HRMagix Website <onboarding@resend.dev>",
          to: FORMS_TO_EMAIL.split(",").map((s) => s.trim()),
          reply_to: p.data.email,
          subject: p.subject,
          text: lines.join("\n"),
        }),
      });
      if (res.ok) return true;
    } catch {
      /* fall through to the webhook, if any */
    }
  }

  if (FORMS_WEBHOOK_URL) {
    try {
      const res = await fetch(FORMS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  return false;
}
