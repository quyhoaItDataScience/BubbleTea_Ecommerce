import React from "react";
import "./productPage.scss";
import ProductList from "../components/productList/ProductList";
import Sort from "../components/sort/Sort";
import Filters from "../components/filters/Filters";
import Footer from "../components/footer/Footer";
import Copyright from "../components/copyright/Copyright";
const ProductsPage = () => {
  return (
    <section className="products-page">
      <div className="container">
        {/* Filter component */}
        <Filters />
        {/* Sort component */}
        <div className="products-page__container">
          <Sort />
          <ProductList />
        </div>
        {/* Products component */}
        {/* Footer */}
      </div>
      <div>
        <Footer />
        <Copyright />
      </div>
    </section>
  );
};

export default ProductsPage;
