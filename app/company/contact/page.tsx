import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";
import { Band, Onward } from "@/components/editorial";
import { Arrow } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/icons";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact HRMagix",
  description:
    "Talk to the HRMagix product specialists in Pune about a demo, a statutory question, migration from spreadsheets, or pricing. Email, phone and WhatsApp.",
  alternates: { canonical: "/company/contact" },
};

/**
 * Contact.
 *
 * The distinctive thing here is the "what to expect" column. Most contact pages
 * take a message and say nothing about what happens next, which is precisely
 * the uncertainty that stops people submitting them. This one names the four
 * reasons people actually write, and says what a useful message contains for
 * each — because a demo booked with the right information in it is worth more
 * to both sides than a form filled in blind.
 */
export default function ContactPage() {
  const reasons = [
    {
      title: "A demo against your own policies",
      body: "Bring your leave scheme, your shift patterns and the states you operate in. A walkthrough configured to your rules answers far more than a generic tour.",
    },
    {
      title: "A specific statutory question",
      body: "How a particular head is treated — an ESI case near the threshold, a multi-state PT position, gratuity on a break in service. These go straight to the specialists rather than through a queue.",
    },
    {
      title: "Migration from spreadsheets or another system",
      body: "Tell us roughly how many employees, how many entities and locations, and what you hold historically. That determines whether this is a two-day setup or a longer conversation.",
    },
    {
      title: "Pricing and plans",
      body: "The rates are published and the calculator is on the site, so this is usually a question about which plan covers which module. Ask directly and you will get a direct answer.",
    },
  ];

  return (
    <>
      {/* ---- Split opener: dark channel rail beside the page ---- */}
      <header className="border-b border-line bg-surface pb-14 pt-[104px] sm:pb-16 sm:pt-[128px]">
        <div className="shell">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <div>
              <h1 className="display display-lg max-w-[16ch] text-balance">
                Talk to the people who <strong>built the compliance engine</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                {site.contact.blurb}
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <Photo slot="contact" ratio="4 / 3" sizes="(max-width: 1024px) 100vw, 420px" />
            </Reveal>
          </div>
        </div>
      </header>

      <Band ground="surface" size="lg">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          {/* ---- Form ---- */}
          <div>
            <Reveal y={12}>
              <h2 className="display display-md">Send a message</h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-muted">
                The more specific the message, the more useful the reply. If you already know which
                module or which statutory head you are asking about, say so.
              </p>
            </Reveal>
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>

          {/* ---- Channels ---- */}
          <Reveal delay={120} y={16}>
            <div className="panel-fixed-dark relative overflow-hidden rounded-3xl bg-violet-950 p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute inset-0 dotted opacity-20" aria-hidden="true" />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/35 blur-[80px]"
                aria-hidden="true"
              />
              <div className="relative">
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-violet-300">
                  Direct channels
                </h2>

                <ul className="mt-7 space-y-6">
                  <li>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-violet-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="group mt-1.5 inline-flex items-center gap-2 font-display text-[18px] font-bold text-white transition-colors hover:text-violet-200"
                    >
                      <Icon name="mail" className="h-4 w-4 text-violet-300" />
                      {site.contact.email}
                    </a>
                  </li>
                  <li>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-violet-400">
                      Phone & WhatsApp
                    </p>
                    <a
                      href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                      className="group mt-1.5 inline-flex items-center gap-2 font-display text-[18px] font-bold text-white transition-colors hover:text-violet-200"
                    >
                      <Icon name="phone" className="h-4 w-4 text-violet-300" />
                      {site.contact.phone}
                    </a>
                  </li>
                  <li>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-violet-400">
                      Where we are
                    </p>
                    <p className="mt-1.5 flex items-start gap-2 text-[16px] leading-relaxed text-violet-100">
                      <Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-violet-300" />
                      {site.contact.location}
                    </p>
                  </li>
                </ul>

                <div className="mt-8 border-t border-white/12 pt-6">
                  <p className="text-[14px] leading-relaxed text-violet-200/85">
                    Already a customer with a cutoff running? Call or message rather than emailing —
                    that is what the phone line is for.
                  </p>
                  <Link
                    href="https://app.hrmagix.com/login"
                    className="group mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-white"
                  >
                    Sign in to the workspace <Arrow />
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-5 px-1 text-[13px] leading-relaxed text-subtle">
              {site.trial}
            </p>
          </Reveal>
        </div>
      </Band>

      {/* ---- What to expect ---- */}
      <Band ground="sunken" size="lg">
        <Reveal y={12} className="max-w-2xl">
          <h2 className="display display-md">Four reasons people write</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-muted">
            And what makes a message about each one genuinely useful to answer.
          </p>
        </Reveal>

        <dl className="mt-12 grid gap-x-14 gap-y-9 lg:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 65} y={12} className="border-t border-line pt-5">
              <dt className="font-display text-[17px] font-bold leading-snug text-heading">
                {r.title}
              </dt>
              <dd className="mt-3 text-[15.5px] leading-[1.7] text-muted">{r.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Band>

      <Onward
        links={[
          {
            label: "Pricing",
            href: "/pricing",
            note: "The published rates, before you ask anybody for them.",
          },
          {
            label: "Questions & answers",
            href: "/resources/faqs",
            note: "Your question may already be answered in full.",
          },
          {
            label: "How it works",
            href: "/how-it-works",
            note: "What setup involves, so the demo conversation starts further along.",
          },
        ]}
      />
    </>
  );
}
