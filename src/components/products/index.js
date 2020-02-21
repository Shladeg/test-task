import React from "react";
import { useEffect, useState } from "react";

import Product from "./product/index";

import "./index.css";
import { useParams } from "react-router-dom";

const Products = props => {
  const [products, setProducts] = useState([]);
  const { slug } = useParams();

  const fetchData = async () => {
    const category = slug ? `?category=${slug}` : "";
    const data = await fetch(
      `https://admin.optograd.by/api/products/${category}`
    );
    const { results } = await data.json();
    setProducts(results);
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  return (
    <div className="content">
      <div className="products">
        {products.map(item => (
          <Product
            key={item.slug}
            productImage={item.ogImage}
            productCategory={item.category}
            productTitle={item.title}
            productContent={item.content}
            productPrice={item.price}
            productSlug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
