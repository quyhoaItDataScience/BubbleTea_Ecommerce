import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const nav_data = [
    {
      name: "trang chủ",
      to: "/",
    },
    {
      name: "giới thiệu",
      to: "/about",
    },
    {
      name: "sản phẩm",
      to: "/products",
    },
  ];
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__logo">
          <h2 className="nav__logo-text">Tà Tưa</h2>
        </div>
        <div className="nav__links">
          {nav_data.map((item, idx) => {
            return (
              <Link to={item.to} key={idx} className="nav__links__link">
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
