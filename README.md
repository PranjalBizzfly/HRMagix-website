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
  icons.tsx           the icon set — 24×24, 1.6 stroke, currentColor, no emoji
  TabRail.tsx         swipe/drag/arrow-key pill rail (tabs or filters)
  StickyCta.tsx       mobile-only action bar, dismissible, safe-area aware
  ScrollTop.tsx       back-to-top, appears after two viewports
  RouteTransition.tsx 220ms cross-route fade
  SpotlightPanel.tsx  pointer-following highlight for server-rendered panels
  ProductVisuals.tsx  phone punch-in, payslip run, kudos wall (markup, not images)
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
  sections/           Hero, TrustBand, Contrast, Capabilities, Pillars,
                      QuoteBand, ClosingCta
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

## Imagery — what exists and how to add more

**hrmagix.com publishes no photography, screenshots or video.** Verified at
source: zero `<img>`, `<picture>`, `<video>` and `background-image` rules, no
`og:image`, no favicon.ico, no `/images` or `/assets`. The one authentic asset
the brand ships is its product mark at `app.hrmagix.com/favicon.svg`, checked in
here as `public/hrmagix-mark.svg` and used in the logo lockup and favicon.

So the product visuals are rendered in the browser from figures HRMagix
publishes — the same approach hrmagix.com itself takes — and presented inside
device frames (`components/Frames.tsx`): a browser window in the hero and the
attendance pillar, a tablet in the product gallery, a phone for punch-in.

`lib/media.ts` is the image layer. Every visual position on the site is a slot
with its intended subject, aspect ratio, rendered dimensions and alt text:

| slot | file to supply | subject |
| --- | --- | --- |
| `hero` | `hero-workspace.png` | dashboard capture, ≥2560×1600 |
| `attendance` | `module-attendance.png` | live presence board |
| `performance` | `module-performance.png` | quarterly OKR progress |
| `payroll` | `module-payroll.png` | completed payroll run |
| `recognition` | `module-recognition.png` | kudos wall |
| `mobile` | `app-punch-in.png` | app punch-in, portrait 1170×2532 |
| `team` | `team-at-work.jpg` | licensed people-team photography |

To add one: drop the file in `public/media/` and set `src` on that slot. The
`<Media>` component then renders it through `next/image` — intrinsic
`width`/`height`, responsive `sizes`, `object-fit` so nothing stretches, lazy
below the fold, `priority` in the hero — with a reveal-on-scroll and a gentle
hover scale. Until a slot has a `src`, it renders the live product view that is
there today, so the layout is identical either way and nothing is a placeholder
box. No stock photography and no invented screenshots are used anywhere.

## Icons and visuals

Every icon is an inline SVG from `components/icons.tsx` — one 24×24 box, 1.6
stroke, round caps, `currentColor`, sized by utility class. There are no emoji
anywhere in the UI (emoji render differently per OS and cannot take brand
colour), and no icon font or SVG sprite request.

hrmagix.com publishes **no photography, screenshots or video** — its own product
visual is drawn in the browser, and its "Watch Demo" button links to `#how`, its
3-step section. So the product renderings here are built the same way, in
markup, from the figures HRMagix publishes: the workspace, the phone punch-in
view, the payroll run and the kudos wall. Nothing is a fabricated screenshot, no
stock photography stands in for customers, and testimonials carry initials
rather than invented headshots. That also keeps the page at zero image bytes.

If real assets arrive later, add them with `next/image` (AVIF/WebP, explicit
dimensions, `loading="lazy"` below the fold) and a click-to-load poster for any
video.

## Typography

Montserrat display over Inter Tight body. Headings run at 500 with `<strong>`
at 700 — the mixed-weight sentence is the core type device. The scale lives in
`globals.css`: `.display-xl` for the one oversized moment per page,
`.display-lg` for section headings, `.display-md` for the 32–36px sub-section
tier, `.lede` for supporting copy. Body is 16–16.5px; headings sit 36px above
their sub-copy.

## Design

Layout, interaction and typography follow the Picky Assist design language —
centred oversized headlines with mixed weight in one sentence, soft tinted
panels, white feature chips, pill buttons with a circular arrow badge, the
before/after band, a full-width megamenu — rendered entirely in HRMagix's own
palette: primary violet `#7c5cff`, deep indigo `#160b3a`/`#1f1147`, lavender
surfaces `#f7f5ff`–`#ddd6ff`. Defined once in `tailwind.config.ts` as the
`violet` and `ink` scales. Type is Montserrat (display) over Inter Tight (body).

Section rhythm is deliberately uneven — tall storytelling blocks alternate with
short focused bands across five grounds (wash, white, brand gradient, deep
violet, two tints), so the page never settles into a repeating pattern.

No Picky Assist content, branding, imagery or colour appears anywhere.

## Motion and interaction

Scroll reveals, word-by-word headings, parallax and counters run on
`IntersectionObserver` plus rAF-throttled scroll reads — no animation library.

Horizontal interaction is one pattern everywhere (`.track` in `globals.css`
plus `useDragScroll` / `useSnapIndex`): CSS scroll-snap gives native swipe and
momentum on touch, `useDragScroll` adds click-drag for mouse, and arrow keys /
Home / End drive the same scroll position. The testimonial carousel, module
filters and workspace tabs all share it; the active dot is derived from scroll
offset rather than tracked separately. Controls only render while a track
actually overflows.

The pointer-following spotlight (`useSpotlight` → `.spotlight`) is applied to
five surfaces only — the three platform panels, the workspace tab panel and the
calculator. It paints behind content, so contrast is untouched, and the CSS
opts out under `pointer: coarse` and reduced motion.

Everything collapses to a static page under `prefers-reduced-motion: reduce`.

## Design system

One scale per property, enforced by a periodic scan of the rendered pages:

- **Radii** — 12 / 16 / 20 / 24 / 32 (plus the phone bezel at 27 / 35, which is
  a device shape, not a card).
- **Buttons** — 40 / 48 / 58 high; chips and pills have their own smaller scale.
- **Icons** — 12 / 14 / 16 / 18 / 22 / 24, always square.
- **Durations** — 200ms colour, 300ms transform, 500ms larger UI moves,
  700–800ms scroll reveals.
- **Section padding** — 56 / 80 / 96 / 112 / 128, varied deliberately so the
  page rhythm stays uneven.

`hoverOnlyWhenSupported` is on, so `:hover` styles never stick after a tap.

## Social card

`public/og.png` is a 1200×630 card built from the brand — the same violet
gradient, logo lockup and published tagline as the site — and wired through
`metadata.openGraph` / `twitter` with a canonical URL. It is a static file, so
it costs the page nothing at runtime. (Next's `next/og` runtime generator hits
a path bug on Windows in this version; the card is rendered once instead.)

## Accessibility

Skip link, visible focus rings, `aria-expanded` on every disclosure, the WAI-ARIA
tab pattern with roving tabindex for workspace areas, `aria-pressed` toggles for
filters, `aria-live` regions for filtered counts and carousel position, and
`aria-roledescription="carousel"` on the quote track. Closed menus are
`visibility: hidden` so they leave the tab order.

## Contact form

HRMagix publishes no form endpoint, so the form validates client-side and hands
the composed message to the visitor's mail client, addressed to
`hello@hrmagix.com`. Point `ContactForm`'s submit handler at a real endpoint
when one exists.
