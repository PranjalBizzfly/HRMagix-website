import type { Topic } from "../topics";

export const topicsPeople: Topic[] = [
  {
    slug: "employee-engagement",
    name: "Employee engagement",
    category: "People & culture",
    title: "Engagement is what people do when nobody is checking.",
    standfirst:
      "Engagement is not a survey score or a party. It is whether people understand their work, feel it is noticed, and believe the rules are applied fairly.",
    definition: [
      "Employee engagement describes how committed people are to their work and their organisation, the discretionary effort they give, and their intention to stay. It is shaped by clarity of role, recognition, growth, fairness and the relationship with their manager.",
    ],
    whyItMatters: [
      "Engagement shows up in the work itself: in effort, quality, and whether problems are raised or quietly worked around. It is also closely linked to retention, because people rarely leave organisations they are engaged with for small reasons.",
    ],
    challenges: [
      { title: "Measuring without acting", body: "Surveys that produce reports but no visible changes reduce engagement." },
      { title: "Unfairness", body: "Inconsistently applied rules: on leave, pay or promotion: undermine engagement faster than any programme builds it." },
      { title: "Manager variation", body: "Engagement differs most by team, because the manager relationship differs most." },
    ],
    process: [
      { step: "Listen", body: "Use regular 1-on-1s, surveys and a channel for concerns." },
      { step: "Identify themes", body: "Look for patterns by team, tenure and role." },
      { step: "Act visibly", body: "Choose a few changes and tell people what changed and why." },
      { step: "Recognise", body: "Make good work visible, often and specifically." },
      { step: "Repeat", body: "Keep listening, so people see the loop close." },
    ],
    practices: [
      "Close the loop: say what was heard and what will change.",
      "Invest in managers' regular conversations with their teams.",
      "Apply policies consistently; fairness is the foundation.",
    ],
    mistakes: [
      "Running surveys without acting on them.",
      "Treating engagement as events rather than everyday experience.",
      "Ignoring team-level differences behind a company average.",
    ],
    software:
      "Software helps engagement mostly by removing friction, fast answers to routine questions, visible recognition, regular 1-on-1s, and by giving employees a place to be heard.",
    inHRMagix: [
      { label: "Recognition", href: "/features/recognition", note: "Peer kudos, value badges and a live culture feed." },
      { label: "1-on-1s & Meetings", href: "/features/meetings", note: "Recurring coaching conversations with shared agendas." },
      { label: "Engagement in the app", href: "/solutions#app-features", note: "Meetings, Recognition, Growth & Points, Wellness and Speak Up." },
    ],
    faqs: [
      { q: "How is employee engagement measured?", a: "Commonly through regular surveys, alongside signals such as participation, retention and what comes up in 1-on-1s. Measurement is only useful if it leads to visible action." },
      { q: "What drives engagement most?", a: "Clarity about the role, recognition for good work, opportunities to grow, a good relationship with the manager, and confidence that rules are applied fairly." },
      { q: "Is engagement the same as satisfaction?", a: "No. Satisfaction is whether people are content; engagement is whether they are committed and give discretionary effort. People can be satisfied without being engaged." },
      { q: "Why does employee engagement matter?", a: "It shows up in effort, quality and whether problems are raised or quietly worked around. It is also closely linked to retention." },
      { q: "What role do managers play in engagement?", a: "A large one. Engagement differs most by team because the manager relationship differs most, which is why investing in managers' regular conversations with their teams matters." },
      { q: "Why do engagement surveys sometimes backfire?", a: "Surveys that produce reports but no visible changes reduce engagement. Closing the loop, saying what was heard and what will change, is what makes listening worthwhile." },
      { q: "How does fairness affect employee engagement?", a: "Inconsistently applied rules on leave, pay or promotion undermine engagement faster than any programme builds it. Applying policies consistently is the foundation." },
      { q: "Is employee engagement about events and perks?", a: "No. Treating engagement as events rather than everyday experience is a common mistake. It rests on role clarity, recognition, growth, fairness and the manager relationship." },
    ],
    phrases: ["engagement", "engaged"],
    seo: {
      title: "Employee Engagement: What Drives It and How to Act",
      description: "What employee engagement is, what drives it, how to listen and act visibly, the role of managers and fairness, and mistakes that erode engagement.",
    },
  },
  {
    slug: "employee-recognition",
    name: "Employee recognition",
    category: "People & culture",
    title: "Recognition works when it is specific, timely and visible.",
    standfirst:
      "A thank-you months later in a review is feedback. Recognition is noticing good work while it is still fresh, and saying exactly what was good about it.",
    definition: [
      "Employee recognition is the acknowledgement of an employee's contribution, behaviour or achievement, by managers or peers, through praise, awards or rewards, formally or informally.",
    ],
    whyItMatters: [
      "Recognition tells people what the organisation values, far more clearly than a values poster. It also builds the sense that work is noticed, which is closely tied to engagement and retention.",
    ],
    challenges: [
      { title: "Only from the top", body: "Recognition that only flows from leadership misses most of the good work peers see." },
      { title: "Generic praise", body: "'Great job, team' says nothing about what to repeat." },
      { title: "Uneven distribution", body: "Visible roles are recognised more than essential but quieter ones." },
    ],
    process: [
      { step: "Anchor to values", body: "Link recognition to the behaviours the company wants to see." },
      { step: "Enable peers", body: "Let anyone recognise anyone." },
      { step: "Make it specific", body: "Say what was done and why it mattered." },
      { step: "Make it visible", body: "Share recognition where others can see it." },
      { step: "Review the pattern", body: "Check who is and is not being recognised." },
    ],
    practices: [
      "Recognise soon after the work, not at review time.",
      "Encourage peer-to-peer recognition.",
      "Tie badges or awards to stated values.",
    ],
    mistakes: [
      "Relying only on annual awards.",
      "Recognising outcomes and ignoring the behaviour behind them.",
      "Letting recognition become a popularity contest.",
    ],
    software:
      "Recognition software makes appreciation quick to give and visible to everyone, a feed of kudos and badges tied to company values, and shows leaders where recognition is and is not reaching.",
    inHRMagix: [
      { label: "Recognition", href: "/features/recognition", note: "Peer-to-peer kudos, core-value badges, a culture feed and a monthly leaderboard." },
      { label: "Growth & Points", href: "/solutions#app-features", note: "Growth points with an all-time balance on every dashboard." },
    ],
    faqs: [
      { q: "What is peer-to-peer recognition?", a: "Recognition given by colleagues rather than only by managers. It captures contributions managers may not see and spreads appreciation across the organisation." },
      { q: "Should recognition include rewards?", a: "It can, but the acknowledgement itself matters most. Rewards work best as an addition to specific, timely recognition, not a replacement for it." },
      { q: "How often should employees be recognised?", a: "Often enough that it is part of normal work rather than an event, and always close to the moment the contribution happened." },
      { q: "What makes employee recognition effective?", a: "Being specific, timely and visible: saying exactly what was done and why it mattered, soon after the work, where others can see it." },
      { q: "Why tie recognition to company values?", a: "Recognition tells people what the organisation values. Linking badges or awards to stated values makes clear which behaviours the company wants to see repeated." },
      { q: "Are annual awards enough for recognition?", a: "No. Relying only on annual awards means most good work goes unacknowledged. Recognition works best as a regular part of normal work." },
      { q: "How can recognition avoid becoming a popularity contest?", a: "By reviewing the pattern of who is and is not being recognised, and by recognising the behaviour behind outcomes. Visible roles otherwise tend to be recognised more than essential but quieter ones." },
      { q: "What is the difference between recognition and feedback?", a: "A thank-you months later in a review is feedback. Recognition is noticing good work while it is still fresh and saying exactly what was good about it." },
    ],
    phrases: ["recognition", "kudos", "badges"],
    seo: {
      title: "Employee Recognition: Specific, Timely and Visible",
      description: "How employee recognition works: tying it to values, peer-to-peer recognition, making praise specific and visible, and common recognition mistakes.",
    },
  },
  {
    slug: "employee-self-service",
    name: "Employee self-service",
    category: "People & culture",
    title: "Most HR questions are lookups. Self-service answers them before they are asked.",
    standfirst:
      "My balance, my payslip, my Form 16, my manager, the questions HR answers most are ones employees could answer themselves, if the answer were in front of them.",
    definition: [
      "Employee self-service (ESS) gives employees direct access to their own HR information and transactions, viewing payslips and balances, applying for leave, updating details, submitting tax declarations, without going through HR.",
      "Manager self-service extends the same idea to managers: approving requests and seeing their team's attendance and leave.",
    ],
    whyItMatters: [
      "Self-service removes routine requests from HR's inbox and gives employees immediate answers. For workforces where many people have no company laptop or email, a phone is the only practical route to their own information.",
    ],
    challenges: [
      { title: "Desktop-only design", body: "Portals that assume a laptop exclude field and shop-floor staff." },
      { title: "Incomplete information", body: "If the portal is out of date, people go back to asking HR." },
      { title: "Too many steps", body: "Self-service that is slower than asking a colleague is not used." },
    ],
    process: [
      { step: "Start with the top questions", body: "Payslips, balances, holidays, tax documents, contact details." },
      { step: "Make it mobile", body: "Design for the phone first, for those who have nothing else." },
      { step: "Move transactions in", body: "Leave, regularisation, declarations and updates." },
      { step: "Route approvals", body: "Requests go to the right approver automatically." },
    ],
    practices: [
      "Make the most-asked information one tap away.",
      "Keep the data behind self-service current.",
      "Give managers their own approval view.",
    ],
    mistakes: [
      "Launching self-service without moving the underlying data into it.",
      "Ignoring employees without laptops or work email.",
      "Keeping some requests on email 'for now', indefinitely.",
    ],
    software:
      "An ESS portal and app put each employee's own record, attendance, leave, payslips, tax documents, in front of them, and route their requests to the right approver, so HR spends time on exceptions rather than lookups.",
    inHRMagix: [
      { label: "Employee Self-Service", href: "/solutions/employee-self-service", note: "The portal and app employees actually log in to." },
      { label: "The dashboard", href: "/solutions#app-features", note: "Today's hours, leave balance, growth points and reporting line at a glance." },
    ],
    faqs: [
      { q: "What can employees do in self-service?", a: "Commonly view payslips and tax documents, check leave balances, apply for leave, regularise attendance, update personal details and submit investment declarations." },
      { q: "Does self-service need to work on a phone?", a: "For most workforces, yes. Field, retail and shop-floor staff often have no company laptop or email, so the phone is their only route." },
      { q: "Does self-service replace HR?", a: "No. It removes routine lookups and requests, so HR has more time for work that needs judgement." },
      { q: "What is employee self-service (ESS)?", a: "Direct access for employees to their own HR information and transactions, such as payslips, balances, leave requests, personal details and tax declarations, without going through HR." },
      { q: "What is manager self-service?", a: "The same idea extended to managers: approving requests and seeing their team's attendance and leave in their own view." },
      { q: "What should be included first in a self-service portal?", a: "The questions HR answers most: payslips, leave balances, holidays, tax documents and contact details. Transactions such as leave, regularisation and declarations can follow." },
      { q: "Why do employees stop using self-service portals?", a: "Usually because the information is out of date, or because the portal takes more steps than asking a colleague. If it is not current and quick, people go back to asking HR." },
      { q: "Can employees download Form 16 through self-service?", a: "Tax documents such as Form 16 are among the most-asked items, and self-service is meant to put each employee's own tax documents in front of them." },
    ],
    phrases: ["self-service", "self service", "portal", "mobile app"],
    seo: {
      title: "Employee Self-Service (ESS): Answers Before Questions",
      description: "What employee self-service is, why it must work on a phone, what to include first, manager self-service, and the mistakes that keep people emailing HR.",
    },
  },
  {
    slug: "hr-analytics",
    name: "HR analytics",
    category: "People & culture",
    title: "An HR number means something only when you can see where it came from.",
    standfirst:
      "Headcount, attrition, overtime and payroll cost are simple to count and easy to misread. HR analytics is the practice of reading them by team, tenure and time rather than as one company-wide figure.",
    definition: [
      "HR analytics is the use of workforce data, headcount, hiring, attrition, attendance, leave, overtime, performance and payroll cost, to understand what is happening in the organisation and to support decisions.",
    ],
    whyItMatters: [
      "A company-wide average hides most of what matters. An attrition problem is usually concentrated in one team, one tenure band or one manager, and only analysis at that level shows where to act.",
    ],
    challenges: [
      { title: "Data in many places", body: "When attendance, payroll and performance live in separate tools, combining them is a project." },
      { title: "Definitions", body: "Two reports calculating attrition differently produce two different numbers." },
      { title: "Reports nobody uses", body: "Dashboards built without a question to answer become wallpaper." },
    ],
    process: [
      { step: "Start with questions", body: "Decide what leadership needs to know." },
      { step: "Agree definitions", body: "Define each metric once." },
      { step: "Break it down", body: "Look by department, tenure, grade and location." },
      { step: "Act and track", body: "Change something and watch the metric respond." },
    ],
    practices: [
      "Define each metric once and use it everywhere.",
      "Always look below the company average.",
      "Pair every number with the question it answers.",
    ],
    mistakes: [
      "Reporting only company-wide averages.",
      "Building dashboards before agreeing definitions.",
      "Treating correlation in HR data as proof of cause.",
    ],
    software:
      "Analytics on an integrated HRMS reads from one record, so attendance, leave, overtime, attrition and payroll cost can be sliced the same way without exporting and merging spreadsheets.",
    inHRMagix: [
      { label: "Analytics", href: "/features/analytics", note: "Headcount, attrition risk, tenure, overtime, leave utilisation and payroll budget variance." },
      { label: "HR Analytics", href: "/solutions/hr-analytics", note: "Headcount, attrition, overtime and payroll cost." },
    ],
    faqs: [
      { q: "How is attrition calculated?", a: "Commonly as the number of leavers in a period divided by the average headcount over that period. The key is to agree one definition and use it consistently." },
      { q: "Which HR metrics matter most?", a: "Those that answer leadership's current questions. Headcount, attrition, overtime, leave utilisation and payroll cost are common starting points." },
      { q: "Why look below the company average?", a: "Because problems are usually concentrated. A healthy average can hide one team with very high attrition." },
      { q: "What is HR analytics?", a: "The use of workforce data, such as headcount, hiring, attrition, attendance, leave, overtime, performance and payroll cost, to understand what is happening in the organisation and support decisions." },
      { q: "How should HR data be broken down?", a: "By department, tenure, grade and location. Problems are usually concentrated in one team, tenure band or manager, and only analysis at that level shows where to act." },
      { q: "Why do two HR reports show different numbers for the same metric?", a: "Usually because the metric is defined differently in each. Defining each metric once and using that definition everywhere avoids conflicting figures." },
      { q: "Does HR data show what causes attrition?", a: "Not on its own. Treating correlation in HR data as proof of cause is a common mistake; the data shows where to look, and action and tracking show what works." },
      { q: "Why are HR dashboards often ignored?", a: "Dashboards built without a question to answer become wallpaper. Starting with what leadership needs to know, and pairing each number with that question, keeps them useful." },
    ],
    phrases: ["analytics", "attrition", "headcount", "metric"],
    seo: {
      title: "HR Analytics: Reading Workforce Data Properly",
      description: "What HR analytics is, the metrics that matter, why company averages mislead, agreeing definitions, and turning workforce data into decisions.",
    },
  },
  {
    slug: "hr-policies",
    name: "HR policies",
    category: "People & culture",
    title: "An unwritten rule is a rule someone will apply differently next time.",
    standfirst:
      "HR policies exist so that the same situation gets the same answer, whoever is asked and whenever. That only works if they are written, versioned and acknowledged.",
    definition: [
      "HR policies are the written rules an employer sets for how employment works, leave, attendance, conduct, harassment, travel, notice, remote work and more, together with the procedures that apply them.",
      "Some policies are required by law for certain establishments, such as a policy under the Sexual Harassment of Women at Workplace Act; others are the employer's own choices.",
    ],
    whyItMatters: [
      "Written policy turns individual decisions into consistent ones, and makes those decisions explainable. When a policy is challenged, the questions are what it said at the time, and whether the employee acknowledged it.",
    ],
    challenges: [
      { title: "Policies nobody can find", body: "A policy in a shared drive folder is effectively unwritten." },
      { title: "No versions", body: "When policies change, the old wording is lost, along with what applied when." },
      { title: "No acknowledgement", body: "Without a record that employees read a policy, it is hard to rely on." },
    ],
    process: [
      { step: "Decide", body: "Settle the rule, including the edge cases." },
      { step: "Write", body: "Plain language, with scope and effective date." },
      { step: "Publish", body: "Where employees work, not only where HR works." },
      { step: "Acknowledge", body: "Record who has read each version." },
      { step: "Review", body: "Revisit on a schedule and when the law changes." },
    ],
    practices: [
      "Version every policy and keep old versions.",
      "Record acknowledgement per version.",
      "Write the edge cases, because those are what get argued.",
    ],
    mistakes: [
      "Copying another company's policy without adapting it.",
      "Changing a policy without saying from when it applies.",
      "Assuming employees have read a policy because it was emailed.",
    ],
    software:
      "Policy software publishes the current version to every employee, records each acknowledgement against the version read, and keeps the history so the rule on any past date can be shown.",
    inHRMagix: [
      { label: "Workplace Policy Library", href: "/policy-centre/workplace-policy-library", note: "Twenty-five HR policy templates." },
      { label: "All Policies", href: "/solutions#app-features", note: "Every company policy in one list in the app." },
      { label: "Documents", href: "/features/documents", note: "Handbook, NDA and policy sign-off tracking." },
    ],
    faqs: [
      { q: "Which HR policies does a company need?", a: "Commonly leave, attendance, code of conduct, prevention of harassment, notice period, travel and expenses, and remote work. Some are legally required for certain establishments; the rest depend on how the company works." },
      { q: "Can policy templates be used as they are?", a: "Templates are a starting point. They should be adapted to the company's decisions and checked against the laws that apply to it." },
      { q: "Why record policy acknowledgement?", a: "Because relying on a policy later often depends on showing that the employee was given that version and confirmed reading it." },
      { q: "Are any HR policies legally required in India?", a: "Some are, for certain establishments. For example, a policy under the Sexual Harassment of Women at Workplace Act. Others are the employer's own choices." },
      { q: "Why should HR policies be versioned?", a: "When a policy changes without versions, the old wording is lost along with what applied when. Keeping old versions lets the employer show the rule on any past date." },
      { q: "How often should HR policies be reviewed?", a: "On a set schedule, and whenever the law changes. Each change should state the date from which it applies." },
      { q: "Is emailing a policy enough to show employees have read it?", a: "No. Assuming employees have read a policy because it was emailed is a common mistake. Acknowledgement should be recorded against each version." },
      { q: "What should a written HR policy include?", a: "The rule in plain language, including the edge cases, its scope and its effective date. It should be published where employees work, not only where HR works." },
    ],
    phrases: ["policy", "policies", "handbook"],
    seo: {
      title: "HR Policies: Writing, Versioning and Acknowledgement",
      description: "How to create HR policies that hold up: deciding the rules, plain writing, publishing, versioning, recording acknowledgement and reviewing on a schedule.",
    },
  },
  {
    slug: "workplace-grievances",
    name: "Workplace grievances",
    category: "People & culture",
    title: "A concern raised early is a conversation. Raised late, it is a dispute.",
    standfirst:
      "People speak up when they believe it is safe and that something will happen. A grievance process exists to make both true.",
    definition: [
      "A grievance is a concern, problem or complaint an employee raises about their work, working conditions or treatment. A grievance process sets out how concerns are raised, who handles them, how they are investigated and how outcomes are communicated.",
      "Certain complaints have their own statutory process, for example, complaints of sexual harassment are handled under the Sexual Harassment of Women at Workplace Act through an Internal Committee where one is required.",
    ],
    whyItMatters: [
      "Concerns that have no route stay unspoken until they become resignations, disputes or worse. A trusted process surfaces problems early, and a consistent one protects both the employee and the employer.",
    ],
    challenges: [
      { title: "Fear of consequences", body: "People do not raise concerns if they expect to be penalised for it." },
      { title: "No visible outcome", body: "When nothing seems to happen, people stop raising concerns." },
      { title: "Inconsistent handling", body: "Similar concerns handled differently undermine trust in the process." },
    ],
    process: [
      { step: "Provide a channel", body: "A clear, accessible way to raise concerns, including confidentially." },
      { step: "Acknowledge", body: "Confirm receipt promptly." },
      { step: "Investigate", body: "Handle fairly, by someone without a conflict of interest." },
      { step: "Decide and communicate", body: "Record the outcome and tell the person who raised it." },
      { step: "Protect", body: "Guard against retaliation." },
    ],
    practices: [
      "Offer more than one route, so no one must raise a concern with the person it is about.",
      "Acknowledge every concern quickly.",
      "Keep a confidential record of each case and its outcome.",
    ],
    mistakes: [
      "Treating grievances as a manager's private matter.",
      "Leaving the person who raised a concern without an outcome.",
      "Handling statutory complaints outside their required process.",
    ],
    software:
      "Software gives employees a dedicated, accessible place to speak up, and gives HR a confidential record of each concern from receipt to outcome.",
    inHRMagix: [
      { label: "Speak Up", href: "/solutions#app-features", note: "A dedicated place for employees to speak up, in the Engagement area of the app." },
      { label: "Workplace Policy Library", href: "/policy-centre/workplace-policy-library", note: "Including harassment and conduct policy templates." },
    ],
    faqs: [
      { q: "What is a grievance?", a: "A concern, problem or complaint an employee raises about their work, working conditions or treatment." },
      { q: "Should concerns be raisable anonymously?", a: "An anonymous route helps people raise concerns they would otherwise keep to themselves, though it can make investigation harder. Many employers offer both named and confidential routes." },
      { q: "Are harassment complaints handled as ordinary grievances?", a: "Complaints of sexual harassment follow the process required by the Sexual Harassment of Women at Workplace Act, through an Internal Committee where one is required, rather than the general grievance route." },
      { q: "What are the steps in a grievance process?", a: "Provide a channel to raise concerns, acknowledge receipt promptly, investigate fairly, decide and communicate the outcome, and protect the person who raised it from retaliation." },
      { q: "Who should investigate an employee grievance?", a: "Someone without a conflict of interest. Employees should also have more than one route, so nobody must raise a concern with the person it is about." },
      { q: "Should the employee be told the outcome of their grievance?", a: "Yes. Leaving the person who raised a concern without an outcome is a common mistake, and when nothing seems to happen, people stop raising concerns." },
      { q: "How can employers prevent retaliation after a complaint?", a: "By making protection from retaliation an explicit step in the process. People do not raise concerns if they expect to be penalised for it." },
      { q: "Should grievance records be kept?", a: "Yes. A confidential record of each case, from receipt to outcome, supports consistent handling of similar concerns." },
    ],
    phrases: ["grievance", "speak up", "complaint", "harassment"],
    seo: {
      title: "Workplace Grievances: A Process People Trust",
      description: "How to handle workplace grievances: channels to speak up, acknowledgement, fair investigation, communicating outcomes, protection from retaliation.",
    },
  },
  {
    slug: "hr-automation",
    name: "HR automation",
    category: "People & culture",
    title: "Automate the rule, not the judgement.",
    standfirst:
      "The best candidates for HR automation are decisions already made, accruals, reminders, routing, calculations. The worst are decisions that still need a person.",
    definition: [
      "HR automation is the use of software to perform repetitive HR tasks without manual effort, applying policy rules, routing approvals, sending reminders, calculating payroll and generating documents.",
    ],
    whyItMatters: [
      "Manual repetitive work is where HR errors concentrate and where HR time disappears. Automating it applies rules consistently and frees time for work that needs judgement.",
    ],
    challenges: [
      { title: "Automating unclear rules", body: "A rule that is not decided cannot be automated; it just becomes a faster inconsistency." },
      { title: "Too much, too soon", body: "Automating everything at once overwhelms the people who must trust it." },
      { title: "Invisible logic", body: "Automation nobody can explain is automation nobody trusts." },
    ],
    process: [
      { step: "List repetitive work", body: "Find tasks done the same way every time." },
      { step: "Decide the rules", body: "Settle the policy before automating it." },
      { step: "Automate one flow", body: "Start with a high-volume, low-risk process." },
      { step: "Review exceptions", body: "Route what the rule cannot decide to a person." },
      { step: "Extend", body: "Add further flows once the first is trusted." },
    ],
    practices: [
      "Write the rule down before configuring it.",
      "Always route exceptions to a person.",
      "Keep an audit trail of what the automation did.",
    ],
    mistakes: [
      "Automating a process before agreeing the policy.",
      "Removing human review from judgement calls.",
      "Measuring success by tasks automated rather than errors avoided.",
    ],
    software:
      "An integrated HR platform automates across processes, not only within them, an approved leave day becomes a payroll input, a missed punch becomes an exception, a probation date becomes a reminder, without re-keying between tools.",
    inHRMagix: [
      { label: "How Setup Works", href: "/how-setup-works", note: "Add your team, switch on modules, then reminders, approvals and reports run themselves." },
      { label: "HRMS", href: "/solutions/hrms", note: "One employee record every module reads from." },
    ],
    faqs: [
      { q: "Which HR tasks are easiest to automate?", a: "Rule-based, high-volume tasks: leave accrual, approval routing, reminders, statutory calculations and document generation." },
      { q: "Does HR automation replace HR staff?", a: "It replaces repetitive tasks, not the judgement HR provides. The aim is more time for work that needs a person." },
      { q: "Where should automation start?", a: "With a high-volume process whose rules are already clear, so the benefit is visible and the risk is low." },
      { q: "What is HR automation?", a: "The use of software to perform repetitive HR tasks without manual effort, such as applying policy rules, routing approvals, sending reminders, calculating payroll and generating documents." },
      { q: "Can unclear HR rules be automated?", a: "No. A rule that has not been decided cannot be automated; it just becomes a faster inconsistency. The policy should be settled and written down first." },
      { q: "What happens to exceptions in an automated HR process?", a: "They should always be routed to a person. Automation applies the rule, and anything the rule cannot decide needs human judgement." },
      { q: "How should the success of HR automation be measured?", a: "By errors avoided rather than the number of tasks automated. Keeping an audit trail of what the automation did also helps people trust it." },
      { q: "Should all HR processes be automated at once?", a: "No. Automating everything at once overwhelms the people who must trust it. Start with one flow and extend once it is trusted." },
    ],
    phrases: ["automat", "automated", "automation"],
    seo: {
      title: "HR Automation Software: What to Automate and What Not To",
      description: "A practical guide to HR automation software: choosing rule-based tasks, settling policy first, routing exceptions to people, and extending automation safely.",
      keywords: ["HR automation software"],
    },
  },
  {
    slug: "employee-retention",
    name: "Employee retention",
    category: "People & culture",
    title: "People leave for reasons that were visible months earlier.",
    standfirst:
      "Retention is rarely won in the exit interview. It is won in the ordinary months before, in growth, recognition, fairness and the manager relationship.",
    definition: [
      "Employee retention is an organisation's ability to keep the people it wants to keep, and the practices that influence whether they stay.",
    ],
    whyItMatters: [
      "Every departure carries the cost of hiring and onboarding a replacement and the loss of knowledge and relationships. When departures concentrate in one team or role, they signal a problem that will continue until it is addressed.",
    ],
    challenges: [
      { title: "Late signals", body: "Warning signs are noticed after the resignation, not before." },
      { title: "Averages that hide", body: "A reasonable company attrition rate can conceal a team losing most of its people." },
      { title: "Counter-offers", body: "Retaining someone with money at exit rarely addresses why they wanted to leave." },
    ],
    process: [
      { step: "Measure", body: "Track attrition by team, tenure and role." },
      { step: "Listen early", body: "Use regular 1-on-1s and stay conversations, not only exit interviews." },
      { step: "Address causes", body: "Growth, recognition, workload, fairness and management." },
      { step: "Plan for key roles", body: "Know where a departure would hurt most." },
    ],
    practices: [
      "Hold stay conversations before exit conversations are needed.",
      "Look at attrition by team, not only company-wide.",
      "Give people visible routes to grow.",
    ],
    mistakes: [
      "Relying on exit interviews as the main retention tool.",
      "Using counter-offers as a strategy.",
      "Ignoring early-tenure attrition.",
    ],
    software:
      "Software supports retention by surfacing early signals in the data, attrition concentrated by team or tenure, and by keeping growth, recognition and regular conversations part of normal work.",
    inHRMagix: [
      { label: "Analytics", href: "/features/analytics", note: "Early-warning attrition risk indicators and tenure analysis." },
      { label: "Succession", href: "/features/succession", note: "Readiness for roles whose vacancy would hurt most." },
      { label: "Recognition", href: "/features/recognition", note: "Peer kudos and value badges." },
    ],
    faqs: [
      { q: "Why do employees leave?", a: "Common reasons include limited growth, feeling unrecognised, workload, perceived unfairness and the relationship with their manager. The mix differs by organisation, which is why it is worth measuring locally." },
      { q: "What is a stay interview?", a: "A conversation with a current employee about what keeps them and what might make them leave, held before they decide to go." },
      { q: "Do counter-offers work?", a: "They can delay a departure, but they rarely address the reason the person wanted to leave." },
      { q: "What is employee retention?", a: "An organisation's ability to keep the people it wants to keep, and the practices that influence whether they stay." },
      { q: "How should attrition be tracked for retention?", a: "By team, tenure and role rather than only company-wide. A reasonable company attrition rate can conceal a team losing most of its people." },
      { q: "Are exit interviews enough to improve retention?", a: "No. By the exit interview the decision has been made. Regular 1-on-1s and stay conversations surface the reasons while there is still time to act." },
      { q: "Why does early-tenure attrition matter?", a: "Ignoring it is a common retention mistake. Every departure carries the cost of hiring and onboarding a replacement, which is lost quickly when new hires leave early." },
      { q: "What is the cost of employee turnover?", a: "Each departure carries the cost of hiring and onboarding a replacement, and the loss of knowledge and relationships the person held." },
    ],
    phrases: ["retention", "attrition", "leavers"],
    seo: {
      title: "Employee Retention: Acting Before the Resignation",
      description: "Why employees leave and how to retain them: measuring attrition by team and tenure, stay conversations, growth and recognition, and retention mistakes.",
    },
  },
];
