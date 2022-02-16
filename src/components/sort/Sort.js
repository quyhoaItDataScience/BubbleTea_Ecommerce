import React from "react";
import "./sort.scss";

const Sort = () => {
  return (
    <section className="sort">
      <p className="sort__result">Có 8 kết quả</p>
      <form>
        <select>
          <option name="sort" value="theo chữ cái a-z">
            theo chữ cái a-z
          </option>
          <option name="sort" value="theo chữ cái z-a">
            theo chữ cái z-a
          </option>
          <option name="sort" selected value="theo giá từ thấp đến cao">
            theo giá từ thấp đến cao
          </option>
          <option name="sort" value="theo giá từ cao đến thấp ">
            theo giá từ cao đến thấp
          </option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
