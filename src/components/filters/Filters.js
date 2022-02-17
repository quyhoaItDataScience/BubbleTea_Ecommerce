import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useFiltersContext } from "../../context/filters_context";
import { useProductsContext } from "../../context/products_context";
import { getUniqueValues } from "../../utilities/helper";
import Button from "../button/Button";
import "./filters.scss";

const Filters = () => {
  const location = useLocation();
  const { pathname } = location;
  const { products } = useProductsContext();
  const {
    all_products,
    filters: { text, price, category, min_price, max_price },
    updateFilters,
    clearFilters,
  } = useFiltersContext();

  const categories = getUniqueValues(all_products, "category");

  return (
    <section className="filters">
      <Link to="/" className="filters__directory">
        <span>Trang chủ</span> {pathname}
      </Link>
      <form>
        <div className="filters__categories">
          <div className="filters__form-control">
            <label htmlFor="search">Tìm kiếm</label>
            <input
              name="text"
              type="text"
              id="search"
              placeholder="Tìm trà sữa"
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div className="filters__form-control">
            <h2 className="filters__category">danh mục sản phẩm</h2>
            <ul className="filters__category__list">
              {categories.map((c, idx) => {
                return (
                  <li
                    key={idx}
                    className={`filters__category__list__item ${
                      c === category ? "active" : null
                    }`}
                    value={idx}
                    onClick={updateFilters}
                  >
                    {c}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="filters__form-control">
          <h2 className="filters__price-title">chọn theo giá</h2>
          <input
            name="price"
            type="range"
            id="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
            className="filters__price__input"
          />
          <p className="filters__price">Giá: {`${min_price}-${price}`} </p>
        </div>
        <Button className="btn-add" onClick={clearFilters}>
          trở về mặc định
        </Button>
      </form>
    </section>
  );
};

export default Filters;
