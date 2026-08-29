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

Each PDF is the client's own document. Three edits were applied, and no others.

**1. The former company name is gone.** 272 occurrences across the 25 files.
Most sat in the page footer and left with it; the 75 that remained in running
text were replaced in one of two forms, so the result stays valid in context:

| Context | Result |
| --- | --- |
| Document code on the title line | `HRMAGIX011`, `HRMAGIXCOC` |
| Running prose | `HR Magix` |

**2. The header is the policy's name and nothing else.** The blue banner, the
company logo and the surrounding decoration were removed from all 99 pages and
replaced with a single centred line — `Leave Policy`, `Code of Conduct`, and so
on, taken from the register in `lib/policies.ts`.

**3. The footer is gone.** Website, email address, office address, the three
icons and the bottom banner were removed from every page. Nothing replaces
them: no page numbers, no contact details, no rule.

**Nothing else was touched.** No policy was rewritten, summarised or
restructured; no clause, rule, entitlement, threshold, timeline, table,
version number, effective date or reviewer name was altered. This is verified
rather than asserted: with the footer runs discounted, the added header
ignored and the name rule applied, the extracted word multiset of every cleaned
document is identical to that of its original — 25 of 25, nothing lost, nothing
added. Any other company or entity named inside a document is the client's own
text and is left as written.

The document metadata title was `BIZZFLY HR Policies`, which is what browsers
showed in the tab; it is now the policy's own name. The outline entries and the
XMP packet carried the name too, and were cleaned with it.

## How the furniture was identified

Not by cropping a strip off the top and bottom — body text runs as high as
y=127 and as low as y=908 on some pages, so a fixed band would cut real
content. The header and footer are found structurally instead: the banner
shapes by their exact fill colours, the logo by its 2251x2251 image, the icons
by being the curved paths inside the footer row, and the contact details by
being the text runs matching a URL, an address or an `@`. Genuine body art
caught by the same sweep — section rules, list bullets — is recorded first and
redrawn from its own path data afterwards.

## Regenerating

The documents are checked in, so a rebuild needs nothing. If the client
supplies revised originals, the work is reproducible from `clean.py`, which
carries the full method in its module docstring. A byte-level name replacement
is not possible on these files: they are Canva exports whose text is set in
subset-embedded Identity-H fonts, so the content streams hold glyph indices
rather than characters, and the subsets rarely contain the glyphs the new name
needs. Replaced runs are therefore redrawn in Segoe UI, fitted to the original
rectangle and sitting on the original baseline, so nothing on the line moves.
