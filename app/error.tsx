"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button, Pill } from "@/components/ui";
import { ErrorState } from "@/components/states";

/**
 * Route-level error boundary. Keeps the shell (nav and footer stay mounted) and
 * offers a real recovery path rather than a dead end.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in the browser console; wire to a reporter when one exists.
    console.error(error);
  }, [error]);

  return (
    <section className="relative overflow-hidden wash py-16 pt-[120px] sm:py-20 sm:pt-[140px]">
      <div className="pointer-events-none absolute inset-0 dotted opacity-60" aria-hidden="true" />
      <div className="shell relative">
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <Pill>
            <span className="h-1.5 w-1.5 rounded-full bg-danger" />
            Unexpected error
          </Pill>
          <ErrorState
            className="mt-7 w-full"
            title="This page didn't load"
            body={
              <>
                Something went wrong on our side. Try again, if it keeps happening,{" "}
                <Link href="/contact" className="font-semibold text-accent underline-offset-2 hover:underline">
                  let us know
                </Link>
                .
                {error.digest && (
                  <span className="mt-3 block text-[12.5px] text-subtle">
                    Reference: {error.digest}
                  </span>
                )}
              </>
            }
            action={
              <>
                <button
                  type="button"
                  onClick={reset}
                  className="group inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-[14.5px] font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover active:scale-[0.98] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
                >
                  Try again
                </button>
                <Button href="/" variant="outline" size="md" arrow={false}>
                  Back home
                </Button>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
