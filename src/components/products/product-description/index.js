import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./index.css";

const ProductDescription = () => {
  let { productSlug } = useParams();

  const [product, setProduct] = useState(undefined);

  const fetchData = async () => {
    const data = await fetch(
      `https://admin.optograd.by/api/products/${productSlug}/`
    );
    const res = await data.json();
    setProduct(res);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSlug]);

  if (!product) {
    return <>not found</>;
  }

  return (
    <div className="content">
      <div className="product-description">
        <img src={product.ogImage} alt="product-img" />
        <div className="product-description__info">
          <h3>{product.title}</h3>
          <p>{product.content}</p>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
