import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import Button from "../button/Button";
import "./productAmounts.scss";

const ProductsAmount = () => {
  const { total_items, total_price } = useCartContext();

  return (
    <div className="products-amount">
      <h2 className="products-amount__title">thanh toán</h2>
      <div className="products-amount__total-items">
        Tổng số lượng: <span>{total_items}</span>{" "}
      </div>
      <div className="products-amount__total-price">
        Tổng giá: <span>{total_price}</span>
      </div>
      <div className="products-amount__shipping-fee">
        Tiền ship: <span>{total_price / 100}</span>
      </div>
      <Link to="/checkout" style={{ width: "100%" }}>
        <Button className="btn-checkout">tiến hành thanh toán</Button>
      </Link>
    </div>
  );
};

export default ProductsAmount;
