import type { Metadata } from "next";
import { labourLawCollection as c } from "@/lib/library/labourLaw";
import { LibraryHub, libraryMetadata } from "@/components/LibraryPage";

export const metadata: Metadata = libraryMetadata(c.base, c.hub.seo, c.hub.title, "website");

export default function Page() {
  return <LibraryHub c={c} crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: c.label }]} />;
}
