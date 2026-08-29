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
  ["/about", "/company/about"],
  ["/contact", "/company/contact"],
  ["/careers", "/company/careers"],
  ["/press-kit", "/company/press-kit"],

  // Policy
  ["/privacy", "/policy/privacy"],
  ["/terms", "/policy/terms"],
  ["/security", "/policy/security"],
  ["/cookies", "/policy/cookies"],

  // Resources
  ["/faq", "/resources/faqs"],
  ["/faqs", "/resources/faqs"],
  ["/white-papers", "/resources/white-papers"],
  ["/media", "/resources/media"],
  ["/calculator", "/resources/calculator"],

  // Platform. The old /features and /modules pages are superseded by the
  // solutions hub, which carries the full twelve-module reference.
  ["/features", "/solutions"],
  ["/modules", "/solutions"],

  // The twelve module pages map onto the solution page that treats each subject.
  ["/modules/attendance", "/solutions/attendance"],
  ["/modules/leaves", "/solutions/leave-management"],
  ["/modules/payroll", "/solutions/payroll"],
  ["/modules/onboarding", "/solutions/onboarding"],
  ["/modules/documents", "/solutions/employee-management"],
  ["/modules/succession", "/solutions/employee-management"],
  ["/modules/analytics", "/solutions/hr-analytics"],
  ["/modules/okrs", "/solutions/hr-analytics"],
  ["/modules/kra-9box", "/solutions/hr-analytics"],
  ["/modules/pips", "/solutions/hr-analytics"],
  ["/modules/meetings", "/solutions/ess"],
  ["/modules/recognition", "/solutions/ess"],

  // The statutory engine now lives inside the payroll page.
  ["/compliance", "/solutions/payroll"],

  // Partner enquiries.
  ["/partners", "/vendor"],
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
