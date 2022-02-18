import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cart_reducer";
import { useProductsContext } from "./products_context";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(localStorage.getItem("cart")) : [];
};

const initialState = {
  cart: getLocalStorage(),
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

  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    localStorage.removeItem("cart");
  };

  // Update cart amount when product amount change
  useEffect(() => {
    dispatch({ type: "UPDATE_CART_ITEM_AMOUNT", payload: products });
    dispatch({ type: "COUNT_TOTAL" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [products, state.cart]);

  // useEffect(() => {
  //   dispatch({ type: "COUNT_TOTAL" });
  // }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
