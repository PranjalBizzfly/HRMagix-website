import type { LibPage } from "./types";

/** Persona solution pages, served at /solutions/[slug] alongside the modules. */
export const personaPages: LibPage[] = [
  {
    slug: "for-hr-teams",
    name: "HRMagix for HR teams",
    title: "The HR manager's month, mapped to the modules that carry it",
    standfirst:
      "An HR manager answers the same questions every week: who is in, who is on leave, which documents are missing, whose review is late. This page sets out that recurring work and the HRMagix modules that take each part of it.",
    seo: {
      title: "HRMS for HR Managers: Records, Leave, Reviews in One Place",
      description:
        "An HRMS for HR managers, mapped to real work: employee records, attendance, leave, onboarding, documents and reviews, and the HRMagix module behind each task.",
      keywords: ["hrms for hr managers", "hr software for hr teams", "hr manager software india", "hrms for hr department"],
    },
    sections: [
      {
        heading: "What fills an HR manager's week",
        body: [
          "Most of the work is not strategy. It is lookups and follow-ups: confirming a joining date, checking a leave balance for an employee who has asked twice, chasing a manager for an approval, finding the signed copy of a policy, preparing attendance before payroll closes.",
          "Each of these is small. Together they take the week, and they get harder when the answers sit in a spreadsheet, an inbox and a register that do not agree with each other.",
        ],
      },
      {
        heading: "One employee record that the rest reads from",
        body: [
          "HRMagix keeps the employee record at the centre, and the modules read from it. The People area of the app holds Memos, Documents, Assets and Onboarding, so the paperwork behind each person sits in one place rather than in shared folders.",
          "The Employee Management solution page explains how the record is structured and what it tracks.",
        ],
        list: {
          style: "bullet",
          items: [
            "Onboarding: bringing a new hire into the company, with a pre-boarding portal for PAN, Aadhaar and bank document uploads.",
            "Documents: employee and company documents in one place, with policy sign-off tracking and expiry alerts.",
            "Assets: company assets, searchable from the global search.",
          ],
        },
      },
      {
        heading: "Attendance and leave without the chasing",
        body: [
          "Attendance & Shifts records clock-in and clock-out for the day, with each session and the time worked. Leaves & Holidays holds leave requests and balances by leave type, the company holiday list, and multi-level manager and HR approvals.",
          "Because employees can see their own balance and attendance on their dashboard, a large share of the routine questions never reach HR.",
        ],
      },
      {
        heading: "Reviews, goals and the harder conversations",
        body: [
          "The Performance area holds KRA, OKRs, Reviews, Skills and PIPs. For an HR manager running a review cycle, the useful part is that goals, review records and improvement plans sit under one roof, so the history of a performance conversation is not reconstructed from email.",
          "In the Engagement area, 1-on-1s & Meetings and Recognition give managers a place to hold the regular conversations that make the formal review less of a surprise.",
        ],
      },
      {
        heading: "Policies and announcements",
        body: [
          "All Policies lists every company policy in one place, and Announcements carries company-wide messages, reachable from the top bar of every screen. When an employee asks what the rule is, there is one place to point them to.",
        ],
        note: "HRMagix does not write your policies. The policy library and HR guides on this site help with drafting; the app holds and publishes what you decide.",
      },
    ],
    faqs: [
      {
        q: "Is this a different product from the HRMS?",
        a: "No. It is the same HRMagix HRMS, described from the point of view of an HR manager. The HRMS solution page covers the product as a whole.",
      },
      {
        q: "Can employees answer their own leave and attendance questions?",
        a: "Yes. Each employee's dashboard shows today's hours, leave requests, leave balance by type, the last seven days of attendance and their reporting manager.",
      },
      {
        q: "Which plan includes performance modules?",
        a: "The Starter plan covers attendance and leaves, the employee directory and documents. Payroll, performance, OKRs, KRAs and 9-box are in Growth. The pricing page lists each plan.",
      },
      {
        q: "Does HR still approve leave, or is it all automatic?",
        a: "Approvals remain with people. Leaves & Holidays supports multi-level manager and HR approval workflows, with email and push alerts when a request is waiting.",
      },
    ],
    related: [
      { label: "Human Resource Management System", href: "/solutions/human-resource-management-system", note: "The product as a whole, and how the modules connect." },
      { label: "Employee Management", href: "/solutions/employee-management", note: "The employee record field by field." },
      { label: "Leave Management", href: "/solutions/leave-management", note: "Leave policies, balances and approvals in depth." },
      { label: "Pricing", href: "/pricing", note: "What each plan includes." },
    ],
  },
  {
    slug: "for-finance-teams",
    name: "HRMagix for finance and payroll teams",
    title: "Closing payroll each month when attendance, leave and statutory all have to agree",
    standfirst:
      "For a payroll controller the hard part of the month is not the arithmetic. It is getting attendance, leave and salary changes settled before the run, then producing deductions, bank files and filings that reconcile.",
    seo: {
      title: "Payroll Software for Finance Teams and the Monthly Close",
      description:
        "Payroll software for finance teams: how HRMagix links attendance, leave and loss of pay to the run, applies PF, ESI, PT and TDS, and builds bank and ECR files.",
      keywords: ["payroll software for finance teams", "payroll controller software", "monthly payroll close", "payroll software india finance"],
    },
    sections: [
      {
        heading: "Where the monthly close goes wrong",
        body: [
          "Finance usually receives payroll inputs from HR late and in pieces: an attendance export, a list of leave without pay, a few mid-month salary revisions sent by email. Every manual hand-off is a place where a day of loss of pay or a revised allowance can be missed.",
          "The second problem is reconciliation after the run. Statutory deductions, the bank transfer file and the payroll register have to agree with each other and with what is later filed.",
        ],
      },
      {
        heading: "Inputs that arrive already settled",
        body: [
          "In HRMagix, attendance and leave sit in the same system as payroll. Attendance & Shifts calculates loss of pay directly and feeds it to the monthly run, and approved leave is resolved before payroll reads it. The Payroll solution page walks through the month in order: attendance closes, leave resolves, loss of pay computes, gross assembles, statutory applies, you review, money moves, filings and payslips issue.",
        ],
      },
      {
        heading: "Statutory deductions and the files that follow",
        list: {
          style: "bullet",
          items: [
            "EPF, ESI and multi-state Professional Tax calculated from each employee's wage structure.",
            "TDS under Section 192 with an old and new regime comparison, and quarterly Form 24Q export.",
            "ECR files for the EPFO portal and ESIC monthly contribution reports.",
            "Bank payment batch files formatted for NEFT, RTGS or IMPS.",
          ],
        },
        note: "Statutory rates and thresholds change by notification and, for Professional Tax and LWF, by state. Check the current rule before each financial year.",
      },
      {
        heading: "Reviewing before money moves",
        body: [
          "The run includes a review step before payment. For a finance team, that is the point to compare against last month, look at new joiners and leavers, and check any revisions, before the bank file is released.",
          "Analytics reports overtime expenses, leave utilisation and payroll budget variance, which is where a controller looks when the total moves more than expected.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does HRMagix post journal entries to our accounting system?",
        a: "The site does not publish an accounting integration. Ask in a demo how payroll output can be taken into your books.",
      },
      {
        q: "Which statutory heads does HRMagix calculate?",
        a: "EPF, ESI, Professional Tax by state, TDS under Section 192, gratuity and Labour Welfare Fund are covered on the Payroll and Compliance pages.",
      },
      {
        q: "Can we check payroll before employees are paid?",
        a: "Yes. A review step sits between the statutory calculation and the bank payment file.",
      },
      {
        q: "Which plan includes payroll?",
        a: "Payroll is part of the Growth plan and above. The pricing page has the details.",
      },
    ],
    related: [
      { label: "Payroll", href: "/solutions/payroll", note: "The monthly run step by step." },
      { label: "Compliance", href: "/solutions/compliance", note: "How each statutory head is treated." },
      { label: "Payroll Resources", href: "/resources/payroll-resources", note: "Reference material for payroll teams." },
      { label: "Calculator", href: "/resources/calculator", note: "Check a figure before the run." },
    ],
  },
  {
    slug: "for-multi-location-businesses",
    name: "HRMagix for multi-location businesses",
    title: "Branches, sites and stores on one employee record",
    standfirst:
      "A business with several locations has more than one way of marking attendance, more than one state's rules and more than one person keeping records. The aim is one record that every location writes into.",
    seo: {
      title: "HR Software for Multiple Locations, Branches and Sites",
      description:
        "HR software for multiple locations: how HRMagix handles attendance across branches, state-wise holidays and Professional Tax, and one record for every site.",
      keywords: ["hr software for multiple locations", "multi branch hrms", "hr software for multiple branches", "multi location attendance"],
    },
    sections: [
      {
        heading: "What changes when you add a location",
        body: [
          "Each new branch brings its own attendance habits, a local manager who approves leave, and often a different state. Holidays differ by state, Professional Tax and Labour Welfare Fund vary by state, and Shops and Establishments rules are set locally.",
          "Head office then receives attendance and leave in different formats from each site and has to make them agree before payroll.",
        ],
      },
      {
        heading: "Attendance that works at each kind of site",
        body: [
          "Attendance & Shifts tracks presence across physical branches and remote staff. Biometric devices (eSSL, Matrix, ZKTeco) sync by push API, and the mobile app supports GPS geo-fencing with selfie validation, so a branch with a device and a field team without one can both record into the same place.",
          "Shift rotation, night shift differentials and late grace periods are handled in the same module.",
        ],
      },
      {
        heading: "State rules without separate spreadsheets",
        body: [
          "Leaves & Holidays keeps holiday calendars across Indian states, and Payroll calculates Professional Tax for multiple states. The figures themselves vary by state and are not repeated here.",
        ],
        note: "Holiday lists, PT slabs and LWF rates are set by each state and change. Confirm the current rule for every state you operate in.",
      },
      {
        heading: "One record, visible to the people who need it",
        body: [
          "Because every location writes into the same employee record, head office sees headcount and attendance across sites, and Analytics reports department distribution and headcount growth. Employees at any branch see their own hours, leave balance and reporting manager on their dashboard.",
          "If your locations are separate legal entities rather than branches of one company, the company switcher lets a user move between the companies they work in.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can different branches use different attendance methods?",
        a: "Yes. Biometric device sync and mobile punch-in with geo-fencing both record into Attendance & Shifts.",
      },
      {
        q: "Does HRMagix handle state-wise holidays and Professional Tax?",
        a: "Yes. Holiday calendars are kept across Indian states and Professional Tax is calculated for multiple states. Rates and lists vary by state.",
      },
      {
        q: "Can we set location-level administrators with restricted access?",
        a: "Documents support role-based access control. The site does not publish further detail on location-level roles; ask in a demo.",
      },
      {
        q: "What if each location is a separate company?",
        a: "The app's company switcher lets a user move between the companies they work in.",
      },
    ],
    related: [
      { label: "Attendance & Shifts", href: "/solutions/attendance-and-shifts", note: "Biometric, mobile and shift handling in depth." },
      { label: "Compliance", href: "/solutions/compliance", note: "State-wise statutory heads." },
      { label: "HR Analytics", href: "/solutions/hr-analytics", note: "Headcount and attendance across sites." },
      { label: "Small & Medium Enterprises", href: "/industries/small-and-medium-enterprises", note: "Several legal entities under one account." },
    ],
  },
  {
    slug: "for-accounting-and-payroll-firms",
    name: "HRMagix for accounting and payroll firms",
    title: "Running payroll for several client companies from one login",
    standfirst:
      "CA firms and payroll bureaus run the same monthly cycle many times over, once for each client. HRMagix's company switcher lets one user move between the companies they work in, and each company runs on the same published modules.",
    seo: {
      title: "Payroll Software for CA Firms Handling Client Payroll",
      description:
        "Payroll software for CA firms and payroll bureaus: how the HRMagix company switcher and payroll modules fit work done for several client companies each month.",
      keywords: ["payroll software for ca firms", "payroll software for accountants", "payroll bureau software india", "client payroll software"],
    },
    sections: [
      {
        heading: "The firm's month",
        body: [
          "A firm processing payroll for clients repeats the cycle for each one: collect attendance and changes from the client, run payroll, deduct and deposit PF, ESI, PT and TDS, produce payslips and returns, and answer the client's questions. Deadlines for several clients fall on the same days.",
          "The usual pain is inputs: each client sends attendance and salary changes in its own format, and the firm re-keys them.",
        ],
      },
      {
        heading: "Moving between client companies",
        body: [
          "The top bar of the app carries a company switcher: move between the companies you work in. For a firm, that means one user can open each client company in turn without signing out and back in.",
        ],
        note: "The site does not publish white-label, partner pricing, a multi-client console or reseller terms. Ask in a demo how firm access is set up and billed.",
      },
      {
        heading: "Fewer inputs to re-key",
        body: [
          "If a client's staff mark attendance and apply for leave in HRMagix, loss of pay is calculated from attendance and fed into payroll, so the firm works from settled inputs rather than a spreadsheet sent on the last day of the month.",
        ],
      },
      {
        heading: "The statutory output",
        list: {
          style: "bullet",
          items: [
            "EPF, ESI and multi-state Professional Tax deductions.",
            "ECR files for EPFO and ESIC monthly contribution reports.",
            "TDS under Section 192, quarterly Form 24Q export and Form 16 Part B.",
            "Bank payment batch files for NEFT, RTGS or IMPS.",
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Is there a partner or reseller programme for firms?",
        a: "The site does not publish one. The partners and vendors page is the place to start a partnership conversation.",
      },
      {
        q: "Can one person work on several client companies?",
        a: "Yes. The company switcher in the top bar lets a user move between the companies they work in.",
      },
      {
        q: "How is pricing worked out for a firm with many clients?",
        a: "Published pricing is per plan. The site does not publish firm or multi-client pricing; contact the team.",
      },
      {
        q: "Can client employees see their own payslips and balances?",
        a: "Employee self-service gives each employee a dashboard with attendance, leave balance and requests. Ask in a demo how this is set up for a firm-run client.",
      },
    ],
    related: [
      { label: "Small & Medium Enterprises", href: "/industries/small-and-medium-enterprises", note: "Several legal entities under one account." },
      { label: "Payroll", href: "/solutions/payroll", note: "The monthly run in order." },
      { label: "Partners & Vendors", href: "/partners-and-vendors", note: "Start a partnership conversation." },
      { label: "Compliance", href: "/solutions/compliance", note: "PF, ESI, PT and TDS treatment." },
    ],
  },
];
