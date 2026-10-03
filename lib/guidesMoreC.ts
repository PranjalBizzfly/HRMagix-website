import type { Guide } from "./guides";

export const guidesMoreC: Guide[] = [
  /* ================================================================= */
  {
    slug: "conducting-exit-interviews",
    number: "27",
    title: "Conducting exit interviews that tell you something",
    audience:
      "HR generalists and people managers who run exit conversations, and the HR lead who has to turn them into something leadership will act on.",
    outcome:
      "Decide who runs the interview and when, ask exit interview questions that produce usable answers, and record them so patterns become visible across leavers.",
    minutes: 11,
    seo: {
      title: "Exit Interview Questions and How to Run the Conversation",
      description:
        "How to run exit interviews: who should conduct them, when, which exit interview questions work, how to record answers and turn them into patterns to act on.",
      keywords: ["exit interview questions", "exit interview process", "how to conduct an exit interview", "exit interview form"],
    },
    opening: [
      "Most exit interviews fail without anyone noticing. The leaver is polite, says the opportunity was too good to refuse, the notes go into a folder, and nobody reads them again. The interview happened; nothing was learned.",
      "The fix is not a longer questionnaire. It is deciding who asks, when, what is recorded in a form that can be compared across people, and who is responsible for reading the results. This guide covers the conversation itself and the work around it that makes it worth having.",
    ],
    chapters: [
      {
        title: "Decide who conducts it, and it is rarely the manager",
        body: [
          "The single biggest influence on how candid a leaver is, is who sits across the table. If the reason for leaving is the manager, an interview with the manager will produce a courteous fiction.",
          "An HR person outside the leaver's reporting line is the usual choice. In a small company with no HR function, a founder or a senior person from another team can do it, provided the leaver does not report to them and does not expect to need a reference from them.",
        ],
        watch:
          "Tell the leaver who will see what they say. A promise of confidentiality you cannot keep, because a serious allegation must be acted on, is worse than no promise.",
      },
      {
        title: "Time it after the decision, before the last day",
        body: [
          "Too early and the leaver is still negotiating, or still unsure whether a counter-offer is coming. On the last day they are handing over, collecting clearances and saying goodbye, and the interview becomes a box to tick.",
          "A slot in the final week or two, after handover is underway, tends to work. Some employers add a short written follow-up a month or two after exit, when the person has nothing left to lose and has some distance. If you do this, keep it to a handful of questions.",
        ],
      },
      {
        title: "Ask questions that produce comparable answers",
        body: [
          "Open questions give you texture; fixed questions give you something you can count. Use both. A short set of rated questions asked identically of every leaver, followed by open questions that let the person explain.",
          "Avoid questions that invite a polite answer, such as 'Did you enjoy working here?'. Ask about specific things the person experienced and specific moments when they started to think about leaving.",
        ],
        list: {
          style: "ordered",
          items: [
            "When did you first start looking, and what happened around that time?",
            "What would have had to be different for you to stay?",
            "How clear were the expectations of your role, and did they change without warning?",
            "How would you describe the support you got from your manager, with an example?",
            "Was your pay and progression explained to you in a way you understood?",
            "What is the new role offering that this one did not?",
            "Is there anything you think we should know that you have not said before?",
          ],
        },
      },
      {
        title: "Run the conversation, and listen more than you write",
        body: [
          "Start by explaining the purpose and what will happen to the answers. Then let the person talk. Follow up on anything specific: a name, a project, a month. Specifics are what make an exit note useful later.",
          "Do not argue, defend decisions or try to change the person's mind in this meeting. If the leaver raises something that sounds like harassment, discrimination, fraud or a safety issue, stop treating it as feedback. It is a complaint, and it goes into the relevant procedure with the person's knowledge.",
        ],
        watch:
          "An allegation of sexual harassment raised in an exit interview should be routed to the Internal Committee process, not filed as exit feedback. See the guide on setting up a POSH Internal Committee.",
      },
      {
        title: "Record it in a shape that can be compared",
        body: [
          "Write the notes on the same day, under fixed headings: primary reason for leaving, secondary reasons, ratings, specific incidents, and whether the person would consider returning. Use a short, fixed list of reason codes so that 'better pay', 'compensation' and 'salary' do not become three categories.",
          "Keep the record with the employee's file, with access limited to HR. Exit notes often contain comments about named colleagues, and treating them as general reading material undermines the next leaver's willingness to be honest.",
        ],
      },
      {
        title: "Read them in batches, and report the pattern",
        body: [
          "A single exit interview is an anecdote. Twenty, grouped by team, manager, tenure band and reason code, are evidence. Review them on a fixed schedule, quarterly is common, alongside attrition numbers for the same period.",
          "Report the patterns, not the individuals. 'Four of six leavers from one team in the last two quarters cited unclear role changes' is something a leadership team can act on. A list of quotes attributed to named people is not, and it will not stay confidential.",
        ],
      },
    ],
    checklist: [
      "Interviewer chosen from outside the leaver's reporting line",
      "Interview scheduled in the final weeks, after handover has started",
      "Leaver told who will see the notes and what cannot be kept confidential",
      "Same rated questions asked of every leaver, plus open follow-ups",
      "Complaints raised in the interview routed to the right procedure",
      "Notes written the same day under fixed headings and reason codes",
      "Records stored with restricted access",
      "Results reviewed in batches with attrition data, and patterns reported",
    ],
    related: [
      { label: "An Employee Exit Checklist, From Resignation to Full and Final", href: "/resources/hr-guides/employee-exit-checklist", note: "Where the exit interview sits among the other clearance steps." },
      { label: "Finding Out Why People Leave: An Attrition Analysis", href: "/resources/hr-guides/attrition-analysis", note: "Combining exit reasons with attrition numbers." },
      { label: "Employee Offboarding Guide", href: "/hr/topics/employee-offboarding", note: "The wider offboarding process, explained." },
      { label: "Relieving Letter Template", href: "/resources/hr-letter-templates/relieving-letter", note: "The document the leaver receives at the end." },
    ],
    faqs: [
      { q: "Should exit interviews be compulsory?", a: "You can make the meeting part of the exit process, but you cannot make anyone answer candidly. Offer it as standard, explain why it matters, and accept a short or declined interview without consequence." },
      { q: "Should the reporting manager conduct the exit interview?", a: "Usually not. If the manager is part of the reason for leaving, the leaver is unlikely to say so to them. Someone in HR or a senior person outside the reporting line tends to get more useful answers." },
      { q: "What if the leaver makes a serious allegation?", a: "Treat it as a complaint rather than feedback. Explain that it has to be looked into, and route it to the appropriate process, such as a workplace investigation or, for sexual harassment, the Internal Committee." },
      { q: "Is a written exit form enough?", a: "A form gives you comparable ratings, but people rarely explain the real reason in writing. A short form plus a conversation works better than either alone." },
    ],
  },

  /* ================================================================= */
  {
    slug: "policy-acknowledgements",
    number: "28",
    title: "Issuing policies and getting a policy acknowledgement you can rely on",
    audience:
      "HR and compliance owners who publish company policies and need to show, later, that each employee received and accepted them.",
    outcome:
      "Issue a policy so employees can find it, collect a policy acknowledgement from each person, chase the gaps and produce the record when it is asked for.",
    minutes: 10,
    seo: {
      title: "Policy Acknowledgement: Issuing Policies and Proving Sign-off",
      description:
        "How to issue company policies and collect a policy acknowledgement from every employee: versions, wording, reminders, new joiners and the records worth keeping.",
      keywords: ["policy acknowledgement", "policy acknowledgement form", "employee policy sign off", "policy acceptance tracking"],
    },
    opening: [
      "A policy that nobody can show was received is a weak policy. When a disciplinary case turns on whether an employee knew the rule, the first question is usually: what proof is there that they were told? An email sent to a distribution list two years ago is not much of an answer.",
      "Acknowledgement is the record that a specific person received a specific version of a specific policy on a specific date. This guide covers how to issue policies so that record exists for everyone, including the people who join after the launch.",
    ],
    chapters: [
      {
        title: "Version every policy before you issue it",
        body: [
          "An acknowledgement means nothing unless you can say which text was acknowledged. Give each policy a version number and an effective date, and keep every superseded version rather than overwriting it.",
          "When a policy changes significantly, issue the new version and collect a fresh acknowledgement. A typo correction does not need one; a change to a rule, an entitlement or a consequence does.",
        ],
        watch:
          "Changes to terms of employment, as opposed to workplace rules, may need more than acknowledgement, and in some establishments standing orders have their own certification procedure. Take advice before treating a policy update as a change to contract terms.",
      },
      {
        title: "Publish where people will actually find it",
        body: [
          "A policy should live in one place that every employee can open at any time, not only in the email that announced it. If people cannot find the current version, they will rely on what a colleague remembers.",
          "HRMagix keeps company policies in one list (All Policies) that employees can open in the app. Whatever tool you use, the test is the same: can an employee find the current version in under a minute without asking HR?",
        ],
      },
      {
        title: "Word the acknowledgement precisely",
        body: [
          "The acknowledgement statement should be short and specific. It names the policy and the version, and says the employee has received it, read it, and had the chance to ask questions. It should not pretend to be a contract.",
        ],
        list: {
          style: "bullet",
          items: [
            "Policy name, version number and effective date",
            "A statement that the employee has received and read it",
            "Where to raise questions, and by when",
            "The employee's name, an identifier, and the date and time of acknowledgement",
            "For translated policies, which language version was acknowledged",
          ],
        },
      },
      {
        title: "Give a deadline, then chase the gaps",
        body: [
          "Set a window for acknowledgement, a couple of weeks is typical, and decide in advance who follows up with people who have not responded. Managers are usually better at this than HR, because they can ask in person.",
          "Run a list of outstanding acknowledgements at the deadline. Long leave, field staff without regular access to a device and people who have resigned will show up here. For workers without devices, a supervised sign-off on paper, later recorded in the system, is a legitimate route.",
        ],
      },
      {
        title: "Build acknowledgement into onboarding",
        body: [
          "The launch is the easy part. The record breaks when people join afterwards and nobody asks them to acknowledge the policies that were issued before they arrived.",
          "Make the core set, code of conduct, harassment, leave, attendance, data handling, part of the joining checklist, so a new joiner's acknowledgements are complete before their first month ends.",
        ],
      },
      {
        title: "Keep the record retrievable per person",
        body: [
          "The question you will be asked is narrow: did this person acknowledge this policy, which version, and when. You should be able to answer that in minutes, for any employee, including those who have left.",
          "Keep acknowledgements for at least as long as you keep the rest of the employee file. Check the retention period your advisers recommend, since claims can arise after someone leaves.",
        ],
      },
    ],
    checklist: [
      "Every policy carries a version number and effective date",
      "Superseded versions kept, not overwritten",
      "Policies published in one place employees can open any time",
      "Acknowledgement text names the policy and version and is not written as a contract",
      "Deadline set and follow-up owner named",
      "Paper route available for workers without devices",
      "Core policies included in the onboarding checklist",
      "Per-person acknowledgement record retrievable, including for leavers",
    ],
    related: [
      { label: "Workplace Policy Library", href: "/policy-centre/workplace-policy-library", note: "Policy templates to adapt, issue and acknowledge." },
      { label: "Workplace Policy Library", href: "/policy-centre/workplace-policy-library", note: "Sample policies to adapt before issuing." },
      { label: "Writing an Employee Handbook People Will Actually Open", href: "/resources/hr-guides/writing-an-employee-handbook", note: "Bringing policies together into one document." },
      { label: "The Employee Onboarding Checklist, From Signed Offer to Day Thirty", href: "/resources/hr-guides/employee-onboarding-checklist", note: "Where joiner acknowledgements belong." },
    ],
    faqs: [
      { q: "Is an email read receipt enough as acknowledgement?", a: "It shows the email was opened, not that the policy was read or which version was attached. A recorded acknowledgement against a named version is a much stronger record." },
      { q: "Do we need a new acknowledgement every time a policy changes?", a: "For material changes to a rule, entitlement or consequence, yes. Minor corrections to wording or formatting usually do not need one, but keep the new version on record." },
      { q: "What if an employee refuses to acknowledge a policy?", a: "Record that the policy was issued to them, when and how, and that they declined to acknowledge it. Ask what their concern is. If the policy affects terms of employment, take advice before proceeding." },
      { q: "How do we handle workers without email or smartphones?", a: "Brief them in person, in a language they understand, and take a signed acknowledgement on paper. Then record it against their employee record so the evidence is in one place." },
    ],
  },

  /* ================================================================= */
  {
    slug: "background-verification",
    number: "29",
    title: "Running employee background verification with consent and proportion",
    audience:
      "HR and talent teams setting up or tidying a background verification process, whether done in-house or through a verification agency.",
    outcome:
      "Decide what to check for which roles, collect consent properly, time the checks against the offer, and handle a discrepancy fairly.",
    minutes: 12,
    seo: {
      title: "Employee Background Verification: Scope, Consent and Timing",
      description:
        "A practical guide to employee background verification in India: deciding the scope by role, collecting consent, timing, discrepancies and records.",
      keywords: ["employee background verification", "bgv process", "background check consent", "pre-employment verification"],
    },
    opening: [
      "Background verification is the employer checking that what a candidate has told them is true: identity, education, previous employment, and in some roles, address, references or criminal records. It protects the organisation and, done properly, it is fair to the candidate.",
      "Done badly, it collects far more personal data than it needs, runs without clear consent, and lets a minor discrepancy end an offer without the candidate being heard. This guide sets out a proportionate process. It is not legal advice; data protection obligations in particular should be confirmed with your advisers.",
    ],
    chapters: [
      {
        title: "Set the scope by role, not one package for everyone",
        body: [
          "Not every role needs every check. A finance role handling payments justifies more scrutiny than an entry-level role with no access to money or sensitive data. Decide the checks per role family and write them down, so candidates in the same role are treated the same way.",
        ],
        list: {
          style: "bullet",
          items: [
            "Identity and address: for most roles",
            "Education: where a qualification is a genuine requirement of the role",
            "Previous employment: dates, designation and, where obtainable, reason for leaving",
            "Professional references: for senior or client-facing roles",
            "Criminal record or court record checks: only where the role justifies it, and through lawful channels",
            "Credit or financial checks: rarely, and only for roles where there is a clear reason",
          ],
        },
        watch:
          "Collect only what the role needs. Under India's data protection law, personal data is meant to be processed for a specified purpose and limited to what that purpose requires. Confirm the current position with your advisers.",
      },
      {
        title: "Get informed consent before any check starts",
        body: [
          "Tell the candidate, in writing, which checks will be run, who will run them (including any agency), what data will be shared with that agency, how long it will be kept and whom to contact with questions. Then ask for their consent.",
          "Consent should be specific to verification and separate from the offer letter's other terms, not buried in a clause. Keep the signed or recorded consent with the verification file.",
        ],
        watch:
          "The rules on consent, notice and processing of personal data under the Digital Personal Data Protection Act 2023 and the rules made under it should be checked for your situation, including how long verification data may be retained.",
      },
      {
        title: "Decide when the checks run relative to the offer",
        body: [
          "Two common patterns. Checks run after the offer is accepted but before joining, with the offer stated to be conditional on satisfactory verification. Or checks start before joining and complete in the first weeks, with continued employment conditional on the outcome.",
          "Whichever you use, say so in the offer letter, and say what happens if a check is unsatisfactory. A candidate who resigns from a current job on the strength of your offer is entitled to know the conditions attached to it.",
        ],
      },
      {
        title: "Brief and supervise the agency, if you use one",
        body: [
          "An agency acts on your behalf, so its conduct reflects on you. Agree in writing what it checks, how it contacts previous employers and references, how it stores data, when it deletes it and what it may not do, such as contacting a current employer without the candidate's permission.",
          "Ask for reports in a consistent format, with each check marked clear, discrepant or unable to verify, and with the evidence behind any discrepancy.",
        ],
      },
      {
        title: "Handle a discrepancy by asking first",
        body: [
          "Many discrepancies are innocent: a former employer that closed, a designation that was renamed, dates off by a month. Before acting, tell the candidate what was found and give them a chance to explain or provide documents.",
          "Decide in advance which discrepancies are material for which roles. A falsified degree for a role that requires it is a different matter from a three-week difference in a joining date from six years ago. Record the decision and the reason.",
        ],
      },
      {
        title: "Store the results, and delete what you no longer need",
        body: [
          "Keep the outcome, the consent and key evidence on the employee's file, with access limited to the people who need it. Raw documents collected by an agency should not sit indefinitely in shared folders.",
          "For candidates who do not join, set a retention period and delete their verification data at the end of it.",
        ],
      },
    ],
    checklist: [
      "Checks defined per role family and written down",
      "Written notice of each check and the agency involved",
      "Separate consent recorded before checks begin",
      "Offer letter states that the offer is conditional and what happens if a check fails",
      "Agency agreement covers scope, contact rules, storage and deletion",
      "Materiality of discrepancies decided per role in advance",
      "Candidate heard before any adverse decision",
      "Retention period set for joiners and non-joiners",
    ],
    related: [
      { label: "Appointment Letter Template", href: "/resources/hr-letter-templates/appointment-letter", note: "Where verification conditions are usually stated." },
      { label: "The Employee Onboarding Checklist, From Signed Offer to Day Thirty", href: "/resources/hr-guides/employee-onboarding-checklist", note: "Where verification fits between offer and day one." },
      { label: "Deciding Who Can See Which Employee Data", href: "/resources/hr-guides/hr-data-access-control", note: "Limiting who can see verification results." },
      { label: "Documents Module", href: "/features/documents", note: "Keeping employee documents in one place." },
    ],
    faqs: [
      { q: "Is background verification mandatory in India?", a: "For most private employers there is no general legal requirement to verify every employee, though some regulated sectors and clients impose their own requirements. Most employers do it as a matter of risk management." },
      { q: "Do we need the candidate's consent?", a: "You should get informed consent before running checks, particularly because personal data is shared with third parties. Confirm the current requirements under the data protection law with your advisers." },
      { q: "Can we withdraw an offer because of a verification discrepancy?", a: "If the offer was clearly conditional on verification, a material discrepancy can justify withdrawal. Give the candidate a chance to explain first, and take advice in unclear or senior cases." },
      { q: "How long should we keep verification data?", a: "Only as long as you need it for a stated purpose. Set a retention period for joiners and a shorter one for candidates who did not join, and confirm both against current data protection rules." },
    ],
  },

  /* ================================================================= */
  {
    slug: "workplace-investigations",
    number: "30",
    title: "Running a workplace investigation that is fair and holds up",
    audience:
      "HR managers and senior leaders who have received a complaint about misconduct and need to find out what happened before anyone decides anything.",
    outcome:
      "Plan and run an investigation, interview the parties and witnesses, weigh the evidence and write a report that a decision-maker can rely on.",
    minutes: 14,
    seo: {
      title: "Workplace Investigation Process: A Step-by-Step Guide",
      description:
        "A workplace investigation process for Indian employers: scoping the complaint, choosing an investigator, interviews, evidence, findings and the report.",
      keywords: ["workplace investigation process", "how to investigate an employee complaint", "internal investigation hr", "misconduct investigation"],
    },
    opening: [
      "An investigation answers one question: on the balance of the evidence, what happened? It does not decide the outcome. Keeping fact-finding separate from the decision about consequences is the most important thing in this guide, and the most commonly skipped.",
      "This covers complaints of misconduct generally: conduct, fraud, policy breaches, bullying. Complaints of sexual harassment at work follow the separate statutory route through the Internal Committee, covered in its own guide. Where disciplinary action may follow, your certified standing orders or service rules may set procedure you must follow; check them first. This is guidance on practice, not legal advice.",
    ],
    chapters: [
      {
        title: "Receive the complaint and decide the route",
        body: [
          "Acknowledge the complaint in writing and record exactly what is alleged, by whom, against whom, and when. Ask the complainant what outcome they are looking for; it does not bind you, but it tells you whether they expect a formal process.",
          "Then decide the route. Some matters can be resolved informally with both parties' agreement. Others, involving serious misconduct, a pattern, or a risk to others, need a formal investigation. Sexual harassment complaints go to the Internal Committee regardless of how they arrived.",
        ],
        watch:
          "Do not start interviewing before you have decided the route. An informal chat that turns into evidence-gathering halfway through is hard to defend later.",
      },
      {
        title: "Appoint an investigator with no stake in the outcome",
        body: [
          "The investigator should not be in the reporting line of either party, should not be a witness, and should not be the person who will decide the outcome. In a small organisation this may mean an external investigator.",
          "Write terms of reference: the specific allegations to be investigated, the timeframe, who the investigator reports to, and what they are not to decide. An investigator who drifts into new allegations without the scope being widened formally creates a fairness problem.",
        ],
      },
      {
        title: "Consider interim measures, without prejudging",
        body: [
          "Sometimes the parties cannot keep working side by side while the investigation runs, or there is a risk that evidence will be interfered with. Options include changing reporting lines temporarily, separating shifts, or, in serious cases, suspension pending enquiry.",
          "Any interim measure should be stated in writing as non-disciplinary and not a finding. Suspension pending enquiry may carry obligations, including on subsistence allowance, under standing orders or applicable law; check what applies to you before using it.",
        ],
      },
      {
        title: "Gather documents before interviews",
        body: [
          "Collect what exists before anyone is interviewed: emails, messages, attendance and access logs, expense records, CCTV where lawfully held, and any earlier complaints. Documents are more reliable than recollection and help you ask better questions.",
          "Preserve the evidence. Ask IT to retain mailboxes and logs that might otherwise be deleted on a routine schedule.",
        ],
      },
      {
        title: "Interview in a fixed order, and keep notes",
        body: [
          "The usual order is complainant, then witnesses, then the person complained against, then follow-up with anyone whose account needs testing against new evidence. The person complained against must be told the substance of the allegations and given a genuine chance to respond.",
        ],
        list: {
          style: "ordered",
          items: [
            "Explain the purpose, the confidentiality expected, and that retaliation is prohibited",
            "Ask open questions first, then specific ones about dates, places and words used",
            "Ask what documents or witnesses could support the account",
            "Put contrary evidence to the person and record their response",
            "Read back or share the notes, and ask the person to confirm or correct them",
          ],
        },
        watch:
          "Whether a person may be accompanied at an interview, and by whom, may be governed by your standing orders or service rules. Check before the first interview, not after an objection.",
      },
      {
        title: "Weigh the evidence and write findings, not a verdict",
        body: [
          "For each allegation, set out the evidence for and against, say which evidence you prefer and why, and state whether the allegation is substantiated, not substantiated, or could not be determined. Workplace investigations usually work on the balance of probabilities, not proof beyond doubt.",
          "The report goes to the decision-maker. It should be readable by someone who was not involved, and it should not recommend a specific penalty unless the terms of reference ask for one. Tell both parties the outcome in appropriate detail, and record what was done.",
        ],
      },
    ],
    checklist: [
      "Complaint recorded in writing and acknowledged",
      "Route decided: informal, formal investigation, or Internal Committee",
      "Standing orders or service rules checked for required procedure",
      "Independent investigator appointed with written terms of reference",
      "Interim measures stated in writing as non-disciplinary",
      "Documents and logs collected and preserved before interviews",
      "Person complained against told the allegations and heard",
      "Interview notes confirmed by each interviewee",
      "Report sets out findings per allegation with reasons",
      "Decision taken separately by someone other than the investigator",
    ],
    related: [
      { label: "Workplace Grievances Guide", href: "/hr/topics/workplace-grievances", note: "How concerns are raised before an investigation begins." },
      { label: "Setting Up and Running a POSH (Prevention of Sexual Harassment) Internal Committee", href: "/resources/hr-guides/posh-internal-committee", note: "The statutory route for sexual harassment complaints." },
      { label: "Show Cause Notice Template", href: "/resources/hr-letter-templates/show-cause-notice", note: "A common next step when findings support action." },
      { label: "Workplace Grievances Guide", href: "/hr/topics/workplace-grievances", note: "How concerns are raised and handled early." },
    ],
    faqs: [
      { q: "Who should investigate a workplace complaint?", a: "Someone with no involvement in the matter, outside the reporting line of both parties, and not the person who will decide the outcome. Small organisations often use an external investigator." },
      { q: "Can we suspend an employee during an investigation?", a: "Suspension pending enquiry is used in serious cases, but it may carry obligations under standing orders or applicable law, including subsistence allowance. Check what applies to you and state that the suspension is not a finding." },
      { q: "What standard of proof applies?", a: "Workplace investigations generally decide on the balance of probabilities, meaning whether something is more likely than not to have happened, rather than proof beyond reasonable doubt." },
      { q: "Should the investigator recommend a penalty?", a: "Usually not. The investigator establishes facts; the decision-maker decides consequences. Keeping these separate makes the outcome easier to defend." },
      { q: "Is a sexual harassment complaint handled the same way?", a: "No. Complaints of sexual harassment at the workplace go through the Internal Committee under the POSH Act 2013, which sets its own procedure and timelines." },
    ],
  },

  /* ================================================================= */
  {
    slug: "posh-internal-committee",
    number: "31",
    title: "Setting up and running a POSH (Prevention of Sexual Harassment) Internal Committee",
    audience:
      "Founders, HR heads and compliance owners at organisations with ten or more employees who need to constitute an Internal Committee, or check that the one they have works.",
    outcome:
      "Understand how a POSH Internal Committee is constituted, what it does when a complaint arrives, and what the organisation has to keep and report around it.",
    minutes: 14,
    seo: {
      title: "POSH Internal Committee: How to Constitute and Run the IC",
      description:
        "How to set up a POSH Internal Committee: composition under the 2013 Act, the external member, training, handling a complaint, timelines and the annual report.",
      keywords: ["posh internal committee", "internal complaints committee", "posh committee composition", "ic under posh act"],
    },
    opening: [
      "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013, usually called the POSH Act, requires employers to constitute an Internal Committee to receive and inquire into complaints of sexual harassment. The policy says what is prohibited; the committee is the body that makes the policy enforceable.",
      "This guide is about the committee: who sits on it, how it is set up, and how it works when a complaint arrives. The requirements summarised here come from the Act and its rules, but they are summarised, and the full text, any state-specific notifications and current guidance should be checked with a qualified adviser before you rely on them. Nothing here is legal advice.",
    ],
    chapters: [
      {
        title: "Check whether you need one, and how many",
        body: [
          "The Act requires an Internal Committee at each office or administrative unit of an employer with ten or more workers. Organisations with offices in several locations commonly constitute a committee for each location or administrative unit, rather than one committee for everyone.",
          "Where an establishment has fewer than ten workers, complaints go to a Local Committee constituted by the district. Even then, the employer still has duties under the Act, including having a policy and making employees aware of where to complain.",
        ],
        watch:
          "How 'workplace' and 'employee' are defined under the Act is wider than many employers assume, and can include interns, trainees, contract workers and visits to client sites. Check the definitions against your own workforce.",
      },
      {
        title: "Constitute the committee with the required composition",
        body: [
          "The Act sets the composition. As commonly summarised, it is: a Presiding Officer who is a woman employed at a senior level; at least two members from among employees, preferably committed to the cause of women or with experience in social work or legal knowledge; and one external member from a non-governmental organisation or association committed to the cause of women, or a person familiar with issues relating to sexual harassment. At least half of the members must be women.",
          "Members are nominated by the employer, by written order, for a term. Record the order, the names, the term and the date, and display the composition where employees can see it.",
        ],
        list: {
          style: "bullet",
          items: [
            "Presiding Officer: a senior woman employee",
            "At least two internal members",
            "One external member, from outside the organisation",
            "At least half of all members women",
            "Members nominated by written order, for a stated term",
          ],
        },
        watch:
          "Composition, term, and the rules on the external member's fees and qualifications are set by the Act and its rules. Verify them against the current text before constituting the committee.",
      },
      {
        title: "Choose members who can actually do the work",
        body: [
          "Seniority alone does not make a good member. Members need to be trusted, discreet, able to give time at short notice, and not in a reporting relationship that would make it hard to act independently. Avoid placing someone on the committee who is likely to be a party or witness in complaints, such as the only person who manages a large team.",
          "The external member brings independence and experience. Agree their engagement terms in writing, including fees and confidentiality.",
        ],
      },
      {
        title: "Train the committee and tell everyone it exists",
        body: [
          "Members need to understand the Act, the definition of sexual harassment, how to conduct an inquiry, the principles of natural justice and how to write a report. Train them when they are appointed and refresh it periodically.",
          "Employees need to know the committee exists, who is on it and how to reach them. Display this at the workplace, put it in the policy and the handbook, and cover it at induction. A committee nobody knows about cannot receive complaints.",
        ],
      },
      {
        title: "Handle a complaint: the procedure in outline",
        body: [
          "The Act and rules set the procedure and its time limits. In outline: a complaint is made in writing to the committee within a time limit from the incident, which may be extended in some circumstances; the committee may, at the complainant's request, attempt conciliation before inquiry, but monetary settlement cannot be the basis of conciliation; otherwise it conducts an inquiry, gives both parties a hearing, and completes the inquiry within a set period; it then issues a report with recommendations to the employer, who must act on them within a set period.",
          "During the inquiry, the committee may recommend interim relief for the complainant, such as a transfer or leave. Confidentiality of the identities and proceedings is a statutory requirement, not a courtesy.",
        ],
        watch:
          "The specific time limits for filing, inquiry completion, report and employer action, and the rules on extension and appeal, must be checked against the current Act and rules. Do not rely on a summary for deadlines.",
      },
      {
        title: "Keep records and file the annual report",
        body: [
          "The committee keeps records of complaints and proceedings securely and confidentially. The Act requires the committee to prepare an annual report and the employer to include certain information about complaints in its own annual reporting, with the details depending on the type of organisation.",
          "Set a calendar reminder for the annual report and for the end of each member's term, so the committee never lapses without anyone noticing.",
        ],
      },
    ],
    checklist: [
      "Locations and units requiring a committee identified",
      "Composition checked against the current Act and rules",
      "Written nomination order with names, term and date",
      "External member engaged on written terms",
      "Members trained on the Act and inquiry procedure",
      "Committee details displayed and included in the policy and handbook",
      "Complaint procedure and time limits documented from the current rules",
      "Confidential record-keeping arranged",
      "Annual report and member term renewals in the calendar",
    ],
    related: [
      { label: "Sexual Harassment Policy", href: "/policy-centre/workplace-policy-library/sexual-harassment", note: "The policy the committee enforces." },
      { label: "Running a Workplace Investigation That Is Fair and Holds Up", href: "/resources/hr-guides/workplace-investigations", note: "How other misconduct complaints are investigated." },
      { label: "Workplace Harassment Policy", href: "/policy-centre/workplace-policy-library/workplace-harassment", note: "Covers harassment outside the POSH Act's scope." },
      { label: "Workplace Grievances Guide", href: "/hr/topics/workplace-grievances", note: "How concerns are raised and handled early." },
    ],
    faqs: [
      { q: "Is an Internal Committee mandatory?", a: "Under the POSH Act 2013, an employer with ten or more workers at an office or unit must constitute an Internal Committee there. Check the current Act and any state notifications for how this applies to you." },
      { q: "Does the committee need an external member?", a: "Yes. The Act requires one member from outside the organisation, such as someone from an NGO committed to the cause of women or a person familiar with sexual harassment issues. Verify the qualification rules in the current rules." },
      { q: "Can the Presiding Officer be from another office?", a: "The Act addresses situations where a senior woman employee is not available at a particular unit. The exact provision should be checked with an adviser before you nominate." },
      { q: "Can complaints be settled with money?", a: "The Act permits conciliation at the complainant's request, but states that monetary settlement cannot be the basis of conciliation." },
      { q: "Is this guide legal advice?", a: "No. It summarises the committee's set-up and procedure for orientation. Confirm composition, time limits and reporting duties against the current Act and rules with a qualified adviser." },
    ],
  },

  /* ================================================================= */
  {
    slug: "statutory-registers",
    number: "32",
    title: "Maintaining statutory registers without a filing cabinet crisis",
    audience:
      "HR, payroll and compliance staff responsible for keeping the registers and records labour law requires, especially at multi-location or growing employers.",
    outcome:
      "Work out which statutory registers apply to each establishment, keep them from source data rather than retyping, and produce them on request.",
    minutes: 12,
    seo: {
      title: "Statutory Registers in HR: Which to Keep and How to Keep Them",
      description:
        "A guide to statutory registers for Indian employers: finding which apply per establishment, keeping them from payroll and attendance data, retention and access.",
      keywords: ["statutory registers hr", "statutory registers under labour laws", "wage register", "labour law registers and records"],
    },
    opening: [
      "Labour laws require employers to keep registers: of employees, wages, attendance, leave, overtime, deductions, fines, advances, accidents and more. Which ones apply depends on the laws your establishment falls under, the state it is in, and the number and type of workers.",
      "This is an area in transition. The four labour codes, in force since 21 November 2025, consolidate many older Acts and, through central and state rules, change the registers and formats required, with states framing their own rules. Treat any list here as a starting point to check, not a definitive statement of what you must keep. Confirm with your advisers and the current state rules.",
    ],
    chapters: [
      {
        title: "Map each establishment to the laws that apply",
        body: [
          "Start with a sheet per establishment: its state, whether it is a factory, shop or commercial establishment, or another type, its headcount, whether it engages contract labour, and which registrations it holds. That determines which laws apply, and the laws determine the registers.",
          "Do this per establishment, not per company. A company with a factory in one state and an office in another keeps different registers in each.",
        ],
        list: {
          style: "bullet",
          items: [
            "Shops and establishments or factories legislation, depending on the premises",
            "Wages: the Code on Wages (in force from 21 November 2025), with registers under the earlier wage Acts' rules where state rules are not yet final",
            "Social security: EPF, ESI, gratuity, maternity benefit, bonus",
            "Contract labour, where contractors' workers are engaged",
            "State-level laws such as professional tax and labour welfare fund, where the state operates them",
          ],
        },
        watch:
          "Registers and formats vary by state and are changing as the labour codes are implemented. Check the current state rules for each establishment rather than copying another location's set.",
      },
      {
        title: "List the registers and their prescribed formats",
        body: [
          "For each applicable law, list the registers or records it requires and the prescribed form, if any. Some states have moved to combined or simplified registers, or accept them electronically. Note this per establishment, with the source of the requirement.",
          "Common categories include a register of employees, a muster roll or attendance register, a wage register, registers of deductions, fines and advances, overtime, leave, and accidents. The exact names and forms differ by law and state.",
        ],
      },
      {
        title: "Generate registers from source data",
        body: [
          "The registers that fail inspections are usually the ones typed up separately at the end of the month, because they drift from the payroll that was actually paid. Derive registers from the same employee, attendance and payroll records that produced the salary.",
          "If your HR system produces reports in the prescribed format, use them. If not, build each register from an export of the processed payroll and attendance, not from a separate spreadsheet that somebody maintains by hand.",
        ],
        watch:
          "A register that disagrees with the payroll ledger or the bank transfer is worse than a late register. Reconcile the wage register to the payroll that was paid before signing it off.",
      },
      {
        title: "Decide where registers are kept and who signs them",
        body: [
          "Some laws require registers to be kept at the establishment, available for inspection. Where electronic maintenance is permitted, decide how they will be produced on site if an inspector asks. Name an owner per establishment, and decide who authenticates each register where a signature is required.",
        ],
      },
      {
        title: "Retain them for the required period",
        body: [
          "Each law sets a retention period for its records, and they differ. Keep registers for at least the longest applicable period, and longer where a dispute or claim is open.",
          "Store closed registers so they can still be retrieved by establishment and month. A box of loose printouts with no index meets the letter of retention and fails the first request.",
        ],
      },
      {
        title: "Review the set at least once a year",
        body: [
          "Headcount crosses thresholds, establishments open and close, contractors are engaged, and laws and rules change. Review each establishment's register list annually and whenever one of those things happens.",
        ],
      },
    ],
    checklist: [
      "Each establishment mapped to its state, type, headcount and applicable laws",
      "Register list per establishment with source of each requirement",
      "Current state rules and labour code status checked",
      "Registers generated from processed payroll and attendance data",
      "Wage register reconciled to payroll paid",
      "Owner named per establishment, and signing responsibility set",
      "Retention period recorded per register",
      "Annual review of the register list scheduled",
    ],
    related: [
      { label: "Wage Register", href: "/resources/hr-and-payroll-glossary/wage-register", note: "What the wage register records." },
      { label: "Preparing for a Labour Inspection Before the Notice Arrives", href: "/resources/hr-guides/labour-inspection-preparation", note: "Where registers are tested." },
      { label: "Shops and Establishments Acts", href: "/resources/labour-law/shops-and-establishments-act", note: "The state law behind many office registers." },
      { label: "Compliance", href: "/solutions/compliance", note: "How statutory heads are derived in payroll." },
    ],
    faqs: [
      { q: "Which statutory registers does every employer need?", a: "There is no single list. It depends on the laws that apply to each establishment, its state and its workforce. Map each establishment first, then check the current state rules." },
      { q: "Can registers be kept electronically?", a: "Many states and laws now permit electronic registers, but the conditions vary. Check the current rules for each establishment and make sure you can produce them on site if asked." },
      { q: "Do the labour codes change the registers?", a: "Yes. The labour codes came into force on 21 November 2025, and their rules consolidate and change several registers and formats. State rules differ and some are still in draft, so check the current position for each state." },
      { q: "How long should registers be kept?", a: "Each law sets its own retention period. Keep each register for the longest period that applies, and longer if a dispute is open." },
    ],
  },

  /* ================================================================= */
  {
    slug: "labour-inspection-preparation",
    number: "33",
    title: "Preparing for a labour inspection before the notice arrives",
    audience:
      "HR, administration and compliance leads at establishments that may be inspected under labour laws, including multi-site employers whose local managers would be the first point of contact.",
    outcome:
      "Keep the records an inspector is likely to ask for in a state you can produce, know what to do on the day, and respond to observations in an orderly way.",
    minutes: 11,
    seo: {
      title: "Labour Inspection Checklist: Records, Readiness and Response",
      description:
        "A labour inspection checklist for Indian employers: the records to keep ready, who handles the visit, what to do on the day and how to respond to observations.",
      keywords: ["labour inspection checklist", "labour inspection preparation", "labour department inspection", "inspector visit records"],
    },
    opening: [
      "Inspections are rarely a problem because of one big breach. They become a problem because registers do not match payroll, a licence expired, a notice was never displayed, or the person at the site did not know where anything was kept.",
      "How inspections are scheduled and conducted varies by state and by law, and is changing as the labour codes are implemented, with some states using web-based or randomised inspection schemes. This guide covers readiness that applies in most settings. It is not legal advice; check the current rules for each establishment.",
    ],
    chapters: [
      {
        title: "Know what you are inspectable under",
        body: [
          "Different laws have different inspectors and different records. A factory, a shop or office, an establishment engaging contract labour, and an establishment covered by EPF and ESI each attract their own enforcement routes.",
          "Use the same per-establishment map you use for statutory registers: laws that apply, registrations held, and the records each requires.",
        ],
      },
      {
        title: "Keep a ready file per establishment",
        body: [
          "Assemble one file, physical or electronic, per establishment, kept current every month rather than put together when a notice arrives.",
        ],
        list: {
          style: "bullet",
          items: [
            "Registrations and licences, with renewal dates",
            "Statutory registers for the last several months, signed where required",
            "Proof of statutory payments and returns: EPF, ESI, professional tax and others that apply",
            "Appointment letters or employment records for the workforce",
            "Contractor licences, contracts and evidence of wage payment to contract workers, where applicable",
            "Copies of notices and abstracts required to be displayed",
            "Standing orders or service rules, where applicable",
            "Internal Committee constitution order, where applicable",
          ],
        },
        watch:
          "The exact documents an inspector may call for, and the displays and abstracts required, differ by state and law. Check each establishment's list against current rules.",
      },
      {
        title: "Check the displays on the wall",
        body: [
          "Many laws require notices or abstracts to be displayed at the workplace: working hours, holidays, wage periods, the name of the inspector, committee details and so on. These are easy to forget and easy to check during a walk-round.",
          "Walk the site once a quarter with the list in hand. Displays should be legible, current and in the language the rules require.",
        ],
      },
      {
        title: "Brief the people who will be there",
        body: [
          "The person who meets the inspector is often a site manager or receptionist, not HR. Give them a one-page note: who to call, where the file is, to be courteous and cooperative, to note the inspector's name and identity, and not to guess answers.",
          "Name an HR or compliance contact for each site who can be reached the same day.",
        ],
      },
      {
        title: "On the day: cooperate and keep a record",
        body: [
          "Verify the inspector's identity and note the law under which the inspection is being made. Provide the records requested. Keep a list of everything shown or copied, and of any questions asked of employees.",
          "If something requested is held elsewhere, say so and give a time when it will be provided. Do not create or alter records during the visit.",
        ],
      },
      {
        title: "Respond to observations in writing",
        body: [
          "If the inspector records observations or issues a notice, read it carefully and note any deadline. Prepare a written response that addresses each point: what was done to correct it, with evidence, or why you believe the observation does not apply.",
          "Take advice where an observation could lead to prosecution or a claim, or where you disagree with it. Then fix the underlying cause, not only the instance found.",
        ],
        watch:
          "Response deadlines, compounding options and appeal routes depend on the law and state. Confirm them for the specific notice.",
      },
    ],
    checklist: [
      "Each establishment mapped to the laws it can be inspected under",
      "Ready file kept current monthly for each establishment",
      "Licence and registration renewal dates tracked",
      "Required displays checked on a quarterly walk-round",
      "Site contacts briefed with a one-page note",
      "Same-day HR or compliance contact named for each site",
      "Log kept of records shown and questions asked during a visit",
      "Written response to observations prepared with evidence",
    ],
    related: [
      { label: "Maintaining Statutory Registers Without a Filing Cabinet Crisis", href: "/resources/hr-guides/statutory-registers", note: "The registers an inspection tests." },
      { label: "Factories Act: Working Hours and Overtime", href: "/resources/labour-law/factories-act", note: "The law behind factory inspections." },
      { label: "Contract Labour Act", href: "/resources/labour-law/contract-labour-act", note: "Records for contractors' workers." },
      { label: "Compliance", href: "/solutions/compliance", note: "Statutory heads produced from payroll." },
    ],
    faqs: [
      { q: "What documents does a labour inspector ask for?", a: "Commonly registrations, statutory registers, wage and attendance records, proof of statutory payments, and contractor records. The exact list depends on the law, state and type of establishment." },
      { q: "Do we get notice before an inspection?", a: "It depends on the state and the scheme. Some inspections are scheduled through online systems, others may happen without notice. Keep records ready regardless." },
      { q: "Who should meet the inspector?", a: "Whoever is on site should be courteous and cooperative and call the named HR or compliance contact. Brief site staff in advance so they know where records are." },
      { q: "What if the inspector finds a gap?", a: "Note the observation and deadline, respond in writing with evidence of correction or your explanation, and take advice where the consequences could be serious." },
    ],
  },

  /* ================================================================= */
  {
    slug: "writing-an-employee-handbook",
    number: "34",
    title: "Writing an employee handbook people will actually open",
    audience:
      "HR leads and founders turning a collection of separate policies into a single employee handbook, or rewriting one that has grown out of date.",
    outcome:
      "Decide what goes in the handbook and what stays outside it, structure it around employee questions, write it plainly and keep it current.",
    minutes: 12,
    seo: {
      title: "Employee Handbook: How to Structure and Write One",
      description:
        "How to write an employee handbook for an Indian company: what belongs in it, how to structure it from your policies, plain writing and keeping it current.",
      keywords: ["employee handbook", "how to write an employee handbook", "employee handbook contents", "company handbook india"],
    },
    opening: [
      "An employee handbook is not a new set of rules. It is the existing rules, the policies you already have, organised so an employee can find the answer to a question without asking HR. If the handbook says something different from the policy, you have created a dispute.",
      "This guide treats the handbook as an index and a plain-language guide to your policies, not a replacement for them. That single decision keeps it shorter, easier to update and less likely to contradict itself.",
    ],
    chapters: [
      {
        title: "Decide the handbook's relationship to your policies",
        body: [
          "There are two workable models. In the first, the handbook summarises each policy in plain language and links to the full policy, which governs if they differ. In the second, the handbook contains the full text of every policy. The first is easier to keep current; the second is a single document but goes out of date as soon as one policy changes.",
          "Whichever you choose, state it at the front: which document governs, and how the employee can find the current version.",
        ],
        watch:
          "Make clear whether the handbook forms part of the employment contract. Advisers often recommend that it does not, so policies can be updated; take advice on the wording.",
      },
      {
        title: "Inventory what you have before you write",
        body: [
          "List every policy, process and practice currently in force, including those that exist only by habit. For each, note the owner, the last review date and whether it is written down.",
          "You will find gaps, overlaps and contradictions. Resolve them in the policies first; the handbook should not be where a disagreement between two policies is settled.",
        ],
      },
      {
        title: "Structure it around the employee's questions",
        body: [
          "Organise by the moments in employment rather than by policy name. An employee looking for how to apply for leave should not need to know that the answer is in the 'Time Away from Work Policy v3'.",
        ],
        list: {
          style: "ordered",
          items: [
            "Welcome: who we are, how this handbook works, which document governs",
            "Joining: probation, documents, induction, policy acknowledgements",
            "Working here: hours, attendance, remote work, code of conduct",
            "Time off: leave types, holidays, how to apply",
            "Pay and benefits: pay dates, payslips, statutory deductions, reimbursements",
            "Growth: performance reviews, increments, promotions",
            "Raising concerns: grievances, Speak Up channels, the Internal Committee",
            "Leaving: resignation, notice period, exit, full and final settlement",
          ],
        },
      },
      {
        title: "Write it plainly",
        body: [
          "Write to the employee as 'you'. Use short sentences, concrete examples and the words employees use. 'You need your manager's approval before taking leave' is better than 'Leave is subject to prior sanction by the competent authority.'",
          "Where a policy has a number, say the number. Where it has a process, list the steps. Where a decision is discretionary, say who makes it. For a multilingual workforce, decide which languages the handbook will be available in and which version governs.",
        ],
      },
      {
        title: "Review it with the people who will be asked about it",
        body: [
          "Before publishing, have it read by a few managers and a few employees from different roles. Ask them to find the answer to five common questions. Where they cannot, fix the structure, not just the wording.",
          "Have legal review the sections that deal with statutory entitlements, discipline, termination and harassment.",
        ],
      },
      {
        title: "Publish, acknowledge and keep it current",
        body: [
          "Publish the handbook where employees can always find the current version, collect an acknowledgement, and include it in onboarding. Give it a version number and a change log at the front.",
          "Set an annual review, and update the relevant section whenever a policy changes. A handbook that is a year out of date teaches employees not to trust it.",
        ],
      },
    ],
    checklist: [
      "Relationship between handbook and policies decided and stated",
      "Contract status of the handbook worded with advice",
      "Policy inventory completed, and contradictions resolved in the policies",
      "Structure built around employee questions and the employment lifecycle",
      "Written in plain language with concrete steps and numbers",
      "Tested on managers and employees with real questions",
      "Legal review of statutory, disciplinary and harassment sections",
      "Version number, change log and annual review in place",
    ],
    related: [
      { label: "Workplace Policy Library", href: "/policy-centre/workplace-policy-library", note: "Sample policies to build the handbook from." },
      { label: "Issuing Policies and Getting a Policy Acknowledgement You Can Rely On", href: "/resources/hr-guides/policy-acknowledgements", note: "Getting and proving sign-off for the handbook." },
      { label: "Code of Conduct", href: "/policy-centre/workplace-policy-library/code-of-conduct", note: "Usually the core section of any handbook." },
      { label: "Workplace Policy Library", href: "/policy-centre/workplace-policy-library", note: "Policy templates to adapt, issue and acknowledge." },
    ],
    faqs: [
      { q: "Is an employee handbook legally required in India?", a: "There is no general requirement for a handbook as such, though several laws require specific policies, rules or displays. A handbook is a practical way to bring them together." },
      { q: "Should the handbook be part of the employment contract?", a: "Many employers state that it is not, so policies can be updated without renegotiating contracts. Take advice on the exact wording." },
      { q: "How long should an employee handbook be?", a: "Long enough to answer common questions and point to the full policies, no longer. Summarising policies and linking to them keeps it much shorter than reproducing every policy in full." },
      { q: "How often should we update it?", a: "Review it at least annually and update the relevant section whenever a policy changes, with a version number and change log." },
    ],
  },

  /* ================================================================= */
  {
    slug: "salary-hold-and-release",
    number: "35",
    title: "Putting salary on hold, and releasing it, without creating a dispute",
    audience:
      "Payroll and HR teams who are asked to hold an employee's pay, for an absconding case, an incomplete exit, missing documents or an open inquiry.",
    outcome:
      "Tell the difference between holding a payment and withholding wages, follow a documented process for each hold, and release or settle it correctly.",
    minutes: 10,
    seo: {
      title: "Salary on Hold: When It Is Used and How to Release It",
      description:
        "A guide to putting salary on hold: common reasons, the legal limits on withholding wages, approvals, telling the employee, and releasing held pay correctly.",
      keywords: ["salary on hold", "salary hold process", "withholding salary employee", "release held salary"],
    },
    opening: [
      "'Put their salary on hold' is one of the most common instructions payroll receives, and one of the riskiest. Wages earned for work done are protected by law: the Code on Wages, in force since 21 November 2025, sets when wages must be paid and limit what may be deducted.",
      "A hold is usually meant as a short, documented pause while something is resolved, not as a deduction or a penalty. This guide covers how to keep it that way. It is not legal advice; check the current rules and take advice before holding any wages already due.",
    ],
    chapters: [
      {
        title: "Separate the situations people call a hold",
        body: [
          "Several different things get called a salary hold, and they carry different risks.",
        ],
        list: {
          style: "bullet",
          items: [
            "Bank or identity details missing or failing, so payment cannot be made",
            "An employee absent without contact, where the employer is trying to establish whether they have left",
            "An exit with clearance pending, where the full and final settlement is awaiting handover or asset return",
            "A disciplinary inquiry or suspension, where pay arrangements may be governed by rules on subsistence allowance",
            "A dispute about attendance, where the amount payable is not yet agreed",
          ],
        },
        watch:
          "Holding wages already earned beyond the statutory time for payment, or deducting from them for reasons the law does not permit, can expose the employer to claims. Confirm what is allowed for your situation.",
      },
      {
        title: "Require a reason and an approval for every hold",
        body: [
          "Payroll should not hold pay on a verbal instruction. Each hold should have a written reason, the period or amount affected, an approver above the requester, and an expected release date.",
          "Keep a hold register: employee, reason, amount, approver, date placed, expected release, date released. Review it at every payroll close. Holds that nobody remembers are how a temporary pause becomes an unpaid wage.",
        ],
      },
      {
        title: "Tell the employee, in writing",
        body: [
          "An employee whose salary does not arrive and who has not been told why will assume the worst. Where the employee is reachable, tell them what is being held, why, what they need to do, and when it will be released.",
          "For an absconding case, the communication is usually part of the process of contacting the employee at their last known address. Keep copies.",
        ],
      },
      {
        title: "Process the payroll, then hold the payment",
        body: [
          "Run the employee through payroll normally, calculating salary, deductions and statutory contributions for the period. Hold the disbursement, not the calculation. That way, statutory contributions and tax are computed and deposited on time, and the held amount is known.",
          "If you remove the employee from the run altogether, you risk missing statutory deposits and creating arrears that are harder to reconcile later.",
        ],
        watch:
          "Whether contributions and tax on held wages should be deposited in the month the wages fall due or when paid is a point to confirm with your advisers for your setup.",
      },
      {
        title: "Release or settle, and close the hold",
        body: [
          "When the reason is resolved, release the held amount in the next payment cycle or as an off-cycle payment, and record the release in the hold register with the date and reference.",
          "In an exit, held salary becomes part of the full and final settlement. Recoveries for notice shortfall or unreturned assets should be computed transparently, on the basis set out in the appointment letter and policy, and shown on the settlement statement.",
        ],
      },
    ],
    checklist: [
      "Reason for the hold identified and categorised",
      "Legal position checked for holding wages already due",
      "Written approval from someone above the requester",
      "Hold register entry with expected release date",
      "Employee told in writing where reachable",
      "Payroll processed and statutory deposits made, disbursement held",
      "Hold register reviewed at each payroll close",
      "Release or settlement recorded with date and reference",
    ],
    related: [
      { label: "Employee Absconding Policy", href: "/policy-centre/workplace-policy-library/employee-absconding", note: "The process when an employee stops turning up." },
      { label: "What a Full-and-Final Settlement Actually Has to Include", href: "/insights/full-and-final-settlement", note: "Where held salary is usually settled." },
      { label: "Full and Final Settlement Statement Template", href: "/resources/hr-letter-templates/full-and-final-statement", note: "Showing held pay and recoveries clearly." },
      { label: "Payment of Wages Act", href: "/resources/labour-law/payment-of-wages-act", note: "Timing of payment and permitted deductions." },
    ],
    faqs: [
      { q: "Can an employer hold an employee's salary?", a: "Wages earned are protected by law on timing and deductions. A short administrative hold for a documented reason is common, but holding wages beyond the time for payment can expose the employer to claims. Take advice." },
      { q: "Can salary be held until the notice period is served?", a: "Recoveries for notice shortfall are usually handled in the full and final settlement on the basis of the appointment letter. Holding earned salary as leverage carries risk; check the position first." },
      { q: "Should a held employee be removed from the payroll run?", a: "Generally no. Process them normally so deductions and statutory contributions are calculated, and hold only the payment." },
      { q: "What happens to held salary if the employee absconds?", a: "Follow the absconding procedure, keep the amount recorded, and settle it in the full and final settlement once the separation is established." },
    ],
  },

  /* ================================================================= */
  {
    slug: "document-expiry-tracking",
    number: "36",
    title: "Tracking employee document expiry before it becomes a problem",
    audience:
      "HR operations teams responsible for keeping employee documents, work permits, licences, certifications and fixed-term contracts current.",
    outcome:
      "Know which employee documents expire, store them with their expiry dates, set reminders with enough lead time, and act when a renewal is missed.",
    minutes: 9,
    seo: {
      title: "Employee Document Management: Tracking Expiry Dates",
      description:
        "Employee document management for expiring records: which documents lapse, storing expiry dates, reminder lead times, owners and what to do when a renewal slips.",
      keywords: ["employee document management", "document expiry tracking", "employee document expiry", "hr document reminders"],
    },
    opening: [
      "Most employee documents are collected once and never looked at again. A few are different: they expire, and when they do, the employee may no longer be permitted to do the work, drive the vehicle, operate the equipment or remain in the country.",
      "This guide is about those documents. It covers identifying them, storing them with dates rather than as files in a folder, and running reminders that reach the right person early enough to act.",
    ],
    chapters: [
      {
        title: "Identify the documents that expire",
        body: [
          "Start with a list by role. Office staff may have few expiring documents. Drivers, field technicians, healthcare staff, security guards and foreign nationals can have several.",
        ],
        list: {
          style: "bullet",
          items: [
            "Passports, visas and work permits for foreign nationals and staff who travel",
            "Driving licences for anyone who drives for work",
            "Professional registrations and licences required for the role",
            "Safety, equipment or trade certifications",
            "Medical fitness certificates where a role requires them",
            "Fixed-term contracts and contract extensions",
            "Contractor agreements and contractor licences, where you engage contract labour",
          ],
        },
      },
      {
        title: "Store the expiry date as data, not just the file",
        body: [
          "A scanned file in a folder cannot remind anyone of anything. For each expiring document, record the document type, number, issue date, expiry date and the employee it belongs to, alongside the file.",
          "HRMagix's Documents feature keeps employee and company documents in one place. Whatever system you use, check that the expiry date is a field you can report on, not text inside a filename.",
        ],
      },
      {
        title: "Set lead times by how long renewal takes",
        body: [
          "A reminder seven days before a visa expires is useless. Set the first reminder according to how long the renewal process realistically takes, and add a second and a final reminder.",
          "Decide who receives each reminder: the employee, their manager and HR. The employee usually has to do the work; the manager needs to know the risk to the roster; HR needs to know to follow up.",
        ],
        watch:
          "Work permit and visa rules, including what an employee may do while a renewal is pending, should be checked with an immigration adviser for each case.",
      },
      {
        title: "Run a monthly expiry report",
        body: [
          "Reminders get missed. A monthly report of everything expiring in the next quarter, by team, gives HR and managers a second line of defence.",
          "Include documents already expired. They should be a short list, and each one should have a named owner and an action date.",
        ],
      },
      {
        title: "Decide what happens when a document lapses",
        body: [
          "Write down what happens if a required document expires before renewal: whether the employee may continue in the role, move to other duties, or must stop the activity the document covers. Decide this before it happens, so managers do not improvise.",
          "Record the lapse, the action taken and the date the renewed document was received.",
        ],
      },
    ],
    checklist: [
      "List of expiring documents by role",
      "Expiry date recorded as a reportable field for every such document",
      "Renewal lead time set per document type",
      "Reminders going to the employee, manager and HR",
      "Monthly report of upcoming and expired documents",
      "Written rule on what happens when a document lapses",
      "Lapses and renewals recorded with dates",
    ],
    related: [
      { label: "Documents Module", href: "/features/documents", note: "Employee and company documents in one place." },
      { label: "Cleaning and Importing the Employee Master", href: "/resources/hr-guides/importing-employee-data", note: "Loading existing document dates in bulk." },
      { label: "Deciding Who Can See Which Employee Data", href: "/resources/hr-guides/hr-data-access-control", note: "Who should see identity documents." },
      { label: "The Employee Onboarding Checklist, From Signed Offer to Day Thirty", href: "/resources/hr-guides/employee-onboarding-checklist", note: "Collecting documents and dates at joining." },
    ],
    faqs: [
      { q: "Which employee documents need expiry tracking?", a: "Any document whose lapse affects whether the person can do their job: work permits, visas, driving licences, professional registrations, certifications, medical fitness certificates and fixed-term contracts." },
      { q: "How early should reminders go out?", a: "Early enough for the renewal to be completed. That varies by document, so set lead times per type based on how long the renewal usually takes." },
      { q: "Who is responsible for renewal, the employee or HR?", a: "Usually the employee does the renewal, while HR tracks and follows up and the manager plans for any gap. Say this in your policy." },
      { q: "What if a document expires before it is renewed?", a: "Follow a rule set in advance on whether the person can continue in the role or must stop the affected activity, and record what was done." },
    ],
  },

  /* ================================================================= */
  {
    slug: "training-managers-on-approvals",
    number: "37",
    title: "Training managers to approve leave and attendance on time",
    audience:
      "HR teams whose payroll close is held up by pending leave, attendance and regularisation approvals, and the managers who are being asked to do them.",
    outcome:
      "Explain to managers why approvals matter for payroll, give them clear decision rules, and run reminders and escalation so approvals are timely and consistent.",
    minutes: 10,
    seo: {
      title: "Manager Approvals in HR: Getting Leave Approved on Time",
      description:
        "How to train managers on HR approvals for leave, attendance and regularisation: why timing matters for payroll, decision rules, delegation and escalation.",
      keywords: ["manager approvals hr", "leave approval process", "attendance regularisation approval", "manager self service training"],
    },
    opening: [
      "When payroll closes with dozens of pending leave and attendance approvals, the result is either a delay or a guess. Both create work later: arrears, corrections and employees querying a loss-of-pay day for leave that was simply never approved.",
      "Managers rarely ignore approvals out of indifference. They do not know the cut-off, do not understand the consequence, or are unsure what the rule is and so leave the request sitting. This guide addresses all three.",
    ],
    chapters: [
      {
        title: "Show managers what an unapproved request does",
        body: [
          "Start with the consequence, using a real example. An unapproved leave request on the cut-off date may become a loss-of-pay day for the employee. An unapproved regularisation leaves an absence in the record. Both show up on a payslip, and the employee goes to HR, not to the manager.",
          "Managers respond to the effect on their own team. A five-minute explanation of how an approval flows into the payroll run is usually more persuasive than a reminder email.",
        ],
      },
      {
        title: "Give decision rules, not just a button",
        body: [
          "Managers hesitate when they do not know whether they are allowed to approve. Give them a one-page summary for each request type: what they are checking, what the policy allows, and when to refer to HR.",
        ],
        list: {
          style: "bullet",
          items: [
            "Leave: is the balance available, does the timing work for the team, is notice in line with policy",
            "Regularisation: is the reason credible, is there supporting information, is this a repeated pattern",
            "Comp-off: was the extra day actually worked and authorised",
            "Overtime: was it authorised in advance, if the policy requires it",
            "Refer to HR: anything involving statutory leave, long absences or a pattern of concern",
          ],
        },
      },
      {
        title: "Publish the cut-off and a reminder rhythm",
        body: [
          "Tell managers the monthly approval cut-off, in advance, every month. Send reminders on a fixed rhythm, for example a few days before the cut-off and on the day itself, listing their pending items.",
          "Encourage approval as requests arrive rather than in a monthly batch. A request approved the same week is easier to judge than one remembered three weeks later.",
        ],
      },
      {
        title: "Set delegation and escalation rules",
        body: [
          "Managers take leave too. Define who approves when the manager is away, and how a delegate is named. Approval routing should follow the current reporting line, so a request does not wait for someone who has moved team.",
          "Decide what happens to a request still pending at the cut-off: escalated to the manager's manager, or to HR, with a clear rule rather than one-off chasing.",
        ],
        watch:
          "Avoid auto-approving everything pending at the cut-off. It removes the reason to look at requests at all, and approves the ones that should have been questioned.",
      },
      {
        title: "Measure and feed back",
        body: [
          "Each month, look at pending approvals at cut-off by manager. Share the list with the managers concerned and, if it persists, with their own managers. Keep the tone factual: the purpose is to fix the process, not to embarrass anyone.",
          "Look also for consistency. If one manager rejects most regularisations and another approves all of them, the decision rules need clarifying.",
        ],
      },
    ],
    checklist: [
      "Managers shown how approvals flow into payroll",
      "One-page decision rules for each request type",
      "Cut-off published in advance every month",
      "Reminders sent on a fixed rhythm with pending lists",
      "Delegation rule for absent approvers",
      "Escalation rule for requests pending at cut-off",
      "Monthly pending-at-cut-off report by manager",
      "Approval consistency reviewed across managers",
    ],
    related: [
      { label: "Leave Management", href: "/solutions/leave-management", note: "How leave approvals are routed and applied." },
      { label: "Attendance & Shifts", href: "/solutions/attendance-and-shifts", note: "Regularisation and attendance records." },
      { label: "The Monthly Payroll Close, Step by Step", href: "/resources/hr-guides/monthly-payroll-close-checklist", note: "Where the approval cut-off sits in the close." },
      { label: "Writing a Leave Policy That Survives Contact With a Year", href: "/resources/hr-guides/writing-a-leave-policy", note: "The rules managers are applying." },
    ],
    faqs: [
      { q: "Why do pending approvals delay payroll?", a: "Payroll uses approved leave and attendance to decide paid days. Pending requests have to be resolved, guessed, or corrected later as arrears." },
      { q: "Should pending requests be auto-approved at cut-off?", a: "It is generally better to escalate them. Auto-approval removes the incentive to review requests and lets through ones that should have been questioned." },
      { q: "Who approves when a manager is on leave?", a: "Define a delegate rule in advance, and route approvals by the current reporting line so requests reach someone who can act." },
      { q: "How do we make approvals consistent across managers?", a: "Give managers written decision rules per request type and review approval patterns across teams each month." },
    ],
  },
];
