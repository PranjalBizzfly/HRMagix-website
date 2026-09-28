"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { SubmitButton } from "./ui";
import { SuccessState } from "./states";
import { Icon } from "./icons";
import type { CountryCode } from "libphonenumber-js/min";
import PhoneInput from "./PhoneInput";
import { checkEmail, checkName, checkPhone, checkUrl, failureMessage, submitForm, type FormKind } from "@/lib/forms";

/**
 * A configurable enquiry form, used by Careers and by Vendor & Partners.
 *
 * Validates in the browser, then posts to /api/forms (the same rules run on
 * the server). The success state appears only when the server confirms the
 * message was delivered; any failure is shown with the team address as a
 * direct fallback. Fields are declared by the caller.
 */

export type FieldDef = {
  name: string;
  label: string;
  /** Long-form answers get a textarea. */
  type?: "text" | "email" | "url" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  /** Guidance shown under the field. */
  hint?: string;
  /** Half-width on wide screens, so a form is not one long column. */
  half?: boolean;
};

export default function EnquiryForm({
  form,
  fields,
  subject,
  submitLabel,
  intro,
  successTitle,
}: {
  /** Which server-side rule set and inbox label this form uses. */
  form: Extract<FormKind, "careers" | "vendor">;
  fields: FieldDef[];
  /** Prefills the mail subject so the recipient can triage. */
  subject: string;
  submitLabel: string;
  intro?: string;
  successTitle: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState("");
  const [hp, setHp] = useState("");
  const [country, setCountry] = useState<CountryCode>("IN");

  const set = (name: string) => (value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => {
      if (!e[name]) return e;
      const next = { ...e };
      delete next[name];
      return next;
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;

    const next: Record<string, string> = {};
    const out: Record<string, string> = {};
    for (const f of fields) {
      const raw = (values[f.name] ?? "").trim();
      if (f.required && !raw) {
        next[f.name] = `${f.label} is required.`;
        continue;
      }
      if (!raw) continue;
      let err: string | undefined;
      if (f.type === "email") err = checkEmail(raw);
      else if (f.type === "url") err = checkUrl(raw);
      else if (f.type === "tel") {
        const p = checkPhone(raw, country);
        err = p.error;
        if (p.e164) out[f.name] = p.e164;
      } else if (f.name === "name") err = checkName(raw);
      if (err) next[f.name] = err;
      else if (!out[f.name]) out[f.name] = raw;
    }

    setErrors(next);
    setFailure("");
    if (Object.keys(next).length) {
      // Move focus to the first field in error so the message is announced.
      const first = fields.find((f) => next[f.name]);
      if (first) document.getElementById(`enq-${first.name}`)?.focus();
      return;
    }

    setBusy(true);
    const result = await submitForm(form, { ...out, _hp: hp }, { subject });
    setBusy(false);
    if (result.ok) {
      setSent(true);
      return;
    }
    if (result.fields) setErrors(result.fields);
    setFailure(failureMessage(result.reason));
  };

  if (sent) {
    return (
      <SuccessState
        title={successTitle}
        body={
          <>
            It has reached our team, and we will reply to the email you gave. To add anything, write to{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              {site.contact.email}
            </a>
            .
          </>
        }
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="relative grid gap-5" aria-busy={busy || undefined}>
      <input
        type="text"
        name="website"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      {intro && (
        <p className="flex items-start gap-3 rounded-xl bg-surface-sunken p-4 text-[14px] leading-[1.65] text-muted ring-1 ring-line">
          <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
          {intro}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          const id = `enq-${f.name}`;
          const error = errors[f.name];
          const describedBy = error ? `${id}-error` : f.hint ? `${id}-hint` : undefined;
          const shared = {
            id,
            name: f.name,
            value: values[f.name] ?? "",
            "aria-invalid": Boolean(error) || undefined,
            "aria-describedby": describedBy,
            placeholder: f.placeholder ?? defaultPlaceholder(f),
            "aria-required": f.required || undefined,
            className: `w-full rounded-xl bg-surface-field px-4 py-3.5 text-[15px] text-heading outline-none ring-1 transition-colors placeholder:text-subtle focus:ring-2 ${
              error ? "ring-danger" : "ring-line focus:ring-brand"
            }`,
          };

          return (
            <div key={f.name} className={f.half ? "sm:col-span-1" : "sm:col-span-2"}>
              <label htmlFor={id} className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
                {f.label}
                {!f.required && <span className="ml-2 normal-case tracking-normal text-subtle">optional</span>}
              </label>

              <div className="mt-2.5">
                {f.type === "tel" ? (
                  <PhoneInput
                    id={id}
                    country={country}
                    onCountryChange={setCountry}
                    value={values[f.name] ?? ""}
                    onChange={set(f.name)}
                    invalid={Boolean(error)}
                    describedBy={describedBy}
                    inputClassName={shared.className}
                  />
                ) : f.type === "textarea" ? (
                  <textarea
                    {...shared}
                    rows={5}
                    onChange={(e) => set(f.name)(e.target.value)}
                    className={`${shared.className} resize-y leading-[1.6]`}
                  />
                ) : (
                  <input
                    {...shared}
                    type={f.type === "email" ? "email" : f.type === "url" ? "url" : "text"}
                    autoComplete={
                      f.type === "email" ? "email" : f.name === "name" ? "name" : "off"
                    }
                    onChange={(e) => set(f.name)(e.target.value)}
                  />
                )}
              </div>

              {error ? (
                <p id={`${id}-error`} role="alert" className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-danger">
                  <Icon name="cross" className="h-3.5 w-3.5" />
                  {error}
                </p>
              ) : (
                f.hint && (
                  <p id={`${id}-hint`} className="mt-2 text-[12.5px] leading-snug text-subtle">
                    {f.hint}
                  </p>
                )
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-2">
        <SubmitButton loading={busy} loadingLabel="Sending…">{submitLabel}</SubmitButton>
      </div>

      <div aria-live="assertive">
        {failure && (
          <p role="alert" className="rounded-xl bg-danger-soft px-4 py-3 text-[13.5px] font-medium text-danger">
            {failure}{" "}
            <a href={`mailto:${site.contact.email}`} className="underline underline-offset-2">
              {site.contact.email}
            </a>
          </p>
        )}
      </div>

    </form>
  );
}

/** A clear example for any field the caller did not give a placeholder. */
function defaultPlaceholder(f: FieldDef): string {
  if (f.type === "email") return "you@company.com";
  if (f.type === "url") return "https://";
  if (f.type === "tel") return "98765 43210";
  if (f.name === "name") return "Priya Sharma";
  if (f.name === "company") return "Your company name";
  if (f.name === "location") return "City, country";
  return `${f.label}`;
}
