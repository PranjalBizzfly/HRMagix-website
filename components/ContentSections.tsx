import type { PageContent } from "@/lib/pageContent";
import { Block } from "./sky9";
import { Section } from "./LibraryPage";

/**
 * Renders a page's main-content sections (lib/pageContent) in the same
 * numbered, full-width layout as guides and reference pages. Renders nothing
 * when the page has no entry, so pages without one are unchanged.
 */
export default function ContentSections({ content, ground = "canvas" }: { content?: PageContent; ground?: "canvas" | "sunken" }) {
  if (!content || !content.sections.length) return null;
  return (
    <Block eyebrow={content.eyebrow} title={content.title} intro={content.intro} ground={ground}>
      <div className="mx-auto max-w-[74ch] text-left">
        {content.sections.map((s, i) => (
          <Section key={s.heading} s={s} index={i} />
        ))}
      </div>
    </Block>
  );
}
