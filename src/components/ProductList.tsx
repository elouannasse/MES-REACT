import { memo } from "react";
import type { Product } from "../types/product";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
  renderCount: number;
}


const ProductList = memo(({ products, renderCount }: ProductListProps) => {
  console.log(
    ` ProductList render #${renderCount} - ${products.length} produits`
  );

  return (
    <div>
      <p style={{ marginBottom: 16, color: "#6b7280" }}>
        {products.length} produit(s) trouvé(s) - Render #{renderCount}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
});

ProductList.displayName = "ProductList";

export default ProductList;
