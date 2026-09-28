import type { PageFaq } from "./types";

/**
 * Page-level FAQs for /resources/guides/[slug], keyed by guide slug.
 * Every answer restates what the guide itself says in lib/guides.ts.
 */
export const guideFaqs: Record<string, PageFaq[]> = {
  "first-payroll-run": [
    {
      q: "When is the best time to switch to a new payroll system?",
      a: "The start of a financial year is the cleaner moment, because no year-to-date figures have to travel and the annual certificate is produced entirely by one system. Mid-year is workable, but every rupee paid and every rupee of tax deducted so far that year has to come across.",
    },
    {
      q: "Can we switch payroll systems in the same month as a salary revision?",
      a: "The guide advises against it. You would be trying to prove two things at once, and when the numbers disagree you will not know which change caused it.",
    },
    {
      q: "What employee data has to be loaded before the first payroll run?",
      a: "The employee master: full name as on statutory records, date of joining, department, location and reporting line, salary structure by grade, statutory identifiers (UAN, ESIC number where applicable, PAN, bank account) and entity where there is more than one.",
    },
    {
      q: "Which statutory registrations need to be in the system before a run?",
      a: "The EPF establishment code and your wage-ceiling choice, the ESIC code for each covered establishment, a professional tax registration for every state you employ in, labour welfare fund registration where the state operates one, and your TAN for Section 192 TDS.",
    },
    {
      q: "Why do year-to-date figures matter when switching payroll mid-year?",
      a: "Tax under Section 192 is projected across the whole financial year, so the new system needs to know what has already been deducted. If this is wrong, the error tends to surface in February, when the projection corrects itself in one deduction.",
    },
    {
      q: "What should year-to-date figures be reconciled against?",
      a: "Against the Form 24Q returns already filed, not your internal spreadsheet. The return is what the tax authority has been told, so that is the number that has to match.",
    },
    {
      q: "How should a parallel payroll month be compared?",
      a: "Employee by employee and head by head, not in total, because two offsetting errors produce a matching total. Differences usually cluster around PF rounding, allowances treated differently for ESI, mid-year ESI eligibility changes, loss-of-pay days and arrears.",
    },
    {
      q: "Can a closed payroll month be corrected afterwards?",
      a: "The guide recommends locking the period once processed and making corrections as identified adjustments in a later run. Editing a closed month that has already been filed against makes the filing and the ledger disagree.",
    },
  ],
  "writing-a-leave-policy": [
    {
      q: "Should statutory leave share a pool with company leave?",
      a: "No. Keep statutory leave, such as maternity benefit under the Maternity Benefit Act, as distinct leave types so ordinary entitlement keeps accruing through the absence and the absence stays identifiable in the record.",
    },
    {
      q: "Is monthly or annual leave accrual better?",
      a: "Both are workable. Monthly accrual handles mid-year joiners automatically; annual crediting is simpler to explain but forces a pro-rata rule for joiners anyway. Decide the accrual basis before the quantum.",
    },
    {
      q: "Do employees on probation accrue leave?",
      a: "That is your decision, but the guide stresses deciding it explicitly. Leaving it unstated generates more leave disputes than any other omission, because it only surfaces when a probationer asks for leave.",
    },
    {
      q: "How should leave approval routing be written?",
      a: "Routing should read the current reporting line on the employee record rather than a separately maintained list. Decide at the same time whether a delegate can be named and whether a second approver is needed above a threshold of days.",
    },
    {
      q: "Is the sandwich rule a legal requirement?",
      a: "No. Whether a weekend between two leave days counts as leave has no statutory answer; it is the employer's decision. What matters is deciding it and applying it consistently across leave types.",
    },
    {
      q: "What does a leave policy need to decide about the year end?",
      a: "A carry-forward cap, whether carried days can be encashed and up to what limit, the wage base for encashment, the cut-off date, and what happens to the remainder, including whether anyone is warned before it lapses.",
    },
    {
      q: "Should compensatory off expire?",
      a: "Yes. Give comp-off an expiry date rather than a vague intention. Without one it accumulates invisibly and surfaces at exit, when the employee is entitled to be paid for it.",
    },
    {
      q: "What happens when an employee takes leave with no balance?",
      a: "It becomes a loss-of-pay day, which reduces paid days, the salary, the provident fund wage and in some cases the ESI contribution. The guide recommends stating this plainly in the policy so nobody first meets it on a payslip.",
    },
  ],
  "attendance-for-shift-workforces": [
    {
      q: "Which attendance capture method suits a shop floor or field team?",
      a: "Choose per location: a biometric reader at a controlled entry point, a shared kiosk for shift changeovers, and a geo-fenced mobile punch for field engineers, sales and site supervisors. All three write to the same attendance ledger.",
    },
    {
      q: "Do mixed capture methods mean keeping separate attendance records?",
      a: "No. Biometric, kiosk and geo-fenced mobile punches all write to one attendance ledger, so mixing methods across locations does not create separate records.",
    },
    {
      q: "How should rotating shifts be set up?",
      a: "Hold the rotation as a rule that generates the roster, rather than retyping a roster each week. A rota change then becomes a change to one rule, and the weekly off moves with the rotation.",
    },
    {
      q: "How should a night shift that crosses midnight be recorded?",
      a: "As one unit attributed to the day it began. Splitting it at the date boundary produces two short days and a wrong overtime figure, which is the most common reason attendance and payroll disagree.",
    },
    {
      q: "Is all time beyond the shift counted as overtime?",
      a: "No. It becomes overtime when it was authorised or crosses a threshold you define, and the rate depends on the day type. Where time off is given instead, the hours become a comp-off entitlement with an expiry.",
    },
    {
      q: "What attendance exception rules should be defined?",
      a: "The grace window, the point at which a late arrival becomes a half day, the treatment of a missed punch and the consequence of repetition, each set as a threshold so the same lateness gets the same outcome in every department.",
    },
    {
      q: "Should an attendance correction replace the original punch?",
      a: "No. A regularisation should sit alongside the original capture with its reason and approver attached. An inspection can ask about a specific person on a specific date, and answering needs the original, the correction, the reason and the approver.",
    },
    {
      q: "How does attendance feed into payroll?",
      a: "Approved leave, loss-of-pay days and authorised overtime are the outputs the payroll run reads, each arriving as a record. An application approved after the run closes should appear as a dated arrear rather than be absorbed into the next month.",
    },
  ],
};
