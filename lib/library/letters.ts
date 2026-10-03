import type { LibCollection } from "./types";

const P = "/policy-centre/workplace-policy-library";
const G = "/resources/hr-and-payroll-glossary";

export const lettersCollection: LibCollection = {
  base: "/resources/hr-letter-templates",
  label: "HR letter templates",
  hub: {
    title: "HR letter templates for every stage of employment",
    standfirst: "Usable letter formats from offer to final settlement, each with guidance on when to issue it and what it must contain.",
    intro: [
      "Each template is a complete letter with placeholders in square brackets, plus notes on when it is issued, who signs it and the details people most often get wrong.",
      "They are starting points. Employment terms differ by organisation and by state, so have the final wording reviewed against your own appointment terms and policies before you issue it.",
    ],
    seo: {
      title: "HR Letter Templates: Offer, Appointment, Relieving & More",
      description: "Free HR letter formats for India: offer, appointment, confirmation, increment, relieving, experience, warning, termination and settlement letters.",
      keywords: ["hr letter templates", "hr letter formats", "employment letter templates india"],
    },
  },
  pages: [
    // 1. Offer letter
    {
      slug: "offer-letter",
      name: "Offer letter template",
      title: "Offer letter format for hiring in India",
      standfirst: "An offer letter tells a selected candidate that you want to hire them and on what headline terms. This offer letter format covers role, pay, joining date and the conditions the offer depends on.",
      seo: {
        title: "Offer Letter Format: Free Template for Indian Employers",
        description: "Offer letter format with a ready template: what to include, how it differs from an appointment letter, and the mistakes that cause disputes at joining.",
        keywords: ["offer letter format", "offer letter template", "job offer letter india", "offer letter sample"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "The offer letter goes out after the final interview and any reference or background checks you run before an offer. HR usually drafts it and an authorised signatory, often the HR head or the hiring manager's function head, signs it.",
            "It is a conditional document. The candidate signs and returns a copy to accept, and the detailed terms follow in the appointment letter on or soon after the joining date.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Designation, department and reporting manager.",
              "Work location and whether the role is on-site, hybrid or remote.",
              "Annual cost to company, with a salary annexure that splits fixed pay, variable pay and employer contributions.",
              "Proposed joining date and the date by which the offer must be accepted.",
              "Conditions: document verification, background check, medical fitness if relevant, and relieving from the previous employer.",
              "A line that the full terms will be set out in the appointment letter.",
            ],
          },
        },
        {
          heading: "Offer letter or appointment letter",
          body: [
            "The offer letter is an invitation with headline terms. The appointment letter is the employment contract: probation, notice period, leave, confidentiality, working hours and grounds for separation. Some organisations combine the two, but keeping them separate lets you withdraw an offer cleanly if a condition is not met before the person joins.",
          ],
          note: "The most common dispute is a CTC figure the candidate reads as take-home pay. Attach a salary break-up and state that statutory deductions apply.",
        },
      ],
      template: `[COMPANY NAME]
[Registered office address] | [CIN, if applicable] | [Phone] | [Email]

Ref: [HR/OFFER/YYYY/NNN]
Date: [DD Month YYYY]

[Candidate full name]
[Address]
[Email]

Subject: Offer of employment for the position of [Designation]

Dear [Candidate first name],

Further to your interviews with us, we are pleased to offer you the position of [Designation] in our [Department] team, reporting to [Manager name, Designation]. Your place of work will be [City / office address] [and the role will follow our [on-site / hybrid / remote] working arrangement].

1. Compensation: Your annual cost to company will be Rs. [Amount] ([amount in words]). The break-up of fixed pay, variable pay and employer contributions is set out in Annexure A. Applicable statutory deductions and income tax will be made from your salary.

2. Joining date: We expect you to join on or before [DD Month YYYY]. Please let us know immediately if this date is not possible.

3. Conditions of this offer: This offer is subject to:
   a) satisfactory verification of your educational, identity and employment documents;
   b) a satisfactory background check [if applicable];
   c) your being relieved by your current employer, with a relieving letter, before the joining date;
   d) [any other condition, for example medical fitness].

4. Appointment letter: Your detailed terms of employment, including probation, notice period, leave and conduct obligations, will be set out in your appointment letter, which will be issued [on your date of joining / within [N] days of joining].

5. Documents to bring on joining: [List, for example: proof of identity, PAN, Aadhaar, educational certificates, last three salary slips, relieving letter from your previous employer, bank account details, passport-size photographs].

Please sign and return a copy of this letter by [DD Month YYYY] to confirm your acceptance. If we do not receive your acceptance by that date, this offer will lapse.

We look forward to welcoming you to [Company name].

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Enclosure: Annexure A, Salary break-up

ACCEPTANCE
I accept the offer of employment on the terms set out above and will join on [DD Month YYYY].

Signature: ____________________
Name: [Candidate full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "Is an offer letter legally binding?", a: "Once signed by the candidate it is evidence of the agreed headline terms, but it is usually conditional. Most of the enforceable employment terms sit in the appointment letter and your policies. Have your adviser review the wording if you rely on it." },
        { q: "Can an offer be withdrawn after acceptance?", a: "Organisations do withdraw offers when a stated condition, such as document verification, is not met. Withdrawing for reasons not stated in the letter is harder to defend, which is why the conditions should be listed clearly." },
        { q: "Should the offer letter state take-home pay?", a: "State the CTC and attach a break-up. Take-home depends on tax regime, deductions and declarations, so present any in-hand figure as an estimate only." },
      ],
      related: [
        { label: "Appointment Letter Template", href: "/resources/hr-letter-templates/appointment-letter", note: "The detailed terms that follow the offer." },
        { label: "Cost to Company (CTC) Calculator", href: "/calculators/ctc", note: "Build the salary annexure from a CTC figure." },
        { label: "The Employee Onboarding Checklist, From Signed Offer to Day Thirty", href: "/resources/hr-guides/employee-onboarding-checklist", note: "What happens between acceptance and day one." },
        { label: "What is CTC", href: `${G}/ctc`, note: "The term candidates most often misread." },
      ],
    },
    // 2. Appointment letter
    {
      slug: "appointment-letter",
      name: "Appointment letter template",
      title: "Appointment letter format with full employment terms",
      standfirst: "The appointment letter is the written contract of employment. This appointment letter format sets out probation, pay, hours, leave, notice and conduct terms in one signed document.",
      seo: {
        title: "Appointment Letter Format: Template With Employment Terms",
        description: "Appointment letter format for Indian employers: a full template covering probation, notice, leave and confidentiality, plus how it differs from an offer letter.",
        keywords: ["appointment letter format", "appointment letter template", "employment contract letter india"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued on the date of joining or shortly after, once documents have been verified. HR prepares it and an authorised signatory signs it. The employee signs a duplicate copy, which goes into the personnel file.",
            "Some states' Shops and Establishments rules and some standing orders require written particulars of employment to be given to the worker. The format and timing vary by state, so check the rule that applies to each location.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Employee code, designation, grade, department and date of joining.",
              "Remuneration with a reference to the salary annexure.",
              "Probation period and how confirmation is communicated.",
              "Working hours, weekly off and reference to the leave policy.",
              "Notice period during and after probation, and whether pay in lieu is allowed.",
              "Transfer clause, confidentiality, intellectual property and acceptable use.",
              "A statement that company policies, as amended, form part of the terms.",
            ],
          },
        },
        {
          heading: "How it differs from the offer letter",
          body: [
            "The offer letter invites the candidate to join on headline terms. The appointment letter governs the relationship once they have joined. If the two conflict, the later, signed appointment letter usually prevails, so make sure the pay and designation match exactly.",
          ],
          note: "Avoid copying non-compete clauses from foreign templates. Post-employment restraints are generally unenforceable in India; confidentiality and non-solicitation wording is the safer focus. Have your adviser review any restraint clause.",
        },
      ],
      template: `[COMPANY NAME]
[Registered office address] | [CIN, if applicable] | [Phone] | [Email]

Ref: [HR/APPT/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
[Address]

Subject: Letter of appointment

Dear [Employee first name],

With reference to our offer letter dated [DD Month YYYY] and your acceptance of it, we are pleased to appoint you as [Designation] in [Grade/Band] in the [Department] department with effect from [Date of joining], on the following terms.

1. Place of work: You will be based at [Office address]. [The company may transfer you to any of its offices, departments or group companies in India as business requires, as per its transfer policy.]

2. Remuneration: Your annual cost to company will be Rs. [Amount], as detailed in Annexure A. Salary is paid monthly by bank transfer, subject to applicable statutory deductions and income tax.

3. Probation: You will be on probation for [N] months from your date of joining. On satisfactory completion, your confirmation will be communicated in writing. [The probation period may be extended as per the company's probation policy.] Until you receive written confirmation, you will continue to be on probation.

4. Working hours: Your working hours will be [hours], [days] a week, with [day(s)] as weekly off, subject to the company's attendance policy.

5. Leave and holidays: You will be entitled to leave and holidays as per the company's leave policy in force from time to time.

6. Notice period: During probation, either party may end employment by giving [N] days' written notice. After confirmation, the notice period will be [N] days/months. [The company may, at its discretion, accept pay in lieu of notice or waive part of the notice period, as per the notice period policy.]

7. Confidentiality: You will not, during or after your employment, disclose any confidential information about the company, its clients or its employees, except as required for your work or by law.

8. Intellectual property: All work products created by you in the course of your employment will belong to the company.

9. Conduct: You will comply with the company's code of conduct and all policies in force from time to time, which form part of these terms.

10. Separation: Your employment may be ended [as per the terms of your appointment, the company's policies and applicable law / standing orders]. On separation you will return all company property and complete the exit formalities.

11. Accuracy of information: If any information or document you have provided is found to be incorrect, the company may take action [as per its policies].

Please sign and return the duplicate copy of this letter as a token of your acceptance.

We welcome you to [Company name] and wish you a rewarding career with us.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Enclosure: Annexure A, Salary break-up

ACCEPTANCE
I have read and understood the terms of this appointment and accept them.

Signature: ____________________
Name: [Employee full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "Is an appointment letter mandatory?", a: "Several state Shops and Establishments rules and certified standing orders require written terms or an appointment order. Whether it is mandatory for a given location depends on that state's rule, so check it. In practice every employer should issue one." },
        { q: "Can terms in the appointment letter be changed later?", a: "Material changes, such as pay, designation or location, should be made in writing and acknowledged by the employee. Changes to service conditions for workmen can also attract notice requirements under industrial law." },
        { q: "Should the appointment letter repeat the full policies?", a: "No. Refer to the policies by name and state that they form part of the terms as amended from time to time. Make sure the employee has access to them." },
      ],
      related: [
        { label: "Offer Letter Template", href: "/resources/hr-letter-templates/offer-letter", note: "The letter that comes before this one." },
        { label: "Probationary period policy", href: `${P}/probationary-period`, note: "The policy the probation clause should match." },
        { label: "Notice period policy", href: `${P}/notice-period`, note: "Notice rules referenced in clause 6." },
        { label: "What is probation", href: `${G}/probation`, note: "The term explained." },
      ],
    },
    // 3. Confirmation letter
    {
      slug: "confirmation-letter",
      name: "Confirmation letter template",
      title: "Probation confirmation letter format",
      standfirst: "A confirmation letter tells an employee they have completed probation and are now a confirmed member of staff. This confirmation letter format records the date and any change in terms.",
      seo: {
        title: "Confirmation Letter Format After Probation: Free Template",
        description: "Confirmation letter format to confirm an employee after probation: ready template, what it should state, and how it differs from a probation extension letter.",
        keywords: ["confirmation letter format", "probation confirmation letter", "employee confirmation letter", "confirmation of employment letter"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued when probation ends and the reporting manager's review recommends confirmation. HR checks the review against the probation policy and an authorised signatory signs. Issue it on or before the last day of probation so the employee is never left unsure of their status.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Effective date of confirmation.",
              "The notice period that now applies, if it changes on confirmation.",
              "Any change in pay, grade or benefits that starts on confirmation.",
              "A statement that all other terms of appointment remain unchanged.",
            ],
          },
        },
        {
          heading: "Confirmation, extension or neither",
          body: [
            "If the review is not satisfactory, issue a probation extension letter with the reasons and a review date instead. Do not stay silent. Many appointment letters state that an employee stays on probation until confirmed in writing, but some state that confirmation is automatic at the end of the period. Check which wording yours uses.",
          ],
          note: "A common slip is confirming from the letter date instead of the end of probation. Confirmation should run from the day after probation ended.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

Ref: [HR/CONF/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]

Subject: Confirmation of employment

Dear [Employee first name],

Further to the review of your performance during your probation period, which began on [Date of joining], we are pleased to confirm your employment with [Company name] as [Designation] with effect from [Confirmation date].

On confirmation:
1. Your notice period will be [N] days/months, as per the terms of your appointment and the company's notice period policy.
2. [Your revised compensation / grade / benefits will be as set out in the enclosed annexure.] [OR: Your compensation remains unchanged.]
3. All other terms and conditions of your appointment letter dated [DD Month YYYY] remain unchanged.

We appreciate your contribution during the probation period and look forward to your continued association with us.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Acknowledged:
Signature: ____________________
Name: [Employee full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "Is an employee confirmed automatically if no letter is issued?", a: "It depends on the appointment letter and the standing orders that apply. Some provide for deemed confirmation, others say probation continues until written confirmation. Issue a letter either way to avoid ambiguity." },
        { q: "Does confirmation have to come with a raise?", a: "No. Some organisations link a revision to confirmation, many do not. Say clearly in the letter whether pay changes." },
        { q: "Who should sign the confirmation letter?", a: "The authorised signatory who signs appointment letters, usually the HR head, after the reporting manager's recommendation is on file." },
      ],
      related: [
        { label: "Probation Extension Letter Template", href: "/resources/hr-letter-templates/probation-extension-letter", note: "When the review is not yet satisfactory." },
        { label: "How to Run the Review That Ends a Probation Period", href: "/resources/hr-guides/running-a-probation-review", note: "How to reach the decision this letter records." },
        { label: "Probationary period policy", href: `${P}/probationary-period`, note: "Sets the period and confirmation rules." },
      ],
    },
    // 4. Increment letter
    {
      slug: "increment-letter",
      name: "Increment letter template",
      title: "Salary increment letter format",
      standfirst: "An increment letter tells an employee their revised pay and the date it takes effect. This increment letter format records the old and new figures so payroll and the employee read the same numbers.",
      seo: {
        title: "Increment Letter Format: Salary Revision Letter Template",
        description: "Increment letter format for annual salary revisions: template with effective date and revised CTC, what to include, and how it differs from a promotion letter.",
        keywords: ["increment letter format", "salary increment letter", "salary revision letter", "appraisal letter format"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "Increment letters follow the annual or half-yearly salary revision, after budgets and individual revisions are approved. HR generates them in bulk and the HR head or another authorised signatory signs. If letters go out after the effective date, the difference is paid as arrears.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Effective date of the revision.",
              "Current and revised annual CTC, with a revised salary annexure.",
              "Whether arrears are due and in which month's payroll they will be paid.",
              "Any change to variable pay or benefits.",
              "A confidentiality line asking the employee not to share the figures, if that is your policy.",
            ],
          },
        },
        {
          heading: "Increment letter or promotion letter",
          body: [
            "An increment changes pay within the same role. A promotion changes the role, grade or responsibilities and usually pay too. If both happen together, issue one promotion letter that covers the revised pay rather than two letters with overlapping figures.",
          ],
          note: "Check that the revised basic pay is reflected in PF, gratuity and any allowance calculated as a percentage of basic. Revising CTC without recalculating the components is the usual source of payroll errors.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

PRIVATE AND CONFIDENTIAL

Ref: [HR/INC/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]

Subject: Revision of salary

Dear [Employee first name],

Following the [annual / half-yearly] performance and compensation review for [period], we are pleased to inform you that your salary has been revised with effect from [Effective date].

Current annual cost to company: Rs. [Amount]
Revised annual cost to company: Rs. [Amount]

The revised break-up of your compensation is set out in the enclosed annexure. [Arrears for the period from [Effective date] to [Date] will be paid with your salary for [Month YYYY].]

[Your variable pay target / eligibility is revised to [details].]

All other terms and conditions of your employment remain unchanged. Compensation details are personal and confidential, and we request you to treat them accordingly.

We thank you for your contribution and look forward to your continued performance.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Enclosure: Revised salary break-up`,
      faqs: [
        { q: "Is an increment letter required by law?", a: "There is no general central requirement, but a written record of revised pay protects both sides and is what payroll should work from." },
        { q: "What if the increment is backdated?", a: "State the effective date and the month in which arrears will be paid. Arrears are taxed in the year of receipt, and the employee may be able to claim relief under section 89 of the Income-tax Act." },
        { q: "Should I show the percentage increase?", a: "Optional. The old and new CTC are enough; some organisations add the percentage to avoid queries." },
      ],
      related: [
        { label: "Payment and increment policy", href: `${P}/payment-increment`, note: "The policy behind the letter." },
        { label: "Running an Annual Salary Revision, From Budget to Arrears", href: "/resources/hr-guides/salary-revision-cycle", note: "Budgets, letters and arrears in order." },
        { label: "Salary Hike Calculator", href: "/calculators/salary-hike", note: "Work out the revised figure." },
        { label: "Salary Arrears Calculator", href: "/calculators/arrears", note: "For backdated revisions." },
      ],
    },
    // 5. Promotion letter
    {
      slug: "promotion-letter",
      name: "Promotion letter template",
      title: "Promotion letter format for a new role and grade",
      standfirst: "A promotion letter records an employee's move to a higher role or grade. This promotion letter format covers the new designation, reporting line, pay and effective date.",
      seo: {
        title: "Promotion Letter Format: Template for Role and Grade Change",
        description: "Promotion letter format with a ready template: new designation, grade, reporting line and revised pay, plus how it differs from an increment letter.",
        keywords: ["promotion letter format", "promotion letter template", "employee promotion letter"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It follows approval of the promotion under your promotion policy, either in a promotion cycle or mid-year when a position opens. HR drafts it after the approving authority signs off, and an authorised signatory issues it. The reporting manager usually hands it over in person.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "New designation and grade, and the effective date.",
              "New reporting manager and team, if they change.",
              "Revised compensation, or a statement that pay will be revised separately.",
              "Any change in notice period, which often lengthens at senior grades.",
              "Any probation or review period attached to the new role, if your policy uses one.",
            ],
          },
        },
        {
          heading: "Promotion letter or increment letter",
          body: [
            "An increment only changes pay. A promotion changes the job: title, grade, scope and often the notice period and approval limits. If the promotion carries a raise, put the revised pay in this letter so there is one source of truth.",
          ],
          note: "If the notice period changes with the new grade, say so explicitly. Employees who resign later often dispute a longer notice period that was never written down.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

PRIVATE AND CONFIDENTIAL

Ref: [HR/PROM/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Current designation: [Designation]
Department: [Department]

Subject: Promotion to [New designation]

Dear [Employee first name],

We are pleased to inform you that, in recognition of your performance and contribution, you have been promoted to the position of [New designation] in [New grade/band] with effect from [Effective date].

1. Reporting: In your new role you will report to [Manager name, Designation] [and lead the [Team name] team].

2. Responsibilities: Your key responsibilities will be as set out in the enclosed role description.

3. Compensation: Your revised annual cost to company will be Rs. [Amount] with effect from [Effective date], as detailed in the enclosed annexure. [OR: Your compensation will be revised in the [Month YYYY] revision cycle.]

4. Notice period: With effect from [Effective date], your notice period will be [N] days/months, as per the company's notice period policy for your grade. [Delete if unchanged.]

5. [Review: Your performance in the new role will be reviewed after [N] months, as per the company's promotion policy.] [Delete if not applicable.]

All other terms and conditions of your employment remain unchanged.

Congratulations on your promotion. We look forward to your continued contribution in your new role.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Enclosures: Role description; Revised salary break-up

Acknowledged:
Signature: ____________________
Name: [Employee full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "Can a promotion be given without a pay rise?", a: "Yes, though it is uncommon and should be stated plainly in the letter, with the date pay will be reviewed if that is planned." },
        { q: "Does a promotion restart probation?", a: "Not normally. Some policies attach a review period to the new role; if yours does, say so and say what happens if the review is not satisfactory." },
        { q: "Should the employee sign the promotion letter?", a: "Yes, an acknowledged copy is useful, especially when the notice period or reporting line changes." },
      ],
      related: [
        { label: "Promotion policy", href: `${P}/promotion`, note: "Eligibility and approval rules." },
        { label: "Increment Letter Template", href: "/resources/hr-letter-templates/increment-letter", note: "For pay changes without a role change." },
        { label: "Notice period policy", href: `${P}/notice-period`, note: "Grade-wise notice periods." },
      ],
    },
    // 6. Relieving letter
    {
      slug: "relieving-letter",
      name: "Relieving letter template",
      title: "Relieving letter format for departing employees",
      standfirst: "A relieving letter confirms that an employee has been released from duty on a given date after their resignation was accepted. This relieving letter format is what the next employer will ask to see.",
      seo: {
        title: "Relieving Letter Format: Template for Employee Exit in India",
        description: "Relieving letter format for employees leaving your organisation: a ready template, what it should state, and how it differs from an experience letter.",
        keywords: ["relieving letter format", "relieving letter template", "relieving letter sample", "release letter from employer"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued on or shortly after the last working day, once the notice period has been served or settled and the clearance process is complete. HR issues it under an authorised signatory's signature.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Date of the resignation letter and date of acceptance.",
              "Last working day, which is the relieving date.",
              "A statement that the employee has been relieved from their duties.",
              "Confirmation that clearance is complete, or a reference to the settlement that follows.",
              "A reminder of continuing confidentiality obligations, if you include one.",
            ],
          },
        },
        {
          heading: "Relieving letter or experience letter",
          body: [
            "The relieving letter answers one question: has this person been formally released, so they are free to join elsewhere. The experience letter describes the tenure and role. Many organisations combine them into one letter, which is fine as long as both sets of facts are present.",
          ],
          note: "Withholding a relieving letter as leverage over a notice-period dispute invites complaints and can be difficult to defend. Settle the recovery through the full and final process and record it there.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

Ref: [HR/REL/YYYY/NNN]
Date: [DD Month YYYY]

TO WHOMSOEVER IT MAY CONCERN

[Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]

Subject: Relieving letter

Dear [Employee first name],

This is with reference to your resignation letter dated [DD Month YYYY]. Your resignation was accepted by the management on [DD Month YYYY], and you are relieved from the services of [Company name] with effect from the close of working hours on [Last working day].

We confirm that you have completed the exit clearance formalities. Your full and final settlement [has been processed / will be processed as per company policy and communicated to you separately].

We remind you of your continuing obligation to keep confidential all information about the company, its clients and employees that came to your knowledge during your employment, as per the terms of your appointment.

We thank you for your contribution and wish you success in your future endeavours.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]`,
      faqs: [
        { q: "Is an employer required to issue a relieving letter?", a: "There is no single central statute that mandates it, but it is standard practice and some state rules and standing orders require a service certificate on request. Refusing it without reason invites complaints." },
        { q: "Can the relieving letter be issued before the F&F is paid?", a: "Yes. Relieving and settlement are separate. Many organisations issue the relieving letter on the last day and pay the settlement in the following payroll cycle." },
        { q: "What if the employee did not serve full notice?", a: "Record the shortfall and any recovery in the full and final statement. The relieving letter can still state the actual last working day." },
      ],
      related: [
        { label: "Experience Letter Template", href: "/resources/hr-letter-templates/experience-letter", note: "The companion letter on tenure and role." },
        { label: "An Employee Exit Checklist, From Resignation to Full and Final", href: "/resources/hr-guides/employee-exit-checklist", note: "Every step before the letter goes out." },
        { label: "Employee resignation policy", href: `${P}/employee-resignation`, note: "Acceptance and notice rules." },
        { label: "No Dues Certificate Template", href: "/resources/hr-letter-templates/no-dues-certificate", note: "Clearance that precedes relieving." },
      ],
    },
    // 7. Experience letter
    {
      slug: "experience-letter",
      name: "Experience letter template",
      title: "Experience letter and certificate format",
      standfirst: "An experience letter certifies how long someone worked for you and in what role. This experience letter format sticks to verifiable facts that a future employer will check.",
      seo: {
        title: "Experience Letter Format: Experience Certificate Template",
        description: "Experience letter format for former employees: a factual certificate template with tenure and designation, and how it differs from a relieving letter.",
        keywords: ["experience letter format", "experience certificate format", "work experience letter", "service certificate"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued at exit, often with the relieving letter, or later on request from a former employee. HR checks dates and designations against the personnel record before an authorised signatory signs.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Full name and employee code.",
              "Date of joining and last working day.",
              "Designation at exit, and earlier designations if there were promotions.",
              "Department and a short, factual description of the role.",
              "Optionally, a neutral line on conduct, if your policy permits.",
            ],
          },
        },
        {
          heading: "Experience letter or relieving letter",
          body: [
            "The experience letter is about tenure and role and is addressed to whomever it may concern. The relieving letter is addressed to the employee and confirms release from duty. Background verification agencies usually check both against the same dates, so they must match.",
          ],
          note: "Do not write performance praise you would not stand behind, and do not include adverse remarks in a certificate. Keep opinions out; keep facts in.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

Ref: [HR/EXP/YYYY/NNN]
Date: [DD Month YYYY]

TO WHOMSOEVER IT MAY CONCERN

EXPERIENCE CERTIFICATE

This is to certify that [Mr./Ms./Mx.] [Employee full name] (Employee code: [Code]) was employed with [Company name] from [Date of joining] to [Last working day].

At the time of leaving, [he/she/they] held the position of [Designation] in the [Department] department. [Earlier designations held: [Designation] from [Date] to [Date].]

During this period, [his/her/their] responsibilities included [two or three factual lines describing the role, for example: managing vendor payments for the western region and preparing monthly reconciliation reports].

[His/her/their] conduct during the period of employment was [good / satisfactory]. [Optional; delete if your policy is to certify facts only.]

We wish [him/her/them] success in [his/her/their] future endeavours.

For [COMPANY NAME]

[Authorised Signatory]
[Designation]`,
      faqs: [
        { q: "Can an employer refuse an experience letter?", a: "Practice and some state rules expect a service certificate on request. Refusal without reason tends to lead to complaints; issue a factual certificate even when the exit was difficult." },
        { q: "What if the employee wants their salary mentioned?", a: "Use a salary certificate for that purpose. Experience letters usually leave pay out." },
        { q: "Can it be issued years after the person left?", a: "Yes, as long as your records support the dates. Use the date of issue as the letter date, not the exit date." },
      ],
      related: [
        { label: "Relieving Letter Template", href: "/resources/hr-letter-templates/relieving-letter", note: "Release from duty, issued at exit." },
        { label: "Salary Certificate Template", href: "/resources/hr-letter-templates/salary-certificate", note: "When pay details are needed." },
        { label: "An Employee Exit Checklist, From Resignation to Full and Final", href: "/resources/hr-guides/employee-exit-checklist", note: "Where the letter fits in the exit." },
      ],
    },
    // 8. Warning letter
    {
      slug: "warning-letter",
      name: "Warning letter template",
      title: "Warning letter format for misconduct or performance",
      standfirst: "A warning letter records a specific lapse, what is expected instead and what may follow if it recurs. This warning letter format keeps the record factual so it holds up if the matter escalates.",
      seo: {
        title: "Warning Letter Format: Disciplinary Warning Template",
        description: "Warning letter format for employee misconduct or attendance issues: a factual template, what to include, and how it differs from a show cause notice.",
        keywords: ["warning letter format", "warning letter to employee", "disciplinary warning letter", "written warning template"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "A warning is used for a lapse that is real but not serious enough for a formal inquiry: repeated late arrival, missed deadlines after counselling, a minor breach of the code of conduct. HR issues it after hearing the employee's side, usually with the reporting manager. It should be signed by someone with disciplinary authority under your policy or standing orders.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "The specific incident or pattern, with dates.",
              "The policy or rule it breaches.",
              "That the employee's explanation was heard, and a summary of it, if one was given.",
              "The expected standard and a review period.",
              "What may follow if the conduct recurs, stated without prejudging the outcome.",
              "A space for acknowledgement.",
            ],
          },
        },
        {
          heading: "Warning, show cause or termination",
          body: [
            "A show cause notice asks for an explanation before any decision. A warning is a decision: a recorded caution, usually after the explanation. A termination letter ends employment. Skipping straight from no record to termination is the pattern most likely to be challenged, so warnings are often the evidence that earlier steps were taken.",
          ],
          note: "Vague warnings (\"your attitude is unprofessional\") are of little value later. Name the dates, the conduct and the rule.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

STRICTLY CONFIDENTIAL

Ref: [HR/DISC/WRN/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]

Subject: Written warning regarding [brief description, for example: repeated unauthorised absence]

Dear [Employee first name],

This letter concerns [describe the conduct factually, for example: your absence from work without prior approval or intimation on [dates]].

This conduct is contrary to [name of policy / clause of the code of conduct / standing order], a copy of which is available to you [location, for example: on the HR portal].

[This matter was discussed with you on [DD Month YYYY] in the presence of [Name, Designation]. You explained that [summary of explanation]. Having considered your explanation, the management does not find it satisfactory for the following reasons: [reasons].]

You are hereby warned and advised to [state the expected standard, for example: seek prior approval for leave and inform your reporting manager before the start of the shift if you are unable to attend]. Your conduct will be reviewed over the next [N] weeks/months.

Please note that any recurrence may lead to further action as per the company's policies, the terms of your appointment [and the applicable standing orders]. Any such action will follow the company's disciplinary procedure, and you will be given an opportunity to explain before any decision is taken.

A copy of this letter will be placed on your personnel file. If you wish to respond to this letter in writing, you may do so within [N] days, and your response will be placed on file with it.

Please sign the duplicate copy as acknowledgement of receipt.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Acknowledgement of receipt (not of agreement):
Signature: ____________________
Name: [Employee full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "Does an employee have to sign a warning letter?", a: "Ask for acknowledgement of receipt, not agreement. If they refuse, note the refusal on the copy in front of a witness, or send it by email and registered post." },
        { q: "How long does a warning stay on file?", a: "That is for your policy to set. Many organisations treat warnings as live for a defined period for the purpose of escalation. Write the rule down and apply it consistently." },
        { q: "Can I issue a warning without hearing the employee?", a: "It is better practice to hear them first and record their explanation. A warning issued without any opportunity to explain is weaker evidence if the matter escalates." },
      ],
      related: [
        { label: "Show Cause Notice Template", href: "/resources/hr-letter-templates/show-cause-notice", note: "When an explanation is needed before a decision." },
        { label: "Code of conduct policy", href: `${P}/code-of-conduct`, note: "The rules most warnings cite." },
        { label: "Attendance policy", href: `${P}/attendance`, note: "For attendance-related warnings." },
      ],
      verify: "Check the disciplinary procedure in your certified or model standing orders (where they apply to the establishment), your appointment terms and code of conduct, and any state-specific rules before issuing. Who may sign, whether a hearing is required first and how long warnings stay live should match your own policy. Have serious or repeated cases reviewed by a legal adviser.",
    },
    // 9. Show cause notice
    {
      slug: "show-cause-notice",
      name: "Show cause notice template",
      title: "Show cause notice format for employees",
      standfirst: "A show cause notice sets out an allegation and asks the employee to explain in writing by a date before any decision is taken. This show cause notice format keeps the allegation specific and the tone neutral.",
      seo: {
        title: "Show Cause Notice Format: Template for Employee Misconduct",
        description: "Show cause notice format for alleged misconduct: neutral template with allegations and reply deadline, plus how it differs from a warning or termination letter.",
        keywords: ["show cause notice format", "show cause notice to employee", "show cause letter template", "explanation letter format"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued when there is a specific allegation of misconduct and the employer wants the employee's version before deciding what to do. It is often the first formal step of a disciplinary process. It should be signed by an officer with disciplinary authority under your policy or standing orders, and served in a way you can prove.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "ordered",
            items: [
              "Each allegation separately, with dates, place and the people involved.",
              "The rule, clause or policy each allegation relates to.",
              "Copies of, or access to, the documents relied on.",
              "A reasonable deadline for a written reply.",
              "A statement that no decision has been taken and that the reply will be considered.",
              "What happens if no reply is received, worded without prejudging the outcome.",
            ],
          },
        },
        {
          heading: "Show cause, warning or termination",
          body: [
            "The show cause notice asks; it does not decide. A warning letter records a decision to caution. A charge sheet and domestic inquiry may follow if the reply is unsatisfactory and the allegation is serious. A termination letter comes only at the end of that process. Wording a show cause notice as if guilt is settled undermines everything after it.",
          ],
          note: "Avoid words like \"you have committed\" or \"your proven misconduct\". Write \"it is alleged that\" and list the facts.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

STRICTLY CONFIDENTIAL

Ref: [HR/DISC/SCN/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]
[Address on record]

Subject: Show cause notice

Dear [Employee first name],

It has been reported to the management that:

1. On [DD Month YYYY], at about [time], at [place], you [describe the alleged act factually]. [Name the witness or source, if appropriate.]
2. [Second allegation, if any, set out the same way.]

If established, the above would amount to [misconduct under clause [N] of the standing orders / a breach of [policy name] / a breach of the terms of your appointment].

[Copies of the following documents relied upon are enclosed: [list].]

No decision has been taken in this matter. You are given an opportunity to explain your position. You are required to submit your written explanation to the undersigned by [DD Month YYYY] [time], stating why appropriate action should not be taken against you. You may include any facts, documents or names of witnesses you wish the management to consider.

If you need any document to prepare your reply, please write to the undersigned before the above date.

If no reply is received by the above date, the management may proceed on the basis of the information available to it, as per the company's disciplinary procedure.

[Pending this matter, you are [to continue your normal duties / placed under suspension as per the separate order dated [DD Month YYYY]].]

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Enclosures: [List]

Received by:
Signature: ____________________
Name: [Employee full name]
Date and time: [DD Month YYYY, time]`,
      faqs: [
        { q: "How much time should an employee get to reply?", a: "Enough to respond properly to the allegations, which depends on their complexity. Standing orders or your policy may set a period; check it. Grant reasonable extension requests in writing." },
        { q: "What happens after the reply?", a: "Management considers it. Outcomes range from closing the matter, to a warning, to a charge sheet and inquiry for serious allegations. Record the reasons for whichever route you take." },
        { q: "Can a show cause notice be sent by email?", a: "Email is common, but also serve it by hand against acknowledgement or by registered post to the address on record, so service can be proved." },
      ],
      related: [
        { label: "Warning Letter Template", href: "/resources/hr-letter-templates/warning-letter", note: "A possible outcome after the reply." },
        { label: "Termination Letter Template", href: "/resources/hr-letter-templates/termination-letter", note: "Only at the end of due process." },
        { label: "Code of conduct policy", href: `${P}/code-of-conduct`, note: "The rules allegations usually cite." },
        { label: "Employee termination policy", href: `${P}/employee-termination`, note: "How the process continues." },
      ],
      verify: "Check the misconduct list and disciplinary procedure in your certified or model standing orders (where applicable to the establishment), your appointment terms and any state law before issuing. Reply periods, suspension and subsistence allowance rules, and the requirement for a domestic inquiry depend on these. Have the notice reviewed by a legal adviser where the allegation is serious.",
    },
    // 10. Termination letter
    {
      slug: "termination-letter",
      name: "Termination letter template",
      title: "Termination letter format for ending employment",
      standfirst: "A termination letter communicates the employer's decision to end employment, the effective date and how dues will be settled. This termination letter format is a neutral, factual record of a decision reached through due process.",
      seo: {
        title: "Termination Letter Format: Employee Termination Template",
        description: "Termination letter format for India: neutral template covering effective date, notice and dues, and how it differs from warning and show cause letters.",
        keywords: ["termination letter format", "termination letter template", "employee termination letter", "letter of termination of employment"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued after the decision to end employment is final: at the end of a disciplinary process, when probation is not confirmed, or for other reasons permitted by the appointment terms and applicable law. It must be signed by the authority empowered to terminate under your policy or standing orders.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Reference to the earlier steps: notices, the employee's replies, any inquiry and its findings.",
              "The decision and the effective date.",
              "Notice given, or pay in lieu of notice, as per the appointment terms.",
              "How and when the full and final settlement will be paid.",
              "Return of company property and continuing confidentiality.",
              "Any internal appeal route your policy provides.",
            ],
          },
        },
        {
          heading: "Termination, warning or show cause",
          body: [
            "The show cause notice asks for an explanation. The warning letter records a caution. The termination letter records the end of employment and should only follow a fair process. Termination without stated cause, retrenchment and dismissal for misconduct are different situations with different legal requirements, so do not use one letter for all of them.",
          ],
          note: "Do not put allegations in a termination letter that were never put to the employee. The letter should only rely on what was raised and considered.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

STRICTLY CONFIDENTIAL

Ref: [HR/TERM/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]
[Address on record]

Subject: Termination of employment

Dear [Employee first name],

This letter refers to [the show cause notice dated [DD Month YYYY] / the charge sheet dated [DD Month YYYY]], your reply dated [DD Month YYYY], [and the inquiry held on [dates], the findings of which were shared with you on [DD Month YYYY]].

[Summarise factually: the matters put to you, the opportunity given to explain, and the conclusion reached, for example: Having considered your reply and the inquiry findings, the management has concluded that the allegations at points [N] and [N] are established.]

Accordingly, the management has decided to terminate your employment with [Company name] with effect from [Effective date], [as per the terms of your appointment / the applicable standing orders / company policy].

1. Notice: [You are given [N] days' notice, ending on [DD Month YYYY]. / You will be paid [N] days' salary in lieu of notice, as per the terms of your appointment.] [Delete if not applicable to the ground of termination.]

2. Settlement: Your full and final settlement, including salary up to [Effective date], [leave encashment, gratuity if eligible] and other dues, less any recoveries, will be processed as per company policy and applicable law. A statement will be shared with you.

3. Company property: Please return all company property, including [ID card, laptop, access cards, documents], to [Name, Designation] by [DD Month YYYY].

4. Confidentiality: Your obligation to keep company information confidential continues after your employment ends, as per the terms of your appointment.

[5. Appeal: If you wish to appeal against this decision, you may write to [Designation] within [N] days of receipt of this letter, as per the company's policy.]

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Received by:
Signature: ____________________
Name: [Employee full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "Can an employer terminate without giving reasons?", a: "Appointment letters often allow termination with notice. Whether that is enough depends on whether the person is a workman under industrial law, the standing orders that apply and the circumstances. Take legal advice before relying on it." },
        { q: "Is pay in lieu of notice always allowed?", a: "Only if the appointment terms or applicable rules permit it. Check both." },
        { q: "When must final dues be paid after termination?", a: "The Code on Wages, in force since 21 November 2025, requires wages due on separation to be paid within two working days (s.17(2)). Check any state rule for your location as well." },
      ],
      related: [
        { label: "Employee termination policy", href: `${P}/employee-termination`, note: "The process this letter concludes." },
        { label: "Show Cause Notice Template", href: "/resources/hr-letter-templates/show-cause-notice", note: "The first formal step." },
        { label: "Full and Final Settlement Statement Template", href: "/resources/hr-letter-templates/full-and-final-statement", note: "Dues and recoveries after exit." },
        { label: "Notice Pay Calculator", href: "/calculators/notice-pay", note: "Work out pay in lieu of notice." },
      ],
      verify: "Before issuing, check: whether the employee is a workman and the establishment size, which decide whether retrenchment conditions (notice, compensation, government permission) apply under the Industrial Relations Code 2020, in force from 21 November 2025 (formerly the Industrial Disputes Act 1947); the certified or model standing orders; the appointment terms on notice and pay in lieu; state Shops and Establishments rules; and the time limit for paying final dues. Have every termination letter reviewed by a legal adviser.",
    },
    // 11. Salary certificate
    {
      slug: "salary-certificate",
      name: "Salary certificate template",
      title: "Salary certificate format for banks and visas",
      standfirst: "A salary certificate confirms an employee's current pay for a bank, landlord, embassy or other third party. This salary certificate format states gross pay, deductions and net pay as on a date.",
      seo: {
        title: "Salary Certificate Format: Template for Loans and Visas",
        description: "Salary certificate format for employees applying for loans, rentals or visas: template with gross, deductions and net pay, and what banks usually check.",
        keywords: ["salary certificate format", "salary certificate template", "salary certificate for bank loan", "income certificate from employer"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued on the employee's request, usually for a loan, credit card, rental agreement or visa application. HR or payroll prepares it from the current salary record and the finance or HR head signs it, often with the company seal.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Employee name, code, designation and date of joining.",
              "Employment status: confirmed or on probation, permanent or fixed-term.",
              "Monthly gross pay with components, deductions and net pay.",
              "The month or date the figures relate to.",
              "Purpose and addressee, if the requester asked for them.",
            ],
          },
        },
        {
          heading: "Salary certificate, salary slip or Form 16",
          body: [
            "A salary slip shows one month's pay. Form 16 is the annual TDS certificate. A salary certificate is a signed statement of current pay for a third party, and banks often ask for it alongside the other two.",
          ],
          note: "Do not include variable pay that has not been paid as if it were guaranteed income. Show it separately or leave it out.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

Ref: [HR/SAL/YYYY/NNN]
Date: [DD Month YYYY]

[TO WHOMSOEVER IT MAY CONCERN / The Manager, [Bank name], [Branch]]

SALARY CERTIFICATE

This is to certify that [Mr./Ms./Mx.] [Employee full name] (Employee code: [Code]) is employed with [Company name] as [Designation] in the [Department] department since [Date of joining]. [He/She/They] [is a confirmed employee / is on probation] on [permanent / fixed-term] employment.

[His/her/their] salary for the month of [Month YYYY] is as follows:

Earnings
Basic pay: Rs. [Amount]
House rent allowance: Rs. [Amount]
[Other allowance]: Rs. [Amount]
Gross monthly salary: Rs. [Amount]

Deductions
Provident fund (employee share): Rs. [Amount]
Professional tax: Rs. [Amount]
Income tax (TDS): Rs. [Amount]
[Other deduction]: Rs. [Amount]
Total deductions: Rs. [Amount]

Net monthly salary: Rs. [Amount]

[Annual cost to company: Rs. [Amount].]

This certificate is issued at the request of the employee for the purpose of [purpose, for example: applying for a home loan] and does not constitute a guarantee by the company.

For [COMPANY NAME]

[Authorised Signatory]
[Designation]
[Company seal]`,
      faqs: [
        { q: "Can a salary certificate be issued to someone on probation?", a: "Yes. State the employment status accurately; the bank decides what it accepts." },
        { q: "Should the company take responsibility for the loan?", a: "No. Include a line that the certificate is issued at the employee's request and is not a guarantee." },
        { q: "Can it be issued in a bank's own format?", a: "Yes, if the figures are accurate and the wording does not commit the company to anything beyond confirming facts, such as remitting salary to a particular account without the employee's instruction." },
      ],
      related: [
        { label: "What is gross salary", href: `${G}/gross-salary`, note: "The figure the certificate leads with." },
        { label: "What is Form 16", href: `${G}/form-16`, note: "The annual TDS certificate banks also ask for." },
        { label: "Experience Letter Template", href: "/resources/hr-letter-templates/experience-letter", note: "For former employees, without pay." },
      ],
    },
    // 12. Internship certificate
    {
      slug: "internship-certificate",
      name: "Internship certificate template",
      title: "Internship completion certificate format",
      standfirst: "An internship certificate confirms that a student or trainee completed an internship with you, for how long and on what work. This internship certificate format is what colleges and future employers ask for.",
      seo: {
        title: "Internship Certificate Format: Completion Letter Template",
        description: "Internship certificate format for interns who complete a placement: template with dates, project and supervisor, plus what colleges usually want to see on it.",
        keywords: ["internship certificate format", "internship completion certificate", "internship letter template"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued on the last day of the internship or soon after, once the supervisor confirms completion. HR or the department head signs it. Colleges often need it to award credits, so it should be ready before the intern leaves.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Intern's name and, if relevant, college and course.",
              "Start and end dates of the internship.",
              "Department and supervisor.",
              "Project or work undertaken, in two or three factual lines.",
              "Whether a stipend was paid is optional and usually left out.",
            ],
          },
        },
        {
          heading: "Internship certificate or experience letter",
          body: [
            "An experience letter certifies employment. An internship certificate certifies a training placement, which may or may not have been employment. Use the right one so the intern's status is not misdescribed when it is later verified.",
          ],
          note: "Name the actual project. A certificate that only says \"completed an internship\" is less useful to the intern and to anyone verifying it.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

Ref: [HR/INT/YYYY/NNN]
Date: [DD Month YYYY]

TO WHOMSOEVER IT MAY CONCERN

INTERNSHIP CERTIFICATE

This is to certify that [Mr./Ms./Mx.] [Intern full name], a student of [Course, Year] at [College / University name], has completed an internship with [Company name] from [Start date] to [End date].

During the internship, [he/she/they] worked in the [Department] department under the supervision of [Supervisor name, Designation] on [project or area of work, for example: building a dashboard to track vendor invoice ageing].

[His/her/their] work included [two or three factual lines on tasks undertaken].

[During the internship, [his/her/their] conduct was [good / satisfactory].] [Optional.]

We wish [him/her/them] success in [his/her/their] studies and career.

For [COMPANY NAME]

[Authorised Signatory]
[Designation]`,
      faqs: [
        { q: "Do interns have to be paid a stipend?", a: "Whether an internship is treated as employment, and what rules then apply, depends on the arrangement and applicable law. Set the terms in an internship letter at the start." },
        { q: "Can the certificate include a performance rating?", a: "Some organisations add a short assessment at the college's request. Keep it factual and consistent with the supervisor's review." },
        { q: "What if the intern left early?", a: "Certify the actual dates. Do not state the planned end date." },
      ],
      related: [
        { label: "Experience Letter Template", href: "/resources/hr-letter-templates/experience-letter", note: "For employees rather than interns." },
        { label: "Offer Letter Template", href: "/resources/hr-letter-templates/offer-letter", note: "Adapt it if you convert the intern to a hire." },
      ],
    },
    // 13. No dues certificate
    {
      slug: "no-dues-certificate",
      name: "No dues certificate template",
      title: "No dues certificate format for exit clearance",
      standfirst: "A no dues certificate records that a departing employee has returned company property and settled any amounts owed, department by department. This no dues certificate format doubles as the clearance form.",
      seo: {
        title: "No Dues Certificate Format: Exit Clearance Form Template",
        description: "No dues certificate format for exiting employees: department-wise clearance template covering assets, advances and access, and where it fits in the exit.",
        keywords: ["no dues certificate format", "no dues certificate for employee", "clearance certificate format", "exit clearance form"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "The form is opened when the resignation is accepted and closed in the last days of notice. Each department head signs off their section. HR then issues the certificate, which feeds the full and final settlement and the relieving letter.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "A section for each function: reporting manager, IT, admin, finance, HR and any others.",
              "Specific items to clear: laptop, ID card, access cards, documents, advances, loans, expense claims.",
              "Amount outstanding, if any, against each section.",
              "Sign-off name and date for each section.",
              "HR's final certification.",
            ],
          },
        },
        {
          heading: "No dues certificate or relieving letter",
          body: [
            "The no dues certificate is an internal clearance record. The relieving letter is the external confirmation of release. Clearance usually comes first, and any amount recorded as due here appears as a recovery in the full and final statement.",
          ],
          note: "Do not leave the amount fields blank. A signature without a figure is the usual reason recoveries are disputed later.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

Ref: [HR/NOC/YYYY/NNN]
Date: [DD Month YYYY]

NO DUES CERTIFICATE

Employee name: [Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]
Date of resignation: [DD Month YYYY]
Last working day: [DD Month YYYY]

Department-wise clearance

1. Reporting manager
   Handover of work and documents completed: [Yes / No]
   Amount due, if any: Rs. [Amount]
   Name: [Name]  Signature: ________  Date: [DD Month YYYY]

2. IT
   Laptop / desktop, accessories, data cards returned: [Yes / No]
   Email and system access revoked on: [DD Month YYYY]
   Amount due, if any: Rs. [Amount]
   Name: [Name]  Signature: ________  Date: [DD Month YYYY]

3. Administration
   ID card, access card, keys, [other items] returned: [Yes / No]
   Amount due, if any: Rs. [Amount]
   Name: [Name]  Signature: ________  Date: [DD Month YYYY]

4. Finance
   Salary advance / loan outstanding: Rs. [Amount]
   Travel or imprest advance outstanding: Rs. [Amount]
   Pending expense claims payable to employee: Rs. [Amount]
   Name: [Name]  Signature: ________  Date: [DD Month YYYY]

5. Human resources
   Exit interview completed: [Yes / No]
   Notice period served: [Full / [N] days short]
   Name: [Name]  Signature: ________  Date: [DD Month YYYY]

Certification

This is to certify that [Mr./Ms./Mx.] [Employee full name] has completed the exit clearance formalities and that, except as recorded above, there are no dues outstanding from [him/her/them] to the company as on [DD Month YYYY]. Amounts recorded above will be adjusted in the full and final settlement.

For [COMPANY NAME]

[Authorised Signatory]
[Designation]`,
      faqs: [
        { q: "Is a no dues certificate the same as an NOC?", a: "In exit contexts the terms are often used interchangeably. Both record that nothing is outstanding. An NOC can also mean permission for something else, such as taking up outside work." },
        { q: "Can a company recover dues from final pay?", a: "Recoveries for amounts the employee owes, such as advances, are commonly adjusted in the settlement. Deductions from wages are regulated, so make sure each recovery is permitted and documented." },
        { q: "Who keeps the signed form?", a: "HR, in the personnel file, with a copy to payroll for the settlement." },
      ],
      related: [
        { label: "An Employee Exit Checklist, From Resignation to Full and Final", href: "/resources/hr-guides/employee-exit-checklist", note: "The full exit sequence." },
        { label: "Full and Final Settlement Statement Template", href: "/resources/hr-letter-templates/full-and-final-statement", note: "Where recoveries are settled." },
        { label: "Relieving Letter Template", href: "/resources/hr-letter-templates/relieving-letter", note: "Issued after clearance." },
      ],
    },
    // 14. Transfer letter
    {
      slug: "transfer-letter",
      name: "Transfer letter template",
      title: "Transfer letter format for location or department moves",
      standfirst: "A transfer letter moves an employee to another location, department or entity. This transfer letter format records the new posting, the reporting date and any relocation support.",
      seo: {
        title: "Transfer Letter Format: Location and Department Move Template",
        description: "Transfer letter format for moving staff across locations or departments: template with reporting date, relocation support and appointment terms to check.",
        keywords: ["transfer letter format", "employee transfer letter", "transfer order format", "relocation letter to employee"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued when business needs or the employee's own request lead to a change of location, department or group company. HR drafts it after both the releasing and receiving managers agree, and an authorised signatory signs. Give enough lead time for a location move, particularly if the family is relocating.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Current and new location or department, and the new reporting manager.",
              "Date of relieving from the current posting and date of reporting at the new one.",
              "Relocation support: travel, shifting, temporary accommodation, as per policy.",
              "Any change in pay, such as location-based allowances.",
              "A statement that other terms are unchanged.",
            ],
          },
        },
        {
          heading: "Transfer letter or new appointment",
          body: [
            "A transfer within the same legal entity continues the existing employment. A move to a different group company is usually a new employment, which needs consent, a new appointment letter and decisions on PF transfer and continuity of service for gratuity. Do not use a transfer letter for that without advice.",
          ],
          note: "Check the appointment letter's transfer clause. Without one, a location transfer generally needs the employee's agreement. Statutory deductions such as professional tax may change with the state.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

Ref: [HR/TRF/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Designation: [Designation]
Current location / department: [Location / Department]

Subject: Transfer to [New location / department]

Dear [Employee first name],

[In view of business requirements / Further to your request dated [DD Month YYYY]], you are transferred from [Current location / department] to [New location / department] [as per the transfer clause in your appointment letter dated [DD Month YYYY]].

1. Relieving and reporting: You will be relieved from your current posting on [DD Month YYYY] and will report to [Manager name, Designation] at [New office address] on [DD Month YYYY].

2. Designation and grade: Your designation and grade remain [unchanged / revised to [details]].

3. Compensation: [Your compensation remains unchanged.] [OR: With effect from [DD Month YYYY], your [location allowance / other component] will be revised as set out in the enclosed annexure.]

4. Relocation support: You will be eligible for [travel for self and family, transport of household goods, temporary accommodation for [N] days] as per the company's relocation policy. Please submit claims with supporting bills to [Department].

5. Handover: Please complete the handover of your current responsibilities to [Name] before your relieving date.

All other terms and conditions of your employment remain unchanged.

We wish you success in your new assignment.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Acknowledged:
Signature: ____________________
Name: [Employee full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "Can an employee refuse a transfer?", a: "If the appointment terms include a transfer clause, refusal may be treated as a conduct issue under your policy. Without one, a location transfer generally needs consent. Handle refusals through a documented conversation first." },
        { q: "Does a transfer reset the notice period or service?", a: "Not within the same entity. Service continues and the existing terms apply." },
        { q: "Do statutory registrations change on transfer?", a: "They can. Professional tax and labour welfare fund vary by state, and ESI coverage depends on the new location. Update payroll from the transfer date." },
      ],
      related: [
        { label: "Appointment Letter Template", href: "/resources/hr-letter-templates/appointment-letter", note: "Where the transfer clause lives." },
        { label: "What is CTC", href: `${G}/ctc`, note: "If location allowances change the package." },
        { label: "Code of conduct policy", href: `${P}/code-of-conduct`, note: "Expectations that travel with the employee." },
      ],
    },
    // 15. Probation extension letter
    {
      slug: "probation-extension-letter",
      name: "Probation extension letter template",
      title: "Letter format for extending probation",
      standfirst: "A probation extension letter tells an employee their probation has been extended, why and until when. This probation extension letter sets specific goals so the next review has something to measure.",
      seo: {
        title: "Probation Extension Letter: Format and Template for HR",
        description: "Probation extension letter template with reasons, new review date and goals, how it differs from a confirmation letter, and when not to extend.",
        keywords: ["probation extension letter", "extension of probation letter", "probation extension letter format"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is issued before the original probation period ends, when the manager's review finds specific gaps that could be closed with more time. HR checks that the probation policy and appointment letter allow an extension and how long, then an authorised signatory signs.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Original probation end date and the new end date.",
              "Specific areas where the standard was not met, with examples.",
              "Measurable goals for the extension period.",
              "Support offered: training, check-ins, a mentor.",
              "What happens at the end of the extension.",
            ],
          },
        },
        {
          heading: "Extension, confirmation or separation",
          body: [
            "A confirmation letter records that the standard was met. An extension says it has not yet been met but could be. If the gaps are serious and unlikely to close, an extension only delays a decision; consider whether separation during probation, as per the appointment terms, is the honest course.",
          ],
          note: "Issuing the extension after the original end date is a common mistake. Depending on the appointment wording, the employee may already be treated as confirmed.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

CONFIDENTIAL

Ref: [HR/PROB-EXT/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]

Subject: Extension of probation period

Dear [Employee first name],

Your probation period, which began on [Date of joining], is due to end on [Original end date]. Your performance during this period was reviewed by [Manager name, Designation] on [DD Month YYYY], and the review was discussed with you on [DD Month YYYY].

The review found that you have met expectations in [areas]. However, the expected standard has not yet been met in the following areas:
1. [Area, with a specific example]
2. [Area, with a specific example]

To give you a fair opportunity to meet the required standard, your probation period is extended by [N] months, up to [New end date], [as permitted by the terms of your appointment and the company's probation policy].

During this period, you are expected to achieve the following:
1. [Measurable goal]
2. [Measurable goal]

[The company will support you through [training / fortnightly check-ins with your manager / mentoring by [Name]].]

Your performance will be reviewed on or before [New end date]. Based on that review, your employment will either be confirmed or [action as per the terms of your appointment]. Your notice period during the extended probation will remain [N] days.

All other terms and conditions of your appointment remain unchanged.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Acknowledged:
Signature: ____________________
Name: [Employee full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "How many times can probation be extended?", a: "As many times as your appointment terms, policy and applicable standing orders allow, which is often once. Repeated extensions are hard to justify." },
        { q: "Does the employee have to agree to an extension?", a: "If the appointment letter permits extension, consent is not usually required, but discussing it with the employee before issuing the letter is good practice." },
        { q: "What if the employee improves before the new date?", a: "You can confirm early. Issue a confirmation letter with the actual confirmation date." },
      ],
      related: [
        { label: "Confirmation Letter Template", href: "/resources/hr-letter-templates/confirmation-letter", note: "When the standard is met." },
        { label: "How to Run the Review That Ends a Probation Period", href: "/resources/hr-guides/running-a-probation-review", note: "How to run the review behind this letter." },
        { label: "Probationary period policy", href: `${P}/probationary-period`, note: "Extension limits and process." },
      ],
    },
    // 16. Absconding notice
    {
      slug: "absconding-notice",
      name: "Absconding notice template",
      title: "Absconding letter format for an absent employee",
      standfirst: "An absconding notice is sent to an employee who has stopped coming to work without leave or contact. This absconding letter format records the absence and asks them to report or explain by a date.",
      seo: {
        title: "Absconding Letter Format: Notice to Absent Employee Template",
        description: "Absconding letter format for employees absent without intimation: neutral template asking them to report or explain, with follow-up steps before a decision.",
        keywords: ["absconding letter format", "absconding notice to employee", "letter for unauthorised absence", "return to work letter"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "It is sent when an employee has been absent without approved leave or any contact for the number of days your policy or standing orders treat as unauthorised absence, and attempts to reach them by phone and email have failed. HR sends it to the last known address and personal email, under an authorised signatory's signature.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "The date from which the employee has been absent.",
              "The attempts made to contact them.",
              "A clear instruction to report to work or explain the absence by a date.",
              "That the company will consider any explanation, including illness or emergency.",
              "What may follow if there is no response, stated without prejudging it.",
            ],
          },
        },
        {
          heading: "First notice, second notice, then a decision",
          body: [
            "Most policies send at least two notices with a gap before any decision. The first asks the employee to report. The second records that there was no response and gives a final date. Only after that does the company decide, often through a show cause or inquiry process. Treating absence alone as automatic resignation is a position that has frequently been challenged.",
          ],
          note: "Use the address on record and keep proof of dispatch. A notice sent to an old address or only by WhatsApp is weak evidence later.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

BY REGISTERED POST / SPEED POST WITH ACKNOWLEDGEMENT DUE AND BY EMAIL

Ref: [HR/ABS/YYYY/NNN]
Date: [DD Month YYYY]

[Employee full name]
Employee code: [Code]
Designation: [Designation]
[Last known address]
[Personal email]

Subject: Unauthorised absence from work since [DD Month YYYY]

Dear [Employee first name],

Our records show that you have not reported for work since [DD Month YYYY] and have not applied for leave or informed your reporting manager of the reason for your absence.

We tried to contact you on [dates] by [phone at [number] / email / message], but have not received a response.

Your absence without approval is contrary to [the company's attendance and leave policy / the terms of your appointment / the applicable standing orders].

You are directed to report for duty to [Name, Designation] at [Office address] on or before [DD Month YYYY], or to send a written explanation of your absence, with any supporting documents, to the undersigned by that date. If your absence is due to illness, an emergency or any other circumstance beyond your control, please let us know so that the company can consider it.

If we do not hear from you by the above date, the company may proceed further in this matter as per its policies [and the applicable standing orders]. You will be given an opportunity to explain before any decision is taken.

We hope you are safe and look forward to hearing from you.

Yours sincerely,
For [COMPANY NAME]

[Authorised Signatory]
[Designation]

Copy to: [Reporting manager]`,
      faqs: [
        { q: "After how many days is an employee treated as absconding?", a: "There is no single central number. Your standing orders, appointment terms or policy may define a period of unauthorised absence. Apply that definition consistently." },
        { q: "Can the company stop salary for the absence?", a: "Days not worked and not covered by approved leave are normally unpaid. Salary already earned before the absence still has to be settled." },
        { q: "What if the employee returns after the notice?", a: "Hear their explanation and decide under your policy. A genuine emergency is treated very differently from an unexplained absence." },
      ],
      related: [
        { label: "Employee absconding policy", href: `${P}/employee-absconding`, note: "The full process this notice starts." },
        { label: "Show Cause Notice Template", href: "/resources/hr-letter-templates/show-cause-notice", note: "A common next step if there is no return." },
        { label: "Attendance policy", href: `${P}/attendance`, note: "Defines unauthorised absence." },
      ],
      verify: "Check the definition of unauthorised absence and any deemed-abandonment clause in your certified or model standing orders and appointment terms, the number of notices and gaps your policy requires, and any state-specific rules. Courts have often required an opportunity to be heard before treating absence as abandonment, so have the decision step reviewed by a legal adviser.",
    },
    // 17. Full and final statement
    {
      slug: "full-and-final-statement",
      name: "Full and final settlement statement template",
      title: "Full and final settlement statement format",
      standfirst: "The full and final statement lists everything payable to and recoverable from an employee who is leaving, and the net amount. This full and final settlement format shows each line so the employee can check it.",
      seo: {
        title: "Full and Final Settlement Format: F&F Statement Template",
        description: "Full and final settlement format for exiting employees: statement template listing salary, leave encashment, gratuity, recoveries and net pay.",
        keywords: ["full and final settlement format", "f&f statement format", "full and final settlement letter", "fnf settlement template"],
      },
      sections: [
        {
          heading: "When it is issued and by whom",
          body: [
            "Payroll prepares it after the last working day, once the no dues clearance is complete and attendance and leave are frozen. HR reviews it and finance approves payment. It is shared with the employee along with, or before, the payment.",
          ],
        },
        {
          heading: "What it must contain",
          list: {
            style: "bullet",
            items: [
              "Salary for days worked in the final month.",
              "Leave encashment as per policy.",
              "Gratuity, if the employee is eligible under the Payment of Gratuity Act 1972, or a note that it is paid separately.",
              "Statutory bonus, pending reimbursements and any variable pay due.",
              "Recoveries: notice shortfall, advances, loans, unreturned assets.",
              "TDS on the settlement and the net amount payable or recoverable.",
            ],
          },
        },
        {
          heading: "How it relates to the relieving letter",
          body: [
            "The relieving letter confirms release from duty. The F&F statement is the money side of the same exit. They are often issued days apart. Keep the last working day identical in both, since every pro-rata calculation in the statement depends on it.",
          ],
          note: "Recovering notice pay on gross rather than basic, or the reverse, is a frequent dispute. Use whatever the appointment terms and notice policy specify, and show the calculation.",
        },
      ],
      template: `[COMPANY NAME]
[Office address] | [Phone] | [Email]

Ref: [HR/FNF/YYYY/NNN]
Date: [DD Month YYYY]

FULL AND FINAL SETTLEMENT STATEMENT

Employee name: [Employee full name]
Employee code: [Code]
Designation: [Designation]
Department: [Department]
Date of joining: [DD Month YYYY]
Last working day: [DD Month YYYY]
Reason for separation: [Resignation / Termination / Retirement / Other]
Notice period required / served: [N] days / [N] days
PAN: [PAN]
Bank account: [Bank, account number ending XXXX]

A. EARNINGS
1. Salary for [N] days of [Month YYYY]: Rs. [Amount]
2. Leave encashment for [N] days, as per leave policy: Rs. [Amount]
3. Gratuity [if eligible; else write "Not applicable" or "Paid separately"]: Rs. [Amount]
4. Statutory bonus for [period], if applicable: Rs. [Amount]
5. Pending reimbursements: Rs. [Amount]
6. [Variable pay / incentive due, as per policy]: Rs. [Amount]
7. [Notice pay payable by company, if applicable]: Rs. [Amount]
Total earnings (A): Rs. [Amount]

B. DEDUCTIONS AND RECOVERIES
1. Provident fund (employee share) on final salary: Rs. [Amount]
2. Professional tax: Rs. [Amount]
3. Notice period shortfall of [N] days, as per the terms of your appointment: Rs. [Amount]
4. Outstanding salary advance / loan: Rs. [Amount]
5. Unreturned company property [item]: Rs. [Amount]
6. Income tax (TDS): Rs. [Amount]
7. [Other, with description]: Rs. [Amount]
Total deductions (B): Rs. [Amount]

NET AMOUNT [PAYABLE TO EMPLOYEE / RECOVERABLE FROM EMPLOYEE] (A - B): Rs. [Amount]
In words: [Amount in words]

Mode and date of payment: [Bank transfer on DD Month YYYY]

Notes
1. Provident fund withdrawal or transfer is to be initiated by the employee through the EPFO member portal.
2. Form 16 for the financial year [YYYY-YY] will be issued [by DD Month YYYY / as per the statutory timeline].
3. Workings for leave encashment, gratuity and notice recovery are attached.

Prepared by: [Name, Payroll]          Checked by: [Name, HR]
Approved by: [Authorised Signatory], [Designation]

EMPLOYEE ACKNOWLEDGEMENT
I have received this statement [and the amount of Rs. [Amount]]. [Any queries are noted below.]

Signature: ____________________
Name: [Employee full name]
Date: [DD Month YYYY]`,
      faqs: [
        { q: "How soon must the full and final settlement be paid?", a: "It depends on the applicable law and state. The Code on Wages, in force since 21 November 2025, requires wages due on separation to be paid within two working days (s.17(2)), and gratuity has its own payment timeline. Check the current rules for your location." },
        { q: "Is leave encashment taxable at exit?", a: "Leave encashment at retirement or resignation has a capped exemption for non-government employees under section 10(10AA) of the Income-tax Act. Check the current limit." },
        { q: "Should the employee sign a release with the settlement?", a: "Many employers take an acknowledgement of receipt. Wording that waives future claims should be reviewed by a legal adviser before use." },
      ],
      related: [
        { label: "Full and Final Settlement Calculator", href: "/calculators/full-and-final", note: "Work out each line of the statement." },
        { label: "What is full and final settlement", href: `${G}/full-and-final-settlement`, note: "The term explained." },
        { label: "Gratuity Calculator", href: "/calculators/gratuity", note: "For eligible employees." },
        { label: "An Employee Exit Checklist, From Resignation to Full and Final", href: "/resources/hr-guides/employee-exit-checklist", note: "Steps before the statement." },
      ],
      verify: "Check the two-working-day limit for paying final dues under the Code on Wages 2019, s.17(2), and any state rule; gratuity eligibility and the payment timeline under the Payment of Gratuity Act 1972; the current tax exemption limits for leave encashment and gratuity; whether notice recovery uses basic or gross under the appointment terms; and that each recovery is a permitted deduction. Have any waiver or release wording reviewed by a legal adviser.",
    },
  ],
};
