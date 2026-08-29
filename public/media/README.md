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

Twenty-nine photographs of Indian workplaces. Each is used in exactly one place
on the site, chosen for what it actually depicts rather than as decoration:

| File | Used for |
| --- | --- |
| `people-office-work.jpg` | homepage hero |
| `documents-huddle.jpg` | homepage manifesto — fragmentation |
| `payroll-desk-review.jpg` | homepage statutory compliance |
| `team-briefing.jpg` | solutions hub |
| `manager-briefing-desks.jpg` | HRMS |
| `records-desk.jpg` | payroll |
| `partners-conversation.jpg` | employee management |
| `office-arrival.jpg` | attendance — the moment a punch is recorded |
| `office-lighter-moment.jpg` | leave management |
| `remote-laptop.jpg` | employee self-service |
| `welcome-to-team.jpg` | onboarding — the desk gift |
| `transition-box.jpg` | lifecycle exit stage |
| `analytics-huddle.jpg` | HR analytics |
| `startup-duo.jpg` | startups |
| `shopkeeper.jpg` | small business |
| `ahmedabad-office.jpg` | SMEs |
| `textile-floor.jpg` | manufacturing |
| `office-tower-night.jpg` | IT & technology |
| `panel-stage.jpg` | professional services |
| `warehouse-inventory.jpg` | warehousing |
| `briefing-paper.jpg` | white papers |
| `celebration-hat.jpg` | media room |
| `helpdesk-call.jpg` | calculators |
| `team-portrait.jpg` | about |
| `portrait-arjun.jpg` | careers |
| `portrait-meera.jpg` | contact |
| `policy-handover.jpg` | partners & vendors |
| `portrait-sanjay.jpg` | policy library |
| `portrait-vikram.jpg` | press kit |

The four portraits also serve as testimonial and social-proof avatars via
`lib/content.ts`.

## Adding an image

1. Drop the file here at roughly 1800px on its long edge.
2. Register it in `lib/media.ts` with its real dimensions, alt text, the subject
   it depicts, and a `position` if the focal point is not centred.
3. Reference it by slot: `<Photo slot="your-key" />`.

A development-time assertion in `lib/media.ts` warns if a file ends up
registered to two slots — no photograph is reused anywhere on this site.

## Licensing

Photography is Pexels-licensed: free for commercial use, no attribution
required. The mark, favicon and dashboard are HRMagix's own.
