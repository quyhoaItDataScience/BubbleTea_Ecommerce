import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@mui/material";

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
        <div className="nav__cart">
          <div className="nav__cart__display">
            <Link to="/cart">
              <ShoppingCartIcon className="nav__cart__icon" />
              <div className="nav__cart__display__value">0</div>
            </Link>
          </div>
          <Avatar src="https://avatars.githubusercontent.com/u/42133389?s=48&v=4" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
