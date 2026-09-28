import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { marketingFaqs } from "@/lib/pageFaqs/marketing";
import Image from "next/image";
import Link from "next/link";
import { pressKit } from "@/lib/resources";
import { Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "HRMagix brand assets and boilerplate: the product mark, brand palette with hex values, how to write the name, short and long descriptions, and what is not published.",
  alternates: { canonical: "/company/press-kit" },
};

/**
 * The press kit.
 *
 * Everything on this page is genuinely HRMagix's: the wordmark and its spelling,
 * the product mark as published, the brand palette taken from the design tokens
 * this site is built on, and boilerplate written from the published product
 * description. There are no awards, no funding line and no founding date,
 * because none has been published — and a press kit that guesses at those is
 * worse than useless to the journalist relying on it.
 */
export default function PressKitPage() {
  return (
    <>
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface-sunken pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="presskit-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
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
                { label: "About HRMagix", href: "/company/about-hrmagix" },
                { label: "Press Kit" },
              ]}
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[16ch] text-balance">
                Describe us <strong>accurately</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                {pressKit.standfirst}
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <div className="card border-line/60 bg-surface/85 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-lift">
                <span className="text-[12px] font-bold uppercase tracking-wider text-accent-soft">
                  Brand & Media Assets
                </span>
                <p className="font-display text-lg font-bold text-heading mt-2">
                  Official trademarks, marks & boilerplate
                </p>
                <p className="text-[14px] text-body mt-2 leading-relaxed">
                  Verified product specifications, hex colour palettes, and copy guidelines for journalists and analysts.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <SiteStats />

      {/* ---- Boilerplate ---- */}
      <Block
        eyebrow="Copy"
        title="Boilerplate"
        intro="Copy either of these verbatim. Both are accurate as written; the difference is length, not emphasis."
        ground="canvas"
      >
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          {(
            [
              ["Short, one sentence", pressKit.boilerplate.short],
              ["Long, one paragraph", pressKit.boilerplate.long],
            ] as [string, string][]
          ).map(([label, text], i) => (
            <Reveal key={label} delay={i * 90} y={12} className="card p-6">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-subtle">
                {label}
              </p>
              <blockquote className="mt-3 border-l-2 border-line-accent py-1 pl-5 text-[16px] leading-[1.72] text-body">
                {text}
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* ---- The mark ---- */}
      <Block
        eyebrow="Brand"
        title="The mark"
        intro="HRMagix publishes one mark. It is a vector, so it scales to any size without loss, please use it rather than a screenshot of it."
        ground="sunken"
      >
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          <div className="card p-6">
            <ul className="space-y-6">
              {pressKit.assets.map((asset) => (
                <Reveal as="li" key={asset.file} y={12} className="flex items-start gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-surface ring-1 ring-line">
                    <Image src={asset.file} alt={`Preview of the ${asset.name}`} width={40} height={40} unoptimized className="h-10 w-10" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[16px] font-bold text-heading">
                      {asset.name}
                    </span>
                    <span className="mt-1.5 block text-[14px] leading-[1.65] text-muted">
                      {asset.detail}
                    </span>
                    <a
                      href={asset.file}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-2.5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent"
                    >
                      Open {asset.file} <Arrow />
                    </a>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="border-b border-line-accent pb-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent">
              Usage
            </h3>
            <ul className="mt-6 space-y-4">
              {pressKit.usage.map((u, i) => (
                <Reveal as="li" key={u} delay={i * 50} y={10} className="flex gap-3.5">
                  <span aria-hidden="true" className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                  <span className="text-[15px] leading-[1.68] text-muted">{u}</span>
                </Reveal>
              ))}
            </ul>

            <h3 className="mt-10 border-b border-line-accent pb-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent">
              Writing the name
            </h3>
            <dl className="mt-5 divide-y divide-line">
              {pressKit.naming.map((n) => (
                <div key={n.rule} className="py-4">
                  <dt className="font-display text-[15px] font-bold text-heading">{n.rule}</dt>
                  <dd className="mt-1.5 text-[14px] leading-[1.65] text-muted">{n.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Block>

      {/* ---- Colours ---- */}
      <Block
        eyebrow="Palette"
        title="Colour"
        intro="These are the values this website is built from. The violet is the identity; everything else is structure."
        ground="canvas"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {pressKit.colours.map((c, i) => (
            <Reveal as="li" key={c.hex} delay={i * 55} y={12} className="card p-5">
              <span
                className="block h-20 w-full rounded-xl ring-1 ring-inset ring-black/10"
                style={{ backgroundColor: c.hex }}
                aria-hidden="true"
              />
              <span className="mt-3 flex items-baseline justify-between gap-3">
                <span className="font-display text-[15px] font-bold text-heading">{c.name}</span>
                <code className="font-mono text-[13px] font-semibold uppercase text-accent">
                  {c.hex}
                </code>
              </span>
              <span className="mt-1.5 block text-[13.5px] leading-snug text-muted">{c.use}</span>
            </Reveal>
          ))}
        </ul>
      </Block>

      {/* ---- Facts, and what is not published ---- */}
      <Block eyebrow="Reference" title="Facts" ground="sunken">
          <div className="card mx-auto max-w-3xl px-6 py-2">
            <dl>
              {pressKit.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-wrap justify-between gap-x-8 gap-y-1 border-b border-line py-4 last:border-b-0"
                >
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.1em] text-subtle">
                    {f.label}
                  </dt>
                  <dd className="font-display text-[15px] font-semibold text-heading">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
      </Block>

      <Block
        eyebrow="Ask us"
        title="Not published"
        intro="If you need any of the following, please ask rather than infer, we would rather answer than see a placeholder become a printed figure."
        ground="canvas"
      >
          <div className="card mx-auto max-w-3xl p-6 sm:p-8">
            <ul className="space-y-3.5">
              {pressKit.notPublished.map((n) => (
                <li key={n} className="flex gap-3.5 text-[15px] leading-[1.65] text-muted">
                  <span aria-hidden="true" className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-subtle/60" />
                  {n}
                </li>
              ))}
            </ul>
            <Link
              href="/company/contact-hrmagix"
              className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
            >
              Ask the team <Arrow />
            </Link>
          </div>
      </Block>

      {/* ---- Questions ---- */}
      <FaqSection title="Questions from the press" items={marketingFaqs["/company/press-kit"]} ground="sunken" />

      <Onward
        links={[
          {
            label: "Media Room",
            href: "/resources/media-room",
            note: "Which claims are attributable, and on what basis.",
          },
          {
            label: "About HRMagix",
            href: "/company/about-hrmagix",
            note: "The company behind the mark.",
          },
          {
            label: "Contact HRMagix",
            href: "/company/contact-hrmagix",
            note: "For anything this page does not cover.",
          },
        ]}
      />
    </>
  );
}
