import type { Metadata } from "next";
import Link from "next/link";
import { mediaRoom } from "@/lib/resources";
import { site } from "@/lib/content";
import { Band, Opening, Onward } from "@/components/editorial";
import { Arrow, TickCircle, CrossCircle } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Media Room",
  description:
    "A working reference for anyone writing about HRMagix: what the product does, which claims are attributable, which are not, and how to reach the team in Pune.",
  alternates: { canonical: "/resources/media" },
};

/**
 * The media room.
 *
 * Most media pages are a press-release archive plus a logo. HRMagix has neither
 * an archive nor published coverage, so building one would mean fabricating it.
 *
 * What a journalist actually needs from a company this size is different and
 * more useful: a clear statement of which claims can be attributed and which
 * cannot. That is what this page is — an attribution guide, organised as two
 * facing lists.
 */
export default function MediaPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Media Room" },
              ]}
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[17ch] text-balance">
                What you can say about us, <strong>and what you cannot</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                {mediaRoom.standfirst}
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <Photo slot="media-room" ratio="4 / 5" sizes="(max-width: 1024px) 100vw, 340px" />
            </Reveal>
          </div>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <Opening
          label="Why this page"
          paragraphs={[
            "A media page normally holds a press-release archive, a coverage list and a set of analyst mentions. HRMagix has none of those, and assembling a page that implies otherwise would be the first inaccuracy a journalist encountered.",
            "So this is an attribution guide instead. The first list below is what can be stated as fact about the product, with the basis for each. The second is what cannot — not because it is secret, but because HRMagix has not published it and we are not going to supply a number that has no source behind it.",
          ]}
        />
      </Band>

      {/* ---- Attributable / not, as two facing ledgers ---- */}
      <Band ground="sunken" size="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="flex items-center gap-3 border-b border-line-accent pb-3 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
              <TickCircle className="h-[18px] w-[18px]" />
              Attributable to HRMagix
            </h2>
            <ul className="mt-6 space-y-7">
              {mediaRoom.attributable.map((a, i) => (
                <Reveal as="li" key={a.claim} delay={i * 60} y={12}>
                  <p className="text-[15.5px] leading-[1.7] text-body">{a.claim}</p>
                  <p className="mt-2 text-[13px] leading-snug text-subtle">
                    <span className="font-semibold uppercase tracking-[0.1em]">Basis</span> —{" "}
                    {a.basis}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-3 border-b border-line pb-3 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-subtle">
              <CrossCircle className="h-[18px] w-[18px]" />
              Not attributable
            </h2>
            <ul className="mt-6 space-y-5">
              {mediaRoom.notAttributable.map((n, i) => (
                <Reveal as="li" key={n} delay={i * 60} y={12} className="flex gap-3.5">
                  <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-subtle/60" />
                  <span className="text-[15.5px] leading-[1.7] text-muted">{n}</span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-9 rounded-2xl bg-surface p-6 ring-1 ring-line">
              <h3 className="font-display text-[15.5px] font-bold text-heading">
                Interviews and quotations
              </h3>
              {mediaRoom.interviews.map((p, i) => (
                <p key={i} className="mt-3 text-[14.5px] leading-[1.7] text-muted">
                  {p}
                </p>
              ))}
              <a
                href={`mailto:${site.contact.email}`}
                className="group mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
              >
                {site.contact.email} <Arrow />
              </a>
            </div>
          </div>
        </div>
      </Band>

      {/* ---- A short factual profile a writer can quote ---- */}
      <Band ground="raised" size="lg">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12} className="lg:sticky lg:top-[110px] lg:self-start">
            <h2 className="display display-md">The product, described neutrally</h2>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
              Written so it can be quoted or paraphrased without checking back. Everything here is
              also stated somewhere else on this site, which is the test we apply before putting it
              on this page.
            </p>
          </Reveal>

          <div className="min-w-0">
            <section className="border-t border-line-strong pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                In one sentence
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                HRMagix is HRMS and payroll software for Indian companies: twelve modules —
                attendance and shifts, leaves and holidays, payroll, objectives and OKRs, KRA and
                9-box, PIPs and growth, recognition, 1-on-1s and meetings, onboarding, documents,
                succession and analytics — running on one employee record.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                What distinguishes it
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Statutory calculation is part of the payroll run rather than a downstream export:
                EPF, ESI, professional tax by state and TDS under Section 192 are derived from the
                salary structure on the record, and the run produces the payslips, the returns and
                the bank file from the same figures.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                The second distinguishing property is that history is not overwritten. An
                attendance correction sits alongside the original capture, a backdated increment
                produces an arrear rather than a restatement, and a revised policy re-opens
                acknowledgement instead of inheriting the old one.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Who uses it
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Indian employers whose HR administration has outgrown spreadsheets: startups,
                owner-managed small businesses, multi-entity mid-market groups, manufacturers
                paying staff and workmen under different logic, IT services firms and professional
                practices. Company sizes and customer names are not published, so please do not
                attribute any.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Commercial facts
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Three published plans priced per employee per month — Starter at $3, Growth at $6,
                and Enterprise quoted on request. Fourteen-day free trial with full access to every
                module and no credit card. No setup or implementation fee. Based in Pune,
                Maharashtra.
              </p>
            </section>

            <section className="mt-9 border-t border-line pt-7">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Writing the name
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                HRMagix, one word, capital H, R and M. Not HR Magix, HRmagix or Hrmagix. The
                product is referred to as a platform rather than a suite, and as HRMS and payroll
                software rather than an HRIS.
              </p>
            </section>
          </div>
        </div>
      </Band>

      <Band ground="surface" size="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[18ch]">
              Need the mark, the colours or the boilerplate?
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-muted">
              The press kit carries the wordmark spelling, the vector mark, the brand palette with
              hex values, short and long boilerplate, and the usage rules.
            </p>
          </div>
          <Link
            href="/company/press-kit"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent"
          >
            Open the press kit <Arrow />
          </Link>
        </div>
      </Band>

      <Onward
        links={[
          {
            label: "Press kit",
            href: "/company/press-kit",
            note: "Name, mark, colours, boilerplate and usage rules.",
          },
          {
            label: "About HRMagix",
            href: "/company/about",
            note: "What the company is, and what it deliberately is not.",
          },
          {
            label: "Contact",
            href: "/company/contact",
            note: "Reach the team in Pune ahead of a deadline.",
          },
        ]}
      />
    </>
  );
}
