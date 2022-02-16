import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__img1">
          <div className="about__img1__content">
            <h2 className="about__img1__content__sub">Trà sữa QH Story</h2>
            <h1 className="about__img1__content__title">Về chúng tôi</h1>
            <p className="about__img1__content__desc">
              {" "}
              Bên cạnh niềm tự hào về những ly trà sữa ngon – sạch – tươi, chúng
              tôi luôn tự tin mang đến khách hàng những trải nghiệm tốt nhất về
              dịch vụ và không gian.
            </p>
          </div>
        </div>
        <div className="about__img2">
          <div className="about__img2__content">
            <h2 className="about__img2__content__sub">
              Trà sữa QH mang đến điều gì?
            </h2>
            <h1 className="about__img2__content__title">Sứ mệnh</h1>
            <div className="about__img2__content__desc">
              Mục đích duy nhất của chúng tôi chính là giúp cho các cặp tình
              nhận, những cặp đôi mới nở có cơ hội để cùng chia sẻ với nhau qua
              những ly trân châu ngọt dịu này.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
