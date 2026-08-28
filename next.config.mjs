/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Lets a verification build run without clobbering a running `next dev`.
  // Default stays `.next`; CI/QA can set NEXT_DIST_DIR=.next-verify.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
