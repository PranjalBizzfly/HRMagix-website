import type { Metadata, Viewport } from "next";
import { Inter_Tight, Montserrat } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import ScrollTop from "@/components/ScrollTop";
import RouteTransition from "@/components/RouteTransition";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
  themeColor: "#7c5cff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${montserrat.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" tabIndex={-1} className="outline-none">
          <RouteTransition>{children}</RouteTransition>
        </main>
        <Footer />
        <StickyCta />
        <ScrollTop />
      </body>
    </html>
  );
}
