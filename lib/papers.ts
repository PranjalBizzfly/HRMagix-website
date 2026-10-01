/**
 * White papers.
 *
 * WHAT THESE ARE, PRECISELY.
 *
 * HRMagix has not published a document library. There are no PDFs, no gated
 * downloads and no commissioned research behind this section, and none is
 * implied anywhere in it. What follows are long-form technical briefings
 * written for this site and readable in full on it — the format states itself
 * on every page.
 *
 * Each paper may draw on the same three sources the blog may: provisions of
 * Indian law, published HRMagix product capability, and the structural logic of
 * the problem. No paper contains survey data, benchmarks, sample sizes,
 * respondent counts or citations to research that does not exist.
 *
 * A paper differs from a blog article in three ways, which is why the section
 * exists separately: it is longer, it is organised as a reference document with
 * numbered sections rather than as an argument, and it is written to be
 * returned to rather than read once.
 *
 * IF REAL DOCUMENTS BECOME AVAILABLE: add a `document` field with the asset
 * path and a `pages` count, and the page will render a download control. Until
 * then no download affordance is shown, because there is nothing to download.
 */

export type PaperBlock =
  | { kind: "para"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; caption: string; head: string[]; rows: string[][] }
  | { kind: "callout"; title: string; text: string };

export type PaperSection = {
  /** Numbered in the rendered document. */
  heading: string;
  /** One-line summary shown in the contents rail. */
  summary: string;
  blocks: PaperBlock[];
};

export type WhitePaper = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  /** Who this is written for, stated bluntly. */
  reader: string;
  minutes: number;
  /** Two paragraphs of genuine abstract. */
  abstract: string[];
  sections: PaperSection[];
  /** Where the subject is treated elsewhere on the site. */
  readOn: { label: string; href: string }[];
  seo: { title: string; description: string; keywords: string[] };
  /**
   * Present only if a real document exists. Absent on every paper today, which
   * is why no page renders a download button.
   */
  document?: { path: string; pages: number };
};

