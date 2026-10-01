"use client";

import Link from "next/link";
import { Icon } from "./icons";
import { Reveal } from "./motion";
import PdfDownloadButton from "./PdfDownloadButton";

/**
 * The policy document library.
 *
 * Each row carries the name, a short description and a Download control,
 * plus a link to the policy's own page where one exists.
 *
 * `supplied` lists the policy codes with a real file in public/policies. A row
 * in that set renders the Download control. A row outside it renders a
 * plainly-labelled "document not supplied" state instead — never a link that
 * 404s, and never a button that pretends to open something.
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

export default function PolicyLibrary({
  rows,
  supplied,
}: {
  rows: PolicyRow[];
  /** Policy codes that have a real PDF on disk. */
  supplied: string[];
}) {
  const suppliedSet = new Set(supplied.map((c) => c.toUpperCase()));

  const groups = [...new Set(rows.map((r) => r.group))];
  const missing = rows.filter((r) => !suppliedSet.has(r.code.toUpperCase())).length;

  return (
    <div>
      {/* ---- Library status ---- */}
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line-strong pb-6">
        <div>
          <h2 className="display display-md">The document library</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-muted">
            {rows.length} official policies. {rows.length - missing} have a PDF attached
            {missing > 0 && <> · {missing} are awaiting their approved document</>}.
          </p>
        </div>
      </div>

      {missing > 0 && (
        <p className="mt-6 flex items-start gap-3 rounded-xl bg-surface-sunken p-4 text-[14px] leading-[1.65] text-muted ring-1 ring-line">
          <Icon name="folder" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
          <span>
            Rows without a document show their status rather than a broken link. Drop the approved
            PDF into <code className="font-mono text-[13px] text-accent">public/policies</code> named
            for its code, <code className="font-mono text-[13px] text-accent">hrmagix003.pdf</code>{" "}
            for the Leave Policy, and that row&rsquo;s Download control activates on the
            next build.
          </span>
        </p>
      )}

      {/* ---- The official register ---- */}
      {groups.map((group) => (
        <section key={group} className="mt-10">
          {/* Sticky so the group stays visible while its policies scroll. */}
          <h3 className="sticky top-[112px] z-10 -mx-1 border-b border-line-strong bg-surface/95 px-1 pb-3 pt-3 font-display text-[18px] font-bold tracking-[-0.02em] text-heading backdrop-blur supports-[backdrop-filter]:bg-surface/80">
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
                href={`/policy-centre/workplace-policy-library/${row.slug}`}
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
              {/* Gated: opens the lead form, then downloads this row's own PDF. */}
              <PdfDownloadButton
                title={row.name}
                href={row.pdf}
                fileName={`${row.code}-${row.name.replace(/\s+/g, "-")}.pdf`}
                source="Workplace policy library"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-4 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Icon name="arrowRight" className="h-3.5 w-3.5 rotate-90" />
                Download
                <span className="sr-only"> {row.name} as PDF</span>
              </PdfDownloadButton>
            </>
          ) : (
            <span className="text-[13px] leading-snug text-subtle lg:max-w-[15rem] lg:text-right">
              The approved document has not been supplied yet.
              {row.slug && (
                <>
                  {" "}
                  <Link
                    href={`/policy-centre/workplace-policy-library/${row.slug}`}
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
