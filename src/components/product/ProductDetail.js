import React from "react";
import "./productDetail.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../button/Button";
import AmountButtons from "../amountButtons/AmountButtons";
import AddToCart from "../addToCart/AddToCart";

const ProductDetail = ({ id, img, name, price, displayProductDetails }) => {
  return (
    <div className="overlay">
      <div className="product-details">
        <CloseIcon className="close-icon" onClick={displayProductDetails} />
        <div className="product-details__img">
          <img src={img} alt={name} />
        </div>
        <div className="product-details__content">
          <h2 className="product-details__title">{name}</h2>
          <p className="product-details__price">{price}</p>
          <p className="product-details__desc">
            Được làm từ trái dâu tằm tự nhiên, không sử dụng phẩm màu và hương
            liệu tổng hợp nên Dâu tằm kem phô mai hội tụ trọn vẹn hương vị thuần
            khiết nông sản Việt, giữ được màu sắc, hương vị nguyên bản của trái
            dâu tằm. Vị chát ngọt của trà kết hợp với vị chua ngọt từ mứt dâu
            tằm, hoà quyện cùng một chút ngậy ngậy của kem phô mai chắc chắn sẽ
            mang đến một hành trình trải nghiệm hoàn toàn mới lạ cho vị giác của
            bạn.
          </p>
          <div className="product-details__btns">
            <AmountButtons id={id} />
            <AddToCart id={id} />
          </div>
          <div className="product-details__categories">
            <p>Danh mục</p>
            <span className="product-details__category">chè</span>
            <span className="product-details__category">trà sữa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
