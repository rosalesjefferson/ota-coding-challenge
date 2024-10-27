import { TProduct } from "../../types";
import ProductsSection from "./ProductSection";
import productsData from "../../data/products.json";

function Products() {
  const groupedProducts = productsData.reduce((acc, product) => {
    const lane = product.lane ?? "others";
    if (!acc[lane]) {
      acc[lane] = [];
    }
    acc[lane].push(product);
    return acc;
  }, {} as Record<string, TProduct[]>);

  return (
    <>
      <ProductsSection title="For You" products={groupedProducts["for_you"]} />
      <ProductsSection title="Hot Products" products={groupedProducts["hot"]} />
      <ProductsSection
        title="Features"
        products={groupedProducts["features"]}
      />
      {groupedProducts["others"]?.length && (
        <ProductsSection products={groupedProducts["others"]} />
      )}
    </>
  );
}

export default Products;
