"use client";

/**
 * Last-resort boundary: catches failures in the root layout itself, so it must
 * render its own <html>/<body> and cannot rely on the site's shell or CSS
 * components. Kept deliberately self-contained and inline-styled.
 */
/**
 * Theme for this boundary only. It cannot use <ThemeProvider>, so it reads the
 * stored choice directly and falls back to the OS. Both are handled: the
 * media query covers a first-time visitor, `data-theme` covers a stored pick.
 */
const CSS = `
  :root {
    --g-bg: #f7f5ff;
    --g-card: #ffffff;
    --g-fg: #1e1b3a;
    --g-muted: #4a4568;
    --g-subtle: #726d90;
    --g-link: #5a36d6;
    --g-brand: #7c5cff;
    --g-ring: rgba(31, 17, 71, 0.08);
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --g-bg: #080716;
      --g-card: #181533;
      --g-fg: #f4f2ff;
      --g-muted: #aaa4cd;
      --g-subtle: #8f88b6;
      --g-link: #b3a1ff;
      --g-brand: #8469ff;
      --g-ring: rgba(255, 255, 255, 0.08);
      color-scheme: dark;
    }
  }
  :root[data-theme="dark"] {
    --g-bg: #080716;
    --g-card: #181533;
    --g-fg: #f4f2ff;
    --g-muted: #aaa4cd;
    --g-subtle: #8f88b6;
    --g-link: #b3a1ff;
    --g-brand: #8469ff;
    --g-ring: rgba(255, 255, 255, 0.08);
    color-scheme: dark;
  }
`;

const PICK = `(function(){try{var v=localStorage.getItem("hrmagix-theme");
if(v==="dark"||v==="light")document.documentElement.setAttribute("data-theme",v);}catch(e){}})();`;

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <script dangerouslySetInnerHTML={{ __html: PICK }} />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "var(--g-bg)",
          color: "var(--g-fg)",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <main style={{ maxWidth: "34rem", textAlign: "center" }}>
          <div
            aria-hidden="true"
            style={{
              width: 56,
              height: 56,
              margin: "0 auto",
              borderRadius: 16,
              background: "linear-gradient(135deg,var(--g-brand),#4c29b4)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            !
          </div>
          <h1 style={{ margin: "1.5rem 0 0", fontSize: "1.6rem", letterSpacing: "-0.03em" }}>
            HRMagix couldn&apos;t load
          </h1>
          <p style={{ margin: "0.75rem 0 0", lineHeight: 1.6, color: "var(--g-muted)" }}>
            A problem stopped the page from starting. Reload to try again, or email{" "}
            <a href="mailto:hello@hrmagix.com" style={{ color: "var(--g-link)" }}>
              hello@hrmagix.com
            </a>
            .
          </p>
          {error.digest && (
            <p style={{ margin: "0.75rem 0 0", fontSize: "0.8rem", color: "var(--g-subtle)" }}>
              Reference: {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              height: 48,
              padding: "0 1.75rem",
              borderRadius: 999,
              border: "none",
              background: "var(--g-brand)",
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </main>
      </body>
    </html>
  );
}
