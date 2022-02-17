import React, { useContext, useReducer } from "react";
import reducer from "../reducer/cart_reducer";

const initialState = {
  cart: [],
  total_items: 0,
  total_price: 0,
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart

  // remove item

  // toggle amount

  // clear cart

  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
