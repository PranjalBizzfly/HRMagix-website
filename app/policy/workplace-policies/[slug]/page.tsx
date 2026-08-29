import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { policyDetails, detailBySlug, detailByCode } from "@/lib/policyDetail";
import { policyRegister } from "@/lib/policies";
import { pdfPath, suppliedCodes } from "@/lib/policyAssets";
import { Band, Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/icons";
import Breadcrumbs from "@/components/Breadcrumbs";

/** Flat view of the register, so an entry can be found by code. */
const entries = policyRegister.flatMap((g) =>
  g.entries.map((e) => ({ ...e, group: g.title })),
);
const entryByCode = (code: string) => entries.find((e) => e.code === code);

export function generateStaticParams() {
  return policyDetails.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = detailBySlug(slug);
  const entry = detail ? entryByCode(detail.code) : undefined;
  if (!detail || !entry) return {};
  return {
    title: `${entry.name} — Policy Template`,
    description: `${entry.covers} A HRMagix workplace policy template (${entry.code}), issued to employees through the Documents module with acknowledgement tracked per version.`,
    alternates: { canonical: `/policy/workplace-policies/${detail.slug}` },
    openGraph: {
      title: `${entry.name} · HRMagix`,
      description: entry.covers,
      url: `/policy/workplace-policies/${detail.slug}`,
      siteName: "HRMagix",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
    },
  };
}

/**
 * A single workplace policy template.
 *
 * The page is organised around a distinction that matters: what the policy is
 * FOR (ours to explain), what the employer DEFINES (theirs to decide, so it is
 * set out as open questions), and what the platform RECORDS (verifiable).
 *
 * The approved PDF is the authority on the rules themselves; it is linked from
 * the rail, to view or download. This page does not restate its contents, so it
 * can never drift from the document it points at.
 */
export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = detailBySlug(slug);
  if (!detail) notFound();
  const entry = entryByCode(detail.code);
  if (!entry) notFound();

  // The approved document, if it is on disk. Never render a link to a 404.
  const hasPdf = suppliedCodes().includes(entry.code.toUpperCase());
  const pdf = pdfPath(entry.code);

  const seeAlso = (detail.seeAlso ?? [])
    .map((code) => {
      const d = detailByCode(code);
      const e = entryByCode(code);
      return d && e ? { name: e.name, covers: e.covers, slug: d.slug } : null;
    })
    .filter((x): x is { name: string; covers: string; slug: string } => Boolean(x));

  return (
    <>
      <article>
        <header className="border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
          <div className="shell">
            <Reveal y={8}>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Policy", href: "/policy" },
                  { label: "Workplace Policies", href: "/policy/workplace-policies" },
                  { label: entry.name },
                ]}
              />
            </Reveal>

            <div className="mt-8 max-w-3xl">
              <Reveal y={10} className="flex flex-wrap items-center gap-3">
                <code className="rounded-full bg-surface px-3 py-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.05em] text-accent ring-1 ring-line">
                  {entry.code}
                </code>
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-subtle">
                  {entry.group}
                </span>
              </Reveal>

              <h1 className="display display-md mt-5 text-balance">{entry.name}</h1>
              <Reveal delay={140}>
                <p className="mt-6 text-[17.5px] leading-[1.68] text-body">{entry.covers}</p>
              </Reveal>
            </div>
          </div>
        </header>

        <Band ground="surface" size="md">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] lg:gap-16">
            {/* ---- Body ---- */}
            <div className="max-w-[68ch]">
              <section>
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                  Purpose
                </h2>
                {detail.purpose.map((p, i) => (
                  <Reveal key={i} y={10} delay={i * 70}>
                    <p className="mt-5 text-[17px] leading-[1.75] text-body">{p}</p>
                  </Reveal>
                ))}
              </section>

              <section className="mt-12 border-t border-line pt-8">
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                  Who it applies to
                </h2>
                <Reveal y={10}>
                  <p className="mt-5 text-[16.5px] leading-[1.72] text-muted">{detail.appliesTo}</p>
                </Reveal>
              </section>

              {detail.statute && (
                <Reveal y={12} className="mt-10 rounded-2xl bg-surface-sunken p-6 ring-1 ring-line sm:p-7">
                  <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
                    <Icon name="scale" className="h-4 w-4" />
                    Statutory footing
                  </p>
                  <p className="mt-3.5 text-[15.5px] leading-[1.72] text-muted">{detail.statute}</p>
                </Reveal>
              )}

              {/* The decisions that belong to the employer, stated as questions. */}
              <section className="mt-12 border-t border-line pt-8">
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                  What you write into it
                </h2>
                <p className="mt-4 text-[15.5px] leading-[1.7] text-muted">
                  These are your decisions, not ours. The template provides the structure; the
                  answers below are what make it your policy.
                </p>
                <ul className="mt-6 space-y-4">
                  {detail.defines.map((d, i) => (
                    <Reveal as="li" key={d} delay={i * 45} y={10} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface-raised font-display text-[11.5px] font-bold text-accent-strong"
                      >
                        {i + 1}
                      </span>
                      <span className="text-[16px] leading-[1.7] text-body">{d}</span>
                    </Reveal>
                  ))}
                </ul>
              </section>

              <section className="mt-12 border-t border-line pt-8">
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                  What HRMagix records
                </h2>
                <p className="mt-4 text-[15.5px] leading-[1.7] text-muted">
                  So the policy can be shown to have operated, rather than only to have existed.
                </p>
                <ul className="mt-6 space-y-3.5">
                  {detail.evidence.map((e) => (
                    <li key={e} className="flex gap-3.5 text-[16px] leading-[1.7] text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                      />
                      {e}
                    </li>
                  ))}
                </ul>
              </section>

              <Reveal y={12} className="mt-12 rounded-2xl bg-surface-sunken p-6 ring-1 ring-line sm:p-7">
                <p className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-subtle">
                  Where the rules themselves live
                </p>
                <p className="mt-3.5 text-[15.5px] leading-[1.72] text-muted">
                  {hasPdf ? (
                    <>
                      No duration, threshold, quota or cycle appears above, because the approved{" "}
                      <a
                        href={pdf}
                        target="_blank"
                        rel="noopener"
                        className="font-semibold text-accent underline-offset-2 hover:underline"
                      >
                        {entry.code} document
                      </a>{" "}
                      is the authority on those. This page explains what the policy is for and what
                      the platform records against it; paraphrasing the document here would only
                      create a second version to keep in step.
                    </>
                  ) : (
                    <>
                      No duration, threshold, quota or cycle appears above. Stating a specific rule
                      here would attribute a decision to an employer who never made it — so the
                      section above asks the questions instead of answering them.
                    </>
                  )}
                </p>
              </Reveal>
            </div>

            {/* ---- Rail ---- */}
            <aside>
              <div className="lg:sticky lg:top-[110px]">
                {hasPdf && (
                  <div className="mb-8 rounded-2xl bg-surface-sunken p-6 ring-1 ring-line-accent">
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                      The approved document
                    </p>
                    <p className="mt-3 font-display text-[16px] font-bold leading-snug text-heading">
                      {entry.code} &middot; {entry.name}
                    </p>
                    <p className="mt-2.5 text-[14px] leading-[1.65] text-muted">
                      The signed policy as issued, in PDF.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      <a
                        href={pdf}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-4 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      >
                        <Icon name="folder" className="h-3.5 w-3.5 text-accent" />
                        View PDF
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                      <a
                        href={pdf}
                        download={`${entry.code}-${entry.name.replace(/\s+/g, "-")}.pdf`}
                        className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-[13.5px] font-semibold text-accent ring-1 ring-line-strong transition-colors hover:ring-line-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      >
                        <Icon name="arrowRight" className="h-3.5 w-3.5 rotate-90" />
                        Download
                      </a>
                    </div>
                  </div>
                )}

                {entry.enforcedBy && (
                  <div className="rounded-2xl bg-surface-sunken p-6 ring-1 ring-line">
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                      Enforced in
                    </p>
                    <Link
                      href={entry.enforcedBy.href}
                      className="group mt-3 inline-flex items-center gap-2 font-display text-[16px] font-bold text-heading transition-colors hover:text-accent"
                    >
                      {entry.enforcedBy.label}
                      <span className="text-accent">
                        <Arrow />
                      </span>
                    </Link>
                    <p className="mt-2.5 text-[14px] leading-[1.65] text-muted">
                      This policy is applied mechanically by that module rather than by reminder.
                    </p>
                  </div>
                )}

                {seeAlso.length > 0 && (
                  <div className="mt-8">
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                      Read alongside
                    </p>
                    <ul className="mt-4 space-y-3 border-l border-line pl-4">
                      {seeAlso.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/policy/workplace-policies/${s.slug}`}
                            className="text-[14px] leading-snug text-muted transition-colors hover:text-accent"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 border-t border-line pt-6">
                  <Link
                    href="/policy/workplace-policies"
                    className="group inline-flex items-center gap-2 text-[14px] font-semibold text-accent"
                  >
                    All {policyDetails.length} policies <Arrow />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Band>
      </article>

      <Band ground="sunken" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[20ch]">
              Issue this to your own team, and prove they received it
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              Templates ship inside the Documents module. Write in your rules, publish to the
              employees the policy applies to, and acknowledgement is recorded per person per
              version — re-opened whenever the text changes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/company/contact">Book a demo</Button>
            <Button href="/solutions/employee-management" variant="outline">
              How documents work
            </Button>
          </div>
        </div>
      </Band>

      {seeAlso.length > 0 && (
        <Onward
          title="Related policies"
          links={seeAlso.slice(0, 3).map((s) => ({
            label: s.name,
            href: `/policy/workplace-policies/${s.slug}`,
            note: s.covers,
          }))}
        />
      )}
    </>
  );
}
