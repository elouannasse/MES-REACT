import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import { cartReducer, cartInitialState } from "../reducers/cartReducer";
import type { CartAction } from "../reducers/cartReducer";
import type { CartState } from "../types/cart";

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook pour utiliser le cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
