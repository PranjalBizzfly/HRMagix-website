import type { Metadata } from "next";
import Link from "next/link";
import { careers } from "@/lib/resources";
import { site } from "@/lib/content";
import { Band, Opening, NumberedNarrative, Statement, Onward } from "@/components/editorial";
import { Arrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import EnquiryForm from "@/components/EnquiryForm";
import { EmptyState } from "@/components/states";
import OnThisPage from "@/components/OnThisPage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "What working on HRMagix involves: building Indian statutory payroll as software, from Pune and Mumbai. No vacancy list is published — here is how to approach us instead.",
  alternates: { canonical: "/company/careers" },
};

/**
 * Careers.
 *
 * HRMagix publishes no vacancy list, so this page does not fabricate one. It
 * also does not do the other common thing, which is to put up an empty "no
 * openings right now, check back soon" shell.
 *
 * Instead it does what a candidate actually needs before applying anywhere:
 * describes honestly what the work is, why this product is unusual to build,
 * and how to start a conversation — then states plainly, in its own section,
 * everything it is deliberately not claiming.
 */
export default function CareersPage() {
  return (
    <>
      <OnThisPage exclude={["See it run", "See this run", "See this running", "Talk it through"]} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo slot="careers" cover rounded="rounded-none" hover={false} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-violet-950/97 via-violet-950/88 to-violet-950/58"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-violet-950/85 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="shell relative pb-16 pt-[128px] sm:pb-20 sm:pt-[164px]">
          <Reveal y={8}>
            <Breadcrumbs
              tone="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Company", href: "/company/about" },
                { label: "Careers" },
              ]}
            />
          </Reveal>
          <h1 className="display display-lg mt-8 max-w-[16ch] text-balance !text-white">
            Correctness is not a quality attribute here. It is the product.
          </h1>
          <p className="mt-7 max-w-2xl text-[17px] leading-[1.65] text-violet-100/90 sm:text-[19px]">
            {careers.standfirst}
          </p>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <Opening label="What HRMagix is" paragraphs={careers.situation} />
      </Band>

      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">What the work is actually like</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            Four things about building this particular product that are worth knowing before you
            decide whether it appeals to you.
          </p>
        </Reveal>
        <NumberedNarrative items={careers.whatTheWorkIs} className="mt-14" />
      </Band>

      <Statement tone="light" attribution="The nature of the problem">
        Building payroll for India is not a design problem with a compliance appendix. It is a
        compliance problem that has to be expressed as software.
      </Statement>

      {/* ---- Open roles: a real listing, or a real empty state ---- */}
      <Band ground="surface" size="lg" id="openings">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">Open roles</h2>
        </Reveal>

        {careers.openings.length === 0 ? (
          <Reveal delay={100} y={12} className="mt-10 max-w-3xl">
            <EmptyState
              title="No roles are published right now"
              body={
                <>
                  This is a genuine empty state, not a page waiting for content. HRMagix has not
                  published a vacancy list, so none is shown — inventing roles would waste the time
                  of the people this page most wants to reach.
                  <span className="mt-4 block">
                    The form below still goes somewhere. If what you would want to work on matches
                    something we need, the conversation starts there rather than through a listing.
                  </span>
                </>
              }
            />
          </Reveal>
        ) : (
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {careers.openings.map((role) => (
              <Reveal as="li" key={role.slug} y={12}>
                <Link
                  href={`/company/careers/${role.slug}`}
                  className="group grid gap-2 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,16rem)_auto] lg:items-baseline lg:gap-8"
                >
                  <span className="font-display text-[18px] font-bold text-heading transition-colors group-hover:text-accent">
                    {role.title}
                  </span>
                  <span className="text-[14.5px] text-muted">
                    {role.team} · {role.location} · {role.type}
                  </span>
                  <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        )}
      </Band>

      {/* ---- How to apply ---- */}
      <Band ground="surface" size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16">
          <div>
            <h2 className="display display-md max-w-[16ch]">How to approach us</h2>
            {careers.howToApply.map((p, i) => (
              <Reveal key={i} delay={i * 80} y={12}>
                <p className="mt-5 max-w-2xl text-[16.5px] leading-[1.72] text-muted">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={200} className="mt-9">
              <EnquiryForm
                subject="Working at HRMagix"
                submitLabel="Send your introduction"
                successTitle="Your introduction is ready to send"
                intro="There is no application portal behind this. Tell us what you would want to work on and what you have built — that is more useful to us than a form with twelve required fields."
                fields={[
                  { name: "name", label: "Your name", required: true, half: true },
                  { name: "email", label: "Email", type: "email", required: true, half: true },
                  {
                    name: "work",
                    label: "What you would want to work on",
                    type: "textarea",
                    required: true,
                    placeholder: "The part of this product that interests you, and why.",
                  },
                  {
                    name: "built",
                    label: "What you have built before",
                    type: "textarea",
                    required: true,
                    hint: "Whatever best represents your work. Depth on one thing beats a list of ten.",
                  },
                  {
                    name: "link",
                    label: "A link to your work",
                    type: "url",
                    placeholder: "https://",
                    hint: "Portfolio, repository, writing — anything we can actually look at.",
                    half: true,
                  },
                  { name: "location", label: "Where you are based", half: true },
                ]}
              />
            </Reveal>
          </div>

          <Reveal delay={140} y={14} className="rounded-2xl bg-surface-sunken p-6 ring-1 ring-line sm:p-7">
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-subtle">
              Where we are
            </h3>
            <p className="mt-4 text-[16px] leading-[1.7] text-body">{site.contact.location}</p>
            <dl className="mt-6 space-y-4 border-t border-line pt-5">
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-subtle">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-[15px] font-semibold text-accent transition-colors hover:text-accent-strong"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-subtle">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="text-[15px] font-semibold text-accent transition-colors hover:text-accent-strong"
                  >
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Band>

      {/* ---- The honesty section ---- */}
      <Band ground="raised" size="md">
        <Reveal y={12} className="mx-auto max-w-3xl">
          <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-subtle">
            {careers.honesty.heading}
          </h2>
          <ul className="mt-6 space-y-3.5">
            {careers.honesty.points.map((p) => (
              <li key={p} className="flex gap-3.5 text-[15.5px] leading-[1.7] text-muted">
                <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-subtle/60" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[15px] leading-[1.7] text-subtle">
            A careers page that invents roles wastes the time of the people it most wants to reach.
            If that changes and there are positions to publish, they will appear here.
          </p>
        </Reveal>
      </Band>

      <Onward
        links={[
          {
            label: "About HRMagix",
            href: "/company/about",
            note: "What the company is, and what it deliberately is not.",
          },
          {
            label: "Solutions",
            href: "/solutions",
            note: "The product you would be working on, described in full.",
          },
          {
            label: "Contact",
            href: "/company/contact",
            note: "The same team, for any other reason.",
          },
        ]}
      />
    </>
  );
}
