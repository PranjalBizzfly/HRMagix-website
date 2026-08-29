import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industries";
import { Band, Opening, Statement } from "@/components/editorial";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Industries — HR & Payroll by Company Type",
  description:
    "How HRMagix is configured for startups, small businesses, SMEs, manufacturing, IT and professional services — the same platform, matched to how each workforce is actually paid.",
  keywords: [
    "HR software for companies",
    "HRMS for small business",
    "payroll software for SMEs",
    "HR software for manufacturing companies",
    "HR software for startups",
  ],
  alternates: { canonical: "/industries" },
};

/**
 * The industries hub.
 *
 * A stacked editorial index rather than a grid: each entry is a full-width row
 * with its own photograph, so the six read as six different kinds of company
 * rather than six identical tiles. The rows alternate image side, which is what
 * stops the stack becoming a rhythm of its own.
 */
export default function IndustriesHub() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[132px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          </Reveal>
          <h1 className="display display-xl mt-8 max-w-[17ch] text-balance">
            The same platform. <strong>A different first move.</strong>
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-body sm:text-[19.5px]">
            Every company on this page has the same statutory obligations. What differs is where the
            difficulty sits — and therefore which module is worth switching on first.
          </p>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <Opening
          label="Why this page exists"
          paragraphs={[
            "Software companies usually publish industry pages to widen a keyword net, and the pages end up identical apart from a noun. That is not useful to anybody choosing a system.",
            "So each of the six below is written to answer one question honestly: if you are this kind of company, what is actually going to be hard, and what should you configure first? A startup's difficulty is that no policy exists yet. A manufacturer's is that the shop floor and the office are paid on different logic. A mid-market business discovers that its three branches are one company operationally and three compliance positions statutorily. Those are genuinely different problems.",
          ]}
        />
      </Band>

      {/* ---- The six, as alternating editorial rows ---- */}
      <div className="bg-surface-sunken">
        <div className="shell divide-y divide-line">
          {industries.map((industry, i) => (
            <Reveal
              key={industry.slug}
              y={18}
              className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <Link href={industry.href} className="group block">
                  <Photo
                    slot={industry.image}
                    ratio="16 / 10"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </Link>
              </div>

              <div className={i % 2 ? "lg:order-1" : ""}>
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-soft">
                  {industry.audience}
                </p>
                <h2 className="mt-4 font-display text-[26px] font-bold leading-[1.2] tracking-[-0.025em] text-heading sm:text-[30px]">
                  <Link
                    href={industry.href}
                    className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {industry.name}
                  </Link>
                </h2>
                <p className="mt-4 max-w-xl text-[16.5px] leading-[1.7] text-muted">
                  {industry.standfirst}
                </p>

                <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-subtle">
                  Start with
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-body">
                  <span className="font-semibold text-heading">{industry.priority[0].module}</span>{" "}
                  — {industry.priority[0].why}
                </p>

                <Link
                  href={industry.href}
                  className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent transition-colors hover:text-accent-strong"
                >
                  Read the {industry.name.toLowerCase()} page <Arrow />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Statement tone="dark" attribution="The only claim this site makes about outcomes">
        Every company here runs the same statutory rules. What changes is how much of the work a
        person still has to remember to do.
      </Statement>

      <Band ground="surface" size="lg">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[18ch]">
              Not on this list, or somewhere between two of them?
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              Most companies are. The configuration questions that matter — how many states, how
              many entities, whether any part of the workforce runs shifts — cut across sectors
              entirely. A short conversation settles it faster than another page would.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/company/contact">Talk to the team</Button>
            <Button href="/solutions" variant="outline">
              Browse solutions
            </Button>
          </div>
        </div>
      </Band>
    </>
  );
}