export const whitePapers: WhitePaper[] = [
  /* ================================================================ */
  {
    slug: "chain-of-custody",
    number: "01",
    title: "Payroll as a chain of custody",
    subtitle: "Eight handovers, four of which need no human step",
    reader: "Finance and payroll leads who close a monthly cutoff in India",
    minutes: 14,
    abstract: [
      "The time an Indian payroll takes is almost never spent on arithmetic. It is spent establishing what happened, reconciling a biometric log against leave applications, comp-offs, regularisations and a manager's recollection, before a single calculation can begin.",
      "This briefing sets out payroll as a sequence of eight custody handovers rather than a computation, identifies which of the eight can be eliminated entirely by integration, and specifies exactly what each statutory head requires as input and produces as output.",
    ],
    seo: {
      title: "Payroll as a Chain of Custody: White Paper",
      description:
        "A technical briefing on the Indian monthly payroll cycle: eight handovers from attendance close to statutory filing, and what each statutory head needs.",
      keywords: [],
    },
    sections: [
      {
        heading: "The problem is establishment, not calculation",
        summary: "Why four defensible records cannot be reconciled without a person.",
        blocks: [
          {
            kind: "para",
            text: "Multiplying a per-day rate by a number of days is trivial. Establishing that number is not, and it is where a payroll cycle actually spends its time. Most organisations of any size hold four independent records of the same working month, each internally consistent and none reconcilable with the others without human judgement.",
          },
          {
            kind: "list",
            items: [
              "The biometric device log, which knows exact timestamps at a physical door and nothing about why somebody was not behind it.",
              "The leave tracker, which knows applications and approvals but not whether a backdated approval landed after the register was drawn.",
              "The reporting manager, who holds context nothing else has and cannot supply it consistently across a team a month later.",
              "The payroll sheet, which holds the figure somebody eventually typed and, from that moment, no record of where it came from.",
            ],
          },
          {
            kind: "para",
            text: "The fourth is the significant one. Once payable days becomes a typed value, its provenance is destroyed. A query raised six months later cannot be answered by inspection; it can only be answered by re-derivation from records that have since moved on.",
          },
        ],
      },
      {
        heading: "The eight handovers",
        summary: "The monthly sequence, and which steps require no human action.",
        blocks: [
          {
            kind: "para",
            text: "A payroll month can be described as eight transfers of custody. Naming them separately makes it visible which are mechanical and which require judgement, and therefore which can be removed by integration rather than by working faster.",
          },
          {
            kind: "table",
            caption: "The monthly cycle, by custody handover",
            head: ["#", "Handover", "Requires a person?"],
            rows: [
              ["01", "Attendance capture settles into a ledger", "No, continuous, from device, app and browser"],
              ["02", "Leave and comp-off resolve against each scheme", "No, approvals already recorded"],
              ["03", "Payable days derives from the ledger", "No, a view, not an entry"],
              ["04", "Gross assembles from effective-dated structures", "No, structure held against the record"],
              ["05", "Statutory heads evaluate for the month", "No, rules against the record"],
              ["06", "Variance review against the prior month", "Yes, judgement on exceptions"],
              ["07", "Bank payment batch generated", "Yes, authorisation"],
              ["08", "Filings and payslips issue", "Yes, submission"],
            ],
          },
          {
            kind: "para",
            text: "Steps one to five require nothing from the payroll team. That is the entire claim of an integrated system, and it is a narrower claim than most vendors make: it does not reduce the judgement in step six, and it does not remove the authorisation in step seven.",
          },
        ],
      },
      {
        heading: "Statutory heads as rules, not columns",
        summary: "Each head has an eligibility test, a base, a rate and a ceiling that move independently.",
        blocks: [
          {
            kind: "para",
            text: "Every statutory line on an Indian payslip carries four properties, and each can move independently of the others. Treating a head as a spreadsheet column captures the rate and loses the other three.",
          },
          {
            kind: "table",
            caption: "Statutory heads, and what each requires and produces",
            head: ["Head", "Rate", "Applicability test", "Output"],
            rows: [
              [
                "Employees' Provident Fund",
                "12% employee, 12% employer",
                "Basic + DA, with the ₹15,000 statutory wage ceiling configurable as a cap",
                "ECR text file for the EPFO unified member portal",
              ],
              [
                "Employees' Pension Scheme",
                "8.33% within the employer share",
                "Capped at the statutory ceiling",
                "Included in the ECR",
              ],
              [
                "Employees' State Insurance",
                "0.75% employee, 3.25% employer",
                "Gross wages against the ₹21,000 threshold, on contribution periods rather than a monthly test",
                "Monthly contribution return and challan report",
              ],
              [
                "Professional Tax",
                "State slab",
                "Work location on the employee record; slabs, exemptions and periodicity differ by state",
                "State-wise PT working",
              ],
              [
                "TDS, Section 192",
                "Per regime and declarations",
                "Estimated annual liability spread monthly, following the verified declaration",
                "Quarterly Form 24Q; annual Form 16 Part B",
              ],
              [
                "Payment of Gratuity Act",
                "15 days' wages per completed year, 26-day divisor",
                "Five years of continuous service",
                "Provision schedule and settlement working",
              ],
              [
                "Labour Welfare Fund",
                "State amount",
                "State calendar, half-yearly or annual, unrelated to the payroll cycle",
                "State LWF statement",
              ],
            ],
          },
          {
            kind: "callout",
            title: "The contribution-period trap",
            text: "ESI is the head most often implemented incorrectly. An employee covered at the start of a contribution period continues through it even if wages rise above the threshold within it. A system that re-tests applicability each month will drop and re-add the employee as overtime moves the wage base, producing under-deduction, over-deduction and disrupted benefit entitlement in turn.",
          },
        ],
      },
      {
        heading: "What has to leave the building",
        summary: "A run is finished when money and paperwork have both moved.",
        blocks: [
          {
            kind: "para",
            text: "A payroll is not complete when the calculation is correct. It is complete when funds have been instructed and the statutory record has been filed. Both ends need to be produced from the same run rather than assembled separately afterwards.",
          },
          {
            kind: "list",
            items: [
              "A bank payment batch file formatted for NEFT, RTGS or IMPS, for upload to a corporate banking portal. HRMagix does not hold or move funds itself.",
              "The electronic challan receipt (ECR) text file for the EPFO unified member portal.",
              "The monthly ESIC contribution return and challan report.",
              "The state-wise Professional Tax working, and the LWF statement where the state's cycle falls due.",
              "Payslips issued to each employee's own self-service login rather than emailed as attachments.",
            ],
          },
          {
            kind: "para",
            text: "The last point is operational rather than statutory, and it removes more inbound HR traffic than any other single change. An employee looking for March in November finds it themselves.",
          },
        ],
      },
      {
        heading: "Reconstructing a run six months later",
        summary: "Why effective-dating the salary structure is what makes payroll auditable.",
        blocks: [
          {
            kind: "para",
            text: "The property that separates an auditable payroll from a defensible one is versioning. When a March run is questioned in September, the system must answer with the structure that was in force in March, not the one in force today, and not a reconstruction.",
          },
          {
            kind: "para",
            text: "This requires that compensation, grade, work location and time policy are all effective-dated on the employee record rather than overwritten. A revision agreed in July succeeds the June position; it does not replace it. The consequence is that a payroll run for any past month can be re-derived exactly, and that a transfer between states changes Professional Tax applicability from the transfer date without disturbing the months before it.",
          },
          {
            kind: "callout",
            title: "A test you can run against any payroll system",
            text: "Pick an employee who received a mid-year increment. Re-run a payroll month that falls before the increment. If the output uses the post-increment structure, the system is storing a current state rather than a history, and no past run it produced can be reconstructed.",
          },
        ],
      },
    ],
    readOn: [
      { label: "Payroll", href: "/solutions/payroll" },
      { label: "Calculator", href: "/resources/calculator" },
      { label: "Your Payroll Does Not Take Four Days. Your Reconciliation Does.", href: "/insights/why-payroll-takes-four-days" },
    ],
  },

  /* ================================================================ */
  {
    slug: "state-by-state",
    number: "02",
    title: "One company, several compliance positions",
    subtitle: "Configuring multi-state payroll on three axes",
    reader: "HR and finance leaders in multi-branch, multi-state businesses",
    minutes: 12,
    abstract: [
      "A business with offices in three states experiences itself as one organisation and is treated by statute as several. Professional Tax is a state subject. Leave entitlements sit under state Shops and Establishments Acts. Labour Welfare Fund runs on state calendars that ignore your payroll cycle.",
      "This briefing works through where state divergence actually bites in a mid-market Indian company, and sets out the configuration model, per entity, per location, per grade, that lets consolidated reporting and correct state-level filing coexist rather than compete.",
    ],
    seo: {
      title: "Multi-State Payroll Compliance in India: White Paper",
      description:
        "Configuring payroll across Indian states: entity, location and grade axes, state Professional Tax and LWF differences, and consolidated reporting.",
      keywords: [],
    },
    sections: [
      {
        heading: "The three axes",
        summary: "Entity, location and grade, what belongs on each, and what breaks when they collapse.",
        blocks: [
          {
            kind: "para",
            text: "Multi-state payroll fails when a single organisational dimension is asked to carry three different kinds of rule. Separating them is the whole of the solution, and most of the difficulty is in deciding which axis a given rule belongs to.",
          },
          {
            kind: "table",
            caption: "What each axis governs",
            head: ["Axis", "Governs", "Breaks if collapsed into another"],
            rows: [
              [
                "Legal entity",
                "Payroll runs, statutory registrations, filings, bank batches",
                "Filings merge across entities that must be filed separately",
              ],
              [
                "Work location",
                "Professional Tax, LWF, leave quotas, holiday calendar, shift patterns",
                "One state's slabs applied to employees in another",
              ],
              [
                "Grade",
                "Approval hierarchy, leave scheme, overtime eligibility, notice period",
                "Approval routing that ignores seniority, or uniform notice across all levels",
              ],
            ],
          },
          {
            kind: "para",
            text: "An employee sits at the intersection of all three, and each of their statutory and policy positions derives from the relevant axis rather than from a company-wide default.",
          },
        ],
      },
      {
        heading: "Professional Tax across states",
        summary: "Slabs, periodicity, exemptions and the February treatment in Maharashtra.",
        blocks: [
          {
            kind: "para",
            text: "Professional Tax is levied by states. Each sets its own wage bands, its own amounts, its own exemptions and its own remittance calendar. There is no national schedule, and registration is per location rather than per company.",
          },
          {
            kind: "list",
            items: [
              "Slabs differ, so the same salary produces a different deduction in two offices of one company.",
              "Periodicity differs, and due dates follow the state rather than your payroll calendar.",
              "Several states provide specific exemptions, including gender-based ones, which a single national rule set cannot express.",
              "Maharashtra deducts a different amount in one month of the year, which a flat monthly configuration will miss annually and quietly.",
            ],
          },
          {
            kind: "para",
            text: "HRMagix carries state-specific rule sets configured for Maharashtra, Karnataka, Telangana, Tamil Nadu, Andhra Pradesh, Gujarat and West Bengal. Applicability follows the employee's work location on the record, which means a mid-year transfer changes the position from the transfer date without rewriting earlier months.",
          },
          {
            kind: "callout",
            title: "Confirm before filing",
            text: "State slabs and due dates change by notification. The states above are those HRMagix configures; the current schedule for any of them should be confirmed against the state's own notification or with your advisers before a filing.",
          },
        ],
      },
      {
        heading: "Leave under state establishment law",
        summary: "Why a single national leave scheme is usually non-compliant somewhere.",
        blocks: [
          {
            kind: "para",
            text: "Minimum leave entitlements are set by the applicable state Shops and Establishments Act, and by the Factories Act for covered establishments. A company operating in three states may therefore face three statutory floors.",
          },
          {
            kind: "para",
            text: "An employer's policy may be more generous than the floor but not less. The common failure is to adopt one national scheme set at the level of the least generous state, which is compliant nowhere except there. The alternative failure, setting it at the most generous, is compliant everywhere and expensive.",
          },
          {
            kind: "para",
            text: "The workable arrangement is a single policy with per-location quotas and per-location holiday calendars, so that the team calendar an employee sees combines their own location's holidays with their team's approved leave rather than showing another state's public holidays.",
          },
        ],
      },
      {
        heading: "Consolidated view, distinct filings",
        summary: "Reporting across entities without merging runs that must stay separate.",
        blocks: [
          {
            kind: "para",
            text: "Leadership asks for one number. Finance needs several. Both requirements are legitimate and they are usually treated as a trade-off, which is why companies end up running separate instances per state and losing the consolidated view.",
          },
          {
            kind: "para",
            text: "The resolution is to keep runs distinct at the entity level, because filing is per entity, while allowing reporting to aggregate across them. Multi-entity structures sit under a single login, with role-based permissions determining who can see which entity.",
          },
          {
            kind: "list",
            items: [
              "Consolidated headcount, department distribution and payroll cost across all entities, for the board.",
              "Entity-level statutory totals that reconcile to what was actually filed, for finance.",
              "Location-level overtime and attendance, for the person running that site.",
            ],
          },
        ],
      },
      {
        heading: "Labour Welfare Fund and the calendar problem",
        summary: "Deductions on state cycles that have nothing to do with your payroll month.",
        blocks: [
          {
            kind: "para",
            text: "LWF is deducted half-yearly in some states and annually in others, on dates set by the state. Because the cycle does not align with the monthly payroll rhythm, it is the deduction most often remembered rather than configured, and therefore the one most often missed.",
          },
          {
            kind: "para",
            text: "The only durable approach is to apply it inside the payroll run against the employee's work location, so that the correct months carry the deduction automatically and no one has to hold a calendar in their head.",
          },
        ],
      },
    ],
    readOn: [
      { label: "Small & Medium Enterprises", href: "/industries/small-and-medium-enterprises" },
      { label: "Payroll", href: "/solutions/payroll" },
      { label: "One Company, Several Compliance Positions: Professional Tax Across States", href: "/insights/professional-tax-february" },
    ],
  },

  /* ================================================================ */
  {
    slug: "exceptions-engine",
    number: "03",
    title: "The shop floor is an exceptions engine",
    subtitle: "Shift inference, overtime and a wage base that will not stay still",
    reader: "Plant heads, HR managers and payroll teams in manufacturing",
    minutes: 13,
    abstract: [
      "Office attendance is close to binary. Production attendance is not: a punch at 22:40 belongs to yesterday's shift, a Sunday worked creates a comp-off with an expiry, and an hour past shift end is either overtime or a handover depending on a rule nobody wrote down.",
      "This briefing catalogues the exceptions a manufacturing payroll actually produces, and shows how each becomes a configured rule rather than a monthly manual adjustment, including the interaction between overtime, the moving wage base and ESI applicability.",
    ],
    seo: {
      title: "Manufacturing Payroll Exceptions: White Paper",
      description:
        "Auto shift detection across midnight, overtime and night differentials, comp-off with expiry, ESI on a moving wage base, and per-plant configuration.",
      keywords: [],
    },
    sections: [
      {
        heading: "Why the calendar day is the wrong unit",
        summary: "A night shift spans two dates and is one shift.",
        blocks: [
          {
            kind: "para",
            text: "An operator punches in at 22:40 on Tuesday and out at 06:50 on Wednesday. That is one shift, and it belongs to Tuesday. A system that files the punches under the calendar dates they occurred on records a Tuesday with no exit and a Wednesday with no entry, two exceptions where there was no problem.",
          },
          {
            kind: "para",
            text: "The obvious remedy, tagging each punch with its shift, does not survive a plant floor: three rotating shifts across several hundred operators is thousands of tagging decisions a month, made by a supervisor with other responsibilities. Inference from the shift definition and the punch timestamp is the only approach that scales.",
          },
        ],
      },
      {
        heading: "What depends on the shift assignment",
        summary: "An attendance error does not stay an attendance error.",
        blocks: [
          {
            kind: "table",
            caption: "Downstream consequences of a misassigned shift",
            head: ["Consequence", "What breaks"],
            rows: [
              ["Late marks", "Lateness measured against the wrong shift start marks an on-time operator late"],
              ["Night differential", "The allowance attaches to the shift; misassigned, it is unpaid or paid to the wrong person"],
              ["Overtime", "Without a correct shift there is no boundary to measure beyond"],
              ["Loss of pay", "A shift filed as two half-days with missing punches becomes an unexplained absence, and then a deduction"],
              ["ESI applicability", "Overtime moves the wage base, and the wage base moves the applicability test"],
            ],
          },
          {
            kind: "para",
            text: "The last row is why shift inference matters more than it first appears. An error on a night shift propagates into an earnings line and from there into a statutory determination.",
          },
        ],
      },
      {
        heading: "Overtime and differentials as derived figures",
        summary: "Contested money should not come from a supervisor's tally.",
        blocks: [
          {
            kind: "para",
            text: "Overtime and night-shift differentials are the most disputed lines on a production payslip, because they are the ones that vary and the ones traditionally compiled by hand.",
          },
          {
            kind: "para",
            text: "Deriving them from the shift definition and the employee's eligibility on the record, against the same attendance ledger everything else reads, makes them defensible. The figure the operator disputes is the figure the system can show the working for, rather than a number transcribed from a register.",
          },
        ],
      },
      {
        heading: "Compensatory off as a real entitlement",
        summary: "Credit, balance, consumption rule, expiry and settlement position.",
        blocks: [
          {
            kind: "para",
            text: "Comp-off has every property of a leave type and is usually the one entitlement not managed as one. Each undefined property is a future dispute.",
          },
          {
            kind: "list",
            items: [
              "A credit event, approved work on a weekly off or declared holiday.",
              "A balance, days earned and not yet taken.",
              "A consumption rule, half days, approval requirement, combination with other leave.",
              "An expiry, the window within which it must be used, or it lapses.",
              "A settlement position, what happens to an unused balance at exit.",
            ],
          },
          {
            kind: "para",
            text: "Expiry is the property most often missing. Without it the employer accumulates an unbounded, unrecorded liability; with it undocumented, the employee discovers the rule only when the day is refused.",
          },
          {
            kind: "callout",
            title: "An audit worth running once",
            text: "Pull last quarter's attendance for weekly offs and declared holidays, and match it against comp-off credits. Anything in the first list and absent from the second is an obligation you are still carrying with no record of it.",
          },
        ],
      },
      {
        heading: "Three plants, three rule sets, one filing",
        summary: "Per-location configuration without separate systems.",
        blocks: [
          {
            kind: "para",
            text: "Multi-site manufacturers routinely need different shift patterns, grace periods and weekly offs per plant for legitimate operational reasons. That requirement does not imply separate payroll systems, and separating them is what destroys the consolidated view.",
          },
          {
            kind: "para",
            text: "Shift patterns, grace periods, weekly offs, holiday calendars and leave schemes are configured per location while the organisation continues to report and file as one. The biometric hardware most plants already run, eSSL, Matrix, Realtime, ZKTeco, pushes into the same ledger over a secure API or a local sync service, so the capture layer does not need replacing. What changes is what happens to the punches after they arrive.",
          },
        ],
      },
    ],
    readOn: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Attendance & Shifts", href: "/solutions/attendance-and-shifts" },
      { label: "A Punch at 22:40 Belongs to Yesterday's Shift", href: "/insights/shift-detection-across-midnight" },
    ],
  },

  /* ================================================================ */
  {
    slug: "policy-vacuum",
    number: "04",
    title: "The policy vacuum, and how it closes",
    subtitle: "The minimum written positions a growing Indian company needs",
    reader: "Founders and first HR hires between ten and a hundred people",
    minutes: 11,
    abstract: [
      "Early-stage companies do not fail at HR because their tools are poor. They fail because nothing has been decided, and every undecided rule becomes a precedent the first time somebody asks a question the founder answers generously.",
      "This briefing sets out the minimum set of written positions a growing Indian company needs, the order to decide them in, and how policy acknowledgement turns a document into an obligation both sides can rely on.",
    ],
    seo: {
      title: "The Policy Vacuum in Growing Companies: White Paper",
      description:
        "The minimum written HR positions a growing Indian company needs, in order: statutory registrations, leave, notice, probation, remote work and acknowledgement.",
      keywords: [],
    },
    sections: [
      {
        heading: "How the vacuum forms",
        summary: "At fifteen people HR is a chat window, and it works, until it doesn't.",
        blocks: [
          {
            kind: "para",
            text: "At fifteen people, HR is a founder answering questions in a chat window. It works precisely because everyone can see everyone. The failure arrives quietly at around forty, when someone asks a question whose answer was previously improvised, how much notice do I owe, does a Friday off cost me two days, when does my leave reset, and discovers that the answer depends on who they asked and when.",
          },
          {
            kind: "para",
            text: "By then the decision has been made, badly, several times. What a company at this stage needs is not primarily a tool. It is for the rules to exist somewhere other than in one person's head, applied identically to everyone, from the day they are written.",
          },
        ],
      },
      {
        heading: "Statutory obligations start earlier than founders expect",
        summary: "There is no headcount milestone that announces itself.",
        blocks: [
          {
            kind: "para",
            text: "EPF and ESI applicability, Professional Tax registration in each state of operation, and TDS deduction under Section 192 do not begin at a threshold anyone will notice passing. Setting the platform up with correct identifiers and rates from the first employee costs nothing; retrofitting them across eighteen months of history is a genuine project with a genuine exposure.",
          },
          {
            kind: "list",
            items: [
              "Collect PAN, Aadhaar, UAN and bank details at joining, not at the first payroll run.",
              "Register for Professional Tax in each state you actually operate in, including states where one remote employee sits.",
              "Decide whether the ₹15,000 EPF wage ceiling is applied as a cap, and apply that decision consistently.",
              "Run the declaration cycle in April rather than deferring it, so no correction has to be crushed into February.",
            ],
          },
        ],
      },
      {
        heading: "The order to decide things in",
        summary: "Four positions first, and the ones that can safely wait.",
        blocks: [
          {
            kind: "table",
            caption: "Sequence for a company between ten and a hundred people",
            head: ["Order", "Position", "Why here"],
            rows: [
              ["1", "Statutory registrations and identifiers", "Compounds. The only genuinely expensive mistake on this list."],
              ["2", "Leave scheme, categories, accrual, carry-forward, sandwich rule", "Where improvised precedent does most damage and written policy is felt fastest."],
              ["3", "Notice period and probation", "Needed the first time someone resigns, which is always sooner than expected."],
              ["4", "Remote working and its obligations", "Cheap to write now, contentious to write during a dispute."],
              ["Later", "Performance review cycle, promotion criteria, succession", "Only useful once alignment cannot happen by proximity."],
            ],
          },
          {
            kind: "callout",
            title: "What a fifty-person company does not need",
            text: "Succession planning, a nine-box talent matrix, a formal performance improvement process and a structured career framework. Adopting them early produces ceremony rather than clarity. The Starter plan is deliberately narrow, attendance, leaves, directory and documents, for this reason.",
          },
        ],
      },
      {
        heading: "Writing a leave scheme you can live with",
        summary: "Accrual, carry-forward, the sandwich rule, and applying it identically.",
        blocks: [
          {
            kind: "para",
            text: "Leave is the only policy every employee interacts with, which is why a bad one does disproportionate damage. The irritant is rarely the policy itself; it is uncertainty about the balance, about whether a request was seen, and about what a Friday-and-Monday will actually cost.",
          },
          {
            kind: "para",
            text: "A balance should be computed from an accrual rule rather than maintained by hand, so that the number the employee sees when applying is the number the approving manager sees and the number payroll uses. Where a sandwich rule applies, its outcome should be visible at the point of applying rather than discovered on the payslip.",
          },
          {
            kind: "para",
            text: "Minimum entitlements sit under the applicable state Shops and Establishments Act, or the Factories Act for covered establishments. A company with people in more than one state may need more than one quota under a single policy.",
          },
        ],
      },
      {
        heading: "Acknowledgement as evidence",
        summary: "Circulating a policy is easy; proving each person accepted it is not.",
        blocks: [
          {
            kind: "para",
            text: "A policy that cannot be shown to have been issued and accepted is difficult to rely on at the moment it matters. Acknowledgement therefore has to be recorded per employee and per policy version.",
          },
          {
            kind: "para",
            text: "Versioning is the part usually omitted. When a policy is revised, an earlier acceptance should not silently stand in for the new wording, publishing a new version should re-open acknowledgement for everyone it applies to. HRMagix ships twenty-five workplace policy templates in the Documents module on exactly this basis: the employer writes their own rules into them, issues them, and the platform records who accepted which version and when.",
          },
        ],
      },
    ],
    readOn: [
      { label: "Startups", href: "/industries/startups" },
      { label: "Workplace Policy Library", href: "/policy-centre/workplace-policy-library" },
      { label: "The Sandwich Rule Is Not Unfair. Applying It Inconsistently Is.", href: "/insights/sandwich-rule" },
    ],
  },

  /* ================================================================ */
  {
    slug: "self-service-arithmetic",
    number: "05",
    title: "The arithmetic of self-service",
    subtitle: "Separating the requests that need a person from the ones that need access",
    reader: "HR leaders deciding whether an ESS rollout is worth the change management",
    minutes: 10,
    abstract: [
      "Most of what an HR team is asked in a week requires access rather than judgement: a balance, a payslip, a UAN, the status of a regularisation. Each is a two-minute answer, which is exactly why the cost of answering them is invisible.",
      "This briefing separates the HR requests that are genuinely lookups from the ones that need a person, and works through what changes when the first category moves behind the employee's own login, on a desktop for office staff and on a phone for everybody else.",
    ],
    seo: {
      title: "The Arithmetic of Employee Self-Service: White Paper",
      description:
        "How to audit HR request volume, which requests are lookups not judgement, what employees can do alone, and why mobile is the main channel in India.",
      keywords: [],
    },
    sections: [
      {
        heading: "An audit any HR team can run in a week",
        summary: "Sort one week of inbound requests into two columns.",
        blocks: [
          {
            kind: "para",
            text: "Before evaluating a self-service portal, it is worth measuring the thing it is supposed to fix. The measurement is simple and takes a week: log every inbound request and sort it into one of two columns.",
          },
          {
            kind: "table",
            caption: "Two kinds of HR request",
            head: ["Lookup, needs access", "Judgement, needs a person"],
            rows: [
              ["How many leaves do I have left", "Can I take unpaid leave for six weeks"],
              ["Send me my March payslip", "My manager and I disagree about my rating"],
              ["What is my UAN", "I want to raise a grievance"],
              ["Has my regularisation been approved", "Should this candidate's offer be revised"],
              ["What is the holiday list for my location", "How do we handle this employee's exit"],
            ],
          },
          {
            kind: "para",
            text: "The left column is where the volume is, and none of it requires judgement. That is the entire case for self-service, and it is a case about attention rather than headcount: when retrieval stops consuming the week, the right column gets the time it actually needs.",
          },
        ],
      },
      {
        heading: "What an employee can finish alone",
        summary: "The complete list, so expectations are set correctly at rollout.",
        blocks: [
          {
            kind: "list",
            items: [
              "Apply for leave, and see the accrual-accurate balance the application will draw from.",
              "Check a live attendance position rather than a month-old one.",
              "Raise a regularisation for a missed punch, and see its approval status.",
              "Download any payslip ever issued to them, including periods predating the current HR team.",
              "Retrieve personal documents, letters and their own policy acknowledgements.",
              "At year end: compare liability under both tax regimes, declare under 80C, 80D, HRA and home loan interest, upload proof for verification, and retrieve Form 16 Part B when it issues.",
            ],
          },
          {
            kind: "callout",
            title: "The rollout mistake to avoid",
            text: "Announcing self-service without stating what it does not cover. Employees who try to resolve a judgement question through the portal and fail conclude the portal does not work, and revert to email for everything including the lookups.",
          },
        ],
      },
      {
        heading: "The manager's half of the same portal",
        summary: "Self-service that stops at the employee just moves the queue.",
        blocks: [
          {
            kind: "para",
            text: "If employees can raise but managers cannot approve in the same place, the bottleneck relocates rather than clearing. Managers need leave and regularisation approvals in one queue, a live team presence view, 1-on-1 agendas with running action items, and goal progress updates, without a separate tool to learn.",
          },
          {
            kind: "para",
            text: "Approval routing matters as much as the interface. A hierarchy configured by grade with escalation means a request moves onward when a manager is unreachable, rather than sitting with someone on leave.",
          },
        ],
      },
      {
        heading: "Mobile is not the secondary channel",
        summary: "For much of an Indian workforce it is the only channel.",
        blocks: [
          {
            kind: "para",
            text: "For field staff, plant operators, drivers and site engineers, a phone is not a convenience tier below a laptop. It is the entire interface. A portal that works well on a desktop and adequately on a phone serves the minority of the workforce well and the majority badly.",
          },
          {
            kind: "para",
            text: "The HRMagix mobile applications carry punch-in with GPS geo-fencing and optional selfie validation, leave application and balances, payslips and the holiday calendar. The web portal and the apps are the same account: what an employee can see and do is governed by their role, not by the device.",
          },
        ],
      },
      {
        heading: "Year-end without a queue",
        summary: "The declaration cycle is where self-service earns its rollout.",
        blocks: [
          {
            kind: "para",
            text: "The annual declaration produces more inbound HR traffic than any other event, and almost all of it is retrieval and re-explanation. Moving the regime comparison into the employee's own login changes the nature of the interaction: the employee arrives having already seen their own numbers under both options.",
          },
          {
            kind: "para",
            text: "Proof upload and HR verification then run as a workflow rather than an inbox, and the monthly deduction schedule follows the verified position. Form 24Q each quarter and Form 16 Part B at year end are generated from the same data, which removes the reconciliation that would otherwise sit between payroll and the return.",
          },
        ],
      },
    ],
    readOn: [
      { label: "Employee Self-Service", href: "/solutions/employee-self-service" },
      { label: "Reading an Indian Payslip, Line by Line", href: "/insights/reading-an-indian-payslip" },
      { label: "The Declaration That Decides Twelve Months of TDS", href: "/insights/old-vs-new-regime" },
    ],
  },
];

export const paperBySlug = (slug: string) => whitePapers.find((p) => p.slug === slug);

/** True when any paper has a real downloadable document behind it. */
export const anyDownloadable = whitePapers.some((p) => p.document);
