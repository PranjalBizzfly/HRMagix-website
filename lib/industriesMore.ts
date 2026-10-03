import type { Industry } from "./industries";

/**
 * Eight further industry pages. Same rules as the original six: each is
 * organised around that industry's own operational problem, cites only
 * published HRMagix capabilities, and claims no customers, statistics or
 * industry-specific features. No image: there is no unused photograph.
 */
export const industriesMore: Industry[] = [
  {
    slug: "retail",
    href: "/industries/retail",
    name: "Retail",
    audience: "Store chains, franchise operators and multi-outlet retailers",
    title: "Forty stores, forty rosters, one payroll that has to agree with all of them",
    standfirst:
      "Retail HR is decided at the store, by a store manager with a roster and a queue of customers, and paid at head office by someone who has never seen either.",
    seo: {
      title: "HR Software for Retail Stores and Chains in India",
      description:
        "HR software for retail in India: store-level rosters and attendance, weekly offs that rotate, state-wise Shops and Establishments rules, and one payroll run.",
      keywords: [
        "hr software for retail",
        "retail payroll software",
        "HRMS for retail chains",
        "store staff attendance software",
      ],
      focus: "hr software for retail",
    },
    situation: [
      "A retail chain is a head office and a long list of small workplaces, each run by a store manager whose real job is selling. Rosters are drawn up on the store floor, swapped between colleagues at short notice, and adjusted around footfall that nobody planned for. Head office sees the result once a month, as an attendance sheet that has to become a payroll.",
      "The gap between those two places is where retail payroll goes wrong. A swapped shift is not recorded, a weekly off moved to a weekday is marked as an absence, a new joiner at a store in another state is paid under the home state's rules. HR software for retail is useful only if it closes that gap at the store, not at month end.",
    ],
    pressures: [
      {
        title: "The weekly off is rarely Sunday",
        body: "Stores are busiest at weekends, so weekly offs rotate across the week and differ by person. An attendance system that assumes Sunday will mark half the staff absent on a working day and present on their off. The roster has to be the reference, not the calendar.",
      },
      {
        title: "Every state is a different set of rules",
        body: "Opening hours, weekly holidays, overtime and leave for shop employees sit under each state's Shops and Establishments law, and Professional Tax and Labour Welfare Fund vary by state as well. A chain across five states is running five compliance positions under one brand.",
      },
      {
        title: "Joining and leaving never stops",
        body: "Store staff turn over faster than office staff, which means onboarding documents, statutory identifiers and full-and-final settlements are a weekly activity rather than an occasional one. Each of them done by hand at the store is a chance for the record to be incomplete.",
      },
      {
        title: "Store managers are approvers whether they like it or not",
        body: "Leave, regularisation and shift swaps need a decision from someone who is also running the floor. Approval has to be quick to give from a phone and has to route onward when the store manager is on leave themselves.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        why: "Because rotating weekly offs and store rosters are the input every later figure depends on, and they are where most retail payroll errors begin.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "So that state-wise Professional Tax and LWF follow each employee's store location rather than the head office address.",
      },
      {
        order: "Then",
        module: "Onboarding & Lifecycle",
        href: "/solutions/onboarding-and-lifecycle",
        why: "Because high turnover makes joining documents and exit settlements a weekly task, and doing them at the store by hand is where records go missing.",
      },
      {
        order: "Then",
        module: "Employee Self-Service",
        href: "/solutions/employee-self-service",
        why: "Store staff rarely have a desk or a work email. A phone is how they will see payslips, balances and their own attendance.",
      },
    ],
    deepDive: [
      {
        heading: "The roster is the contract for that week",
        body: [
          "In an office the expected working day is fixed and attendance is compared against it. In a store the expected working day is whatever the roster says, and the roster changes weekly. That makes the roster, not the calendar, the thing attendance must be measured against.",
          "Three cases cause most disputes. A shift swap agreed between two colleagues and never recorded, so one is marked absent and the other works an unpaid extra day. A weekly off moved for a sale weekend, so the off falls on a weekday the system thinks is working. And a split shift around the afternoon lull, which looks like a late arrival followed by an early exit.",
          "Holding each of these as a roster change, with who approved it, is what lets the payable-days figure stand up when a store employee asks why their salary is short.",
        ],
      },
      {
        heading: "Shops and Establishments law, state by state",
        body: [
          "Most retail staff are covered by the Shops and Establishments Act of the state their store is in. These Acts set rules on daily and weekly working hours, the weekly holiday, overtime, leave and the registers a shop must keep, and they differ from state to state. Some states have replaced older Acts with newer ones, and several allow exemptions on application.",
          "The practical consequence for a chain is that leave quotas, holiday lists and working-hour limits cannot be a single company setting. They have to be held per location, so that a store in one state and a store in another are each configured to their own rules while reporting as one company.",
          "Because these rules are set by states and change, the right approach is to confirm the current position for each state you operate in and hold it as configuration, rather than assuming one state's rule applies everywhere.",
        ],
      },
      {
        heading: "Seasonal hiring without losing the record",
        body: [
          "Festive and sale seasons bring short-term staff into stores for weeks at a time. They are employees for that period, with the same statutory treatment as anyone else on the rolls, and they usually leave before anyone has finished their paperwork.",
          "The administrative risk is that a short engagement is handled informally: paid in cash, recorded on a sheet, never given a proper exit. When the same person returns next season, there is no record to build on.",
          "Bringing seasonal staff into the same onboarding flow and the same payroll run, with a dated start and a dated exit, keeps their statutory contributions correct and means a returning worker is a rehire rather than a stranger.",
        ],
      },
    ],
    signals: [
      "A new store opens in a state the chain has not operated in before.",
      "A store manager's attendance sheet and the payroll disagree, and nobody can say which is right.",
      "Festive-season hiring doubles the number of joiners and exits in a month.",
    ],
    closing:
      "The store manager keeps running the store. What changes is that the roster, the swaps and the approvals they already deal with are captured where they happen, so head office runs payroll from a record rather than from a sheet that arrived by email.",
    questions: [
      {
        q: "Our stores give weekly offs on different days. Can attendance handle that?",
        a: "Yes. Attendance is measured against the roster rather than a fixed calendar, so a weekly off on a Tuesday is an off and a Sunday on the roster is a working day. Rotating patterns and per-person offs are configured as shift schedules.",
      },
      {
        q: "We have stores in several states. Do leave and holiday rules differ?",
        a: "They can, and often should. Leave schemes and holiday calendars are configured per location, so each store follows its own state's position. The Shops and Establishments rules themselves vary by state, so confirm the current rule for each state before configuring it.",
      },
      {
        q: "How do store staff without email see their payslips?",
        a: "Through the mobile self-service app, where employees see payslips, leave balances and their own attendance. A work email is not required to use it.",
      },
      {
        q: "Can a store manager approve shift swaps and leave from a phone?",
        a: "Leave and regularisation approvals reach the approver by email and push notification, and approval chains are configured by grade with escalation, so a request moves on when the store manager is away.",
      },
      {
        q: "How should we handle seasonal staff hired for a few weeks?",
        a: "As ordinary joiners with a dated start and exit, run through the same onboarding and payroll. That keeps statutory deductions correct for the period worked and gives you a record to reuse if the same person returns next season.",
      },
    ],
  },

  {
    slug: "healthcare",
    href: "/industries/healthcare",
    name: "Healthcare",
    audience: "Hospitals, nursing homes, diagnostic centres and clinic chains",
    title: "Care runs around the clock, and so does every payroll question",
    standfirst:
      "A hospital cannot close a ward for the night, so its rosters, its overtime and its credentials all have to work at three in the morning as well as they do at noon.",
    seo: {
      title: "HR Software for Hospitals and Healthcare Providers",
      description:
        "HR software for hospitals in India: 24x7 nurse and staff rosters, night pay, licence and certificate expiry alerts, and statutory payroll in one run.",
      keywords: [
        "hr software for hospitals",
        "healthcare HRMS",
        "hospital payroll software",
        "nurse rostering software",
      ],
      focus: "hr software for hospitals",
    },
    situation: [
      "A hospital employs several workforces under one roof. Consultants who may be on retainer or fee-for-service, resident doctors, nurses on rotating shifts, technicians, housekeeping and security that are often supplied by a contractor, and administrative staff who keep office hours. Each is paid differently and each has different records that matter.",
      "What they share is that the place never stops. Every ward needs cover every hour, which means rosters, night shifts, handovers and overtime are the ordinary state of the place rather than exceptions. HR software for hospitals has to treat continuous cover as the default, and has to know, at any hour, whether the person on the roster is qualified to be there.",
    ],
    pressures: [
      {
        title: "Minimum cover is not negotiable",
        body: "A ward short of a nurse is a patient-safety problem before it is an HR one. Leave approval has to show the approver who else is off that shift, so that a reasonable request is not approved into an unsafe roster.",
      },
      {
        title: "Credentials expire, and the expiry is the risk",
        body: "Nursing and medical registrations, life-support certifications and similar credentials carry renewal dates. An expired credential discovered after the fact is far worse than one flagged a month before it lapsed.",
      },
      {
        title: "Night, on-call and overtime pay are the contested figures",
        body: "Night differentials, extra shifts and comp-off for holiday duty are where nursing staff most often dispute their pay. They have to be calculated from the shift actually worked rather than from a ward sister's tally.",
      },
      {
        title: "Not everyone in scrubs is on your payroll",
        body: "Consultants on professional fees and contractor-supplied support staff work alongside employees. Who is an employee, and what statutory treatment follows, has to be a recorded fact rather than an assumption.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        why: "Rotating 24x7 rosters, night differentials and shifts that cross midnight are the foundation of a hospital payroll.",
      },
      {
        order: "Then",
        module: "Documents",
        href: "/features/documents",
        why: "Because licence and certificate expiry alerts turn a lapsed registration from a discovery into a reminder.",
      },
      {
        order: "Then",
        module: "Leave Management",
        href: "/solutions/leave-management",
        why: "So that approvers see the team calendar for the shift before approving, and cover is protected.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "Night pay, overtime and comp-off resolve here from the attendance ledger, alongside PF, ESI and TDS.",
      },
    ],
    deepDive: [
      {
        heading: "The credential is part of the employee record",
        body: [
          "In most organisations a qualification is something checked once at hiring. In healthcare it is a condition of doing the job that has to stay valid for as long as the person does it. A nurse whose registration has lapsed, or a technician whose certification expired last month, should not be on the roster, and the hospital is the one that has to know.",
          "That makes the credential a dated document on the employee record, with its expiry date held and an alert raised well before it passes. The alert goes to the person and to whoever manages them, while there is still time to renew.",
          "Which credentials apply to which role, and what the regulator requires, varies by profession, state council and accreditation body. Those rules are the hospital's to decide; the record's job is to make sure no expiry date is held only in a filing cabinet.",
        ],
      },
      {
        heading: "Rosters built around cover rather than around people",
        body: [
          "A hospital roster starts from the number of qualified staff each ward needs on each shift, and fills it. Leave, swaps and absences are all subtractions from that cover, which is why they cannot be decided one request at a time.",
          "The useful mechanism is simple: at the point of approval, the approver sees who else in the unit is already off for that shift. A charge nurse approving a fourth person off on the same night can see that they are doing it, rather than discovering it at the handover.",
          "Shifts that cross midnight have to be held as one shift attributed to the day it began. A night shift split at the date boundary produces two short days, an overtime figure that is wrong, and a nurse who reasonably believes she has been underpaid.",
        ],
      },
      {
        heading: "Consultants, residents and contracted support staff",
        body: [
          "Many hospitals pay visiting consultants a professional fee rather than a salary, which places them outside payroll and under different tax treatment. Resident doctors and nurses are employees with the full statutory load. Housekeeping, security and catering are often supplied by a contractor, which brings the principal employer's responsibilities under contract labour law into play.",
          "Each category has to be recorded as what it is, because it decides PF and ESI applicability, TDS treatment and who is responsible for paying whom. Getting the category wrong is a statutory problem, not a clerical one, and the right classification for a given arrangement is a question for your advisers.",
          "For contracted staff the practical point is evidence: a principal employer is expected to be able to show that the contractor paid wages and statutory dues. Keeping the contractor's records alongside your own is part of that.",
        ],
      },
    ],
    signals: [
      "An accreditation or inspection asks for proof that every clinical staff member held a valid registration on a given date.",
      "Nursing attrition rises and night-pay disputes are cited in exit conversations.",
      "A new wing or a new facility opens and has to be rostered from scratch.",
    ],
    closing:
      "The hospital's clinical decisions stay where they are. What the platform carries is the administration around them: the roster that is actually worked, the credential that is still valid, and the night shift that is paid as one shift.",
    questions: [
      {
        q: "Can HRMagix run 24x7 rotating rosters for nurses?",
        a: "Yes. The shift engine supports rotating multi-shift schedules with auto shift detection from punch timestamps, night-shift differential allowances and comp-off credit for approved holiday or weekly-off duty.",
      },
      {
        q: "Can we be alerted before a nursing registration or certification expires?",
        a: "Yes. Documents held against the employee carry expiry dates, and automated alerts go out before a licence or certificate lapses. Which credentials you track, and for whom, is your decision.",
      },
      {
        q: "How do we stop leave approvals leaving a ward short-staffed?",
        a: "The approver sees the team calendar while deciding, so a request is judged against who else is already off for that shift. Where the hospital needs them, restricted periods can also be configured.",
      },
      {
        q: "Are visiting consultants paid through payroll?",
        a: "That depends on the arrangement. Consultants paid a professional fee are usually outside salary payroll and taxed differently from employees. The category should be recorded on the person's record, and the classification of a specific arrangement confirmed with your advisers.",
      },
      {
        q: "Our housekeeping and security staff come from a contractor. What do we need to keep?",
        a: "As principal employer you are generally expected to ensure the contractor pays wages and statutory dues, and to be able to show it. The exact obligations follow contract labour law and the state rules made under it, so check the current position for your establishment.",
      },
    ],
  },

  {
    slug: "hospitality",
    href: "/industries/hospitality",
    name: "Hospitality",
    audience: "Hotels, resorts, restaurant groups and cloud kitchens",
    title: "Split shifts, service charge and a season that ends on a date",
    standfirst:
      "A hotel or restaurant works when its guests are awake, which means mornings and late nights, broken days, and a workforce that grows for the season and shrinks after it.",
    seo: {
      title: "HR Software for Hotels, Resorts and Restaurants",
      description:
        "HR software for hotels in India: split and late shifts, seasonal staff, staff meals and accommodation in pay, service charge handling and payroll in one place.",
      keywords: [
        "hr software for hotels",
        "hotel payroll software",
        "restaurant HR software",
        "HRMS for hospitality",
      ],
      focus: "hr software for hotels",
    },
    situation: [
      "Hospitality work follows the guest. A restaurant needs its full team at lunch and dinner and very few people in between. A hotel's front office, housekeeping, kitchen and banqueting each run a different rhythm, and the property as a whole runs around the clock. A resort in a holiday destination may double its headcount for a few months and let most of them go at the season's end.",
      "That produces a set of payroll inputs office-oriented systems handle badly: split shifts, late finishes that run past midnight, staff accommodation and meals that are part of the package, and a share of service charge whose distribution has to be explained. HR software for hotels earns its place by making each of those a rule rather than a monthly argument.",
    ],
    pressures: [
      {
        title: "A split shift is one working day",
        body: "A cook who works eleven to three and six to eleven has worked one day in two sessions. A system that sees two punches in and two out has to recognise that, rather than recording a long absence in the middle of the day.",
      },
      {
        title: "Late close, early open",
        body: "A banquet that ends after midnight and a breakfast shift that starts at six can fall to the same person. Rest periods, overtime and the date the shift belongs to all have to be worked out correctly.",
      },
      {
        title: "Seasonal staff come and go in batches",
        body: "Properties in seasonal destinations hire a cohort before the season and release most of it afterwards. Joining documents, statutory registration and full-and-final settlements arrive in batches, not one at a time.",
      },
      {
        title: "Benefits in kind and service charge are part of the pay conversation",
        body: "Staff meals, accommodation and a share of service charge are real value to hospitality employees. How each is treated in the salary structure, and how service charge is shared, needs to be written down and applied identically.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        why: "Split shifts, late closes and department-specific rosters have to be captured correctly before anything else is.",
      },
      {
        order: "Then",
        module: "Onboarding & Lifecycle",
        href: "/solutions/onboarding-and-lifecycle",
        why: "Because seasonal hiring arrives as a cohort, and pre-boarding is where a batch of joiners is either ready on day one or not.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "So that allowances, overtime and statutory deductions follow written rules, and every payslip shows how it was reached.",
      },
      {
        order: "Then",
        module: "Employee Self-Service",
        href: "/solutions/employee-self-service",
        why: "Hospitality staff are on their feet, not at desks. A phone is where they will check rosters, balances and payslips.",
      },
    ],
    deepDive: [
      {
        heading: "Split shifts and the gap in the middle of the day",
        body: [
          "The split shift is the defining pattern of restaurant and banqueting work, and it is the one generic attendance systems handle worst. Two sessions with a gap between them can be read as a late arrival, an early departure, or two half days, depending on how the system was configured.",
          "The right treatment is to define the split shift as a single shift with two sessions, so that the day is complete when both are worked, and the gap is neither a deduction nor working time. Overtime is then measured against the total of both sessions rather than against one.",
          "Working-hour limits and spread-over rules for shop and commercial establishments are set under state law and vary by state, so the maximum spread of a split day is something to confirm for each location rather than assume.",
        ],
      },
      {
        heading: "Meals, accommodation and service charge in the salary structure",
        body: [
          "Many hospitality employers provide meals on duty and, at resorts and remote properties, accommodation. These are part of what the employee receives, and how they are treated, as a benefit, as a deduction, or as neither, has consequences for the wage base and for tax. That treatment should be decided once and recorded in the salary structure rather than handled case by case.",
          "Service charge raises a separate question. Where an establishment collects one and shares it with staff, the basis of distribution, by points, by grade, by department or equally, is a policy decision that staff will check closely. Published consumer guidance on whether and how service charge may be levied has also changed over time, so check the current position before relying on it.",
          "Whatever the policy, the useful discipline is that the distribution is calculated from a written rule and appears on the payslip as its own line, so that a waiter can see how their share was reached.",
        ],
      },
      {
        heading: "Opening and closing a seasonal workforce",
        body: [
          "A seasonal property hires most of its season staff in the same few weeks, and lets most of them go in the same few weeks after. Done by hand, that means dozens of joining kits and dozens of settlements at once, at the two busiest administrative moments of the year.",
          "Pre-boarding before the season, with documents collected and identifiers registered before arrival, means the first payroll of the season runs on complete records. At the end, exits recorded with dates let each settlement be assembled from the leave ledger and the payroll record rather than worked out under pressure.",
          "Returning staff are the strongest reason to keep this tidy. A cook who comes back every winter should be a rehire with a history, not a new joiner with a new set of forms.",
        ],
      },
    ],
    signals: [
      "A new property or outlet opens and needs its first full roster.",
      "Staff dispute their share of service charge and nobody can show the calculation.",
      "The season starts and forty joiners need to be on payroll by the first cut-off.",
    ],
    closing:
      "Guests never see any of this, which is the point. The roster, the split shift, the season's joiners and the service charge share are handled by rules the property wrote down once, so managers can spend the service on the floor.",
    questions: [
      {
        q: "Can HRMagix handle split shifts in our kitchens?",
        a: "Shift patterns are configured by the employer, with grace periods, overtime eligibility and multiple sessions in a day captured against the attendance ledger. The rule for a split shift is set once and applied to everyone on it.",
      },
      {
        q: "How do shifts that end after midnight get counted?",
        a: "As one shift attributed to the day it began, rather than split at midnight. That keeps the day complete and the overtime calculation correct.",
      },
      {
        q: "We provide staff meals and accommodation. How should they appear in payroll?",
        a: "As a decision recorded in the salary structure, applied identically to everyone it covers. Whether a given benefit affects the wage base or taxable income depends on how it is provided, so confirm the treatment with your adviser before configuring it.",
      },
      {
        q: "Can we onboard a whole season's hiring at once?",
        a: "Yes. Pre-boarding collects PAN, Aadhaar and bank documents before the start date, so a batch of joiners can be on the first payroll run with complete records.",
      },
      {
        q: "Can service charge distribution be shown on payslips?",
        a: "Pay components are configured in the salary structure, so a distributed share can be its own line. The distribution rule itself is your policy; write it down before you configure it, because staff will ask how it was calculated.",
      },
    ],
  },

  {
    slug: "logistics-and-warehousing",
    href: "/industries/logistics-and-warehousing",
    name: "Logistics & Warehousing",
    audience: "Warehouses, 3PL operators, transporters and last-mile delivery fleets",
    title: "Half your people are on the road, and the other half are on the night shift",
    standfirst:
      "Logistics runs on two workforces that never meet: warehouse teams working shifts at a fixed site, and drivers and field staff whose workplace is a route.",
    seo: {
      title: "HR Software for Logistics and Warehousing in India",
      description:
        "HR software for logistics in India: warehouse shift rosters, geo-tagged attendance for drivers and field staff, licence expiry alerts and multi-hub payroll.",
      keywords: [
        "hr software for logistics",
        "warehouse HR software",
        "logistics payroll software",
        "driver attendance software",
      ],
      focus: "hr software for logistics",
    },
    situation: [
      "A logistics business is a network of hubs, warehouses and routes. Inside the warehouse, work runs in shifts around inbound and outbound windows, often through the night, with peaks that track the customer's sales calendar. Outside it, drivers, delivery associates and field supervisors start and finish wherever the route takes them.",
      "Neither population fits an office attendance model. The warehouse needs rosters, shift detection and overtime. The road needs attendance that travels, and records of the licences and documents that make someone legally able to drive. HR software for logistics is judged on whether both can be paid correctly from one record across every hub.",
    ],
    pressures: [
      {
        title: "Peaks are set by someone else's calendar",
        body: "Warehouse volume follows the client's sale days and festive season. Extra shifts and overtime cluster into a few weeks, and an overtime rule that seemed minor in a quiet month decides a large share of the cost in a busy one.",
      },
      {
        title: "Drivers do not pass a biometric reader",
        body: "A driver who starts a route from a depot, or from home, needs attendance captured where the work starts. Mobile check-in with a geofence around the depot or hub is the method that reflects how the job is done.",
      },
      {
        title: "A driving licence is a condition of employment",
        body: "Driving licences and similar permits expire. A driver on the road with an expired licence is a legal exposure for the business, and the expiry date has to be known well before it arrives.",
      },
      {
        title: "Hubs open faster than HR can follow",
        body: "New hubs and dark stores open in new cities, often in new states, with their own Professional Tax and Labour Welfare Fund positions. Each one has to be configured, not just added to a list.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        why: "Warehouse rosters and geo-fenced mobile check-in for drivers are the two capture methods everything else depends on.",
      },
      {
        order: "Then",
        module: "Documents",
        href: "/features/documents",
        why: "Because driving licence and permit expiry alerts are the cheapest protection against an expired document on the road.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "So that overtime from peak weeks and state-wise PT and LWF for each hub resolve in one run.",
      },
      {
        order: "Then",
        module: "HR Analytics",
        href: "/solutions/hr-analytics",
        why: "Overtime cost by hub and attrition by location are the numbers operations leadership asks for first.",
      },
    ],
    deepDive: [
      {
        heading: "Attendance for people whose workplace is a route",
        body: [
          "For a driver or delivery associate the working day starts when they collect the vehicle or the first consignment, which may be at a hub, a client's warehouse or a parking yard. A fixed reader at head office measures none of that.",
          "Geo-fenced mobile check-in records that the person was at a known location when they said they started, with optional selfie validation where the business wants it. The point is a payable-days record that holds up, not tracking the route; attendance establishes the working day, and the route is the operations system's business.",
          "Where drivers return to a hub at the end of a run, a check-out at the same geofence closes the day. Where they do not, the employer has to decide what closes it, and write that rule down.",
        ],
      },
      {
        heading: "The warehouse night shift and the peak week",
        body: [
          "Warehouses frequently run through the night to meet morning dispatch. Night shifts cross midnight, rotate between teams, and carry a differential where the employer pays one. Each of those has to be calculated from the shift actually worked.",
          "Peak weeks add extra shifts and overtime on top. Because overtime is paid at a higher rate, and because state law and the Factories Act, where a warehouse is registered under it, set limits on working hours, the overtime rule has to be explicit about eligibility, rate and approval.",
          "The result worth aiming for is that the overtime bill for a peak week can be explained line by line: who worked which extra shift, on whose approval, at what rate. That is what operations and finance will both ask for.",
        ],
      },
      {
        heading: "Contracted loaders, agency drivers and your own payroll",
        body: [
          "Logistics businesses commonly use contract labour for loading, packing and peak capacity, sometimes alongside their own employees doing similar work. Under the Contract Labour (Regulation and Abolition) Act 1970, a principal employer has responsibilities that include ensuring contract workers are paid, and the Act and the state rules under it set the detail.",
          "The labour codes, in force since 21 November 2025, restate parts of this framework, and state rules under them should be checked before relying on any specific threshold or obligation.",
          "The administrative point is to keep employees and contract workers clearly distinct on the record, and to be able to produce the contractor's wage and statutory payment evidence when asked. Treating a contract worker as an employee, or the other way round, causes statutory problems in both directions.",
        ],
      },
    ],
    signals: [
      "A new hub opens in a state where the company has no registrations yet.",
      "The overtime bill for a peak month cannot be explained by hub or by shift.",
      "A road incident prompts the question of whether every driver's licence was valid.",
    ],
    closing:
      "Warehouse and road teams stay on different rhythms, as they must. What they share is one employee record, one attendance ledger and one payroll run, so that a network of hubs closes its month as one company.",
    questions: [
      {
        q: "How do drivers mark attendance if they never visit the office?",
        a: "Through mobile check-in with a GPS geofence around the depot, hub or client site where they start, with location tagging and optional selfie validation.",
      },
      {
        q: "Can we track driving licence expiry dates?",
        a: "Yes. Licences and permits held as documents against the employee carry expiry dates, and automated alerts go out before they lapse.",
      },
      {
        q: "Our warehouses run night shifts. How are they paid?",
        a: "The shift is held as one unit attributed to the day it began, auto-detected from the punch timestamp, with a night-shift differential where your policy pays one. Overtime is calculated from the shift definition and carried into payroll.",
      },
      {
        q: "Each hub is in a different state. Does that change payroll?",
        a: "Yes. Professional Tax and Labour Welfare Fund follow the employee's work location on the record, and leave schemes and holiday lists can be configured per hub. Confirm each state's current rules before configuring them.",
      },
      {
        q: "Do contract loaders go on our payroll?",
        a: "Usually not, if they are engaged through a contractor; they are the contractor's employees. As principal employer you still have obligations under contract labour law, so keep them distinct from your own staff and keep the contractor's payment evidence.",
      },
    ],
  },

  {
    slug: "staffing-and-recruitment",
    href: "/industries/staffing-and-recruitment",
    name: "Staffing & Recruitment",
    audience: "Staffing agencies, manpower suppliers and flexi-staffing firms",
    title: "Your employees work at someone else's site, on someone else's roster",
    standfirst:
      "A staffing firm is the legal employer of people it rarely sees, deployed to clients whose attendance rules, shifts and holidays are not its own.",
    seo: {
      title: "Payroll for Staffing Companies and Manpower Agencies",
      description:
        "Payroll for staffing companies in India: associates deployed across client sites, client-specific shifts and holidays, PF and ESI for every associate, one run.",
      keywords: [
        "payroll for staffing companies",
        "staffing agency payroll software",
        "manpower outsourcing payroll",
        "HRMS for staffing firms",
      ],
      focus: "payroll for staffing companies",
    },
    situation: [
      "A staffing firm's associates appear on its payroll and work on its clients' premises. The client decides the shift, the weekly off and the holiday list. The staffing firm pays the wage, deducts and deposits PF and ESI, issues the payslip and carries the statutory liability.",
      "That split is the whole difficulty. Attendance arrives from dozens of client sites in different formats, each client has its own rules, and the firm's margin depends on paying exactly what was earned and billing for it. Payroll for staffing companies is less one payroll than many small ones, each following a client's rules and all filed under the firm's registrations.",
    ],
    pressures: [
      {
        title: "Each client is its own rulebook",
        body: "Shift timings, weekly offs, holiday lists and overtime rules differ by client and often by client site. Treating the client site as a location with its own configuration is what lets one payroll respect them all.",
      },
      {
        title: "Attendance arrives late and from outside",
        body: "Client supervisors sign off attendance on their schedule, not yours. Capturing it at the site, through mobile check-in with a geofence around the client's premises, removes the wait for a sheet.",
      },
      {
        title: "Statutory liability does not move to the client",
        body: "PF, ESI, Professional Tax and LWF for deployed associates are deducted and deposited by the staffing firm as employer. An error is the firm's error, multiplied across every associate it affects.",
      },
      {
        title: "Deployments start and end constantly",
        body: "Associates move between clients, finish assignments and join new ones. Each move is a dated change, and continuity of service has to survive it, because gratuity and leave are computed from it.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Employee Management",
        href: "/solutions/employee-management",
        why: "Because each associate's current client, site and statutory identifiers have to be right before attendance or pay can be.",
      },
      {
        order: "Then",
        module: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        why: "Client sites as geo-fenced locations, each with its own shifts and holidays, is how attendance stops arriving on spreadsheets.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "So that every associate's PF, ESI, PT and LWF resolve in one run, with returns produced from the figures that were paid.",
      },
      {
        order: "Then",
        module: "Employee Self-Service",
        href: "/solutions/employee-self-service",
        why: "Associates never visit your office. Their payslips, UAN and leave have to reach them on a phone.",
      },
    ],
    deepDive: [
      {
        heading: "Modelling the client site as a place of work",
        body: [
          "The cleanest way to run deployed staff is to treat each client site as a location on the employee record, with its own shift patterns, weekly offs, holiday list and geofence. An associate deployed there inherits that configuration; moved elsewhere, they inherit the new one from the date of the move.",
          "This keeps two things true at once. The associate's attendance is measured against the rules of the place they actually work. And the firm still has one employee record, one payroll run and one set of statutory returns for everyone it employs.",
          "Because the location is also what decides state-wise Professional Tax and LWF, a deployment to a client in another state changes those deductions correctly without anyone remembering to.",
        ],
      },
      {
        heading: "Deployment changes without breaking continuity",
        body: [
          "An associate who finishes one assignment and starts another the following week has not left the firm. Recording the move as a new joining, as is common when each client is run on a separate sheet, resets their service.",
          "Continuity matters concretely. Gratuity eligibility under the Payment of Gratuity Act 1972, s.4, is based on continuous service, and leave accrual is computed from the date of joining. A redeployment should be a dated change on the existing record.",
          "Where an assignment ends and the associate leaves, the exit should be recorded with its date and the full-and-final settlement assembled from the ledger, so that a later rehire starts from an accurate history.",
        ],
      },
      {
        heading: "Contract labour law from the supplier's side",
        body: [
          "Where a staffing firm supplies workers to a client's establishment, the arrangement commonly falls within the Contract Labour (Regulation and Abolition) Act 1970, under which the contractor may need a licence and the client, as principal employer, has its own registration and responsibilities. State rules made under the Act set much of the detail.",
          "The labour codes, in force since 21 November 2025, revise parts of this framework. Licensing thresholds and obligations should be checked against the current notified position for each state before being relied on.",
          "The administrative consequence is that the firm must be able to show, per client, that associates were paid and statutory dues deposited. A payroll that can report by client site produces that evidence without anyone rebuilding it from bank statements.",
        ],
      },
    ],
    signals: [
      "A new client contract adds a few hundred associates at sites in another state.",
      "A client asks for proof that PF and ESI were deposited for the associates on its premises.",
      "Attendance sheets from client sites arrive after the payroll cut-off every month.",
    ],
    closing:
      "The firm's clients keep setting the rules for their own floors. What the platform holds is each of those rule sets against the right associates, so the firm can pay and file for everyone from one record and report by client when asked.",
    questions: [
      {
        q: "Can different client sites have different shifts and holidays?",
        a: "Yes. Shift patterns, grace periods, weekly offs and holiday calendars are configured per location, and a client site can be a location. Associates follow the configuration of the site they are deployed to.",
      },
      {
        q: "How do associates at client sites mark attendance?",
        a: "Through mobile check-in with a GPS geofence configured around the client's premises, with location tagging and optional selfie validation. Where a client site has its own biometric device, supported devices can also sync attendance.",
      },
      {
        q: "Who deducts PF and ESI for deployed associates?",
        a: "Ordinarily the staffing firm, as their employer. The deductions are derived from each associate's salary structure and the returns are produced from the same run, so the totals tie back to what was filed.",
      },
      {
        q: "What happens to service when an associate moves to a new client?",
        a: "It continues, because the move is a dated change on the existing record rather than a new record. Gratuity eligibility and leave accrual both depend on that continuity.",
      },
      {
        q: "Can we report payroll cost by client?",
        a: "Reporting reads the live record by location, department and grade, so cost can be reported by client site where each site is configured as a location. Payroll is not an invoicing system, but it provides the figures billing depends on.",
      },
      {
        q: "Do we need a contract labour licence?",
        a: "Possibly, depending on the arrangement, the number of workers and the state. That is a legal question for your advisers; check the current notified position, including under the labour codes, for each state you supply into.",
      },
    ],
  },

  {
    slug: "education",
    href: "/industries/education",
    name: "Education",
    audience: "Schools, colleges, coaching institutes and university departments",
    title: "A year that starts in June and a payroll that starts in April",
    standfirst:
      "Educational institutions run on the academic calendar, with vacations, term-time loads and visiting faculty, while payroll and tax still run on the financial year.",
    seo: {
      title: "HR Software for Schools, Colleges and Institutes",
      description:
        "HR software for schools in India: teaching and non-teaching staff, vacations on the academic calendar, visiting faculty, and statutory payroll in one record.",
      keywords: [
        "hr software for schools",
        "school payroll software",
        "HRMS for colleges",
        "education HR software",
      ],
      focus: "hr software for schools",
    },
    situation: [
      "A school or college employs two quite different groups. Teaching staff, whose year is shaped by terms, examinations and vacations, and non-teaching staff, administration, accounts, transport, maintenance, who often work through the vacations on an ordinary leave scheme. Visiting and guest faculty add a third group paid per lecture or per term.",
      "The academic calendar and the financial year do not line up, and that mismatch runs through everything: leave years, appraisal cycles, increments and joining dates cluster around the start of the academic session while TDS and statutory filing follow April to March. HR software for schools has to hold both calendars without forcing one onto the other.",
    ],
    pressures: [
      {
        title: "Vacation is not ordinary leave",
        body: "Teachers commonly receive vacation instead of some earned leave, and may be recalled for examination or admission duty during it. Leave schemes for teaching and non-teaching staff have to be different, and both have to be correct.",
      },
      {
        title: "Joining and leaving cluster around the session",
        body: "Most teaching appointments start near the beginning of the academic year and most resignations land near its end. Onboarding and exits come in seasonal waves rather than steadily.",
      },
      {
        title: "Visiting faculty are paid differently",
        body: "Guest lecturers and visiting faculty paid per session or per term may be treated as professionals rather than employees, which changes TDS and statutory treatment. The category has to be recorded rather than assumed.",
      },
      {
        title: "Qualifications are part of the appointment",
        body: "Teaching appointments often depend on prescribed qualifications, and regulators and affiliating bodies may ask for evidence. The certificates belong on the record, not in a cupboard in the principal's office.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Leave Management",
        href: "/solutions/leave-management",
        why: "Because separate leave schemes for teaching and non-teaching staff, aligned to the academic calendar, is where institutions most often improvise.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "So that increments effective at the session start, TDS on the financial year and PF and ESI all come from one run.",
      },
      {
        order: "Then",
        module: "Employee Management",
        href: "/solutions/employee-management",
        why: "Qualification certificates, appointment letters and staff categories belong on the record, ready for an inspection or affiliation review.",
      },
      {
        order: "Then",
        module: "Onboarding & Lifecycle",
        href: "/solutions/onboarding-and-lifecycle",
        why: "Because appointments cluster at the start of the session, and pre-boarding lets new faculty arrive with their paperwork done.",
      },
    ],
    deepDive: [
      {
        heading: "Two calendars, held side by side",
        body: [
          "An institution's working year runs from session start to session end. Its payroll year runs from April to March, because that is the year TDS, Form 16 and the statutory returns follow. Forcing everything onto one calendar is where errors begin.",
          "The workable arrangement is to let each calendar govern what it should. Leave years and the holiday list follow the academic calendar where the institution's policy says so. Salary, tax projection and statutory filing follow the financial year. Increments carry their own effective date, often the session start, and effective-dated records apply them from that date without rewriting the months before.",
          "The question to settle in writing is which events follow which calendar, so that a teacher joining in June knows when their leave year resets and when their tax year does.",
        ],
      },
      {
        heading: "Vacation, recall and the non-teaching year",
        body: [
          "Vacation for teaching staff is usually a feature of the appointment rather than leave applied for. Where staff are recalled for examination, evaluation or admission duty during vacation, many institutions compensate with earned leave or comp-off, and that rule needs to be written and applied identically.",
          "Non-teaching staff typically work through the vacations on an ordinary leave scheme with earned, casual and sick leave. Running them on the teaching scheme, or the reverse, is a common source of complaint.",
          "Leave rules for private institutions may be shaped by state education rules, affiliation conditions or the Shops and Establishments law of the state, depending on the institution. Those vary, so confirm what applies to yours before configuring it.",
        ],
      },
      {
        heading: "Visiting faculty and the per-session payment",
        body: [
          "Guest and visiting faculty are often paid a fee per lecture, per course or per term. Depending on the terms, that may be a professional fee rather than salary, with tax deducted under a different section and no PF or ESI, or it may be employment. The distinction depends on the arrangement, not on the label.",
          "Recording each person's category on their record, and paying them in the way that category requires, avoids the two common errors: running a visiting lecturer through salary payroll by default, or leaving someone who is in effect an employee outside it.",
          "Where the arrangement is unclear, take advice before the first payment rather than after the year's TDS returns are filed.",
        ],
      },
    ],
    signals: [
      "An affiliation or accreditation review asks for staff qualifications and appointment records.",
      "Teachers dispute how vacation recall duty was compensated.",
      "A new campus or branch opens with its own staff and calendar.",
    ],
    closing:
      "The academic calendar stays the institution's. What the platform carries is the administration that has to fit around it: leave on the session's terms, pay on the financial year's, and every teacher's record in one place.",
    questions: [
      {
        q: "Can teaching and non-teaching staff have different leave schemes?",
        a: "Yes. Leave schemes are configured by grade and category, so teaching staff can follow a vacation-based scheme while non-teaching staff follow an earned, casual and sick leave scheme.",
      },
      {
        q: "Can our leave year follow the academic session instead of the calendar year?",
        a: "Leave policy, including when balances reset and carry forward, is configured by the employer. Salary, TDS and statutory filing still follow the financial year, as they must.",
      },
      {
        q: "How are increments that take effect at the start of the session handled?",
        a: "As effective-dated changes on each record. The new salary applies from the date set, and the months before it are left as they were.",
      },
      {
        q: "Are visiting faculty paid through payroll?",
        a: "It depends on the arrangement. A per-session professional fee is usually outside salary payroll and taxed under a different section; employment is not. Record each person's category, and take advice where the arrangement is unclear.",
      },
      {
        q: "Can we keep teachers' qualification certificates on their records?",
        a: "Yes. Documents are held against the employee with role-based access, and where a certificate carries an expiry date an automated alert can be raised before it lapses.",
      },
    ],
  },

  {
    slug: "construction",
    href: "/industries/construction",
    name: "Construction",
    audience: "Builders, EPC contractors, infrastructure firms and specialist subcontractors",
    title: "The workplace moves every time a project ends",
    standfirst:
      "A construction company's employees work on sites that open, run for a few years and close, alongside contract labour supplied by others, in states the head office may never have registered in.",
    seo: {
      title: "HR Software for Construction Companies in India",
      description:
        "HR software for construction in India: site-based attendance with geofences, project-wise staff, contract labour records, and state-wise payroll as sites move.",
      keywords: [
        "hr software for construction",
        "construction payroll software",
        "site attendance software",
        "contract labour management",
      ],
      focus: "hr software for construction",
    },
    situation: [
      "A construction firm's own employees, engineers, supervisors, safety officers, stores and accounts staff, are posted to project sites that may be hundreds of kilometres from head office. Most of the workers on any site are engaged through contractors and subcontractors. When a project ends, the site closes, and its staff move to the next one.",
      "Every one of those facts shapes HR. Attendance has to be captured at temporary locations with no permanent infrastructure. Payroll has to follow staff as they move between sites and states. And the principal employer's responsibilities for contract labour sit on top of everything. HR software for construction has to treat the project site as the unit of work.",
    ],
    pressures: [
      {
        title: "Sites are temporary, attendance still has to be real",
        body: "A site office may be a container. Geo-fenced mobile check-in around the site boundary, or a shared kiosk at the gate, captures attendance where the work is without permanent hardware.",
      },
      {
        title: "Staff move between projects and states",
        body: "A site engineer posted from one state to another changes Professional Tax and LWF applicability, and possibly leave rules, from the date of transfer. A transfer has to be a dated change, not a new employee.",
      },
      {
        title: "Contract labour is most of the site",
        body: "The bulk of site workers are engaged by contractors. The principal employer still carries responsibilities for their wages and conditions, and needs to be able to show the contractor met them.",
      },
      {
        title: "Safety credentials are not optional",
        body: "Operator certificates, safety training records and similar credentials carry expiry dates. On a construction site, knowing they are current is part of running the site safely.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        why: "Because geo-fenced site attendance is what makes payable days real when the workplace is a temporary project site.",
      },
      {
        order: "Then",
        module: "Employee Management",
        href: "/solutions/employee-management",
        why: "Project postings, transfers between sites and states, and statutory identifiers have to be right on the record as people move.",
      },
      {
        order: "Then",
        module: "Documents",
        href: "/features/documents",
        why: "Certificate and licence expiry alerts keep safety and operator credentials current across every site.",
      },
      {
        order: "Then",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "So that state-wise deductions follow each employee's current site, and site allowances are applied by rule.",
      },
    ],
    deepDive: [
      {
        heading: "The project site as a location with a start and an end",
        body: [
          "A project site has a life: mobilisation, construction, handover, closure. Configuring it as a location with its own geofence, shifts, holidays and state from the day it opens lets staff posted there inherit the right rules, and lets the site be closed cleanly when the project ends.",
          "Site allowances, hardship or remote-location allowances and travel entitlements that some firms pay are policy decisions. Holding them as salary components tied to the posting means they start and stop with the posting rather than being remembered or forgotten.",
          "Reporting by site then follows naturally: headcount, attendance and payroll cost per project, which is what a project manager and a finance team both want to see.",
        ],
      },
      {
        heading: "Building workers and the BOCW framework",
        body: [
          "Building and other construction work is governed by the Building and Other Construction Workers (Regulation of Employment and Conditions of Service) Act 1996, together with the related cess Act, under which establishments register, construction workers may register with the state welfare board, and a cess is levied on the cost of construction. States make their own rules and run their own boards.",
          "The labour codes, in force since 21 November 2025, fold much of this into the Occupational Safety, Health and Working Conditions Code and the Code on Social Security. Thresholds and state rules should be checked for the current position before any of it is relied on.",
          "None of this is calculated by an HR platform, and HRMagix does not claim to. What the record can do is hold each worker's category and registration details, and keep the evidence the business is asked to produce.",
        ],
      },
      {
        heading: "Contract labour and the principal employer",
        body: [
          "Most site workers are engaged through contractors. Under the Contract Labour (Regulation and Abolition) Act 1970, a principal employer of a covered establishment registers, and has responsibilities that include ensuring wages are paid to contract workers where the contractor fails to pay. The thresholds and procedures are set by the Act and state rules, and are worth confirming for each site's state.",
          "The administrative discipline is to keep contract workers clearly distinct from your own employees, and to hold, per site, the contractor's evidence of wage and statutory payments. That evidence is far easier to gather monthly than to reconstruct after a claim.",
          "Your own employees on the same site remain on your payroll under your registrations. Keeping the two populations distinct is what keeps both statutory positions clean.",
        ],
      },
    ],
    signals: [
      "A new project is won in a state where the company has no registrations.",
      "A site closes and its staff have to be transferred to three other projects on the same date.",
      "An inspection asks the principal employer for evidence that contract workers were paid.",
    ],
    closing:
      "Projects keep starting and ending. The employee record is what stays, so that a site engineer's postings, allowances and service history follow them from one project to the next.",
    questions: [
      {
        q: "How do we capture attendance at a site with no permanent office?",
        a: "Through mobile check-in with a GPS geofence configured around the site, with location tagging and optional selfie validation, or a shared kiosk at the site gate.",
      },
      {
        q: "What happens to payroll when an engineer moves to a site in another state?",
        a: "The transfer is a dated change on the existing record. Professional Tax and LWF follow the new work location from that date, and continuity of service is preserved.",
      },
      {
        q: "Does HRMagix manage contract labour on our sites?",
        a: "HRMagix runs HR and payroll for your own employees. Contract workers engaged through contractors are the contractor's employees; your obligations as principal employer follow contract labour law, and you should keep the contractor's payment evidence for each site.",
      },
      {
        q: "Does HRMagix calculate BOCW cess?",
        a: "No. BOCW cess is levied on construction cost under the cess Act and state rules, not calculated in payroll. Confirm the current position with your advisers, particularly now that the labour codes are in force and state rules are being finalised.",
      },
      {
        q: "Can we track safety and operator certificates?",
        a: "Yes. Certificates held as documents against the employee carry expiry dates, with automated alerts before they lapse.",
      },
    ],
  },

  {
    slug: "nonprofits",
    href: "/industries/nonprofits",
    name: "Nonprofits",
    audience: "NGOs, trusts, foundations and Section 8 companies",
    title: "Every salary is paid from a grant that ends on a date",
    standfirst:
      "A nonprofit's people are funded project by project, report to donors as well as managers, and often work in the field far from any office.",
    seo: {
      title: "HR Software for NGOs, Trusts and Nonprofits in India",
      description:
        "HR software for NGO teams in India: staff linked to projects and grants, field attendance, fixed-term contracts that end with funding, and statutory payroll.",
      keywords: [
        "hr software for ngo",
        "NGO payroll software",
        "HRMS for nonprofits",
        "nonprofit HR software",
      ],
      focus: "hr software for ngo",
    },
    situation: [
      "In most nonprofits, a large share of the team is funded by a specific grant for a specific project. Their role exists because the programme does, their contract often ends when the funding does, and the donor expects to see what their money paid for. Alongside them sit core staff funded from general funds, consultants, and in many organisations volunteers who are not employees at all.",
      "Field staff may work in villages and districts far from the office, and the organisation may have a small head-office team that does HR, finance and compliance together. HR software for NGO teams has to keep the statutory payroll correct for a small employer while letting every salary be traced to the project it was charged to.",
    ],
    pressures: [
      {
        title: "Staff cost has to be traced to a project",
        body: "Donors and auditors ask what a grant paid for. Each employee's project, cost centre or department has to be on the record, so payroll cost can be reported by project without a spreadsheet allocation every quarter.",
      },
      {
        title: "Contracts end with the funding",
        body: "Fixed-term contracts tied to grant periods mean renewals and exits on known dates. Each one needs a decision in time, and each exit needs a correct settlement.",
      },
      {
        title: "Field staff need attendance that travels",
        body: "Programme staff working across districts rarely pass an office. Mobile check-in with location tagging records their working days accurately.",
      },
      {
        title: "Statutory rules apply to nonprofits too",
        body: "PF, ESI, Professional Tax, TDS and gratuity follow the same rules for a trust or Section 8 company as for any employer, with the same returns and the same deadlines.",
      },
    ],
    priority: [
      {
        order: "First",
        module: "Payroll",
        href: "/solutions/payroll",
        why: "Statutory payroll with cost reported by department or project is what both compliance and donor reporting depend on.",
      },
      {
        order: "Then",
        module: "Employee Management",
        href: "/solutions/employee-management",
        why: "Because the project, contract end date and staff category of each person have to be on the record to be reported or acted on.",
      },
      {
        order: "Then",
        module: "Attendance & Shifts",
        href: "/solutions/attendance-and-shifts",
        why: "So that field staff working across districts record payable days from a phone.",
      },
      {
        order: "Then",
        module: "HR Analytics",
        href: "/solutions/hr-analytics",
        why: "Headcount and cost by department or location give programme heads and donors the figures they ask for.",
      },
    ],
    deepDive: [
      {
        heading: "Linking each salary to the grant that pays it",
        body: [
          "Grant reporting asks a precise question: which people worked on this project, for how long, and what did they cost. If the answer is assembled from a payroll export and an allocation spreadsheet each quarter, it is only as reliable as the spreadsheet.",
          "Holding the project or cost centre as a dated attribute of the employee record answers it directly. When someone moves from one project to another, the change is effective-dated, so a report for the earlier grant period still shows them where they were.",
          "Where one person is split across two grants, the split percentages are the organisation's decision and the donor's rules. Recording the decision, and when it changed, is what lets it be defended at audit.",
        ],
      },
      {
        heading: "Fixed-term contracts and the end of a grant",
        body: [
          "Grant-funded roles are commonly offered on fixed-term contracts matching the funding period. As the end date approaches, the organisation has to decide whether to renew, redeploy to another project, or end the engagement, and the employee deserves to know in good time.",
          "A contract end date held on the record can drive that decision on schedule rather than leaving it to the last week. If the contract ends, the exit is recorded with its date and the full-and-final settlement assembled from the leave ledger and payroll record.",
          "Gratuity under the Payment of Gratuity Act 1972, s.4, generally follows continuous service of five years, subject to the Act's exceptions, so successive renewals without a break can matter. Whether a series of contracts counts as continuous service is a question to check rather than assume.",
        ],
      },
      {
        heading: "Employees, consultants and volunteers",
        body: [
          "Nonprofits often work with three kinds of people who look similar on the ground. Employees on payroll with full statutory treatment. Consultants paid a professional fee, outside payroll and taxed differently. And volunteers, who may receive a stipend or expenses but are not employees.",
          "Getting the category right matters for PF, ESI and TDS, and for the organisation's own registrations and reporting. The category should be a field on the record, decided with advice where an arrangement is borderline, rather than an understanding held by one person.",
          "Organisations receiving foreign contribution have additional reporting requirements on how those funds are used, including on salaries. Those rules are specific and change, so check the current position with your advisers.",
        ],
      },
    ],
    signals: [
      "A donor asks for staff costs by project for a grant audit.",
      "Several fixed-term contracts end in the same month as a grant closes.",
      "A new programme starts in a new state with field staff in several districts.",
    ],
    closing:
      "The organisation's work is its programmes. The platform keeps the administration around them in order, so that every salary is paid correctly, traced to its grant, and ready to be shown to whoever asks.",
    questions: [
      {
        q: "Can we report staff costs by project or grant?",
        a: "Reporting reads the live record by department, location and grade. Where each project is set up as a department or cost centre on the record, payroll cost can be reported by project, and effective dating keeps past periods accurate after people move.",
      },
      {
        q: "Do PF, ESI and gratuity apply to an NGO?",
        a: "Generally yes, on the same basis as any other employer, subject to each Act's coverage rules. Check coverage for your organisation, including any registration you already hold.",
      },
      {
        q: "How do field staff in remote districts mark attendance?",
        a: "Through mobile check-in with location tagging, with a geofence where there is a fixed location such as a field office, and optional selfie validation.",
      },
      {
        q: "Can we be reminded before fixed-term contracts end?",
        a: "Hold the contract end date on the employee record, and the signed contract as a document against it, so the date is visible to whoever has to decide. Plan renewal or exit reviews ahead of the grant end rather than in the final week.",
      },
      {
        q: "Should consultants and volunteers be on payroll?",
        a: "Usually not. Consultants on professional fees are taxed differently from employees, and volunteers are not employees. Record each person's category and take advice where an arrangement is unclear.",
      },
    ],
  },
];
