"use client";

import type { ReactNode } from "react";
import { useSpotlight } from "./motion";

/**
 * Panel that carries the pointer-following highlight, so server-rendered
 * sections can opt in without becoming client components themselves.
 * The effect is mouse-only and disabled under reduced motion (see globals.css).
 */
export default function SpotlightPanel({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  const { ref, spotlightProps } = useSpotlight<HTMLElement>();
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLElement>}
      {...spotlightProps}
      className={`spotlight ${className}`}
    >
      {children}
    </Tag>
  );
}
