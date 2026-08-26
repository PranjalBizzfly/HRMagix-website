import type { Config } from "tailwindcss";

/**
 * HRMagix brand system.
 * Palette lifted from the HRMagix brand: violet primary (#7c5cff) with a
 * deep indigo ink range and a soft lavender surface range.
 */
const config: Config = {
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
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
      },
      maxWidth: {
        shell: "1240px",
      },
      boxShadow: {
        lift: "0 24px 60px -28px rgba(31,17,71,0.28)",
        soft: "0 2px 6px rgba(31,17,71,0.06), 0 18px 40px -26px rgba(31,17,71,0.3)",
        glow: "0 14px 34px -14px rgba(124,92,255,0.6)",
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
