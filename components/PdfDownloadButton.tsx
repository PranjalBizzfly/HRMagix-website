"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { CountryCode } from "libphonenumber-js/min";
import { downloadPdf, emptyLead, validateLead, type Lead, type LeadErrors } from "@/lib/leadCapture";
import { checkPhone, failureMessage, submitForm } from "@/lib/forms";
import PhoneInput from "./PhoneInput";
import { Icon } from "./icons";
import { Spinner } from "./ui";

/**
 * The HRMagix gated PDF download.
 *
 * A Download button that opens a short lead form; the exact PDF passed in
 * `href` downloads only after the form validates and submitLead() succeeds.
 * "View PDF" is not part of this component and stays ungated wherever it is.
 *
 * Used for every downloadable PDF on the site — the caller supplies the
 * document's title, file and download name from its own data.
 */

type Props = {
  /** Shown in the heading: "Download {title}". */
  title: string;
  href: string;
  fileName: string;
  /** Where the request came from, sent with the lead. */
  source: string;
  /** What the document is, for the modal label. */
  kind?: string;
  className: string;
  children: ReactNode;
};

type Phase = "form" | "submitting" | "success" | "error";

export default function PdfDownloadButton({
  title,
  href,
  fileName,
  source,
  kind = "HR policy document",
  className,
  children,
}: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={className}
      >
        {children}
      </button>
      <AnimatePresence>
      {open && (
        <LeadModal title={title} href={href} fileName={fileName} source={source} kind={kind} onClose={close} />
      )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------ */

function LeadModal({
  title,
  href,
  fileName,
  source,
  kind = "HR policy document",
  onClose,
}: Omit<Props, "className" | "children"> & { onClose: () => void }) {
  const [lead, setLead] = useState<Lead>(emptyLead);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [phase, setPhase] = useState<Phase>("form");
  const [country, setCountry] = useState<CountryCode>("IN");
  const [failure, setFailure] = useState("");
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const headingId = useId();
  const descId = useId();

  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => setMounted(true), []);

  /* Lock scroll, focus the first field, trap Tab, close on Escape. */
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>("input, button:not([disabled]), a[href]"),
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted]);

  const set = (key: keyof Lead) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setLead((l) => ({ ...l, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (phase === "submitting") return;

    const found = validateLead(lead);
    const phone = checkPhone(lead.phone, country);
    if (phone.error) found.phone = phone.error;
    else delete found.phone;
    setErrors(found);
    if (Object.keys(found).length) {
      const firstBad = panelRef.current?.querySelector<HTMLInputElement>('[aria-invalid="true"]');
      firstBad?.focus();
      return;
    }

    setPhase("submitting");
    const result = await submitForm(
      "download",
      { ...lead, phone: phone.e164 ?? "" },
      { document: title, source },
    );
    // The download itself is the service, so it is not held hostage to the
    // lead inbox being configured (503). A network or validation failure is
    // reported and nothing downloads.
    if (!result.ok && result.reason !== "unavailable") {
      if (result.fields) setErrors(result.fields as LeadErrors);
      setFailure(failureMessage(result.reason));
      setPhase("error");
      return;
    }

    setPhase("success");
    downloadPdf(href, fileName);
    setTimeout(() => closeRef.current(), 1800);
  };

  if (!mounted) return null;

  const busy = phase === "submitting";

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-4">
      <motion.button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={busy ? undefined : onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-describedby={descId}
        className="relative flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-[24px] border border-line bg-surface shadow-float sm:rounded-[24px]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
          <div className="min-w-0">
            <span className="eyebrow">
              <Icon name="folder" className="h-3.5 w-3.5" />
              {kind}
            </span>
            <h2 id={headingId} className="mt-3 font-display text-[21px] font-bold leading-snug text-heading sm:text-[23px]">
              Download {title}
            </h2>
            <p id={descId} className="mt-1.5 text-[14.5px] leading-relaxed text-muted">
              Enter your details below to access this {kind.toLowerCase()}.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={busy}
            aria-label="Close download form"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-heading ring-1 ring-line transition-colors hover:bg-surface-raised disabled:opacity-50"
          >
            <Icon name="cross" className="h-4 w-4" />
          </button>
        </div>

        {phase === "success" ? (
          <div className="px-5 py-10 text-center sm:px-7" role="status" aria-live="polite">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ok-soft text-ok">
              <Icon name="check" className="h-6 w-6" />
            </span>
            <p className="mt-4 font-display text-[19px] font-bold text-heading">Your download is starting…</p>
            <p className="mt-1.5 text-[14px] text-muted">{fileName}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
            <div className="grid gap-4 overflow-y-auto px-5 py-5 sm:grid-cols-2 sm:px-7">
              <Field id="lead-name" label="Full name" error={errors.name} className="sm:col-span-2">
                <input
                  ref={firstFieldRef}
                  id="lead-name"
                  type="text"
                  autoComplete="name"
                  value={lead.name}
                  onChange={set("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "lead-name-err" : undefined}
                  className={inputClass(!!errors.name)}
                  placeholder="Priya Sharma"
                />
              </Field>
              <Field id="lead-email" label="Work email" error={errors.email} className="sm:col-span-2">
                <input
                  id="lead-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={lead.email}
                  onChange={set("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "lead-email-err" : undefined}
                  className={inputClass(!!errors.email)}
                  placeholder="you@company.com"
                />
              </Field>
              <Field id="lead-company" label="Company name" error={errors.company} className="sm:col-span-2">
                <input
                  id="lead-company"
                  type="text"
                  autoComplete="organization"
                  value={lead.company}
                  onChange={set("company")}
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "lead-company-err" : undefined}
                  className={inputClass(!!errors.company)}
                  placeholder="Your company name"
                />
              </Field>
              <Field id="lead-phone" label="Phone number" error={errors.phone} className="sm:col-span-2">
                <PhoneInput
                  id="lead-phone"
                  country={country}
                  onCountryChange={setCountry}
                  value={lead.phone}
                  onChange={(v) => {
                    setLead((l) => ({ ...l, phone: v }));
                    if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                  }}
                  invalid={!!errors.phone}
                  describedBy={errors.phone ? "lead-phone-err" : undefined}
                  inputClassName={inputClass(!!errors.phone)}
                />
              </Field>
              <Field id="lead-title" label="Job title" optional className="sm:col-span-2">
                <input
                  id="lead-title"
                  type="text"
                  autoComplete="organization-title"
                  value={lead.jobTitle}
                  onChange={set("jobTitle")}
                  className={inputClass(false)}
                  placeholder="HR Manager"
                />
              </Field>
            </div>

            <div className="border-t border-line px-5 py-4 sm:px-7">
              {phase === "error" && (
                <p role="alert" className="mb-3 rounded-xl bg-danger-soft px-4 py-3 text-[13.5px] font-medium text-danger">
                  {failure || "We couldn’t process your request. Please try again."}
                </p>
              )}
              <button
                type="submit"
                disabled={busy}
                aria-busy={busy}
                className="btn-shimmer inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-brand px-6 text-[15px] font-semibold text-white shadow-glow transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-70"
              >
                {busy ? (
                  <>
                    <Spinner className="h-4 w-4" />
                    Preparing your download…
                  </>
                ) : (
                  <>
                    <Icon name="arrowRight" className="h-4 w-4 rotate-90" />
                    Submit &amp; Download
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>,
    document.body,
  );
}

function inputClass(invalid: boolean) {
  return `h-12 w-full min-w-0 rounded-xl border bg-surface-field px-4 text-[15.5px] text-heading outline-none transition-all duration-200 placeholder:text-subtle/70 focus:border-line-accent focus:ring-4 focus:ring-brand/15 ${
    invalid ? "border-danger" : "border-line-strong"
  }`;
}

function Field({
  id,
  label,
  error,
  optional,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline gap-2 text-[13px] font-semibold text-heading">
        {label}
        {optional ? (
          <span className="text-[12px] font-normal text-subtle">optional</span>
        ) : (
          <span className="text-danger" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-[12.5px] font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
