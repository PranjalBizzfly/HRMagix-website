import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { legalPages, legalBySlug, policyRegister, policyCount, registerNotes } from "@/lib/policies";
import { Band, Opening, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

const WORKPLACE = "workplace-policies";

export function generateStaticParams() {
  return [...legalPages.map((p) => ({ slug: p.slug })), { slug: WORKPLACE }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === WORKPLACE) {
    return {
      title: "Workplace Policy Library",
      description: `The ${policyCount} HR policy templates HRMagix ships in the Documents module — conduct, attendance, leave, performance, pay and separation — issued to employees with acknowledgement tracked per version.`,
      alternates: { canonical: `/policy/${WORKPLACE}` },
    };
  }
  const p = legalBySlug(slug);
  if (!p) return {};
  return {
    title: p.seo.title,
    description: p.seo.description,
    alternates: { canonical: p.href },
  };
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === WORKPLACE) return <WorkplacePolicies />;

  const page = legalBySlug(slug);
  if (!page) notFound();

  const others = legalPages.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Legal pages get the plainest opener on the site. They are read for
          content, and a photograph here would be decoration. */}
      <header className="border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Policy", href: "/policy" },
                { label: page.name },
              ]}
            />
          </Reveal>
          <h1 className="display display-md mt-7 max-w-[20ch] text-balance">{page.title}</h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.68] text-body">{page.standfirst}</p>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16">
          {/* Contents rail — legal pages are scanned, not read start to finish. */}
          <nav aria-label="On this page" className="lg:sticky lg:top-[110px] lg:self-start">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
              On this page
            </p>
            <ol className="mt-4 space-y-2.5 border-l border-line pl-4">
              {page.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#s${i + 1}`}
                    className="text-[14px] leading-snug text-muted transition-colors hover:text-accent"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            {page.sections.map((s, i) => (
              <Reveal
                as="section"
                key={s.heading}
                id={`s${i + 1}`}
                y={12}
                className="scroll-mt-28 border-t border-line py-8 first:border-t-0 first:pt-0"
              >
                <h2 className="font-display text-[20px] font-bold leading-snug tracking-[-0.02em] text-heading">
                  <span aria-hidden="true" className="mr-3 font-normal text-line-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-4 text-[16px] leading-[1.75] text-muted">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 space-y-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[15.5px] leading-[1.65] text-muted">
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Band>

      <Onward
        title="Other policies"
        links={others.slice(0, 3).map((p) => ({
          label: p.name,
          href: p.href,
          note: p.seo.description,
        }))}
      />
    </>
  );
}

/* ================================================================== */

/**
 * The workplace policy library.
 *
 * Adapted from a supplied HR policy schedule: codes renumbered to the HRMAGIX
 * series, the originating company's name removed throughout, and each entry
 * described by the subject it governs. The operative rules — notice lengths,
 * grace windows, increment cycles — are deliberately absent, because those are
 * the employer's decisions and stating one here would be inventing policy.
 */
function WorkplacePolicies() {
  return (
    <>
      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Policy", href: "/policy" },
                { label: "Workplace Policy Library" },
              ]}
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[17ch] text-balance">
                {policyCount} policies, <strong>ready to make your own</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                A code of conduct and {policyCount - 1} workplace policies, shipped as templates
                inside the Documents module — issued to your employees, acknowledged per person, and
                versioned so a revision does not inherit an old acceptance.
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <Photo slot="policy" ratio="4 / 5" sizes="(max-width: 1024px) 100vw, 320px" />
            </Reveal>
          </div>
        </div>
      </header>

      {/* ---- What these are ---- */}
      <Band ground="surface" size="md">
        <Opening label="Read this first" paragraphs={registerNotes.what} />
      </Band>

      {/* ---- How they are used ---- */}
      <Band ground="sunken" size="md">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">How a policy becomes an obligation</h2>
        </Reveal>
        <ol className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {registerNotes.how.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 70} y={12} className="border-t-2 border-line-accent pt-5">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-accent">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-display text-[17px] font-bold text-heading">{s.step}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.68] text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Band>

      {/* ---- The register ---- */}
      <Band ground="surface" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">The register</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Grouped by the part of the employment relationship each governs. Where a policy is
            enforced or evidenced by a specific module, that module is named.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {policyRegister.map((group) => (
            <section key={group.title}>
              <div className="grid gap-3 border-b border-line-strong pb-5 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-14">
                <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-heading">
                  {group.title}
                </h3>
                <p className="max-w-2xl text-[15.5px] leading-[1.68] text-muted">{group.intro}</p>
              </div>

              <ul className="divide-y divide-line">
                {group.entries.map((entry, i) => (
                  <Reveal
                    as="li"
                    key={entry.code}
                    delay={i * 40}
                    y={10}
                    className="grid gap-3 py-6 lg:grid-cols-[minmax(0,9rem)_minmax(0,17rem)_minmax(0,1fr)] lg:gap-8"
                  >
                    <code className="font-mono text-[12.5px] font-semibold uppercase tracking-[0.04em] text-accent">
                      {entry.code}
                    </code>
                    <h4 className="font-display text-[15.5px] font-bold leading-snug text-heading">
                      {entry.name}
                    </h4>
                    <div>
                      <p className="max-w-2xl text-[15px] leading-[1.68] text-muted">
                        {entry.covers}
                      </p>
                      {entry.enforcedBy && (
                        <Link
                          href={entry.enforcedBy.href}
                          className="group mt-2.5 inline-flex items-center gap-2 text-[13px] font-semibold text-accent"
                        >
                          Enforced in {entry.enforcedBy.label} <Arrow />
                        </Link>
                      )}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Band>

      {/* ---- The caveat, stated once and clearly ---- */}
      <Band ground="raised" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-subtle">
            What this page does not tell you
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.72] text-muted">
            It does not state a notice period, a grace window for late arrival, an increment cycle or
            a probation length. Those are the operative rules, and they belong to each employer
            rather than to a template library. Publishing a specific figure here would put words
            into your policy that you did not choose — and someone would eventually rely on them.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
            These templates are a starting structure, not legal advice. Have your own advisers review
            the final text against the states you operate in before you issue it.
          </p>
        </Reveal>
      </Band>

      <Onward
        links={[
          {
            label: "Employee Management",
            href: "/solutions/employee-management",
            note: "How acknowledgement is recorded and versioned.",
          },
          {
            label: "Onboarding & Lifecycle",
            href: "/solutions/onboarding",
            note: "Where most policies are issued for the first time.",
          },
          {
            label: "Policy centre",
            href: "/policy",
            note: "Back to HRMagix's own privacy, terms and security pages.",
          },
        ]}
      />
    </>
  );
}
