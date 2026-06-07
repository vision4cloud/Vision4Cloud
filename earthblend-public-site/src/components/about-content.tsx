"use client";

import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/lib/about-content";
import { SITE } from "@/lib/site";

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function AboutContent() {
  return (
    <article className="texture-noise bg-cream">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8 sm:pt-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.3em] text-stone">
            About Earthblend
          </motion.p>
          <motion.h1 variants={rise} className="mt-3 font-display text-3xl leading-tight text-deep-sage sm:text-4xl">
            A return to simpler tins, not a reinvention of them
          </motion.h1>
          <motion.p variants={rise} className="mt-6 text-lg leading-relaxed text-bark/75">
            {ABOUT_CONTENT.intro}
          </motion.p>
        </motion.div>

        <Section heading={ABOUT_CONTENT.founderHeading} paragraphs={ABOUT_CONTENT.founderParagraphs} />
        <Section heading={ABOUT_CONTENT.entityHeading} paragraphs={ABOUT_CONTENT.entityParagraphs} />
        <Section heading={ABOUT_CONTENT.philosophyHeading} paragraphs={ABOUT_CONTENT.philosophyParagraphs} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-bark/8 bg-warm-ivory/70 p-6"
        >
          <p className="text-base leading-relaxed text-bark/75">{ABOUT_CONTENT.closing}</p>
          <dl className="mt-5 grid grid-cols-1 gap-3 text-sm text-bark/60 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-stone">Email</dt>
              <dd className="mt-1">{SITE.email}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-stone">WhatsApp</dt>
              <dd className="mt-1">{SITE.whatsappDisplay}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-[0.15em] text-stone">Regulatory</dt>
              <dd className="mt-1">{SITE.fssaiPlaceholder}</dd>
              <dd className="mt-1">{SITE.trademarkNote}</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </article>
  );
}

function Section({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="mt-14"
    >
      <motion.h2 variants={rise} className="font-display text-2xl text-deep-sage">
        {heading}
      </motion.h2>
      {paragraphs.map((paragraph) => (
        <motion.p key={paragraph.slice(0, 40)} variants={rise} className="mt-4 text-base leading-relaxed text-bark/75">
          {paragraph}
        </motion.p>
      ))}
    </motion.section>
  );
}
