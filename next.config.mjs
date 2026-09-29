/** @type {import('next').NextConfig} */

/**
 * Redirects from the previous URL structure.
 *
 * The rebuild moved every page into a section — /about became /company/about,
 * /privacy became /policy/privacy, the twelve /modules/* pages were consolidated
 * into /solutions. Rather than let those URLs 404, each one is redirected
 * permanently to the page that now carries its content.
 *
 * The rule for choosing a target: send the reader to the page that answers what
 * they were originally looking for, never to the homepage as a catch-all.
 */
const redirects = [
  // Company
  ["/about", "/company/about-hrmagix"],
  ["/contact", "/company/contact-hrmagix"],
  ["/careers", "/company/careers"],
  ["/press-kit", "/company/press-kit"],

  // Policy
  ["/privacy", "/policy-centre/privacy-policy"],
  ["/terms", "/policy-centre/terms-of-service"],
  ["/security", "/policy-centre/security"],
  ["/cookies", "/policy-centre/cookie-policy"],

  // Resources
  ["/faq", "/resources/questions-and-answers"],
  ["/faqs", "/resources/questions-and-answers"],
  ["/white-papers", "/resources/white-papers"],
  ["/media", "/resources/media-room"],
  ["/calculator", "/resources/calculator"],

  // Platform. /features is a real page again; the old /modules URLs go to the
  // feature page for the same module.
  ["/modules", "/features"],

  // The twelve module pages map onto the solution page that treats each subject.
  ["/modules/attendance", "/features/attendance"],
  ["/modules/leaves", "/features/leaves"],
  ["/modules/payroll", "/features/payroll"],
  ["/modules/onboarding", "/features/onboarding"],
  ["/modules/documents", "/features/documents"],
  ["/modules/succession", "/features/succession"],
  ["/modules/analytics", "/features/analytics"],
  ["/modules/okrs", "/features/okrs"],
  ["/modules/kra-9box", "/features/kra-9box"],
  ["/modules/pips", "/features/pips"],
  ["/modules/meetings", "/features/meetings"],
  ["/modules/recognition", "/features/recognition"],

  // The statutory engine now lives inside the payroll page.
  ["/compliance", "/solutions/payroll"],

  // Partner enquiries.
  ["/partners", "/partners-and-vendors"],

  // Page URLs renamed to carry each page's full name. Specific paths come
  // before the section-wide wildcards so each old URL lands in one hop.
  ["/solutions/onboarding", "/solutions/onboarding-and-lifecycle"],
  ["/solutions/ess", "/solutions/employee-self-service"],
  ["/solutions/attendance", "/solutions/attendance-and-shifts"],
  ["/solutions/performance", "/solutions/performance-and-okrs"],
  ["/industries/it-services", "/industries/it-and-technology"],
  ["/company/about", "/company/about-hrmagix"],
  ["/company/contact", "/company/contact-hrmagix"],
  ["/resources/payroll", "/resources/payroll-resources"],
  ["/resources/media", "/resources/media-room"],
  ["/resources/guides/:path*", "/resources/hr-guides/:path*"],
  ["/resources/glossary/:path*", "/resources/hr-and-payroll-glossary/:path*"],
  ["/resources/faqs/:path*", "/resources/questions-and-answers/:path*"],
  ["/policy/privacy", "/policy-centre/privacy-policy"],
  ["/policy/terms", "/policy-centre/terms-of-service"],
  ["/policy/cookies", "/policy-centre/cookie-policy"],
  ["/policy/workplace-policies/:path*", "/policy-centre/workplace-policy-library/:path*"],
  ["/policy/:path*", "/policy-centre/:path*"],
  ["/blog/:path*", "/insights/:path*"],
  ["/vendor", "/partners-and-vendors"],
  ["/how-it-works", "/how-setup-works"],
  ["/all-pages", "/explore-all-pages"],
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Sharper photographs: modern formats first, and a higher quality than the
  // default 75 for every <Image> that asks for it.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    minimumCacheTTL: 2678400,
  },
  // Lets a verification build run without clobbering a running `next dev`.
  // Default stays `.next`; CI/QA can set NEXT_DIST_DIR=.next-verify.
  distDir: process.env.NEXT_DIST_DIR || ".next",

  async redirects() {
    return redirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
