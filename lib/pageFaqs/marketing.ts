import type { PageFaq } from "./types";

/**
 * Page-level FAQs for the marketing and company pages, keyed by route path.
 * Every answer is drawn from the page's own copy or its data in lib/*.ts.
 * Pages that already carry inline FAQs only take the entries needed to reach eight.
 */
export const marketingFaqs: Record<string, PageFaq[]> = {
  "/how-setup-works": [
    {
      q: "How long does it take to set up HRMagix?",
      a: "Most Indian organisations complete setup within two to three days. Whether that holds depends less on the software than on how cleanly your existing data comes across.",
    },
    {
      q: "What data can we import from Excel?",
      a: "Structured Excel templates cover employee master data, leave balances accrued to date, the salary structures in force, department hierarchies and the statutory identifiers each employee already holds.",
    },
    {
      q: "Do leave balances restart from zero after migration?",
      a: "No. Leave balances are imported as they stand, so accrual continues from the position you are actually in rather than restarting from zero.",
    },
    {
      q: "What is the dry-run payroll?",
      a: "Before the first live cutoff, a payroll is run against your imported data and configuration, then compared line by line with your last real run so every difference is explained before real salaries move.",
    },
    {
      q: "What happens to records that fail validation on import?",
      a: "Validation happens on import rather than at the first payroll run, and records that fail, such as a malformed identifier or a missing date of joining, are reported individually so nobody is quietly absent from the first run.",
    },
    {
      q: "Can we switch to HRMagix in the middle of a financial year?",
      a: "Yes. Year-to-date figures come across as well, because Form 16 has to reconcile across the whole year regardless of which system produced each month of it.",
    },
    {
      q: "Can policies be changed after setup?",
      a: "Yes. Configuration is a setting rather than a customisation, and policies carry effective dates, so a change applies from the date it takes effect without rewriting months already calculated.",
    },
    {
      q: "What support is available during the first live payroll?",
      a: "An onboarding specialist works through policy validation, the dry run and reconciliation with you, and support runs on WhatsApp, phone and email with product specialists in Pune. Enterprise subscriptions also have a dedicated customer success manager.",
    },
  ],

  "/features": [
    {
      q: "How many modules does HRMagix have?",
      a: "Twelve, grouped as People, Time & Work, Performance, Engagement, Payroll and System. Each module has its own page describing what it does and where it sits in the app.",
    },
    {
      q: "Which modules are included in HRMagix?",
      a: "Attendance and shifts, leaves and holidays, payroll, objectives and OKRs, KRA and 9-box, PIPs and growth, recognition, 1-on-1s and meetings, onboarding, documents, succession and analytics.",
    },
    {
      q: "Which biometric devices does attendance work with?",
      a: "The attendance module supports biometric push API sync with eSSL, Matrix and ZKTeco devices, alongside mobile GPS geo-fencing with selfie validation on iOS and Android.",
    },
    {
      q: "Which statutory deductions does the payroll module handle?",
      a: "EPF, ESI, multi-state Professional Tax and TDS under Section 192, with a dual tax regime comparison, quarterly Form 24Q export and ECR files for the EPFO and ESIC portals.",
    },
    {
      q: "Does the leave module support Indian leave rules?",
      a: "Yes. It supports custom leave categories, multi-level approvals, automatic monthly accruals, sandwich-rule enforcement and carry-over rules, with leave quotas aligned to the Factories Act and Shops and Establishments Act.",
    },
    {
      q: "Do the modules share data with each other?",
      a: "Yes. All twelve read from one employee record, so attendance feeds loss of pay and loss of pay feeds payroll without anything being re-entered.",
    },
    {
      q: "Which plan includes which features?",
      a: "Starter covers attendance, leaves, the employee directory and documents. Growth adds payroll, performance, OKRs, KRAs and 9-box, recognition and analytics, and Enterprise adds SSO, succession and lifecycle and a dedicated success manager.",
    },
    {
      q: "Can I try every feature before buying?",
      a: "Yes. The 14-day free trial gives full access to all twelve modules with no credit card and no implementation fee.",
    },
  ],

  "/industries": [
    {
      q: "Which industries does HRMagix cover?",
      a: "Startups, small businesses, SMEs, manufacturing, IT and technology, and professional services each have their own page.",
    },
    {
      q: "Is HRMagix a different product for each industry?",
      a: "No. The HRMS, payroll, attendance and leave modules are identical in every case; what changes is which module carries the weight and which should be switched on first.",
    },
    {
      q: "Do statutory obligations differ by industry?",
      a: "No. EPF and ESI applicability, Professional Tax in each state you employ in, TDS under Section 192, gratuity and maternity benefit apply to every Indian employer regardless of sector.",
    },
    {
      q: "Which module should a manufacturing company start with?",
      a: "Attendance and shifts, because that is where the monthly cost is decided when the shop floor and the office are paid on different logic from the same run.",
    },
    {
      q: "Where should a services or IT firm start?",
      a: "With the employee record and self-service, because the administrative load in a services firm is mostly queries rather than hours.",
    },
    {
      q: "What should a group with several legal entities configure first?",
      a: "The employee record, because the entity structure has to be right before payroll can be.",
    },
    {
      q: "What if my company does not fit any of the six industries?",
      a: "The sensible order is almost always the record first, then whichever of attendance or payroll is currently costing you the most time. A short conversation with the team usually settles it.",
    },
    {
      q: "Can I see HRMagix working for my type of company?",
      a: "Yes. A demo runs against your own payroll month, and the 14-day free trial gives full access to every module.",
    },
  ],

  "/solutions": [
    {
      q: "What is the difference between integration and one employee record?",
      a: "In HRMagix the modules are not separate products joined by an API or an overnight sync. They read the same ledger, so a correction such as a backdated leave approval changes the loss-of-pay register without anyone re-entering it.",
    },
    {
      q: "How many solutions and modules does HRMagix offer?",
      a: "Twelve modules on one employee record. Eight have a page of their own, and the remaining four, performance, recognition, meetings and succession, are described in full on this page.",
    },
    {
      q: "Does HRMagix include payroll with PF, ESI, PT and TDS?",
      a: "Yes. Payroll handles EPF, ESI, multi-state Professional Tax and TDS under Section 192, and produces ECR files for the EPFO and ESIC portals.",
    },
    {
      q: "Is there an employee self-service portal?",
      a: "Yes. Employee self-service is one of the solutions, letting employees view payslips and balances, apply for leave and submit investment declarations.",
    },
    {
      q: "Does a backdated leave approval update payroll automatically?",
      a: "Yes. Because leave and payroll read the same record, an approved leave backdated before the cutoff changes the loss-of-pay register without manual reconciliation.",
    },
    {
      q: "Which module should we start with?",
      a: "It depends more on what kind of company you are than on which feature list looks longest. Each industry page sets out a starting order and explains why.",
    },
    {
      q: "Can we buy individual modules?",
      a: "Modules are switched on by plan. Starter covers attendance, leaves, directory and documents; Growth adds payroll and performance; Enterprise adds SSO, succession and a dedicated success manager.",
    },
    {
      q: "How quickly can we get started?",
      a: "Most Indian organisations complete setup within two to three days, with a dry-run payroll before the first live cutoff.",
    },
  ],

  // Appended to the seven inline FAQs on the page.
  "/solutions/compliance": [
    {
      q: "Does HRMagix decide whether our establishment is covered by EPF or ESI?",
      a: "No. Whether an establishment is covered, which state registrations you hold and whether you have opted into voluntary coverage are facts you supply. The engine applies them consistently.",
    },
  ],

  // Appended to the seven inline FAQs on the page.
  "/solutions/performance-and-okrs": [
    {
      q: "Does HRMagix score employees automatically?",
      a: "No. Performance and potential are both human assessments recorded during a review cycle; the platform does not generate ratings from data nobody deliberately assessed.",
    },
  ],

  "/partners-and-vendors": [
    {
      q: "Does HRMagix have a partner programme?",
      a: "No. There are no partner tiers, badges, commission schedules or partner directory. Each relationship is arranged individually with the team in Pune.",
    },
    {
      q: "What kinds of partners does HRMagix work with?",
      a: "Accounting and compliance firms, implementation and HR consultants, and biometric hardware and infrastructure suppliers.",
    },
    {
      q: "How do accounting firms work with HRMagix customers?",
      a: "The payroll run produces the ECR file, the ESIC contribution return, the state Professional Tax working and Form 24Q, which the firm reviews and files rather than assembling from scratch.",
    },
    {
      q: "Which biometric hardware does HRMagix integrate with?",
      a: "Biometric attendance hardware from eSSL, Matrix, Realtime and ZKTeco.",
    },
    {
      q: "How do I register as a supplier to HRMagix?",
      a: "There is no open vendor registration portal or pre-qualified supplier list. Write with a specific proposal covering what you supply, who you already supply it to and your commercial terms.",
    },
    {
      q: "Does HRMagix hold any security or compliance certification?",
      a: "No certification, accreditation or compliance attestation is asserted on this site, because none has been published. If your assessment requires one, ask directly.",
    },
    {
      q: "What audit records does the platform produce?",
      a: "Attendance records with the original capture and any correction, payroll runs that lock once processed, statutory outputs generated from the run, and policy acknowledgement recorded per person, per version.",
    },
    {
      q: "Where do hosting and data retention questions get answered?",
      a: "In a written response against your own procurement template, because the answers have to be precise enough to sign.",
    },
  ],

  "/company/about-hrmagix": [
    {
      q: "Where is HRMagix based?",
      a: "HRMagix operates from Pune and Mumbai, Maharashtra, with product specialists in the same timezone and statutory environment as its customers.",
    },
    {
      q: "What does HRMagix build?",
      a: "HRMS and payroll software for Indian companies: twelve modules on one employee record, with EPF, ESI, Professional Tax and TDS treated as the substance of the product.",
    },
    {
      q: "Is HRMagix an applicant tracking system?",
      a: "No. HRMagix begins at the accepted offer; sourcing, interviewing and offer management happen elsewhere, and pre-boarding is where the employee record starts.",
    },
    {
      q: "Does HRMagix run payroll outside India?",
      a: "No. The design assumes Indian statute, including the EPF ceiling, ESI contribution periods, state Professional Tax and the Gratuity Act.",
    },
    {
      q: "Is HRMagix an employer of record?",
      a: "No. The platform calculates statutory deductions and produces filing-ready output, but the obligation to file and to be correct stays with the employer.",
    },
    {
      q: "Is attendance tracking used for employee monitoring?",
      a: "No. Attendance exists to establish payable days and reconcile leave; geo-fencing and selfie validation are configured by the employer for specific sites, not applied by default.",
    },
    {
      q: "Can we check how a statutory figure was calculated?",
      a: "Yes. Every PF, ESI, Professional Tax and TDS figure can be traced back to the salary component and the rule that produced it.",
    },
    {
      q: "How do I reach the HRMagix team?",
      a: "Support runs on WhatsApp, phone and email with product specialists in Pune, and the contact page lists the direct channels.",
    },
  ],

  "/company/careers": [
    {
      q: "Is HRMagix hiring?",
      a: "No open roles are published right now. You can still send an introduction through the form on this page.",
    },
    {
      q: "How do I apply to HRMagix?",
      a: "There is no application portal or job board listing. Write to the team directly with what you would want to work on, what you have built before and a link to your work.",
    },
    {
      q: "Where would I be working?",
      a: "HRMagix builds its product from Pune and Mumbai, Maharashtra, India.",
    },
    {
      q: "What does the engineering work involve?",
      a: "Mostly turning provisions of Indian law into rules evaluated monthly against a versioned employee record, in a way customers' HR teams can configure without an implementation project.",
    },
    {
      q: "What happens after I send an introduction?",
      a: "If there is a fit, the conversation continues with the people you would actually work with. If there is not, the team will say so rather than leave it open.",
    },
    {
      q: "Are salary bands and benefits published?",
      a: "No. Compensation bands and benefit lists are discussed in the conversation itself rather than published on the page.",
    },
    {
      q: "Who uses the software I would be building?",
      a: "HR teams at cutoff, exit and inspection, and a workforce that is often on a plant floor, at a client site or in a delivery van rather than at a desk.",
    },
    {
      q: "Can I contact the team by email or phone about working here?",
      a: "Yes. The email address and phone number are listed on the careers page alongside the introduction form.",
    },
  ],

  "/company/contact-hrmagix": [
    {
      q: "How can I contact HRMagix?",
      a: "By email at hello@HrMagix.com, by phone or WhatsApp on +91 900 600 7955, or through the message form on this page. The team is based in Pune, Maharashtra.",
    },
    {
      q: "Who answers my enquiry?",
      a: "Product specialists in Pune and Mumbai, not a call centre queue. Specific statutory questions go straight to the specialists.",
    },
    {
      q: "How do I book a demo?",
      a: "Send a message through the form. A useful demo runs against your own salary structure, leave scheme, shift pattern and states rather than sample data.",
    },
    {
      q: "What should I have ready for a demo?",
      a: "Nothing is required, but a sample salary structure for one grade, your current leave policy, the states you employ in and the last thing that went wrong at month end make it concrete.",
    },
    {
      q: "What should I include when asking about migration?",
      a: "Roughly how many employees, entities and locations you have and what history you hold. That determines whether it is a two-day setup or a longer conversation.",
    },
    {
      q: "I'm a customer with a payroll cutoff running. What's the fastest way to get help?",
      a: "Call or message on the phone line rather than emailing; that is what it is for.",
    },
    {
      q: "Can I evaluate HRMagix without talking to anyone?",
      a: "Yes. The rates are published, the calculators run without an email address, and the 14-day free trial gives full access to every module with no credit card.",
    },
    {
      q: "Where do I sign in to my HRMagix workspace?",
      a: "Existing customers sign in at app.hrmagix.com.",
    },
  ],

  "/company/press-kit": [
    {
      q: "How should the name HRMagix be written?",
      a: "As one word with a capital H, R and M: HRMagix. Not HR Magix, HRmagix or HR-Magix, and without an article.",
    },
    {
      q: "How should HRMagix be described?",
      a: "As HRMS and payroll software for companies operating in India, not as an HRIS, an ATS or a workforce-management suite.",
    },
    {
      q: "Is there approved boilerplate I can use?",
      a: "Yes. A one-sentence and a one-paragraph description are published on this page and can be copied verbatim.",
    },
    {
      q: "Where can I download the HRMagix logo?",
      a: "The product mark is published as a vector SVG, with a favicon version for small sizes. Please use the file rather than a screenshot.",
    },
    {
      q: "What are the HRMagix brand colours?",
      a: "Brand violet #7150F0, deep violet #5A36D6, violet ink #160B3A, wash #F7F5FF and canvas dark #080716.",
    },
    {
      q: "What are the rules for using the mark?",
      a: "Keep clear space of at least half its width, place it on white, wash or deep violet grounds, and do not stretch, recolour, outline, shadow or animate it, or lock it up with another logo without asking.",
    },
    {
      q: "Does HRMagix hold ISO or SOC certifications?",
      a: "HRMagix has not published ISO, SOC or similar certifications of its own, so none should be attributed to it.",
    },
    {
      q: "Where can I get the founding date, headcount or funding details?",
      a: "They are not published, nor are revenue figures, awards or analyst rankings. Please ask the team rather than infer them.",
    },
  ],

  "/explore-all-pages": [
    {
      q: "What is the All Pages page?",
      a: "A human-readable sitemap listing every page on the HRMagix website in one place, grouped by section.",
    },
    {
      q: "How do I find a specific page quickly?",
      a: "Filter by section, or type a page name to find it.",
    },
    {
      q: "Is this list kept up to date?",
      a: "Yes. It is built from the same index the header search uses, so it lists exactly the pages that exist.",
    },
    {
      q: "What kinds of pages are listed?",
      a: "Solutions, industries, calculators, guides, white papers, the blog, the workplace policy library and more.",
    },
    {
      q: "Where can I find payroll and statutory calculators?",
      a: "The calculator pages are listed in the index. Type \"calculator\" in the filter to find them.",
    },
    {
      q: "Where is the workplace policy library?",
      a: "It is listed in the index with the other policy pages and can be found by filtering or typing its name.",
    },
    {
      q: "Is there a list of every HRMagix feature?",
      a: "Yes. The features and solutions pages appear in the index and describe all twelve modules.",
    },
    {
      q: "How do I get help if I can't find what I'm looking for?",
      a: "Contact the product specialists in Pune by email, phone or WhatsApp through the contact page.",
    },
  ],
};
