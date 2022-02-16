import React, { useContext, useState } from "react";
import "./product.scss";
import Button from "../button/Button";
import ProductDetail from "./ProductDetail";

const Product = ({ id, name, img, price }) => {
  const [isClicked, setIsClicked] = useState(false);

  const displayProductDetails = (id) => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="product">
      <div className="product__img">
        <img src={img} alt={name} />
      </div>
      <div className="product__info">
        <h3 className="product__info__name">{name}</h3>
        <p className="product__info__price">{price}</p>
        {/* <div className="product__info__details">Details</div> */}
        <Button className="btn-details" onClick={displayProductDetails}>
          xem chi tiết
        </Button>
      </div>
      {isClicked && (
        <ProductDetail
          id={id}
          name={name}
          img={img}
          price={price}
          displayProductDetails={displayProductDetails}
        />
      )}
    </div>
  );
};

export default Product;
