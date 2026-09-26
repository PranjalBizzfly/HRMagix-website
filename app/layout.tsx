import type { Metadata, Viewport } from "next";
import { Inter_Tight, Montserrat } from "next/font/google";
import Nav from "@/components/Nav";
import { buildSiteIndex } from "@/lib/siteIndex";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import ScrollTop from "@/components/ScrollTop";
import RouteTransition from "@/components/RouteTransition";
import HeadingMotion from "@/components/HeadingMotion";
import { ThemeProvider, themeScript } from "@/components/theme";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hrmagix.com"),
  title: {
    default: "HRMagix — Modern HR, From Hire to Retire",
    template: "%s · HRMagix",
  },
  description:
    "People, performance, and payroll — all in one workspace. Built for scale, audited by design.",
  openGraph: {
    title: "HRMagix — Modern HR, From Hire to Retire",
    description:
      "People, performance, and payroll — all in one workspace. Built for scale, audited by design.",
    siteName: "HRMagix",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "HRMagix — Smart HR for modern teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRMagix — Modern HR, From Hire to Retire",
    description:
      "People, performance, and payroll — all in one workspace. Built for scale, audited by design.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080716" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Sets the theme class before first paint. Must stay inline and
          render-blocking — a deferred script would let the wrong theme flash.
        */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        {/*
          Scroll-reveal failsafe.

          Revealed elements start at opacity 0 and are shown by an
          IntersectionObserver. With scripting off that observer never runs, so
          the page would be structurally complete and entirely invisible. This
          resets them to their final state instead.

          It is deliberately a <noscript> rather than a flag set on <html> by
          the inline script above: React 19 treats an unexpected attribute on
          the root element as a hydration mismatch, abandons hydration of the
          whole tree, and leaves every event handler on the site unbound.
        */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".reveal,.word{opacity:1!important;transform:none!important;filter:none!important}",
            }}
          />
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Nav searchIndex={buildSiteIndex()} />
          <main id="main" tabIndex={-1} className="outline-none">
            <RouteTransition>{children}</RouteTransition>
          </main>
          <Footer />
          <StickyCta />
          <ScrollTop />
          <HeadingMotion />
        </ThemeProvider>
      </body>
    </html>
  );
}
