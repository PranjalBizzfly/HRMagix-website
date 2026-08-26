# HRMagix Website

Custom marketing site for **HRMagix** — modern HR, from hire to retire.
Built from scratch with Next.js (App Router), React, TypeScript and Tailwind CSS.
No UI kit, no template.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build
npm run typecheck
```

## Structure

```
app/
  layout.tsx          root shell: fonts, nav, footer, skip link
  page.tsx            homepage — hero → proof → before/after → capabilities
                      → pillars → workspace areas → modules → steps
                      → calculator → testimonials → assurances → FAQ → CTA
  about/  features/  modules/  how-it-works/  pricing/  faq/  contact/
  not-found.tsx
components/
  motion.tsx          Reveal / Words / Parallax / Counter / scroll helpers
  ui.tsx              Logo, pill Button (circular arrow badge), SubmitButton,
                      Pill, SectionHead, tick/cross icons
  Nav.tsx             sticky nav, full-width megamenu, mobile sheet
  Footer.tsx          CTA strip, link columns, module index
  Workspace.tsx       hand-built product visual
  AreaPanels.tsx      tabbed workspace areas, capability = outcome rows
  Calculator.tsx      per-employee cost calculator
  ModuleExplorer.tsx  filterable module wall
  StepTrail.tsx       scroll-filled 3-step trail
  TestimonialDeck.tsx quote carousel (3-up on desktop, swipe deck below)
  Pricing.tsx  Faq.tsx  ContactForm.tsx  Marquee.tsx  Bar.tsx  PageHero.tsx
  sections/           Hero, TrustBand, Contrast, Capabilities, Pillars, ClosingCta
lib/content.ts        every string on the site, in one place
```

## Content

All copy, figures, module names, plans, testimonials and contact details come
from hrmagix.com. Nothing is invented:

- **FAQ answers** are composed only from published facts (plan contents, trial
  terms, module list, support tiers).
- **The before/after section** states HRMagix's own claims on the "after" side;
  each "before" line is the status quo those claims name — "zero spreadsheets",
  "replaced five tools", "payroll used to take two days", "instant approvals".
- **The calculator** is arithmetic on the published $3 / $6 per-employee rates.
  Enterprise has no rate, so it shows "Custom". No modelled savings or ROI.

## Design

Layout, interaction and typography follow the Picky Assist design language —
centred oversized headlines with mixed weight in one sentence, soft tinted
panels, white feature chips, pill buttons with a circular arrow badge, the
before/after band, a full-width megamenu — rendered entirely in HRMagix's own
palette: primary violet `#7c5cff`, deep indigo `#160b3a`/`#1f1147`, lavender
surfaces `#f7f5ff`–`#ddd6ff`. Defined once in `tailwind.config.ts` as the
`violet` and `ink` scales. Type is Montserrat (display) over Inter Tight (body).

No Picky Assist content, branding, imagery or colour appears anywhere.

## Motion

Scroll reveals, word-by-word headings, parallax and counters run on
`IntersectionObserver` plus rAF-throttled scroll reads — no animation library.
Everything collapses to a static page under `prefers-reduced-motion: reduce`.

## Contact form

HRMagix publishes no form endpoint, so the form validates client-side and hands
the composed message to the visitor's mail client, addressed to
`hello@hrmagix.com`. Point `ContactForm`'s submit handler at a real endpoint
when one exists.
