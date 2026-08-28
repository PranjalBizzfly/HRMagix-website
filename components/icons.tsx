import type { SVGProps } from "react";

/**
 * HRMagix icon set.
 *
 * One drawing standard for the whole site: 24×24 box, 1.6 stroke, round caps
 * and joins, no fills, `currentColor` throughout — so every icon inherits the
 * brand colour and the type size it sits next to. Sized with utility classes
 * (default 1.25rem); never hard-code width/height on the element.
 */

export type IconName =
  // modules
  | "clock"
  | "calendar"
  | "wallet"
  | "target"
  | "grid"
  | "sprout"
  | "trophy"
  | "chat"
  | "rocket"
  | "folder"
  | "compass"
  | "chart"
  // capabilities
  | "fingerprint"
  | "gift"
  // interface
  | "mail"
  | "phone"
  | "pin"
  | "play"
  | "shield"
  | "lock"
  | "scale"
  | "layers"
  | "users"
  | "sparkle"
  | "equals"
  | "check"
  | "cross"
  | "arrowRight"
  | "chevronDown";

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  className?: string;
  /** Set when the icon carries meaning on its own. */
  title?: string;
};

const paths: Record<IconName, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.6V12l2.9 1.9" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5.5" width="17" height="15" rx="3" />
      <path d="M3.5 10h17M8.5 3.5v4M15.5 3.5v4" />
      <path d="M8.8 14.6l2.1 2 3.9-4" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 8.2A2.7 2.7 0 0 1 6.2 5.5h11A2.3 2.3 0 0 1 19.5 7.8v.4" />
      <rect x="3.5" y="8.2" width="17" height="11.3" rx="2.8" />
      <path d="M20.5 12.6h-3.3a1.9 1.9 0 0 0 0 3.8h3.3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M3.5 9.2h17M3.5 14.8h17M9.2 3.5v17M14.8 3.5v17" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 20.5v-6.2" />
      <path d="M12 14.3c0-2.6-2-4.7-4.6-4.7H5.5v1.2a4.6 4.6 0 0 0 4.6 4.7H12Z" />
      <path d="M12 12.6c0-2.9 2.3-5.2 5.2-5.2h1.3v1.1a5.2 5.2 0 0 1-5.2 5.2H12Z" />
    </>
  ),
  trophy: (
    <>
      <path d="M7.5 4.5h9v5a4.5 4.5 0 0 1-9 0v-5Z" />
      <path d="M7.5 6.2H5.2a2.3 2.3 0 0 0 2.3 4.3M16.5 6.2h2.3a2.3 2.3 0 0 1-2.3 4.3" />
      <path d="M12 14v3.2M8.8 20.2h6.4l-.7-3H9.5l-.7 3Z" />
    </>
  ),
  chat: (
    <>
      <path d="M14.8 13.4H8.4L4.9 16v-9a2.4 2.4 0 0 1 2.4-2.4h7.5A2.4 2.4 0 0 1 17.2 7v4a2.4 2.4 0 0 1-2.4 2.4Z" />
      <path d="M9.2 16.6v.6a2.4 2.4 0 0 0 2.4 2.4h4.1l3.4 2.1v-8.3" />
    </>
  ),
  rocket: (
    <>
      <path d="M13.4 4.9c3-2 5.7-1.6 5.7-1.6s.4 2.7-1.6 5.7l-4.1 6-5.6-5.6 5.6-4.5Z" />
      <path d="M9.8 9.4 6 10.2l-1.6 3.1 3.4.9M14.6 14.2l-.8 3.8-3.1 1.6-.9-3.4" />
      <path d="M7.4 16.6c-1 1-1.5 3.4-1.5 3.4s2.4-.5 3.4-1.5" />
    </>
  ),
  folder: (
    <>
      <path d="M3.8 7.4A2.4 2.4 0 0 1 6.2 5h3l2.2 2.6h6.4a2.4 2.4 0 0 1 2.4 2.4v7.6a2.4 2.4 0 0 1-2.4 2.4H6.2a2.4 2.4 0 0 1-2.4-2.4V7.4Z" />
      <path d="M3.8 11.2h16.4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.9 9.1-1.6 4.2-4.2 1.6 1.6-4.2 4.2-1.6Z" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5h16" />
      <path d="M4.5 15.4 9 10.9l3.3 3.2 6.2-6.6" />
      <path d="M14.6 7.5h4v4" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M5.4 10.6a6.9 6.9 0 0 1 12.8-2.4" />
      <path d="M8.6 12a3.5 3.5 0 0 1 6.9.7c0 2.3-.3 4.4-1 6.2" />
      <path d="M12 12.4c0 2.9-.5 5.4-1.5 7.4" />
      <path d="M18.9 11.8c0 2.6-.4 5-1.2 7.1" />
      <path d="M5.6 18.2c.7-1.6 1-3.4 1-5.3" />
    </>
  ),
  gift: (
    <>
      <rect x="3.8" y="9.6" width="16.4" height="4.2" rx="1.2" />
      <path d="M5.4 13.8v4.6a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2v-4.6M12 9.6v10.8" />
      <path d="M12 9.6H8.4a2.3 2.3 0 1 1 0-4.6c2.2 0 3.6 4.6 3.6 4.6Zm0 0h3.6a2.3 2.3 0 1 0 0-4.6C13.4 5 12 9.6 12 9.6Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.6" />
      <path d="m4.4 7.6 6.5 4.6a2 2 0 0 0 2.2 0l6.5-4.6" />
    </>
  ),
  phone: (
    <path d="M8.2 4.6h-2A2.2 2.2 0 0 0 4 6.9c0 7.3 5.8 13.1 13.1 13.1a2.2 2.2 0 0 0 2.3-2.2v-2l-4-1.6-1.9 2a13.6 13.6 0 0 1-5.7-5.7l2-1.9L8.2 4.6Z" />
  ),
  pin: (
    <>
      <path d="M19 10.5c0 4.9-7 11-7 11s-7-6.1-7-11a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10.3" r="2.6" />
    </>
  ),
  play: <path d="M8.6 5.9 18 12l-9.4 6.1V5.9Z" />,
  shield: (
    <>
      <path d="M12 3.2 19 6v5c0 4.2-2.9 7.8-7 8.9C7.9 18.8 5 15.2 5 11V6l7-2.8Z" />
      <path d="m9.2 11.6 2 2 3.6-4" />
    </>
  ),
  lock: (
    <>
      <rect x="4.8" y="10.4" width="14.4" height="9.4" rx="2.6" />
      <path d="M8.4 10.4V7.9a3.6 3.6 0 1 1 7.2 0v2.5" />
      <path d="M12 14.2v2" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4.4v15.2M6.6 19.6h10.8" />
      <path d="M4 10.6h6.2M4 10.6 7.1 5l3.1 5.6M4 10.6a3.1 3.1 0 0 0 6.2 0M13.8 10.6H20M13.8 10.6 16.9 5 20 10.6m-6.2 0a3.1 3.1 0 0 0 6.2 0" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.6 8.2 4.2-8.2 4.2-8.2-4.2L12 3.6Z" />
      <path d="m4.4 12.2 7.6 3.9 7.6-3.9M4.4 16.3l7.6 3.9 7.6-3.9" />
    </>
  ),
  users: (
    <>
      <circle cx="9.6" cy="8.6" r="3.4" />
      <path d="M3.8 19.4a5.8 5.8 0 0 1 11.6 0" />
      <path d="M16 5.6a3.4 3.4 0 0 1 0 6.6M17.4 14.4a5.8 5.8 0 0 1 3 5" />
    </>
  ),
  sparkle: (
    <path d="M12 3.6 13.7 9l5.4 1.7-5.4 1.7L12 17.8l-1.7-5.4-5.4-1.7L10.3 9 12 3.6Z" />
  ),
  equals: <path d="M5.5 9.6h13M5.5 14.4h13" />,
  check: <path d="M4.8 12.6 9.6 17 19.2 7" />,
  cross: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  arrowRight: <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" />,
  chevronDown: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
};

/** Icons that read better filled than stroked. */
const filled = new Set<IconName>(["play", "sparkle", "phone"]);

export function Icon({ name, className = "h-5 w-5", title, ...rest }: Props) {
  const solid = filled.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth={solid ? undefined : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

/**
 * Icon in a rounded tile — the standard way a module or capability is marked
 * across the site.
 */
export function IconTile({
  name,
  className = "",
  size = "md",
  tone = "light",
}: {
  name: IconName;
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "solid" | "dark";
}) {
  const box = {
    sm: "h-9 w-9 rounded-xl",
    md: "h-11 w-11 rounded-xl",
    lg: "h-14 w-14 rounded-2xl",
  }[size];
  const glyph = { sm: "h-4 w-4", md: "h-[18px] w-[18px]", lg: "h-6 w-6" }[size];
  const skin = {
    light: "bg-surface-sunken text-accent ring-1 ring-line",
    solid: "bg-brand text-white",
    dark: "bg-white/10 text-violet-200 ring-1 ring-inset ring-white/15",
  }[tone];

  return (
    <span className={`grid shrink-0 place-items-center ${box} ${skin} ${className}`}>
      <Icon name={name} className={glyph} />
    </span>
  );
}
