import type { Metadata } from "next";
import ContactContent from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact Earthblend",
  description:
    "Reach Earthblend on WhatsApp or email — questions about ingredients, rituals, bulk orders, or anything else. We read and reply to every message ourselves.",
};

export default function ContactPage() {
  return <ContactContent />;
}
