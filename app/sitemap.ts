import type { MetadataRoute } from "next";
import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { legalPages } from "@/lib/policies";
import { articles } from "@/lib/blog";
import { whitePapers } from "@/lib/papers";
import { policyDetails } from "@/lib/policyDetail";
import { calculators } from "@/lib/calculators";
import { guides } from "@/lib/guides";

const BASE = "https://hrmagix.com";

/**
 * The sitemap is generated from the same content modules the pages are, so a
 * new solution or industry appears here automatically and a removed one
 * disappears. That is the only reliable way to keep a sitemap honest.
 *
 * Priorities reflect commercial intent rather than editorial pride: the
 * conversion pages and the statutory pages outrank the company ones.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const fixed: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/solutions", 0.9, "monthly"],
    ["/industries", 0.8, "monthly"],
    ["/pricing", 0.9, "monthly"],
    ["/how-it-works", 0.7, "monthly"],
    ["/resources", 0.6, "monthly"],
    ["/blog", 0.8, "weekly"],
    ["/resources/white-papers", 0.7, "monthly"],
    ["/resources/calculator", 0.8, "monthly"],
    ["/resources/faqs", 0.7, "monthly"],
    ["/resources/media", 0.4, "yearly"],
    ["/company/about", 0.6, "yearly"],
    ["/company/contact", 0.8, "yearly"],
    ["/company/careers", 0.4, "monthly"],
    ["/company/press-kit", 0.4, "yearly"],
    ["/vendor", 0.4, "yearly"],
    ["/policy", 0.4, "yearly"],
    ["/policy/workplace-policies", 0.6, "yearly"],
    // The two module pages that are their own routes rather than entries in
    // lib/solutions.ts, because each carries a bespoke layout.
    ["/solutions/performance", 0.9, "monthly"],
    ["/solutions/compliance", 0.9, "monthly"],
    ["/resources/guides", 0.7, "monthly"],
    ["/resources/glossary", 0.6, "monthly"],
    ["/resources/hrms-comparison", 0.7, "monthly"],
    ["/resources/payroll", 0.7, "monthly"],
  ];

  return [
    ...fixed.map(([path, priority, changeFrequency]) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...solutions.map((s) => ({
      url: `${BASE}${s.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...guides.map((g) => ({
      url: `${BASE}/resources/guides/${g.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...industries.map((i) => ({
      url: `${BASE}${i.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${BASE}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...whitePapers.map((p) => ({
      url: `${BASE}/resources/white-papers/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...calculators.map((c) => ({
      url: `${BASE}/calculators/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...policyDetails.map((d) => ({
      url: `${BASE}/policy/workplace-policies/${d.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...legalPages.map((p) => ({
      url: `${BASE}${p.href}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
