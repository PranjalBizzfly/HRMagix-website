# HRMagix — Site Architecture

Deliverable for `docs/…/02-page-structure.md`: sitemap, page hierarchy, URL map,
navigation model, page states and the reusable template strategy.

Scope note: this file documents the **UI/UX architecture**. Commerce, auth,
admin and legal surfaces are recorded as out of scope rather than invented.

---

## 1. Sitemap

```
/                         Home
├── /features             Capabilities (service-equivalent)
├── /modules              Modules (product-equivalent)
├── /how-it-works         Onboarding walkthrough
├── /pricing              Plans + cost calculator
├── /about                Company
├── /faq                  Questions
└── /contact              Contact + enquiry form

System routes
├── not-found             404 (app/not-found.tsx)
├── error                 Route error boundary (app/error.tsx)
├── global-error          Root-layout boundary (app/global-error.tsx)
└── loading               Route loading skeleton (app/loading.tsx)
```

## 2. Page hierarchy

| Depth | Pages | Role |
| --- | --- | --- |
| 0 | `/` | Entry. Carries the full story: hero → proof → contrast → capabilities → pillars → product gallery → areas → modules → steps → recognition → calculator → testimonials → assurances → FAQ → CTA. |
| 1 — Platform | `/features`, `/modules`, `/how-it-works` | What the product does, in increasing detail. |
| 1 — Company | `/about`, `/pricing`, `/faq`, `/contact` | Who we are, what it costs, objections, conversion. |

Depth never exceeds one level; every page is reachable from the header in at
most two interactions.

## 3. URL map

| URL | Template | Primary CTA | Status |
| --- | --- | --- | --- |
| `/` | Home composition (bespoke) | Get Started | live |
| `/features` | Interior + capability spreads | Get Started | live |
| `/modules` | Interior + module map | Get Started | live |
| `/how-it-works` | Interior + step trail | Book a Demo | live |
| `/pricing` | Interior + plan ladder | Start Free Trial | live |
| `/about` | Interior + statement | Talk to the team | live |
| `/faq` | Interior + accordion | Book a demo | live |
| `/contact` | Split hero + form | Send message | live |

All URLs are lowercase, hyphenated, extensionless and stable. **No URL has
changed**, so no redirects are required. If one must change later, add a 301 in
`next.config.mjs` via `redirects()` — do not silently repoint links.

### Deliberately absent

| Surface | Why |
| --- | --- |
| Blog / content pages | HRMagix publishes none; inventing articles would fabricate content. |
| Location pages | One published location (Pune). A page per location needs more than one. |
| Login / account | Lives on `app.hrmagix.com`; the marketing site links out. |
| Checkout / payment | Pricing is display-only; no commerce layer exists. |
| Policy pages | Legal copy must come from the business, not be drafted here. |
| Admin | No CMS or backend in this project. |

## 4. Navigation model

| Layer | Where | Contents |
| --- | --- | --- |
| Primary | Header (`lg`+) | Platform (mega-menu), Features, How it works, Pricing, Company. `Contact Sales` and `How it works` appear inline from `xl`. |
| Secondary | Mega-menu panels | Capabilities list, modules grouped by workspace area, promo card. |
| Mobile | Full-screen sheet (`< lg`) | Platform / Company toggle, capability list, module chip rail, CTAs. |
| Breadcrumbs | Every interior page | `components/Breadcrumbs.tsx` — `<nav aria-label="Breadcrumb">` + `<ol>`, current page marked `aria-current="page"`. |
| Footer | All pages | CTA panel, trust strip, Product / Company / Resources / Capabilities columns, full module index, contact block. |
| Contextual | In-page | Every section ends in a relevant onward link rather than a dead end. |

## 5. Page states

| State | Implementation | Applied to |
| --- | --- | --- |
| Loading | `app/loading.tsx` → `PageSkeleton` | Route transitions |
| Empty | `EmptyState` in `components/states.tsx` | Module wall when a filter matches nothing |
| Error | `app/error.tsx` → `ErrorState` with retry + digest | Any route failure |
| Root error | `app/global-error.tsx` (self-contained markup) | Root layout failure |
| Success | `SuccessState` | Contact form after submit |
| Not found | `app/not-found.tsx` | Unknown URLs |
| Unauthorized | N/A | No auth layer in this project |
| Maintenance | N/A | Belongs to hosting, not the app |

All four states share one visual language via `StatePanel`: icon tile, headline,
body, action.

## 6. Template strategy

Pages are compositions, not a repeated shell. Three reusable openers plus a
shared section vocabulary:

**Openers**
- `PageHero` — centred eyebrow → display headline → lede → actions → breadcrumbs. Used by six interior pages.
- Home `Hero` — bespoke: trust pills, oversized type, product collage.
- Contact — bespoke split: dark channel rail beside the form.

**Section vocabulary** (mixed per page so no two pages read alike)
`SectionHead` · `Contrast` · `Capabilities` · `Pillars` · `ProductGallery` ·
`AreaPanels` · `ModuleExplorer` · `StepTrail` · `Calculator` ·
`TestimonialDeck` · `QuoteBand` · `Faq` · `ClosingCta` · `Marquee`

**Rhythm rule** — a page must not repeat the same ground or block height twice
in a row. Grounds available: `wash`, white, `violet-50/70`, `violet-100/60`,
brand gradient, `violet-950`. Section padding scale: 56 / 80 / 96 / 112 / 128.

**Media** — every visual position is a slot in `lib/media.ts` rendered through
`components/Media.tsx` (next/image, intrinsic dimensions, responsive `sizes`,
lazy below the fold). Device framing comes from `components/Frames.tsx`.
