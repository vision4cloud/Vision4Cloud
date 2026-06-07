"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import { PRODUCT_CONTENT } from "@/lib/product-content";
import type { Product } from "@/lib/products";
import ProductSwatch from "@/components/product-swatch";

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const content = PRODUCT_CONTENT[product.slug];
  const discountPct = Math.round(((product.mrp - product.amazonSellingPrice) / product.mrp) * 100);

  return (
    <motion.article
      variants={rise}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-bark/8 bg-warm-ivory shadow-[0_2px_16px_-8px_rgba(44,42,36,0.12)] transition-shadow hover:shadow-[0_18px_44px_-16px_rgba(44,42,36,0.28)]"
    >
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden">
        <ProductSwatch slug={product.slug} index={index} />
        <span className="absolute left-3 top-3 rounded-full bg-warm-ivory/85 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-deep-sage backdrop-blur-sm">
          {product.category}
        </span>
        {discountPct > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-terracotta px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-warm-ivory">
            {discountPct}% off MRP
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-4">
        <Link href={`/product/${product.slug}`} className="group/title">
          <h3 className="font-display text-lg leading-snug text-bark group-hover/title:text-terracotta transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm leading-relaxed text-bark/65 line-clamp-2">
          {content?.tagline ?? product.mainBenefit}
        </p>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-xl text-deep-sage">₹{product.amazonSellingPrice}</span>
          <span className="text-sm text-stone line-through">₹{product.mrp}</span>
          <span className="ml-auto text-xs uppercase tracking-[0.15em] text-stone">{product.packSizeGrams}g</span>
        </div>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-deep-sage px-4 py-2.5 text-xs font-medium tracking-wide text-warm-ivory transition-all hover:-translate-y-0.5 hover:bg-terracotta"
          >
            Buy on Amazon ₹{product.amazonSellingPrice}
          </a>
          <a
            href={whatsappLink(`Hi Earthblend, I'd like to know more about the ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-bark/15 px-4 py-2.5 text-xs font-medium tracking-wide text-bark/75 transition-all hover:-translate-y-0.5 hover:border-terracotta/50 hover:text-terracotta"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}
