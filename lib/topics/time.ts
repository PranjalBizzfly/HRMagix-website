import type { Topic } from "../topics";

export const topicsTime: Topic[] = [
  {
    slug: "attendance-management",
    name: "Attendance management",
    category: "Time & attendance",
    title: "Attendance is not about watching people. It is about knowing what to pay.",
    standfirst:
      "Every payroll starts with one number per employee — the days they are paid for. Attendance management is the discipline of making that number right before the payroll cutoff, not after it.",
    definition: [
      "Attendance management is the recording of when employees work, the rules that turn those records into payable days, and the process for correcting the records when they are wrong.",
      "It has three parts that are easy to confuse. Capture is how presence is recorded — a biometric reader, a mobile punch, a kiosk, or a manager's register. Rules decide what the record means — a late mark, a half day, a missed punch, an overtime hour. Regularisation is how an employee or manager corrects a record, and who approves the correction.",
    ],
    whyItMatters: [
      "Attendance is the first input to payroll. A missed punch that nobody resolved becomes a loss-of-pay day; a late mark applied inconsistently becomes a grievance. Errors made here do not stay here — they travel into salary, statutory contributions and the employee's trust in both.",
      "It is also, for many employers, a statutory record. Registers of attendance and wages are among the documents an inspection can ask to see, and they need to show what was recorded at the time, not a tidied version produced later.",
    ],
    challenges: [
      { title: "Mixed ways of capturing presence", body: "Office staff on a biometric reader, field staff on a phone and a factory on a shared kiosk produce three kinds of record. Unless they land in one ledger, someone reconciles them by hand every month." },
      { title: "Exceptions arrive at the cutoff", body: "Missed punches, forgotten check-outs and shifts that cross midnight surface when payroll is due, which is the worst time to investigate them." },
      { title: "Corrections that overwrite the original", body: "When a correction replaces the raw punch rather than sitting beside it, nobody can later show what actually happened, or who changed it." },
      { title: "Buddy punching and rounded hours", body: "One employee punching in for another, or hours rounded up on a paper register, is paid time nobody worked. It rarely shows on a report, because the register is the report." },
      { title: "Rules that live in someone's head", body: "Grace periods, half-day thresholds and late-mark deductions are often applied from memory. Two supervisors then produce two different answers for the same situation." },
    ],
    process: [
      { step: "Decide the capture method per location or role", body: "Choose what establishes presence where: a reader at a controlled entry, a geo-fenced mobile punch at client sites, a kiosk at a shift gate." },
      { step: "Write the rules down", body: "Working hours, grace period, what counts as a half day, how a missed punch is treated, and what happens to a shift that crosses midnight." },
      { step: "Surface exceptions daily, not monthly", body: "Missed punches and anomalies are easiest to resolve the day after they happen, while people still remember." },
      { step: "Regularise with an approval trail", body: "Corrections go through an approver and sit beside the original record rather than replacing it." },
      { step: "Freeze at the cutoff", body: "Lock the month's attendance before payroll runs, so the payable days payroll uses are the ones that were approved." },
    ],
    practices: [
      "Treat attendance as a payroll input, and measure it by how few corrections payroll has to make.",
      "Keep the original punch and the correction as two records, each with who and when.",
      "Publish the attendance rules where employees can read them, not only where HR can.",
      "Review the exception list daily during the month rather than in one pile at the end.",
      "Let employees see their own record, so they can raise a problem before payroll does.",
    ],
    mistakes: [
      "Using attendance data to police people rather than to pay them correctly.",
      "Running separate records for each capture method and reconciling them by hand.",
      "Allowing managers to edit attendance without a reason or an approval.",
      "Applying late-mark deductions inconsistently across teams.",
    ],
    software:
      "Software changes attendance in two ways. It puts every capture method into one ledger, so a biometric punch, a mobile check-in and a kiosk entry are the same kind of record. And it turns the rules into configuration, so a grace period or half-day threshold is applied the same way to everyone, with exceptions routed to the right approver instead of discovered by payroll.",
    inHRMagix: [
      { label: "Attendance & Shifts", href: "/features/attendance", note: "Biometric sync, geo-fenced mobile punch with selfie validation, shift rotation and grace periods." },
      { label: "Attendance in the app", href: "/solutions/attendance", note: "Clock in and clock out, each session recorded, time worked shown on the dashboard." },
      { label: "Payroll", href: "/features/payroll", note: "Loss-of-pay days calculated from attendance and fed into the monthly run." },
    ],
    faqs: [
      { q: "What is the difference between attendance and time tracking?", a: "Attendance establishes whether and when someone worked, which decides payable days. Time tracking records what the time was spent on, usually for billing or project costing. Many companies need the first; fewer need the second." },
      { q: "Should a missed punch be treated as absence?", a: "Not automatically. A missed punch is a gap in the record, not evidence of absence. It should be raised as an exception for the employee or manager to regularise, with the default applied only if nobody does." },
      { q: "How often should attendance be reviewed?", a: "Exceptions are best reviewed daily or weekly. Leaving them to the payroll cutoff means investigating a month of gaps at the moment there is least time to do it." },
    ],
    phrases: ["attendance", "punch", "biometric", "regularis"],
    seo: {
      title: "Attendance Management — A Practical Guide",
      description: "What attendance management is, why it decides payroll, common problems with capture and corrections, a five-step process, best practices and mistakes to avoid.",
    },
  },
  {
    slug: "shift-management",
    name: "Shift management",
    category: "Time & attendance",
    title: "A shift pattern is a set of rules, not a spreadsheet of names.",
    standfirst:
      "Shift management decides who works when, and how the hours are treated for pay. The hard part is rarely the roster. It is the night shift, the swap and the day that crosses midnight.",
    definition: [
      "Shift management is the planning of working hours across a workforce that does not share one fixed schedule, and the rules that govern how those hours are recorded and paid.",
      "It covers the shift definitions themselves — start, end, breaks and grace — the rotation that assigns people to them, the process for swaps and changes, and the treatment of hours that fall outside the plan.",
    ],
    whyItMatters: [
      "In shift-based workplaces, the shift is the unit that attendance and pay are calculated on. If a night shift that starts on Monday and ends on Tuesday is counted as two half days, every downstream figure is wrong.",
      "Shifts also carry obligations. Rest intervals, weekly offs and limits on working hours are set by labour law and by the establishment's own standing orders, and a roster that ignores them creates a liability rather than a schedule.",
    ],
    challenges: [
      { title: "Shifts that cross midnight", body: "A shift starting at 10 pm belongs to one working day, but the punches fall on two calendar dates. Systems that group by date split it in two." },
      { title: "Rotations that drift", body: "Weekly or fortnightly rotations maintained by hand slip out of pattern, and nobody notices until someone works two night weeks in a row." },
      { title: "Swaps without a record", body: "Informal swaps between colleagues solve a staffing problem and create an attendance one, because the roster says one thing and the punches say another." },
      { title: "Allowances tied to shifts", body: "Night-shift allowances and differentials depend on knowing which shift was actually worked, not which was planned." },
    ],
    process: [
      { step: "Define each shift once", body: "Start and end times, break, grace period, and whether it crosses midnight." },
      { step: "Build the rotation as a pattern", body: "Express the rotation as a repeating rule rather than a hand-filled grid, so it cannot drift." },
      { step: "Detect the worked shift from punches", body: "Match actual punches to the nearest shift, so a swap or early start is recognised rather than flagged as an error." },
      { step: "Route swaps and changes for approval", body: "A swap is a request, approved and recorded, so the roster and the attendance agree." },
      { step: "Carry shift data into payroll", body: "Night differentials, overtime and weekly offs are paid from the shift actually worked." },
    ],
    practices: [
      "Anchor every shift to the date it starts, not the date each punch falls on.",
      "Keep rotations rule-based, so the next month's roster is generated rather than typed.",
      "Record swaps formally, even when they are informal agreements between colleagues.",
      "Review shift-linked allowances against worked shifts before each payroll run.",
    ],
    mistakes: [
      "Splitting night shifts across two calendar days.",
      "Paying night allowances from the planned roster instead of the worked one.",
      "Letting grace periods differ by supervisor.",
      "Treating an unrecorded swap as absence for one employee and extra time for another.",
    ],
    software:
      "Shift software earns its keep on the edge cases: auto-detecting which shift a set of punches belongs to, keeping a night shift whole across midnight, and turning a rotation into a rule instead of a grid. The roster then becomes an input attendance and payroll can trust.",
    inHRMagix: [
      { label: "Attendance & Shifts", href: "/features/attendance", note: "Automated shift rotation, night shift differential and late grace periods." },
      { label: "Attendance & Shifts solution", href: "/solutions/attendance", note: "How capture, shifts and exceptions fit together." },
    ],
    faqs: [
      { q: "How should a shift that crosses midnight be counted?", a: "As one shift belonging to the working day it started on. The punches are matched to the shift, not grouped by calendar date, so a 10 pm to 6 am shift is one day of attendance rather than two halves." },
      { q: "What is shift auto-detection?", a: "Matching an employee's actual punches to the shift they most closely fit, so an employee who came in for the evening shift instead of the morning one is recognised as having worked the evening shift, not flagged as late." },
      { q: "Should swaps need approval?", a: "Yes, even if the approval is quick. An approved swap keeps the roster and the attendance record consistent, which is what payroll and any later dispute rely on." },
    ],
    phrases: ["shift", "night shift", "rotation", "roster"],
    seo: {
      title: "Shift Management — Rotations, Night Shifts and Swaps",
      description: "How shift management works: defining shifts, rule-based rotations, night shifts that cross midnight, swaps, shift allowances, and the mistakes that break payroll.",
    },
  },
  {
    slug: "leave-management",
    name: "Leave management",
    category: "Time & attendance",
    title: "Leave policy is decided once. Leave management is applying it the same way every time.",
    standfirst:
      "Most leave disputes are not about how much leave people get. They are about the rule being applied differently to two people in the same situation.",
    definition: [
      "Leave management is the set of leave types an employer offers, the rules for earning, taking and carrying them forward, and the process by which requests are made, approved and recorded.",
      "Typical leave types include earned or privilege leave, sick leave, casual leave, maternity and paternity leave, compensatory off and loss-of-pay leave. Each has its own accrual basis, limits and approval route.",
    ],
    whyItMatters: [
      "Leave is one of the most frequently used HR processes, so inconsistency in it is seen by everyone. It also flows directly into payroll: unpaid leave reduces payable days, and leave balances can become a liability on exit where encashment applies.",
      "Some leave is set by law rather than by policy. Maternity benefit is governed by the Maternity Benefit Act, and the Factories Act and state Shops and Establishments Acts set minimum leave entitlements for the establishments they cover. A policy that falls below those minimums is not a policy the employer can enforce.",
    ],
    challenges: [
      { title: "Balances nobody trusts", body: "When accrual is calculated by hand, employees keep their own count, and the two numbers rarely agree." },
      { title: "The sandwich rule", body: "Whether a weekend or holiday between two leave days counts as leave is a policy choice. Applied inconsistently, it is the single most argued-about leave rule." },
      { title: "Carry-forward and lapse", body: "Year-end carry-forward limits and lapse rules decide what an employee keeps, and are often applied late or not at all." },
      { title: "Multiple states, multiple holiday lists", body: "Employers across states observe different holidays, which affects both leave calculations and the sandwich rule." },
    ],
    process: [
      { step: "Define each leave type", body: "Entitlement, accrual basis, maximum balance, carry-forward, encashment and eligibility." },
      { step: "Decide the edge-case rules", body: "Sandwich rule, half days, backdated requests, leave during notice period and probation." },
      { step: "Set approval routes", body: "Who approves which leave type, and who approves when the manager is away." },
      { step: "Make balances visible", body: "Employees see their own balance before they apply, so requests are made against the real number." },
      { step: "Close the year deliberately", body: "Apply carry-forward and lapse on a fixed date, and communicate the result." },
    ],
    practices: [
      "Publish the leave policy and the balance in the same place employees apply for leave.",
      "Decide the sandwich rule explicitly and apply it by configuration, not judgement.",
      "Record who approved each request and when, including rejections.",
      "Reconcile unpaid leave with attendance before payroll, not after.",
    ],
    mistakes: [
      "Keeping leave balances in a spreadsheet separate from attendance and payroll.",
      "Changing leave rules mid-year without saying from when they apply.",
      "Approving leave informally in chat and recording it later, or never.",
      "Setting policy below the statutory minimum for the establishment.",
    ],
    software:
      "Leave software removes the arithmetic from the argument. Accrual, carry-forward and the sandwich rule are applied by configuration, balances are visible before a request is made, and an approved leave day is already a payroll input rather than something re-keyed at month end.",
    inHRMagix: [
      { label: "Leaves & Holidays", href: "/features/leaves", note: "Custom leave categories, multi-level approvals, accruals, sandwich-rule enforcement and carry-over." },
      { label: "Leave Management", href: "/solutions/leave-management", note: "Accruals, approvals and a calendar people trust." },
      { label: "Leave balance on the dashboard", href: "/solutions/ess", note: "Balance by leave type, used against total, on every employee's dashboard." },
    ],
    faqs: [
      { q: "What is the sandwich rule?", a: "A policy under which a weekend or holiday that falls between two days of leave is itself counted as leave. It is an employer's choice, not a legal requirement, which is exactly why it must be written down and applied consistently." },
      { q: "What is compensatory off?", a: "Leave granted in return for working on a weekly off or a holiday. Policies usually set how soon it must be claimed and whether it lapses." },
      { q: "Can leave rules change during the year?", a: "They can, but the change should state the date from which it applies, and balances already earned under the old rule should be handled explicitly rather than recalculated silently." },
    ],
    phrases: ["leave", "sandwich", "comp-off", "carry"],
    seo: {
      title: "Leave Management — Policies, Accrual and Approvals",
      description: "A guide to leave management: leave types, accrual and carry-forward, the sandwich rule, approvals, statutory minimums, and the mistakes that cause leave disputes.",
    },
  },
  {
    slug: "overtime-management",
    name: "Overtime management",
    category: "Time & attendance",
    title: "Overtime is paid time. Managing it means deciding it before it is worked.",
    standfirst:
      "Overtime becomes a problem when it is discovered at payroll rather than approved in advance. The cost is the smaller issue; the larger one is not knowing which hours were actually authorised.",
    definition: [
      "Overtime is work beyond an employee's normal working hours. Overtime management is how an employer authorises it, records it, checks it against legal limits and pays for it.",
      "For workers covered by the Factories Act, overtime is work beyond nine hours in a day or forty-eight hours in a week, and is paid at twice the ordinary rate of wages. Shops and commercial establishments follow the Shops and Establishments Act of their state, whose rules differ.",
    ],
    whyItMatters: [
      "Unmanaged overtime is a cost that appears after the fact, and often a sign of a staffing problem that nobody has named. It also carries legal limits on how much can be worked, which an employer is responsible for even when the extra hours were the employee's idea.",
      "Because overtime is paid at a higher rate, errors in it are expensive in both directions: unpaid overtime is a wage claim, and overtime paid on unapproved hours is money that cannot easily be recovered.",
    ],
    challenges: [
      { title: "Hours recorded but not approved", body: "Punches show someone stayed late, but nobody decided they should. Payroll then has to decide whether to pay it." },
      { title: "Which law applies", body: "A company with a factory and an office may have two overtime regimes at once." },
      { title: "The hourly rate", body: "Converting a monthly wage to an hourly rate for overtime needs a consistent basis, applied the same way every month." },
      { title: "Overtime as a habit", body: "Regular overtime in one team often means the team is understaffed, which a monthly overtime bill hides." },
    ],
    process: [
      { step: "Set the thresholds", body: "Define normal hours and when overtime starts, per the law that applies to each establishment." },
      { step: "Authorise in advance where possible", body: "Overtime is requested and approved before it is worked, or approved promptly after." },
      { step: "Record against the shift", body: "Overtime is measured from the shift actually worked, not from a flat day length." },
      { step: "Check the limits", body: "Compare against daily, weekly and periodic limits before approving further overtime." },
      { step: "Pay at the right rate", body: "Apply the statutory or contractual multiplier on a consistent hourly basis." },
    ],
    practices: [
      "Separate recorded extra hours from approved overtime, and pay only the second.",
      "Review overtime by team monthly, as a staffing signal as well as a cost.",
      "Document the hourly-rate basis used for overtime so it is applied consistently.",
      "Know which establishments fall under which overtime law.",
    ],
    mistakes: [
      "Paying every hour beyond the shift as overtime without approval.",
      "Ignoring overtime limits because the employee volunteered.",
      "Using a different hourly basis each month.",
      "Applying the Factories Act rule to office staff, or the reverse.",
    ],
    software:
      "Software makes overtime visible while it is happening. Worked hours are compared with the shift automatically, extra time is flagged for approval, and approved overtime flows into payroll at the configured rate, so the monthly figure is a sum of decisions rather than a surprise.",
    inHRMagix: [
      { label: "Attendance & Shifts", href: "/features/attendance", note: "Automated shift and overtime calculation from punches." },
      { label: "HR Analytics", href: "/features/analytics", note: "Overtime expenses alongside leave utilisation and payroll budget variance." },
      { label: "Overtime calculator", href: "/calculators/overtime", note: "Twice the ordinary rate, on your own hourly basis." },
    ],
    faqs: [
      { q: "When is overtime payable under the Factories Act?", a: "For work beyond nine hours in a day or forty-eight hours in a week, at twice the ordinary rate of wages." },
      { q: "Does overtime apply to salaried office staff?", a: "It depends on the law governing the establishment and the employee's role. Offices usually fall under the state's Shops and Establishments Act rather than the Factories Act, and the two differ." },
      { q: "Should overtime be approved before or after it is worked?", a: "Before, wherever the work can be planned. Retrospective approval is sometimes unavoidable, but it should be a prompt decision by the manager, not something payroll infers from punches." },
    ],
    phrases: ["overtime"],
    seo: {
      title: "Overtime Management — Approval, Limits and Pay",
      description: "How to manage overtime: thresholds under the Factories Act and state law, advance approval, overtime limits, hourly-rate basis, and common overtime mistakes.",
    },
  },
  {
    slug: "remote-and-hybrid-work",
    name: "Remote and hybrid work",
    category: "Time & attendance",
    title: "Remote work changes where people work. It should not change what gets recorded.",
    standfirst:
      "Remote and hybrid arrangements work when the rules are as clear as they were in the office — who may work where, how presence is established, and how the day is paid.",
    definition: [
      "Remote work is work performed away from the employer's premises. Hybrid work combines office and remote days under an agreed pattern. Both are arrangements, and both need a policy that says who is eligible, how requests are made and how attendance is recorded.",
    ],
    whyItMatters: [
      "Without a written position, remote work becomes a series of individual favours, and favours are inconsistent by nature. That inconsistency is felt quickly in a team where some people are allowed to work from home and others are not.",
      "Remote days still need to establish payable days. The question is not whether someone is being watched, but whether the attendance record and the payroll agree.",
    ],
    challenges: [
      { title: "No policy, many exceptions", body: "Remote days are granted case by case until nobody can say what the rule is." },
      { title: "Establishing presence", body: "A geofence at the office does not help on a remote day, so the capture method has to fit the arrangement." },
      { title: "Fairness between roles", body: "Roles that cannot be done remotely need a clear rationale for why the arrangement differs." },
      { title: "Records and documents", body: "Equipment issued for home use and acknowledgements of remote-work terms need to be recorded like any other." },
    ],
    process: [
      { step: "Write the policy", body: "Eligibility, pattern, request process, and what happens to office-linked allowances." },
      { step: "Choose the capture method", body: "Browser or mobile check-in without a geofence for remote days; the usual method in the office." },
      { step: "Make requests formal", body: "Remote days are requested and approved in the same way as leave, so they appear in the record." },
      { step: "Record the equipment", body: "Company assets issued for remote work are recorded against the employee." },
      { step: "Review the pattern", body: "Check periodically whether the arrangement is working for the team, not only the individual." },
    ],
    practices: [
      "State the policy in writing, including who is not eligible and why.",
      "Use a capture method that fits the location instead of forcing an office method onto home days.",
      "Treat remote-day requests as records, not as messages.",
      "Record assets issued for home use against the employee.",
    ],
    mistakes: [
      "Running remote work entirely on informal agreement.",
      "Using attendance on remote days as surveillance rather than a payable-day record.",
      "Forgetting office-linked allowances when an arrangement changes.",
    ],
    software:
      "Software supports remote work by offering capture methods that fit it, by routing remote-day requests through the same approvals as other requests, and by keeping one attendance ledger whether the day was worked at a desk or at home.",
    inHRMagix: [
      { label: "Attendance & Shifts", href: "/features/attendance", note: "Mobile check-in, with geo-fencing where a location matters." },
      { label: "Assets", href: "/solutions#app-features", note: "Company assets recorded in the People area of the app." },
      { label: "All Policies", href: "/solutions#app-features", note: "Every company policy in one list in the app." },
    ],
    faqs: [
      { q: "Do remote employees need attendance?", a: "They need a record of payable days, which is what attendance establishes. For remote days that is usually a check-in without a geofence rather than a location-based punch." },
      { q: "Is work from home a right or a benefit?", a: "That is the employer's policy decision, and the most important thing is that it is written down. What damages trust is the same request being granted to one person and refused to another without a stated reason." },
      { q: "What should a remote work policy cover?", a: "Eligibility, the pattern or number of days, how requests are made and approved, how attendance is recorded, equipment and security expectations, and what happens to any office-linked allowances." },
    ],
    phrases: ["remote", "work from home", "hybrid", "distributed"],
    seo: {
      title: "Remote and Hybrid Work — Policy and Attendance",
      description: "How to run remote and hybrid work fairly: writing the policy, capturing attendance on remote days, requests and approvals, assets, and common mistakes.",
    },
  },
  {
    slug: "holiday-calendars",
    name: "Holiday calendars",
    category: "Time & attendance",
    title: "One company, several holiday lists — and every one of them affects pay.",
    standfirst:
      "A holiday calendar looks like an administrative list. In practice it decides payable days, the sandwich rule, compensatory off and overtime, so an error in it is an error in payroll.",
    definition: [
      "A holiday calendar is the list of days on which an establishment is closed or employees are not required to work, together with any optional or restricted holidays employees may choose from.",
      "Employers operating across states usually need more than one calendar, because public holidays differ by state, and national and festival holidays are set under state law for the establishments located there.",
    ],
    whyItMatters: [
      "Holidays interact with almost every other time rule. Work on a holiday may earn compensatory off or overtime; a holiday between two leave days may be counted under the sandwich rule; and a holiday assigned to the wrong location changes an employee's payable days.",
    ],
    challenges: [
      { title: "Different lists for different locations", body: "A branch in one state and head office in another observe different holidays, and employees move between them." },
      { title: "Optional holidays", body: "Restricted or optional holidays need a limit and a way of recording which ones each employee chose." },
      { title: "Late publication", body: "A calendar published after the year has started leaves early leave decisions made against the wrong list." },
    ],
    process: [
      { step: "Publish before the year begins", body: "Issue each location's calendar before the first holiday it contains." },
      { step: "Assign by location", body: "Link each employee to the calendar for the place they work, and update it when they move." },
      { step: "Set the optional-holiday rule", body: "How many may be taken and how they are chosen." },
      { step: "Connect to leave and attendance", body: "Holidays feed the sandwich rule, comp-off and overtime calculations." },
    ],
    practices: [
      "Keep one calendar per location rather than one company calendar with exceptions.",
      "Show employees their own calendar in the same place they apply for leave.",
      "Record optional-holiday choices as requests, like leave.",
    ],
    mistakes: [
      "Applying head office's calendar to every location.",
      "Publishing the calendar after the year has begun.",
      "Forgetting to move an employee to a new calendar when they transfer.",
    ],
    software:
      "Holiday software attaches the right calendar to each employee automatically, and makes that calendar an input to leave, attendance and overtime rules rather than a document people consult.",
    inHRMagix: [
      { label: "Leaves & Holidays", href: "/features/leaves", note: "Unified holiday calendars across Indian states." },
      { label: "Holidays", href: "/solutions#app-features", note: "The company holiday list, in the Time & Work area of the app." },
    ],
    faqs: [
      { q: "Do all states have the same public holidays?", a: "No. National holidays are common, but festival and other holidays are set under state law, which is why employers across states usually maintain a calendar per location." },
      { q: "What is an optional or restricted holiday?", a: "A holiday employees may choose to take from a published list, up to a set number in the year, rather than a day the whole establishment closes." },
      { q: "Does working on a holiday earn extra pay?", a: "Depending on the law that applies and the employer's policy, it may earn compensatory off, overtime or holiday pay. The rule should be written into the policy rather than decided case by case." },
    ],
    phrases: ["holiday"],
    seo: {
      title: "Holiday Calendars — Multi-State Holidays and Payroll",
      description: "Managing holiday calendars across locations: state-wise holidays, optional holidays, and how holidays affect leave, the sandwich rule, comp-off and overtime.",
    },
  },
];
