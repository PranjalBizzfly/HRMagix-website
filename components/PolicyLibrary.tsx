"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./icons";
import { Reveal } from "./motion";
import { SubmitButton } from "./ui";
import {
  addCustomPolicy,
  getCustomPolicyUrl,
  listCustomPolicies,
  removeCustomPolicy,
  type CustomPolicyMeta,
} from "@/lib/customPolicyStore";

/**
 * The policy document library.
 *
 * Each row carries the four things a document library needs — name, short
 * description, View PDF, Download PDF — plus a link to the policy's own page,
 * which already existed and is not removed.
 *
 * TWO STATES PER ROW, AND THE DISTINCTION IS THE POINT.
 *
 * `supplied` lists the policy codes with a real file in public/policies. A row
 * in that set renders working View and Download controls. A row outside it
 * renders a plainly-labelled "document not supplied" state instead — never a
 * link that 404s, and never a button that pretends to open something.
 *
 * Custom policies added in this browser are stored as real PDFs in IndexedDB
 * and get the same controls, driven by object URLs.
 */

export type PolicyRow = {
  code: string;
  name: string;
  covers: string;
  group: string;
  /** Detail page slug, where one exists. */
  slug?: string;
  /** Public path to the PDF, whether or not the file is there yet. */
  pdf: string;
};

const MAX_MB = 15;

