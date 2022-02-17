import React from "react";
import "./productsList.scss";
import Product from "../product/Product";
import { useFiltersContext } from "../../context/filters_context";

const ProductList = () => {
  const { filtered_products: products } = useFiltersContext();

  return (
    <section className="products-list">
      {products.length < 1 && (
        <div>
          <h2>Không có kết quả phù hợp</h2>
        </div>
      )}
      {products.map((product) => {
        const { id } = product;
        return <Product key={id} {...product} />;
      })}
    </section>
  );
};

export default ProductList;
