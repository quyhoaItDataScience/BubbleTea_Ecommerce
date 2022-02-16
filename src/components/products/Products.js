import React from "react";
import "./products.scss";
import Product from "../product/Product";
import { useProductsContext } from "../../context/products_context";

const Products = () => {
  const { products } = useProductsContext();

  return (
    <section className="products">
      <h2 className="products__title">sản phẩm nổi bật</h2>
      <div className="container">
        {products.map((product) => {
          const { id } = product;
          return <Product key={id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
