import React from "react";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <section className="product-display">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
