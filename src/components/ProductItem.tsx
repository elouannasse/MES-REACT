import { memo } from "react";
import type { Product } from "../types/product";

interface ProductItemProps {
  product: Product;
}


const ProductItem = memo(({ product }: ProductItemProps) => {
  

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 12,
        backgroundColor: "white",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0", fontSize: 16 }}>{product.name}</h3>
      <p style={{ margin: "4px 0", color: "#6b7280", fontSize: 14 }}>
        {product.category}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: 18, color: "#2563eb" }}>
          {product.price} MAD
        </span>
        <span style={{ fontSize: 14 }}> {product.rating.toFixed(1)}</span>
      </div>
      <p style={{ margin: "8px 0 0 0", fontSize: 12, color: "#9ca3af" }}>
        Stock: {product.stock}
      </p>
    </div>
  );
});

ProductItem.displayName = "ProductItem";

export default ProductItem;
