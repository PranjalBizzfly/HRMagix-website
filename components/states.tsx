import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

/**
 * Page and component states.
 *
 * One visual language for every non-ideal state — loading, empty, error,
 * success — so a skeleton on one page reads the same as a skeleton on another.
 * Each is a presentational component; the page decides when to show it.
 */

/** Shared shell: icon tile, headline, body, optional action. */
export function StatePanel({
  icon,
  title,
  body,
  action,
  tone = "neutral",
  className = "",
}: {
  icon: IconName;
  title: string;
  body?: ReactNode;
  action?: ReactNode;
  tone?: "neutral" | "success" | "error";
  className?: string;
}) {
  const skin = {
    neutral: "bg-surface-sunken text-accent ring-line",
    success: "bg-brand text-white ring-line-strong",
    error: "bg-danger-soft text-danger ring-danger-line",
  }[tone];

  return (
    <div
      className={`flex flex-col items-center rounded-[24px] bg-surface px-6 py-12 text-center shadow-soft ring-1 ring-line sm:px-10 ${className}`}
    >
      <span className={`grid h-14 w-14 place-items-center rounded-2xl ring-1 ${skin}`}>
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-6 font-display text-[19px] font-bold text-heading">{title}</h3>
      {body && <div className="mt-3 max-w-[46ch] text-[15.5px] leading-relaxed text-muted">{body}</div>}
      {action && <div className="mt-7 flex flex-wrap justify-center gap-3">{action}</div>}
    </div>
  );
}

/** Nothing matched a filter or query. */
export function EmptyState({
  title = "Nothing here yet",
  body,
  action,
  className = "",
}: {
  title?: string;
  body?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <StatePanel icon="layers" title={title} body={body} action={action} className={className} />
  );
}

/** An action completed. */
export function SuccessState({
  title,
  body,
  action,
  className = "",
}: {
  title: string;
  body?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <StatePanel
      icon="check"
      tone="success"
      title={title}
      body={body}
      action={action}
      className={className}
    />
  );
}

/** Something failed and the visitor can retry. */
export function ErrorState({
  title = "Something went wrong",
  body,
  action,
  className = "",
}: {
  title?: string;
  body?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <StatePanel icon="cross" tone="error" title={title} body={body} action={action} className={className} />
  );
}

/**
 * Loading placeholder shaped like the content it replaces, so the page does not
 * jump when the real thing arrives. Animation stops under reduced motion.
 */
export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block animate-pulse rounded-xl bg-surface-raised/80 motion-reduce:animate-none ${className}`}
    />
  );
}

/** Full-page loading state used by route-level loading.tsx files. */
export function PageSkeleton() {
  return (
    <div className="wash pb-20 pt-[112px] sm:pt-[136px]" role="status" aria-live="polite">
      <span className="sr-only">Loading page</span>
      <div className="shell">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
          <Skeleton className="h-7 w-44 rounded-full" />
          <Skeleton className="h-14 w-full max-w-2xl" />
          <Skeleton className="h-14 w-3/4" />
          <Skeleton className="mt-3 h-5 w-full max-w-xl" />
          <Skeleton className="h-5 w-2/3 max-w-md" />
          <div className="mt-5 flex gap-3">
            <Skeleton className="h-[58px] w-44 rounded-full" />
            <Skeleton className="h-[58px] w-40 rounded-full" />
          </div>
        </div>
        <Skeleton className="mx-auto mt-16 h-[320px] w-full max-w-5xl rounded-[24px] sm:h-[420px]" />
      </div>
    </div>
  );
}
