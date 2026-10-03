import type { Guide } from "./guides";

/**
 * HR guides 38 to 40: performance and recognition procedures. Same rules as
 * lib/guides.ts: instructional, chaptered in the order the work runs, ending
 * in a checklist. No benchmarks, no timing claims, no customer outcomes.
 */
export const guidesMoreD: Guide[] = [
  /* ================================================================= */
  {
    slug: "running-calibration-meetings",
    number: "38",
    title: "Running a calibration meeting: preparing, chairing and closing the room",
    audience:
      "HR business partners and department heads who have to bring several managers' ratings into line before an appraisal cycle closes.",
    outcome:
      "Prepare the data, chair a calibration meeting that discusses evidence rather than personalities, record every changed rating with a reason, and hand managers outcomes they can explain.",
    minutes: 10,
    seo: {
      title: "Calibration Meeting: How to Run Rating Calibration",
      description:
        "How to run a calibration meeting step by step: the pre-read, who attends, the order of discussion, handling disagreement, recording changes and closing out.",
      keywords: [
        "calibration meeting",
        "performance calibration meeting",
        "rating calibration process",
        "how to run calibration",
      ],
    },
    opening: [
      "Calibration exists because two managers rarely mean the same thing by the same rating. One gives a 4 to anyone who did the job well; another keeps a 4 for the person who changed how the team works. Left alone, those ratings flow into increments and promotion lists, and the employee with the stricter manager pays for it.",
      "This guide covers the calibration meeting itself: what to prepare, how to chair it, and what to do afterwards. For what calibration means and how a 9-box grid frames performance against potential, see the calibration glossary entry and the KRAs and 9-box topic page.",
    ],
    chapters: [
      {
        title: "Decide the scope before anyone opens a spreadsheet",
        body: [
          "A calibration meeting works when the group in the room knows the people being discussed. Calibrate by department or by a group of related teams, not the whole organisation at once. A manager cannot argue usefully about someone they have never worked with.",
          "Fix three things in writing before the meeting: which ratings are being calibrated (overall rating, 9-box placement, or both), whether there is any guidance on distribution, and who has the final say if the room cannot agree. If your organisation uses a guide distribution, say whether it is a target or a hard rule. Most disputes in the room trace back to this being left vague.",
        ],
        list: {
          style: "bullet",
          items: [
            "Population: which employees, grouped so that attendees know them",
            "Ratings in scope: overall rating, potential, 9-box placement",
            "Distribution guidance, and whether it is binding",
            "Decision owner when the group does not agree",
            "Who attends: the managers, their manager, and an HR facilitator",
          ],
        },
      },
      {
        title: "Build the pre-read",
        body: [
          "Managers should submit provisional ratings with a short evidence note before the meeting, not bring them in their heads. The note should name two or three specific outcomes against the person's KRAs or goals, not adjectives.",
          "HR compiles these into one pre-read: every employee with provisional rating, role, level, time in role and the evidence note, plus a view of the spread of ratings by manager. The spread view is the most useful page in the pack. It shows at a glance which manager rates high, which rates low, and where the conversation needs to go.",
        ],
        watch:
          "Circulate the pre-read at least a day ahead and ask attendees to read it. A meeting where people read the evidence for the first time on the screen turns into a reading session.",
      },
      {
        title: "Chair the room: order and rules of discussion",
        body: [
          "The facilitator, usually HR, does not rate anyone. Their job is to keep the discussion on evidence, keep time and record decisions. Open by restating the scope and the definitions of each rating level, so everyone is comparing against the same words.",
          "Do not walk through every employee in the same depth. Spend the time where a decision changes something for the person: the top and bottom of the scale, people near a boundary, and anyone whose rating differs from what their peers in similar roles received.",
        ],
        list: {
          style: "ordered",
          items: [
            "Restate scope, rating definitions and the decision rule",
            "Review the spread of ratings by manager",
            "Discuss the highest ratings, then the lowest",
            "Discuss boundary cases and outliers against peers in similar roles",
            "Confirm the remaining ratings as a group without individual discussion",
            "Read back every change made, with its reason",
          ],
        },
      },
      {
        title: "Handle disagreement and bias",
        body: [
          "When managers disagree, ask for the evidence again rather than for opinions. Questions that help: what did this person deliver against their goals, how does that compare with the person rated one level higher, and would the rating hold if their manager were someone else.",
          "Watch for the familiar distortions: the most recent quarter outweighing the year, a loud advocate carrying a weak case, a quiet manager's team being marked down, and ratings tracking how visible someone is rather than what they delivered. Name the pattern when you see it, neutrally, and move back to the evidence.",
        ],
        watch:
          "Do not let calibration become the place where a manager first hears a concern about their own report from a peer. If new information about conduct comes up, park it and handle it separately.",
      },
      {
        title: "Record, communicate and close",
        body: [
          "Every rating that changes in the room needs a recorded reason in one or two lines. That record protects the decision if it is questioned later and lets the manager explain it clearly. Ratings that did not change need no note.",
          "After the meeting, the manager, not HR, tells each employee their final rating in the appraisal conversation. A manager whose provisional rating was moved down must be able to explain why in terms of the person's work, never as \"calibration lowered it\". Close the loop by reviewing, at the end of the cycle, whether the definitions or the evidence notes need changing for next time.",
        ],
      },
    ],
    checklist: [
      "Calibration groups set so attendees know the people discussed",
      "Ratings in scope, distribution guidance and decision owner written down",
      "Provisional ratings submitted with evidence notes against KRAs or goals",
      "Pre-read with spread of ratings by manager circulated in advance",
      "Rating definitions restated at the start of the meeting",
      "Time spent on top, bottom, boundary and outlier cases",
      "Every changed rating recorded with a reason",
      "Managers briefed to explain final ratings in terms of the work",
    ],
    related: [
      {
        label: "Calibration",
        href: "/resources/hr-and-payroll-glossary/calibration",
        note: "The definition of rating calibration.",
      },
      {
        label: "KRAs and the 9-box Guide",
        href: "/hr/topics/kras-and-9-box",
        note: "How KRAs and the 9-box frame performance and potential.",
      },
      {
        label: "Running an Appraisal Cycle End to End",
        href: "/resources/hr-guides/running-an-appraisal-cycle",
        note: "Where calibration sits in the full review cycle.",
      },
      {
        label: "Key Result Areas (KRA) & 9-Box Module",
        href: "/features/kra-9box",
        note: "KRA scoring and 9-box placement for each employee.",
      },
    ],
    faqs: [
      {
        q: "What is a calibration meeting?",
        a: "A meeting where managers who rate employees in related teams compare their provisional ratings against shared definitions and evidence, so the same rating means the same thing across managers before ratings are finalised.",
      },
      {
        q: "Who should attend a calibration meeting?",
        a: "The managers whose teams are being calibrated, their own manager, and an HR facilitator who keeps the discussion on evidence and records decisions. People who do not know the employees being discussed add little.",
      },
      {
        q: "Should calibration force a fixed rating distribution?",
        a: "That is the employer's decision. Some use a distribution as guidance to prompt discussion, others apply it as a rule. Whichever you choose, state it before the meeting so it is not argued case by case.",
      },
      {
        q: "How should a manager explain a rating changed in calibration?",
        a: "In terms of the employee's work and how it compared with the rating definitions, using the reason recorded in the meeting. Saying the rating was lowered by calibration, without a reason, damages trust in the process.",
      },
      {
        q: "When in the appraisal cycle should calibration happen?",
        a: "After managers have submitted provisional ratings and before ratings are shared with employees or used for increments, so that changes are made once and communicated once.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "cascading-okrs",
    number: "39",
    title: "Cascading OKRs from company to team to individual without losing the thread",
    audience:
      "Founders, strategy leads and HR teams setting OKRs for the first time across several teams, or fixing a set that has drifted out of alignment.",
    outcome:
      "Set a short list of company objectives, have teams write OKRs that visibly contribute to them, decide where individual OKRs are useful, and check alignment during the quarter.",
    minutes: 10,
    seo: {
      title: "Cascading OKRs: Aligning Company, Team and Individual Goals",
      description:
        "A step-by-step method for cascading OKRs: setting company objectives, drafting team OKRs, linking key results, individual OKRs and mid-quarter alignment checks.",
      keywords: ["cascading okrs", "okr alignment", "how to cascade okrs", "team okrs"],
    },
    opening: [
      "Cascading OKRs is the work of making sure that what each team commits to this quarter adds up to what the company said it would do. Done badly, it becomes a copying exercise: the company's key result is pasted into every team's objective, nobody owns anything, and the review at the end of the quarter cannot say who moved what.",
      "This guide is the alignment procedure. It assumes you know what an objective and a key result are; if not, start with the OKRs topic page. For how OKRs differ from KRAs and which to use where, see the KRA vs OKR comparison.",
    ],
    chapters: [
      {
        title: "Set few company objectives, and say why",
        body: [
          "Start at the top with a short list of company objectives for the period, each with its key results. Keep the list short enough that a team lead can hold it in their head. A long company list gives every team permission to work on anything.",
          "Write a sentence of context under each objective: why it matters now and what the leadership team is choosing not to do. Teams use that context more than the wording of the key results when they decide how to contribute.",
        ],
      },
      {
        title: "Let teams draft upward, not copy downward",
        body: [
          "Share the company OKRs and ask each team to draft its own: which company objective does the team move, and what result in the team's own work would show it. A team's key result is often a lever under a company key result, not a slice of it. If the company key result is about customer retention, the support team's key result might be about first-response quality, which is theirs to move.",
          "Not every team OKR has to link to a company objective. Some work keeps the lights on or builds capability for later. Allow a small amount of unlinked work and label it clearly, rather than forcing a weak link.",
        ],
        list: {
          style: "bullet",
          items: [
            "Each team objective names the company objective it supports, or is marked as team-only",
            "Each key result is something the team can move largely through its own work",
            "Key results are measurable outcomes, not a list of tasks",
            "Shared key results have one named owner and named contributing teams",
          ],
        },
        watch:
          "Copying the company key result into three teams' OKRs feels aligned but removes ownership. When the number moves, or does not, nobody can say whose work made the difference.",
      },
      {
        title: "Run an alignment review before the quarter starts",
        body: [
          "Once drafts are in, put all team OKRs side by side against the company list in one session with the team leads. Look for gaps (a company objective no team is moving), overlaps (two teams claiming the same lever) and dependencies (a team whose key result needs another team's help).",
          "Resolve dependencies in the room. If marketing's key result needs product to ship something, product either takes that on as its own key result or marketing changes its key result. A dependency nobody has agreed to is a common reason a team misses.",
        ],
        list: {
          style: "ordered",
          items: [
            "Map each team objective to the company objective it supports",
            "Find company objectives with no team contribution",
            "Find overlapping claims and assign one owner",
            "List cross-team dependencies and get each one agreed",
            "Finalise and publish all OKRs where everyone can see them",
          ],
        },
      },
      {
        title: "Decide whether individuals need OKRs",
        body: [
          "Individual OKRs are optional. They help where a person owns a distinct outcome, such as a specialist or a single-person function. In a team that works together on shared key results, individual OKRs tend to become task lists and add review overhead without adding alignment.",
          "If you use them, keep them to one or two objectives that link to the team's OKRs, and keep them separate from the person's KRAs and appraisal rating. OKRs work best as stretch commitments; tying them directly to ratings encourages people to set targets they know they will hit.",
        ],
      },
      {
        title: "Check alignment during the quarter, not only at the end",
        body: [
          "Set a regular check-in schedule where each owner updates progress and confidence on their key results. The useful question in a check-in is not the number but whether the team is still working on the right thing given what has changed.",
          "If a company objective changes mid-quarter, re-run a short version of the alignment review for the affected teams rather than leaving their OKRs pointing at something that no longer matters. At the end of the quarter, score key results, write down what was learned, and carry that into the next set. HRMagix includes an OKRs module for setting and tracking objectives and key results, if you want them in the same system as the rest of performance.",
        ],
      },
    ],
    checklist: [
      "Short list of company objectives published with context and key results",
      "Teams drafted their own OKRs linked to a company objective or marked team-only",
      "Key results are outcomes the owning team can move",
      "Shared key results have one owner and named contributors",
      "Alignment review held for gaps, overlaps and dependencies",
      "Cross-team dependencies agreed by both teams",
      "Decision made on individual OKRs, kept separate from appraisal ratings",
      "Check-in schedule set and end-of-quarter scoring planned",
    ],
    related: [
      {
        label: "OKRs Guide",
        href: "/hr/topics/okrs",
        note: "What objectives and key results are and how they work.",
      },
      {
        label: "KRA vs OKR (Key Result Areas vs Objectives and Key Results)",
        href: "/resources/compare/kra-vs-okr",
        note: "When to use KRAs, OKRs, or both.",
      },
      {
        label: "Objectives & OKRs Module",
        href: "/features/okrs",
        note: "Setting and tracking objectives and key results.",
      },
    ],
    faqs: [
      {
        q: "What does cascading OKRs mean?",
        a: "Linking OKRs at company, team and sometimes individual level so that each team's objectives visibly contribute to the company's. Good cascading has teams write their own contributing OKRs rather than copying the company's key results.",
      },
      {
        q: "Should every team OKR link to a company objective?",
        a: "Most should, but not all. Some essential work maintains operations or builds capability. Mark it as team-only rather than forcing a weak link to a company objective.",
      },
      {
        q: "Do individual employees need OKRs?",
        a: "Not necessarily. They help where a person owns a distinct outcome. In teams working on shared key results they often turn into task lists. If used, keep them few and separate from appraisal ratings.",
      },
      {
        q: "How do you handle a key result that depends on another team?",
        a: "Agree it explicitly during the alignment review. Either the other team takes on a supporting key result of its own, or the dependent team changes its key result to something it can move.",
      },
    ],
  },

  /* ================================================================= */
  {
    slug: "designing-a-recognition-programme",
    number: "40",
    title: "Designing an employee recognition programme: criteria, schedule and ownership",
    audience:
      "HR managers and culture leads building a recognition programme from scratch, or replacing an awards scheme that people have stopped taking seriously.",
    outcome:
      "Decide what the programme recognises, set the channels and schedule, write criteria people can apply, give it an owner and a budget line, and review it so it stays credible.",
    minutes: 10,
    seo: {
      title: "Employee Recognition Program: How to Design One Step by Step",
      description:
        "How to design an employee recognition program: choosing what to recognise, peer and manager channels, award criteria, schedule, rewards, budget and review.",
      keywords: [
        "employee recognition program",
        "employee recognition programme",
        "designing a recognition program",
        "recognition programme ideas",
      ],
    },
    opening: [
      "Most recognition schemes fail without anyone noticing. The monthly award goes to the same few people, the nominations dry up, and within a year the email announcing the winner is ignored. The cause is usually design, not intent: nobody decided what was being recognised, the criteria were vague, and the programme had no owner after launch.",
      "This guide walks through building an employee recognition program as a set of decisions, in order. For why recognition matters and what makes it feel genuine, see the employee recognition topic page; this is the build.",
    ],
    chapters: [
      {
        title: "Decide what you are recognising",
        body: [
          "Start by choosing what behaviour or outcome the programme exists to notice. Most organisations already have stated values; recognition is one of the few places those values become visible. Pick a small number and describe each in terms of what someone actually did, so a nomination can point to an example.",
          "Separate recognition from reward for performance. Increments and bonuses follow the appraisal cycle. Recognition is for specific acts, often small, that would otherwise go unnoticed: covering for a colleague, fixing a process nobody owned, handling a difficult customer well.",
        ],
      },
      {
        title: "Choose the channels: peer, manager and organisation",
        body: [
          "A programme usually works at three levels, and each needs its own design. Peer recognition is frequent and informal: anyone can thank anyone, publicly, tied to a value. Manager recognition is specific feedback in the moment, plus nominations upward. Organisation-level recognition is a periodic award that carries more weight and needs a selection process.",
          "Do not launch all three at once if your capacity is limited. Peer recognition is the easiest to start and gives you a record of what people value, which helps when you later design awards.",
        ],
        list: {
          style: "bullet",
          items: [
            "Peer: open to everyone, short message, linked to a value, visible to others",
            "Manager: specific, timely, and able to nominate for a larger award",
            "Organisation: periodic awards with written criteria and a selection panel",
            "Service milestones: anniversaries acknowledged consistently for everyone",
          ],
        },
      },
      {
        title: "Write criteria and set the schedule",
        body: [
          "For any award with a winner, write criteria a panel can apply and a nominee can understand: what qualifies, what evidence a nomination must include, and who is eligible. Rotate the panel so the same people are not choosing every time, and record why each winner was chosen.",
          "Set a schedule that you can sustain. A quarterly award that always happens is worth more than a monthly one that slips. For peer recognition there is no fixed schedule; the job is to make it easy enough that people use it during an ordinary week.",
        ],
        watch:
          "Look at who receives recognition by team, location and shift. Back-office, field and night-shift staff are easy to miss when recognition depends on being seen. If a group is consistently absent, the design is the problem, not the group.",
      },
      {
        title: "Budget, rewards and their tax treatment",
        body: [
          "Recognition does not need to be expensive, but any tangible reward needs a budget line and a rule. Decide in advance what accompanies each level: a public mention, a certificate or badge, a gift voucher, an experience. Keep the value consistent within a level so the reward does not depend on which manager nominated.",
          "Gifts and vouchers given to employees can be a taxable perquisite under the Income-tax rules, depending on their value and form. Agree the treatment with payroll before launch, so a reward does not turn into an unexpected deduction later.",
        ],
        watch:
          "The tax treatment of gifts and vouchers to employees depends on the current Income-tax rules and limits. Check the current position with your payroll or tax adviser before fixing reward values.",
      },
      {
        title: "Launch, own and review",
        body: [
          "Launch with managers first. If managers do not recognise their own teams in the first weeks, nobody else will. Give the programme a named owner in HR who checks participation, keeps awards on schedule and answers questions.",
          "Review it on a fixed schedule: who is being recognised, which values appear and which never do, whether nominations come from across the organisation, and what employees say about it. Change the criteria or channels when the review shows a gap. The HRMagix Recognition module offers peer kudos, badges and a culture wall, which leaves a visible record to review against.",
        ],
      },
    ],
    checklist: [
      "A small set of values or behaviours chosen, each described by example",
      "Recognition kept separate from appraisal-linked pay decisions",
      "Peer, manager and organisation channels decided, and which launch first",
      "Written criteria, eligibility and a rotating panel for any award",
      "A schedule the team can sustain",
      "Reward values fixed by level and tax treatment agreed with payroll",
      "Named owner in HR and managers briefed before launch",
      "Periodic review of who is recognised across teams, locations and shifts",
    ],
    related: [
      {
        label: "Employee Recognition Guide",
        href: "/hr/topics/employee-recognition",
        note: "Why recognition matters and what makes it genuine.",
      },
      {
        label: "Recognition Module",
        href: "/features/recognition",
        note: "Kudos, badges and the culture wall.",
      },
      {
        label: "Running an Appraisal Cycle End to End",
        href: "/resources/hr-guides/running-an-appraisal-cycle",
        note: "The performance process recognition sits alongside.",
      },
    ],
    faqs: [
      {
        q: "What should an employee recognition program include?",
        a: "A clear statement of what is recognised, channels for peer, manager and organisation-level recognition, written criteria for any award, a sustainable schedule, a reward budget, a named owner and a regular review.",
      },
      {
        q: "How is recognition different from rewards linked to performance?",
        a: "Performance rewards such as increments and bonuses follow the appraisal cycle. Recognition notices specific acts and behaviours as they happen, often small ones, and is usually more frequent and more public.",
      },
      {
        q: "Are recognition gifts and vouchers taxable for employees?",
        a: "They can be treated as a perquisite under the Income-tax rules depending on value and form. Check the current rules and limits with payroll or a tax adviser before setting reward values.",
      },
      {
        q: "How do you keep a recognition programme fair?",
        a: "Use written criteria, rotate selection panels, record reasons for awards, and review regularly who is recognised by team, location and shift so that less visible staff are not left out.",
      },
      {
        q: "Should peer recognition be anonymous?",
        a: "Usually not. Recognition is meant to be seen and to come from a person. Anonymous channels suit feedback and concerns better than thanks.",
      },
    ],
  },
];
