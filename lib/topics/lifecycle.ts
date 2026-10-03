import type { Topic } from "../topics";

export const topicsLifecycle: Topic[] = [
  {
    slug: "employee-onboarding",
    name: "Employee onboarding",
    category: "Employee lifecycle",
    title: "Onboarding starts when the offer is accepted, not on the first day.",
    standfirst:
      "The weeks between acceptance and joining decide whether day one is spent working or waiting for a laptop, an email address and a bank form.",
    definition: [
      "Employee onboarding is the process of bringing a new hire into the organisation: collecting their documents and details, completing statutory and payroll setup, provisioning equipment and access, and introducing them to their role, team and policies.",
      "Pre-boarding is the part that happens before the joining date; onboarding proper runs through the first weeks or months, often up to the end of probation.",
    ],
    whyItMatters: [
      "A new hire's first impressions of how organised the company is are formed in onboarding. It is also where the employee record is created, so errors made here, a wrong date of joining, a missing UAN, an incorrect bank account, travel into every later process.",
    ],
    challenges: [
      { title: "Paperwork on day one", body: "Collecting PAN, Aadhaar and bank details on the first morning delays everything else." },
      { title: "Equipment and access", body: "Laptops, email and system access depend on several teams acting in time." },
      { title: "Inconsistent experience", body: "Each manager onboards differently, so each new hire has a different first week." },
      { title: "Statutory setup", body: "Provident fund, ESI and tax details must be captured correctly for the first payroll." },
    ],
    process: [
      { step: "Pre-board", body: "Collect documents and details digitally after the offer is accepted." },
      { step: "Issue the appointment letter", body: "Generate and sign the appointment letter." },
      { step: "Provision", body: "Arrange equipment, workspace and system access before day one." },
      { step: "Welcome", body: "Introduce the team, the role and the policies the employee must acknowledge." },
      { step: "Follow up", body: "Check in through the first weeks and up to confirmation." },
    ],
    practices: [
      "Collect documents before the joining date, not on it.",
      "Use one checklist per role, owned by named people.",
      "Ask new hires to acknowledge key policies, and record the acknowledgement.",
      "Agree a 30/60/90-day plan in the first week, so the new hire knows what good looks like.",
      "Put the probation review date in the calendar on day one, not when it is due.",
      "Schedule check-ins through the first weeks, not only the first day.",
    ],
    mistakes: [
      "Starting onboarding on the joining date.",
      "Relying on email chains to coordinate equipment and access.",
      "Creating the employee record from memory after the first payroll.",
    ],
    software:
      "Onboarding software moves document collection to a pre-boarding portal, generates letters, assigns checklist tasks to the teams that own them, and creates the employee record once, correctly, for payroll and every other module to read.",
    inHRMagix: [
      { label: "Onboarding Module", href: "/features/onboarding", note: "Self-service pre-boarding, appointment letters with digital signature and asset checklists." },
      { label: "Onboarding & Lifecycle", href: "/solutions/onboarding-and-lifecycle", note: "Pre-boarding through confirmation, transfer and exit." },
    ],
    faqs: [
      { q: "What is pre-boarding?", a: "The part of onboarding that happens between offer acceptance and the joining date, collecting documents, issuing the appointment letter and preparing equipment and access." },
      { q: "Which documents are usually collected at onboarding?", a: "Identity and address proof, PAN, bank details, educational and previous employment records, and details needed for the provident fund, such as an existing UAN." },
      { q: "How long does onboarding last?", a: "Pre-boarding runs until the joining date; onboarding proper usually continues for the first weeks and often until the end of probation." },
      { q: "What should an employee onboarding checklist include?", a: "Document collection, the appointment letter, equipment, workspace and system access, introductions to the team and role, policy acknowledgements, and scheduled check-ins through the first weeks. One checklist per role, with named owners, keeps the experience consistent." },
      { q: "Why collect joining documents before the first day?", a: "Collecting PAN, Aadhaar and bank details on the first morning delays everything else. Gathering them digitally after the offer is accepted lets day one be spent working rather than on paperwork." },
      { q: "What statutory details are needed for a new hire's first payroll?", a: "Provident fund, ESI and tax details must be captured correctly during onboarding, including an existing UAN where the employee has one. Errors here travel into every later payroll." },
      { q: "What is a 30/60/90-day plan for new hires?", a: "A plan agreed in the first week that sets out what good looks like at 30, 60 and 90 days, so the new hire knows what is expected of them during their early months." },
      { q: "Should new hires acknowledge company policies?", a: "Yes. Asking new hires to acknowledge key policies during onboarding, and recording the acknowledgement, gives both sides a clear record of what was shared." },
    ],
    phrases: ["onboarding", "pre-boarding", "joining", "new hire"],
    seo: {
      title: "Employee Onboarding: From Offer to Confirmation",
      description: "A practical guide to employee onboarding: pre-boarding, documents, appointment letters, equipment and access, policy acknowledgement and first-weeks follow-up.",
    },
  },
  {
    slug: "probation-and-confirmation",
    name: "Probation and confirmation",
    category: "Employee lifecycle",
    title: "Probation ends with a decision. If nobody makes it, one gets made anyway.",
    standfirst:
      "When a probation period ends without a review, most employers find the employee has been treated as confirmed by default, whether or not that was intended.",
    definition: [
      "Probation is an initial period of employment, set out in the appointment letter or standing orders, during which the employer assesses the employee's suitability. Confirmation is the decision, at the end of probation, to make the employment permanent.",
      "Probation terms usually cover its length, whether it can be extended, the notice period during it, and what confirmation requires.",
    ],
    whyItMatters: [
      "Probation is the employer's structured chance to review a hire, and the employee's chance to know where they stand. Missed reviews waste the first and undermine the second.",
    ],
    challenges: [
      { title: "End dates nobody tracks", body: "Probation end dates pass without a review because nothing reminded the manager." },
      { title: "Unclear criteria", body: "Without stated expectations, confirmation becomes a judgement nobody can explain." },
      { title: "Extensions without record", body: "Extensions agreed verbally leave the employee's status uncertain." },
    ],
    process: [
      { step: "State the terms", body: "Length, notice and confirmation criteria in the appointment letter." },
      { step: "Set expectations early", body: "Agree what success in probation looks like in the first weeks." },
      { step: "Review before the end date", body: "Manager assesses and recommends confirmation, extension or exit." },
      { step: "Record the decision", body: "Issue a confirmation or extension letter and update the record." },
    ],
    practices: [
      "Remind managers well before each probation end date.",
      "Write the confirmation criteria at the start, not the end.",
      "Issue a letter for every outcome, including extensions.",
    ],
    mistakes: [
      "Letting probation lapse without a decision.",
      "Extending probation without telling the employee in writing.",
      "Applying different confirmation standards to similar roles.",
    ],
    software:
      "Software tracks every probation end date, prompts the manager in time, and records the decision and the letter against the employee's effective-dated record.",
    inHRMagix: [
      { label: "Onboarding & Lifecycle", href: "/solutions/onboarding-and-lifecycle", note: "Pre-boarding through confirmation." },
      { label: "Documents Module", href: "/features/documents", note: "Letters and acknowledgements on the employee's personnel file." },
    ],
    faqs: [
      { q: "How long is a typical probation period?", a: "It is set by the employer's policy, appointment letter or standing orders. Periods of three to six months are common, sometimes with the option to extend." },
      { q: "What happens if probation is not reviewed?", a: "In practice the employee is often treated as confirmed, whether or not that was intended. The appointment terms and any standing orders decide the formal position." },
      { q: "Can probation be extended?", a: "Where the terms allow it. An extension should be communicated in writing with the reason and the new end date." },
      { q: "What is the difference between probation and confirmation?", a: "Probation is the initial period during which the employer assesses the employee's suitability. Confirmation is the decision at the end of probation to make the employment permanent." },
      { q: "What should probation terms cover?", a: "The length of probation, whether it can be extended, the notice period during it, and what confirmation requires. These are usually set out in the appointment letter or standing orders." },
      { q: "When should a probation review take place?", a: "Before the probation end date, with managers reminded well in advance. The manager then recommends confirmation, extension or exit." },
      { q: "Is a confirmation letter necessary?", a: "Issuing a letter for every outcome, including confirmation and extension, records the decision and removes any doubt about the employee's status." },
      { q: "How should confirmation criteria be set?", a: "At the start of probation, not the end. Agreeing what success looks like in the first weeks means the confirmation decision can be explained and applied consistently to similar roles." },
    ],
    phrases: ["probation", "confirmation"],
    seo: {
      title: "Probation and Confirmation: Running the Decision",
      description: "How probation and confirmation work: appointment letter terms, setting expectations, reviewing before the end date, extensions and recording the decision.",
    },
  },
  {
    slug: "employee-records",
    name: "Employee records",
    category: "Employee lifecycle",
    title: "An employee record should say what was true then, not only what is true now.",
    standfirst:
      "Titles, salaries, managers and locations change. A record that simply overwrites them cannot answer the question audits, disputes and diligence always ask: what was the position on that date?",
    definition: [
      "Employee records are the information an employer holds about each employee, personal details, job details, compensation, documents, and the history of changes to each, together with the rules for who may see and change them.",
      "Effective dating means each change is stored with the date it takes effect, so the record can show the position on any past date.",
    ],
    whyItMatters: [
      "Nearly every HR process reads the employee record: payroll, leave, approvals, reporting lines, statutory filings. A wrong or overwritten record causes errors everywhere at once.",
      "Records also contain personal data, so access, retention and security matter as much as accuracy.",
    ],
    challenges: [
      { title: "Overwritten history", body: "A new salary replaces the old one, and the previous figure is lost." },
      { title: "Scattered documents", body: "Letters and IDs live in email, shared drives and filing cabinets." },
      { title: "Too much access", body: "Salary details visible to people who do not need them." },
    ],
    process: [
      { step: "Define the record", body: "Decide which fields and documents are held for every employee." },
      { step: "Effective-date changes", body: "Store each change with the date it applies from." },
      { step: "Control access by role", body: "Grant visibility to fields based on role, not seniority." },
      { step: "Track document expiry", body: "Alert before visas, licences and certificates expire." },
      { step: "Retain and dispose", body: "Keep records for the required periods and dispose of them on a schedule." },
    ],
    practices: [
      "Never overwrite, add a dated change.",
      "Restrict salary fields to roles that need them.",
      "Keep documents attached to the record, not in email.",
    ],
    mistakes: [
      "Keeping the master record in a spreadsheet edited in place.",
      "Giving managers access to their team's salary data by default.",
      "Leaving document expiry to memory.",
    ],
    software:
      "An HRMS makes the employee record the single source every module reads, stores changes with effective dates, attaches documents to the record, and enforces role-based access to sensitive fields.",
    inHRMagix: [
      { label: "Human Resource Management System", href: "/solutions/human-resource-management-system", note: "The single employee record twelve modules read from." },
      { label: "Documents Module", href: "/features/documents", note: "Encrypted personnel files, role-based access and expiry alerts." },
      { label: "Employee Management", href: "/solutions/employee-management", note: "Directory, documents, org structure and lifecycle." },
    ],
    faqs: [
      { q: "What is effective dating?", a: "Storing each change to an employee's record with the date it takes effect, so the record can show the position on any past date rather than only the current one." },
      { q: "Who should be able to see salary information?", a: "Roles that need it to do their job, typically payroll and HR, and the employee themselves. Managers commonly see attendance, leave and goals but not salary components." },
      { q: "How long should employee records be kept?", a: "For the periods required by the laws that apply to the establishment and the records concerned, and in practice long enough to answer later questions about gratuity, tax and verification." },
      { q: "What information does an employee record contain?", a: "Personal details, job details, compensation, documents and the history of changes to each, together with the rules for who may see and change them." },
      { q: "Why should employee records not be overwritten?", a: "Overwriting loses history, such as a previous salary. Audits, disputes and diligence often ask what the position was on a particular date, which only a record with dated changes can answer." },
      { q: "How should employee documents be stored?", a: "Attached to the employee's record rather than scattered across email, shared drives and filing cabinets, with access controlled by role." },
      { q: "How can employers track expiring employee documents?", a: "By recording expiry dates and setting alerts before visas, licences and certificates expire, rather than leaving it to memory." },
      { q: "Should managers see their team's salary data?", a: "Not by default. Visibility of salary fields should be granted by role rather than seniority, and giving managers salary access by default is a common mistake." },
    ],
    phrases: ["employee record", "effective-dated", "effective dating", "record"],
    seo: {
      title: "Employee Records: History, Access and Documents",
      description: "How to keep employee records that hold up: effective-dated history, role-based access to sensitive data, documents and expiry, retention and common mistakes.",
    },
  },
  {
    slug: "notice-periods",
    name: "Notice periods",
    category: "Employee lifecycle",
    title: "A notice period is a contract term. Handling it consistently is a policy.",
    standfirst:
      "How much notice an employee owes, whether it can be bought out, and what happens to leave during it are decided once, and then argued about every time they are applied differently.",
    definition: [
      "A notice period is the time an employee or employer must give before employment ends, as set in the appointment letter, the employer's policy or applicable standing orders. It may differ by grade and during probation.",
      "Notice buyout or recovery is the practice of paying, or recovering, salary in place of notice not served, where the terms allow it.",
    ],
    whyItMatters: [
      "The notice period decides the handover time an employer can rely on and the date an employee is free to start elsewhere. Inconsistent handling, waiving it for one person and enforcing it for another, is one of the most visible sources of unfairness at exit.",
    ],
    challenges: [
      { title: "Different terms by cohort", body: "Employees hired at different times may have different notice terms." },
      { title: "Leave during notice", body: "Whether leave can be taken or adjusted against notice needs a rule." },
      { title: "Buyouts", body: "How recovery is calculated and approved varies without a policy." },
    ],
    process: [
      { step: "State the terms", body: "Notice for employee and employer, by grade and during probation." },
      { step: "Record the resignation date", body: "Log the date notice is given and the calculated last working day." },
      { step: "Apply the rules", body: "Leave, buyout and early release handled per policy, with approval." },
      { step: "Feed the settlement", body: "Notice shortfall or payment flows into full and final settlement." },
    ],
    practices: [
      "Put notice terms in the appointment letter and the policy, consistently.",
      "Record the resignation date and last working day formally.",
      "Approve early release and buyouts through one route.",
    ],
    mistakes: [
      "Waiving notice informally for some employees and not others.",
      "Calculating recovery differently each time.",
      "Leaving the last working day undocumented.",
    ],
    software:
      "Software records the resignation, calculates the last working day from the employee's own terms, and carries any notice shortfall or payment into the final settlement automatically.",
    inHRMagix: [
      { label: "Onboarding & Lifecycle", href: "/solutions/onboarding-and-lifecycle", note: "Confirmation, transfer and exit on one record." },
      { label: "Notice Period Policy", href: "/policy-centre/workplace-policy-library/notice-period", note: "A notice period policy template in the workplace policy library." },
    ],
    faqs: [
      { q: "Is the notice period the same for everyone?", a: "Not necessarily. It is commonly set by grade and is often shorter during probation. What matters is that the terms for each employee are written down and applied as written." },
      { q: "Can an employee buy out their notice period?", a: "Where the appointment terms or policy allow it, salary in place of the unserved notice may be recovered. The calculation and approval should follow a stated rule." },
      { q: "Can leave be taken during the notice period?", a: "That is an employer policy decision. The policy should say whether leave is allowed, and whether any balance is adjusted against notice or settled." },
      { q: "Where are notice period terms set?", a: "In the appointment letter, the employer's policy or applicable standing orders. The terms should be consistent across these documents." },
      { q: "How is the last working day determined?", a: "From the date notice is given and the notice terms that apply to that employee. Both the resignation date and the calculated last working day should be recorded formally." },
      { q: "Can an employer release an employee before the notice period ends?", a: "Early release is handled under the employer's policy, and should go through one approval route so it is applied consistently rather than waived informally for some employees." },
      { q: "How does notice shortfall affect the full and final settlement?", a: "Any notice shortfall recovery or payment in lieu of notice flows into the full and final settlement, calculated according to the stated rule." },
      { q: "Is the notice period different during probation?", a: "Often, yes. Notice terms may differ during probation and by grade, and each should be written into the appointment terms." },
    ],
    phrases: ["notice period", "resignation", "notice"],
    seo: {
      title: "Notice Periods: Terms, Buyouts and Consistency",
      description: "How to handle notice periods: terms by grade and probation, resignation and last working day, buyouts and early release, leave during notice, and settlement.",
    },
  },
  {
    slug: "employee-offboarding",
    name: "Employee offboarding",
    category: "Employee lifecycle",
    title: "An exit is the last impression, and the last payroll.",
    standfirst:
      "Offboarding is where access must be removed, assets returned, knowledge handed over and a full and final settlement paid correctly, often by people who are already thinking about the replacement.",
    definition: [
      "Employee offboarding is the process of ending an employment relationship: accepting the resignation or issuing the termination, managing the notice period, recovering assets, removing access, arranging handover, and paying the full and final settlement.",
      "Full and final settlement is the last payment to the employee, bringing together salary to the last working day, leave encashment where applicable, gratuity where eligible, and any recoveries.",
    ],
    whyItMatters: [
      "A delayed or wrong settlement is the last thing a departing employee remembers about the company, and a common source of disputes. Access not removed on time is a security risk. And records needed years later, for gratuity, tax and verification, are easiest to get right at the moment of exit.",
    ],
    challenges: [
      { title: "Many owners", body: "HR, payroll, IT, finance and the manager each own part of an exit." },
      { title: "Settlement arithmetic", body: "Pro-rated salary, leave, gratuity and recoveries come together in one calculation." },
      { title: "Assets and access", body: "Laptops, ID cards and system access must be recovered on the last day, not later." },
    ],
    process: [
      { step: "Record the exit", body: "Resignation or termination, reason and last working day." },
      { step: "Plan the handover", body: "Knowledge transfer during the notice period." },
      { step: "Clear assets and access", body: "Recover equipment and remove access on the last day." },
      { step: "Compute the settlement", body: "Salary, leave, gratuity and recoveries in one statement." },
      { step: "Issue documents", body: "Relieving letter, experience letter and final payslip." },
    ],
    practices: [
      "Run exits from one checklist with named owners.",
      "Compute the settlement from the record, not a separate spreadsheet.",
      "Remove access on the last working day.",
      "Keep former employees' payslips and Form 16 accessible.",
    ],
    mistakes: [
      "Paying the settlement late because one clearance is pending.",
      "Forgetting gratuity eligibility for long-serving employees.",
      "Leaving system access active after exit.",
    ],
    software:
      "Offboarding software coordinates the exit checklist across teams, computes the settlement from the employee's own record, and keeps their documents available after they leave.",
    inHRMagix: [
      { label: "Onboarding & Lifecycle", href: "/solutions/onboarding-and-lifecycle", note: "Pre-boarding through confirmation, transfer and exit." },
      { label: "Gratuity Calculator", href: "/calculators/gratuity", note: "The statutory formula on your own figures." },
      { label: "What a Full-and-Final Settlement Actually Has to Include", href: "/insights/full-and-final-settlement", note: "What goes into the last payment." },
    ],
    faqs: [
      { q: "What is included in a full and final settlement?", a: "Typically salary to the last working day, leave encashment where the policy provides for it, gratuity where the employee is eligible, bonus or variable pay due, and recoveries such as notice shortfall or advances." },
      { q: "When is gratuity payable on exit?", a: "Under the Payment of Gratuity Act, generally after five years of continuous service, calculated as fifteen days' wages per completed year on a twenty-six day month." },
      { q: "What documents should a leaving employee receive?", a: "Commonly a relieving letter, an experience or service letter, the final payslip and, after the year closes, Form 16." },
      { q: "What are the steps in employee offboarding?", a: "Record the exit and last working day, plan the handover during the notice period, recover assets and remove access, compute the settlement, and issue the relieving letter, experience letter and final payslip." },
      { q: "When should system access be removed for a leaving employee?", a: "On the last working day. Access left active after exit is a security risk." },
      { q: "Who is involved in an employee exit?", a: "HR, payroll, IT, finance and the manager each own part of it. Running the exit from one checklist with named owners keeps it from stalling." },
      { q: "Why is full and final settlement often delayed?", a: "Commonly because one clearance is pending, or because the settlement is computed in a separate spreadsheet rather than from the employee's record." },
      { q: "Should former employees still have access to their payslips?", a: "Yes. Keeping former employees' payslips and Form 16 accessible helps with later questions about gratuity, tax and verification." },
    ],
    phrases: ["exit", "offboarding", "full and final", "relieving", "settlement"],
    seo: {
      title: "Employee Offboarding: Exits and Full and Final Settlement",
      description: "A guide to employee offboarding: recording the exit, handover, assets and access, full and final settlement, gratuity, and the documents a leaver needs.",
    },
  },
  {
    slug: "succession-planning",
    name: "Succession planning",
    category: "Employee lifecycle",
    title: "Succession planning asks one question: who could do this job tomorrow?",
    standfirst:
      "Every organisation has roles whose sudden vacancy would hurt. Succession planning names them, names who could step in, and closes the gap before it is needed.",
    definition: [
      "Succession planning is the process of identifying roles that are critical to the organisation, assessing who could fill them and how soon, and developing those people so that a vacancy can be filled from within.",
      "Candidates are commonly rated by readiness, ready now, ready in one to two years, ready in three or more, and given individual development plans.",
    ],
    whyItMatters: [
      "Without a plan, a key departure becomes an emergency: an external search, a gap in leadership and knowledge that leaves with the person. With one, it becomes a transition.",
    ],
    challenges: [
      { title: "Identifying critical roles", body: "Criticality is not the same as seniority; some key roles are specialist ones." },
      { title: "Plans without development", body: "A list of successors with no development plan is a hope." },
      { title: "Sensitivity", body: "Succession discussions involve judgements that must be handled carefully." },
    ],
    process: [
      { step: "Identify critical roles", body: "Assess which roles would hurt most if suddenly vacant." },
      { step: "Name candidates", body: "Identify potential successors for each role." },
      { step: "Rate readiness", body: "Ready now, one to two years, or three or more." },
      { step: "Develop", body: "Create individual development plans to close the gaps." },
      { step: "Review", body: "Revisit the plan as people and roles change." },
    ],
    practices: [
      "Assess roles by impact of vacancy, not by title.",
      "Give every named successor a development plan.",
      "Review the plan at least annually and after key changes.",
    ],
    mistakes: [
      "Planning succession only for the top team.",
      "Naming successors who have never been told or developed.",
      "Treating the plan as confidential to the point that nobody acts on it.",
    ],
    software:
      "Succession software keeps critical roles, candidates, readiness ratings and development plans together, and links them to performance data such as the 9-box so plans are based on evidence.",
    inHRMagix: [
      { label: "Succession Module", href: "/features/succession", note: "Role criticality, bench readiness ratings and individual development plans." },
      { label: "Key Result Areas (KRA) & 9-Box Module", href: "/features/kra-9box", note: "Performance and potential on one grid." },
    ],
    faqs: [
      { q: "Which roles need a succession plan?", a: "Roles whose sudden vacancy would significantly disrupt the organisation, often leadership roles, but also specialist roles that are hard to hire for or hold unique knowledge." },
      { q: "What are readiness ratings?", a: "An assessment of how soon a candidate could step into a role, commonly ready now, ready in one to two years, or ready in three or more years." },
      { q: "Should successors know they have been identified?", a: "Approaches differ. Many organisations share development plans without labelling anyone a successor, so development happens without creating expectations." },
      { q: "What are the steps in succession planning?", a: "Identify critical roles, name potential successors, rate their readiness, create individual development plans, and review the plan as people and roles change." },
      { q: "Is succession planning only for senior leadership?", a: "No. Criticality is not the same as seniority, and planning only for the top team misses specialist roles that are hard to hire for or hold unique knowledge." },
      { q: "How often should a succession plan be reviewed?", a: "At least annually, and after key changes in people or roles." },
      { q: "Why does a succession plan need development plans?", a: "A list of successors without development plans is only a hope. Development plans close the gap between a candidate's current readiness and what the role needs." },
      { q: "How does the 9-box support succession planning?", a: "Linking succession plans to performance and potential data such as the 9-box means candidates are chosen on evidence rather than impression." },
    ],
    phrases: ["succession", "successor", "bench"],
    seo: {
      title: "Succession Planning: Critical Roles and Readiness",
      description: "How succession planning works: identifying critical roles, naming and rating successors by readiness, development plans, and keeping the plan current.",
    },
  },
];
