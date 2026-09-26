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
