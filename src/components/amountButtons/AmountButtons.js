import React from "react";
import "./amountButtons.scss";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useProductsContext } from "../../context/products_context";

const AmountButtons = ({ id }) => {
  const { products, toggleAmount } = useProductsContext();
  console.log(id);
  const product = products.find((product) => product.id === id);
  const { amount } = product;

  const increaseAmount = () => {
    toggleAmount(id, "inc");
  };

  const decreaseAmount = () => {
    console.log("toggle amount");
    toggleAmount(id, "dec");
  };

  return (
    <div className="amount-buttons">
      <button
        type="button"
        className="amount-buttons__increase"
        onClick={decreaseAmount}
      >
        <RemoveOutlinedIcon fontSize="large" />
      </button>

      <span className="amount-buttons__amount">{amount}</span>

      <button
        type="button"
        className="amount-buttons__decrease"
        onClick={increaseAmount}
      >
        <AddOutlinedIcon fontSize="large" />
      </button>
    </div>
  );
};

export default AmountButtons;
