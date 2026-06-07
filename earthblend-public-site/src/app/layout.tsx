import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = "https://earthblend.in";

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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
