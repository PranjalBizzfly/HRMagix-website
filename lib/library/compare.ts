import type { LibCollection, LibPage } from "./types";

const G = "/resources/hr-and-payroll-glossary";

const pages: LibPage[] = [
  {
    slug: "hrms-vs-hris-vs-hcm",
    name: "HRMS vs HRIS vs HCM: HR software terms explained",
    title: "HRMS, HRIS and HCM: three labels for overlapping software",
    standfirst:
      "HRMS vs HRIS vs HCM is mostly a question of scope. The three terms overlap heavily, and providers use them loosely, so the label tells you less than the module list.",
    seo: {
      title: "HRMS vs HRIS vs HCM: What Each Term Actually Covers",
      description:
        "HRMS vs HRIS vs HCM compared: what each label usually covers, where the three overlap, and why the module list matters more than the category name.",
      keywords: ["hrms vs hris", "hrms vs hris vs hcm", "difference between hris and hcm", "what is hcm software"],
    },
    sections: [
      {
        heading: "How the terms are usually used",
        body: [
          "HRIS (human resource information system) is the oldest of the three and traditionally means the system of record: employee master data, job history, documents and reports. Its centre is the data.",
          "HRMS (human resource management system) usually adds the processes that run on that data: attendance, leave, payroll and often performance. Its centre is the monthly work of HR and payroll.",
          "HCM (human capital management) is the broadest term. It tends to include everything in an HRMS plus talent processes such as recruitment, learning, succession and workforce planning. Its centre is the employee across their whole time with the organisation.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["", "HRIS", "HRMS", "HCM"],
          rows: [
            ["Typical core", "Employee records and reporting", "Records plus attendance, leave and payroll", "HRMS scope plus talent and planning"],
            ["Main question it answers", "Who works here and on what terms", "Are people present, paid and compliant", "How do we hire, grow and keep people"],
            ["Payroll included", "Often not", "Usually", "Usually"],
            ["Performance and goals", "Rarely", "Sometimes", "Usually"],
            ["Recruitment and learning", "Rarely", "Sometimes", "Usually"],
          ],
        },
        note: "These are tendencies, not definitions. No standard fixes what each label must include, and two products sold under the same label can differ more than products sold under different ones.",
      },
      {
        heading: "Which label fits your need",
        list: {
          style: "bullet",
          items: [
            "If your main problem is scattered employee data and documents, you are describing what an HRIS does well.",
            "If attendance, leave and payroll are the monthly pain, you are describing an HRMS, and payroll accuracy should be the first thing you test.",
            "If the basics run smoothly and the questions are about hiring, development and succession, HCM-style scope becomes relevant.",
          ],
        },
      },
      {
        heading: "What to do instead of comparing labels",
        body: [
          "Write down the processes you need the system to run in the first year, in the order they hurt. Then ask each provider to show those processes working on your own data, including an Indian payroll run with PF, ESI, Professional Tax and TDS where they apply.",
          "Ask what is native and what is a connection to another product. A suite stitched together from separately built tools may carry the same reconciliation work a single system is supposed to remove.",
        ],
      },
    ],
    faqs: [
      { q: "Is an HRMS the same as an HRIS?", a: "In everyday use they are often treated as the same. Where people distinguish them, an HRIS is the record-keeping core and an HRMS adds processes such as attendance, leave and payroll on top of it." },
      { q: "Is HCM better than HRMS?", a: "Not necessarily. HCM describes a wider scope, not higher quality. A smaller organisation may get more value from a well-run HRMS than from talent modules it does not yet use." },
      { q: "Which term should I search for?", a: "Search for the processes you need, for example payroll with statutory compliance or shift attendance. The category label is a weak filter because providers apply it inconsistently." },
    ],
    related: [
      { label: "HRMS (glossary)", href: `${G}/hrms`, note: "A short definition of the term." },
      { label: "HRMS Comparison", href: "/resources/hrms-comparison", note: "Spreadsheets, point tools or one integrated system." },
      { label: "Payroll Management Guide", href: "/hr/topics/payroll-management", note: "What the payroll part of an HRMS has to do." },
    ],
  },
  {
    slug: "in-house-vs-outsourced-payroll",
    name: "In-house vs outsourced payroll",
    title: "Running payroll yourself or handing it to a bureau",
    standfirst:
      "Outsourced payroll vs in-house is a choice about who holds the work. Either way, the employer remains responsible for statutory deposits and filings.",
    seo: {
      title: "Outsourced Payroll vs In-House: Trade-offs for Employers",
      description:
        "Outsourced payroll vs in-house compared for Indian employers: control, cost, inputs, statutory responsibility, data access and when each option fits best.",
      keywords: ["outsourced payroll vs in house", "payroll outsourcing vs in-house", "payroll bureau india", "in-house payroll"],
    },
    sections: [
      {
        heading: "What each model means",
        body: [
          "In-house payroll means your own team calculates salaries, deductions and statutory contributions, usually with payroll software, and files the returns.",
          "Outsourced payroll means a bureau or accounting firm runs the calculation and often the filings. Your team still sends inputs every month: joiners, leavers, attendance, leave, revisions, reimbursements and investment declarations.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "In-house", "Outsourced"],
          rows: [
            ["Who calculates", "Your team", "The bureau"],
            ["Who gathers inputs", "Your team", "Still your team"],
            ["Statutory liability", "Employer", "Still the employer"],
            ["Speed of corrections", "Same day, if the team is available", "Depends on the bureau's cycle and cut-off"],
            ["Specialist knowledge", "Held inside the team", "Bought in"],
            ["Access to data and history", "Direct", "Depends on the contract and exports"],
            ["Cost pattern", "Salaries plus software", "Service fee, often per payslip or per month"],
          ],
        },
        note: "Outsourcing moves the calculation, not the inputs. Most payroll errors start with late or wrong attendance, leave and change data, and that work stays with you.",
      },
      {
        heading: "When each fits",
        list: {
          style: "bullet",
          items: [
            "Outsourcing tends to suit organisations with no one who knows Indian payroll, a simple and stable workforce, and few mid-month changes.",
            "In-house tends to suit organisations with frequent changes, shift or overtime pay, employees in several states, or a need to answer employee questions quickly.",
            "A mixed model is common: payroll is calculated in-house on software, and a consultant reviews filings or handles year-end work.",
          ],
        },
      },
      {
        heading: "Questions to settle before outsourcing",
        list: {
          style: "ordered",
          items: [
            "Which filings does the bureau make, and who pays interest or damages if one is late because of its error?",
            "What is the monthly input cut-off, and how are corrections after cut-off handled?",
            "Can you export payroll registers, payslips and statutory returns at any time, and on exit?",
            "Who answers employee queries about payslips and tax?",
          ],
        },
      },
    ],
    faqs: [
      { q: "If I outsource payroll, am I still liable for PF and ESI?", a: "Yes. The statutes place the obligation on the employer. A contract with a bureau can allocate costs between you, but it does not move the legal responsibility." },
      { q: "Is outsourcing cheaper?", a: "It depends on headcount, change volume and what the bureau charges for corrections and extras. Compare the full cost, including your team's time preparing inputs." },
      { q: "Can I move from outsourced to in-house later?", a: "Yes, but plan it. You will need year-to-date figures, tax declarations and statutory history from the bureau to continue correctly mid-year." },
    ],
    related: [
      { label: "Running Your First Payroll in a New System", href: "/resources/hr-guides/first-payroll-run", note: "What an in-house payroll run involves." },
      { label: "The Payroll Cutoff Guide", href: "/hr/topics/payroll-cutoff", note: "Why input timing decides accuracy in either model." },
      { label: "Statutory Payroll Compliance Guide", href: "/hr/topics/statutory-compliance", note: "The filings that stay the employer's responsibility." },
    ],
  },
  {
    slug: "biometric-vs-mobile-attendance",
    name: "Biometric vs mobile attendance",
    title: "Fingerprint devices or phones: choosing how people mark attendance",
    standfirst:
      "Biometric vs mobile attendance depends on where people work, how they reach work and what the attendance record has to prove. Many organisations use both.",
    seo: {
      title: "Biometric vs Mobile Attendance: Choosing a Method",
      description:
        "Biometric vs mobile attendance compared: where each works, what each proves, costs, privacy points and why many employers run both for different teams.",
      keywords: ["biometric vs mobile attendance", "biometric attendance vs app", "mobile attendance with geofence", "attendance method comparison"],
    },
    sections: [
      {
        heading: "What each method records",
        body: [
          "A biometric device at a fixed entry point records that a particular person was physically at that device at a given time. It is strong evidence of presence at one location.",
          "Mobile attendance records a punch from the employee's phone, usually with location and sometimes a photo. It suits people who do not start at one fixed gate: field staff, sales teams, people working across sites or from home.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "Biometric device", "Mobile app"],
          rows: [
            ["Best for", "One or a few fixed sites", "Field, multi-site and remote work"],
            ["Identity assurance", "High at the device", "Depends on photo and location checks"],
            ["Location proof", "The device's location", "Phone location at punch time"],
            ["Hardware", "Devices to buy, mount and maintain", "Employee phones"],
            ["Failure points", "Device down, worn fingerprints, queues at shift change", "No phone, no data signal, location switched off"],
            ["Data flow", "Device logs synced into the attendance system", "Usually direct into the system"],
          ],
        },
        note: "Both methods produce punches, not attendance. Hours, lateness and overtime still come from applying shift and policy rules to the punches.",
      },
      {
        heading: "When each fits",
        list: {
          style: "bullet",
          items: [
            "Factories, warehouses and sites with gates and shifts usually favour devices, with a defined process for regularising missed punches.",
            "Field and sales teams usually need mobile punches, with location rules agreed in advance.",
            "Mixed workforces often run both and feed them into one attendance record so payroll reads from one place.",
          ],
        },
      },
      {
        heading: "Privacy and consent",
        body: [
          "Fingerprints, face images and location are personal data. Tell employees what is collected, why, who can see it and how long it is kept, and collect no more than the attendance purpose needs. Check your obligations under the Digital Personal Data Protection Act and its rules as they apply to you.",
        ],
      },
    ],
    faqs: [
      { q: "Can mobile attendance be faked?", a: "Location can be spoofed on some phones, and someone else can carry a phone. Photo capture, location limits and manager review reduce this. Where proof of identity at a gate matters most, a device is stronger." },
      { q: "Do we need a biometric device for statutory registers?", a: "The law asks for accurate attendance and wage records, not a particular capture method. Whatever you use must produce reliable registers." },
      { q: "What happens when a punch is missed?", a: "It should go through a regularisation request with approval, so the correction is recorded rather than edited silently." },
    ],
    related: [
      { label: "Biometric attendance (glossary)", href: `${G}/biometric-attendance`, note: "A definition of device-based attendance." },
      { label: "Attendance Management Guide", href: "/hr/topics/attendance-management", note: "Turning punches into payable days." },
      { label: "Regularisation", href: `${G}/regularisation`, note: "How missed or wrong punches are corrected." },
      { label: "Setting Up Attendance for a Workforce That Is Not at a Desk", href: "/resources/hr-guides/attendance-for-shift-workforces", note: "Rules for shift-based teams." },
    ],
    verify: "Check your current obligations under the Digital Personal Data Protection Act 2023 and its rules before collecting biometric or location data.",
  },
  {
    slug: "cloud-vs-on-premise-hrms",
    name: "Cloud vs on-premise HRMS",
    title: "Where your HR system runs: a provider's servers or your own",
    standfirst:
      "Cloud HRMS vs on-premise is a choice about who runs the servers, who applies updates and where the data sits. The HR processes themselves are the same.",
    seo: {
      title: "Cloud HRMS vs On-Premise: Hosting Models Compared",
      description:
        "Cloud HRMS vs on-premise compared: who maintains it, how statutory updates arrive, cost pattern, data control, access and when each hosting model fits.",
      keywords: ["cloud hrms vs on premise", "on premise hrms", "cloud hr software", "saas hrms"],
    },
    sections: [
      {
        heading: "The two models",
        body: [
          "A cloud HRMS is run by the provider on servers it manages. You use it through a browser or app and pay a subscription. Updates are applied by the provider for every customer.",
          "An on-premise HRMS is installed on servers you own or control. Your IT team, or a contractor, installs updates, takes backups and keeps the system secure.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "Cloud", "On-premise"],
          rows: [
            ["Who runs servers and backups", "Provider", "You"],
            ["Statutory and tax updates", "Applied by the provider", "Installed by you, if the vendor ships them"],
            ["Up-front cost", "Low", "Licences, hardware and setup"],
            ["Ongoing cost", "Subscription", "Maintenance, IT time, hardware renewal"],
            ["Access for employees and managers", "Anywhere with internet", "Depends on your network setup"],
            ["Control over data location", "As the provider's terms allow", "Full"],
            ["Customisation", "Within what the product allows", "Wider, at the cost of harder upgrades"],
          ],
        },
        note: "Payroll rules change by notification and Budget. With on-premise software, a delayed update is your risk, not the vendor's.",
      },
      {
        heading: "When each fits",
        list: {
          style: "bullet",
          items: [
            "Cloud usually fits organisations without a dedicated IT team, with employees who need self-service on phones, or with several locations.",
            "On-premise may fit where a policy or contract requires data to stay on your own infrastructure, or where the system must run on an isolated network.",
          ],
        },
      },
      {
        heading: "Questions for a cloud provider",
        list: {
          style: "ordered",
          items: [
            "Where is the data hosted and backed up?",
            "Who at the provider can access our data, and how is that controlled and logged?",
            "Can we export all our data in a usable format at any time and on exit?",
            "How are statutory changes tested and released?",
          ],
        },
      },
    ],
    faqs: [
      { q: "Is cloud HR software secure?", a: "It can be, and so can on-premise software. Security depends on how each is run: access control, encryption, backups and audit logs. Ask for specifics rather than relying on the hosting model." },
      { q: "Can on-premise software offer a mobile app?", a: "It can, but your network must expose the system safely to phones outside the office, which adds work for your IT team." },
      { q: "Is moving from on-premise to cloud difficult?", a: "The main work is data: employee masters, salary history and year-to-date statutory figures. Plan the move for a clean point, such as the start of a financial year, where possible." },
    ],
    related: [
      { label: "HRMS Comparison", href: "/resources/hrms-comparison", note: "The broader choice of tools." },
      { label: "Setup, Data & Security FAQs", href: "/resources/questions-and-answers/setup-data-and-security", note: "Common questions on data handling." },
      { label: "Employee Self-Service Guide", href: "/hr/topics/employee-self-service", note: "Why remote access matters for employees." },
    ],
  },
  {
    slug: "build-vs-buy-hrms",
    name: "Build vs buy an HRMS",
    title: "Building your own HR tools or buying a product",
    standfirst:
      "Build vs buy for HR software is less about the first version and more about who keeps statutory rules, tax changes and security up to date for years after.",
    seo: {
      title: "Build vs Buy HR Software: What Each Path Costs You",
      description:
        "Build vs buy HR software compared: up-front effort, ongoing statutory maintenance, fit to your process, risk and when building in-house actually makes sense.",
      keywords: ["build vs buy hr software", "build vs buy hrms", "in-house hr software", "custom hrms"],
    },
    sections: [
      {
        heading: "What building really involves",
        body: [
          "A first internal tool for leave or attendance can be built quickly. Payroll is different: it has to apply PF, ESI, Professional Tax and Labour Welfare Fund by state, TDS under the chosen regime, arrears, loss of pay and final settlements, and each of these changes over time.",
          "The build cost is therefore not one project. It is a permanent responsibility to track notifications, change the logic, test it against past months and keep the system secure.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "Build in-house", "Buy a product"],
          rows: [
            ["Fit to your process", "Exact, at first", "Configured within the product"],
            ["Time to first use", "Months of development", "Setup and data migration"],
            ["Statutory updates", "Your team, every time", "The provider"],
            ["Dependence", "On the developers who built it", "On the provider"],
            ["Security and audit trails", "You design and maintain them", "Provided, to be checked during evaluation"],
            ["Cost pattern", "Salaries and ongoing maintenance", "Subscription or licence"],
          ],
        },
        note: "The common failure is not the build itself but the year after, when the developer who understood the payroll logic leaves.",
      },
      {
        heading: "When each fits",
        list: {
          style: "bullet",
          items: [
            "Building can make sense for a narrow process unique to your business that no product handles, connected to a bought core.",
            "Buying usually makes sense for payroll and statutory work, where the rules are common to every employer and change often.",
            "A middle path is to buy the core and build only reports or integrations on top of exported data.",
          ],
        },
      },
    ],
    faqs: [
      { q: "Is building cheaper than a subscription?", a: "Only if you count the first version alone. Add developer time for every statutory and tax change, testing, security and support, for as long as the tool runs." },
      { q: "Can we customise a bought HRMS?", a: "Most allow configuration of policies, workflows and fields. Ask what your team can change and what needs the provider." },
      { q: "What should we build if we buy?", a: "Usually reports or links to your other business systems, using the product's exports or interfaces, rather than core payroll logic." },
    ],
    related: [
      { label: "HRMS Comparison", href: "/resources/hrms-comparison", note: "Spreadsheets, point tools or one integrated system." },
      { label: "HR Automation Guide", href: "/hr/topics/hr-automation", note: "What is worth automating in HR." },
      { label: "Statutory Payroll Compliance Guide", href: "/hr/topics/statutory-compliance", note: "The rules any payroll system must keep up with." },
    ],
  },
  {
    slug: "per-employee-vs-flat-pricing",
    name: "Per-employee vs flat HRMS pricing",
    title: "How HR software is priced, and what each model rewards",
    standfirst:
      "HRMS pricing models mostly come in two shapes: a rate per employee per month, or a flat fee for a band or tier. Each suits a different growth pattern.",
    seo: {
      title: "HRMS Pricing Models: Per-Employee vs Flat Fee Compared",
      description:
        "HRMS pricing models compared: per-employee rates, flat fees and headcount bands, how each behaves as you grow, and the hidden costs to ask about first.",
      keywords: ["hrms pricing models", "per employee pricing hr software", "flat fee hrms", "hr software pricing"],
    },
    sections: [
      {
        heading: "The common models",
        body: [
          "Per-employee pricing charges a rate for each counted employee each month. The bill moves with headcount.",
          "Flat pricing charges a fixed fee, usually within a headcount band. The bill stays the same until you cross into the next band.",
          "Some providers add per-module charges, one-time setup fees or minimum billing amounts on top of either model.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "Per employee", "Flat or banded"],
          rows: [
            ["Cost when headcount falls", "Falls", "Stays the same"],
            ["Cost when headcount grows", "Rises steadily", "Steps up at band edges"],
            ["Budgeting", "Predictable per head", "Predictable per year"],
            ["Seasonal or contract staff", "Check how short-tenure employees are counted", "Usually no effect within the band"],
            ["Comparing providers", "Simple: multiply the rate", "Map your headcount to each band"],
          ],
        },
        note: "Ask who counts as an employee: active only, everyone on the payroll that month, or everyone with a login. The definition can matter more than the rate.",
      },
      {
        heading: "Costs to ask about under either model",
        list: {
          style: "bullet",
          items: [
            "Setup, data migration and training fees.",
            "Charges for additional modules, locations or legal entities.",
            "Minimum monthly billing or annual commitment.",
            "Cost of exporting your data on exit.",
          ],
        },
      },
      {
        heading: "When each fits",
        body: [
          "Per-employee pricing tends to suit organisations whose headcount moves up and down, or that are small today. Flat pricing tends to suit a stable headcount that sits comfortably inside one band.",
          "HRMagix uses per-employee monthly rates and publishes them on its pricing page.",
        ],
      },
    ],
    faqs: [
      { q: "Is per-employee pricing more expensive?", a: "Not inherently. Compare the total yearly cost at your expected headcount, including setup and add-on charges, rather than the headline rate." },
      { q: "Are employees who leave mid-month billed?", a: "It depends on the provider. Ask whether leavers, and employees whose final settlement is processed later, are counted in that month." },
      { q: "Should we pay annually or monthly?", a: "Annual payment sometimes comes with a lower rate but commits you for longer. Monthly is more flexible if you are still judging fit." },
    ],
    related: [
      { label: "Pricing", href: "/pricing", note: "Published per-employee monthly rates." },
      { label: "HRMagix Plan Cost", href: "/calculators/plan-cost", note: "Estimate a monthly subscription by headcount." },
      { label: "HRMS Comparison", href: "/resources/hrms-comparison", note: "Choosing the kind of system first." },
    ],
  },
  {
    slug: "kra-vs-okr",
    name: "KRA vs OKR (Key Result Areas vs Objectives and Key Results)",
    title: "KRAs and OKRs: what the role owns versus what the team is chasing",
    standfirst:
      "KRA vs OKR is not a choice between rival systems. KRAs describe the lasting responsibilities of a role; OKRs describe a time-bound push towards something new. Many organisations use both.",
    seo: {
      title: "KRA vs OKR: Role Outcomes and Objectives Compared",
      description:
        "KRA vs OKR compared: what each measures, time horizon, who sets them, how they link to appraisal, and how to use both without doubling the paperwork.",
      keywords: ["kra vs okr", "difference between kra and okr", "kra and okr", "okr vs kpi vs kra"],
    },
    sections: [
      {
        heading: "The core difference",
        body: [
          "A key result area (KRA) is a part of the job the role holder is accountable for, such as on-time payroll or customer renewals. It lasts as long as the role stays the same, and is usually measured by KPIs.",
          "An OKR pairs an objective, something the team wants to change, with a few measurable key results that show progress. It runs for a set period, often a quarter, and is replaced when the period ends.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "KRA", "OKR"],
          rows: [
            ["Describes", "What the role is responsible for", "What the team is trying to change"],
            ["Time horizon", "As long as the role", "Usually a quarter or a year"],
            ["Typical level", "Individual role", "Organisation, team, then individual"],
            ["Expected achievement", "Meet the standard", "Ambitious; partial progress can be acceptable"],
            ["Link to appraisal", "Usually direct", "Often kept separate from ratings"],
          ],
        },
        note: "Tying OKRs tightly to pay tends to make people set safe objectives. If you link them to appraisals, decide how stretch goals are judged before the period starts.",
      },
      {
        heading: "When each fits",
        list: {
          style: "bullet",
          items: [
            "KRAs fit roles with steady, repeatable work, and give appraisals a stable basis.",
            "OKRs fit periods of change: a new product, a market push, a process overhaul.",
            "Using both is common: KRAs for the job, a small number of OKRs for the change the organisation wants this period.",
          ],
        },
      },
    ],
    faqs: [
      { q: "Can a KRA and an OKR overlap?", a: "Yes. An OKR may set a temporary target to improve something a KRA already covers. Keep the OKR focused on the improvement, not on restating the job." },
      { q: "Are KPIs the same as KRAs?", a: "No. A KRA is the area of responsibility; KPIs are the measures used to judge performance in it." },
      { q: "How many OKRs should one person have?", a: "Few. Common practice is a small number of objectives with a handful of key results each, so attention is not spread thin." },
    ],
    related: [
      { label: "KRA (glossary)", href: `${G}/kra`, note: "Definition of a key result area." },
      { label: "OKR (glossary)", href: `${G}/okr`, note: "Definition of objectives and key results." },
      { label: "KRAs and the 9-box Guide", href: "/hr/topics/kras-and-9-box", note: "Using KRAs in talent decisions." },
      { label: "OKRs Guide", href: "/hr/topics/okrs", note: "Setting and reviewing OKRs." },
    ],
  },
  {
    slug: "ctc-vs-gross-vs-net-salary",
    name: "CTC (cost to company) vs gross vs net salary",
    title: "From cost to company to take-home: three salary figures reconciled",
    standfirst:
      "CTC vs gross salary vs net salary confuses candidates because all three describe the same job. Each is a different cut of the same money, and the gaps between them are predictable.",
    seo: {
      title: "CTC vs Gross Salary vs Net Salary: How They Connect",
      description:
        "CTC vs gross salary vs net salary explained: what each includes, the employer costs and deductions between them, and how to reconcile all three figures.",
      keywords: ["ctc vs gross salary", "ctc vs gross vs net salary", "difference between ctc and in-hand salary", "gross vs net salary"],
    },
    sections: [
      {
        heading: "The three figures",
        list: {
          style: "bullet",
          items: [
            "CTC (cost to company) is everything the employer spends on the employee in a year: gross salary plus employer contributions and benefits such as employer PF, employer ESI where it applies, gratuity provision and insurance premiums.",
            "Gross salary is the total of earnings before deductions: basic, allowances and other fixed pay components paid to the employee.",
            "Net salary (take-home) is gross minus deductions: employee PF, employee ESI where it applies, Professional Tax where the state levies it, TDS and any other recoveries.",
          ],
        },
      },
      {
        heading: "What sits between them",
        table: {
          head: ["Step", "Typical items", "Source"],
          rows: [
            ["CTC to gross", "Employer PF, 12% of PF wage", "EPF & MP Act 1952"],
            ["CTC to gross", "Employer ESI, 3.25% where the employee is covered", "ESI Act 1948"],
            ["CTC to gross", "Gratuity provision, employer-paid insurance", "Employer policy; Payment of Gratuity Act 1972"],
            ["Gross to net", "Employee PF, 12% of PF wage", "EPF & MP Act 1952"],
            ["Gross to net", "Employee ESI, 0.75% where covered", "ESI Act 1948"],
            ["Gross to net", "Professional Tax", "State law; varies by state"],
            ["Gross to net", "TDS on salary", "Income-tax Act, s.192"],
          ],
        },
        note: "Variable pay and annual bonuses are often included in CTC but paid only if earned. A CTC that includes them overstates the guaranteed monthly figure.",
      },
      {
        heading: "Why the figures drift apart",
        body: [
          "The gap between CTC and gross depends mostly on basic pay, because PF and gratuity are calculated on it, and on whether employer PF is paid on full basic or on the ₹15,000 wage ceiling.",
          "The gap between gross and net depends on the employee's tax position and regime choice, state of work and ESI coverage (wages up to ₹21,000 a month), so two people with the same CTC can take home different amounts.",
        ],
      },
      {
        heading: "Which figure to use where",
        list: {
          style: "bullet",
          items: [
            "Offer letters: show CTC and the monthly gross, itemised so the candidate can see the employer costs.",
            "Budgets: use CTC, because it is what the employer spends.",
            "Conversations about take-home: use an estimated net, with a clear note that tax depends on declarations.",
          ],
        },
      },
    ],
    faqs: [
      { q: "Why is my in-hand salary much lower than CTC divided by 12?", a: "Because CTC includes employer costs you never receive monthly, such as employer PF and gratuity provision, and because employee PF, Professional Tax and TDS are deducted from gross." },
      { q: "Is gratuity part of CTC?", a: "Many employers include a gratuity provision in CTC. It is paid only on leaving after the qualifying service under the Payment of Gratuity Act 1972." },
      { q: "Is gross salary the same as taxable income?", a: "No. Taxable income is worked out after the exemptions and deductions available under the regime the employee chooses." },
      { q: "Does every employee pay Professional Tax?", a: "No. Professional Tax is levied by some states, at slabs each state sets, so it depends on where the employee works." },
    ],
    related: [
      { label: "CTC (glossary)", href: `${G}/ctc`, note: "Definition of cost to company." },
      { label: "Gross salary (glossary)", href: `${G}/gross-salary`, note: "What counts as gross pay." },
      { label: "Take-home (glossary)", href: `${G}/take-home`, note: "What reaches the employee's bank account." },
      { label: "Salary Calculator", href: "/calculators/salary", note: "Work out the three figures for a structure." },
    ],
    verify:
      "Check the current ESI wage threshold and rates, the EPF wage ceiling, the employee's tax regime and the state's Professional Tax position before quoting take-home figures.",
  },
  {
    slug: "epf-vs-eps",
    name: "EPF vs EPS (Provident Fund vs Pension Scheme)",
    title: "Where the employer's 12% goes: provident fund and pension",
    standfirst:
      "EPF vs EPS is about one contribution split two ways. The employer's 12% is divided between the Employees' Provident Fund and the Employees' Pension Scheme, on different wage bases.",
    seo: {
      title: "EPF vs EPS: How the Employer's 12% Contribution Is Split",
      description:
        "EPF vs EPS explained: how the employer's 12% splits between provident fund and pension, the ₹15,000 wage ceiling, the ₹1,250 cap and what each pays out.",
      keywords: ["epf vs eps", "difference between epf and eps", "eps contribution", "employer pf contribution split"],
    },
    sections: [
      {
        heading: "One contribution, two accounts",
        body: [
          "Under the Employees' Provident Funds and Miscellaneous Provisions Act 1952, the employee contributes 12% of PF wages (basic plus dearness allowance) and the employer contributes 12%. All of the employee's share goes to the provident fund.",
          "The employer's share is split. 8.33% of PF wages, calculated on wages up to the ₹15,000 ceiling, goes to the Employees' Pension Scheme 1995, so the pension share is at most ₹1,250 a month. The rest of the employer's 12% goes to the provident fund.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "EPF", "EPS"],
          rows: [
            ["What it is", "A savings account that earns interest", "A pension scheme"],
            ["Employee contribution", "12% of PF wages", "None"],
            ["Employer contribution", "12% minus the EPS share", "8.33% of wages up to ₹15,000, at most ₹1,250 a month"],
            ["How the benefit is held", "Individual account balance", "Pooled scheme; benefit worked out by formula"],
            ["What the member receives", "Balance with interest, on withdrawal or retirement", "Monthly pension or withdrawal benefit, subject to scheme conditions"],
          ],
        },
        note: "The pension share is worked out on the capped wage even when the employer pays PF on full basic. Employer contribution above the cap goes to the provident fund, not the pension.",
      },
      {
        heading: "A worked example",
        body: [
          "Basic plus DA of ₹25,000, with the employer contributing on the ₹15,000 ceiling: the employer's 12% is ₹1,800. The pension share is 8.33% of ₹15,000, ₹1,250. The provident fund receives the remaining ₹550 from the employer, plus the employee's ₹1,800.",
          "The same employee with the employer contributing on full basic: the employer's 12% is ₹3,000. The pension share is still ₹1,250. The provident fund receives ₹1,750 from the employer and ₹3,000 from the employee.",
        ],
      },
      {
        heading: "The other employer charges",
        body: [
          "On top of the 12%, the employer pays EDLI (insurance) at 0.5% of wages up to ₹15,000, at most ₹75 a month, and EPF administration charges of 0.5% of PF wages. These are employer costs, not credits to the employee's account.",
        ],
      },
    ],
    faqs: [
      { q: "Can I withdraw my EPS contributions?", a: "Withdrawal and pension eligibility under EPS depend on years of service and age under the scheme's rules, and work differently from EPF withdrawals. Check the current EPFO rules." },
      { q: "Why does my passbook show less from the employer than from me?", a: "Because part of the employer's 12% goes to the pension scheme, which is not shown as a balance in the provident fund account." },
      { q: "Does higher basic increase the pension contribution?", a: "Not beyond the cap in the standard case. The pension share is calculated on wages up to ₹15,000, so it stops at ₹1,250 a month." },
    ],
    related: [
      { label: "EPF (glossary)", href: `${G}/epf`, note: "The provident fund defined." },
      { label: "EPS (glossary)", href: `${G}/eps`, note: "The pension scheme defined." },
      { label: "Provident Fund (EPF) Guide", href: "/hr/topics/provident-fund", note: "Wage base, ceiling and filings." },
      { label: "Provident Fund (PF) Calculator", href: "/calculators/pf", note: "See the split for any basic pay." },
    ],
    verify:
      "Check the current EPFO position on the ₹15,000 wage ceiling, the 8.33% EPS rate, higher-pension options and EPS withdrawal and eligibility rules before relying on these figures.",
  },
  {
    slug: "okr-vs-kpi",
    name: "OKR vs KPI (Objectives and Key Results vs Key Performance Indicators)",
    title: "OKRs and KPIs: a push for change versus a gauge of health",
    standfirst:
      "OKR vs KPI comes down to purpose. A KPI tells you whether something that already runs is running well; an OKR sets out a change you want and how you will know it happened.",
    seo: {
      title: "OKR vs KPI: Objectives and Performance Measures Compared",
      description:
        "OKR vs KPI compared: what each one measures, how long it lasts, who owns it, how targets are judged, and how a KPI can become a key result for a quarter.",
      keywords: ["okr vs kpi", "difference between okr and kpi", "kpi and okr", "okr kpi examples"],
    },
    sections: [
      {
        heading: "The core difference",
        body: [
          "A key performance indicator (KPI) is a measure you track continuously because it shows the health of a process: payroll errors per run, average time to fill a vacancy, attendance regularisations per month. It has a normal range, and you act when it drifts out of it.",
          "An OKR is an objective, a qualitative statement of where you want to be, paired with two to five key results that show you got there. It is set for a period, usually a quarter, and then closed and scored.",
          "Put simply, KPIs watch the business as it is; OKRs are about moving it somewhere else.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "KPI", "OKR"],
          rows: [
            ["Purpose", "Monitor an ongoing process", "Drive a specific change"],
            ["Time horizon", "Ongoing, reported each period", "Fixed period, often a quarter"],
            ["Form", "A single metric with a target or range", "An objective plus a few measurable key results"],
            ["Target level", "Realistic; missing it signals a problem", "Often ambitious; partial progress can be a good result"],
            ["When it ends", "When the process changes or stops mattering", "At the end of the period, when it is scored"],
            ["Typical owner", "The function that runs the process", "The team taking on the change"],
          ],
        },
        note: "A KPI that is out of range is a natural source for an OKR. If time to fill a vacancy keeps rising, an OKR for the quarter might set out to bring it down, with the KPI itself as one of the key results.",
      },
      {
        heading: "When each fits",
        list: {
          style: "bullet",
          items: [
            "Use KPIs for work that must stay steady month after month: payroll accuracy, statutory deposits on time, query turnaround.",
            "Use OKRs when you want to change how something works this period: a new onboarding process, moving attendance off paper, cutting payroll corrections.",
            "Use both together: KPIs as the dashboard for business as usual, a small set of OKRs for the improvements you have chosen to focus on.",
          ],
        },
      },
      {
        heading: "Trade-offs and common mistakes",
        list: {
          style: "bullet",
          items: [
            "Turning every KPI into an OKR. The OKR list then becomes a copy of the dashboard and stops signalling priority.",
            "Writing key results as tasks (\"launch the new form\") rather than outcomes (\"regularisation requests resolved within two working days\").",
            "Tracking KPIs nobody acts on. A measure with no owner and no threshold for action is reporting, not management.",
            "Paying directly against stretch OKRs, which encourages people to set safe ones.",
          ],
        },
      },
    ],
    faqs: [
      { q: "Can a KPI be a key result?", a: "Yes, and it often is. The difference is that the key result sets a target change in that KPI within the period, rather than just keeping it in range." },
      { q: "Do OKRs replace KPIs?", a: "No. OKRs cover what you are changing; KPIs keep watch over everything else. Dropping KPIs when you adopt OKRs leaves ongoing work unmonitored." },
      { q: "How do KRAs fit in?", a: "A KRA is an area the role is accountable for, and KPIs are usually how performance in that area is measured. OKRs sit alongside both for time-bound change." },
    ],
    related: [
      { label: "OKR (glossary)", href: `${G}/okr`, note: "Objectives and key results defined." },
      { label: "OKRs Guide", href: "/hr/topics/okrs", note: "How to set and review OKRs." },
      { label: "KRA vs OKR (Key Result Areas vs Objectives and Key Results)", href: "/resources/compare/kra-vs-okr", note: "Role responsibilities set against objectives." },
      { label: "Performance Management Guide", href: "/hr/topics/performance-management", note: "Where goals and measures sit in the year." },
    ],
  },
  {
    slug: "earned-vs-casual-vs-sick-leave",
    name: "Earned vs casual vs sick leave",
    title: "Earned, casual and sick leave: how the three main leave types differ",
    standfirst:
      "Most Indian leave policies are built on three types of leave: earned leave for planned time off, casual leave for short personal needs, and sick leave for illness. Each follows different rules.",
    seo: {
      title: "Types of Leave in India: Earned, Casual and Sick Leave",
      description:
        "Types of leave in India compared: earned, casual and sick leave, how each is accrued, carried forward and encashed, and where state law sets the entitlement.",
      keywords: ["types of leave in india", "earned leave vs casual leave", "casual leave vs sick leave", "el cl sl leave"],
    },
    sections: [
      {
        heading: "Where the rules come from",
        body: [
          "There is no single national leave code for all private employers. For shops, offices and commercial establishments, the state's Shops and Establishments Act sets minimum entitlements, and these vary by state. For factories, Chapter VIII of the Factories Act 1948 (s.79 onwards) governs annual leave with wages. Standing orders, appointment letters and the employer's own policy add to these minimums.",
          "So the right number of days depends on where the employee works and what kind of establishment employs them. A policy can give more than the law requires, never less.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "Earned leave (EL / PL)", "Casual leave (CL)", "Sick leave (SL)"],
          rows: [
            ["Purpose", "Planned time off, holidays, long breaks", "Short, unplanned personal needs", "Illness or medical treatment"],
            ["How it is credited", "Usually accrues with days worked", "Usually credited at the start of the year or monthly", "Usually credited at the start of the year or monthly"],
            ["Notice", "Applied for in advance", "Short or same-day notice", "Informed as soon as possible"],
            ["Carry forward", "Usually allowed, up to a limit", "Usually lapses at year end", "Depends on policy and state law; often limited"],
            ["Encashment", "Usually encashable, often at exit", "Usually not encashable", "Usually not encashable"],
            ["Proof", "Not normally needed", "Not normally needed", "Medical certificate often required beyond a set number of days"],
            ["Legal minimum", "Set by state law or the Factories Act", "Set by state law where it provides for it", "Set by state law where it provides for it"],
          ],
        },
        note: "These are common patterns, not rules. Some states require carry forward or encashment of particular leave types, and some merge casual and sick leave into one. Read the Act and rules that apply to each location.",
      },
      {
        heading: "When each type is the right one",
        list: {
          style: "bullet",
          items: [
            "An employee planning a week away should use earned leave; it is the type designed for planned absence and the one that usually builds up.",
            "A half-day for a bank visit or a family errand fits casual leave, which is meant for short absences at little notice.",
            "Illness belongs under sick leave, so that the reason is recorded properly and any certificate rule applies.",
          ],
        },
      },
      {
        heading: "Trade-offs in designing a policy",
        body: [
          "Separate buckets give clearer records and let you treat illness differently from personal time. They also invite people to call casual days sick days, or the reverse, when one bucket runs out.",
          "Some employers merge casual and sick leave into a single pool, or move to one paid-time-off bucket on top of the statutory minimum. That is simpler to run, but you must still show that each statutory entitlement in each state is met, and the encashment and carry forward rules for each component still apply.",
        ],
      },
    ],
    faqs: [
      { q: "How many earned leave days are mandatory?", a: "It depends on the law that covers the establishment. State Shops and Establishments Acts set their own minimums, and the Factories Act sets its own for factory workers. Check the Act and rules for each location." },
      { q: "Can casual leave be carried forward?", a: "Usually not; most policies let it lapse at year end. Some state laws treat leave differently, so confirm the rule for each state before writing the policy." },
      { q: "Is earned leave the same as privilege leave?", a: "In most policies, yes. Earned leave, privilege leave and annual leave are names for the same accrued, plannable leave." },
      { q: "Is leave encashment taxable?", a: "Encashment during service is taxed as salary. Encashment at retirement or exit can be partly exempt under the Income-tax Act, subject to limits that change, so check the current rule." },
    ],
    related: [
      { label: "Earned leave (glossary)", href: `${G}/earned-leave`, note: "How earned leave accrues." },
      { label: "Casual leave (glossary)", href: `${G}/casual-leave`, note: "Short-notice leave defined." },
      { label: "Sick leave (glossary)", href: `${G}/sick-leave`, note: "Leave for illness defined." },
      { label: "Writing a Leave Policy That Survives Contact With a Year", href: "/resources/hr-guides/writing-a-leave-policy", note: "Turning the three types into one policy." },
    ],
    verify:
      "Check the leave entitlements, carry forward and encashment rules in the Shops and Establishments Act and rules of each state you employ in, Factories Act 1948 Chapter VIII for factories, any labour code notifications, and the current Income-tax exemption limit on leave encashment.",
  },
  {
    slug: "gratuity-vs-pf",
    name: "Gratuity vs Provident Fund (PF)",
    title: "Gratuity and provident fund: two retirement benefits that work very differently",
    standfirst:
      "Gratuity vs PF is a comparison between a lump sum the employer owes at exit and a savings account both sides pay into every month. Most employees covered by one are covered by the other.",
    seo: {
      title: "Gratuity vs PF: Two Retirement Benefits Compared",
      description:
        "Gratuity vs PF compared: who pays, the governing Acts, eligibility, how each amount is worked out, when it is paid and what the employer must provide for.",
      keywords: ["gratuity vs pf", "difference between gratuity and pf", "gratuity and provident fund", "is gratuity part of pf"],
    },
    sections: [
      {
        heading: "The core difference",
        body: [
          "The provident fund (EPF) is a contributory scheme under the Employees' Provident Funds and Miscellaneous Provisions Act 1952. Every month the employee contributes 12% of PF wages and the employer contributes 12%, part of which goes to the pension scheme. The money sits in an account with EPFO and earns interest.",
          "Gratuity is a one-time payment under the Payment of Gratuity Act 1972. Only the employer pays, nothing is deposited month by month under the Act, and it becomes payable when employment ends after the qualifying service.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "Provident fund (EPF)", "Gratuity"],
          rows: [
            ["Law", "EPF and MP Act 1952 and its schemes", "Payment of Gratuity Act 1972"],
            ["Who pays", "Employee and employer", "Employer only"],
            ["How it builds", "Monthly contributions with interest", "Formula applied at exit to last drawn wages"],
            ["Rate or formula", "12% employee, 12% employer of PF wages (basic + DA); statutory wage ceiling ₹15,000 a month", "15 days' wages (basic + DA ÷ 26) per completed year of service, s.4"],
            ["Eligibility", "From joining, for covered employees", "Five years' continuous service, except on death or disablement"],
            ["Maximum", "No cap on the balance", "₹20,00,000"],
            ["When paid", "On withdrawal or retirement, under EPFO rules", "On exit: resignation, retirement, termination, death or disablement"],
            ["Where it sits", "Employee's EPFO account", "Employer's books, or a gratuity fund or insurance policy if the employer has one"],
          ],
        },
        note: "A final part-year of more than six months counts as a full year in the gratuity formula. So nine years and seven months is treated as ten years.",
      },
      {
        heading: "A worked example",
        body: [
          "An employee leaves after 8 years and 7 months with last drawn basic plus DA of ₹40,000. Gratuity is ₹40,000 × 15 ÷ 26 × 9 = ₹2,07,692, rounded. This is paid once, by the employer.",
          "Over the same years, if PF was paid on the ₹15,000 ceiling, ₹1,800 a month went in from each side, with the employer's pension share of up to ₹1,250 going to EPS rather than to the PF account. The PF balance is whatever those contributions and the declared interest add up to.",
        ],
      },
      {
        heading: "What this means for the employer",
        list: {
          style: "bullet",
          items: [
            "PF is a monthly cash cost and filing obligation: contributions deposited and the ECR filed on time each month.",
            "Gratuity is a liability that grows each year and falls due at exit. Many employers show a monthly gratuity provision in CTC so the cost is visible, but the Act itself requires the payment, not a monthly deposit.",
            "Leaving before five years usually means no gratuity, while PF contributions stay with the employee and can be transferred to the next employer.",
          ],
        },
      },
    ],
    faqs: [
      { q: "Is gratuity part of PF?", a: "No. They are separate benefits under separate Acts. PF is deposited monthly with EPFO; gratuity is paid by the employer when employment ends." },
      { q: "Can an employee get gratuity before five years?", a: "Under the Act, the five-year condition does not apply on death or disablement. Courts have read some shorter periods as five years in particular cases, so take advice on borderline service." },
      { q: "Is gratuity taxable?", a: "For employees covered by the Act, gratuity is exempt up to a limit under the Income-tax Act. The limit changes from time to time, so check the current figure." },
      { q: "Does the ₹15,000 ceiling apply to gratuity?", a: "No. The ceiling is a PF rule. Gratuity uses last drawn basic plus DA in full, subject only to the overall maximum." },
    ],
    related: [
      { label: "Gratuity Guide", href: "/hr/topics/gratuity", note: "Eligibility and the formula in detail." },
      { label: "Provident Fund (EPF) Guide", href: "/hr/topics/provident-fund", note: "Wage base, ceiling and filings." },
      { label: "Gratuity Calculator", href: "/calculators/gratuity", note: "Work out gratuity for any service and wage." },
      { label: "EPF vs EPS (Provident Fund vs Pension Scheme)", href: "/resources/compare/epf-vs-eps", note: "How the employer's PF share is split." },
    ],
    verify:
      "Check the current gratuity maximum (₹20,00,000), the 15/26 formula and eligibility rules under the Code on Social Security 2020 (in force from 21 November 2025, which replaced the Payment of Gratuity Act 1972 and lets fixed-term employees qualify after one year), the EPF ₹15,000 wage ceiling and rates, and the current Income-tax exemption limit for gratuity.",
  },
  {
    slug: "annual-vs-continuous-performance-reviews",
    name: "Annual vs continuous performance reviews",
    title: "One big review a year or regular check-ins: choosing a review rhythm",
    standfirst:
      "Annual vs continuous performance review is a question of rhythm. An annual review gives one formal record; continuous reviews spread feedback through the year so the record has no surprises.",
    seo: {
      title: "Annual vs Continuous Performance Review: Pros and Cons",
      description:
        "Annual vs continuous performance review compared: frequency, effort, link to pay, evidence, and how to combine regular check-ins with a year-end rating.",
      keywords: ["annual vs continuous performance review", "continuous performance management", "annual appraisal vs continuous feedback", "performance review frequency"],
    },
    sections: [
      {
        heading: "What each approach means",
        body: [
          "An annual review is a single formal appraisal at the end of the performance year. The manager rates the year against goals, the rating feeds increments and promotions, and the conversation happens once.",
          "Continuous review replaces or supplements that with frequent, lighter conversations: monthly or quarterly check-ins, regular one-on-ones, and goals that are updated during the year rather than set once and forgotten.",
        ],
      },
      {
        heading: "Side by side",
        table: {
          head: ["Factor", "Annual review", "Continuous review"],
          rows: [
            ["Frequency", "Once a year, sometimes with a mid-year review", "Monthly or quarterly check-ins, plus regular one-on-ones"],
            ["Evidence used", "Whatever the manager remembers or noted", "Notes and goal updates built up through the year"],
            ["Effort", "Concentrated in a few weeks", "Spread across the year; small and regular"],
            ["Link to pay", "Direct and simple to administer", "Needs a point in the year where check-ins are summarised for pay decisions"],
            ["Speed of correction", "Problems can sit for months", "Problems raised while they can still be fixed"],
            ["Main risk", "Recency bias and surprise ratings", "Check-ins skipped or turned into status meetings"],
          ],
        },
        note: "Most organisations that move to continuous review keep a year-end step. The difference is that the year-end rating summarises conversations already held instead of opening new ones.",
      },
      {
        heading: "When each fits",
        list: {
          style: "bullet",
          items: [
            "Annual review alone can suit stable roles with steady goals, and organisations that need a simple, auditable basis for increments.",
            "Continuous review suits fast-changing work, new managers who need structure, and teams where goals shift during the year.",
            "A hybrid is the common middle path: quarterly check-ins against goals, with one annual calibration and rating tied to the increment cycle.",
          ],
        },
      },
      {
        heading: "Trade-offs to plan for",
        list: {
          style: "bullet",
          items: [
            "Continuous review only works if managers actually hold the check-ins. Set a minimum cadence and track whether it happens.",
            "Frequent conversations without notes leave no evidence at year end. Keep a short written record of each check-in.",
            "Annual review rewards whoever was most visible in the last quarter. If you keep it, ask managers to cite examples from across the year.",
            "Changing cadence changes the appraisal policy. Update the written policy so employees know how ratings are reached.",
          ],
        },
      },
    ],
    faqs: [
      { q: "Does continuous review mean no ratings?", a: "Not necessarily. Many organisations keep an annual rating for pay decisions and use check-ins to make sure the rating reflects the whole year." },
      { q: "How often should check-ins happen?", a: "Monthly or quarterly is common. Choose a rhythm managers can actually keep; a quarterly check-in that happens is better than a monthly one that does not." },
      { q: "Is a mid-year review the same as continuous review?", a: "It is a step towards it. Two formal points a year reduce surprises, but continuous review also relies on regular informal conversations in between." },
    ],
    related: [
      { label: "Performance Reviews Guide", href: "/hr/topics/performance-reviews", note: "Holding the review conversation itself." },
      { label: "Running an Appraisal Cycle End to End", href: "/resources/hr-guides/running-an-appraisal-cycle", note: "Timelines and logistics of the cycle." },
      { label: "360-degree feedback (glossary)", href: `${G}/360-degree-feedback`, note: "Feedback from several directions." },
      { label: "Performance & OKRs", href: "/solutions/performance-and-okrs", note: "How HRMagix runs goals, KRA & 9-Box and reviews in one module." },
    ],
  },
];

export const compareCollection: LibCollection = {
  base: "/resources/compare",
  label: "Compare",
  hub: {
    title: "HR choices, compared plainly",
    standfirst: "Side-by-side explanations of the terms and decisions HR and payroll teams weigh up, without naming or rating any vendor.",
    intro: [
      "These pages compare concepts and approaches, not products. Each one sets the options next to each other, says where each fits, and leaves the decision with you.",
      "None of them ranks HR software vendors. For the broader question of spreadsheets, point tools or one integrated system, see the HRMS comparison page.",
    ],
    seo: {
      title: "HR & Payroll Comparisons: Concepts and Choices Explained",
      description: "Plain comparisons of HR terms and decisions: HRMS vs HRIS vs HCM, KRA vs OKR, CTC vs gross vs net, in-house vs outsourced payroll and more.",
      keywords: ["hr software comparison", "hr concepts compared", "payroll comparisons"],
    },
  },
  pages,
};