export default function PolicyLibrary({
  rows,
  supplied,
}: {
  rows: PolicyRow[];
  /** Policy codes that have a real PDF on disk. */
  supplied: string[];
}) {
  const suppliedSet = new Set(supplied.map((c) => c.toUpperCase()));

  const [custom, setCustom] = useState<CustomPolicyMeta[]>([]);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    listCustomPolicies()
      .then(setCustom)
      .catch((e: Error) => setStorageError(e.message));
  }, []);

  const onAdded = useCallback((meta: CustomPolicyMeta) => {
    setCustom((prev) => [meta, ...prev]);
    setOpen(false);
  }, []);

  const onRemove = useCallback(async (id: string) => {
    await removeCustomPolicy(id);
    setCustom((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const groups = [...new Set(rows.map((r) => r.group))];
  const missing = rows.filter((r) => !suppliedSet.has(r.code.toUpperCase())).length;

  return (
    <div>
      {/* ---- Library status + the Add control ---- */}
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line-strong pb-6">
        <div>
          <h2 className="display display-md">The document library</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-muted">
            {rows.length} official policies. {rows.length - missing} have a PDF attached
            {missing > 0 && <> · {missing} are awaiting their approved document</>}.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group inline-flex h-12 shrink-0 items-center gap-2.5 rounded-full bg-brand pl-5 pr-6 text-[14.5px] font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
        >
          <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[17px] leading-none">
            +
          </span>
          Add Custom Policy
        </button>
      </div>

      {missing > 0 && (
        <p className="mt-6 flex items-start gap-3 rounded-xl bg-surface-sunken p-4 text-[14px] leading-[1.65] text-muted ring-1 ring-line">
          <Icon name="folder" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
          <span>
            Rows without a document show their status rather than a broken link. Drop the approved
            PDF into <code className="font-mono text-[13px] text-accent">public/policies</code> named
            for its code — <code className="font-mono text-[13px] text-accent">hrmagix003.pdf</code>{" "}
            for the Leave Policy — and that row&rsquo;s View and Download controls activate on the
            next build.
          </span>
        </p>
      )}

      {/* ---- Custom policies added in this browser ---- */}
      {custom.length > 0 && (
        <section className="mt-12">
          <h3 className="flex flex-wrap items-center gap-3 border-b border-line-accent pb-3">
            <span className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
              Added in this browser
            </span>
            <span className="rounded-full bg-surface-raised px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-strong">
              {custom.length}
            </span>
          </h3>
          <p className="mt-4 max-w-2xl text-[14px] leading-[1.65] text-muted">
            Stored locally on this device, not published to anyone else. Issuing a policy to
            employees and tracking acknowledgement per version happens in the{" "}
            <Link href="/solutions/employee-management" className="font-semibold text-accent underline-offset-2 hover:underline">
              Documents module
            </Link>
            .
          </p>
          <ul className="mt-2 divide-y divide-line">
            {custom.map((p) => (
              <CustomRow key={p.id} policy={p} onRemove={onRemove} />
            ))}
          </ul>
        </section>
      )}

      {storageError && (
        <p className="mt-6 flex items-start gap-3 rounded-xl bg-surface-sunken p-4 text-[14px] leading-[1.65] text-muted ring-1 ring-line">
          <Icon name="cross" className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
          Custom policies are unavailable in this browser: {storageError}
        </p>
      )}

      {/* ---- The official register ---- */}
      {groups.map((group) => (
        <section key={group} className="mt-14">
          <h3 className="border-b border-line-strong pb-3 font-display text-[18px] font-bold tracking-[-0.02em] text-heading">
            {group}
          </h3>
          <ul className="divide-y divide-line">
            {rows
              .filter((r) => r.group === group)
              .map((row, i) => (
                <PolicyRowItem
                  key={row.code}
                  row={row}
                  hasPdf={suppliedSet.has(row.code.toUpperCase())}
                  delay={i * 30}
                />
              ))}
          </ul>
        </section>
      ))}

      {open && <AddPolicyDialog onClose={() => setOpen(false)} onAdded={onAdded} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function PolicyRowItem({ row, hasPdf, delay }: { row: PolicyRow; hasPdf: boolean; delay: number }) {
  return (
    <Reveal as="li" delay={delay} y={10} className="py-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-10">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <code className="font-mono text-[12px] font-semibold uppercase tracking-[0.04em] text-accent">
              {row.code}
            </code>
            {!hasPdf && (
              <span className="rounded-full bg-surface-sunken px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-subtle ring-1 ring-line">
                Document not supplied
              </span>
            )}
          </div>

          <h4 className="mt-2 font-display text-[17px] font-bold leading-snug text-heading">
            {row.slug ? (
              <Link
                href={`/policy/workplace-policies/${row.slug}`}
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {row.name}
              </Link>
            ) : (
              row.name
            )}
          </h4>

          <p className="mt-2 max-w-3xl text-[15px] leading-[1.68] text-muted">{row.covers}</p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5">
          {hasPdf ? (
            <>
              <a
                href={row.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-surface px-4 text-[13.5px] font-semibold text-body ring-1 ring-inset ring-line-strong transition-colors hover:ring-line-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Icon name="folder" className="h-3.5 w-3.5 text-accent" />
                View PDF
                <span className="sr-only">— {row.name}, opens in a new tab</span>
              </a>
              <a
                href={row.pdf}
                download={`${row.code}-${row.name.replace(/\s+/g, "-")}.pdf`}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-4 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Icon name="arrowRight" className="h-3.5 w-3.5 rotate-90" />
                Download
                <span className="sr-only">— {row.name} as PDF</span>
              </a>
            </>
          ) : (
            <span className="text-[13px] leading-snug text-subtle lg:max-w-[15rem] lg:text-right">
              The approved document has not been supplied yet.
              {row.slug && (
                <>
                  {" "}
                  <Link
                    href={`/policy/workplace-policies/${row.slug}`}
                    className="font-semibold text-accent underline-offset-2 hover:underline"
                  >
                    Read what it covers
                  </Link>
                </>
              )}
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */

function CustomRow({
  policy,
  onRemove,
}: {
  policy: CustomPolicyMeta;
  onRemove: (id: string) => Promise<void>;
}) {
  const [busy, setBusy] = useState<"view" | "download" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const withUrl = async (fn: (url: string) => void) => {
    try {
      const url = await getCustomPolicyUrl(policy.id);
      fn(url);
      // Give the browser time to consume the URL before releasing the blob.
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(null);
    }
  };

  return (
    <li className="py-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-10">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-surface-raised px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-accent-strong">
              Custom
            </span>
            <span className="text-[12px] text-subtle">
              {policy.fileName} · {(policy.fileSize / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
          <h4 className="mt-2 font-display text-[17px] font-bold leading-snug text-heading">
            {policy.name}
          </h4>
          <p className="mt-2 max-w-3xl text-[15px] leading-[1.68] text-muted">
            {policy.description}
          </p>
          {error && (
            <p role="alert" className="mt-2 text-[13px] font-medium text-danger">
              {error}
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5">
          <button
            type="button"
            disabled={busy !== null}
            onClick={() => {
              setBusy("view");
              setError(null);
              void withUrl((url) => window.open(url, "_blank", "noopener,noreferrer"));
            }}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-surface px-4 text-[13.5px] font-semibold text-body ring-1 ring-inset ring-line-strong transition-colors hover:ring-line-accent disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon name="folder" className="h-3.5 w-3.5 text-accent" />
            View PDF
          </button>
          <button
            type="button"
            disabled={busy !== null}
            onClick={() => {
              setBusy("download");
              setError(null);
              void withUrl((url) => {
                const a = document.createElement("a");
                a.href = url;
                a.download = policy.fileName || `${policy.name}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
              });
            }}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-4 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon name="arrowRight" className="h-3.5 w-3.5 rotate-90" />
            Download
          </button>
          <button
            type="button"
            onClick={() => void onRemove(policy.id)}
            aria-label={`Remove ${policy.name}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-subtle ring-1 ring-inset ring-line transition-colors hover:text-danger hover:ring-danger focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon name="cross" className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */

function AddPolicyDialog({
  onClose,
  onAdded,
}: {
  onClose: () => void;
  onAdded: (meta: CustomPolicyMeta) => void;
}) {
  const uid = useId();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  /* The dialog owns focus and the scroll position while it is open. */
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    firstFieldRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus?.();
    };
  }, [onClose]);

  const validate = (f: File | null) => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Enter a policy name";
    else if (name.trim().length < 3) next.name = "Policy name is too short";
    if (!description.trim()) next.description = "Enter a short description";

    if (!f) next.file = "Attach the approved policy PDF";
    else if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      next.file = "The file must be a PDF";
    } else if (f.size === 0) {
      next.file = "That file is empty";
    } else if (f.size > MAX_MB * 1024 * 1024) {
      next.file = `The file must be ${MAX_MB} MB or smaller`;
    }
    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(file);
    setErrors(next);
    if (Object.keys(next).length) {
      const firstKey = ["name", "description", "file"].find((k) => next[k]);
      if (firstKey) document.getElementById(`${uid}-${firstKey}`)?.focus();
      return;
    }
    setSaving(true);
    try {
      const meta = await addCustomPolicy({ name, description, file: file as File });
      onAdded(meta);
    } catch (err) {
      setErrors({ file: (err as Error).message });
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${uid}-title`}
      onMouseDown={(e) => {
        if (!panelRef.current?.contains(e.target as Node)) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="w-full max-w-2xl rounded-t-3xl bg-canvas p-6 shadow-float ring-1 ring-line sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 id={`${uid}-title`} className="display display-md">
              Add a custom policy
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-[1.68] text-muted">
              For a policy your organisation has approved that is not in the standard register.
              Attach the approved document — nothing is generated for you.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-subtle ring-1 ring-inset ring-line transition-colors hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon name="cross" className="h-4 w-4" />
          </button>
        </div>

        <form noValidate onSubmit={onSubmit} className="mt-8 grid gap-5">
          <Field
            id={`${uid}-name`}
            label="Policy name"
            error={errors.name}
            hint="As it appears on the approved document."
          >
            <input
              ref={firstFieldRef}
              id={`${uid}-name`}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((p) => ({ ...p, name: "" }));
              }}
              placeholder="e.g. Remote Work Allowance Policy"
              aria-invalid={Boolean(errors.name)}
              className={`w-full rounded-xl bg-surface-field px-4 py-3.5 text-[15px] text-heading outline-none ring-1 transition-colors placeholder:text-subtle focus:ring-2 ${
                errors.name ? "ring-danger" : "ring-line focus:ring-brand"
              }`}
            />
          </Field>

          <Field
            id={`${uid}-description`}
            label="Description"
            error={errors.description}
            hint="One or two sentences on what the policy governs."
          >
            <textarea
              id={`${uid}-description`}
              rows={3}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setErrors((p) => ({ ...p, description: "" }));
              }}
              placeholder="What this policy covers, and who it applies to."
              aria-invalid={Boolean(errors.description)}
              className={`w-full resize-y rounded-xl bg-surface-field px-4 py-3.5 text-[15px] leading-[1.6] text-heading outline-none ring-1 transition-colors placeholder:text-subtle focus:ring-2 ${
                errors.description ? "ring-danger" : "ring-line focus:ring-brand"
              }`}
            />
          </Field>

          <Field
            id={`${uid}-file`}
            label="Policy PDF"
            error={errors.file}
            hint={`PDF only, up to ${MAX_MB} MB.`}
          >
            <label
              htmlFor={`${uid}-file`}
              className={`flex cursor-pointer items-center gap-4 rounded-xl bg-surface-field px-4 py-4 ring-1 transition-colors focus-within:ring-2 ${
                errors.file ? "ring-danger" : "ring-line focus-within:ring-brand hover:ring-line-accent"
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-sunken text-accent ring-1 ring-line">
                <Icon name="folder" className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-semibold text-heading">
                  {file ? file.name : "Choose a PDF"}
                </span>
                <span className="mt-0.5 block text-[13px] text-subtle">
                  {file
                    ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
                    : "Click to browse for the approved document"}
                </span>
              </span>
              <input
                id={`${uid}-file`}
                type="file"
                accept="application/pdf,.pdf"
                className="sr-only"
                onChange={(e) => {
                  const f = e.target.files?.[0] ?? null;
                  setFile(f);
                  setErrors((p) => ({ ...p, file: "" }));
                }}
              />
            </label>
          </Field>

          <p className="flex items-start gap-3 rounded-xl bg-surface-sunken p-4 text-[13.5px] leading-[1.65] text-muted ring-1 ring-line">
            <Icon name="lock" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
            The file is stored in this browser only, so View and Download work immediately and
            survive a reload. It is not uploaded to a server and not visible to anyone else —
            publishing a policy to employees and tracking acknowledgement per version happens in the
            HRMagix Documents module.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <SubmitButton loading={saving} loadingLabel="Adding…">
              Add policy
            </SubmitButton>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-[58px] items-center justify-center rounded-full px-7 text-[16px] font-semibold text-body ring-1 ring-inset ring-line-strong transition-colors hover:ring-line-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
        {label}
      </label>
      <div className="mt-2.5">{children}</div>
      {error ? (
        <p role="alert" className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-danger">
          <Icon name="cross" className="h-3.5 w-3.5" />
          {error}
        </p>
      ) : (
        hint && <p className="mt-2 text-[12.5px] leading-snug text-subtle">{hint}</p>
      )}
    </div>
  );
}
