import Link from "next/link";
import { Icon } from "./icons";
import { titleCase } from "@/lib/names";

export type Crumb = { label: string; href?: string };

/**
 * Semantic breadcrumb trail.
 *
 * An ordered list inside a labelled nav, so assistive tech announces position
 * in the hierarchy; the current page is marked `aria-current` and never a link.
 * Long trails scroll rather than wrap on narrow screens.
 */
export default function Breadcrumbs({
  items,
  tone = "dark",
  className = "",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
  className?: string;
}) {
  if (!items.length) return null;
  // Crumbs are page names, so they share the site's Title Case rule.
  items = items.map((item) => ({ ...item, label: titleCase(item.label) }));

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="mask-fade-x flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[12.5px]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex shrink-0 items-center gap-1.5">
              {i > 0 && (
                <Icon
                  name="chevronDown"
                  className={`h-3 w-3 -rotate-90 ${
                    // "light" sits on the fixed-dark panels; "dark" on the page.
                    tone === "light" ? "text-violet-400" : "text-subtle/70"
                  }`}
                />
              )}
              {last || !item.href ? (
                <span
                  aria-current={last ? "page" : undefined}
                  className={`font-medium ${tone === "light" ? "text-violet-200" : "text-muted"}`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    tone === "light"
                      ? "text-violet-300/80 hover:text-white"
                      : "text-subtle hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
