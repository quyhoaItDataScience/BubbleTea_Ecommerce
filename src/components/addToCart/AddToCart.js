import React from "react";
import { useCartContext } from "../../context/cart_context";
import "./addToCart.scss";

const AddToCart = ({ id }) => {
  const { addToCart } = useCartContext();
  // Need to get amount from amountButtons component to create amount property

  return (
    <button className="btn-add" value={id} onClick={(e) => addToCart(e)}>
      thêm vào giỏ
    </button>
  );
};

export default AddToCart;
