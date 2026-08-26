"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { SubmitButton } from "./ui";

type Fields = { name: string; email: string; company: string; message: string };

const empty: Fields = { name: "", email: "", company: "", message: "" };

/**
 * No backend is published for HRMagix, so the form composes the message and
 * hands it to the visitor's mail client addressed to hello@hrmagix.com.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = "Tell us your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Enter a valid work email";
    if (!fields.message.trim()) next.message = "Add a short message";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.company ? `Company: ${fields.company}` : null,
      "",
      fields.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Demo request — ${fields.company || fields.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            type="text"
            value={fields.name}
            onChange={set("name")}
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
          rows={5}
          className={`${inputClass(!!errors.message)} h-auto min-h-[150px] resize-y py-4 leading-relaxed`}
          placeholder="What would you like to see in the demo?"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton>Send message</SubmitButton>
        <p aria-live="polite" className="text-[13px] text-ink-faint">
          {sent
            ? `Opening your mail app — we'll reply from ${site.contact.email}.`
            : "Our team usually replies within a few hours."}
        </p>
      </div>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return `h-[56px] w-full rounded-2xl border bg-white px-5 text-[15px] text-violet-950 outline-none transition-all duration-200 placeholder:text-violet-300 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15 ${
    invalid ? "border-red-300" : "border-violet-200"
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
      <span className="mb-2 flex items-baseline gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-violet-500">
        {label}
        {optional && <span className="text-[11px] font-normal normal-case tracking-normal">optional</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-[12.5px] text-red-500">{error}</span>}
    </label>
  );
}
