import type { LibSection } from "./library/types";

/**
 * Main-content sections added in the content audit, for pages whose body was
 * mostly cards and links. Keyed by URL path. Rendered by ContentSections.
 *
 * Same writing rules as lib/library/types.ts: no HRMagix capability, statistic,
 * price or claim that is not already published on this site.
 */
export type PageContent = { eyebrow: string; title: string; intro?: string; sections: LibSection[] };

export { hubContent } from "./pageContent/hubs";
export { featureDetail } from "./pageContent/features";
