import React from "react";
import { useFiltersContext } from "../../context/filters_context";
import "./sort.scss";

const Sort = () => {
  const { updateSort, sort, filtered_products } = useFiltersContext();

  return (
    <section className="sort">
      <p className="sort__result">Có {filtered_products.length} kết quả</p>
      <form>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="name a-z">theo chữ cái a-z</option>
          <option value="name z-a">theo chữ cái z-a</option>
          <option value="low-to-high">theo giá từ thấp đến cao</option>
          <option value="high-to-low">theo giá từ cao đến thấp</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
