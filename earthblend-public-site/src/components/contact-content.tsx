"use client";

import { motion } from "framer-motion";
import { SITE, whatsappLink } from "@/lib/site";

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const CHANNELS = [
  {
    label: "WhatsApp",
    value: SITE.whatsappDisplay,
    href: whatsappLink("Hi Earthblend, I have a question."),
    note: "Fastest way to reach us — usually within a working day",
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "For longer questions, bulk inquiries, or anything in writing",
  },
  {
    label: "Phone (WhatsApp only)",
    value: SITE.whatsappDisplay,
    href: whatsappLink(),
    note: "We currently take queries over WhatsApp rather than voice calls",
  },
];

export default function ContactContent() {
  return (
    <article className="texture-noise bg-cream">
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-16 sm:px-8 sm:pt-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.3em] text-stone">
            Get in touch
          </motion.p>
          <motion.h1 variants={rise} className="mt-3 font-display text-3xl text-deep-sage sm:text-4xl">
            Questions before you order? We&rsquo;re a message away.
          </motion.h1>
          <motion.p variants={rise} className="mt-4 text-base leading-relaxed text-bark/70">
            Whether it&rsquo;s about an ingredient, picking the right ritual for your
            skin or hair, an order placed on Amazon or Flipkart, or a bulk
            inquiry — reach out below. A small team reads every message.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-4"
        >
          {CHANNELS.map((channel) => (
            <motion.a
              key={channel.label}
              variants={rise}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-bark/8 bg-warm-ivory px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-[0_12px_32px_-16px_rgba(44,42,36,0.25)]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-stone">{channel.label}</p>
                <p className="mt-1 font-display text-lg text-bark group-hover:text-terracotta transition-colors">{channel.value}</p>
                <p className="mt-1 text-sm text-bark/70">{channel.note}</p>
              </div>
              <span className="text-deep-sage transition-transform group-hover:translate-x-1 group-hover:text-terracotta" aria-hidden>→</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-bark/8 bg-warm-ivory/60 p-6"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-stone">Business hours</p>
          <p className="mt-2 text-base text-bark/75">Monday – Saturday, 10:00 AM – 6:30 PM IST</p>
          <p className="mt-1 text-sm text-bark/70">
            Messages outside these hours are read and answered the next working day.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-bark/70">
            For order tracking, returns, or replacements, please use your order
            page on Amazon India or Flipkart directly — their support teams can
            action these fastest. We&rsquo;re always glad to help point you the right way.
          </p>
        </motion.div>
      </div>
    </article>
  );
}
