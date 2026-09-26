import type { Metadata } from "next";
import { SiteStats, Block } from "@/components/sky9";
import Link from "next/link";
import { topics, topicCategories } from "@/lib/topics";
import { Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "HR Topics — Practical Guides to HR and Payroll",
  description:
    "Practical guides to HR and payroll in India: attendance, shifts, leave, payroll, statutory compliance, performance, OKRs, onboarding, exits, engagement, policies and more.",
  alternates: { canonical: "/hr/topics" },
};

/** The HR knowledge hub: every topic guide, by area. */
export default function TopicsHub() {
  return (
    <>
      <header className="page-hero border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "HR topics" }]} />
          </Reveal>
          <h1 className="display display-xl mt-8 max-w-[16ch] text-balance">
            HR, <strong>explained plainly</strong>
          </h1>
          <p className="mt-6 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
            {topics.length} practical guides to the work of HR and payroll in India — what each
            practice is, why it matters, how to run it and the mistakes to avoid. No statistics,
            no case studies: just the practice.
          </p>
        </div>
      </header>

      <SiteStats />

      {topicCategories.map((c, ci) => {
        const list = topics.filter((t) => t.category === c.name);
        return (
          <Block
            key={c.name}
            eyebrow={`${list.length} guides`}
            title={c.name}
            intro={c.blurb}
            ground={ci % 2 === 0 ? "canvas" : "sunken"}
          >
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {list.map((t, i) => (
                <Reveal as="li" key={t.slug} delay={i * 50} y={12}>
                  <Link href={`/hr/topics/${t.slug}`} className="card card-hover group flex h-full flex-col p-6">
                    <span className="font-display text-[18px] font-bold text-heading group-hover:text-accent">
                      {t.name}
                    </span>
                    <span className="mt-2 flex-1 text-[14px] leading-[1.6] text-muted">{t.standfirst}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent">
                      Read the guide <Arrow />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </Block>
        );
      })}

      <Onward
        links={[
          { label: "HR guides", href: "/resources/guides", note: "Longer, chaptered guides that end in a checklist." },
          { label: "HR glossary", href: "/resources/glossary", note: "Indian HR and payroll terms, defined." },
          { label: "Features", href: "/features", note: "Where each practice lives in HRMagix." },
        ]}
      />
    </>
  );
}
