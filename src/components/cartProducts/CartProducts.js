import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "./cartProduct/CartProduct";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";

import "./cartProducts.scss";
import { useCartContext } from "../../context/cart_context";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: "#f73378",
  "&:hover": {
    backgroundColor: "#be004d",
  },
  textTransform: "capitalize",
  fontSize: "1.6rem",
  borderRadius: "20px",
  fontWeight: "600",
}));

const CartProducts = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <div className="cart-products">
      {/* CartProduct */}
      <div className="cart-products__list">
        <h3 className="cart-products__item">sản phẩm</h3>
        <h3 className="cart-products__item">giá</h3>
        <h3 className="cart-products__item">số lượng</h3>
        <h3 className="cart-products__item">tổng giá</h3>
      </div>
      {cart?.map((item, idx) => (
        <CartProduct key={idx} cartItem={item} />
      ))}
      <div className="cart-products__btns">
        {/* continue to shop */}
        <Link to="/products">
          <ColorButton
            variant="contained"
            onClick={(e) => {
              console.log("continue to shop");
            }}
          >
            tiếp tục mua
          </ColorButton>
        </Link>
        <ColorButton variant="contained" onClick={clearCart}>
          xóa giỏ hàng
        </ColorButton>
        {/* clear cart  */}
      </div>
    </div>
  );
};

export default CartProducts;
