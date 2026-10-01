import type { Topic } from "../topics";

export const topicsPay: Topic[] = [
  {
    slug: "provident-fund",
    name: "Provident fund (EPF)",
    category: "Pay & compliance",
    title: "The provident fund is two contributions, one wage base and one ceiling.",
    standfirst:
      "EPF looks like a single twelve per cent deduction. In practice the employer's share is split two ways, the base depends on how basic pay is defined, and the ceiling is an employer choice.",
    definition: [
      "The Employees' Provident Fund is a retirement savings scheme under the Employees' Provident Funds and Miscellaneous Provisions Act. Both the employee and the employer contribute a percentage of the employee's PF wage, basic pay plus dearness allowance, each month.",
      "The employee contributes 12% of the PF wage. The employer also contributes 12%, of which 8.33% goes to the Employees' Pension Scheme (on a wage of up to ₹15,000) and the remainder to the provident fund account. Each member is identified by a Universal Account Number (UAN).",
    ],
    whyItMatters: [
      "Provident fund contributions are held on the employee's behalf, and depositing them late or incorrectly brings interest and damages for the employer. Because they are calculated on basic pay, the salary structure decides their size for every employee.",
      "Employers may contribute on the full PF wage or restrict contributions to the ₹15,000 wage ceiling. That choice changes both employer cost and the employee's savings, so it should be deliberate and consistent.",
    ],
    challenges: [
      { title: "The wage base", body: "Which components count as PF wage decides the contribution. Structures with an unusually low basic reduce it, and draw scrutiny." },
      { title: "The ceiling choice", body: "Contributing on full basic or on the ₹15,000 ceiling must be applied consistently, and reflected in offers." },
      { title: "The EPS split", body: "The employer's 12% is divided between the pension scheme and the provident fund, on different bases." },
      { title: "UAN for joiners", body: "New joiners with previous employment need their existing UAN linked, not a new one created." },
    ],
    process: [
      { step: "Register the establishment", body: "Obtain PF registration where the Act applies." },
      { step: "Capture the UAN", body: "Collect each joiner's existing UAN or generate one." },
      { step: "Calculate in payroll", body: "Apply 12% employee and employer contributions on the PF wage, with the ceiling rule chosen." },
      { step: "File the ECR and pay", body: "Upload the electronic challan cum return and deposit contributions by the due date." },
      { step: "Reconcile", body: "Match deposits to the payroll register every month." },
    ],
    practices: [
      "Decide the ceiling policy once and state it in offer letters.",
      "Derive contributions from the salary structure, never type them in.",
      "Collect previous UANs during pre-boarding.",
    ],
    mistakes: [
      "Creating a new UAN for someone who already has one.",
      "Changing the ceiling treatment for individual employees.",
      "Treating the whole employer contribution as provident fund and ignoring the pension split.",
    ],
    software:
      "Payroll software computes both contributions and the pension split from the salary structure, applies the chosen ceiling consistently, and produces the ECR file from the same run as the payslips.",
    inHRMagix: [
      { label: "Payroll Module", href: "/features/payroll", note: "EPF with the wage ceiling and ECR files for EPFO." },
      { label: "Provident Fund (PF) Calculator", href: "/calculators/pf", note: "Employee and employer contributions, with the EPS split." },
      { label: "Compliance", href: "/solutions/compliance", note: "How EPF is derived inside the payroll run." },
    ],
    faqs: [
      { q: "What is the PF wage?", a: "Basic pay plus dearness allowance, the base on which provident fund contributions are calculated." },
      { q: "What is the ₹15,000 wage ceiling?", a: "The statutory wage limit for provident fund purposes. Employers may restrict contributions to it or contribute on the full PF wage; the pension scheme contribution is calculated on a wage of up to ₹15,000." },
      { q: "What is an ECR?", a: "The electronic challan cum return, the monthly file an employer uploads to report each member's contributions and make the payment." },
      { q: "What are the employee and employer PF contribution rates?", a: "The employee contributes 12% of the PF wage. The employer also contributes 12%, of which 8.33% goes to the Employees' Pension Scheme on a wage of up to ₹15,000 and the remainder to the provident fund account." },
      { q: "What is the EPS split in the employer's PF contribution?", a: "The employer's 12% is divided between the Employees' Pension Scheme and the provident fund account. Treating the whole employer contribution as provident fund and ignoring the pension split is a common mistake." },
      { q: "What is a UAN?", a: "The Universal Account Number that identifies each provident fund member. A new joiner with previous employment should have their existing UAN linked rather than a new one created." },
      { q: "What happens if PF contributions are deposited late?", a: "Contributions are held on the employee's behalf, and depositing them late or incorrectly brings interest and damages for the employer." },
      { q: "How does the salary structure affect PF contributions?", a: "Because contributions are calculated on basic pay plus dearness allowance, the split between basic and allowances decides their size. Structures with an unusually low basic reduce contributions and draw scrutiny." },
    ],
    phrases: ["epf", "provident fund", "pf", "uan", "eps"],
    seo: {
      title: "Provident Fund (EPF): Contributions, Ceiling and ECR",
      description: "How EPF works for employers in India: 12% employee and employer contributions, the EPS split, the ₹15,000 wage ceiling, UAN, the ECR and common mistakes.",
    },
  },
  {
    slug: "employee-state-insurance",
    name: "Employee State Insurance (ESI)",
    category: "Pay & compliance",
    title: "ESI coverage is decided by a threshold: and a contribution period, not a single month.",
    standfirst:
      "ESI looks like a monthly test against ₹21,000 of gross pay. The part that catches payroll teams out is that coverage runs for a contribution period, so a heavy month does not simply switch it off.",
    definition: [
      "Employee State Insurance is a social security scheme under the Employees' State Insurance Act, providing medical and cash benefits to covered employees. Employees in covered establishments whose gross wages are within the threshold, ₹21,000 a month, are covered.",
      "The employee contributes 0.75% of gross wages and the employer 3.25%. Unlike the provident fund, both are calculated on gross wages rather than basic.",
    ],
    whyItMatters: [
      "ESI coverage gives employees access to benefits, and employers who miss coverage or contributions face interest and damages. Because the base is gross wages, overtime and variable pay move employees towards the threshold.",
    ],
    challenges: [
      { title: "Crossing the threshold", body: "Overtime and allowances can push gross above ₹21,000 in one month." },
      { title: "Contribution periods", body: "An employee covered at the start of a contribution period generally remains covered through it, even if wages rise." },
      { title: "Gross, not basic", body: "Teams used to PF calculations apply the wrong base." },
    ],
    process: [
      { step: "Register where covered", body: "Obtain ESI registration for covered establishments." },
      { step: "Test coverage", body: "Check gross wages against the threshold, respecting the contribution period." },
      { step: "Calculate in payroll", body: "0.75% employee and 3.25% employer on gross wages." },
      { step: "File and pay", body: "Deposit contributions and file returns by the due date." },
    ],
    practices: [
      "Track contribution periods, not only monthly gross.",
      "Flag employees near the threshold before payroll runs.",
      "Calculate on gross wages, including the components that count.",
    ],
    mistakes: [
      "Dropping coverage mid-period because one month's gross exceeded the threshold.",
      "Calculating ESI on basic instead of gross.",
      "Ignoring overtime when checking the threshold.",
    ],
    software:
      "Payroll software tests coverage against the threshold within each contribution period, calculates both contributions on gross, and flags employees whose variable pay is taking them across the line.",
    inHRMagix: [
      { label: "Payroll Module", href: "/features/payroll", note: "ESI on the ₹21,000 threshold, with ESIC contribution files." },
      { label: "Employees' State Insurance (ESI) Calculator", href: "/calculators/esi", note: "The threshold test and both contributions." },
      { label: "The ESI Threshold Is Not a Monthly Test, and Treating It as One Costs Money", href: "/insights/esi-threshold-moving-wage-base", note: "Why the threshold is harder than it looks." },
    ],
    faqs: [
      { q: "What is the ESI wage threshold?", a: "₹21,000 of gross wages a month. Employees in covered establishments within the threshold are covered." },
      { q: "What are the ESI contribution rates?", a: "0.75% of gross wages from the employee and 3.25% from the employer." },
      { q: "Does ESI stop the month gross exceeds ₹21,000?", a: "Not necessarily. Coverage generally continues for the contribution period in which the employee was covered, even if wages rise within it." },
      { q: "Is ESI calculated on basic or gross salary?", a: "On gross wages. Unlike the provident fund, both the employee and employer ESI contributions are calculated on gross rather than basic pay." },
      { q: "What benefits does ESI provide to employees?", a: "Employee State Insurance provides medical and cash benefits to covered employees under the Employees' State Insurance Act." },
      { q: "Can overtime affect ESI eligibility?", a: "Yes. Because ESI is based on gross wages, overtime and allowances can push an employee's gross above ₹21,000 in a month, so they should be considered when checking the threshold." },
      { q: "What happens if an employer misses ESI coverage or contributions?", a: "Employers who miss coverage or contributions face interest and damages." },
      { q: "What is an ESI contribution period?", a: "The period over which ESI coverage is assessed. An employee covered at the start of a contribution period generally remains covered through it, even if their wages rise." },
    ],
    phrases: ["esi", "esic", "employee state insurance"],
    seo: {
      title: "Employee State Insurance (ESI): Threshold and Contributions",
      description: "How ESI works for employers in India: the ₹21,000 gross threshold, 0.75% and 3.25% contributions, contribution periods, and common ESI payroll mistakes.",
    },
  },
  {
    slug: "gratuity",
    name: "Gratuity",
    category: "Pay & compliance",
    title: "Gratuity is fixed by formula. The work is knowing when it is owed.",
    standfirst:
      "The Payment of Gratuity Act sets the formula exactly. What employers get wrong is continuous service, the wage it is calculated on, and not provisioning for a liability that arrives with every long-serving exit.",
    definition: [
      "Gratuity is a statutory payment under the Payment of Gratuity Act to an employee who leaves after at least five years of continuous service (the Act prescribes circumstances where the five-year condition does not apply).",
      "It is calculated as fifteen days' wages for every completed year of service, where the daily wage is the last drawn basic pay plus dearness allowance divided by twenty-six: Gratuity = 15 ÷ 26 × last drawn basic and DA × completed years.",
    ],
    whyItMatters: [
      "Gratuity is a liability that grows every year an employee stays, and it is paid in one amount at exit. Employers that do not provision for it meet it as a surprise in the final settlement.",
    ],
    challenges: [
      { title: "Continuous service", body: "Breaks, transfers between entities and periods of leave raise questions about what counts." },
      { title: "The wage base", body: "Gratuity is calculated on last drawn basic and DA, not gross." },
      { title: "Unfunded liability", body: "Without provisioning, a long-serving exit lands as an unplanned cost." },
    ],
    process: [
      { step: "Track service from the original joining date", body: "Carry the date across transfers between entities." },
      { step: "Check eligibility at exit", body: "Five years of continuous service, subject to the Act's exceptions." },
      { step: "Calculate", body: "15 ÷ 26 × last drawn basic and DA × completed years." },
      { step: "Pay in the settlement", body: "Include gratuity in the full and final settlement." },
      { step: "Provision in advance", body: "Set aside the accruing liability each year." },
    ],
    practices: [
      "Keep the original date of joining on the record across transfers.",
      "Provision for gratuity every year rather than at exit.",
      "Show employees their accrued entitlement where appropriate.",
    ],
    mistakes: [
      "Calculating gratuity on gross salary.",
      "Resetting service on an internal transfer.",
      "Forgetting gratuity in the final settlement of a long-serving employee.",
    ],
    software:
      "Software keeps service continuous across transfers, calculates gratuity from the last drawn basic on the record, and includes it in the final settlement automatically when an eligible employee exits.",
    inHRMagix: [
      { label: "Gratuity Calculator", href: "/calculators/gratuity", note: "The statutory formula on your own figures." },
      { label: "Compliance", href: "/solutions/compliance", note: "Gratuity provisioning and settlement calculations." },
      { label: "Cost to Company (CTC) Calculator", href: "/calculators/ctc", note: "Including a monthly gratuity provision in CTC." },
    ],
    faqs: [
      { q: "How is gratuity calculated?", a: "Fifteen days' wages for every completed year of service, where a day's wage is last drawn basic and DA divided by twenty-six." },
      { q: "When does an employee become eligible for gratuity?", a: "Generally after five years of continuous service, with exceptions prescribed in the Payment of Gratuity Act." },
      { q: "Why is the divisor 26?", a: "The Act uses a twenty-six day month, reflecting working days rather than calendar days." },
      { q: "What is the gratuity formula?", a: "Gratuity = 15 ÷ 26 × last drawn basic and DA × completed years of service." },
      { q: "Is gratuity calculated on gross salary?", a: "No. Gratuity is calculated on last drawn basic pay plus dearness allowance, not gross salary." },
      { q: "Does an internal transfer reset service for gratuity?", a: "It should not. Service should be tracked from the original joining date and carried across transfers between entities; resetting it on transfer is a common mistake." },
      { q: "Why should employers provision for gratuity?", a: "Gratuity is a liability that grows every year an employee stays and is paid in one amount at exit. Provisioning each year avoids meeting it as a surprise in the final settlement." },
      { q: "When is gratuity paid?", a: "At exit, as part of the full and final settlement, when the employee is eligible." },
    ],
    phrases: ["gratuity"],
    seo: {
      title: "Gratuity: Payment of Gratuity Act Formula and Eligibility",
      description: "How gratuity works in India: the 15 ÷ 26 formula on last drawn basic and DA, five-year eligibility, continuous service, provisioning and common mistakes.",
    },
  },
  {
    slug: "payroll-management",
    name: "Payroll management",
    category: "Pay & compliance",
    title: "Payroll is not a calculation. It is a monthly chain of decisions that end in one.",
    standfirst:
      "The arithmetic of payroll is the easy part. The work is everything that has to be right before it: attendance, leave, joiners, leavers, changes and approvals.",
    definition: [
      "Payroll management is the process of calculating what each employee is owed for a period, deducting what must be deducted, paying the net amount, and filing and paying the statutory amounts that arise from it.",
      "In India a payroll run typically produces salary payments, payslips, provident fund and ESI contributions, professional tax where it applies, income tax deducted at source, and the returns that report each of them.",
    ],
    whyItMatters: [
      "Payroll is the HR process employees notice most directly. A late or wrong salary damages trust faster than almost anything else an employer does.",
      "It is also where statutory liability concentrates. Contributions and tax deducted from salary are held on behalf of the government and the employee, and late or incorrect deposit brings interest and penalties.",
    ],
    challenges: [
      { title: "Inputs arrive late", body: "Attendance corrections, leave approvals, new joiners and salary changes reach payroll at the last minute, compressing the check into hours." },
      { title: "Changes mid-month", body: "An increment effective from the tenth, a transfer between entities or a promotion changes the calculation for part of a month." },
      { title: "Several filings from one run", body: "Each statutory head has its own format and due date, and all must agree with the same payroll." },
      { title: "Re-keying between systems", body: "When attendance, leave and payroll live in separate tools, every handover is a place for errors to enter." },
    ],
    process: [
      { step: "Freeze inputs", body: "Lock attendance, leave, joiners, leavers and changes at an agreed cutoff." },
      { step: "Run and review", body: "Calculate earnings and deductions, then review variances against the previous month." },
      { step: "Approve", body: "A second person approves the run before anything is paid." },
      { step: "Pay", body: "Generate the bank file and release salaries." },
      { step: "File and deposit", body: "Deposit PF, ESI, PT and TDS and file the returns, each by its due date." },
      { step: "Publish payslips", body: "Make payslips available to employees and keep the run as issued." },
    ],
    practices: [
      "Keep a fixed monthly cutoff and publish it to managers.",
      "Review month-on-month variances, not every line.",
      "Separate the person who runs payroll from the person who approves it.",
      "Never edit an issued payslip; correct through the next run with an identified line.",
    ],
    mistakes: [
      "Accepting input changes after the run has been reviewed.",
      "Correcting past months by editing them rather than paying arrears.",
      "Treating statutory filings as a separate job from the payroll they come from.",
    ],
    software:
      "Payroll software reads its inputs directly from attendance and leave instead of receiving them as a file, calculates statutory deductions from the salary structure, and produces the payslips, bank file and returns from the same figures, so the return and the ledger cannot disagree.",
    inHRMagix: [
      { label: "Payroll Module", href: "/features/payroll", note: "EPF, ESI, multi-state PT, TDS and bank batch files from one run." },
      { label: "Payroll", href: "/solutions/payroll", note: "How a payroll month actually runs, from cutoff to filing." },
      { label: "Payroll Resources", href: "/resources/payroll-resources", note: "Payroll material indexed by what you are trying to do." },
    ],
    faqs: [
      { q: "What is a payroll cutoff?", a: "The date after which inputs for the month, attendance, leave, joiners, changes, are no longer accepted, so the run can be calculated and checked. Changes after the cutoff go into the next month." },
      { q: "How should a mistake in a past payroll be corrected?", a: "Through the next payroll run, as an identified arrear or recovery line, leaving the original payslip as issued. Editing past runs destroys the record of what was actually paid." },
      { q: "Who should approve payroll?", a: "Someone other than the person who prepared it. The approver reviews variances and exceptions rather than recalculating every line." },
      { q: "What does a payroll run produce in India?", a: "Typically salary payments, payslips, provident fund and ESI contributions, professional tax where it applies, income tax deducted at source, and the returns that report each of them." },
      { q: "What are the steps in processing payroll each month?", a: "Freeze inputs at the cutoff, run and review the calculation, have a second person approve it, pay salaries through the bank file, deposit and file statutory amounts, and publish payslips." },
      { q: "How should payroll be reviewed before it is paid?", a: "By reviewing month-on-month variances rather than every line. Unexpected changes from the previous month are where errors show up." },
      { q: "How are mid-month salary changes handled in payroll?", a: "An increment effective partway through the month, a transfer or a promotion changes the calculation for part of the month, so the change needs to be recorded with the date it takes effect." },
      { q: "Why keep attendance, leave and payroll in one system?", a: "When they live in separate tools, every handover is a place for errors to enter. Reading inputs directly from attendance and leave avoids re-keying." },
    ],
    phrases: ["payroll", "payslip", "salary"],
    seo: {
      title: "How to Manage Employee Payroll in India: The Monthly Process",
      description: "How to manage employee payroll in India: inputs and cutoff, running and approving payroll, paying salaries, statutory filings, and common payroll mistakes.",
      keywords: ["how to manage employee payroll in India"],
    },
  },
  {
    slug: "statutory-compliance",
    name: "Statutory payroll compliance",
    category: "Pay & compliance",
    title: "Each statutory head is simple. Keeping all of them in step every month is not.",
    standfirst:
      "EPF, ESI, professional tax, the labour welfare fund and TDS each have their own base, rate, threshold and due date. Compliance is getting all five right from one payroll.",
    definition: [
      "Statutory payroll compliance is the calculation, deduction, deposit and reporting of the amounts Indian law requires employers to handle through payroll.",
      "The main heads are the Employees' Provident Fund, Employee State Insurance, professional tax, the labour welfare fund, and tax deducted at source on salary under Section 192 of the Income-tax Act. Gratuity is a further statutory liability, payable on exit after five years of continuous service.",
    ],
    whyItMatters: [
      "Amounts deducted from employees for these heads are held in trust. Depositing them late or incorrectly exposes the employer to interest, damages and penalties, and can affect employees' own records, their PF balance, their ESI eligibility, their tax credit.",
      "Several heads are state matters. Professional tax and the labour welfare fund differ by state in whether they apply, the slabs and the deduction months, so a multi-state employer runs several rule sets at once.",
    ],
    challenges: [
      { title: "Different bases", body: "PF is calculated on the PF wage, ESI on gross, professional tax on a state slab of salary, and TDS on projected annual taxable income." },
      { title: "Thresholds that move people in and out", body: "ESI applies within a wage threshold, so an employee's coverage can change with their salary." },
      { title: "State variation", body: "Professional tax and labour welfare fund rules differ across states, including deduction months." },
      { title: "Returns that must reconcile", body: "Each filing must match the payroll it came from, and TDS returns must reconcile to annual certificates." },
    ],
    process: [
      { step: "Register", body: "Obtain the registrations each head requires for each establishment and state." },
      { step: "Configure the rules", body: "Rates, wage ceilings, thresholds and state slabs set once in the payroll system." },
      { step: "Deduct through payroll", body: "Calculate each head from the salary structure as part of the monthly run." },
      { step: "Deposit and file", body: "Pay each amount and file each return by its own due date." },
      { step: "Reconcile", body: "Match deposits and returns to the payroll register, and annual certificates to quarterly returns." },
    ],
    practices: [
      "Keep a compliance calendar with every due date for every state you operate in.",
      "Derive statutory amounts from the salary structure, never type them in.",
      "Reconcile each return to payroll before filing it, not after a notice.",
      "Keep registration numbers and challans with the payroll run they belong to.",
    ],
    mistakes: [
      "Applying one state's professional tax slab to employees in another.",
      "Missing an employee's move across the ESI threshold.",
      "Filing returns from a spreadsheet that has drifted from the payroll.",
    ],
    software:
      "Compliance software turns statutory rules into configuration: ceilings, thresholds and state slabs are set once and applied to every employee, and the deposit files and returns come out of the same run as the payslips.",
    inHRMagix: [
      { label: "Compliance", href: "/solutions/compliance", note: "EPF, ESI, PT, LWF and TDS derived inside the payroll run." },
      { label: "Payroll Module", href: "/features/payroll", note: "ECR files for EPFO and ESIC, and quarterly Form 24Q export." },
      { label: "Provident Fund (PF) Calculator", href: "/calculators/pf", note: "Employee and employer contributions on your own figures." },
      { label: "Employees' State Insurance (ESI) Calculator", href: "/calculators/esi", note: "The threshold test and both contributions." },
    ],
    faqs: [
      { q: "Which statutory deductions apply to Indian payroll?", a: "Typically the provident fund, ESI where the employee is within the threshold and the establishment is covered, professional tax in states that levy it, the labour welfare fund in states that have one, and TDS on salary. Which apply depends on the establishment, the state and the employee." },
      { q: "Is professional tax the same in every state?", a: "No. Whether it applies, the slabs and the months of deduction are set by each state. Some states do not levy it at all." },
      { q: "What happens if statutory dues are deposited late?", a: "Interest and, for some heads, damages or penalties apply. Because these amounts are held on behalf of employees, late deposit can also affect their own records." },
      { q: "What is the labour welfare fund?", a: "A statutory contribution handled through payroll in states that have one. Whether it applies, and the deduction months, differ by state." },
      { q: "What base is each statutory deduction calculated on?", a: "PF is calculated on the PF wage, ESI on gross wages, professional tax on a state slab of salary, and TDS on projected annual taxable income." },
      { q: "How do multi-state employers manage payroll compliance?", a: "By configuring each state's professional tax and labour welfare fund rules separately, and keeping a compliance calendar with every due date for every state they operate in." },
      { q: "Is gratuity part of statutory payroll compliance?", a: "Gratuity is a further statutory liability alongside the monthly heads, payable on exit after five years of continuous service." },
      { q: "Why reconcile statutory returns with payroll?", a: "Each return must match the payroll it came from, and TDS returns must reconcile to annual certificates. Reconciling before filing avoids discovering mismatches only after a notice." },
    ],
    phrases: ["epf", "esi", "professional tax", "tds", "labour welfare", "statutory"],
    seo: {
      title: "Statutory Payroll Compliance in India: EPF, ESI, PT, LWF, TDS",
      description: "A plain guide to statutory payroll compliance in India: what EPF, ESI, professional tax, LWF and TDS are, how each is calculated, deposited and reconciled.",
    },
  },
  {
    slug: "salary-structure",
    name: "Salary structure",
    category: "Pay & compliance",
    title: "How a salary is split decides what it costs: long after the offer is signed.",
    standfirst:
      "The same gross salary can produce different take-home pay, different employer cost and a different gratuity liability, depending on how it is divided into components.",
    definition: [
      "A salary structure is the breakdown of an employee's pay into components, typically basic, dearness allowance, house rent allowance, other allowances, and variable pay, together with the employer's statutory contributions that sit on top.",
      "Cost to company, or CTC, is the convention of quoting everything the employer spends on an employee in a year. Gross salary is what the employee earns before deductions. Take-home is what reaches their bank account.",
    ],
    whyItMatters: [
      "Provident fund and gratuity are calculated on basic pay, so the split between basic and allowances is a cost decision, not a formatting one. It also affects the employee: some components have tax treatment that others do not.",
      "Structures designed ad hoc for each offer drift into a set of individual deals that are hard to explain, compare or change.",
    ],
    challenges: [
      { title: "CTC confusion", body: "Candidates compare CTC figures that include different things, then discover the take-home differs." },
      { title: "Low-basic structures", body: "Keeping basic low reduces contributions today but concentrates risk if wage definitions for contribution purposes are interpreted more broadly." },
      { title: "One-off structures", body: "Each negotiated offer adds a new variant, until no two people on the same grade are paid the same way." },
    ],
    process: [
      { step: "Choose the components", body: "Decide which components the company uses and what each is for." },
      { step: "Set the ratios", body: "Define basic as a proportion of gross and the rule for each allowance." },
      { step: "Template by grade", body: "Build a structure per grade or band instead of per person." },
      { step: "Show both views in offers", body: "Present CTC, gross and estimated take-home together." },
      { step: "Review when rules change", body: "Revisit the structure when statutory definitions or tax regimes change." },
    ],
    practices: [
      "Show candidates CTC, gross and take-home side by side.",
      "Use templates per grade rather than one-off structures.",
      "Document why each allowance exists.",
    ],
    mistakes: [
      "Quoting CTC only, and leaving take-home as a surprise.",
      "Designing structures around one year's tax rules without reviewing them.",
      "Letting individual negotiations create unique structures.",
    ],
    software:
      "Salary structure software applies a template to a gross figure and shows every consequence immediately, statutory contributions, employer cost and estimated take-home, so a structure is chosen knowingly rather than discovered in the first payslip.",
    inHRMagix: [
      { label: "Payroll Module", href: "/features/payroll", note: "Statutory deductions derived from the salary structure on the record." },
      { label: "Salary Calculator", href: "/calculators/salary", note: "Gross to take-home, with PF and ESI shown." },
      { label: "Cost to Company (CTC) Calculator", href: "/calculators/ctc", note: "Gross to annual cost to company." },
    ],
    faqs: [
      { q: "What is the difference between CTC and gross salary?", a: "Gross salary is what the employee earns before deductions. CTC adds what the employer pays on top, its own PF and ESI contributions, any gratuity provision and variable pay, so CTC is always higher than gross." },
      { q: "Why does basic pay matter so much?", a: "Because the provident fund and gratuity are both calculated on it. A higher basic raises both, which affects employer cost now and the gratuity liability later." },
      { q: "Should every employee have the same structure?", a: "Employees in the same grade should, so that pay is comparable and explainable. The amounts differ; the shape should not." },
      { q: "What are the components of a salary structure?", a: "Typically basic pay, dearness allowance, house rent allowance, other allowances and variable pay, with the employer's statutory contributions sitting on top." },
      { q: "What is the difference between gross salary and take-home pay?", a: "Gross salary is what the employee earns before deductions. Take-home is what reaches their bank account after deductions." },
      { q: "Is a low basic salary structure a good idea?", a: "Keeping basic low reduces contributions today, but concentrates risk if wage definitions for contribution purposes are interpreted more broadly." },
      { q: "What should an offer letter show about salary?", a: "CTC, gross and estimated take-home side by side. Quoting CTC only leaves take-home as a surprise in the first payslip." },
      { q: "When should a salary structure be reviewed?", a: "When statutory definitions or tax regimes change. Structures designed around one year's tax rules and never revisited are a common mistake." },
    ],
    phrases: ["basic", "ctc", "gross", "allowance", "take-home", "salary structure"],
    seo: {
      title: "Salary Structure: CTC, Gross, Basic and Take-Home",
      description: "How salary structures work in India: components, why basic pay drives PF and gratuity, CTC versus gross versus take-home, grade templates and common mistakes.",
    },
  },
  {
    slug: "payslips",
    name: "Payslips",
    category: "Pay & compliance",
    title: "A payslip is a record, not a message. It should never change after it is issued.",
    standfirst:
      "Employees use payslips for loans, visas, tax filing and disputes. That only works if the payslip for March says today what it said in March.",
    definition: [
      "A payslip is the statement of an employee's earnings, deductions and net pay for a pay period. It typically shows each earning component, each statutory and voluntary deduction, year-to-date totals, days paid and the employer and employee identifiers.",
    ],
    whyItMatters: [
      "The payslip is often the only document an employee sees from payroll, so it is where errors and trust are both visible. It is also evidence: lenders, embassies and tax authorities treat it as a record of income.",
    ],
    challenges: [
      { title: "Regenerated payslips", body: "When a payslip is recreated from current data, it can show a different figure from the one originally issued." },
      { title: "Unexplained deductions", body: "A deduction the employee does not recognise creates a query every month." },
      { title: "Access after exit", body: "Former employees still need payslips for years, long after they have lost access to company systems." },
    ],
    process: [
      { step: "Generate from the approved run", body: "Payslips are produced from the payroll that was approved and paid." },
      { step: "Freeze on issue", body: "Once issued, a payslip is stored as issued and never recalculated." },
      { step: "Correct through arrears", body: "Errors are corrected in a later payslip as identified lines." },
      { step: "Make them self-service", body: "Employees download their own payslips for any processed month." },
    ],
    practices: [
      "Label every deduction in plain terms.",
      "Show year-to-date figures so employees can check tax projections.",
      "Keep issued payslips retrievable for the full retention period.",
    ],
    mistakes: [
      "Regenerating old payslips from current salary data.",
      "Emailing payslips as attachments with no other access route.",
      "Editing a payslip to fix an error instead of correcting it next month.",
    ],
    software:
      "Software issues payslips from the approved run, stores them exactly as issued, and makes every past month available to the employee on demand, removing both the regeneration risk and the stream of 'please resend my payslip' requests.",
    inHRMagix: [
      { label: "Payroll Module", href: "/features/payroll", note: "Payslips produced by the payroll run." },
      { label: "Employee Self-Service", href: "/solutions/employee-self-service", note: "Payslips and Form 16 downloadable by employees." },
      { label: "Reading an Indian Payslip, Line by Line", href: "/insights/reading-an-indian-payslip", note: "Every line on a typical payslip, explained." },
    ],
    faqs: [
      { q: "Is an employer required to issue payslips?", a: "Wage laws for many categories of establishment require a wage slip or similar statement to be given to employees. Beyond the legal requirement, a payslip is the employee's main record of income." },
      { q: "Can a payslip be corrected after it is issued?", a: "It should not be edited. A correction belongs in a later payroll as an identified arrear or recovery, so both the original and the correction are on record." },
      { q: "How long should payslips be available?", a: "For as long as payroll records must be retained, and in practice for as long as a former employee might need them for tax, gratuity or verification." },
      { q: "What details should a payslip show?", a: "Each earning component, each statutory and voluntary deduction, year-to-date totals, days paid, and the employer and employee identifiers, along with net pay for the period." },
      { q: "Why should old payslips not be regenerated?", a: "A payslip recreated from current data can show a different figure from the one originally issued. Issued payslips should be stored exactly as issued." },
      { q: "What is a payslip used for?", a: "Employees use payslips for loans, visas, tax filing and disputes, and lenders, embassies and tax authorities treat them as a record of income." },
      { q: "Why show year-to-date figures on a payslip?", a: "Year-to-date figures let employees check their tax projections as the year progresses." },
      { q: "How can employees get past payslips?", a: "Through self-service, where employees can download their own payslips for any processed month rather than asking HR to resend them." },
    ],
    phrases: ["payslip", "payslips"],
    seo: {
      title: "Payslips and Salary Slip Generator Software: What They Must Show",
      description: "What a payslip contains, why an issued payslip must never be regenerated, correcting errors through arrears, and self-service access for employees.",
      keywords: ["payslip generator","salary slip generator software"],
    },
  },
  {
    slug: "tds-on-salary",
    name: "TDS on salary",
    category: "Pay & compliance",
    title: "TDS on salary is a year-long projection, corrected every month.",
    standfirst:
      "Tax on salary is deducted monthly, but it is calculated on the year. Every declaration, proof and salary change moves the projection, and the deduction follows.",
    definition: [
      "Tax deducted at source on salary is income tax the employer deducts from an employee's pay each month under Section 192 of the Income-tax Act, based on the employee's estimated annual taxable income and the tax regime they have chosen.",
      "The employer reports these deductions in quarterly returns (Form 24Q) and issues Form 16 to the employee after the year, summarising salary and tax deducted.",
    ],
    whyItMatters: [
      "Deducting too little leaves the employee with a tax bill and the employer with a default; deducting too much reduces take-home unnecessarily. Because the calculation is annual, a mistake early in the year can only be corrected by uneven deductions later.",
    ],
    challenges: [
      { title: "Regime choice", body: "Employees choose between the old and new tax regimes, which changes which deductions and exemptions count." },
      { title: "Declarations versus proofs", body: "Deductions are projected on declarations early in the year and adjusted when proofs arrive." },
      { title: "Mid-year joiners", body: "Income from a previous employer in the same year must be taken into account." },
      { title: "Reconciliation", body: "Form 16 must agree with the quarterly returns and with the employee's own tax records." },
    ],
    process: [
      { step: "Collect the regime choice and declarations", body: "At the start of the year or on joining." },
      { step: "Project annual income", body: "Estimate taxable income for the year and the tax on it." },
      { step: "Spread the deduction", body: "Deduct monthly, recalculating whenever salary, declarations or proofs change." },
      { step: "Verify proofs", body: "Collect evidence for declared investments before the year closes." },
      { step: "File and certify", body: "File quarterly returns and issue Form 16 after the year." },
    ],
    practices: [
      "Let employees compare regimes on their own figures before choosing.",
      "Collect proofs early rather than in the last month.",
      "Recalculate TDS every time salary or declarations change.",
    ],
    mistakes: [
      "Fixing the monthly deduction at the start of the year and never revisiting it.",
      "Ignoring previous-employer income for mid-year joiners.",
      "Leaving proof collection until the final month, forcing a large deduction.",
    ],
    software:
      "Software recalculates the annual projection automatically on every change, lets employees declare and upload proofs themselves, and produces quarterly returns and Form 16 from the same payroll data.",
    inHRMagix: [
      { label: "Payroll Module", href: "/features/payroll", note: "TDS Section 192 with dual-regime comparison and quarterly Form 24Q export." },
      { label: "Compliance", href: "/solutions/compliance", note: "How TDS is derived inside the run." },
      { label: "The Declaration That Decides Twelve Months of TDS", href: "/insights/old-vs-new-regime", note: "How the regime choice changes the calculation." },
    ],
    faqs: [
      { q: "What is Form 16?", a: "The certificate an employer issues to an employee after the financial year, showing salary paid and tax deducted at source. The employee uses it when filing their own return." },
      { q: "What is Form 24Q?", a: "The quarterly return in which an employer reports tax deducted from salaries." },
      { q: "Can an employee change tax regime during the year?", a: "The rules on when and how the regime choice can be made are set by the Income-tax Act and change from time to time. Employers usually collect the choice at the start of the year and apply it consistently." },
      { q: "How is TDS on salary calculated?", a: "The employer projects the employee's estimated annual taxable income under their chosen tax regime, calculates the tax on it, and spreads the deduction across the remaining months, recalculating whenever salary, declarations or proofs change." },
      { q: "Under which section is TDS deducted on salary?", a: "Section 192 of the Income-tax Act." },
      { q: "What is the difference between investment declarations and proofs?", a: "Declarations are used to project deductions early in the year. Proofs are the evidence for those investments, collected before the year closes, and the TDS is adjusted when they arrive." },
      { q: "How is TDS handled for employees who join mid-year?", a: "Income from a previous employer in the same year must be taken into account in the annual projection. Ignoring it is a common mistake." },
      { q: "Why does TDS increase in the last months of the year?", a: "Often because proofs were collected late or the deduction was not recalculated when things changed, so the shortfall has to be recovered in the remaining months." },
    ],
    phrases: ["tds", "section 192", "form 16", "form 24q", "tax regime"],
    seo: {
      title: "TDS on Salary Calculation: Section 192, Form 24Q and Form 16",
      description: "How TDS on salary calculation works in India: annual projection, old versus new regime, declarations and proofs, Form 24Q and Form 16, and common mistakes.",
      keywords: ["TDS on salary calculation"],
    },
  },
  {
    slug: "payroll-cutoff",
    name: "The payroll cutoff",
    category: "Pay & compliance",
    title: "Most payroll errors are made before payroll starts.",
    standfirst:
      "The cutoff is the moment the month's inputs stop changing. Everything that makes payroll late or wrong is something that crossed it.",
    definition: [
      "The payroll cutoff is the date and time after which changes to a month's payroll inputs, attendance, leave, joiners, exits, salary changes and one-off payments, are no longer accepted for that month.",
    ],
    whyItMatters: [
      "Without a cutoff, payroll is calculated against moving data and checked in the time left over. With one, there is a fixed window to review, approve and pay, and late changes have a defined home: next month.",
    ],
    challenges: [
      { title: "Managers who miss it", body: "Approvals left until the last day turn the cutoff into a negotiation." },
      { title: "Genuine late events", body: "An exit or a correction that must be paid this month needs a controlled exception route." },
      { title: "Unclear ownership", body: "When nobody owns an input, nobody chases it before the cutoff." },
    ],
    process: [
      { step: "Publish the calendar", body: "Share the year's cutoff dates with every manager in advance." },
      { step: "Chase exceptions before the date", body: "Pending approvals and missed punches are resolved before the cutoff, not after." },
      { step: "Lock the inputs", body: "Freeze attendance and changes for the month." },
      { step: "Route late changes", body: "Anything after the cutoff goes to next month unless an approved exception applies." },
    ],
    practices: [
      "Remind approvers several days before the cutoff, with their pending list.",
      "Keep a short, approved exception process for true emergencies.",
      "Measure how many changes arrive after the cutoff, month by month.",
    ],
    mistakes: [
      "Moving the cutoff whenever someone asks.",
      "Accepting changes after the run has been reviewed.",
      "Leaving exception handling to payroll alone.",
    ],
    software:
      "Software makes the cutoff enforceable: pending approvals are visible to the people who owe them, reminders go out automatically, and the month's inputs can be locked so the reviewed run is the one that is paid.",
    inHRMagix: [
      { label: "Payroll", href: "/solutions/payroll", note: "How a payroll month runs from cutoff to filing." },
      { label: "Attendance & Shifts Module", href: "/features/attendance", note: "Attendance that feeds the run directly." },
      { label: "Your Payroll Does Not Take Four Days. Your Reconciliation Does.", href: "/insights/why-payroll-takes-four-days", note: "Where the time actually goes." },
    ],
    faqs: [
      { q: "When should the payroll cutoff be?", a: "Early enough to leave time for review, approval and bank processing before pay day. The exact date matters less than keeping it fixed and known." },
      { q: "What happens to changes after the cutoff?", a: "They are processed in the next month's payroll, as arrears or recoveries, unless an approved exception applies." },
      { q: "Who is responsible for meeting the cutoff?", a: "Whoever owns each input, managers for approvals, employees for regularisations, HR for joiners and exits. Payroll owns the date, not every input." },
      { q: "Which inputs does the payroll cutoff cover?", a: "Attendance, leave, joiners, exits, salary changes and one-off payments for the month." },
      { q: "How should urgent changes after the payroll cutoff be handled?", a: "Through a short, approved exception process for genuine late events, such as an exit that must be paid this month. Everything else goes to the next month." },
      { q: "Should the payroll cutoff date be moved on request?", a: "No. Moving the cutoff whenever someone asks turns it into a negotiation and compresses the time left for review and approval." },
      { q: "How can managers be helped to meet the payroll cutoff?", a: "Publish the year's cutoff dates in advance, and remind approvers several days before each cutoff with their list of pending items." },
      { q: "How do you measure whether the payroll cutoff is working?", a: "Track how many changes arrive after the cutoff, month by month. A falling number shows inputs are being resolved on time." },
    ],
    phrases: ["cutoff", "cut-off"],
    seo: {
      title: "Payroll Cutoff: Locking Inputs Before Payroll Runs",
      description: "Why a fixed payroll cutoff prevents most payroll errors: what it covers, handling late changes and exceptions, and the practices that make it stick.",
    },
  },
];
