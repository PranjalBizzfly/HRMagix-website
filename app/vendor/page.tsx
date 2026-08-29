import type { Metadata } from "next";
import Link from "next/link";
import { vendor } from "@/lib/resources";
import { site } from "@/lib/content";
import { Band, Opening, Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Partners & Vendors",
  description:
    "HRMagix works with accounting firms, HR implementation consultants and biometric hardware suppliers. There is no tiered partner programme — here is how each relationship actually works.",
  alternates: { canonical: "/vendor" },
};

/**
 * Partners and vendors.
 *
 * The brief for this page was explicit: build it only if genuine information
 * supports it, and do not invent a programme. HRMagix publishes no partner
 * programme — no tiers, no badges, no commission schedule, no directory.
 *
 * So this page describes the three working relationships that genuinely exist
 * around the product, says in its own words that there is no programme to join,
 * and routes people to the real channel. The final section lists what is
 * deliberately absent, so nobody has to guess whether they missed a page.
 */
export default function VendorPage() {
  return (
    <>
      <header className="border-b border-line bg-surface-sunken pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Partners & Vendors" }]} />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[18ch] text-balance">
                No tiers, no badges. <strong>Three real relationships.</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                {vendor.standfirst}
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <Photo slot="vendor" ratio="4 / 5" sizes="(max-width: 1024px) 100vw, 340px" />
            </Reveal>
          </div>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <Opening label="The position" paragraphs={vendor.position} />
      </Band>

      {/* ---- The three relationships ---- */}
      <Band ground="sunken" size="lg">
        <ol className="divide-y divide-line border-y border-line">
          {vendor.relationships.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 70} y={14} className="py-10 sm:py-12">
              <div className="grid gap-5 lg:grid-cols-[minmax(0,3rem)_minmax(0,1fr)] lg:gap-10">
                <span
                  aria-hidden="true"
                  className="font-display text-[34px] font-light leading-none text-line-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-[22px] font-bold leading-snug tracking-[-0.02em] text-heading">
                    {r.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-[16.5px] leading-[1.72] text-muted">{r.body}</p>
                  <p className="mt-5 inline-flex items-start gap-2.5 rounded-lg bg-surface px-4 py-3 text-[14px] leading-snug text-accent-strong ring-1 ring-line">
                    <span className="font-semibold uppercase tracking-[0.08em]">Who this is for</span>
                    <span className="text-muted">{r.forWhom}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Band>

      {/* ---- Procurement ---- */}
      <Band ground="surface" size="md">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={12}>
            <h2 className="display display-md">Selling to us</h2>
          </Reveal>
          <div>
            {vendor.procurement.map((p, i) => (
              <Reveal key={i} delay={i * 80} y={12}>
                <p className={`max-w-2xl text-[16.5px] leading-[1.72] text-muted ${i ? "mt-5" : ""}`}>
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal delay={200} className="mt-7">
              <Button href={`mailto:${site.contact.email}?subject=Partner%20or%20supplier%20enquiry`}>
                Write with a specific proposal
              </Button>
            </Reveal>
          </div>
        </div>
      </Band>

      {/* ---- What is absent, and why ---- */}
      <Band ground="raised" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-subtle">
            {vendor.honesty.heading}
          </h2>
          <ul className="mt-6 space-y-3.5">
            {vendor.honesty.points.map((p) => (
              <li key={p} className="flex gap-3.5 text-[15.5px] leading-[1.7] text-muted">
                <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-subtle/60" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[15px] leading-[1.7] text-subtle">
            Publishing a partner programme before one exists produces applications nobody can
            process and expectations nobody set. If a programme is introduced, it will be described
            here with its actual terms.
          </p>
          <Link
            href="/company/contact"
            className="group mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent"
          >
            Talk to the team instead <Arrow />
          </Link>
        </Reveal>
      </Band>

      <Onward
        links={[
          {
            label: "Attendance & Shifts",
            href: "/solutions/attendance",
            note: "The biometric hardware HRMagix integrates with today.",
          },
          {
            label: "Payroll",
            href: "/solutions/payroll",
            note: "The filing output an accounting partner would be reviewing.",
          },
          {
            label: "Terms of Service",
            href: "/policy/terms",
            note: "Including the clause on where statutory responsibility sits.",
          },
        ]}
      />
    </>
  );
}
