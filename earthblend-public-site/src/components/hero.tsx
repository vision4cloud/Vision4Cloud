"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="texture-noise relative overflow-hidden bg-gradient-to-b from-warm-ivory via-cream to-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p
            variants={rise}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-deep-sage/20 bg-warm-ivory/70 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-deep-sage"
          >
            Natural powder rituals · Made in India
          </motion.p>

          <motion.h1
            variants={rise}
            className="font-display text-[2.6rem] leading-[1.08] text-bark sm:text-5xl lg:text-[3.4rem]"
          >
            The earth already knew
            <br />
            how to care for skin.
            <br />
            <span className="text-terracotta">We just ground it finer.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-md text-base leading-relaxed text-bark/70 sm:text-lg"
          >
            Earthblend turns turmeric, multani mitti, sandalwood, amla and other
            time-trusted Indian botanicals into simple natural powders — made
            for slow, weekly rituals you return to, not quick fixes you forget.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-deep-sage px-7 py-3.5 text-sm font-medium tracking-wide text-warm-ivory shadow-[0_8px_24px_-8px_rgba(60,70,54,0.55)] transition-all hover:-translate-y-0.5 hover:bg-terracotta hover:shadow-[0_10px_28px_-8px_rgba(193,104,74,0.55)]"
            >
              Shop Ritual Packs
            </Link>
            <a
              href={whatsappLink("Hi Earthblend, I'd love some help choosing a ritual pack.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-bark/15 bg-transparent px-7 py-3.5 text-sm font-medium tracking-wide text-bark/80 transition-all hover:-translate-y-0.5 hover:border-terracotta/50 hover:text-terracotta"
            >
              Ask on WhatsApp
            </a>
          </motion.div>

          <motion.p variants={rise} className="mt-8 text-xs uppercase tracking-[0.2em] text-stone">
            Available on Amazon India &amp; Flipkart · FSSAI compliant packaging
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          <PowderComposition />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Hand-built layered "powder strata" visual standing in for product
 * photography (none supplied yet — see data/asset-manifest.json). Reads as an
 * intentional botanical/earth-toned mark rather than a generic placeholder.
 */
function PowderComposition() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-6 rounded-[40%_60%_55%_45%/45%_40%_60%_55%] bg-gradient-to-br from-gold/35 via-cream to-warm-ivory shadow-[0_40px_90px_-30px_rgba(60,70,54,0.35)]"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[12%] top-[18%] h-[46%] w-[46%] rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-gradient-to-tr from-terracotta/70 to-terracotta/40 mix-blend-multiply"
      />
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[14%] right-[10%] h-[38%] w-[38%] rounded-[50%_50%_40%_60%/55%_45%_55%_45%] bg-gradient-to-bl from-moss/75 to-deep-sage/50 mix-blend-multiply"
      />
      <motion.div
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[30%] top-[38%] h-[30%] w-[30%] rounded-[45%_55%_50%_50%/55%_50%_55%_45%] border border-warm-ivory/70 bg-gold/55 mix-blend-multiply"
      />
      <div className="texture-noise absolute inset-0 rounded-[40%_60%_55%_45%/45%_40%_60%_55%]" />
      <div className="absolute bottom-5 left-1/2 w-[78%] -translate-x-1/2 rounded-2xl border border-bark/10 bg-warm-ivory/80 px-5 py-3 text-center backdrop-blur-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-stone">
          Product photography arriving soon
        </p>
        <p className="mt-1 font-display text-sm text-deep-sage">
          14 powder rituals, ground from real botanicals
        </p>
      </div>
    </div>
  );
}
