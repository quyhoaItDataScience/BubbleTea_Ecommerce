import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@mui/material";
import { useCartContext } from "../../context/cart_context";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar/Sidebar";

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
  const { total_items } = useCartContext();

  const toggleSidebar = () => {
    setOpenSideabar(!openSidebar);
  };

  const [openSidebar, setOpenSideabar] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <MenuIcon
          fontSize="large"
          className="menu-icon"
          onClick={toggleSidebar}
        />
        <Link to="/" className="nav__logo">
          {/* <h2 className="nav__logo-text">Tà Tưa</h2> */}
          <img
            src="https://cdn-icons.flaticon.com/png/512/6186/premium/6186255.png?token=exp=1645179659~hmac=a385dca7749e51a28837d049953b4df7"
            alt="logo"
          />
        </Link>
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
              <div className="nav__cart__display__value">{total_items}</div>
            </Link>
          </div>
          <Avatar src="https://avatars.githubusercontent.com/u/42133389?s=48&v=4" />
        </div>
      </div>
      <Sidebar
        navData={nav_data}
        openSidebar={openSidebar}
        toggleSidebar={toggleSidebar}
      />
    </nav>
  );
};

export default Navbar;
