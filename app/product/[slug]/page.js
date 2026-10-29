
import { products } from "@/lib/products";
import ProductClient from "./ProductClient";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  return <ProductClient slug={params.slug} />;
}
