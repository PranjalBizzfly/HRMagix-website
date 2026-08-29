# HRMagix website

Marketing site for **HRMagix** — an HRMS and payroll platform for Indian
companies. Next.js 15 App Router, React 19, TypeScript, Tailwind 3. No UI kit,
no template. Thirty-nine statically prerendered routes.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build
npm run start
npm run typecheck
```

`ARCHITECTURE.md` explains how the site is put together. This file covers the
rules it is built under, because they are unusual and they constrain every edit.

---

## The three rules

### 1. One dashboard image, site-wide

`public/media/hero-workspace.png` — the HRMagix Overview workspace — is the only
product screenshot anywhere on this site. It appears once, in the homepage hero.

No other page shows a dashboard, a mockup, a device frame or a simulated product
screen, and none should be added. Every other page describes the product in
words and shows the people who use it. If a page feels like it needs a
screenshot, it needs better copy.

### 2. No photograph is used twice

Twenty-nine photographs of Indian workplaces, each registered in `lib/media.ts`
and used in exactly one place, chosen for what it depicts rather than as
decoration — an arrival at a desk for attendance, a "welcome to the team" gift
for onboarding, a packed carton for the exit stage of the lifecycle.

A development-time assertion in `lib/media.ts` warns if a file is ever
registered to two slots.

### 3. Nothing is invented

hrmagix.com is a single-page site. It publishes the product, twelve modules,
three pricing tiers, contact details and customer voices — and nothing else.
There is no published careers page, partner programme, press archive,
certification list, funding history or document library.

So the content modules observe a strict separation, documented in each file:

- **Product claims** come from what HRMagix publishes.
- **Statutory facts** — the ₹15,000 EPF ceiling, the ₹21,000 ESI threshold, the
  Payment of Gratuity Act formula — are provisions of Indian law, cited as law
  rather than as product features.
- **Where the company has published nothing, the page says so** and gives the
  reader the real route instead.

Four pages carry an explicit section listing what they deliberately do not
claim: `/company/careers`, `/vendor`, `/resources/media` and
`/company/press-kit`. Do not quietly fill those gaps with plausible copy.

The calculators follow the same rule. `/resources/calculator` computes only
central statutory heads with fixed rates, and names the three it excludes —
income tax under Section 192, Professional Tax and Labour Welfare Fund — with
the reason for each, rather than approximating them.

---

## Content lives in `lib/`, not in JSX

| Module | Holds |
| --- | --- |
| `content.ts` | Modules, statutory engine, plans, testimonials, manifesto, general FAQs |
| `solutions.ts` | The eight solution pages |
| `industries.ts` | The six industry pages |
| `resources.ts` | White papers, careers, press kit, media room, partners |
| `policies.ts` | Legal pages, and the workplace policy register |
| `nav.ts` | The information architecture — header, footer and 404 all read it |
| `media.ts` | Every image with subject, alt text, dimensions and focal point |

Pages compose this content using the editorial vocabulary in
`components/editorial.tsx` — `Ledger`, `Mechanics`, `Passages`,
`NumberedNarrative`, `SplitPassage`, `Statement`, `CapabilityIndex`, `Onward`.
These are compositions, not cards.

**The rule that prevents template feel:** a page picks three or four of them,
never all, and never two adjacent sections built from the same one.
`app/solutions/[slug]/page.tsx` takes this furthest — a `recipes` map fixes the
block order and background per page, so eight pages share one template and read
differently.

Every answer on the site exists in exactly one place. `/resources/faqs` answers
the general questions and *indexes* the module- and industry-specific ones as
links rather than repeating them.

---

## Verification

Four audits, all driving headless Chrome over a real production build.

```bash
npm run build
npx next start -p 3111      # in another shell
npm run audit:all
```

| Script | Checks |
| --- | --- |
| `audit:site` | Broken links, placeholder `href="#"`, orphan routes, horizontal overflow at 320/360/375/390/414/768/1024/1280/1440/1920, console errors |
| `theme:audit` | Computed colour of every text node against the background actually painted behind it, both themes |
| `theme:behavior` | System preference, persistence, no flash, survival across navigation, keyboard operability |
| `audit:nav` | Mega panel opens on real pointer input and closes on Escape; mobile sheet opens, switches section, locks and restores scroll |

`npm run shots -- 1440 dark /solutions/payroll` captures screenshots into
`.shots/` for visual review.

### Last full run

```
Site audit        36 routes · 0 broken links · 0 placeholders · 0 orphans
                  0 overflow at 10 breakpoints · 0 console errors
Theme audit       0 contrast failures, both themes, 36 routes
Theme behaviour   17/17
Navigation        13/13
```

---

## Routes

```
/                              home
/solutions                     hub + the full twelve-module reference
/solutions/{hrms|payroll|employee-management|attendance|
            leave-management|ess|onboarding|hr-analytics}
/industries                    hub
/industries/{startups|small-business|smes|manufacturing|
             it-services|professional-services}
/resources                     hub
/resources/{white-papers|media|calculator|faqs}
/company/{about|careers|press-kit|contact}
/vendor
/policy                        hub
/policy/{privacy|terms|security|cookies|workplace-policies}
/pricing
/how-it-works
```

Old URLs (`/about`, `/faq`, `/features`, `/modules/*`, `/compliance`, …) are
permanently redirected in `next.config.mjs` to the page that now carries their
content — never to the homepage as a catch-all. `app/sitemap.ts` generates from
the same content modules the pages read, so it cannot drift.
