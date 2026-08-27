"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Short cross-route fade.
 *
 * Keying on the pathname restarts the CSS animation on every navigation —
 * ~220ms of opacity and a 6px lift, no library, no layout shift. The animation
 * is defined in globals.css and disabled under `prefers-reduced-motion`.
 */
export default function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="route-fade">
      {children}
    </div>
  );
}
