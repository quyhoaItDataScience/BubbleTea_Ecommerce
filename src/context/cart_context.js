import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cart_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
  cart: [],
  total_items: 0,
  total_price: 0,
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useProductsContext();

  // add to cart
  const addToCart = (e) => {
    const id = Number(e.target.value);
    const product = products.find((item) => item.id === id);

    dispatch({ type: "ADD_TO_CART", payload: { id, product } });
  };

  // remove item
  const removeItem = (e) => {
    const id = Number(e.target.id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // toggle amount
  const toggleAmount = (id) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: id });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  useEffect(() => {
    dispatch({ type: "COUNT_TOTAL" });
  }, [state]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
