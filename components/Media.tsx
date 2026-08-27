"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { bySlot } from "@/lib/media";
import { useInView } from "./motion";

/**
 * Image slot.
 *
 * When `lib/media.ts` has a `src` for the slot, this renders it through
 * next/image — correct intrinsic dimensions, responsive `sizes`, `object-fit`
 * so nothing stretches, lazy below the fold, and a reveal-on-scroll with a
 * gentle hover scale. When the slot is still empty, it renders `children`
 * instead: the live product rendering that is on the page today. Swapping in a
 * real asset is a one-line change in the manifest.
 */
export default function Media({
  slot,
  children,
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px",
  fit = "cover",
  rounded = "rounded-[20px]",
  hover = true,
}: {
  slot: string;
  /** Fallback shown until a real asset is supplied. */
  children?: ReactNode;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  fit?: "cover" | "contain";
  rounded?: string;
  hover?: boolean;
}) {
  const media = bySlot(slot);
  const { ref, shown } = useInView<HTMLDivElement>();

  if (!media?.src) {
    return children ? <>{children}</> : null;
  }

  return (
    <div
      ref={ref}
      data-shown={shown}
      className={`group/media relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: `${media.width} / ${media.height}` }}
    >
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={sizes}
        priority={media.priority}
        loading={media.priority ? undefined : "lazy"}
        className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
          shown ? "scale-100 opacity-100 blur-0" : "scale-[1.04] opacity-0 blur-sm"
        } ${hover ? "group-hover/media:scale-[1.03]" : ""} motion-reduce:!scale-100 motion-reduce:!opacity-100 motion-reduce:!blur-0 motion-reduce:transition-none ${imgClassName}`}
      />
    </div>
  );
}
