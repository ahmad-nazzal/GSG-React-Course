import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

const App = () => {
  const productsData = [
    { name: "MobilePhone", category: "Electronics", price: 700 },
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "T-shirt", category: "Clothing", price: 20 },
    { name: "Jeans", category: "Clothing", price: 30 },
    { name: "Blue-Channel", category: "Perfurms", price: 70 },
    { name: "Victorioso", category: "Perfurms", price: 20 },
  ];
  const uniqueCategories = new Set();

  productsData.forEach((product) => {
    uniqueCategories.add(product.category);
  });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? productsData
      : productsData.filter((product) => product.category === activeFilter);

  return (
    <>
      <div>
        <div className="header">
          <h1>Product List</h1>
        </div>
        <div className="filter-section">
          <button className="filter-btn" onClick={() => setActiveFilter("All")}>
            All
          </button>
          {[...uniqueCategories].map((category) => (
            <button
              className="filter-btn"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <ProductList products={filteredProducts} />
      </div>
      <footer className="footerStyle">
        <p>
          Developed by <strong>Ahmad Nazzal</strong> &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <p>
          Follow me on:
          <a
            href="https://github.com/ahmad-nazzal"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/ahmad-nazzal-b21143265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
