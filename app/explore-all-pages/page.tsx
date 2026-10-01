import type { Metadata } from "next";
import { SiteStats, CtaBand, Block, FaqSection } from "@/components/sky9";
import { marketingFaqs } from "@/lib/pageFaqs/marketing";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import AllPagesIndex from "@/components/AllPagesIndex";
import { buildSiteIndex, pageCount } from "@/lib/siteIndex";
import ContentSections from "@/components/ContentSections";
import { hubContent } from "@/lib/pageContent";

export const metadata: Metadata = {
  title: "Explore All Pages",
  description:
    "Every page on the HRMagix website in one place, solutions, industries, calculators, guides, white papers, the blog, the workplace policy library and more.",
  alternates: { canonical: "/explore-all-pages" },
};

/**
 * The human-readable sitemap. Built from lib/siteIndex.ts — the same index
 * the header search uses — so it always lists exactly the pages that exist.
 */
export default function AllPagesPage() {
  const groups = buildSiteIndex();

  return (
    <>
      <header className="page-hero border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Explore All Pages" }]} />
          </Reveal>
          <h1 className="display display-lg mt-8 max-w-[18ch] text-balance">
            Every page, <strong>in one place</strong>
          </h1>
          <p className="mt-6 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            {pageCount(groups)} pages across {groups.length} sections. Filter by section, or type
            to find a page by name.
          </p>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        <AllPagesIndex groups={groups} />
      </Block>
      {/* ---- Questions ---- */}
      <ContentSections content={hubContent["/explore-all-pages"]} ground="canvas" />
      <FaqSection title="Questions about this index" items={marketingFaqs["/explore-all-pages"]} ground="sunken" />

      <CtaBand title={<>See HRMagix run on <strong>your own payroll month</strong></>} />
    </>
  );
}
