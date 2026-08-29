import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { solutions, bySlug } from "@/lib/solutions";
import {
  ArticleOpener,
  Opening,
  Passages,
  Ledger,
  Mechanics,
  CapabilityIndex,
  UseCases,
  Statement,
  Onward,
  Band,
} from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Accordion from "@/components/Accordion";
import OnThisPage from "@/components/OnThisPage";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = bySlug(slug);
  if (!s) return {};
  return {
    title: s.seo.title,
    description: s.seo.description,
    keywords: s.seo.keywords,
    alternates: { canonical: s.href },
    openGraph: {
      title: `${s.seo.title} · HRMagix`,
      description: s.seo.description,
      url: s.href,
      siteName: "HRMagix",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HRMagix" }],
    },
  };
}

/**
 * LAYOUT RECIPES
 *
 * All eight solution pages draw on the same vocabulary, but no two arrange it
 * the same way. The recipe below is the whole reason for that: it fixes, per
 * page, the order of the blocks and the ground each one sits on.
 *
 * The variation is not decoration. It follows the subject. Payroll is a
 * sequence, so its mechanism comes early and its reference table late. The
 * HRMS page is an argument about structure, so the record itself is the second
 * thing you see. Analytics has neither a sequence nor a statutory table, so it
 * is mostly prose and finishes sooner.
 */
type Block =
  | "opening"
  | "passages"
  | "mechanics"
  | "ledger"
  | "capabilities"
  | "usecases"
  | "statement";
type Ground = "surface" | "sunken" | "raised" | "dark";

const recipes: Record<string, { order: Block[]; grounds: Ground[]; statement?: string }> = {
  hrms: {
    order: ["opening", "ledger", "passages", "usecases", "capabilities"],
    grounds: ["surface", "sunken", "surface", "raised", "surface"],
    statement: "One record, edited in one place, read by everything else.",
  },
  payroll: {
    order: ["opening", "mechanics", "passages", "ledger", "capabilities"],
    grounds: ["surface", "sunken", "surface", "raised", "surface"],
    statement:
      "Payroll teams do not spend four days calculating. They spend four days establishing what happened.",
  },
  "employee-management": {
    order: ["opening", "passages", "ledger", "usecases", "capabilities"],
    grounds: ["sunken", "surface", "raised", "surface", "sunken"],
  },
  attendance: {
    order: ["opening", "passages", "ledger", "capabilities"],
    grounds: ["surface", "sunken", "surface", "raised"],
    statement: "Attendance systems are judged on their exceptions, not their happy path.",
  },
  "leave-management": {
    order: ["opening", "passages", "usecases", "capabilities", "ledger"],
    grounds: ["surface", "raised", "surface", "sunken", "surface"],
  },
  ess: {
    order: ["opening", "passages", "ledger", "capabilities"],
    grounds: ["sunken", "surface", "raised", "surface"],
    statement: "Most of what an HR team is asked in a week requires access, not judgement.",
  },
  onboarding: {
    order: ["opening", "mechanics", "passages", "capabilities"],
    grounds: ["surface", "raised", "surface", "sunken"],
  },
  "hr-analytics": {
    order: ["opening", "passages", "ledger", "usecases", "capabilities"],
    grounds: ["surface", "sunken", "surface", "raised", "surface"],
  },
};

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = bySlug(slug);
  if (!s) notFound();

  const recipe = recipes[s.slug] ?? {
    order: ["opening", "passages", "capabilities"] as Block[],
    grounds: ["surface", "sunken", "surface"] as Ground[],
  };

  const render = (block: Block, i: number) => {
    const ground = recipe.grounds[i] ?? "surface";
    switch (block) {
      case "opening":
        return (
          <Band key="opening" ground={ground} size="lg">
            <Opening label={s.kicker} paragraphs={s.opening} />
          </Band>
        );
      case "passages":
        return (
          <Band key="passages" ground={ground} size="md">
            <Passages items={s.passages} level="h2" />
          </Band>
        );
      case "mechanics":
        return s.mechanics ? (
          <Band key="mechanics" ground={ground} size="lg">
            <Mechanics {...s.mechanics} />
          </Band>
        ) : null;
      case "ledger":
        return s.ledger ? (
          <Band key="ledger" ground={ground} size="lg">
            <Ledger {...s.ledger} />
          </Band>
        ) : null;
      case "usecases":
        return s.useCases ? (
          <Band key="usecases" ground={ground} size="lg">
            <UseCases {...s.useCases} />
          </Band>
        ) : null;
      case "capabilities":
        return (
          <Band key="capabilities" ground={ground} size="lg">
            <Reveal y={12} className="max-w-2xl">
              <h2 className="display display-md">{s.capabilitiesTitle}</h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">{s.capabilitiesIntro}</p>
            </Reveal>
            <CapabilityIndex groups={s.capabilities} className="mt-12" />
          </Band>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <ArticleOpener
        eyebrow={s.kicker}
        title={s.title}
        standfirst={s.standfirst}
        slot={s.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: s.name },
        ]}
        actions={
          <>
            <Button href="/company/contact">Book a demo</Button>
            <Button href="/pricing" variant="outline">
              See pricing
            </Button>
          </>
        }
      />

      {recipe.order.map(render)}

      {recipe.statement && <Statement tone="dark">{recipe.statement}</Statement>}

      {/* Questions. Every question on this page is specific to this module —
          none is repeated on another solution page. */}
      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <Reveal y={12}>
              <h2 className="display display-md">Questions about {s.name.toLowerCase()}</h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-muted">{s.questionsIntro}</p>
              <Link
                href="/resources/faqs"
                className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
              >
                Every question, in one place <Arrow />
              </Link>
            </Reveal>
          </div>
          <Accordion items={s.questions.map((q) => ({ q: q.q, a: q.a }))} />
        </div>
      </Band>

      <Onward links={s.onward} />
    </>
  );
}
