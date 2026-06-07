import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getProductBySlug, PRODUCTS } from "@/lib/products";
import { PRODUCT_CONTENT } from "@/lib/product-content";
import { SITE } from "@/lib/site";
import { jsonLdScript } from "@/lib/json-ld";
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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: content.tagline,
    brand: { "@type": "Brand", name: "Earthblend" },
    category: `${product.category} care`,
    url: `${SITE.url}/product/${product.slug}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: product.amazonSellingPrice,
      highPrice: product.mrp,
      offerCount: 2,
      offers: [
        { "@type": "Offer", url: product.amazonUrl, priceCurrency: "INR", price: product.amazonSellingPrice, availability: "https://schema.org/InStock" },
        { "@type": "Offer", url: product.flipkartUrl, priceCurrency: "INR", price: product.amazonSellingPrice, availability: "https://schema.org/InStock" },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdScript(productJsonLd) }}
      />
      <ProductDetail product={product} content={content} index={index} />
    </>
  );
}
