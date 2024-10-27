import { TProduct } from "../../types";

function ProductCard({ product }: { product: TProduct }) {
  return (
    <div className="w-[11.4375rem] flex-shrink-0 bg-white rounded-[0.75rem] shadow">
      <div>
        <img
          src={product.product_image}
          alt={product.product_name}
          className="w-full h-[6.25rem] object-cover rounded-t-[0.75rem]"
          onError={(e) => {
            e.currentTarget.src =
              "https://picsum.photos/200/100?random=fallback";
            e.currentTarget.alt = "Product image unavailable";
          }}
        />
        <div className="p-2">
          <img
            src={product.brand_image}
            alt={product.brand_name}
            className="h-[1.375rem] mb-1"
            onError={(e) => {
              e.currentTarget.src =
                "https://picsum.photos/50/15?random=fallback";
              e.currentTarget.alt = "Brand logo unavailable";
            }}
          />
          <h3 className="font-bold text-sm mb-1">{product.product_name}</h3>
          <p className="text-xs mb-2 ">{product.title}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div
              className="bg-primary h-2 rounded-full"
              style={{ width: `${product.progress * 100}%` }}
            ></div>
          </div>
          <p className="text-[0.666666667rem] ">
            {Math.round(product.progress * 100)}% Complete
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
