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
  );
};

export default App;
