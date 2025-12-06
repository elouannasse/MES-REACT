import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop HP", price: 8500 },
  { id: 2, name: "Souris Sans Fil", price: 150 },
  { id: 3, name: "Clavier Mécanique", price: 450 },
  { id: 4, name: "Écran 24 pouces", price: 2200 },
  { id: 5, name: "Webcam HD", price: 350 },
];

export default function Shop() {
  const { state, dispatch } = useCart();

  const handleAddToCart = (product: (typeof products)[0]) => {
    // Vérifier si le produit existe déjà dans le panier
    const existingItem = state.items.find((item) => item.id === product.id);

    if (existingItem) {
      // Incrémenter la quantité
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: product.id, quantity: existingItem.quantity + 1 },
      });
    } else {
      // Ajouter nouveau produit
      dispatch({
        type: "ADD_ITEM",
        payload: { ...product, quantity: 1 },
      });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Boutique</h1>
      <p>
        Articles dans le panier:{" "}
        {state.items.reduce((sum, item) => sum + item.quantity, 0)}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 16,
          marginTop: 20,
        }}
      >
        {products.map((product) => {
          const cartItem = state.items.find((item) => item.id === product.id);
          return (
            <div
              key={product.id}
              style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}
            >
              <h3>{product.name}</h3>
              <p style={{ fontSize: 20, fontWeight: "bold", color: "#2563eb" }}>
                {product.price} MAD
              </p>
              {cartItem && (
                <p style={{ color: "green", fontSize: 14 }}>
                  Dans le panier: {cartItem.quantity}
                </p>
              )}
              <button
                onClick={() => handleAddToCart(product)}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: 4,
                  cursor: "pointer",
                  marginTop: 8,
                }}
              >
                Ajouter au panier
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
