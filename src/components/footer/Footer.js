import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img
            src="https://cdn-icons.flaticon.com/png/512/6186/premium/6186255.png?token=exp=1645179659~hmac=a385dca7749e51a28837d049953b4df7"
            alt="logo"
          />
        </div>
        <div className="footer__company">
          <div className="footer__title">Công ty</div>
          <ul className="footer__list">
            <li className="footer__list__item">
              Địa chỉ:{" "}
              <a href="https://www.facebook.com/profile.php?id=100019002255780">
                Facebook
              </a>
            </li>
            <li className="footer__list__item">
              Email:{" "}
              <a href="https://www.facebook.com/profile.php?id=100019002255780">
                Facebook
              </a>
            </li>
            <li className="footer__list__item">
              Facebook:{" "}
              <a href="https://www.facebook.com/profile.php?id=100019002255780">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__about">
          <div className="footer__title">về chúng tôi</div>
          <ul className="footer__list">
            <li className="footer__list__item">giới thiệu</li>
            <li className="footer__list__item">ưu đãi</li>
            <li className="footer__list__item">cửa hàng</li>
            <li className="footer__list__item">Quy định</li>
          </ul>
        </div>
        <div className="footer__policy">
          <div className="footer__title">chính sách</div>
          <ul className="footer__list">
            <li className="footer__list__item">chính sách</li>
            <li className="footer__list__item">hình thức thanh toán</li>
            <li className="footer__list__item">Đổi trả</li>
            <li className="footer__list__item">Hoàn tiền</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
