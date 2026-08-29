"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { SubmitButton } from "./ui";
import { SuccessState } from "./states";
import { Icon } from "./icons";

/**
 * A configurable enquiry form, used by Careers and by Vendor & Partners.
 *
 * HOW IT SUBMITS, STATED HONESTLY.
 *
 * HRMagix publishes no application portal and no supplier registration system,
 * and this site has no backend. Rather than pretend otherwise, the form
 * validates in the browser and then hands a fully composed message to the
 * visitor's own mail client, addressed to the published team address.
 *
 * That is a real, working path — the message reaches the same inbox a direct
 * email would — but it is not a submission to a server, so the success state
 * says exactly what happened ("we handed it to your mail app") and the address
 * is shown as a fallback for anyone without a mail client configured.
 *
 * Fields are declared by the caller so Careers can ask what someone wants to
 * work on while Vendor asks what they supply, without either page inheriting a
 * generic "how can we help" box.
 */

export type FieldDef = {
  name: string;
  label: string;
  /** Long-form answers get a textarea. */
  type?: "text" | "email" | "url" | "textarea";
  placeholder?: string;
  required?: boolean;
  /** Guidance shown under the field. */
  hint?: string;
  /** Half-width on wide screens, so a form is not one long column. */
  half?: boolean;
};

export default function EnquiryForm({
  fields,
  subject,
  submitLabel,
  intro,
  successTitle,
}: {
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

  const set = (name: string) => (value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => {
      if (!e[name]) return e;
      const next = { ...e };
      delete next[name];
      return next;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const next: Record<string, string> = {};
    for (const f of fields) {
      const raw = (values[f.name] ?? "").trim();
      if (f.required && !raw) {
        next[f.name] = `${f.label} is required`;
        continue;
      }
      if (!raw) continue;
      if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) {
        next[f.name] = "Enter a valid email address";
      }
      if (f.type === "url" && !/^https?:\/\/\S+\.\S+/.test(raw)) {
        next[f.name] = "Enter a full URL, starting with https://";
      }
    }

    setErrors(next);
    if (Object.keys(next).length) {
      // Move focus to the first field in error so the message is announced.
      const first = fields.find((f) => next[f.name]);
      if (first) document.getElementById(`enq-${first.name}`)?.focus();
      return;
    }

    const body = fields
      .map((f) => {
        const raw = (values[f.name] ?? "").trim();
        return raw ? `${f.label}:\n${raw}` : null;
      })
      .filter(Boolean)
      .join("\n\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <SuccessState
        title={successTitle}
        body={
          <>
            We handed it to your mail app, addressed to{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              {site.contact.email}
            </a>
            . If nothing opened, your device may not have a mail client set up — write to that
            address directly and the message reaches the same place.
          </>
        }
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5">
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
            placeholder: f.placeholder,
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
                {f.type === "textarea" ? (
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
        <SubmitButton loadingLabel="Opening your mail app…">{submitLabel}</SubmitButton>
      </div>

      <p className="text-[12.5px] leading-relaxed text-subtle">
        This opens a pre-filled message in your own mail app rather than posting to a server — there
        is no application portal behind it. Nothing is stored on this website.
      </p>
    </form>
  );
}
