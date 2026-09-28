"use client";

import Image from "next/image";
import { bySlot } from "@/lib/media";
import { useInView } from "./motion";

/**
 * A photograph from the media registry.
 *
 * Every image on this site goes through here, which is what keeps three
 * promises enforceable in one place: correct intrinsic dimensions so nothing
 * shifts on load, a focal point so a tall crop never cuts a face off, and a
 * single reveal treatment so the whole site behaves consistently on scroll.
 *
 * `ratio` lets one photograph serve a wide band on one page and a portrait
 * column on another without distortion — the frame changes, the image inside
 * it is cropped around its focal point rather than squashed.
 */
export default function Photo({
  slot,
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 680px",
  ratio,
  rounded = "rounded-[20px]",
  hover = true,
  /** Warm violet duotone wash, used where a photo sits on a brand ground. */
  tone = false,
  /**
   * Fill the positioned parent instead of establishing its own aspect ratio.
   * Used for the full-bleed backdrops behind industry-page headlines, where the
   * height is set by the text on top rather than by the photograph.
   */
  cover = false,
}: {
  slot: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  /** CSS aspect-ratio, e.g. "16 / 10". Defaults to the file's own. */
  ratio?: string;
  rounded?: string;
  hover?: boolean;
  tone?: boolean;
  cover?: boolean;
}) {
  const media = bySlot(slot);
  const { ref, shown } = useInView<HTMLDivElement>();

  if (!media) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(`[Photo] no media registered for slot "${slot}"`);
    }
    return null;
  }

  return (
    <div
      ref={ref}
      data-shown={shown}
      className={`photo-skeleton group/photo overflow-hidden bg-surface-sunken ${
        cover ? "absolute inset-0 h-full w-full" : "relative"
      } ${rounded} ${className}`}
      style={cover ? undefined : { aspectRatio: ratio ?? `${media.width} / ${media.height}` }}
    >
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        quality={100}
        priority={media.priority}
        loading={media.priority ? undefined : "lazy"}
        style={{ objectPosition: media.position ?? "center" }}
        className={`object-cover transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
          shown ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
        } ${hover ? "group-hover/photo:scale-[1.035]" : ""} ${
          tone ? "media-tone" : ""
        } motion-reduce:!scale-100 motion-reduce:!opacity-100 motion-reduce:transition-none ${imgClassName}`}
      />
    </div>
  );
}

/**
 * A photograph with its caption set beside or beneath it, the way an editorial
 * page treats an image — the caption earns the image its place rather than
 * decorating it.
 */
export function Figure({
  slot,
  caption,
  ratio,
  className = "",
  sizes,
  align = "below",
}: {
  slot: string;
  caption: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  align?: "below" | "side";
}) {
  if (align === "side") {
    return (
      <figure className={`grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,14rem)] sm:items-end ${className}`}>
        <Photo slot={slot} ratio={ratio} sizes={sizes} />
        <figcaption className="border-l-2 border-line-accent pl-4 text-[13.5px] leading-relaxed text-muted sm:border-l-0 sm:border-t-2 sm:pb-1 sm:pl-0 sm:pt-4">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={className}>
      <Photo slot={slot} ratio={ratio} sizes={sizes} />
      <figcaption className="mt-4 max-w-xl text-[13.5px] leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
