import { TProduct } from "../../types";
import ProductCard from "./ProductCard";

function ProductsSection({
  title,
  products,
}: {
  title?: string;
  products: TProduct[];
}) {
  return (
    <section className="mb-6">
      <div className="flex items-center mb-2">
        {title ? <h2 className="text-xl font-bold">{title}</h2> : null}
        <a href="#" className="text-primary text-xs ml-auto">
          See All
        </a>
      </div>
      <div className="flex overflow-x-auto gap-2 pb-2">
        {products.map((product) => (
          <ProductCard key={product.product_name} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
