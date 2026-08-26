import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { Pill, SectionHead, Stars } from "@/components/ui";
import { Reveal, Words } from "@/components/motion";
import { plans, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the HRMagix team — email hello@hrmagix.com, call +91 98765 43210, or send a message for a personalised demo.",
};

export default function ContactPage() {
  const channels = [
    { label: "Email us", value: site.contact.email, href: `mailto:${site.contact.email}`, glyph: "✉" },
    {
      label: "Call us",
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/[^+\d]/g, "")}`,
      glyph: "☎",
    },
    { label: "Visit us", value: site.contact.location, href: "", glyph: "⌖" },
  ];

  return (
    <>
      <section className="relative overflow-hidden wash pb-20 pt-[112px] sm:pt-[136px]">
        <div className="pointer-events-none absolute inset-0 dotted opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-30%] h-[420px] w-[760px] max-w-[130vw] -translate-x-1/2 rounded-full bg-violet-300/25 blur-[110px]"
          aria-hidden="true"
        />

        <div className="shell relative">
          <div className="text-center">
            <Reveal y={10} className="flex justify-center">
              <Pill>
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                Get in touch
              </Pill>
            </Reveal>
            <h1 className="display mx-auto mt-7 max-w-[18ch] text-[clamp(2.1rem,6vw,3.6rem)]">
              <Words as="span" text="Talk to the" />{" "}
              <Words as="span" text="HRMagix team" className="font-bold" delay={140} />
            </h1>
            <Reveal delay={240} className="mx-auto mt-6 max-w-2xl">
              <p className="text-[clamp(0.98rem,2.2vw,1.15rem)] leading-relaxed text-ink-soft">
                {site.contact.blurb}
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-5">
            {/* Channels rail */}
            <Reveal y={22}>
              <div className="panel h-full bg-violet-950 p-7 text-white sm:p-9">
                <div className="pointer-events-none absolute inset-0 dotted opacity-25" aria-hidden="true" />
                <div
                  className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet-500/35 blur-[90px]"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-violet-300">
                    Contact
                  </p>
                  <ul className="mt-8 space-y-6">
                    {channels.map((c, i) => (
                      <Reveal as="li" key={c.label} delay={i * 90} y={12} className="flex items-start gap-4">
                        <span
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/[0.08] text-[16px] ring-1 ring-inset ring-white/12"
                          aria-hidden="true"
                        >
                          {c.glyph}
                        </span>
                        <span>
                          <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-violet-400">
                            {c.label}
                          </span>
                          {c.href ? (
                            <a
                              href={c.href}
                              className="mt-1 block text-[16px] font-semibold text-white transition-colors hover:text-violet-300"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <span className="mt-1 block text-[16px] font-semibold text-white">
                              {c.value}
                            </span>
                          )}
                        </span>
                      </Reveal>
                    ))}
                  </ul>

                  <div className="mt-10 border-t border-white/10 pt-7">
                    <Stars />
                    <p className="mt-3 max-w-[30ch] text-[13.5px] text-violet-200/80">
                      {site.proof.trustline}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-violet-400">
                      Plans
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {plans.map((p) => (
                        <li key={p.name} className="flex items-baseline justify-between gap-4 text-[13.5px]">
                          <span className="text-violet-200/85">{p.name}</span>
                          <span className="font-semibold text-white">
                            {p.price}
                            <span className="text-[11.5px] font-normal text-violet-300/80">
                              {p.unit ?? ""}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-[11.5px] text-violet-300/70">{site.trial}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal y={22} delay={120}>
              <div className="panel h-full bg-white p-7 shadow-soft ring-1 ring-violet-100 sm:p-10">
                <h2 className="font-display text-[22px] font-bold">Send us a message</h2>
                <p className="mt-1.5 text-[14px] text-ink-faint">
                  Tell us about your team and what you would like to see.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <SectionHead
              align="left"
              eyebrow="Quick answers"
              title={
                <>
                  While you <strong>wait for us</strong>
                </>
              }
            />
          </div>
          <Faq limit={4} />
        </div>
      </section>
    </>
  );
}
