import type { Metadata } from "next";
import { SiteStats, Block, FaqSection } from "@/components/sky9";
import { marketingFaqs } from "@/lib/pageFaqs/marketing";
import Link from "next/link";
import { site } from "@/lib/content";
import { Onward } from "@/components/editorial";
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
  alternates: { canonical: "/company/contact-hrmagix" },
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
      body: "How a particular head is treated, an ESI case near the threshold, a multi-state PT position, gratuity on a break in service. These go straight to the specialists rather than through a queue.",
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
      <header className="page-hero relative isolate overflow-hidden border-b border-line bg-surface pb-12 pt-[92px] sm:pb-16 sm:pt-[120px] lg:pb-20 lg:pt-[132px]">

        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo slot="contact-hero-bg" cover rounded="rounded-none" hover={false} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-panel/96 via-panel/88 to-panel/65"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-panel/90 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Editorial glowing ambient wash */}
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[460px] w-[680px] rounded-full bg-glow/18 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-20 h-[340px] w-[500px] rounded-full bg-violet-400/8 blur-[120px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <Reveal y={8}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact HRMagix" }]} />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <div>
              <Reveal y={10}>
                <span className="inline-flex items-center gap-2 rounded-full bg-surface-raised px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent-soft ring-1 ring-line">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                  Product Specialists in Pune
                </span>
              </Reveal>
              <h1 className="display display-lg mt-5 max-w-[16ch] text-balance">
                Talk to the people who <strong>built the compliance engine</strong>
              </h1>
              <p className="mt-7 max-w-2xl text-[17.5px] leading-[1.65] text-body sm:text-[19px]">
                {site.contact.blurb}
              </p>
            </div>
            <Reveal delay={140} y={20}>
              <div className="card border-line/60 bg-surface/85 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-lift">
                <span className="text-[12px] font-bold uppercase tracking-wider text-accent-soft flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Direct Advisory Line
                </span>
                <p className="font-display text-lg font-bold text-heading mt-2">
                  Pune & Mumbai product specialists, not a call center queue
                </p>
                <p className="text-[14px] text-body mt-2 leading-relaxed">
                  Support and implementation run on WhatsApp, phone, and email with product specialists in your statutory timezone.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <SiteStats />

      <Block
        eyebrow="Contact"
        title="Send a message"
        intro="The more specific the message, the more useful the reply. If you already know which module or which statutory head you are asking about, say so."
        ground="canvas"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-10">
          {/* ---- Form ---- */}
          <div className="card p-5 sm:p-8">
            <ContactForm />
          </div>

          {/* ---- Channels ---- */}
          <Reveal delay={120} y={16}>
            <div className="panel-fixed-dark relative overflow-hidden rounded-3xl bg-panel p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute inset-0 dotted opacity-20" aria-hidden="true" />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full panel-bloom blur-[80px]"
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
                    Already a customer with a cutoff running? Call or message rather than emailing,
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
      </Block>

      {/* ---- What to expect, and what to bring ---- */}
      <Block
        eyebrow="Demo"
        title="What a demo actually looks like"
        intro="Worth saying plainly, because the word covers everything from a slide deck to a two-hour workshop."
        ground="sunken"
      >
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                It is your payroll month, not ours
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                The useful version of this conversation runs against your own numbers: your salary
                structure, your leave scheme, your shift pattern, your states. A demonstration on
                sample data proves that the software runs. It does not tell you whether it handles
                the specific thing that goes wrong in your month, which is the only question worth
                an hour of your time.
              </p>
            </section>

            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                What helps to have ready
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                Nothing is required, but four things make the conversation concrete: a sample
                salary structure for one grade, your leave policy as it currently stands, the
                states you employ in, and the thing that most recently went wrong at month end.
                The last of those is usually the most informative.
              </p>
            </section>

            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                Questions we would rather you asked
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                How a mid-year migration handles year-to-date figures for Form 16. What happens to
                a night shift that crosses midnight. How a backdated increment is treated in a
                month that has already been filed. What an employee can and cannot do in
                self-service. These are the places HRMS and payroll software differ from one
                another, and none of them show up in a feature list.
              </p>
            </section>

            <section className="card card-hover p-6">
              <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-heading">
                If you would rather not talk to anyone yet
              </h3>
              <p className="mt-4 text-[16.5px] leading-[1.72] text-muted">
                The rates are published, the calculators run on your own figures without an email
                address, and the module pages describe what each part of the platform does in
                plain language. The trial gives full access to every module for fourteen days
                without a credit card, which is a more honest evaluation than any call.
              </p>
            </section>
          </div>
      </Block>

      <Block
        eyebrow="Reasons"
        title="Four reasons people write"
        intro="And what makes a message about each one genuinely useful to answer."
        ground="canvas"
      >
        <dl className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 65} y={12} className="card card-hover p-6">
              <dt className="font-display text-[17px] font-bold leading-snug text-heading">
                {r.title}
              </dt>
              <dd className="mt-3 text-[15.5px] leading-[1.7] text-muted">{r.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Block>

      {/* ---- Questions ---- */}
      <FaqSection title="Questions about getting in touch" items={marketingFaqs["/company/contact-hrmagix"]} ground="sunken" />

      <Onward
        links={[
          {
            label: "Pricing",
            href: "/pricing",
            note: "The published rates, before you ask anybody for them.",
          },
          {
            label: "Questions & Answers",
            href: "/resources/questions-and-answers",
            note: "Your question may already be answered in full.",
          },
          {
            label: "How Setup Works",
            href: "/how-setup-works",
            note: "What setup involves, so the demo conversation starts further along.",
          },
        ]}
      />
    </>
  );
}
