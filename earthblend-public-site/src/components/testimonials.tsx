"use client";

import { motion } from "framer-motion";

/**
 * Placeholder structure only — no real reviews exist yet (build-rules.md
 * forbids fabricated testimonials). Each card is explicitly labelled as a
 * placeholder so it's obvious these need replacing with real, sourced
 * "Verified Amazon Buyer" quotes (with permission) before launch.
 */
const PLACEHOLDER_REVIEWS = [
  {
    productCategory: "Face ritual",
    placeholderQuote:
      "[Placeholder — replace with a real, sourced quote from a verified Amazon India review for a face-pack product, with the buyer's permission.]",
  },
  {
    productCategory: "Hair ritual",
    placeholderQuote:
      "[Placeholder — replace with a real, sourced quote from a verified Amazon India review for a hair-pack product, with the buyer's permission.]",
  },
  {
    productCategory: "Body ritual",
    placeholderQuote:
      "[Placeholder — replace with a real, sourced quote from a verified Amazon India review for a body/bath product, with the buyer's permission.]",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-stone">In customers&rsquo; words</p>
        <h2 className="mt-3 font-display text-3xl text-deep-sage sm:text-4xl">From verified Amazon buyers</h2>
        <p className="mt-3 text-sm text-bark/55">
          Structure ready — these are placeholder cards awaiting real, permissioned
          review quotes from verified Amazon India buyers. None of the text below is a real review.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        {PLACEHOLDER_REVIEWS.map((review) => (
          <motion.figure
            key={review.productCategory}
            variants={rise}
            className="flex flex-col justify-between rounded-2xl border border-dashed border-bark/15 bg-warm-ivory/50 p-6"
          >
            <blockquote className="text-sm italic leading-relaxed text-bark/55">
              &ldquo;{review.placeholderQuote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.15em]">
              <span className="rounded-full bg-deep-sage/10 px-3 py-1 text-deep-sage">Verified Amazon Buyer</span>
              <span className="text-stone">{review.productCategory}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
