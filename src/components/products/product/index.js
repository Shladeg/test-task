import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Product = ({
  productSlug,
  productImage,
  productCategory,
  productTitle,
  productContent,
  productPrice
}) => {
  return (
    <div className="product">
      <Link className="poduct-link" to={`/product-description/${productSlug}`}>
        <img className="product-image" src={productImage} alt="product-img" />
        <div className="product-info">
          <p className="product-category">{productCategory}</p>
          <h3 className="product-title">{productTitle}</h3>
          <p className="product-content">{productContent.substr(0, 60)}</p>
          <p className="product-price">{productPrice}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
