import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { labourLawCollection as c } from "@/lib/library/labourLaw";
import { LibraryArticle, libraryMetadata } from "@/components/LibraryPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return c.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = c.pages.find((x) => x.slug === slug);
  return p ? libraryMetadata(`${c.base}/${p.slug}`, p.seo, p.title) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = c.pages.find((x) => x.slug === slug);
  if (!page) notFound();
  return (
    <LibraryArticle
      page={page}
      eyebrow="Labour law explainer"
      crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: c.label, href: c.base }, { label: page.name }]}
      siblings={c.pages}
      siblingsTitle="More labour law explainers"
      hrefFor={(s) => `${c.base}/${s}`}
    />
  );
}
