# HRMagix website — architecture

Next.js 15 App Router, React 19, Tailwind 3, TypeScript. Fully static: every
route prerenders at build time.

---

## 1. Where content lives

Content is data, not JSX. Pages compose it; they do not contain it. This is what
keeps thirty-nine pages from drifting into thirty-nine copies of each other.

| Module | Holds |
| --- | --- |
| `lib/content.ts` | Product facts published by HRMagix: the twelve modules, statutory engine, plans, testimonials, manifesto, general FAQs |
| `lib/solutions.ts` | The eight solution pages — opening argument, passages, mechanics, ledgers, capabilities, page-specific questions |
| `lib/industries.ts` | The six industry pages — situation, pressures, priority order, closing, questions |
| `lib/resources.ts` | White papers, careers, press kit, media room, partners |
| `lib/policies.ts` | HRMagix's own legal pages, and the workplace policy register |
| `lib/nav.ts` | The information architecture. Header, footer and 404 all read it |
| `lib/media.ts` | Every image, with subject, alt text, dimensions and focal point |

### Sourcing rules these modules enforce

hrmagix.com is a single-page site. It publishes the product, twelve modules,
three pricing tiers, contact details and customer voices — and nothing else. No
careers page, no partner programme, no press archive, no certification list, no
downloadable papers.

So the content modules observe three rules, and each file documents its own
application of them:

1. **Product claims** come from what HRMagix publishes.
2. **Statutory facts** — the EPF ceiling, the ESI threshold, the Gratuity Act
   formula — are provisions of Indian law, cited as such rather than as product
   features.
3. **Where the company has published nothing**, the page says so and gives the
   reader the real route instead. `/company/careers`, `/vendor`,
   `/resources/media` and `/company/press-kit` each carry an explicit section
   listing what they deliberately do not claim.

No customer names, headcounts, benchmarks, awards, certifications or coverage
appear anywhere beyond what is already published.

---

## 2. The design vocabulary

`components/editorial.tsx` holds compositions, not cards:

| Component | For |
| --- | --- |
| `ArticleOpener` | Asymmetric opener — headline beside a photograph bleeding off the edge |
| `Opening` | The opening argument, set at a larger measure against a rule |
| `Passages` | Long-form sections, heading left and body right |
| `Ledger` | Ruled reference rows — statutory heads, record fields |
| `Mechanics` | An ordered sequence with a line running through it |
| `CapabilityIndex` | Three plain lists, never nine boxes |
| `NumberedNarrative` | Arguments and pressures, indexed rather than sequenced |
| `SplitPassage` | Text against a load-bearing photograph |
| `Statement` | One sentence given a whole band |
| `Onward` | Three routes onward with a reason attached to each |
| `Band` | Section wrapper with alternating grounds and a padding scale |

**The rule that prevents template feel:** a page picks three or four of these,
never all of them, and never two adjacent sections from the same one.

`app/solutions/[slug]/page.tsx` takes this furthest. A `recipes` map fixes, per
page, the block order and the ground each sits on — so payroll leads with its
mechanism and closes with its statutory table, while the HRMS page leads with
the record itself. Eight pages, one template, eight different reading
experiences.

---

## 3. Images

`lib/media.ts` is the single registry. Two kinds of entry:

- **One product image.** `dashboard` is the only product screenshot on the
  entire website, rendered once in the homepage hero. No other page shows a
  dashboard, mockup, device frame or simulated UI.
- **Photography.** Twenty-nine photographs of Indian workplaces, each used in
  exactly one place, chosen for what it depicts — an arrival at a desk for
  attendance, a "welcome to the team" gift for onboarding, a packed carton for
  the exit stage.

A development-time assertion in `lib/media.ts` warns if any file is registered
to two slots. `components/Photo.tsx` is the only way an image reaches a page: it
enforces intrinsic dimensions, focal point, lazy loading and one reveal
treatment.

---

## 4. Theme

Two colour layers, defined in `app/globals.css` and mapped in
`tailwind.config.ts`:

- **Literal brand ramps** (`violet`, `ink`) for surfaces that are dark in both
  themes, so their contrast pairing never changes.
- **Semantic tokens** (`surface`, `line`, `heading`, `accent`, …) resolved from
  CSS custom properties, so `bg-surface text-heading ring-line` renders
  correctly in both themes without a single `dark:` variant at the call site.

Dark mode is a re-designed palette, not an inversion. An inline blocking script
in `app/layout.tsx` sets the theme before first paint.

---

## 5. Verification

Four audits, all driving headless Chrome over the real production build.

```bash
npm run build
npx next start -p 3111       # in another shell
npm run audit:all
```

| Script | Checks |
| --- | --- |
| `audit:site` | Broken internal links, placeholder `href="#"`, orphan routes, horizontal overflow at 320–1920px, console errors |
| `theme:audit` | Computed colour of every text node against the background actually painted behind it, in both themes |
| `theme:behavior` | System preference, persistence, no flash, survival across navigation, keyboard operability |
| `audit:nav` | Mega panel opens on real pointer input and closes on Escape; mobile sheet opens, switches section, locks and restores scroll |

`npm run shots -- <width> <theme> <route…>` captures viewport screenshots into
`.shots/` for visual review, forcing reveal animations on first.

### Last full run

- Site audit: 36 routes, 0 broken links, 0 placeholders, 0 orphans, 0 overflow
  at ten breakpoints, 0 console errors
- Theme audit: 0 contrast failures across 36 routes in both themes
- Theme behaviour: 17/17
- Navigation: 13/13

---

## 6. Routes

```
/                                  home
/solutions                         hub + full twelve-module reference
/solutions/{hrms,payroll,employee-management,attendance,
            leave-management,ess,onboarding,hr-analytics}
/industries                        hub
/industries/{startups,small-business,smes,manufacturing,
             it-services,professional-services}
/resources                         hub
/resources/{white-papers,media,calculator,faqs}
/company/{about,careers,press-kit,contact}
/vendor
/policy                            hub
/policy/{privacy,terms,security,cookies,workplace-policies}
/pricing
/how-it-works
```

Old URLs (`/about`, `/faq`, `/modules/*`, `/features`, `/compliance`, …) are
permanently redirected in `next.config.mjs` to the page that now carries their
content — never to the homepage as a catch-all.

`app/sitemap.ts` generates from the same content modules the pages read, so it
cannot drift.
