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

/**
 * The framings that would otherwise be identical on all twenty-five policy
 * pages. Keyed on the register group, so conduct, attendance, performance and
 * separation each get language that fits what they actually govern.
 */
const framing: Record<
  string,
  { defines: string; evidence: string; ctaTitle: string; ctaBody: string; omits: string }
> = {
  "Conduct and the working relationship": {
    defines:
      "A conduct policy is only as good as its specifics. The template sets out the structure and the reporting route; what constitutes a breach here, and what follows one, is yours to state.",
    evidence:
      "Conduct cases turn on what was communicated and when. These are the records that establish it.",
    ctaTitle: "A conduct policy nobody can prove they received is not a policy",
    ctaBody:
      "Publish it to the people it governs, and acknowledgement is recorded per person, per version — re-opened whenever the wording changes, which is exactly when the earlier confirmation stops meaning anything.",
    omits:
      "Nothing above states what counts as a breach or what follows one, because those are the employer's determinations and they are set out in the approved document rather than paraphrased here.",
  },
  "Attendance, time and place of work": {
    defines:
      "These are the numbers the platform will enforce mechanically once you set them. Getting them right on paper first is the whole exercise — the system will apply whatever you write, consistently, to everyone.",
    evidence:
      "Attendance and leave disputes are always about a specific person on a specific date. These are the records that answer that question.",
    ctaTitle: "Write the rule once, and let the module apply it",
    ctaBody:
      "Attendance and leave policies are the ones software actually enforces rather than reminds people about. Set the thresholds here, publish the document, and the same rule applies in every department without anyone adjudicating it.",
    omits:
      "No grace window, threshold or quota appears above. Those are the numbers the employer sets and the modules enforce, and they are stated in the approved document rather than approximated here.",
  },
  "Performance, progression and pay": {
    defines:
      "Progression policies fail on process rather than principle. The template provides the cycle and the sequence; the criteria, the weightings and who decides are the parts that make it yours.",
    evidence:
      "A progression decision that cannot be evidenced is difficult to defend later. These are the records that support it.",
    ctaTitle: "Publish the criteria before the cycle, not after it",
    ctaBody:
      "Issue the policy to the people it applies to and record their acknowledgement against the version they read, so an appraisal outcome is measured against criteria everyone had in advance.",
    omits:
      "No cycle, rating scale or eligibility period appears above. Those are the employer's criteria, and restating them here would create a second version to keep in step with the approved one.",
  },
  Separation: {
    defines:
      "Separation policies are read under pressure, usually once, by someone who is leaving. The template gives the sequence; the notice, the recoveries and the clearance steps are yours to define precisely.",
    evidence:
      "An exit is the point at which every other record is examined at once. These are the ones that settle it.",
    ctaTitle: "The document people read most carefully is the one about leaving",
    ctaBody:
      "Issue it during employment rather than at resignation, and record acknowledgement per version — because the notice period somebody agreed to is the one that was in force when they joined.",
    omits:
      "No notice period, recovery basis or settlement timeline appears above. Those are the terms the employer sets, and they are the part of the document people read most carefully — so they are quoted from it rather than summarised here.",
  },
};

const defaultFraming = {
  defines:
    "These are your decisions, not ours. The template provides the structure; the answers below are what make it your policy.",
  evidence: "So the policy can be shown to have operated, rather than only to have existed.",
  ctaTitle: "Issue this to your own team, and prove they received it",
  ctaBody:
    "Write in your rules, publish to the employees the policy applies to, and acknowledgement is recorded per person per version — re-opened whenever the text changes.",
};

/** Why the named module carries this policy rather than merely reminding people of it. */
const enforcementNote: Record<string, string> = {
  "Attendance & Shifts":
    "The thresholds in this policy are applied by the attendance rules themselves, so the same lateness or absence produces the same outcome in every department.",
  "Leave Management":
    "Entitlement, accrual and balance are held in the leave ledger, so an application is checked against this policy as it is submitted rather than after it is approved.",
  Payroll:
    "The amounts this policy governs are computed in the payroll run from the record, which is why the figure on a payslip can be traced back to the rule that produced it.",
  "Onboarding & Lifecycle":
    "The dates and stages this policy sets are fields on the employee record, so the decision is raised before the deadline passes rather than after somebody notices.",
  "Employee Management":
    "The change this policy governs is recorded once on the employee record, and everything downstream of it — approvals, entitlements, reporting lines — follows from that one edit.",
  Documents:
    "The document itself is issued from here and acknowledged per version, so what an employee received and when is a record rather than a recollection.",
  "HR Analytics":
    "Outcomes under this policy are reported from the same record that captured them, so a trend can be examined without assembling it by hand.",
  "Employee Self-Service":
    "Employees act on this policy directly in the portal, which is what keeps the obligation with the person it belongs to.",
};

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

  const frame = framing[entry.group] ?? defaultFraming;

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
                <p className="mt-4 text-[15.5px] leading-[1.7] text-muted">{frame.defines}</p>
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
                <p className="mt-4 text-[15.5px] leading-[1.7] text-muted">{frame.evidence}</p>
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
                      {frame.omits}{" "}
                      <a
                        href={pdf}
                        target="_blank"
                        rel="noopener"
                        className="font-semibold text-accent underline-offset-2 hover:underline"
                      >
                        Read {entry.code} in full
                      </a>
                      .
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
                      {enforcementNote[entry.enforcedBy.label] ??
                        "This policy is applied by that module rather than by reminder."}
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
            <h2 className="display display-md max-w-[20ch]">{frame.ctaTitle}</h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              {frame.ctaBody}{" "}
              <Link
                href="/solutions/employee-management"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                How the Documents module handles it
              </Link>
              .
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
