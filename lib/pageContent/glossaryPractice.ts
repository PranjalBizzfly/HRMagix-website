import { glossaryPracticeA } from "./glossaryPracticeA";
import { glossaryPracticeB } from "./glossaryPracticeB";
import { glossaryPracticeC } from "./glossaryPracticeC";
import { glossaryPracticeD } from "./glossaryPracticeD";

/** "In practice" paragraphs for every glossary term, keyed by term slug. */
export const glossaryPractice: Record<string, string[]> = {
  ...glossaryPracticeA,
  ...glossaryPracticeB,
  ...glossaryPracticeC,
  ...glossaryPracticeD,
};
