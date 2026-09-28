"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { SubmitButton } from "./ui";
import { SuccessState } from "./states";
import { checkEmail, checkName, failureMessage, submitForm } from "@/lib/forms";

type Fields = { name: string; email: string; company: string; message: string };

const empty: Fields = { name: "", email: "", company: "", message: "" };

/**
 * Posts to /api/forms. The success state appears only when the server confirms
 * delivery; otherwise the visitor sees why, with the team address to use.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState("");
  const [hp, setHp] = useState("");

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    const next: Partial<Fields> = {};
    const n = checkName(fields.name);
    if (n) next.name = n;
    const m = checkEmail(fields.email);
    if (m) next.email = m;
    if (!fields.message.trim()) next.message = "Add a short message.";
    else if (fields.message.trim().length < 10) next.message = "Tell us a little more (at least 10 characters).";
    setErrors(next);
    setFailure("");
    if (Object.keys(next).length) {
      document.querySelector<HTMLElement>('#contact-form [aria-invalid="true"]')?.focus();
      return;
    }

    setBusy(true);
    const result = await submitForm("contact", { ...fields, _hp: hp });
    setBusy(false);
    if (result.ok) {
      setSent(true);
      return;
    }
    if (result.fields) setErrors(result.fields as Partial<Fields>);
    setFailure(failureMessage(result.reason));
  };

  if (sent) {
    return (
      <SuccessState
        title="Thanks, your message has been sent"
        body={
          <>
            Our team will reply to {fields.email} shortly. For anything urgent, email{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              {site.contact.email}
            </a>{" "}
            or call {site.contact.phone}.
          </>
        }
        action={
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setFields(empty);
            }}
            className="inline-flex h-11 items-center rounded-full bg-surface px-5 text-[14px] font-semibold text-accent-strong ring-1 ring-inset ring-line-strong transition-all duration-300 hover:-translate-y-0.5 hover:ring-line-accent motion-reduce:hover:translate-y-0"
          >
            Write another message
          </button>
        }
      />
    );
  }

  return (
    <form id="contact-form" onSubmit={onSubmit} noValidate className="relative grid gap-5" aria-busy={busy || undefined}>
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            type="text"
            value={fields.name}
            onChange={set("name")}
            aria-invalid={!!errors.name || undefined}
            aria-required="true"
            autoComplete="name"
            className={inputClass(!!errors.name)}
            placeholder="Priya Sharma"
          />
        </Field>
        <Field label="Work email" error={errors.email}>
          <input
            type="email"
            value={fields.email}
            onChange={set("email")}
            aria-invalid={!!errors.email || undefined}
            aria-required="true"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <Field label="Company" optional>
        <input
          type="text"
          value={fields.company}
          onChange={set("company")}
          autoComplete="organization"
          className={inputClass(false)}
          placeholder="Company name"
        />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          value={fields.message}
          onChange={set("message")}
            aria-invalid={!!errors.message || undefined}
            aria-required="true"
          rows={5}
          className={`${inputClass(!!errors.message)} h-auto min-h-[150px] resize-y py-4 leading-relaxed`}
          placeholder="What would you like to see in the demo?"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton loading={busy} loadingLabel="Sending…">Send message</SubmitButton>
        <p aria-live="polite" className="text-[13.5px] text-subtle">
          Our team usually replies within a few hours.
        </p>
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

function inputClass(invalid: boolean) {
  return `h-[56px] w-full rounded-2xl border bg-surface-field px-5 text-[15.5px] text-heading outline-none transition-all duration-200 placeholder:text-subtle/70 focus:border-line-accent focus:ring-4 focus:ring-violet-500/15 dark:focus:ring-violet-500/25 ${
    invalid ? "border-danger" : "border-line-strong"
  }`;
}

function Field({
  label,
  children,
  error,
  optional,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-soft">
        {label}
        {optional && <span className="text-[11.5px] font-normal normal-case tracking-normal">optional</span>}
      </span>
      {children}
      {error && <span role="alert" className="mt-1.5 block text-[12.5px] text-danger">{error}</span>}
    </label>
  );
}
