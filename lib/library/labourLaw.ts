import type { LibCollection, LibPage } from "./types";

const G = "/resources/hr-and-payroll-glossary";
const L = "/resources/labour-law";

const CODES_STATUS =
  "The four labour codes were passed by Parliament in 2019 and 2020, and the Government announced their implementation in late 2025. How each provision applies in practice depends on central and state rules and on transition provisions, so check the current status for your establishment.";

const pages: LibPage[] = [
  {
    slug: "code-on-wages",
    name: "Code on Wages",
    title: "The Code on Wages 2019: one definition of wages for four old laws",
    standfirst:
      "The Code on Wages brings minimum wages, payment of wages, bonus and equal pay under one statute, and gives them a common definition of wages that payroll teams need to understand.",
    seo: {
      title: "Code on Wages 2019: What It Means for Payroll Teams",
      description:
        "The Code on Wages explained for HR and payroll: the laws it replaces, the common definition of wages, minimum wages, timely payment, bonus and records.",
      keywords: ["code on wages", "code on wages 2019", "wage code definition of wages", "new wage code india"],
    },
    sections: [
      {
        heading: "What the Code covers",
        body: [
          "The Code on Wages 2019 consolidates four earlier central laws: the Payment of Wages Act 1936, the Minimum Wages Act 1948, the Payment of Bonus Act 1965 and the Equal Remuneration Act 1976. It deals with how much people must be paid at minimum, when and how wages are paid, what may be deducted, statutory bonus, and equal pay without discrimination on grounds of gender.",
          "Its practical significance for payroll is a single definition of wages that the other labour codes also draw on.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "Unlike some of the laws it replaces, the Code is framed to apply minimum wage and timely payment provisions to employees broadly, not only to listed employments or to wages below a ceiling. Bonus provisions keep their own eligibility conditions. Check the Code and its rules for the exact scope that applies to your establishment.",
        ],
      },
      {
        heading: "The definition of wages",
        body: [
          "The Code defines wages to include basic pay, dearness allowance and retaining allowance, and lists components that are excluded, such as certain allowances, the employer's contributions to PF and pension, gratuity and bonus. It then limits how much of total remuneration can sit in the excluded components: amounts above the limit are added back into wages.",
          "Because PF, gratuity and other contributions follow the definition of wages, a salary structure with a very low basic and large allowances may produce a higher wage base under the Code than under the old laws.",
        ],
        note: "The exact add-back limit, and how it interacts with each statute's own wage base, should be checked against the Code as notified and the rules in force before restructuring salaries.",
      },
      {
        heading: "What it asks of records and payroll",
        list: {
          style: "bullet",
          items: [
            "Pay at least the applicable minimum wage, set by the appropriate government, with regard to a floor wage fixed centrally.",
            "Pay wages within the time limits the Code sets, including on separation.",
            "Make only the deductions the Code permits, within the overall limit.",
            "Keep registers and issue wage slips in the form the rules prescribe.",
            "Calculate and pay statutory bonus where the bonus provisions apply.",
          ],
        },
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Wages", "The common definition used for statutory calculations, with listed inclusions and exclusions"],
            ["Floor wage", "A central baseline below which state minimum wages should not be fixed"],
            ["Appropriate government", "The central or state government that fixes minimum wages for an employment"],
            ["Wage period", "The period for which wages are paid: daily, weekly, fortnightly or monthly"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS, "Until the Code's provisions and the matching state rules apply to you, the older Acts and their rules may still govern parts of your payroll."],
      },
    ],
    faqs: [
      { q: "Does the Code on Wages change PF contributions?", a: "Not directly; PF is governed by social security law. But the Code's definition of wages is used across the codes, so a structure with a low basic may face a higher base for contributions. Check the current position before changing structures." },
      { q: "Does the Code fix one national minimum wage?", a: "It provides for a floor wage set by the central government. Actual minimum wages are fixed by the appropriate government and vary by state, employment and skill level." },
      { q: "Is the Payment of Bonus Act still relevant?", a: "Its substance carries into the Code. Whether you apply the old Act or the Code's provisions depends on the implementation status and rules where you operate." },
    ],
    related: [
      { label: "Salary Structure Guide", href: "/hr/topics/salary-structure", note: "How basic and allowances are designed." },
      { label: "Basic pay (glossary)", href: `${G}/basic-pay`, note: "The component most statutory calculations start from." },
      { label: "Minimum Wages Act", href: `${L}/minimum-wages-act`, note: "The older law the Code replaces." },
      { label: "Payment of Bonus Act", href: `${L}/payment-of-bonus-act`, note: "Statutory bonus explained." },
    ],
    verify:
      "Check the current implementation status of the Code on Wages, the central and state rules in force for your establishment, the add-back limit on excluded components, the floor wage, payment time limits and any transition provisions.",
  },
  {
    slug: "social-security-code",
    name: "Code on Social Security",
    title: "The Code on Social Security 2020: PF, ESI, gratuity and maternity in one statute",
    standfirst:
      "The Code on Social Security brings provident fund, state insurance, gratuity, maternity benefit and several other laws together, and extends social security language to gig and platform workers.",
    seo: {
      title: "Code on Social Security 2020: An Explainer for Employers",
      description:
        "The Code on Social Security explained for employers: the laws it consolidates, PF, ESI, gratuity, maternity benefit, gig workers and what payroll must track.",
      keywords: ["code on social security", "social security code 2020", "labour code social security", "gig workers social security code"],
    },
    sections: [
      {
        heading: "What the Code covers",
        body: [
          "The Code on Social Security 2020 consolidates nine central laws, including the Employees' Provident Funds and Miscellaneous Provisions Act 1952, the Employees' State Insurance Act 1948, the Payment of Gratuity Act 1972, the Maternity Benefit Act 1961 and the Employees' Compensation Act 1923.",
          "It keeps the institutions employers already deal with, such as the EPFO and ESIC, and provides for social security schemes for unorganised, gig and platform workers.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "Each chapter has its own coverage: provident fund, state insurance, gratuity and maternity benefit each apply to establishments and employees meeting conditions set in the Code and its notifications. Coverage thresholds and wage limits come from the Code, its schedules and government notifications, and should be checked for each chapter.",
        ],
      },
      {
        heading: "What it asks of records and payroll",
        list: {
          style: "bullet",
          items: [
            "Register the establishment where a chapter applies and deposit contributions on time.",
            "Calculate contributions on the wage base the Code defines, which draws on the Code on Wages definition.",
            "Pay gratuity on separation after qualifying service, and keep service records that support it.",
            "Provide maternity benefit and keep the records it requires.",
            "Report accidents and maintain the registers the rules prescribe.",
          ],
        },
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Provident fund", "Retirement savings with employee and employer contributions, administered by the EPFO"],
            ["Employees' State Insurance", "Medical and cash benefits funded by contributions, administered by ESIC"],
            ["Gratuity", "A lump sum on leaving after qualifying service"],
            ["Gig and platform workers", "Workers outside a traditional employment relationship, for whom the Code provides for schemes"],
            ["Fixed-term employee", "An employee on a fixed-term contract; the Code addresses gratuity for such employees"],
          ],
        },
      },
      {
        heading: "Today's figures the site uses",
        body: [
          "This site's calculators use the rates under the existing schemes: EPF 12% employee and 12% employer on PF wages, with the ₹15,000 wage ceiling for the pension share; ESI 0.75% employee and 3.25% employer for employees with wages up to ₹21,000 a month; gratuity of 15 days' wages per completed year after five years' service, up to ₹20,00,000. These may be revised by notification under the Code.",
        ],
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS],
        note: "Gratuity for fixed-term employees, the wage definition and contribution bases are the areas most likely to change payroll calculations. Check each before relying on old practice.",
      },
    ],
    faqs: [
      { q: "Does the Code replace the EPF and ESI schemes?", a: "It consolidates the Acts, but the schemes and the bodies that run them continue. Contribution rates and wage limits are set by the Code and notifications under it." },
      { q: "Does the Code change gratuity eligibility?", a: "It contains provisions on gratuity for fixed-term employees that differ from the five-year rule in the 1972 Act. Check the provision as notified and its effective position for your establishment." },
      { q: "Do employers contribute for gig workers?", a: "The Code provides for schemes for gig and platform workers funded in part by aggregators. Whether and how this affects your organisation depends on the notified schemes." },
    ],
    related: [
      { label: "Provident Fund (EPF) Guide", href: "/hr/topics/provident-fund", note: "How PF works in payroll today." },
      { label: "Employee State Insurance (ESI) Guide", href: "/hr/topics/employee-state-insurance", note: "ESI coverage and contributions." },
      { label: "Gratuity Guide", href: "/hr/topics/gratuity", note: "Eligibility and the formula." },
      { label: "Maternity benefit (glossary)", href: `${G}/maternity-benefit`, note: "The benefit defined." },
    ],
    verify:
      "Check the implementation status of the Code on Social Security, the rules and schemes notified under it, coverage thresholds per chapter, current EPF and ESI rates and wage limits, gratuity provisions for fixed-term employees, and any gig worker contribution requirements.",
  },
  {
    slug: "industrial-relations-code",
    name: "Industrial Relations Code",
    title: "The Industrial Relations Code 2020: disputes, unions and standing orders",
    standfirst:
      "The Industrial Relations Code covers trade unions, standing orders and industrial disputes, including the rules on lay-off, retrenchment and closure that shape how employment ends.",
    seo: {
      title: "Industrial Relations Code 2020: A Guide for HR Teams",
      description:
        "The Industrial Relations Code explained: the laws it replaces, standing orders, fixed-term employment, grievance committees, disputes, lay-off and retrenchment.",
      keywords: ["industrial relations code", "industrial relations code 2020", "ir code india", "ir code standing orders"],
    },
    sections: [
      {
        heading: "What the Code covers",
        body: [
          "The Industrial Relations Code 2020 consolidates the Trade Unions Act 1926, the Industrial Employment (Standing Orders) Act 1946 and the Industrial Disputes Act 1947. It deals with recognition of unions, service conditions set out in standing orders, how disputes are raised and resolved, and the conditions for lay-off, retrenchment and closure.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "Most provisions apply to industrial establishments and to workers as the Code defines them, which generally excludes people employed mainly in managerial or administrative roles and some supervisory roles above a wage level. Several chapters, including standing orders and prior permission for lay-off or retrenchment, apply only above employee thresholds that the Code sets and governments can vary.",
        ],
      },
      {
        heading: "What it asks of HR",
        list: {
          style: "bullet",
          items: [
            "Have standing orders, certified or model, covering classification, hours, leave, misconduct and termination where the chapter applies.",
            "Set up a grievance redressal committee where required.",
            "Follow notice, compensation and permission requirements before lay-off, retrenchment or closure.",
            "Give notice before changing service conditions where the Code requires it.",
            "Keep records of workers, disputes and settlements.",
          ],
        },
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Worker", "The class of employee most IR protections apply to, as defined in the Code"],
            ["Fixed-term employment", "Engagement for a set period, with conditions on parity of terms"],
            ["Retrenchment", "Termination by the employer for reasons other than discipline, subject to notice and compensation"],
            ["Standing orders", "Written conditions of service that bind employer and workers"],
            ["Reskilling fund", "A fund the Code provides for retrenched workers"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS],
      },
    ],
    faqs: [
      { q: "Does the IR Code apply to managers?", a: "Most protections apply to workers as defined, and the definition excludes many managerial and administrative roles. Check the definition against each role." },
      { q: "Is fixed-term employment allowed?", a: "The Code recognises fixed-term employment, subject to conditions such as parity of hours, wages and benefits with permanent workers doing similar work." },
      { q: "When is government permission needed for retrenchment?", a: "Only for establishments above a threshold set in the Code, which states may vary. Check the current threshold for your state." },
    ],
    related: [
      { label: "Standing Orders Act", href: `${L}/standing-orders-act`, note: "The older Act on service rules." },
      { label: "Workplace Grievances Guide", href: "/hr/topics/workplace-grievances", note: "Handling complaints fairly." },
      { label: "HR Policies Guide", href: "/hr/topics/hr-policies", note: "Writing the rules employees work under." },
    ],
    verify:
      "Check the implementation status of the Industrial Relations Code, the central and state rules in force, employee thresholds for standing orders and for prior permission on lay-off, retrenchment and closure, the definition of worker and fixed-term employment conditions.",
  },
  {
    slug: "osh-code",
    name: "Occupational Safety, Health and Working Conditions Code",
    title: "The OSH Code 2020: safety, working hours and contract labour",
    standfirst:
      "The Occupational Safety, Health and Working Conditions Code brings factories, contract labour, migrant workers and several sector laws together, and sets the framework for hours, leave and welfare.",
    seo: {
      title: "OSH Code 2020: Safety, Hours and Working Conditions",
      description:
        "The OSH code explained for employers: the laws it consolidates, registration, working hours and overtime, leave, contract labour and the records to keep.",
      keywords: ["osh code", "occupational safety health and working conditions code", "osh code 2020", "osh code working hours"],
    },
    sections: [
      {
        heading: "What the Code covers",
        body: [
          "The Occupational Safety, Health and Working Conditions Code 2020 consolidates thirteen central laws, including the Factories Act 1948, the Contract Labour (Regulation and Abolition) Act 1970, the Inter-State Migrant Workmen Act 1979, and laws for mines, docks, plantations, building workers and others.",
          "It deals with registration of establishments, duties of employers on safety and health, working hours, overtime, annual leave, welfare facilities, and the engagement of contract and inter-state migrant workers.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "Establishments are covered according to their type and employee thresholds set in the Code and its notifications. Factories, mines, contractors and some other categories have their own definitions and thresholds. Check which chapters apply to each of your sites.",
        ],
      },
      {
        heading: "What it asks of records and payroll",
        list: {
          style: "bullet",
          items: [
            "Register the establishment where required.",
            "Issue appointment letters to employees as the Code requires.",
            "Keep hours within the daily and weekly limits, and pay overtime at the rate the Code sets.",
            "Track annual leave with wages and its entitlement conditions.",
            "Keep registers of employees, hours, wages and contract workers in the prescribed form.",
          ],
        },
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Establishment", "The place of work the Code applies to, defined by type and size"],
            ["Overtime", "Work beyond the daily or weekly limit, paid at an enhanced rate"],
            ["Spread-over", "The span from start to end of a working day, including rest intervals"],
            ["Contractor", "A person supplying workers to an establishment, subject to licensing"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS, "State rules under this Code may set working hours, spread-over and conditions for women working at night, so the same Code can produce different obligations in different states."],
      },
    ],
    faqs: [
      { q: "Does the OSH Code replace the Factories Act?", a: "It consolidates it. The Factories Act's subjects, such as hours, overtime and leave, carry into the Code, and the older Act may continue to apply during transition." },
      { q: "Does the OSH Code cover offices?", a: "It applies to establishments meeting its definitions and thresholds. Offices and shops are also governed by state Shops and Establishments Acts, so check both." },
      { q: "Has the overtime rate changed?", a: "The Factories Act sets overtime at twice the ordinary rate of wages (s.59), and the Code carries a similar provision. Check the Code and state rules for the rate and limits that apply to you." },
    ],
    related: [
      { label: "Factories Act", href: `${L}/factories-act`, note: "Hours and overtime under the older law." },
      { label: "Contract Labour Act", href: `${L}/contract-labour-act`, note: "Contractor obligations explained." },
      { label: "Overtime Management Guide", href: "/hr/topics/overtime-management", note: "Approving and paying overtime." },
    ],
    verify:
      "Check the implementation status of the OSH Code, central and state rules in force, coverage thresholds for each type of establishment, daily and weekly hour limits, overtime rate and limits, leave entitlement conditions and registration requirements.",
  },
  {
    slug: "shops-and-establishments-act",
    name: "Shops and Establishments Acts",
    title: "Shops and Establishments Acts: the state laws behind office working conditions",
    standfirst:
      "Each state has its own Shops and Establishments Act. It is usually the law that governs registration, hours, holidays and leave for offices, shops and commercial establishments.",
    seo: {
      title: "Shops and Establishments Act: What Employers Must Know",
      description:
        "The shops and establishments act explained: why each state has its own, what it governs, registration, hours, holidays, leave and the records to keep.",
      keywords: ["shops and establishments act", "shop and establishment registration", "shops and establishments act rules", "state shops act"],
    },
    sections: [
      {
        heading: "What these Acts cover",
        body: [
          "Shops and Establishments Acts are state laws. Each state and union territory has its own, with its own rules. They typically govern registration of the establishment, opening and closing hours, daily and weekly working hours, rest intervals, weekly holidays, overtime, leave, national and festival holidays, employment of women and young persons, and records.",
        ],
      },
      {
        heading: "Who they apply to",
        body: [
          "They usually cover shops, offices, commercial establishments, hotels, restaurants and places of entertainment that are not factories. Some states exempt establishments below a size, or apply only some sections to them. An employer with offices in several states deals with several Acts.",
        ],
      },
      {
        heading: "What they ask of records and payroll",
        list: {
          style: "bullet",
          items: [
            "Register or give intimation for each establishment, and renew where the state requires.",
            "Apply the state's hours, rest interval and overtime rules to attendance and pay.",
            "Grant weekly offs, leave and holidays as the state Act sets.",
            "Keep the registers and display the notices the state rules prescribe.",
          ],
        },
        note: "Leave entitlements and holiday lists differ by state. A single national leave policy should be checked against each state's minimums.",
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Establishment", "A shop, office or commercial premises as the state Act defines it"],
            ["Registration certificate", "Proof of registration, often required to be displayed"],
            ["Spread-over", "The span of the working day including rest intervals"],
            ["Weekly holiday", "The weekly day off the Act requires"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [
          "Shops and Establishments Acts are state laws and are not among the central Acts the four codes consolidate. The OSH Code may cover some of the same establishments, so check how your state's Act and the Code's rules apply together as currently notified.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need registration for every office?", a: "Usually each establishment needs its own registration or intimation in the state where it sits. Check each state's rules." },
      { q: "Are leave entitlements the same everywhere?", a: "No. Earned leave, casual leave, sick leave and holidays vary by state Act." },
      { q: "Does a work-from-home employee need registration?", a: "The Acts are written around premises. How remote employees are treated depends on the state; check with your adviser." },
    ],
    related: [
      { label: "One Company, Several Compliance Positions", href: "/resources/white-papers/state-by-state", note: "Why multi-state payroll is harder." },
      { label: "Holiday Calendars Guide", href: "/hr/topics/holiday-calendars", note: "Managing state holiday lists." },
      { label: "Writing a Leave Policy That Survives Contact With a Year", href: "/resources/hr-guides/writing-a-leave-policy", note: "Fitting a policy to state minimums." },
    ],
    verify:
      "Check the Shops and Establishments Act and rules of each state where you operate: registration or intimation requirements, exemptions by size, working hours, overtime, leave and holiday entitlements, and how the OSH Code currently interacts with them.",
  },
  {
    slug: "contract-labour-act",
    name: "Contract Labour Act",
    title: "The Contract Labour Act: obligations when workers come through a contractor",
    standfirst:
      "The Contract Labour (Regulation and Abolition) Act 1970 makes the principal employer answerable for core protections of contract workers, including wages, even though a contractor engages them.",
    seo: {
      title: "Contract Labour Act 1970: Principal Employer Duties",
      description:
        "The contract labour act explained: registration, contractor licences, the principal employer's duty on wages, welfare facilities and the records to keep.",
      keywords: ["contract labour act", "contract labour regulation and abolition act 1970", "principal employer responsibilities", "contract labour licence"],
    },
    sections: [
      {
        heading: "What the Act covers",
        body: [
          "The Act regulates the employment of contract labour and allows the government to prohibit it in some processes. It requires the principal employer to register and contractors to hold licences, sets welfare and health facilities, and places a duty on the principal employer if the contractor fails to pay wages.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "It applies to establishments and contractors employing contract workers at or above thresholds set in the Act and varied by some states. Check the threshold for your state and your contractors.",
        ],
      },
      {
        heading: "What it asks of the principal employer",
        list: {
          style: "bullet",
          items: [
            "Register the establishment for contract labour where the Act applies.",
            "Engage only licensed contractors where a licence is required.",
            "Nominate a representative to witness wage payment by the contractor.",
            "Pay the wages yourself if the contractor fails to, and recover from the contractor.",
            "Keep the registers of contractors and contract workers the rules prescribe.",
          ],
        },
        note: "Contract workers often fall under PF and ESI through the contractor. Check the contractor's challans and returns each month, since the principal employer can be held liable for defaults.",
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Principal employer", "The owner or occupier of the establishment where contract workers work"],
            ["Contractor", "The person who supplies or engages workers to do work for the establishment"],
            ["Licence", "Permission for the contractor, issued by the licensing officer"],
            ["Core activity", "Work central to the establishment, where contract labour may be restricted"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS, "The Contract Labour Act is among the laws consolidated into the OSH Code, which addresses contractor licensing and thresholds in its own terms."],
      },
    ],
    faqs: [
      { q: "Am I responsible if the contractor does not pay wages?", a: "Under the Act the principal employer must pay if the contractor fails to, and can recover the amount from the contractor." },
      { q: "Do contract workers count in my headcount for other laws?", a: "Some laws count them, others do not. Check each statute's definition of employee for the purpose concerned." },
      { q: "Can contract labour be used for any work?", a: "Not always. The government can prohibit contract labour in particular processes, and the OSH Code addresses core activities. Check the notifications for your sector." },
    ],
    related: [
      { label: "OSH Code", href: `${L}/osh-code`, note: "The code that consolidates this Act." },
      { label: "Statutory Payroll Compliance Guide", href: "/hr/topics/statutory-compliance", note: "Tracking filings and registers." },
      { label: "Wage register (glossary)", href: `${G}/wage-register`, note: "The record of wages paid." },
    ],
    verify:
      "Check the applicability thresholds under the Contract Labour Act or the OSH Code as currently in force in your state, registration and licensing requirements, prohibition notifications for your sector and the principal employer's current obligations on PF and ESI for contract workers.",
  },
  {
    slug: "payment-of-bonus-act",
    name: "Payment of Bonus Act",
    title: "The Payment of Bonus Act 1965: who gets statutory bonus and how it is worked out",
    standfirst:
      "The Payment of Bonus Act requires covered establishments to pay an annual bonus to eligible employees, within a minimum and maximum linked to the employer's allocable surplus.",
    seo: {
      title: "Payment of Bonus Act 1965: Eligibility and Calculation",
      description:
        "The payment of bonus act explained: which establishments and employees are covered, the minimum and maximum bonus, allocable surplus, timing and records.",
      keywords: ["payment of bonus act", "payment of bonus act 1965", "statutory bonus india", "bonus act eligibility"],
    },
    sections: [
      {
        heading: "What the Act covers",
        body: [
          "The Act sets out who is entitled to an annual statutory bonus, how much, and when it must be paid. The bonus is a percentage of salary or wage, at least a statutory minimum and no more than a statutory maximum, with the amount between them depending on the establishment's allocable surplus for the year.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "It applies to factories and to other establishments employing at least the number of persons the Act specifies. Employees are eligible if their salary or wage is within the eligibility limit and they have worked the minimum number of days in the accounting year. For calculation, salary is capped at a separate ceiling, or the applicable minimum wage if higher.",
        ],
        note: "The eligibility limit and the calculation ceiling are different figures, and both have been revised in the past. Check the current values before running a bonus calculation.",
      },
      {
        heading: "What it asks of records and payroll",
        list: {
          style: "ordered",
          items: [
            "Identify eligible employees by salary and days worked in the accounting year.",
            "Work out the allocable surplus from the accounts, as the Act's schedules describe.",
            "Calculate bonus within the minimum and maximum, on the capped salary.",
            "Pay within the time limit after the accounting year closes.",
            "Keep the bonus registers and file the return the rules require.",
          ],
        },
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Salary or wage", "Basic plus dearness allowance, excluding most other allowances, for bonus purposes"],
            ["Allocable surplus", "The share of available surplus that funds bonus, as the Act defines it"],
            ["Set-on and set-off", "Carrying surplus or shortfall forward to later years"],
            ["Accounting year", "The year for which bonus is calculated"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS, "The Payment of Bonus Act is among the laws consolidated into the Code on Wages, which carries the bonus provisions forward with the Code's definition of wages."],
      },
    ],
    faqs: [
      { q: "Is a festival bonus the same as statutory bonus?", a: "Not automatically. A customary or festival bonus may count towards statutory bonus only if it is paid and treated that way. Keep the two clear in records." },
      { q: "Can an employee be disqualified?", a: "The Act lists grounds for disqualification, such as dismissal for certain misconduct. Apply them strictly as written." },
      { q: "Do new establishments pay bonus?", a: "The Act has provisions for the first years of a new establishment. Check how they apply to you." },
    ],
    related: [
      { label: "Statutory Bonus Calculator", href: "/calculators/statutory-bonus", note: "Work out bonus under the Act." },
      { label: "Code on Wages", href: `${L}/code-on-wages`, note: "The code that consolidates this Act." },
      { label: "Basic pay (glossary)", href: `${G}/basic-pay`, note: "Part of the bonus salary base." },
    ],
    verify:
      "Check the current minimum and maximum bonus percentages, the salary eligibility limit, the calculation ceiling, the minimum days worked, the coverage threshold, payment time limits and whether the Code on Wages provisions now apply instead of the Act.",
  },
  {
    slug: "minimum-wages-act",
    name: "Minimum Wages Act",
    title: "The Minimum Wages Act 1948: how minimum pay is fixed and applied",
    standfirst:
      "Under the Minimum Wages Act, central and state governments fix minimum rates for scheduled employments. Most rates are set by states and revised regularly, often with a variable dearness allowance.",
    seo: {
      title: "Minimum Wages Act 1948: How Minimum Pay Works in India",
      description:
        "The minimum wages act explained: who fixes rates, scheduled employments, skill categories, variable dearness allowance, overtime and records employers keep.",
      keywords: ["minimum wages act", "minimum wages act 1948", "minimum wage india employers", "variable dearness allowance"],
    },
    sections: [
      {
        heading: "What the Act covers",
        body: [
          "The Act empowers the appropriate government to fix and revise minimum rates of wages for employments listed in its schedule. Rates usually vary by employment, by skill category (unskilled, semi-skilled, skilled, highly skilled) and by zone, and many include a variable dearness allowance revised periodically against a price index.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "It applies to employees in scheduled employments for which a minimum wage has been fixed. The central government fixes rates for employments in its sphere, and states fix rates for the rest. This page does not list rates; they vary by state and change by notification.",
        ],
      },
      {
        heading: "What it asks of records and payroll",
        list: {
          style: "bullet",
          items: [
            "Map each employee to the right employment, skill category and zone.",
            "Check that the wage paid, as the Act counts it, is at least the applicable minimum.",
            "Apply revisions, including variable DA changes, from the date they take effect.",
            "Pay overtime for hours beyond the normal working day as the rules require.",
            "Keep the registers and display the notices the rules prescribe.",
          ],
        },
        note: "Variable DA revisions can arrive mid-year. Payroll needs a way to apply a new rate from its effective date and pay arrears if it was missed.",
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Scheduled employment", "An employment listed in the Act's schedule, for which rates are fixed"],
            ["Variable dearness allowance", "The part of the minimum wage revised against a cost-of-living index"],
            ["Skill category", "The classification that decides which rate applies"],
            ["Zone", "The geographical area a rate applies to, where a state divides rates by area"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS, "The Minimum Wages Act is among the laws consolidated into the Code on Wages, which provides for minimum wages for employees more broadly and a central floor wage."],
      },
    ],
    faqs: [
      { q: "Where do I find the current minimum wage?", a: "From the notification of the appropriate government: the state labour department for most employments, or the central government for central sphere employments." },
      { q: "Do allowances count towards the minimum wage?", a: "It depends on how the Act and the notification define the minimum rate. Check which components may be counted before relying on allowances." },
      { q: "What if I miss a revision?", a: "Pay the difference as arrears from the effective date. Underpayment can lead to claims and penalties." },
    ],
    related: [
      { label: "Code on Wages", href: `${L}/code-on-wages`, note: "The code that consolidates this Act." },
      { label: "Dearness allowance (glossary)", href: `${G}/dearness-allowance`, note: "DA explained." },
      { label: "Arrears (glossary)", href: `${G}/arrears`, note: "Paying back-dated revisions." },
    ],
    verify:
      "Check the current minimum wage notification for each state and employment, skill category and zone, the latest variable DA revision and its effective date, and whether the Code on Wages minimum wage provisions now apply.",
  },
  {
    slug: "payment-of-wages-act",
    name: "Payment of Wages Act",
    title: "The Payment of Wages Act 1936: when wages are paid and what may be deducted",
    standfirst:
      "The Payment of Wages Act fixes wage periods, the time by which wages must be paid, and the only deductions an employer may make from wages.",
    seo: {
      title: "Payment of Wages Act 1936: Timing and Deductions",
      description:
        "The payment of wages act explained: wage periods, the time limits for paying wages, the authorised deductions, the overall limit on deductions and records.",
      keywords: ["payment of wages act", "payment of wages act 1936", "authorised deductions from wages", "wage payment time limit"],
    },
    sections: [
      {
        heading: "What the Act covers",
        body: [
          "The Act sets three things payroll must respect: the wage period cannot exceed a month; wages must be paid within time limits after the wage period ends, with separate limits for larger and smaller establishments and for employees whose employment is terminated; and only listed deductions may be made, within an overall cap.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "It applies to employees in factories, railways and other establishments it lists or that governments notify, whose wages are below a ceiling the government sets by notification. Check whether the ceiling and coverage apply to your employees.",
        ],
      },
      {
        heading: "Authorised deductions",
        list: {
          style: "bullet",
          items: [
            "Fines, under the Act's conditions.",
            "Absence from duty.",
            "Damage to or loss of goods, where the employee is responsible.",
            "Recovery of advances and loans.",
            "Income tax, PF and other statutory contributions.",
            "Deductions the employee authorises in writing for listed purposes.",
          ],
        },
        note: "Recovering an over-payment or a notice period shortfall from salary is a deduction too. Check that it falls within the Act's list and limits.",
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Wage period", "The period wages are fixed for, no longer than a month"],
            ["Authorised deduction", "A deduction the Act permits"],
            ["Overall limit", "The cap on total deductions in a wage period"],
            ["Payment on termination", "Wages due on dismissal or discharge, payable within a shorter time"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS, "The Payment of Wages Act is among the laws consolidated into the Code on Wages, which sets its own payment time limits and deduction rules for employees generally."],
      },
    ],
    faqs: [
      { q: "Can I deduct loss of pay for absence?", a: "Yes, deduction for absence from duty is authorised, in proportion to the period of absence as the Act describes." },
      { q: "How quickly must wages be paid on exit?", a: "The Act sets a shorter time limit for employees whose employment ends. Check the limit under the Act or the Code that applies to you." },
      { q: "Can wages be paid by bank transfer?", a: "Yes. Payment by cheque or bank credit is recognised, subject to the Act's conditions." },
    ],
    related: [
      { label: "LOP (glossary)", href: `${G}/lop`, note: "Loss of pay for absence." },
      { label: "Full and final settlement (glossary)", href: `${G}/full-and-final-settlement`, note: "Paying dues on exit." },
      { label: "Code on Wages", href: `${L}/code-on-wages`, note: "The code that consolidates this Act." },
    ],
    verify:
      "Check the current wage ceiling for coverage, the payment time limits for your establishment size and on termination, the overall deduction limit, and whether the Code on Wages provisions now apply instead.",
  },
  {
    slug: "standing-orders-act",
    name: "Industrial Employment (Standing Orders) Act",
    title: "Standing orders: written service rules certified for an establishment",
    standfirst:
      "The Industrial Employment (Standing Orders) Act 1946 requires covered establishments to define conditions of service in writing, have them certified, and apply them consistently.",
    seo: {
      title: "Standing Orders Act 1946: Service Rules for Employers",
      description:
        "The standing orders act explained: which establishments need standing orders, what they must cover, certification, model standing orders and the IR Code.",
      keywords: ["standing orders act", "industrial employment standing orders act 1946", "model standing orders", "certified standing orders"],
    },
    sections: [
      {
        heading: "What the Act covers",
        body: [
          "Standing orders are the employer's written rules on matters the Act lists in its schedule: classification of workers, working hours and shifts, attendance and late coming, leave and holidays, suspension and termination, misconduct and the procedure for discipline. Once certified, they bind the employer and workers.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "It applies to industrial establishments employing at least the number of workers the Act specifies, a threshold some states have varied. Where an establishment has not certified its own, the model standing orders apply.",
        ],
      },
      {
        heading: "What it asks of HR",
        list: {
          style: "ordered",
          items: [
            "Draft standing orders covering every matter in the schedule.",
            "Submit them for certification and respond to objections.",
            "Display the certified standing orders and make them available to workers.",
            "Apply them in discipline, leave and termination, and amend only through the prescribed process.",
          ],
        },
        note: "Company policies cannot override certified standing orders for covered workers. Keep the HR policy and the standing orders consistent.",
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Certifying officer", "The official who certifies standing orders"],
            ["Model standing orders", "Government-framed standing orders that apply until your own are certified"],
            ["Misconduct", "Acts listed in the standing orders that can lead to discipline"],
            ["Classification", "Categories such as permanent, probationer, temporary or fixed-term"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS, "The Standing Orders Act is among the laws consolidated into the Industrial Relations Code, which carries standing orders forward with its own threshold and model standing orders."],
      },
    ],
    faqs: [
      { q: "Do standing orders apply to managers?", a: "They apply to workers as the law defines them, which usually excludes managerial roles. Managers are generally governed by their contracts and company policy." },
      { q: "Can we change standing orders?", a: "Only through the modification process in the law, which involves the certifying officer and notice to workers." },
      { q: "What if we have no certified standing orders?", a: "The model standing orders apply to covered establishments until yours are certified." },
    ],
    related: [
      { label: "Industrial Relations Code", href: `${L}/industrial-relations-code`, note: "The code that consolidates this Act." },
      { label: "HR Policies Guide", href: "/hr/topics/hr-policies", note: "Keeping policies aligned with standing orders." },
      { label: "Probation (glossary)", href: `${G}/probation`, note: "A classification standing orders define." },
    ],
    verify:
      "Check the worker threshold for standing orders under the Act or the Industrial Relations Code as in force in your state, the current model standing orders and the certification process that applies.",
  },
  {
    slug: "factories-act",
    name: "Factories Act: working hours and overtime",
    title: "Factories Act working hours, rest and overtime explained",
    standfirst:
      "The Factories Act 1948 limits daily and weekly hours for adult workers, requires rest intervals and a weekly holiday, and sets overtime at twice the ordinary rate of wages.",
    seo: {
      title: "Factories Act Working Hours and Overtime Rules Explained",
      description:
        "Factories Act working hours explained: daily and weekly limits, rest intervals, spread-over, weekly holiday, overtime at twice the ordinary rate and registers.",
      keywords: ["factories act working hours", "factories act overtime", "factories act 1948 section 59", "working hours in factories"],
    },
    sections: [
      {
        heading: "What the Act covers on hours",
        body: [
          "Chapter VI of the Factories Act deals with working hours of adults. It sets a weekly limit (s.51), a weekly holiday (s.52), a daily limit (s.54), rest intervals (s.55), a maximum spread-over (s.56) and rules on night shifts and overlapping shifts. The Act also covers safety, health, welfare and annual leave with wages.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "It applies to factories as the Act defines them, by the manufacturing process carried on and the number of workers, with different thresholds where power is used and where it is not. State factory rules add detail and can grant exemptions.",
        ],
      },
      {
        heading: "Overtime under s.59",
        body: [
          "Where a worker works beyond the daily or weekly limit, s.59 requires overtime wages at twice the ordinary rate of wages. The ordinary rate is basic wages plus allowances, including the cash value of concessional food grains, but excluding bonus and overtime itself.",
          "State rules and exemptions can limit total overtime hours in a quarter. Payroll needs approved overtime hours from attendance, not estimates.",
        ],
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "Provision", "What it means"],
          rows: [
            ["Weekly hours", "s.51", "The maximum hours an adult worker may work in a week"],
            ["Weekly holiday", "s.52", "A day off each week, with substitution allowed under conditions"],
            ["Daily hours", "s.54", "The maximum hours in a day"],
            ["Rest interval", "s.55", "A break after a set period of continuous work"],
            ["Spread-over", "s.56", "The span of the working day including rest intervals"],
            ["Overtime", "s.59", "Twice the ordinary rate of wages for hours beyond the limits"],
          ],
        },
        note: "Records matter as much as rates. The Act requires registers of adult workers and of overtime, in the form state rules prescribe.",
      },
      {
        heading: "Relationship to the labour codes",
        body: [CODES_STATUS, "The Factories Act is among the laws consolidated into the OSH Code. State rules under the Code may set hours and overtime limits differently, so check which regime applies to each factory."],
      },
    ],
    faqs: [
      { q: "Is overtime always twice the rate?", a: "Under s.59 of the Factories Act, yes, for adult workers in factories beyond the daily or weekly limit. Other establishments follow their own law, such as the state Shops and Establishments Act." },
      { q: "Does overtime count towards ESI coverage?", a: "Overtime is excluded when testing whether an employee is within the ESI wage limit, but ESI contributions are payable on it." },
      { q: "Can workers be asked to work on the weekly holiday?", a: "Only if a substitute holiday is given within the conditions in s.52, or an exemption applies." },
    ],
    related: [
      { label: "Overtime Calculator", href: "/calculators/overtime", note: "Work out overtime pay at twice the rate." },
      { label: "Overtime Management Guide", href: "/hr/topics/overtime-management", note: "Approving and recording overtime." },
      { label: "Shift Management Guide", href: "/hr/topics/shift-management", note: "Rosters within the hour limits." },
      { label: "OSH Code", href: `${L}/osh-code`, note: "The code that consolidates this Act." },
    ],
    verify:
      "Check the current daily and weekly hour limits, spread-over, quarterly overtime limits and exemptions under the Factories Act and your state's factory rules, and whether the OSH Code and its state rules now apply to your factory.",
  },
  {
    slug: "apprentices-act",
    name: "Apprentices Act",
    title: "The Apprentices Act 1961: engaging apprentices and paying stipends",
    standfirst:
      "The Apprentices Act sets out how employers engage apprentices, the contract of apprenticeship, the stipend, and the obligation on some establishments to engage apprentices.",
    seo: {
      title: "Apprentices Act 1961: Engagement, Stipend and Records",
      description:
        "The apprentices act explained for employers: who must engage apprentices, the contract of apprenticeship, stipend, hours, leave and how apprentices differ.",
      keywords: ["apprentices act", "apprentices act 1961", "apprentice stipend india", "apprenticeship contract"],
    },
    sections: [
      {
        heading: "What the Act covers",
        body: [
          "The Apprentices Act 1961 governs training of apprentices in designated and optional trades. It requires a written contract of apprenticeship, registered as the rules require, sets the minimum stipend by prescription, and covers hours, leave, conduct and the end of the apprenticeship.",
        ],
      },
      {
        heading: "Who it applies to",
        body: [
          "Employers above a size set in the Act and rules are required to engage apprentices within a prescribed band of their workforce. Others may engage apprentices voluntarily. Apprenticeship schemes run by the central government may share the cost of stipends under their own conditions.",
        ],
      },
      {
        heading: "What it asks of records and payroll",
        list: {
          style: "bullet",
          items: [
            "Execute and register a contract of apprenticeship for each apprentice.",
            "Pay at least the prescribed stipend, kept separate from employee wages.",
            "Track hours and leave within the limits for apprentices.",
            "Keep the records and file the returns the rules prescribe, usually through the official apprenticeship portal.",
          ],
        },
        note: "Apprentices are trainees, not employees, under the Act. Do not run them through payroll as regular employees without checking how each statute treats them.",
      },
      {
        heading: "Key terms",
        table: {
          head: ["Term", "What it means"],
          rows: [
            ["Apprentice", "A person undergoing training under a contract of apprenticeship"],
            ["Designated trade", "A trade notified by the government for apprenticeship training"],
            ["Optional trade", "A trade the employer chooses to train in"],
            ["Stipend", "The payment to an apprentice, at least the prescribed minimum"],
          ],
        },
      },
      {
        heading: "Relationship to the labour codes",
        body: [
          "The Apprentices Act is not among the laws consolidated into the four labour codes and continues as a separate statute. The codes define employees in ways that may or may not include apprentices, so check each code's treatment as notified.",
        ],
      },
    ],
    faqs: [
      { q: "Is an apprentice an employee?", a: "Under the Apprentices Act an apprentice is a trainee, not a worker. Other laws may treat apprentices differently, so check each statute." },
      { q: "Must we offer a job at the end?", a: "The Act does not require it unless the contract of apprenticeship says so." },
      { q: "Is the stipend subject to PF and ESI?", a: "Apprentices engaged under the Act are generally treated differently from employees, but check the current position under each statute." },
    ],
    related: [
      { label: "Employee Onboarding Guide", href: "/hr/topics/employee-onboarding", note: "Bringing new people in cleanly." },
      { label: "Employee Records Guide", href: "/hr/topics/employee-records", note: "Keeping trainee records separate." },
      { label: "Statutory Payroll Compliance Guide", href: "/hr/topics/statutory-compliance", note: "Registers and returns." },
    ],
    verify:
      "Check the current minimum stipend, the employer size threshold and engagement band, registration and portal requirements, central stipend-sharing schemes, and how PF, ESI and the labour codes treat apprentices.",
  },
];

export const labourLawCollection: LibCollection = {
  base: "/resources/labour-law",
  label: "Labour law",
  hub: {
    title: "Indian labour law, explained for HR teams",
    standfirst: "What each central labour law and code covers, who it applies to, and what it asks of an employer's records and payroll.",
    intro: [
      "These explainers describe what the laws provide in plain language, for HR and payroll teams who need to know which obligations touch their work.",
      "They are not legal advice. Labour law in India is being consolidated into four codes, many rules are framed by individual states, and figures change by notification. Check the current position with the official source or your legal adviser before acting on any of it.",
    ],
    seo: {
      title: "Indian Labour Laws for Employers: HR & Payroll Explainers",
      description: "Plain-language explainers of Indian labour laws and the four labour codes for HR teams: wages, bonus, contract labour, standing orders, working hours.",
      keywords: ["labour laws in india for employers", "indian labour codes", "labour law for hr"],
    },
  },
  pages,
};
