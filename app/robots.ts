import type { MetadataRoute } from "next";

/**
 * robots.txt.
 *
 * The whole site is public and every route is intended to be indexed, so this
 * allows everything and points crawlers at the sitemap — which is generated
 * from the same content modules the pages read, and therefore cannot drift out
 * of step with what actually exists.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://hrmagix.com/sitemap.xml",
    host: "https://hrmagix.com",
  };
}
