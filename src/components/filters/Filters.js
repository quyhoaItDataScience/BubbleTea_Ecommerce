import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import "./filters.scss";
import { useProductsContext } from "../../context/products_context";

const Filters = () => {
  const location = useLocation();
  const { pathname } = location;

  const { products } = useProductsContext();

  return (
    <section className="filters">
      <Link to="/" className="filters__directory">
        <span>Trang chủ</span> {pathname}
      </Link>
      <div className="filters__categories">
        <div className="filters__text">
          <form>
            <label htmlFor="search">Tìm kiếm</label>
            <input type="text" id="search" />
          </form>
        </div>
        <h2 className="filters__category">danh mục sản phẩm</h2>
        <ul className="filters__category__list">
          {products.map((product) => {
            return <li className="filters__category__item">{product.name}</li>;
          })}
        </ul>
      </div>
      <div className="filers__price">
        <h2>chọn theo giá</h2>
        <form>
          <input type="range" id="price" />
          <label htmlFor="price">Lọc</label>
          <p>Giá: price here</p>
        </form>
      </div>
      <button type="button" className="">
        Trở về mặc định
      </button>
    </section>
  );
};

export default Filters;
