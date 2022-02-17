import React from "react";
import "./cartProduct.scss";
import CloseIcon from "@mui/icons-material/Close";

const CartProduct = () => {
  return (
    <div className="cart-product">
      <div className="cart-product__info">
        <CloseIcon className="removeItem-icon" />
        <img
          src="http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/9-400x400.png"
          alt="cart-product"
          className="cart-product__info__img"
        />
        <div className="cart-product__info__name">Latte bạc hà</div>
      </div>
      <div className="cart-product__price-item">300vnd</div>
      <div className="cart-product__total-items">3</div>
      <div className="cart-product__total-price">400,000vnd</div>
    </div>
  );
};

export default CartProduct;
