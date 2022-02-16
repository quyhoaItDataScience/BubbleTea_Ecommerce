import React from "react";
import "./productsList.scss"
import { useProductsContext } from "../../context/products_context";
import Product from "../product/Product";

const ProductList = () => {
  const { products } = useProductsContext();

  return (
    <section className="products-list">
      {products.map((product) => {
        const { id } = product;
        return <Product key={id} {...product} />;
      })}
    </section>
  );
};

export default ProductList;
