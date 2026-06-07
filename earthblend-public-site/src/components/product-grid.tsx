"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/product-card";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function ProductGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {PRODUCTS.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </motion.div>
  );
}
