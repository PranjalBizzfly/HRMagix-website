import type { Config } from "tailwindcss";

/**
 * HRMagix brand system.
 *
 * The palette is drawn from the logo mark (public/hrmagix-mark.svg): its
 * lavender gradient #B9A4E8 → #A18CD1 → #8A6BC5 sets the violet ramp, and its
 * gold dot #F5A301 is the single secondary accent.
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
          50: "#f8f5fd",
          100: "#f0eafa",
          200: "#e5dcf6",
          300: "#d4c6f0",
          400: "#b9a4e8",
          500: "#8a6bc5",
          600: "#6b4bb0",
          700: "#583c96",
          800: "#2e1f55",
          900: "#231844",
          950: "#1a1233",
        },
        ink: {
          DEFAULT: "#211d38",
          soft: "#4c4664",
          faint: "#6e6888",
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
        // The logo's gold dot — accent fills only, never body text on white.
        gold: {
          DEFAULT: token("gold"),
          soft: token("gold-soft"),
          ink: token("gold-ink"),
        },
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
