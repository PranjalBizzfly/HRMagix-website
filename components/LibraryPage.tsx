import type { Metadata } from "next";
import Link from "next/link";
import type { LibCollection, LibPage, LibSection } from "@/lib/library/types";
import { SiteStats, Block, FaqSection } from "./sky9";
import { Onward } from "./editorial";
import { Button } from "./ui";
import { Reveal } from "./motion";
import Breadcrumbs from "./Breadcrumbs";
import CopyTemplate from "./CopyTemplate";
import Photo from "./Photo";
import { bySlot } from "@/lib/media";
import ContentSections from "@/components/ContentSections";
import { hubContent } from "@/lib/pageContent";

/**
 * Shared templates for the reference collections (lib/library). One article
 * layout and one hub layout, styled like the HR guides so the new sections sit
 * inside the existing design rather than beside it.
 */

const OG = [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }];

export function libraryMetadata(path: string, seo: { title: string; description: string; keywords: string[] }, h1: string, type: "article" | "website" = "article"): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: path },
    openGraph: { title: `${h1} · HRMagix`, description: seo.description, url: path, siteName: "HRMagix", type, images: OG },
  };
}

export function Section({ s, index }: { s: LibSection; index: number }) {
  return (
    <Reveal as="section" delay={30} y={14} className="border-t border-line-strong pt-9 first:border-t-0 first:pt-0 [&+section]:mt-12">
      <p className="font-mono text-[12.5px] font-semibold tracking-[0.08em] text-accent">{String(index + 1).padStart(2, "0")}</p>
      <h2 className="mt-3 font-display text-[24px] font-bold leading-[1.25] tracking-[-0.025em] text-heading sm:text-[28px]">{s.heading}</h2>
      {s.body?.map((p, j) => (
        <p key={j} className="mt-5 text-[16.5px] leading-[1.75] text-muted">{p}</p>
      ))}
      {s.list &&
        (s.list.style === "ordered" ? (
          <ol className="mt-6 space-y-3.5">
            {s.list.items.map((item, k) => (
              <li key={k} className="flex gap-4">
                <span aria-hidden="true" className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface-raised font-display text-[11.5px] font-bold text-accent-strong">{k + 1}</span>
                <span className="text-[16px] leading-[1.7] text-body">{item}</span>
              </li>
            ))}
          </ol>
        ) : (
          <ul className="mt-6 space-y-3">
            {s.list.items.map((item, k) => (
              <li key={k} className="flex gap-3.5 text-[16px] leading-[1.7] text-body">
                <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      {s.table && (
        <div tabIndex={0} role="region" aria-label={`${s.heading} table`} className="mt-6 overflow-x-auto rounded-xl ring-1 ring-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">
          <table className="w-full min-w-[520px] border-collapse text-left text-[14.5px]">
            <thead>
              <tr className="bg-surface-sunken">
                {s.table.head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-display text-[13px] font-bold text-heading">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((r, ri) => (
                <tr key={ri} className="border-t border-line align-top">
                  {r.map((c, ci) =>
                    ci === 0 ? (
                      <th key={ci} scope="row" className="px-4 py-3 font-semibold text-heading">{c}</th>
                    ) : (
                      <td key={ci} className="px-4 py-3 leading-[1.6] text-body">{c}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {s.note && (
        <p className="mt-7 rounded-xl bg-surface-sunken p-5 text-[15.5px] leading-[1.7] text-muted ring-1 ring-line">
          <span className="font-display text-[12.5px] font-bold uppercase tracking-[0.14em] text-accent">Watch for it</span>
          <span className="mt-2 block">{s.note}</span>
        </p>
      )}
    </Reveal>
  );
}

export function LibraryArticle({
  page,
  crumbs,
  eyebrow,
  siblings,
  siblingsTitle,
  hrefFor,
  heroSlot,
}: {
  page: LibPage;
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  /** Other entries in the same collection, for the "more like this" block. */
  siblings: LibPage[];
  siblingsTitle: string;
  hrefFor: (slug: string) => string;
  heroSlot?: string;
}) {
  const others = siblings.filter((p) => p.slug !== page.slug).slice(0, 6);
  const slot = heroSlot ?? (
    page.slug.startsWith("for-") ? `solution-${page.slug}` :
    crumbs.some(c => c.href?.includes("compare") || c.label === "Compare") ? `compare-${page.slug}` :
    crumbs.some(c => c.href?.includes("letter") || c.label?.includes("Letter")) ? `letter-${page.slug}` :
    crumbs.some(c => c.href?.includes("job-description") || c.label?.includes("Job")) ? `jd-${page.slug}` :
    crumbs.some(c => c.href?.includes("labour-law") || c.label?.includes("Labour")) ? `labour-law-${page.slug}` :
    undefined
  );

  return (
    <>
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        {slot && bySlot(slot) && (
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Photo slot={slot} cover rounded="rounded-none" hover={false} sizes="100vw" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
              aria-hidden="true"
            />
          </div>
        )}
        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs items={crumbs} />
          </Reveal>
          <div className="mt-8 max-w-3xl">
            <Reveal y={10}>
              <span className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</span>
            </Reveal>
            <h1 className="display display-lg mt-5 text-balance">{page.title}</h1>
            <Reveal delay={120}>
              <p className="mt-7 max-w-2xl text-[17px] leading-[1.68] text-body">{page.standfirst}</p>
            </Reveal>
          </div>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        {page.verify && (
          <Reveal y={8} className="mx-auto mb-12 max-w-[74ch]">
            <p className="rounded-xl bg-surface-sunken p-5 text-[15px] leading-[1.7] text-muted ring-1 ring-line-accent">
              <span className="font-display text-[12.5px] font-bold uppercase tracking-[0.14em] text-accent">Check before you rely on this</span>
              <span className="mt-2 block">{page.verify}</span>
            </p>
          </Reveal>
        )}
        <div className="mx-auto max-w-[74ch]">
          {page.sections.map((s, i) => (
            <Section key={s.heading} s={s} index={i} />
          ))}
        </div>
      </Block>

      {page.template && (
        <Block eyebrow="Template" title="The template, ready to adapt" intro="Replace everything in [square brackets]. Have your own legal or HR adviser review the final wording for your organisation." ground="sunken">
          <CopyTemplate text={page.template} />
        </Block>
      )}

      <FaqSection title="Questions about this page" items={page.faqs ?? []} ground="canvas" />

      {others.length > 0 && (
        <Block eyebrow="More" title={siblingsTitle} ground="sunken">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {others.map((o, i) => (
              <Reveal as="li" key={o.slug} delay={i * 50} y={10}>
                <Link href={hrefFor(o.slug)} className="card card-hover group flex h-full flex-col gap-2 p-6">
                  <span className="font-display text-[16.5px] font-bold text-heading transition-colors group-hover:text-accent">{o.name}</span>
                  <span className="text-[14px] leading-[1.6] text-muted">{o.standfirst}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Block>
      )}

      <Block eyebrow="Next step" title="See it against your own setup" ground="canvas">
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/company/contact-hrmagix">Book a demo</Button>
          <Button href={crumbs[crumbs.length - 2]?.href ?? "/resources"} variant="outline">
            Back to {crumbs[crumbs.length - 2]?.label ?? "Resources"}
          </Button>
        </div>
      </Block>

      {page.related.length > 0 && <Onward links={page.related} />}
    </>
  );
}

export function LibraryHub({ c, crumbs, heroSlot }: { c: LibCollection; crumbs: { label: string; href?: string }[]; heroSlot?: string }) {
  const slot = heroSlot ?? (
    c.base.includes("compare") ? "compare-hub" :
    c.base.includes("letter") ? "letter-hub" :
    c.base.includes("job-description") ? "jd-hub" :
    c.base.includes("labour-law") ? "labour-law-hub" :
    undefined
  );

  return (
    <>
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        {slot && bySlot(slot) && (
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Photo slot={slot} cover rounded="rounded-none" hover={false} sizes="100vw" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
              aria-hidden="true"
            />
          </div>
        )}
        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs items={crumbs} />
          </Reveal>
          <div className="mt-8 max-w-3xl">
            <h1 className="display display-lg text-balance">{c.hub.title}</h1>
            <Reveal delay={120}>
              <p className="mt-7 max-w-2xl text-[17px] leading-[1.68] text-body">{c.hub.standfirst}</p>
            </Reveal>
          </div>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        <div className="mx-auto max-w-[74ch] space-y-5">
          {c.hub.intro.map((p, i) => (
            <p key={i} className="text-[16.5px] leading-[1.75] text-muted">{p}</p>
          ))}
        </div>
      </Block>

      <ContentSections content={hubContent[c.base]} ground="canvas" />

      <Block eyebrow={c.label} title={`${c.pages.length} pages in this section`} ground="sunken">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {c.pages.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={Math.min(i, 8) * 40} y={10}>
              <Link href={`${c.base}/${p.slug}`} className="card card-hover group flex h-full flex-col gap-2 p-6">
                <span className="font-display text-[16.5px] font-bold text-heading transition-colors group-hover:text-accent">{p.name}</span>
                <span className="text-[14px] leading-[1.6] text-muted">{p.standfirst}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Block>
    </>
  );
}
