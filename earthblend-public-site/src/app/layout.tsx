import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { SITE } from "@/lib/site";
import { jsonLdScript } from "@/lib/json-ld";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = SITE.url;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Earthblend",
  legalName: SITE.legalEntity,
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  email: SITE.email,
  description:
    "Earthblend makes ingredient-led natural powder blends for face, hair, and body, made by Prakriti Solutions and sold on Amazon India and Flipkart.",
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Earthblend — Natural Powder Rituals for Skin, Hair & Body",
    template: "%s | Earthblend",
  },
  description:
    "Earthblend makes ingredient-led natural powder blends for face, hair, and body — rooted in traditional Indian beauty practices. Shop our weekly care rituals on Amazon India and Flipkart.",
  keywords: [
    "Earthblend",
    "natural powder face pack",
    "ayurvedic hair pack",
    "ubtan powder",
    "DIY face pack India",
    "natural skincare India",
    "Prakriti Solutions",
  ],
  authors: [{ name: "Prakriti Solutions" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Earthblend",
    title: "Earthblend — Natural Powder Rituals for Skin, Hair & Body",
    description:
      "Ingredient-led natural powder blends for face, hair, and body — rooted in traditional Indian beauty practices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Earthblend — natural powder rituals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earthblend — Natural Powder Rituals for Skin, Hair & Body",
    description:
      "Ingredient-led natural powder blends for face, hair, and body — rooted in traditional Indian beauty practices.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-bark">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
