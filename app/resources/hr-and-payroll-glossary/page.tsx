import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { resourcesFaqs } from "@/lib/pageFaqs/resources";
import { Onward } from "@/components/editorial";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlossaryIndex from "@/components/GlossaryIndex";
import Photo from "@/components/Photo";
import { glossary } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "HR & Payroll Glossary",
  description:
    "Plain definitions of the Indian HR and payroll terms that cause the most confusion, EPF, ESI, CTC, LOP, PF wage, contribution period, comp-off, 9-box, Form 16 and more, with the distinctions people usually get wrong.",
  keywords: [

  ],
  alternates: { canonical: "/resources/hr-and-payroll-glossary" },
  openGraph: {
    title: "HR & Payroll Glossary · HRMagix",
    description:
      "Indian HR and payroll terminology defined plainly, including the distinctions that cause the most expensive mistakes.",
    url: "/resources/hr-and-payroll-glossary",
    siteName: "HRMagix",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix: Smart HR for modern teams, with attendance, payroll, performance and recognition in one workspace" }],
  },
};

/**
 * THE GLOSSARY.
 *
 * A reference page, so it is built like one: a search field, an A–Z rail and a
 * single long definition list, with no hero photograph and no section rhythm.
 * Everything below the header is one list, which is what makes the browser's
 * own find-in-page as useful here as the search field.
 */
export default function GlossaryPage() {
  return (
    <>
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="resources-glossary-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "HR & Payroll Glossary" },
              ]}
            />
          </Reveal>
          <Reveal y={10} className="mt-8 max-w-3xl">
            <h1 className="display display-lg text-balance">
              {glossary.length} terms, defined plainly
            </h1>
            <p className="mt-7 text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
              Indian statutory provisions, ordinary payroll vocabulary, and the words this site uses
              for parts of the platform. Where two terms are habitually confused, CTC and salary,
              an OKR and a KRA, a regularisation and an edit, the entry says which is which,
              because that confusion is usually the reason somebody looked it up.
            </p>
          </Reveal>
        </div>
      </header>

      <SiteStats />

      <Block ground="canvas">
        <GlossaryIndex />
      </Block>

      <Block eyebrow="A note" title="On the numbers in these definitions" ground="sunken">
        <Reveal y={12} className="card mx-auto max-w-3xl p-6 sm:p-8">
          <p className="text-[16.5px] leading-[1.72] text-muted">
            A rate appears in an entry only where central statute fixes it, the provident fund
            contribution, the ESI rates and threshold, the gratuity formula. Anything a state sets,
            such as professional tax or the labour welfare fund, is described as varying rather than
            given a figure, because a single slab printed here would be wrong for most employers
            reading it.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
            None of this is tax or legal advice. It is a vocabulary, written so that a conversation
            with somebody who does give that advice is a shorter one.
          </p>
        </Reveal>
      </Block>

      <FaqSection items={resourcesFaqs["/resources/hr-and-payroll-glossary"]} ground="canvas" />

      <Onward
        links={[
          {
            label: "HR guides",
            href: "/resources/hr-guides",
            note: "Where several of these terms are worked through end to end.",
          },
          {
            label: "Calculators",
            href: "/resources/calculator",
            note: "Run the statutory formulas defined above on your own figures.",
          },
          {
            label: "Compliance",
            href: "/solutions/compliance",
            note: "How each statutory head is derived inside the payroll run.",
          },
        ]}
      />
    </>
  );
}
