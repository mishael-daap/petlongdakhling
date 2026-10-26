import type { Metadata, Viewport } from "next";
import { Geist, Hedvig_Letters_Serif } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/ui/SkipLink";
import { site } from "@/content/site";

import "./globals.css";

const body = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const display = Hedvig_Letters_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hedvig",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f5f5ea",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "Home",
    template: "%s",
  },
  description:
    "Petlong Dakhling is a climate change and energy analyst in Abuja, Nigeria, working on ESG, climate risk and gender equality.",
  applicationName: site.fullName,
  authors: [{ name: site.fullName, url: site.siteUrl }],
  creator: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: site.fullName,
    title: `${site.fullName} — ${site.roleLine}`,
    description:
      "Climate change and energy analyst in Abuja, Nigeria. Emergency response planning, IFC-aligned ESMS, and climate risk work.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.roleLine}`,
    description:
      "Climate change and energy analyst in Abuja, Nigeria. Emergency response planning, IFC-aligned ESMS, and climate risk work.",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  jobTitle: "Climate change and energy analyst",
  description:
    "Climate change and energy analyst in Abuja, Nigeria, working on ESG, climate risk and gender equality.",
  url: site.siteUrl,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  knowsLanguage: ["en"],
  sameAs: [site.linkedinUrl],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SkipLink />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
