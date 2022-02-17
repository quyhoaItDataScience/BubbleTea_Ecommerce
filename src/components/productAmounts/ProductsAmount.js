import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./productAmounts.scss";

const ProductsAmount = () => {
  return (
    <div className="products-amount">
      <h2 className="products-amount__title">thanh toán</h2>
      <div className="products-amount__total-items">Tổng số lượng: 30</div>
      <div className="products-amount__total-price">Tổng giá: 300vnd</div>
      <div className="products-amount__shipping-fee">Tiền ship: 30vnd</div>
      <Link to="/checkout" style={{ width: "100%" }}>
        <Button className="btn-checkout">tiến hành thanh toán</Button>
      </Link>
    </div>
  );
};

export default ProductsAmount;
