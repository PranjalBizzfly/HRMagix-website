import type { Config } from "tailwindcss";

/**
 * HRMagix brand system.
 *
 * Two layers of colour live here:
 *
 * 1. **Literal brand ramps** (`violet`, `ink`) — fixed hex. These are used
 *    where a surface is dark in *both* themes (the violet-950 hero panels, the
 *    nav utility bar) so their contrast pairing never changes.
 * 2. **Semantic tokens** (`surface`, `line`, `heading`, `accent`, …) — resolved
 *    from CSS custom properties defined in `app/globals.css`. These flip with
 *    the theme, so `bg-surface text-heading ring-line` renders a correct card
 *    in light *and* dark without a single `dark:` variant at the call site.
 *
 * Tokens are stored as bare `R G B` triplets so Tailwind's opacity modifiers
 * (`bg-surface/70`, `ring-line/60`) keep working.
 */
const token = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  // Stops :hover styles sticking after a tap on touch devices.
  future: { hoverOnlyWhenSupported: true },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          50: "#f7f5ff",
          100: "#efeaff",
          200: "#e9e5ff",
          300: "#ddd6ff",
          400: "#b7a6ff",
          500: "#7c5cff",
          600: "#5a36d6",
          700: "#4c29b4",
          800: "#2a1a5e",
          900: "#1f1147",
          950: "#160b3a",
        },
        ink: {
          DEFAULT: "#1e1b3a",
          soft: "#4a4568",
          faint: "#726d90",
        },

        /* ---- Semantic, theme-aware ---- */

        // Elevation ramp. canvas < sunken < surface < raised < raised-2
        canvas: token("canvas"),
        surface: {
          DEFAULT: token("surface"),
          sunken: token("surface-sunken"),
          raised: token("surface-raised"),
          strong: token("surface-strong"),
          field: token("field"),
        },
        /*
         * The inverse panel: the site's one near-black brand block. Violet-950
         * on a light page, a lifted charcoal plane in dark, so call sites can
         * name the role instead of hard-coding a colour that is only right in
         * one of the two themes.
         */
        panel: { DEFAULT: token("panel"), line: token("panel-line") },
        // Hairlines, in ascending weight.
        line: {
          DEFAULT: token("line"),
          strong: token("line-strong"),
          accent: token("line-accent"),
        },
        // Type ramp, descending emphasis.
        glow: token("glow"),
        brand: { DEFAULT: token("brand"), hover: token("brand-hover") },
        heading: token("heading"),
        body: token("body"),
        muted: token("muted"),
        subtle: token("subtle"),
        label: token("label"),
        // Brand-tinted text/icon ramp, ascending emphasis.
        accent: {
          soft: token("accent-soft"),
          DEFAULT: token("accent"),
          strong: token("accent-strong"),
          deep: token("accent-deep"),
        },
        // Status.
        ok: {
          DEFAULT: token("ok"),
          strong: token("ok-strong"),
          soft: token("ok-soft"),
          line: token("ok-line"),
          dot: token("ok-dot"),
        },
        warn: { DEFAULT: token("warn"), soft: token("warn-soft") },
        info: { DEFAULT: token("info"), soft: token("info-soft") },
        danger: {
          DEFAULT: token("danger"),
          strong: token("danger-strong"),
          soft: token("danger-soft"),
          line: token("danger-line"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
      },
      maxWidth: {
        shell: "1240px",
      },
      /**
       * Shadows are theme-aware too: in light they are soft violet drop
       * shadows, in dark they deepen and pick up a controlled brand glow
       * (pure black shadows read as dirt on a dark surface).
       */
      boxShadow: {
        lift: "var(--sh-lift)",
        soft: "var(--sh-soft)",
        glow: "var(--sh-glow)",
        float: "var(--sh-float)",
      },
      animation: {
        marquee: "marquee var(--marquee-duration,44s) linear infinite",
        float: "float-soft var(--float-duration,7s) ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
