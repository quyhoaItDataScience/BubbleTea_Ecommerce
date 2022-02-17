import React from "react";
import "./cartProduct.scss";
import CloseIcon from "@mui/icons-material/Close";
import AmountButtons from "../../amountButtons/AmountButtons";
import { useCartContext } from "../../../context/cart_context";

const CartProduct = ({ cartItem }) => {
  const { removeItem } = useCartContext();
  const { id, name, img, price, amount } = cartItem;
  console.log(price, amount);

  return (
    <div className="cart-product">
      <div className="cart-product__info">
        <CloseIcon
          className="removeItem-icon"
          id={id}
          onClick={(e) => removeItem(e)}
        />
        <img src={img} alt="cart-product" className="cart-product__info__img" />
        <div className="cart-product__info__name">{name}</div>
      </div>
      <h3 className="cart-product__price-item">{price}</h3>
      {/* <div className="cart-product__total-items">3</div> */}
      <AmountButtons id={id} />
      <div className="cart-product__total-price">{price * amount}</div>
    </div>
  );
};

export default CartProduct;
