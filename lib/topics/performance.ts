import type { Topic } from "../topics";

export const topicsPerformance: Topic[] = [
  {
    slug: "performance-management",
    name: "Performance management",
    category: "Performance & growth",
    title: "Performance management is the year, not the review at the end of it.",
    standfirst:
      "An annual review can only summarise what already happened. Performance management is everything that shapes it while it is happening: goals, conversations and feedback.",
    definition: [
      "Performance management is the continuous process of setting expectations, tracking progress, giving feedback and making decisions, on pay, promotion, development or improvement, based on how work is actually going.",
      "It usually combines goals (such as OKRs or KRAs), regular check-ins between managers and employees, periodic reviews, and a calibration step that makes ratings comparable across teams.",
    ],
    whyItMatters: [
      "When the only performance conversation is the annual review, the review contains surprises, and a review with surprises in it is one that failed months earlier.",
      "Performance data also feeds decisions with lasting consequences: increments, promotions, succession and, sometimes, exits. Those decisions are only defensible if the record behind them was kept through the year.",
    ],
    challenges: [
      { title: "Goals set and forgotten", body: "Goals written in April and next opened in March describe a different year from the one that happened." },
      { title: "Recency bias", body: "Reviews weight the last few weeks because nothing earlier was written down." },
      { title: "Inconsistent ratings", body: "Two managers assessing comparable work reach different ratings without a calibration step." },
      { title: "Disconnected from pay", body: "When reviews and increments live in different places, the link between them is hard to show." },
    ],
    process: [
      { step: "Set goals", body: "Agree objectives or result areas at the start of the cycle." },
      { step: "Check in regularly", body: "Short, frequent conversations track progress and remove obstacles." },
      { step: "Record as you go", body: "Feedback and achievements are noted when they happen." },
      { step: "Review", body: "Assess the period against the goals and the record." },
      { step: "Calibrate", body: "Compare draft ratings across managers before finalising." },
      { step: "Decide and develop", body: "Link outcomes to pay, promotion and development plans." },
    ],
    practices: [
      "Keep goals visible and revisit them at every check-in.",
      "Write feedback down when it is given, not at review time.",
      "Calibrate before ratings are shared, not after complaints.",
      "Separate development conversations from pay conversations where possible.",
    ],
    mistakes: [
      "Treating the annual review as the whole of performance management.",
      "Using a rating scale without shared definitions of each level.",
      "Letting goals and reviews live in separate documents.",
    ],
    software:
      "Performance software keeps goals, check-ins, feedback and reviews in one record, so the review draws on the whole year rather than memory, and calibration compares like with like.",
    inHRMagix: [
      { label: "Performance & OKRs", href: "/solutions/performance-and-okrs", note: "Objectives, KRAs, 9-box, PIPs, 1-on-1s and recognition on one record." },
      { label: "Objectives & OKRs", href: "/features/okrs", note: "Cascading OKRs with progress and check-in reminders." },
      { label: "Reviews", href: "/solutions#app-features", note: "Performance reviews, in the Performance area of the app." },
    ],
    faqs: [
      { q: "How often should performance be reviewed?", a: "Formal reviews are commonly annual or half-yearly, but check-ins should be far more frequent, monthly or fortnightly, so the formal review has no surprises." },
      { q: "What is calibration?", a: "The step in a review cycle where draft ratings are compared across managers before they are finalised, so that comparable work receives comparable ratings." },
      { q: "Should performance ratings decide pay?", a: "They commonly inform it. What matters is that the link is explained in advance and applied consistently, so employees can see how one leads to the other." },
      { q: "What is the difference between performance management and a performance review?", a: "A performance review is a periodic assessment at the end of a cycle. Performance management is the continuous process around it, setting goals, checking in, giving feedback and making decisions while the work is happening." },
      { q: "What are the steps in a performance management cycle?", a: "Set goals, check in regularly, record feedback and achievements as they happen, review the period, calibrate ratings across managers, and then link outcomes to pay, promotion and development." },
      { q: "How can recency bias be reduced in appraisals?", a: "By writing feedback and achievements down when they happen rather than at review time. The review can then draw on the whole year instead of the last few weeks." },
      { q: "Why do annual reviews alone fail?", a: "When the annual review is the only performance conversation, it tends to contain surprises, and goals set at the start of the year are often not revisited until the end. Regular check-ins keep the review grounded in what actually happened." },
      { q: "Should development and pay be discussed in the same conversation?", a: "Where possible, they are better kept separate. Mixing them tends to turn a development conversation into a negotiation about the increment." },
    ],
    phrases: ["performance", "review", "rating", "calibration"],
    seo: {
      title: "Performance Management: A Year-Round Process",
      description: "What performance management is, why annual reviews alone fail, the six-step cycle from goals to calibration, best practices and common mistakes.",
    },
  },
  {
    slug: "performance-reviews",
    name: "Performance reviews",
    category: "Performance & growth",
    title: "A good review contains no news.",
    standfirst:
      "If an employee learns something important about their performance for the first time in a review, the process failed before the meeting began.",
    definition: [
      "A performance review is a structured, periodic assessment of an employee's work over a defined period, usually combining a self-assessment, a manager assessment, and sometimes input from peers or others, ending in a documented outcome.",
    ],
    whyItMatters: [
      "Reviews are the formal record of performance. They are referred to in increment decisions, promotions, improvement plans and occasionally disputes, so what they say, and how it was arrived at, needs to hold up.",
    ],
    challenges: [
      { title: "Recency", body: "Without notes from the year, the review reflects the last month." },
      { title: "Vague criteria", body: "Ratings without defined levels mean different things to different managers." },
      { title: "One-way conversations", body: "Reviews delivered rather than discussed produce agreement on paper only." },
    ],
    process: [
      { step: "Collect input", body: "Self-assessment, manager assessment and any peer input, against the period's goals." },
      { step: "Draft ratings", body: "Managers draft ratings using shared definitions of each level." },
      { step: "Calibrate", body: "Compare drafts across teams and adjust for consistency." },
      { step: "Discuss", body: "Hold the conversation, focusing on evidence and next steps." },
      { step: "Record and act", body: "Document the outcome and any development or improvement plan." },
    ],
    practices: [
      "Define what each rating level means, with examples.",
      "Ask for the self-assessment before the manager writes theirs.",
      "End every review with agreed next steps, not only a rating.",
    ],
    mistakes: [
      "Writing the review from memory.",
      "Sharing ratings before calibration.",
      "Using the review to raise problems for the first time.",
    ],
    software:
      "Review software gathers self, manager and peer input in one place, shows the year's goals and notes beside the form, and holds calibration and the final outcome on the employee's record.",
    inHRMagix: [
      { label: "Reviews", href: "/solutions#app-features", note: "Performance reviews in the Performance area of the app." },
      { label: "KRA & 9-Box", href: "/features/kra-9box", note: "Multi-rater evaluations and calibration dashboards." },
    ],
    faqs: [
      { q: "What should a self-assessment include?", a: "What the employee achieved against their goals, with evidence, what got in the way, and what they want to develop next. It is most useful when written before the manager's assessment." },
      { q: "Should peers give review input?", a: "Peer input can add perspective the manager lacks, especially in cross-functional roles. It works best when it is specific and focused on observed work." },
      { q: "How long should a review meeting be?", a: "Long enough for a real two-way conversation about the period and the next one. If the review contains no surprises, it rarely needs to be long." },
      { q: "What are the steps in a performance review?", a: "Collect self, manager and any peer input against the period's goals, draft ratings using shared level definitions, calibrate across teams, hold the review conversation, and record the outcome with any development or improvement plan." },
      { q: "Should ratings be shared before calibration?", a: "No. Sharing draft ratings before they are calibrated means some may later change, which undermines trust in the whole process." },
      { q: "How do you make rating levels consistent across managers?", a: "Define what each rating level means, with examples, so that every manager is applying the same scale. Without shared definitions, the same rating means different things in different teams." },
      { q: "Should a performance review raise problems for the first time?", a: "No. A good review contains no news. Concerns should be raised as they arise during the year, so the review summarises conversations that have already happened." },
      { q: "How should a performance review end?", a: "With agreed next steps and a documented outcome, not only a rating. The record may later be referred to for increments, promotions or improvement plans." },
    ],
    phrases: ["review", "self-assessment", "appraisal"],
    seo: {
      title: "Performance Reviews: Running Reviews Without Surprises",
      description: "How to run fair performance reviews: self and manager assessment, rating definitions, calibration, the review conversation, and mistakes to avoid.",
    },
  },
  {
    slug: "okrs",
    name: "OKRs",
    category: "Performance & growth",
    title: "An OKR is a direction and a measure. Without the measure, it is a wish.",
    standfirst:
      "Objectives and key results work when objectives say where you are going and key results say how you will know you got there, and both stay visible all quarter.",
    definition: [
      "OKRs, objectives and key results, are a goal-setting framework. An objective is a qualitative statement of what to achieve; each key result is a measurable outcome that shows progress towards it.",
      "OKRs are usually set quarterly, cascade from company to team to individual, and are scored at the end of the cycle.",
    ],
    whyItMatters: [
      "OKRs make priorities explicit and shared. When a team can see how its objectives connect to the company's, trade-offs become easier to make and to explain.",
    ],
    challenges: [
      { title: "Tasks disguised as key results", body: "A key result that is an activity ('launch the campaign') measures effort, not outcome." },
      { title: "Too many objectives", body: "A long list of objectives is a to-do list, not a set of priorities." },
      { title: "Set and forgotten", body: "OKRs reviewed only at quarter end cannot change behaviour during it." },
    ],
    process: [
      { step: "Set company objectives", body: "A small number of objectives for the period." },
      { step: "Cascade", body: "Teams and individuals set OKRs that contribute to those above them." },
      { step: "Check in", body: "Update progress and confidence regularly through the quarter." },
      { step: "Score and reflect", body: "Score key results at the end and record what was learned." },
    ],
    practices: [
      "Keep objectives few and key results measurable.",
      "Record a confidence level with each progress update.",
      "Review OKRs in regular check-ins, not only at quarter end.",
    ],
    mistakes: [
      "Writing activities as key results.",
      "Tying OKR scores directly to pay, which discourages ambitious goals.",
      "Setting OKRs nobody looks at until they are scored.",
    ],
    software:
      "OKR software keeps the cascade visible, who contributes to what, and prompts regular check-ins with progress and confidence, so the quarter's goals stay in front of people rather than in a document.",
    inHRMagix: [
      { label: "Objectives & OKRs", href: "/features/okrs", note: "Quarterly and annual cascading, progress sliders, confidence scores and check-in reminders." },
      { label: "Performance & OKRs", href: "/solutions/performance-and-okrs", note: "OKRs alongside KRAs, reviews and 1-on-1s." },
    ],
    faqs: [
      { q: "What is the difference between an OKR and a KPI?", a: "A KPI is an ongoing measure of health, a number you watch continuously. An OKR is a time-bound goal to change something, with key results that show whether the change happened." },
      { q: "How many OKRs should a team have?", a: "Few enough that they are genuine priorities. Most teams find a small handful of objectives, each with a few key results, is the limit of what they can focus on in a quarter." },
      { q: "Should OKRs be linked to bonuses?", a: "Many organisations deliberately avoid a direct link, because it encourages people to set goals they know they can hit rather than ambitious ones." },
      { q: "What is the difference between an objective and a key result?", a: "An objective is a qualitative statement of what to achieve. A key result is a measurable outcome that shows progress towards that objective." },
      { q: "How often are OKRs set?", a: "Usually quarterly, with scoring at the end of the cycle. Some organisations also set annual OKRs that quarterly ones contribute to." },
      { q: "What does it mean to cascade OKRs?", a: "Company objectives are set first, and teams and individuals then set OKRs that contribute to those above them, so everyone can see how their goals connect to the company's." },
      { q: "Can a task be a key result?", a: "It should not be. A key result written as an activity, such as launching a campaign, measures effort rather than outcome." },
      { q: "Why record a confidence level with OKR check-ins?", a: "A confidence level alongside each progress update shows whether a key result is still likely to be met, so problems surface during the quarter rather than at scoring time." },
    ],
    phrases: ["okr", "okrs", "objectives", "key results"],
    seo: {
      title: "OKRs: Objectives and Key Results Explained",
      description: "What OKRs are, how objectives and key results differ, cascading and check-ins, OKRs versus KPIs, and the common mistakes that make OKRs fail.",
    },
  },
  {
    slug: "kras-and-9-box",
    name: "KRAs and the 9-box",
    category: "Performance & growth",
    title: "KRAs define the job. The 9-box asks what comes after it.",
    standfirst:
      "Key result areas describe what a role is accountable for. The 9-box plots how someone performs in it against how far they could grow, two different questions that are often answered together.",
    definition: [
      "Key result areas (KRAs) are the main areas of outcome a role is responsible for, each typically with measures and a weight. They are more stable than goals, because they describe the role rather than the quarter.",
      "The 9-box is a talent grid that plots employees on two axes, current performance and assessed potential, each in three levels, giving nine boxes that inform development, succession and retention decisions.",
    ],
    whyItMatters: [
      "KRAs give reviews a fixed reference: what the role exists to deliver. The 9-box turns performance data into talent decisions, who to develop, who to stretch, and whose role is at risk if they leave.",
    ],
    challenges: [
      { title: "KRAs that describe activity", body: "KRAs written as duties rather than outcomes cannot be measured." },
      { title: "Potential is subjective", body: "Assessing potential without shared criteria produces a grid of opinions." },
      { title: "Grids that are filled and filed", body: "A 9-box that does not lead to development plans is an exercise, not a tool." },
    ],
    process: [
      { step: "Write KRAs per role", body: "Define outcome areas, measures and weights." },
      { step: "Assess performance", body: "Score against KRAs in the review cycle." },
      { step: "Assess potential", body: "Use shared criteria, agreed across managers." },
      { step: "Plot and calibrate", body: "Place employees on the grid and review placements together." },
      { step: "Act", body: "Link each box to a development, retention or succession action." },
    ],
    practices: [
      "Write KRAs as outcomes with measures, not lists of duties.",
      "Calibrate 9-box placements as a group of managers.",
      "Attach an action to every placement.",
    ],
    mistakes: [
      "Treating a 9-box placement as permanent.",
      "Sharing grid positions without context.",
      "Assessing potential from personality rather than evidence.",
    ],
    software:
      "Software holds role-based KRAs with their weights, scores them in the review cycle, and plots the resulting performance and potential on a 9-box that leadership can calibrate together.",
    inHRMagix: [
      { label: "KRA & 9-Box", href: "/features/kra-9box", note: "Role-based scoring, multi-rater evaluations and an interactive 9-box." },
      { label: "Succession", href: "/features/succession", note: "Talent bench readiness for critical roles." },
      { label: "KRA", href: "/solutions#app-features", note: "Key result areas, in the Performance area of the app." },
    ],
    faqs: [
      { q: "What is the difference between a KRA and a KPI?", a: "A KRA is an area of outcome a role is accountable for; KPIs are the measures used to judge performance within that area." },
      { q: "What does the 9-box measure?", a: "Two things: current performance and assessed potential, each in three levels. The combination suggests different actions, development, stretch assignments, succession or support." },
      { q: "Should employees see their 9-box position?", a: "Organisations differ. Where positions are shared, they should come with an explanation and a development plan, not as a label." },
      { q: "What is a key result area (KRA)?", a: "A main area of outcome a role is responsible for, typically with measures and a weight. KRAs describe the role rather than the quarter, so they are more stable than goals." },
      { q: "How do you write good KRAs?", a: "As outcomes with measures and weights, not as lists of duties. A KRA written as an activity cannot be measured." },
      { q: "How is potential assessed for the 9-box?", a: "Against shared criteria agreed across managers, and based on evidence rather than personality. Without shared criteria, the grid becomes a collection of opinions." },
      { q: "Is a 9-box placement permanent?", a: "No. Treating a placement as permanent is a common mistake, since performance and potential are reassessed in later cycles." },
      { q: "How is the 9-box used for succession planning?", a: "Each placement is linked to an action, such as development, a stretch assignment, retention or succession. A grid that is filled in but not acted on is an exercise rather than a tool." },
    ],
    phrases: ["kra", "kras", "9-box", "potential"],
    seo: {
      title: "KRAs and the 9-Box Talent Grid",
      description: "What key result areas are, how the 9-box plots performance against potential, calibrating placements, and turning the grid into development action.",
    },
  },
  {
    slug: "performance-improvement-plans",
    name: "Performance improvement plans",
    category: "Performance & growth",
    title: "A PIP is a plan to succeed, or it is not a plan.",
    standfirst:
      "A performance improvement plan works when it states the gap, the target, the support and the timeline, and fails when it is a formality before a decision already made.",
    definition: [
      "A performance improvement plan (PIP) is a structured, time-bound plan agreed with an employee whose performance is below expectations. It sets out the specific gaps, measurable targets, the support provided, check-in points and the consequences at the end of the period.",
      "PIPs are commonly 30, 60 or 90 days, with milestone reviews along the way.",
    ],
    whyItMatters: [
      "A fair PIP gives an employee a genuine chance to improve and gives the employer a documented, consistent process. If the plan later leads to an exit, the record of what was agreed, what support was given and what happened is what makes the decision defensible.",
    ],
    challenges: [
      { title: "Vague targets", body: "'Improve communication' cannot be met or missed." },
      { title: "No support", body: "A plan that asks for change without providing coaching or resources is set up to fail." },
      { title: "Missing record", body: "Check-ins that are not written down leave the outcome unexplained." },
    ],
    process: [
      { step: "Name the gap", body: "Describe specifically what is below expectation, with evidence." },
      { step: "Set measurable targets", body: "Define what success looks like by the end of the plan." },
      { step: "Agree support", body: "Coaching, training or resources the employer will provide." },
      { step: "Check in on milestones", body: "Review progress at fixed points and record each review." },
      { step: "Conclude", body: "Record the outcome, completed, extended or not met, and what follows." },
    ],
    practices: [
      "Raise concerns before a PIP, so the plan is not a surprise.",
      "Write targets the employee can measure themselves against.",
      "Document every check-in on the day it happens.",
    ],
    mistakes: [
      "Using a PIP as a formality before a decided exit.",
      "Changing targets during the plan without agreement.",
      "Keeping PIP notes in private documents instead of the record.",
    ],
    software:
      "Software gives PIPs a consistent structure, milestones, check-ins, a confidential journal and sign-offs, so each plan is run the same way and its outcome is fully recorded.",
    inHRMagix: [
      { label: "PIPs & Growth", href: "/features/pips", note: "30/60/90-day plans with milestone checkpoints, a confidential journal and sign-offs." },
      { label: "PIPs", href: "/solutions#app-features", note: "Performance improvement plans, in the Performance area of the app." },
    ],
    faqs: [
      { q: "How long should a PIP last?", a: "Long enough for meaningful improvement to be visible, 30, 60 or 90 days is common, depending on the role and the gap." },
      { q: "Does a PIP always end in termination?", a: "It should not. A PIP is a plan for improvement, and a genuine one is designed so that success is achievable. Many end with the employee meeting the targets." },
      { q: "What should be recorded during a PIP?", a: "The plan itself, the support provided, each milestone review with its outcome, and the final conclusion, all dated." },
      { q: "What should a performance improvement plan include?", a: "The specific gaps with evidence, measurable targets, the support the employer will provide, milestone check-in points, and the consequences at the end of the period." },
      { q: "What support should an employer provide during a PIP?", a: "Coaching, training or resources that help the employee close the gap. A plan that asks for change without support is set up to fail." },
      { q: "Can PIP targets be changed midway?", a: "Not without the employee's agreement. Changing targets during the plan without agreement is one of the most common PIP mistakes." },
      { q: "What are the possible outcomes of a PIP?", a: "The plan can be completed, extended or not met. The outcome and what follows should be recorded at the end of the period." },
      { q: "Should an employee be surprised by a PIP?", a: "No. Concerns should be raised before a PIP starts, so the plan is a structured next step rather than a surprise." },
    ],
    phrases: ["pip", "pips", "improvement plan"],
    seo: {
      title: "Performance Improvement Plans (PIPs): A Fair Process",
      description: "How to run a fair performance improvement plan: naming the gap, measurable targets, support, milestone check-ins, documentation and common PIP mistakes.",
    },
  },
  {
    slug: "one-on-one-meetings",
    name: "1-on-1 meetings",
    category: "Performance & growth",
    title: "The 1-on-1 is the employee's meeting, held in the manager's diary.",
    standfirst:
      "Regular one-to-one conversations are where problems surface early, goals stay current and trust is built. They only work if they are regular and recorded.",
    definition: [
      "A 1-on-1 is a recurring private meeting between a manager and a direct report, focused on the employee's work, priorities, obstacles, development and wellbeing rather than on status updates.",
    ],
    whyItMatters: [
      "Most issues that end up in reviews, grievances or resignations were visible earlier to someone. The 1-on-1 is the regular place where they can be raised while still small.",
    ],
    challenges: [
      { title: "Cancelled first", body: "1-on-1s are the easiest meeting to move, so they are moved most." },
      { title: "Status updates", body: "Meetings that recite task lists crowd out the conversations that matter." },
      { title: "No continuity", body: "Without notes and action items, each meeting starts from zero." },
    ],
    process: [
      { step: "Set a cadence", body: "Weekly or fortnightly, at a protected time." },
      { step: "Share an agenda", body: "Both sides add topics beforehand, with the employee's first." },
      { step: "Agree actions", body: "Capture action items with owners and dates." },
      { step: "Carry forward", body: "Open each meeting with the last meeting's actions." },
    ],
    practices: [
      "Let the employee own the agenda.",
      "Keep private notes separate from shared agenda items.",
      "Reschedule rather than cancel.",
    ],
    mistakes: [
      "Turning 1-on-1s into status meetings.",
      "Not recording agreed actions.",
      "Holding them only when there is a problem.",
    ],
    software:
      "Meeting software keeps a shared agenda between meetings, tracks action items with reminders, and preserves the history of the conversation so each 1-on-1 builds on the last.",
    inHRMagix: [
      { label: "1-on-1s & Meetings", href: "/features/meetings", note: "Shared agendas, action items with reminders and private manager notes." },
      { label: "Meetings", href: "/solutions#app-features", note: "Meetings, in the Engagement area of the app." },
    ],
    faqs: [
      { q: "How often should 1-on-1s happen?", a: "Weekly or fortnightly is common. Consistency matters more than frequency: a reliable fortnightly meeting is worth more than an erratic weekly one." },
      { q: "What should a 1-on-1 cover?", a: "The employee's priorities, obstacles, development, feedback in both directions, and how they are doing, rather than a status update that could be written." },
      { q: "Should 1-on-1 notes be private?", a: "Agenda items and agreed actions are usually shared. Managers often keep separate private notes as well, which should be written as if the employee might read them." },
      { q: "Who should set the agenda for a 1-on-1?", a: "Both sides can add topics beforehand, but the employee should own the agenda and have their items discussed first. It is the employee's meeting, held in the manager's diary." },
      { q: "Is it okay to cancel a 1-on-1?", a: "It is better to reschedule than cancel. 1-on-1s are the easiest meeting to move, which is why they are moved most, and repeated cancellations break the continuity that makes them useful." },
      { q: "How do you keep continuity between 1-on-1 meetings?", a: "Capture action items with owners and dates, and open each meeting by reviewing the last meeting's actions. Without notes, each meeting starts from zero." },
      { q: "What is the difference between a 1-on-1 and a status meeting?", a: "A status meeting recites task lists. A 1-on-1 focuses on the employee's priorities, obstacles, development and wellbeing, which status updates tend to crowd out." },
      { q: "Why do 1-on-1 meetings matter?", a: "Most issues that end up in reviews, grievances or resignations were visible earlier to someone. A regular 1-on-1 is where they can be raised while still small." },
    ],
    phrases: ["1-on-1", "1-on-1s", "one-on-one"],
    seo: {
      title: "1-on-1 Meetings: Running Effective One-to-Ones",
      description: "Why 1-on-1 meetings matter, setting a cadence, shared agendas, action items and continuity, and the mistakes that turn them into status updates.",
    },
  },
];
