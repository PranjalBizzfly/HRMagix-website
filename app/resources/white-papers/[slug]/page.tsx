import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { paperFaqs } from "@/lib/pageFaqs/papers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { whitePapers, paperBySlug } from "@/lib/papers";
import { Onward } from "@/components/editorial";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { titleCase } from "@/lib/names";
import PdfDownloadButton from "@/components/PdfDownloadButton";
import Prose, { headingId, type ProseBlock } from "@/components/Prose";

export function generateStaticParams() {
  return whitePapers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = paperBySlug(slug);
  if (!p) return {};
  return {
    title: p.seo.title,
    description: p.seo.description,
    keywords: p.seo.keywords,
    alternates: { canonical: `/resources/white-papers/${p.slug}` },
    openGraph: {
      title: `${p.seo.title} · HRMagix`,
      description: p.seo.description,
      url: `/resources/white-papers/${p.slug}`,
      type: "article",
      siteName: "HRMagix",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }],
    },
  };
}

/**
 * A white paper, rendered as a document rather than as a page.
 *
 * Numbered sections, a persistent contents rail, no photography and no
 * marketing furniture inside the body. The distinction from an Insights article
 * is deliberate and visible: an article argues, a paper is referred to.
 */
export default async function PaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = paperBySlug(slug);
  if (!paper) notFound();

  const others = whitePapers.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        {/* ---- Title page ---- */}
        <header className="page-hero border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
          <div className="shell">
            <Reveal y={8}>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Resources", href: "/resources" },
                  { label: "White Papers", href: "/resources/white-papers" },
                  { label: titleCase(paper.title) },
                ]}
              />
            </Reveal>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,4rem)_minmax(0,1fr)] lg:gap-10">
              <Reveal y={10}>
                <span
                  aria-hidden="true"
                  className="font-display text-[52px] font-light leading-none text-line-accent"
                >
                  {paper.number}
                </span>
              </Reveal>

              <div className="max-w-3xl">
                <h1 className="display display-lg text-balance">{paper.title}</h1>
                <Reveal delay={120}>
                  <p className="mt-4 text-[18px] italic leading-snug text-muted sm:text-[20px]">
                    {paper.subtitle}
                  </p>
                </Reveal>

                <Reveal delay={180}>
                  <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-5 border-t border-line pt-7">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                        Written for
                      </dt>
                      <dd className="mt-1.5 max-w-[34ch] text-[14.5px] text-heading">
                        {paper.reader}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                        Format
                      </dt>
                      <dd className="mt-1.5 text-[14.5px] text-heading">
                        {paper.document ? `PDF · ${paper.document.pages} pages` : "Web document"}
                      </dd>
                    </div>
                  </dl>
                </Reveal>

                {/* A download control appears only when a real document exists. */}
                {paper.document && (
                  <Reveal delay={240} className="mt-8">
                    <PdfDownloadButton
                      title={paper.title}
                      href={paper.document.path}
                      fileName={paper.document.path.split("/").pop() ?? `${paper.slug}.pdf`}
                      source={`White paper: ${paper.title}`}
                      kind="White paper"
                      className="btn-shimmer inline-flex h-12 items-center gap-2.5 rounded-full bg-brand px-6 text-[14.5px] font-semibold text-white shadow-glow transition-colors hover:bg-brand-hover"
                    >
                      Download the PDF
                    </PdfDownloadButton>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </header>

      <SiteStats />

        <Block eyebrow="Abstract" title="Abstract" ground="canvas">
          <Reveal y={12} className="card mx-auto max-w-3xl p-6 sm:p-8">
            {paper.abstract.map((p, i) => (
              <p key={i} className={`text-[17px] leading-[1.72] text-body ${i ? "mt-4" : ""}`}>
                {p}
              </p>
            ))}
          </Reveal>
        </Block>

        <Block ground="sunken">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16">
            {/* ---- Contents rail ---- */}
            <nav aria-label="Contents" className="lg:sticky lg:top-[110px] lg:self-start">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                Contents
              </p>
              <ol className="mt-4 space-y-3 border-l border-line pl-4">
                {paper.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#${headingId(s.heading)}`}
                      className="group block text-[14px] leading-snug text-muted transition-colors hover:text-accent"
                    >
                      <span className="mr-2 font-display text-[12px] font-bold tabular-nums text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-9 border-t border-line pt-6">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                  Read next
                </p>
                <ul className="mt-4 space-y-2.5">
                  {paper.readOn.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="text-[14px] leading-snug text-muted transition-colors hover:text-accent"
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* ---- Document body ---- */}
            <div className="min-w-0">

              {paper.sections.map((section, i) => (
                <section key={section.heading} className="mt-14 first:mt-0">
                  <Reveal y={12} id={headingId(section.heading)} className="scroll-mt-28">
                    <div className="border-t border-line pt-8">
                      <p className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-subtle">
                        Section {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-3 max-w-[24ch] font-display text-[25px] font-bold leading-[1.22] tracking-[-0.025em] text-heading sm:text-[28px]">
                        {section.heading}
                      </h2>
                    </div>
                  </Reveal>
                  <Prose blocks={section.blocks as ProseBlock[]} className="mt-6" />
                </section>
              ))}

            </div>
          </div>
        </Block>

        <Block eyebrow="Sources" title="About this paper" ground="canvas">
              <Reveal y={12} className="card mx-auto max-w-3xl p-6 sm:p-8">
                <p className="text-[15.5px] leading-[1.72] text-muted">
                  Everything above draws on one of three things: a provision of Indian law, a
                  published HRMagix product capability, or the structural logic of the problem
                  described. There is no survey, benchmark or commissioned research behind it, and
                  none is implied, where a figure appears it is either statutory or a published
                  HRMagix price.
                </p>
                <p className="mt-4 text-[15.5px] leading-[1.72] text-muted">
                  Nothing here is legal or tax advice. Statutory positions should be confirmed
                  against the current notification or with your own advisers before you act on them.
                </p>
              </Reveal>
        </Block>
      </article>

      <FaqSection
        title="Questions about this paper"
        items={paperFaqs[paper.slug] ?? []}
        ground="canvas"
      />

      <Block
        eyebrow="Next step"
        title="Talk it through against your own configuration"
        intro="A paper describes the general case. How a statutory head behaves for your entities, locations and grades is a shorter conversation than a longer document."
        ground="sunken"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/company/contact-hrmagix">Ask the team</Button>
          <Button href="/resources/white-papers" variant="outline">
            All papers
          </Button>
        </div>
      </Block>

      <Onward
        title="Other papers"
        links={others.map((p) => ({
          label: titleCase(p.title),
          href: `/resources/white-papers/${p.slug}`,
          note: p.subtitle,
        }))}
      />
    </>
  );
}
