import type { MetadataRoute } from "next";
import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { legalPages } from "@/lib/policies";

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
    ...industries.map((i) => ({
      url: `${BASE}${i.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legalPages.map((p) => ({
      url: `${BASE}${p.href}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
