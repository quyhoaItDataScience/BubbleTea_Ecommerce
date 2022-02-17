import React from "react";
import CartProducts from "../components/cartProducts/CartProducts";
import ProductsAmount from "../components/productAmounts/ProductsAmount";
import Footer from "../components/footer/Footer";
import "./cartPage.scss";

const CartPage = () => {
  return (
    <section className="cart">
      <h2 className="cart__title">trang sản phẩm</h2>
      <div className="container cart-container">
        {/* Heading title */}
        {/* Display product */}
        <CartProducts />
        {/* Calculate total */}
        <ProductsAmount />
        {/* Footer */}
      </div>
      <Footer />
    </section>
  );
};

export default CartPage;
