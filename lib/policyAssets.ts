import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Which policy PDFs actually exist on disk.
 *
 * WHY THIS IS A DIRECTORY READ RATHER THAN A HARD-CODED LIST.
 *
 * All twenty-five documents named in the supplied policy schedule are present
 * in `public/policies`. Reading the directory at build time rather than
 * hard-coding the list keeps the two from drifting: the library reports what
 * is genuinely on disk, so a row can never link to a file that is not there.
 *
 * The same property makes it self-maintaining in the other direction: drop
 * `hrmagix025.pdf` into `public/policies`, add its row to `policyRegister`,
 * rebuild, and the row gains working View and Download controls.
 *
 * NAMING. One file per policy, named for its code, lower-cased:
 *
 *     public/policies/hrmagixcoc.pdf     → Code of Conduct
 *     public/policies/hrmagix003.pdf     → Leave Policy
 *
 * This runs at build time only — it is imported by a server component and
 * never reaches the browser.
 */

const DIR = join(process.cwd(), "public", "policies");

/** Public URL for a policy's PDF, whether or not the file exists yet. */
export const pdfPath = (code: string) => `/policies/${code.toLowerCase()}.pdf`;

/** Lower-cased basenames of every PDF currently in public/policies. */
export function availablePdfs(): string[] {
  if (!existsSync(DIR)) return [];
  return readdirSync(DIR)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .map((f) => f.toLowerCase().replace(/\.pdf$/, ""));
}

/**
 * The set of policy codes that have a real document behind them. Passed from
 * the server component into the client library so a row can render working
 * controls or an honest "not supplied yet" state — never a link to a 404.
 */
export function suppliedCodes(): string[] {
  const files = new Set(availablePdfs());
  return [...files].map((f) => f.toUpperCase());
}
