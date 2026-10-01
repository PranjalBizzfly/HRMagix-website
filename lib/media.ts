/**
 * Curated, verified, self-generated WebP media assets for the HRMagix website.
 *
 * Rules:
 *  - Every single slot maps to an authentic, performance-optimized WebP file.
 *  - STRICT ZERO DUPLICATION: every image file is used in exactly ONE place.
 *  - All human depictions represent authentic Indian/South Asian corporate professionals in realistic modern workplaces.
 *  - Hero background images use dark gradient overlays for maximum contrast and typographic legibility.
 */

export interface MediaAsset {
  key: string;
  src: string;
  alt: string;
  caption?: string;
  position?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

import heroImages from "./heroImages.json";

/** Hero images for expansion pages: one 2560x1440 WebP per page, never reused. */
const heroAssets: Record<string, MediaAsset> = Object.fromEntries(
  (heroImages as { slot: string; src: string; alt: string; width: number; height: number }[]).map((h) => [
    h.slot,
    { key: h.slot, src: h.src, alt: h.alt, width: h.width, height: h.height, position: "center" },
  ]),
);

export const MEDIA: Record<string, MediaAsset> = {
  // ==========================================
  // Homepage Sections (8 Distinct Images)
  // ==========================================
  "home-hero": {
    key: "home-hero",
    src: "/media/people-office-work.webp",
    alt: "Four colleagues smiling in a meeting at a wooden table, one presenting charts on a laptop in a glass-walled office",
    caption: "The HRMagix operations floor: one unified platform for attendance, payroll and compliance.",
    position: "center 35%",
    priority: true,
  },
  "home-hero-team": {
    key: "home-hero-team",
    src: "/media/office-lighter-moment.webp",
    alt: "Three colleagues sharing a laugh over coffee mugs at a café table in a bright, plant-filled office lounge",
    caption: "The people HR exists for.",
    position: "center 40%",
    width: 1200,
    height: 896,
  },
  "home-manifesto": {
    key: "home-manifesto",
    src: "/media/documents-huddle.webp",
    alt: "Three colleagues go through printed spreadsheets, charts and a binder at a shared table, with a laptop open beside them",
    caption: "Statutory compliance is the product itself, not an afterthought bolted on.",
    position: "center 40%",
  },
  "home-modules": {
    key: "home-modules",
    src: "/media/manager-briefing-desks.webp",
    alt: "Manager standing at a shared desk talking with seated colleagues as they work on laptops and monitors",
    caption: "Twelve integrated modules operating on a single source of employee truth.",
    position: "center 30%",
  },
  "team-collaboration": {
    key: "team-collaboration",
    src: "/media/team-collaboration.webp",
    alt: "Four colleagues laughing and sharing ideas over laptops and notebooks at a table by windows overlooking trees",
    caption: "Seamless cross-functional alignment between HR, payroll, and engineering teams.",
    position: "center 35%",
  },
  "home-compliance": {
    key: "home-compliance",
    src: "/media/payroll-desk-review.webp",
    alt: "Payroll executive marking up a printed payroll register next to a spreadsheet and labelled compliance and audit files",
    caption: "Automated calculations matching exact state slabs and central statutory ceilings.",
    position: "center 30%",
  },
  "home-plain-terms": {
    key: "home-plain-terms",
    src: "/media/partners-conversation.webp",
    alt: "Two colleagues talking over coffee in lounge chairs beside a window overlooking a garden terrace",
    caption: "Transparent terms, predictable implementation timelines, and zero vendor lock-in.",
    position: "center 25%",
  },
  "home-how-it-works": {
    key: "home-how-it-works",
    src: "/media/office-arrival.webp",
    alt: "Smiling employee with a laptop bag and coffee walking past entry turnstiles into a bright glass office lobby",
    caption: "Real-time biometric and geo-fenced attendance capture from the moment employees arrive.",
    position: "center 45%",
  },
  "home-before-after": {
    key: "home-before-after",
    src: "/media/records-desk.webp",
    alt: "HR executive checking a stack of stamped attendance sheets beside a calculator and a spreadsheet on her laptop",
    caption: "Migrate from fragile legacy spreadsheets to an immutable single employee record.",
    position: "center 35%",
  },

  // ==========================================
  // Solutions Hub & Modules (11 Hero Backgrounds)
  // ==========================================
  "solutions-hero-bg": {
    key: "solutions-hero-bg",
    src: "/media/solutions-hub-bg.webp",
    alt: "Multi-level glass office atrium with skybridges, lounge seating and people walking between floors",
    caption: "Complete enterprise HRMS, payroll, attendance, and compliance suite built for India.",
    position: "center 35%",
  },
  "solutions-hrms": {
    key: "solutions-hrms",
    src: "/media/hrms-desk-hero-bg.webp",
    alt: "Team lead standing at a row of desks talking with four seated colleagues working on laptops and monitors",
    caption: "Core HRMS: single source of truth across all twelve operational modules.",
    position: "center 30%",
  },
  "solutions-payroll": {
    key: "solutions-payroll",
    src: "/media/home-hero-bg.webp",
    alt: "Payroll team of three reviewing printed salary spreadsheets and charts beside a laptop at a shared office table",
    caption: "Automated Indian payroll engine calculating EPF, ESI, PT and dual-regime TDS in minutes.",
    position: "center 35%",
  },
  "solutions-employee-management": {
    key: "solutions-employee-management",
    src: "/media/employee-records-consult.webp",
    alt: "A woman and a younger colleague share a relaxed one-on-one conversation over coffee in armchairs by a garden window",
    caption: "Manage organizational hierarchy, department transfers, designations, and document archives.",
    position: "center 30%",
  },
  "solutions-attendance": {
    key: "solutions-attendance",
    src: "/media/attendance-hero-bg.webp",
    alt: "Smiling woman with a coffee cup and leather bag walks past entry turnstiles in a bright glass office lobby",
    caption: "Smart attendance tracking with biometric push APIs, geo-fencing, and automated loss-of-pay calculations.",
    position: "center 35%",
  },
  "solutions-leave-management": {
    key: "solutions-leave-management",
    src: "/media/leave-breakout-lounge.webp",
    alt: "Three colleagues laughing over coffee mugs at a wooden table in a relaxed, plant-filled office breakout café",
    caption: "Configurable leave quotas, sandwich rule enforcement, and visual team holiday calendars.",
    position: "center 35%",
  },
  "solutions-ess": {
    key: "solutions-ess",
    src: "/media/remote-laptop.webp",
    alt: "Four colleagues talking around a long table with laptops and notebooks beside tall windows in an open office",
    caption: "Empower employees with instant mobile access to payslips, leave requests, and tax declarations.",
    position: "center 40%",
  },
  "solutions-onboarding": {
    key: "solutions-onboarding",
    src: "/media/welcome-to-team.webp",
    alt: "Row of sharpened wooden colour pencils in varied tip colours lined up along the bottom of a plain white background",
    caption: "Paperless digital onboarding with instant Aadhaar, PAN and bank account verification.",
    position: "center 40%",
  },
  "solutions-hr-analytics": {
    key: "solutions-hr-analytics",
    src: "/media/analytics-huddle.webp",
    alt: "Close-up of a laptop screen showing an analytics dashboard with bar charts, line graphs and weekly figures",
    caption: "Actionable executive reporting on headcount growth, attrition, and statutory liabilities.",
    position: "center 35%",
  },
  "solutions-performance-bg": {
    key: "solutions-performance-bg",
    src: "/media/team-briefing.webp",
    alt: "Leader presenting a growth chart on a wall screen to four colleagues taking notes around a boardroom table",
    caption: "Objective performance reviews, continuous 360-degree feedback, and 9-box talent grids.",
    position: "center 35%",
  },
  "solutions-compliance-bg": {
    key: "solutions-compliance-bg",
    src: "/media/compliance-hero-bg.webp",
    alt: "A professional checks a printed payroll register against a spreadsheet, with binders labelled compliance and payroll",
    caption: "100% statutory labor law compliance across 28 Indian states and union territories.",
    position: "center 30%",
  },

  // ==========================================
  // Industry Verticals (7 Hero Backgrounds)
  // ==========================================
  "industries-hero-bg": {
    key: "industries-hero-bg",
    src: "/media/tech-park-campus.webp",
    alt: "Four colleagues meeting at a long table with laptops, notebooks and coffee beside tall windows in an open office",
    caption: "Tailored HRMS and payroll architectures for Indian high-growth and established sectors.",
    position: "center 40%",
  },
  "industry-startups": {
    key: "industry-startups",
    src: "/media/startup-duo.webp",
    alt: "Three colleagues laugh together at a wooden table with two laptops, a leather notebook and drinks in a relaxed workspace",
    caption: "Flexible HR foundation designed for fast-scaling startups from 10 to 100 employees.",
    position: "center 35%",
  },
  "industry-small-business": {
    key: "industry-small-business",
    src: "/media/shopkeeper.webp",
    alt: "Smiling customer taps a card on a reader at a salon front counter while a staff member holds a point-of-sale tablet",
    caption: "Simple, bulletproof payroll compliance for growing businesses moving off paper ledgers.",
    position: "center 30%",
  },
  "industry-smes": {
    key: "industry-smes",
    src: "/media/ahmedabad-office.webp",
    alt: "Quiet office desk by a large window with a desktop monitor, open laptop, potted orchid and city apartment towers outside",
    caption: "Unified multi-location employee administration and consolidated statutory filing.",
    position: "center 35%",
  },
  "industry-manufacturing": {
    key: "industry-manufacturing",
    src: "/media/textile-floor.webp",
    alt: "Engineer in glasses types on a laptop inside a test lab surrounded by metal rigs, wiring harnesses and seat frames",
    caption: "Complex shift rotations, contract labor tracking, overtime, and Factories Act compliance.",
    position: "center 40%",
  },
  "industry-it-services": {
    key: "industry-it-services",
    src: "/media/office-tower-night.webp",
    alt: "Sunset over a dense city skyline of glass towers, with one very tall spire and a sweeping highway interchange below",
    caption: "Round-the-clock shift allowance rules, billable bench tracking, and multi-state compliance.",
    position: "center 50%",
  },
  "industry-professional-services": {
    key: "industry-professional-services",
    src: "/media/industry-consulting-floor.webp",
    alt: "Smiling woman in glasses and a red plaid shirt stands in front of a whiteboard with a hand-drawn page layout sketch",
    caption: "Streamlined project timesheets, partner compensation, and professional services operations.",
    position: "center 30%",
  },

  // ==========================================
  // Core Operational Subpages
  // ==========================================
  "pricing-hero-bg": {
    key: "pricing-hero-bg",
    src: "/media/pricing-hero-bg.webp",
    alt: "Payroll team of three reviewing printed salary spreadsheets and charts beside a laptop at a shared office table",
    caption: "Clear, published rates per employee per month with zero hidden implementation charges.",
    position: "center 35%",
  },
  "how-it-works-hero-bg": {
    key: "how-it-works-hero-bg",
    src: "/media/how-it-works-hero-bg.webp",
    alt: "HR executive checking a stack of stamped attendance registers with a calculator and spreadsheet open on her laptop",
    caption: "How HRMagix migrates your legacy records to live statutory payroll in fourteen days.",
    position: "center 35%",
  },
  "how-it-works": {
    key: "how-it-works",
    src: "/media/how-it-works.webp",
    alt: "Three colleagues talk at a desk with a monitor and laptop in an open-plan office with exposed ceiling and string lights",
    caption: "Hands-on data verification and pilot parallel payroll runs before going live.",
    position: "center 35%",
  },
  "features-hero-bg": {
    key: "features-hero-bg",
    src: "/media/workspace-plan.webp",
    alt: "Four colleagues in a smiling discussion at a meeting table, one showing charts on a laptop, in a bright office",
    caption: "Explore all twelve purpose-built modules designed for Indian enterprise operations.",
    position: "center 35%",
  },
  "hr-topics-hero-bg": {
    key: "hr-topics-hero-bg",
    src: "/media/corporate-office-hero.webp",
    alt: "Four colleagues laugh and talk around a table of laptops, notebooks and coffee mugs by tall windows over green trees",
    caption: "Deep-dive legal references for EPF, ESI, Gratuity Act, and state Shops and Establishments rules.",
    position: "center 35%",
  },
  "policy-hero-bg": {
    key: "policy-hero-bg",
    src: "/media/policy-handover.webp",
    alt: "Overhead view of one hand holding a card to a contactless reader held by another, over a workbench with leather tools",
    caption: "Enterprise data governance, ISO/SOC-aligned security, and strict tenant isolation standards.",
    position: "center 30%",
  },
  "policy-workplace-hero-bg": {
    key: "policy-workplace-hero-bg",
    src: "/media/workplace-policies-hero-bg.webp",
    alt: "Six colleagues standing around a roadmap on a large screen, pointing and taking notes in a meeting room",
    caption: "Twenty-five production-ready workplace policy templates including POSH, leave, and conduct.",
    position: "center 35%",
  },

  // ==========================================
  // Resources Hub & Subpages
  // ==========================================
  "resources-hero-bg": {
    key: "resources-hero-bg",
    src: "/media/solutions-hero-bg.webp",
    alt: "Multi-level glass office atrium with skybridges, lounge seating and people walking between floors",
    caption: "Comprehensive statutory knowledge base, guides, calculators, and benchmark comparisons.",
    position: "center 35%",
  },
  "resources-payroll-bg": {
    key: "resources-payroll-bg",
    src: "/media/helpdesk-call.webp",
    alt: "Close-up of two people at a laptop, one pointing at the screen while the other rests a hand on the trackpad",
    caption: "Step-by-step guidance on structuring CTC components for maximum employee tax efficiency.",
    position: "center 30%",
  },
  "resources-faqs-bg": {
    key: "resources-faqs-bg",
    src: "/media/media-briefing-note.webp",
    alt: "Colleagues chat across yellow-partitioned desks in a large open office while two women behind them review a laptop",
    caption: "Authoritative answers to the most common Indian payroll, attendance, and compliance questions.",
    position: "center 30%",
  },
  "hrms-comparison-hero-bg": {
    key: "hrms-comparison-hero-bg",
    src: "/media/hrms-comparison-bg.webp",
    alt: "Team lead chatting with colleagues at their desks and monitors across a bright open-plan office floor",
    caption: "Objective evaluation criteria for selecting compliant HRMS platforms in India.",
    position: "center 35%",
  },
  "resources-whitepapers-hero-bg": {
    key: "resources-whitepapers-hero-bg",
    src: "/media/whitepapers-hero-bg.webp",
    alt: "Leader presenting a strategy chart on a wall screen to four colleagues with notebooks and tablets in a boardroom",
    caption: "In-depth research on statutory regulatory shifts, gratuity provisions, and multi-state compliance.",
    position: "center 35%",
  },
  "resources-guides-hero-bg": {
    key: "resources-guides-hero-bg",
    src: "/media/guides-hero-bg.webp",
    alt: "Two colleagues stand at a glass wall sketched with a folder diagram becoming a tree, one taking notes on a clipboard",
    caption: "Pragmatic playbooks for managing payroll cycles, shift policies, and annual tax verification.",
    position: "center 35%",
  },
  "resources-glossary-hero-bg": {
    key: "resources-glossary-hero-bg",
    src: "/media/glossary-hero-bg.webp",
    alt: "Three colleagues review 3D renders of sculptural vases on a monitor, laptop and tablet around a wooden studio table",
    caption: "Clear, statutory definitions for Indian payroll, labor legislation, and benefits terminology.",
    position: "center 35%",
  },
  "resources-calculator-hero-bg": {
    key: "resources-calculator-hero-bg",
    src: "/media/calculator-hero-bg.webp",
    alt: "A presenter explains bar and line charts on a wall screen as two colleagues take notes at a conference table",
    caption: "Free calculators for Indian salary breakup, EPF ceiling caps, ESI wage limits, and gratuity.",
    position: "center 35%",
  },
  "resources-media-hero-bg": {
    key: "resources-media-hero-bg",
    src: "/media/media-room-hero-bg.webp",
    alt: "Two professionals in blazers discussing charts on a laptop and tablet at a glass table in an open office",
    caption: "Press assets, verified product claims, boilerplate copy, and media inquiries.",
    position: "center 30%",
  },

  // ==========================================
  // Company & Vendor Subpages
  // ==========================================
  "about-hero-bg": {
    key: "about-hero-bg",
    src: "/media/about-hero-bg.webp",
    alt: "Team discuss a hand-drawn platform architecture diagram around a table with laptops in an office overlooking city hills",
    caption: "Built in Pune, specifically for how Indian businesses actually manage and pay their people.",
    position: "center 35%",
  },
  "about": {
    key: "about",
    src: "/media/team-portrait.webp",
    alt: "Overhead view of a small team working on laptops around a wooden table beneath a candle chandelier in a timber room",
    caption: "Our support and engineering teams sit in the same room, ensuring compliance answers are fast and precise.",
    position: "center 30%",
  },
  "careers-hero-bg": {
    key: "careers-hero-bg",
    src: "/media/careers-hero-bg.webp",
    alt: "Two colleagues shake hands over a desk of laptops, printed charts and sticky notes in a bright open-plan office",
    caption: "Build the next generation of enterprise HR infrastructure with our team in Pune.",
    position: "center 35%",
  },
  "contact-hero-bg": {
    key: "contact-hero-bg",
    src: "/media/contact-hero-bg.webp",
    alt: "A support specialist in a headset works at dual monitors of dashboards, with colleagues at desks in the background",
    caption: "Talk directly to the software specialists who built the Indian compliance engine.",
    position: "center 35%",
  },
  "presskit-hero-bg": {
    key: "presskit-hero-bg",
    src: "/media/presskit-hero-bg.webp",
    alt: "Designer at her desk holding open a brand guide with colour swatches, a photo grid showing on her monitor",
    caption: "Accurate media boilerplate, official marks, and verified product specifications.",
    position: "center 35%",
  },
  "vendor-hero-bg": {
    key: "vendor-hero-bg",
    src: "/media/vendor-hero-bg.webp",
    alt: "Developer working at a dual-monitor desk showing code and an analytics dashboard in a plant-filled office",
    caption: "Transparent partnerships with biometric hardware manufacturers, chartered accountants, and ERP providers.",
    position: "center 35%",
  },

  // ==========================================
  // Blog / Insights (Hub + 8 Dedicated Articles)
  // ==========================================
  "blog-hero-bg": {
    key: "blog-hero-bg",
    src: "/media/blog-hero-bg.webp",
    alt: "A man points out a trend line on a wall-mounted analytics screen while a colleague takes notes at a meeting table",
    caption: "Technical writing on Indian statutory compliance, payroll calculations, and labor regulations.",
    position: "center 35%",
  },
  "blog-whiteboard-plan": {
    key: "blog-whiteboard-plan",
    src: "/media/blog-whiteboard-plan.webp",
    alt: "Woman points to rows of colourful sticky notes on a white wall while teammates with laptops watch from a meeting table",
    caption: "Sprint roadmap and payroll closing schedules mapped with zero ambiguity.",
    position: "center 35%",
  },
  "blog-wage-threshold": {
    key: "blog-wage-threshold",
    src: "/media/blog-wage-threshold.webp",
    alt: "Two people at a desk with laptops mark up hand-drawn diagrams and notes on paper with pencils and pens",
    caption: "Navigating the ₹21,000 ESI threshold and ₹15,000 EPF statutory ceiling.",
    position: "center 35%",
  },
  "blog-state-filing": {
    key: "blog-state-filing",
    src: "/media/blog-state-filing.webp",
    alt: "Overhead view of tax forms in an open folder beside a phone calculator, pen, envelopes and a mug of black coffee",
    caption: "Harmonizing multi-state Professional Tax schedules across India.",
    position: "center 30%",
  },
  "blog-payslip-explained": {
    key: "blog-payslip-explained",
    src: "/media/blog-payslip-explained.webp",
    alt: "Two colleagues at a desk look at a laptop screen together while others work at desks in a bright shared office",
    caption: "Understanding CTC, gross salary, statutory deductions, and net take-home pay.",
    position: "center 35%",
  },
  "blog-regime-choice": {
    key: "blog-regime-choice",
    src: "/media/blog-regime-choice.webp",
    alt: "Two smiling colleagues high-five across a desk covered with printed reports, a laptop and coffee mugs in a brick office",
    caption: "Old vs. new income tax regime comparison under Section 115BAC.",
    position: "center 35%",
  },
  "blog-shift-handover": {
    key: "blog-shift-handover",
    src: "/media/blog-shift-handover.webp",
    alt: "Four colleagues around a wooden café table with a tablet, laptop and coffee cups, smiling during a casual discussion",
    caption: "Managing rotational shifts, night allowances, and compensatory-off policies.",
    position: "center 35%",
  },
  "blog-settlement-review": {
    key: "blog-settlement-review",
    src: "/media/blog-settlement-review.webp",
    alt: "Black-and-white studio portrait of a young man in a dark T-shirt, half his face lit against a black background",
    caption: "Standardizing full and final settlement computations under Indian labor law.",
    position: "center 35%",
  },
  "blog-leave-planning": {
    key: "blog-leave-planning",
    src: "/media/blog-leave-planning.webp",
    alt: "Open laptop with an abstract purple and blue wallpaper resting on a weathered windowsill beside an old wooden window",
    caption: "Designing compliant annual leave policies and managing sandwich rule conditions.",
    position: "center 35%",
  },
  "solutions-overview": {
    key: "solutions-overview",
    src: "/media/briefing-paper.webp",
    alt: "Colleagues seated along a sunlit wooden table in a meeting, one taking notes with a pen on a yellow legal pad",
    caption: "A working week seen across modules: the same record, read by whoever needs it.",
    position: "center 35%",
  },
  "lifecycle-exit": {
    key: "lifecycle-exit",
    src: "/media/transition-box.webp",
    alt: "Man in a navy suit and striped tie buttons his jacket at the foot of a staircase in a glass-walled office building",
    caption: "Graceful employee transitions and automated full-and-final settlement calculations.",
    position: "center 30%",
  },

  // ==========================================
  // Individual Feature Subpages (12 Modules)
  // ==========================================
  "feature-attendance": {
    key: "feature-attendance",
    src: "/media/feature-attendance-hero.webp",
    alt: "Two colleagues wearing ID badges discuss a wall display of operational charts, one holding a tablet and stylus",
    caption: "Automated biometric push API sync, geo-fenced mobile punches, and shift differential calculations.",
    position: "center 35%",
  },
  "feature-leaves": {
    key: "feature-leaves",
    src: "/media/feature-leaves-hero.webp",
    alt: "Three colleagues chat and smile at a shared desk facing a wall screen, one holding a tablet and another with a laptop",
    caption: "Custom leave tiers, multi-level manager approvals, and automated sandwich rule policy enforcement.",
    position: "center 35%",
  },
  "feature-payroll": {
    key: "feature-payroll",
    src: "/media/feature-payroll-hero.webp",
    alt: "Isometric illustration of glowing glass cubes on a dark grid, joined by streams of light like a data pipeline",
    caption: "Execute complete monthly payroll in under 3 minutes with 100% statutory precision.",
    position: "center 35%",
  },
  "feature-employee-directory": {
    key: "feature-directory",
    src: "/media/feature-directory-hero.webp",
    alt: "A professional takes notes while reviewing wireframe screens on a curved monitor at a long desk in a shared office",
    caption: "Searchable directory, departmental structures, reporting trees, and emergency contact registries.",
    position: "center 30%",
  },
  "feature-documents-reminders": {
    key: "feature-documents",
    src: "/media/feature-documents-hero.webp",
    alt: "Isometric illustration of a secure data vault under a glowing dome, with hand, fingerprint and eye scanners at the gates",
    caption: "Encrypted document repositories with automated expiration alerts for visas, licenses, and contracts.",
    position: "center 30%",
  },
  "feature-okrs-kras": {
    key: "feature-okrs",
    src: "/media/feature-okrs-hero.webp",
    alt: "Isometric illustration of connected dark panels with orange data flows linking analytics, pipelines and deployment",
    caption: "Cascading company goals, transparent KRA definitions, and continuous quarterly performance tracking.",
    position: "center 35%",
  },
  "feature-nine-box-grid": {
    key: "feature-ninebox",
    src: "/media/feature-ninebox-hero.webp",
    alt: "A woman points to a funnel chart on a meeting-room screen while two colleagues with laptops listen across the table",
    caption: "Objective performance versus potential mapping for succession planning and leadership development.",
    position: "center 30%",
  },
  "feature-peer-recognition": {
    key: "feature-recognition",
    src: "/media/feature-recognition-hero.webp",
    alt: "A professional watches a dashboard of funnel and bar charts on her monitor at a window desk as colleagues work nearby",
    caption: "Social praise feeds, peer badges, reward points, and automated work anniversary spotlights.",
    position: "center 30%",
  },
  "feature-reports-analytics": {
    key: "feature-analytics",
    src: "/media/feature-analytics-hero.webp",
    alt: "An engineer at dual monitors of code and live charts writes notes at his desk in a busy open office with city views",
    caption: "Pre-built statutory compliance reports, headcount distribution charts, and audit-ready data exports.",
    position: "center 30%",
  },
  "feature-employee-self-service": {
    key: "feature-ess",
    src: "/media/feature-ess-hero.webp",
    alt: "A woman in headphones types on her laptop at a sunny home desk with house plants, a notebook and a coffee mug",
    caption: "Mobile-first self-service for leave requests, attendance regularisation, and IT declarations.",
    position: "center 40%",
  },
  "feature-compliance-vault": {
    key: "feature-compliance",
    src: "/media/feature-compliance-hero.webp",
    alt: "A developer with an ID lanyard reviews a colour-contrast checklist and code on two monitors at her workstation",
    caption: "Permanent digital vault for challans, returns, inspection binders, and registration certificates.",
    position: "center 30%",
  },
  "feature-offboarding-fnf": {
    key: "feature-offboarding",
    src: "/media/feature-offboarding-hero.webp",
    alt: "A man points at charts on a dual-monitor workstation as a seated colleague takes notes in a notebook beside him",
    caption: "Automated asset recovery checklists, notice buyout calculations, and instant F&F payslips.",
    position: "center 30%",
  },

  // ==========================================
  // Statutory Calculator Subpages (8 Tools)
  // ==========================================
  "calc-salary": {
    key: "calc-salary",
    src: "/media/calc-salary-hero.webp",
    alt: "Three colleagues with laptops discuss a funnel diagram and a table of definitions on a wall screen in a meeting room",
    caption: "Transparent arithmetic: calculate take-home pay, HRA exemption, and statutory deductions.",
    position: "center 30%",
  },
  "calc-pf": {
    key: "calc-pf",
    src: "/media/calc-pf-hero.webp",
    alt: "Isometric illustration of three connected cloud platforms linking glowing server blocks, data nodes and user endpoints",
    caption: "Accurate EPF (12%) and EPS (8.33%) calculation matching the ₹15,000 wage ceiling limit.",
    position: "center 35%",
  },
  "calc-esi": {
    key: "calc-esi",
    src: "/media/calc-esi-hero.webp",
    alt: "Four colleagues sit in lounge chairs around a coffee table, discussing a diagram on a tablet in a bright open office",
    caption: "ESI calculator checking the ₹21,000 monthly gross threshold and 0.75% / 3.25% rates.",
    position: "center 35%",
  },
  "calc-gratuity": {
    key: "calc-gratuity",
    src: "/media/calc-gratuity-hero.webp",
    alt: "A businesswoman takes notes in a planner beside a monitor showing bar charts in a boardroom overlooking the sea",
    caption: "15/26 formula calculation for employees completing five or more years of continuous service.",
    position: "center 30%",
  },
  "calc-payroll-cost": {
    key: "calc-payroll-cost",
    src: "/media/calc-payroll-cost-hero.webp",
    alt: "A tidy desk holds a monitor showing funnel charts, a keyboard and an open notebook of sketches beside an office window",
    caption: "Comprehensive employer cost calculation including employer EPF, ESI, gratuity provisioning, and insurance.",
    position: "center 30%",
  },
  "calc-plan-cost": {
    key: "calc-plan-cost",
    src: "/media/calc-plan-cost-hero.webp",
    alt: "A man at an office desk smiles at a monitor full of charts, with a laptop, coffee mug and handwritten notes nearby",
    caption: "Published per-employee monthly rates calculated against your exact organizational headcount.",
    position: "center 30%",
  },
  "calc-overtime": {
    key: "calc-overtime",
    src: "/media/calc-overtime-hero.webp",
    alt: "A curved monitor showing test results on a desk in an open office where engineers work at rows of workstations",
    caption: "Factories Act overtime computation: twice the ordinary rate of wages for extra hours worked.",
    position: "center 35%",
  },
  "calc-ctc": {
    key: "calc-ctc",
    src: "/media/calc-ctc-hero.webp",
    alt: "A professional with a pen and notebook reviews metrics on a desktop monitor beside a window overlooking the city",
    caption: "Detailed salary breakup converting total annual CTC into monthly take-home components.",
    position: "center 30%",
  },

  // ==========================================
  // Policy & Governance Subpages (4 Documents)
  // ==========================================
  "policy-privacy": {
    key: "policy-privacy",
    src: "/media/policy-privacy-hero.webp",
    alt: "Consultant presenting a readiness scorecard on a wall screen to five colleagues around a boardroom table",
    caption: "Strict GDPR and Indian DPDP Act aligned data privacy architecture and tenant isolation.",
    position: "center 30%",
  },
  "policy-terms": {
    key: "policy-terms",
    src: "/media/policy-terms-hero.webp",
    alt: "Engineer at a desktop monitor reviewing audit logs and performance charts in a busy open-plan office",
    caption: "Transparent terms of service, high uptime guarantees, and predictable commercial boundaries.",
    position: "center 30%",
  },
  "policy-security": {
    key: "policy-security",
    src: "/media/policy-security-hero.webp",
    alt: "Abstract 3D illustration of glowing server blocks linked by network lines, suggesting secure cloud infrastructure",
    caption: "Bank-grade 256-bit encryption in transit and at rest, SOC-2 readiness, and multi-factor authentication.",
    position: "center 35%",
  },
  "policy-cookies": {
    key: "policy-cookies",
    src: "/media/policy-cookies-hero.webp",
    alt: "Engineer mapping a system architecture diagram on a whiteboard while two colleagues follow along on laptops",
    caption: "Zero third-party advertising trackers; purely essential operational cookies for authentication.",
    position: "center 30%",
  },

  // Hero backgrounds for the 200 expansion pages, generated by
  // scripts/ingest-hero-images.mjs from the files actually present.
  ...heroAssets,
};

export const bySlot = (slot: string): MediaAsset | undefined => {
  const asset = MEDIA[slot];
  if (!asset) return undefined;
  return {
    ...asset,
    width: asset.width ?? 1400,
    height: asset.height ?? 900,
  };
};

export const getMedia = bySlot;
export const mediaSlots = MEDIA;

export default MEDIA;
