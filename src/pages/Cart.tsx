import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { state, dispatch } = useCart();

  // Calcul du total
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: { id } });
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, quantity: newQuantity },
      });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Mon Panier</h1>

      {state.items.length === 0 ? (
        <div>
          <p>Votre panier est vide</p>
          <Link
            to="/shop"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            Continuer vos achats
          </Link>
        </div>
      ) : (
        <>
          <div style={{ marginTop: 20 }}>
            {state.items.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  padding: 16,
                  borderRadius: 8,
                  marginBottom: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <p style={{ margin: "8px 0", color: "#666" }}>
                    {item.price} MAD
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                    style={{ padding: "4px 12px", cursor: "pointer" }}
                  >
                    -
                  </button>
                  <span
                    style={{
                      minWidth: 30,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                    style={{ padding: "4px 12px", cursor: "pointer" }}
                  >
                    +
                  </button>

                  <span
                    style={{
                      fontWeight: "bold",
                      minWidth: 80,
                      textAlign: "right",
                    }}
                  >
                    {item.price * item.quantity} MAD
                  </span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: { id: item.id },
                      })
                    }
                    style={{
                      backgroundColor: "#ef4444",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              padding: 16,
              backgroundColor: "#f3f4f6",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <span>Total:</span>
              <span style={{ color: "#2563eb" }}>{total} MAD</span>
            </div>

            <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                style={{
                  flex: 1,
                  backgroundColor: "#6b7280",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                Vider le panier
              </button>
              <button
                style={{
                  flex: 2,
                  backgroundColor: "#10b981",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Passer la commande
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
