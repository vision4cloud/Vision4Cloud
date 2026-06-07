import type { Metadata } from "next";
import FaqAccordion from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ — Shelf Life, Patch Tests, Shipping & More",
  description:
    "Answers to common questions about Earthblend natural powders — shelf life, patch testing, ingredient sourcing, FSSAI compliance, shipping, returns, and bulk orders.",
};

export default function FaqPage() {
  return (
    <article className="texture-noise bg-cream">
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-16 sm:px-8 sm:pt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-stone">Questions, answered</p>
        <h1 className="mt-3 font-display text-3xl text-deep-sage sm:text-4xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-base leading-relaxed text-bark/65">
          If you don&rsquo;t find what you&rsquo;re looking for here, message us on
          WhatsApp or write to info@earthblend.in — we read and reply to everything ourselves.
        </p>
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </div>
    </article>
  );
}
