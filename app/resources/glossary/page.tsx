import type { Metadata } from "next";
import { Band, Onward } from "@/components/editorial";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlossaryIndex from "@/components/GlossaryIndex";
import { glossary } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "HR & Payroll Glossary",
  description:
    "Plain definitions of the Indian HR and payroll terms that cause the most confusion — EPF, ESI, CTC, LOP, PF wage, contribution period, comp-off, 9-box, Form 16 and more, with the distinctions people usually get wrong.",
  keywords: [
    "HR software for companies",
    "payroll processing system",
    "HRMS software",
    "employee management system",
  ],
  alternates: { canonical: "/resources/glossary" },
  openGraph: {
    title: "HR & Payroll Glossary · HRMagix",
    description:
      "Indian HR and payroll terminology defined plainly, including the distinctions that cause the most expensive mistakes.",
    url: "/resources/glossary",
    siteName: "HRMagix",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
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
      <header className="border-b border-line bg-surface-sunken pb-12 pt-[104px] sm:pb-14 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Glossary" },
              ]}
            />
          </Reveal>
          <Reveal y={10} className="mt-8 max-w-3xl">
            <h1 className="display display-lg text-balance">
              {glossary.length} terms, defined plainly
            </h1>
            <p className="mt-7 text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
              Indian statutory provisions, ordinary payroll vocabulary, and the words this site uses
              for parts of the platform. Where two terms are habitually confused — CTC and salary,
              an OKR and a KRA, a regularisation and an edit — the entry says which is which,
              because that confusion is usually the reason somebody looked it up.
            </p>
          </Reveal>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <GlossaryIndex />
      </Band>

      <Band ground="sunken" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="display display-md">On the numbers in these definitions</h2>
          <p className="mt-6 text-[16.5px] leading-[1.72] text-muted">
            A rate appears in an entry only where central statute fixes it — the provident fund
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
      </Band>

      <Onward
        links={[
          {
            label: "HR guides",
            href: "/resources/guides",
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
