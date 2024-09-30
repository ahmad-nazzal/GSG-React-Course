const products = [
  { name: "MobilePhone", category: "Electronics", price: 700 },
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "T-shirt", category: "Clothing", price: 20 },
  { name: "Jeans", category: "Clothing", price: 30 },
  { name: "Blue-Channel", category: "Perfurms", price: 70 },
  { name: "Victorioso", category: "Perfurms", price: 20 },
];

const productDisplay = document.getElementById("productDisplay");
const filterSection = document.getElementById("filter-section");

function displayProducts(filteredProducts) {
  productDisplay.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
          <h2>${product.name}</h2>
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
      `;
    productDisplay.appendChild(productCard);
  });
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(
      (product) => product.category === category
    );
    displayProducts(filtered);
  }
}

const uniqueCategories = new Set();

products.forEach((product) => {
  uniqueCategories.add(product.category);
});

uniqueCategories.forEach((category) => {
  let button = document.createElement("button");
  button.textContent = category;
  button.classList.add("filter-btn");
  button.setAttribute("data-category", category);
  filterSection.appendChild(button);
});

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    filterProducts(category);
  });
});

displayProducts(products);
