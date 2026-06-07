import type { Metadata } from "next";
import RitualsContent from "@/components/rituals-content";

export const metadata: Metadata = {
  title: "Rituals — How to Use Earthblend Powders",
  description:
    "Step-by-step natural powder rituals for face, hair, body, and bath — simple, traditional routines for skin and hair care, the Earthblend way.",
};

export default function RitualsPage() {
  return <RitualsContent />;
}
