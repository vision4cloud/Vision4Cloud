import productsData from "../../data/products.json";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "Face" | "Hair" | "Body";
  packSizeGrams: number;
  mrp: number;
  amazonSellingPrice: number;
  flipkartUrl: string;
  amazonUrl: string;
  ingredients: string[];
  mainBenefit: string;
  image: string;
};

export const PRODUCTS = productsData as Product[];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getAllSlugs(): string[] {
  return PRODUCTS.map((product) => product.slug);
}
