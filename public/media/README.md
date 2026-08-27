# Image drop-zone

Files here are wired through `lib/media.ts`. Add a file, then set `src` on the
matching slot (e.g. `src: "/media/hero-workspace.png"`).

| file | slot | subject |
| --- | --- | --- |
| hero-workspace.png | hero | HRMagix dashboard capture, ≥2560×1600 |
| module-attendance.png | attendance | live presence board |
| module-performance.png | performance | quarterly OKR progress |
| module-payroll.png | payroll | completed payroll run |
| module-recognition.png | recognition | kudos wall |
| app-punch-in.png | mobile | app punch-in, portrait 1170×2532 |
| team-at-work.jpg | team | licensed people-team photography, 2400px wide |

Export at 2× the rendered size, PNG for UI captures and JPEG/WebP for
photography. `next/image` handles the rest.
