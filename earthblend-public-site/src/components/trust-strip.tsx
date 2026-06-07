"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

const BADGES = [
  { label: "FSSAI compliant", note: SITE.fssaiPlaceholder },
  { label: "Trademark · Class 3", note: SITE.trademarkNote },
  { label: "Made in India", note: "Sourced and ground in small batches by Prakriti Solutions" },
  { label: "Verified on Amazon India", note: "Every listing is a verified Earthblend storefront" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function TrustStrip() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 sm:grid-cols-4 sm:gap-4 sm:px-8"
    >
      {BADGES.map((badge) => (
        <motion.div
          key={badge.label}
          variants={rise}
          className="group rounded-2xl border border-bark/8 bg-warm-ivory/60 px-4 py-5 text-center transition-colors hover:border-terracotta/30 hover:bg-warm-ivory"
          title={badge.note}
        >
          <p className="font-display text-sm leading-snug text-deep-sage sm:text-base">{badge.label}</p>
          <p className="mt-1.5 hidden text-xs leading-snug text-bark/70 sm:block">{badge.note}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
