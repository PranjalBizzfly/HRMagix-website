# Images

Every file here is registered in `lib/media.ts` and reaches a page only through
`components/Photo.tsx`. Nothing is referenced by raw path except the dashboard,
which the homepage hero renders directly.

## The one product image

`hero-workspace.png` — the HRMagix Overview workspace. This is the **only**
product screenshot on the entire website, and it appears exactly once, in the
homepage hero.

Do not add a second dashboard, mockup, device frame or simulated UI anywhere.
Every other page describes the product in words and shows the people who use it.
If a page feels like it needs a screenshot, it needs better copy.

## Photography

Thirty-six high-resolution (2400px+) editorial photographs of modern workplaces and professionals. Each is used in exactly one place on the site, chosen for what it actually depicts rather than as decoration:

| File | Used for | Slot Key |
| --- | --- | --- |
| `people-office-work.jpg` | Homepage hero | `home-hero` |
| `documents-huddle.jpg` | Homepage manifesto — operational fragmentation | `home-manifesto` |
| `payroll-desk-review.jpg` | Homepage statutory compliance review | `home-compliance` |
| `team-briefing.jpg` | Solutions hub overview | `solutions-overview` |
| `manager-briefing-desks.jpg` | HRMS single system of record | `hrms` |
| `records-desk.jpg` | Payroll & statutory processing | `payroll` |
| `partners-conversation.jpg` | Employee management & people operations | `employee-management` |
| `office-arrival.jpg` | Attendance & shifts — morning check-in | `attendance` |
| `office-lighter-moment.jpg` | Leave management & collaborative culture | `leave` |
| `remote-laptop.jpg` | Employee self-service (ESS) | `ess` |
| `welcome-to-team.jpg` | Onboarding & welcome setup | `onboarding` |
| `transition-box.jpg` | Lifecycle & transition stage | `lifecycle-exit` |
| `analytics-huddle.jpg` | HR & workforce analytics | `analytics` |
| `startup-duo.jpg` | Industry: Startups | `industry-startups` |
| `shopkeeper.jpg` | Industry: Small Business | `industry-small-business` |
| `ahmedabad-office.jpg` | Industry: SMEs & Mid-Market | `industry-smes` |
| `textile-floor.jpg` | Industry: Manufacturing & Production | `industry-manufacturing` |
| `office-tower-night.jpg` | Industry: IT & Technology Services | `industry-it-services` |
| `industry-consulting-floor.jpg` | Industry: Professional Services | `industry-professional-services` |
| `blog-whiteboard-plan.jpg` | Blog: Sprint & tax planning | `blog-whiteboard-plan` |
| `blog-wage-threshold.jpg` | Blog: ESI wage threshold | `blog-wage-threshold` |
| `blog-state-filing.jpg` | Blog: Multi-state PT & filings | `blog-state-filing` |
| `blog-payslip-explained.jpg` | Blog: CTC & payslip breakdown | `blog-payslip-explained` |
| `blog-regime-choice.jpg` | Blog: Income tax regime choice | `blog-regime-choice` |
| `blog-shift-handover.jpg` | Blog: Shift handover & comp-offs | `blog-shift-handover` |
| `blog-settlement-review.jpg` | Blog: Full & final settlement | `blog-settlement-review` |
| `blog-leave-planning.jpg` | Blog: Leave policy planning | `blog-leave-planning` |
| `briefing-paper.jpg` | Resources: White papers | `white-papers` |
| `media-briefing-note.jpg` | Company: Media room & PR | `media-room` |
| `helpdesk-call.jpg` | Resources: Calculators | `calculator` |
| `team-portrait.jpg` | Company: About team portrait | `about` |
| `portrait-arjun.jpg` | Company: Careers lead portrait | `careers` |
| `portrait-meera.jpg` | Company: Contact specialist portrait | `contact` |
| `policy-handover.jpg` | Company: Partners & vendor management | `vendor` |
| `portrait-sanjay.jpg` | Policy: Policy library portrait | `policy` |
| `portrait-vikram.jpg` | Company: Press kit portrait | `press-kit` |

The four portraits also serve as testimonial and social-proof avatars via `lib/content.ts`.

## Adding an image

1. Drop the file here at 2400px on its long edge.
2. Register it in `lib/media.ts` with its real dimensions, alt text, the subject
   it depicts, and a `position` if the focal point is not centred.
3. Reference it by slot: `<Photo slot="your-key" />`.

A development-time assertion in `lib/media.ts` warns if a file ends up
registered to two slots — no photograph is reused anywhere on this site.

## Licensing

Photography is Unsplash/Pexels-licensed: free for commercial use, no attribution
required. The mark, favicon and dashboard are HRMagix's own.
