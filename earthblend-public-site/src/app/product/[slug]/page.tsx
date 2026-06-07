import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getProductBySlug, PRODUCTS } from "@/lib/products";
import { PRODUCT_CONTENT } from "@/lib/product-content";
import ProductDetail from "@/components/product-detail";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const content = PRODUCT_CONTENT[slug];
  return {
    title: product.name,
    description: content?.tagline ?? product.mainBenefit,
    openGraph: {
      title: `${product.name} | Earthblend`,
      description: content?.tagline ?? product.mainBenefit,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const content = PRODUCT_CONTENT[slug];

  if (!product || !content) notFound();

  const index = PRODUCTS.findIndex((p) => p.slug === slug);

  return <ProductDetail product={product} content={content} index={index} />;
}
