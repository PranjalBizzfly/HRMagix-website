# Policy documents

The twenty-five approved policy documents, as supplied by the client from the
source Drive folder. The library reads this directory at build time and
activates each row's **View PDF** and **Download** controls for every file it
finds, so adding a policy is a matter of dropping the PDF in under the right
name and adding its row to `policyRegister` in `lib/policies.ts`.

## Naming

One file per policy, named for its code, lower-cased:

| File | Policy |
| --- | --- |
| `hrmagixcoc.pdf` | Code of Conduct |
| `hrmagix001.pdf` | Late Coming Policy |
| `hrmagix002.pdf` | Attendance Policy |
| `hrmagix003.pdf` | Leave Policy |
| `hrmagix004.pdf` | Employee Resignation Policy |
| `hrmagix005.pdf` | Work From Home Policy |
| `hrmagix006.pdf` | Employee Termination Policy |
| `hrmagix007.pdf` | Workplace Harassment Policy |
| `hrmagix008.pdf` | Notice Period Policy |
| `hrmagix009.pdf` | Sexual Harassment Policy |
| `hrmagix010.pdf` | Employee Absconding Policy |
| `hrmagix011.pdf` | Equal Opportunity Employer Policy |
| `hrmagix012.pdf` | Employee Promotion Policy |
| `hrmagix013.pdf` | Workplace Violence Policy |
| `hrmagix014.pdf` | Employee Probationary Period Policy |
| `hrmagix015.pdf` | Open Door Policy |
| `hrmagix016.pdf` | Gratuity Policy |
| `hrmagix017.pdf` | Annual Employee Performance Review Policy |
| `hrmagix018.pdf` | Maternity Leave Policy |
| `hrmagix019.pdf` | Notice Period Buyout Policy |
| `hrmagix020.pdf` | Time and Work Tracking Software Policy |
| `hrmagix021.pdf` | Timely Submission of Reports |
| `hrmagix022.pdf` | Payment Increment Policy |
| `hrmagix023.pdf` | Work From Home Monitoring Policy |
| `hrmagix024.pdf` | Work From Home Employee Exclusivity Policy |

These map to the source schedule's codes in the same order — row 1 is the code
of conduct, rows 2 to 25 are policies 001 to 024.

## What was changed in these files, and what was not

Each PDF is the client's own document. One edit was applied and no other:

**The former company name was replaced with HR Magix.** 272 occurrences across
the 25 files, in three forms so the result stays valid in context:

| Context | Result |
| --- | --- |
| Document code — the name followed by its number or letter code | `HRMAGIX011`, `HRMAGIXCOC` |
| Inside a URL or email address, where a space would break the link | `www.hrmagix.Com`, `hr@hrmagix.com` |
| Running prose | `HR Magix` |

The header logo artwork carried the old lockup as an embedded image; those 99
image objects were replaced with the HRMagix lockup, composed from the site's
own `public/hrmagix-mark.svg` at the exact dimensions and position the original
occupied, so nothing on any page moved.

**Nothing else was touched.** No policy was rewritten, summarised or
restructured; no section removed; no rule, entitlement, threshold, timeline,
version number, effective date or reviewer name altered. Any other company or
entity named inside a document is the client's own text and is left as written.

## Regenerating

The documents are checked in, so a rebuild needs nothing. If the client
supplies revised originals, the rebrand is reproducible: redact each span
containing the old name and redraw it in place at the original baseline, fitted
to the original rectangle. A byte-level replacement is not possible — these are
Canva exports whose text is set in subset-embedded Identity-H fonts, so the
content streams hold glyph indices rather than characters, and the subsets
rarely contain the glyphs the new name needs.
