import React from "react";
import Button from "../button/Button";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__sub">Trà sữa QH</h2>
        <h1 className="hero__title">Trà sữa của tình yêu</h1>
        <p className="hero__desc">
          Với sứ mệnh mang tới niềm vui và hạnh phúc, Trà Sữa QH hy vọng sẽ tạo
          nên một nét văn hóa giải trí bên cạnh ly trà sữa Ngon – sạch – tươi.
        </p>
        <div className="hero__btns">
          <Button>tìm hiểu thêm</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
