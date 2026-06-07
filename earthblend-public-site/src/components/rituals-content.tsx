"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RITUALS } from "@/lib/rituals-content";
import RitualIcon from "@/components/ritual-icon";
import { PRODUCTS } from "@/lib/products";

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function RitualsContent() {
  return (
    <article className="texture-noise bg-cream">
      <header className="mx-auto max-w-3xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-20">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.3em] text-stone">
            Earthblend rituals
          </motion.p>
          <motion.h1 variants={rise} className="mt-3 font-display text-3xl text-deep-sage sm:text-4xl">
            Four routines, built around twenty unhurried minutes
          </motion.h1>
          <motion.p variants={rise} className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-bark/70">
            A natural powder doesn&rsquo;t do much sitting in a tin. The ritual — how
            and when you use it — is where the value actually lives. Here&rsquo;s how we&rsquo;d
            suggest building each one into your week.
          </motion.p>
        </motion.div>

        <motion.nav
          initial="hidden"
          animate="show"
          variants={container}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {RITUALS.map((ritual) => (
            <motion.a
              key={ritual.id}
              variants={rise}
              href={`#${ritual.id}`}
              className="rounded-full border border-bark/12 bg-warm-ivory px-4 py-2 text-sm text-bark/70 transition-colors hover:border-terracotta/40 hover:text-terracotta"
            >
              {ritual.name}
            </motion.a>
          ))}
        </motion.nav>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        {RITUALS.map((ritual, idx) => (
          <RitualSection key={ritual.id} ritual={ritual} reversed={idx % 2 === 1} />
        ))}
      </div>
    </article>
  );
}

function RitualSection({
  ritual,
  reversed,
}: {
  ritual: (typeof RITUALS)[number];
  reversed: boolean;
}) {
  const matchedProducts = PRODUCTS.filter((p) => ritual.suggestedPacks.includes(p.name));

  return (
    <motion.section
      id={ritual.id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="scroll-mt-28 border-t border-bark/8 py-14 first:border-t-0 sm:py-16"
    >
      <div className={`grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <motion.div variants={rise}>
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-deep-sage/10 text-deep-sage">
            <RitualIcon id={ritual.id as "face" | "hair" | "body" | "bath"} className="h-9 w-9" />
          </div>
          <h2 className="mt-5 font-display text-2xl text-bark sm:text-3xl">{ritual.name}</h2>
          <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-stone">{ritual.frequency}</p>
          <p className="mt-4 text-base leading-relaxed text-bark/70">{ritual.intro}</p>

          {matchedProducts.length > 0 && (
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-stone">Pairs well with</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {matchedProducts.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/product/${product.slug}`}
                      className="text-sm text-deep-sage underline decoration-deep-sage/25 underline-offset-4 transition-colors hover:text-terracotta hover:decoration-terracotta/40"
                    >
                      {product.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        <motion.div variants={rise} className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {ritual.steps.map((step, i) => (
            <div key={step.title} className="flex gap-4 rounded-2xl border border-bark/8 bg-warm-ivory p-5">
              <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-base text-bark">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-bark/70">{step.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
