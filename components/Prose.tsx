import type { ReactNode } from "react";
import { Reveal } from "./motion";
import { Icon } from "./icons";

/**
 * The long-form renderer shared by Insights articles and white papers.
 *
 * Both sections store their body as a list of typed blocks rather than as an
 * HTML string, which is what lets one renderer give the whole site a single
 * reading rhythm — measure, leading, the way a table breaks on a phone, the way
 * a callout is set apart — without any page hand-rolling its own typography.
 *
 * Deliberately narrow: paragraph, heading, list, ordered steps, pull quote,
 * table and callout. Anything a payroll briefing genuinely needs, and nothing
 * that would let an article become a landing page.
 */

export type ProseBlock =
  | { kind: "para"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; items: { label: string; text: string }[] }
  | { kind: "quote"; text: string }
  | { kind: "table"; caption: string; head: string[]; rows: string[][] }
  | { kind: "note"; title: string; text: string }
  | { kind: "callout"; title: string; text: string };

/** A stable id for a heading, so a contents rail can link to it. */
export const headingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);

export default function Prose({
  blocks,
  className = "",
}: {
  blocks: ProseBlock[];
  className?: string;
}) {
  return (
    <div className={`min-w-0 max-w-[68ch] ${className}`}>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ProseBlock }) {
  switch (block.kind) {
    case "para":
      return (
        <Reveal y={10} as="p" className="mt-6 text-[17px] leading-[1.75] text-body first:mt-0">
          {block.text}
        </Reveal>
      );

    case "h2":
      return (
        <Reveal y={12} as="h2" id={headingId(block.text)} className="scroll-mt-28">
          <span className="mt-14 block border-t border-line pt-8 font-display text-[24px] font-bold leading-[1.25] tracking-[-0.025em] text-heading sm:text-[27px]">
            {block.text}
          </span>
        </Reveal>
      );

    case "h3":
      return (
        <Reveal y={10} as="h3" className="mt-10 font-display text-[18.5px] font-bold leading-snug text-heading">
          {block.text}
        </Reveal>
      );

    case "list":
      return (
        <Reveal y={10} as="ul" className="mt-6 space-y-3.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3.5 text-[16.5px] leading-[1.7] text-muted">
              <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
              {item}
            </li>
          ))}
        </Reveal>
      );

    case "steps":
      return (
        <Reveal y={12} as="ol" className="mt-8 space-y-0">
          {block.items.map((item, i) => (
            <li key={item.label} className="relative flex gap-5 pb-7 last:pb-0">
              <span className="relative flex flex-col items-center">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface-raised font-display text-[12.5px] font-bold text-accent-strong">
                  {i + 1}
                </span>
                {i < block.items.length - 1 && (
                  <span aria-hidden="true" className="mt-1 w-px flex-1 bg-line" />
                )}
              </span>
              <span className="min-w-0 pb-1">
                <span className="block font-display text-[16.5px] font-bold leading-snug text-heading">
                  {item.label}
                </span>
                <span className="mt-2 block text-[16px] leading-[1.7] text-muted">{item.text}</span>
              </span>
            </li>
          ))}
        </Reveal>
      );

    case "quote":
      return (
        <Reveal y={12} as="blockquote" className="my-10">
          <p className="border-l-2 border-line-accent pl-6 font-display text-[21px] font-light leading-[1.45] tracking-[-0.015em] text-heading sm:text-[24px]">
            {block.text}
          </p>
        </Reveal>
      );

    case "table":
      /*
       * Two presentations of one table. On a phone a five-column comparison
       * that scrolls sideways is effectively unreadable — you lose the header
       * the moment you scroll — so below `sm` each row becomes a small stacked
       * block with its column name printed against each value. Above `sm` it is
       * an ordinary table. The markup is a real <table> in both cases, so it
       * stays a table to assistive technology.
       */
      return (
        <Reveal y={12} as="figure" className="my-9 min-w-0">
          <div className="overflow-hidden rounded-2xl ring-1 ring-line sm:overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">{block.caption}</caption>
              <thead className="hidden sm:table-header-group">
                <tr className="bg-surface-sunken">
                  {block.head.map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="border-b border-line px-5 py-3.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-subtle"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="block sm:table-row-group">
                {block.rows.map((row, r) => (
                  <tr
                    key={r}
                    className="block border-b border-line last:border-b-0 sm:table-row"
                  >
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`block px-5 py-2 align-top text-[14.5px] leading-[1.6] first:pt-4 last:pb-4 sm:table-cell sm:py-4 sm:first:pt-4 sm:last:pb-4 ${
                          c === 0
                            ? "font-semibold text-heading sm:font-semibold"
                            : "text-muted"
                        }`}
                      >
                        {/* The column name travels with the value on a phone. */}
                        <span className="mb-1 block text-[10.5px] font-bold uppercase tracking-[0.12em] text-subtle sm:hidden">
                          {block.head[c]}
                        </span>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="mt-3 text-[13px] text-subtle">{block.caption}</figcaption>
        </Reveal>
      );

    case "note":
    case "callout":
      return (
        <Reveal y={12} as="aside" className="my-9 rounded-2xl bg-surface-sunken p-6 ring-1 ring-line sm:p-7">
          <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
            <Icon name={block.kind === "note" ? "scale" : "sparkle"} className="h-4 w-4" />
            {block.title}
          </p>
          <p className="mt-3.5 text-[15.5px] leading-[1.72] text-muted">{block.text}</p>
        </Reveal>
      );

    default:
      return null;
  }
}

/**
 * Contents rail built from the h2 blocks in a body. Long-form pages are scanned
 * before they are read, and a reader arriving from search needs to see whether
 * their question is answered before committing to the piece.
 */
export function Contents({
  blocks,
  className = "",
  label = "In this article",
}: {
  blocks: ProseBlock[];
  className?: string;
  label?: string;
}) {
  const heads = blocks.filter((b): b is { kind: "h2"; text: string } => b.kind === "h2");
  if (heads.length < 2) return null;

  return (
    <nav aria-label={label} className={className}>
      <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">{label}</p>
      <ol className="mt-4 space-y-2.5 border-l border-line pl-4">
        {heads.map((h) => (
          <li key={h.text}>
            <a
              href={`#${headingId(h.text)}`}
              className="text-[14px] leading-snug text-muted transition-colors hover:text-accent"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Small labelled meta pair used in article and paper headers. */
export function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">{label}</dt>
      <dd className="mt-1.5 text-[14.5px] font-medium text-heading">{children}</dd>
    </div>
  );
}
