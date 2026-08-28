import Image from "next/image";
import { site } from "@/lib/content";
import { Button, Stars } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal, Words } from "@/components/motion";

/** Closing consultation band: rich typography, direct Indian phone/email channels, and real team photo. */
export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-violet-950 py-24 text-white sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 dotted opacity-25" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[1000px] max-w-[140vw] -translate-x-1/2 rounded-full bg-brand/30 blur-[130px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal y={10} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md ring-1 ring-white/20">
            <div className="flex -space-x-2">
              {site.proof.avatars.map((av, idx) => (
                <div key={idx} className="relative h-5 w-5 overflow-hidden rounded-full ring-2 ring-violet-900">
                  <Image src={av} alt="User" width={20} height={20} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <Stars size="h-3 w-3" />
            <span className="text-[13px] font-medium text-violet-200">
              Trusted by 120+ Indian Enterprises
            </span>
          </Reveal>

          <h2 className="display display-xl mx-auto mt-7 max-w-[16ch] !text-white">
            <Words text="Ready to transform your" className="block" />
            <Words text="people operations?" className="block font-bold" delay={140} />
          </h2>

          <Reveal delay={220} className="mx-auto mt-6 max-w-2xl">
            <p className="text-[17px] leading-relaxed text-violet-200/90 sm:text-[19px]">
              Join over 120 forward-thinking Indian enterprises running modern attendance, zero-error statutory payroll, OKRs, and employee recognition on HRMagix.
            </p>
          </Reveal>

          {/* Action buttons */}
          <Reveal delay={320} className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Button href="/contact" variant="light" size="lg">
              Schedule a 1-on-1 Consultation
            </Button>
            <Button
              href="tel:+919006007955"
              variant="outline"
              size="lg"
              arrow={false}
              className="!bg-transparent !text-white !ring-white/30 hover:!ring-white/70"
            >
              <Icon name="phone" className="h-4 w-4 mr-1 text-emerald-400" />
              +91 900 600 7955
            </Button>
          </Reveal>

          <Reveal delay={400} className="mt-5">
            <p className="text-[13px] text-violet-300/80">{site.trial}</p>
          </Reveal>
        </div>

        {/* Enterprise Deployment & Direct Hotline Card */}
        <Reveal y={30} scale={0.98} delay={460} className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-[11.5px] font-bold text-violet-200 backdrop-blur-md ring-1 ring-white/20">
                <Icon name="sparkle" className="h-3.5 w-3.5 text-violet-300" />
                Zero-Implementation-Fee Onboarding
              </span>
              <h3 className="display display-md mt-4 !text-white">
                Go live in 24 hours with dedicated white-glove migration
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-violet-200/90">
                Our Pune implementation engineers import your existing employee master sheets, leave balances, and biometric device configurations so your team experiences zero downtime.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-[13.5px] text-violet-200">
                <span className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-emerald-400" />
                  Excel / CSV data import
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-emerald-400" />
                  Biometric API sync
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-emerald-400" />
                  Custom salary structure
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/15 p-6 backdrop-blur-md ring-1 ring-white/20">
                <p className="text-[12px] font-bold uppercase tracking-wider text-violet-300">
                  Speak Directly With Our Product Team
                </p>
                <div className="mt-4 space-y-3">
                  <a
                    href="tel:+919006007955"
                    className="flex items-center gap-3 rounded-xl bg-white/15 p-3 font-semibold text-white transition hover:bg-white/25"
                  >
                    <Icon name="phone" className="h-4 w-4 text-emerald-400" />
                    <span>+91 900 600 7955</span>
                  </a>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-3 rounded-xl bg-white/15 p-3 font-semibold text-white transition hover:bg-white/25"
                  >
                    <Icon name="mail" className="h-4 w-4 text-violet-300" />
                    <span>{site.contact.email}</span>
                  </a>
                </div>
                <div className="mt-5 text-center">
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-[14px] font-bold text-violet-950 shadow-md transition hover:bg-violet-50"
                  >
                    Book Consultation <Icon name="arrowRight" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
