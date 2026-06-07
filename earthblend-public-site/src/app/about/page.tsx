import type { Metadata } from "next";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Earthblend",
  description:
    "Why Earthblend exists, the story behind Prakriti Solutions, and our philosophy of slow, ingredient-led natural powder rituals for face, hair, and body.",
};

export default function AboutPage() {
  return <AboutContent />;
}
