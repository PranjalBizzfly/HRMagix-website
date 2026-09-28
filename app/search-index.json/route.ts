import { buildSiteIndex } from "@/lib/siteIndex";

/**
 * The site-search index, served as a static JSON file and fetched by
 * SearchDialog the first time it opens, so pages don't carry it in their HTML.
 */
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSiteIndex());
}
