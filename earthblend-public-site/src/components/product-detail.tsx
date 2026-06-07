"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import type { Product } from "@/lib/products";
import type { ProductContent } from "@/lib/product-content";
import ProductSwatch from "@/components/product-swatch";

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function ProductDetail({
  product,
  content,
  index,
}: {
  product: Product;
  content: ProductContent;
  index: number;
}) {
  const discountPct = Math.round(((product.mrp - product.amazonSellingPrice) / product.mrp) * 100);

  return (
    <article className="texture-noise bg-cream">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
        <nav className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone">
          <Link href="/" className="transition-colors hover:text-terracotta">Home</Link>
          <span>/</span>
          <Link href="/#shop" className="transition-colors hover:text-terracotta">Shop</Link>
          <span>/</span>
          <span className="text-bark/70">{product.name}</span>
        </nav>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={rise} className="aspect-[4/5] overflow-hidden rounded-3xl border border-bark/8 shadow-[0_24px_60px_-24px_rgba(44,42,36,0.3)]">
            <ProductSwatch slug={product.slug} index={index} />
          </motion.div>

          <div>
            <motion.span variants={rise} className="inline-flex rounded-full bg-deep-sage/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-deep-sage">
              {product.category} ritual · {product.packSizeGrams}g
            </motion.span>

            <motion.h1 variants={rise} className="mt-4 font-display text-3xl leading-tight text-bark sm:text-4xl">
              {product.name}
            </motion.h1>

            <motion.p variants={rise} className="mt-3 text-base text-bark/70">
              {content.tagline}
            </motion.p>

            <motion.div variants={rise} className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-3xl text-deep-sage">₹{product.amazonSellingPrice}</span>
              <span className="text-base text-stone line-through">₹{product.mrp}</span>
              {discountPct > 0 && (
                <span className="rounded-full bg-terracotta/10 px-2.5 py-1 text-xs uppercase tracking-[0.1em] text-terracotta">
                  Save {discountPct}%
                </span>
              )}
            </motion.div>

            <motion.div variants={rise} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-deep-sage px-6 py-3.5 text-sm font-medium tracking-wide text-warm-ivory shadow-[0_8px_24px_-8px_rgba(60,70,54,0.5)] transition-all hover:-translate-y-0.5 hover:bg-terracotta"
              >
                Buy on Amazon ₹{product.amazonSellingPrice}
              </a>
              <a
                href={product.flipkartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-bark/15 px-6 py-3.5 text-sm font-medium tracking-wide text-bark/75 transition-all hover:-translate-y-0.5 hover:border-terracotta/50 hover:text-terracotta"
              >
                View on Flipkart
              </a>
            </motion.div>
            <motion.a
              variants={rise}
              href={whatsappLink(`Hi Earthblend, I have a question about the ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-deep-sage underline decoration-deep-sage/30 underline-offset-4 transition-colors hover:text-terracotta hover:decoration-terracotta/40"
            >
              Or ask us about it on WhatsApp →
            </motion.a>

            <motion.div variants={rise} className="mt-8 rounded-2xl border border-bark/8 bg-warm-ivory/70 p-5">
              <h2 className="font-display text-base text-deep-sage">Ingredients</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient} className="rounded-full border border-bark/10 bg-cream px-3 py-1 text-xs text-bark/70">
                    {ingredient}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-stone">Ideal for: {content.idealFor}</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-16"
        >
          <motion.h2 variants={rise} className="font-display text-2xl text-deep-sage">About this ritual</motion.h2>
          <motion.p variants={rise} className="mt-4 max-w-3xl text-base leading-relaxed text-bark/75">
            {content.description}
          </motion.p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-16"
        >
          <motion.h2 variants={rise} className="font-display text-2xl text-deep-sage">Your 3-step ritual</motion.h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {content.usageSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={rise}
                className="rounded-2xl border border-bark/8 bg-warm-ivory p-6"
              >
                <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg text-bark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bark/70">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-gold/25 bg-gold/10 p-6 text-sm leading-relaxed text-bark/70"
        >
          <p>
            <strong className="text-deep-sage">A note before you begin:</strong> patch test recommended on
            your inner arm 24 hours before first use, and discontinue if you notice any discomfort. For
            external use only — this is a traditional care routine and DIY face/hair/body pack, not a
            medical treatment. Made by Prakriti Solutions in FSSAI-compliant facilities, with the license
            number printed on every pack.
          </p>
        </motion.div>
      </div>
    </article>
  );
}
