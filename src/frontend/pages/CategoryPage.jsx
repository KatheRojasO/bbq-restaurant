import React from "react";
import CategoryProducts from "../components/CategoryProducts";

export default function CategoryPage({ categoryImg, categoryName, menuItems }) {
  const products = menuItems
    .filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    )
    .map((filteredProducts) => (
      <CategoryProducts categoryName={categoryName} products={filteredProducts} />
    ));

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-hero">
          <img src={categoryImg} alt="category-img"></img>
          <h1>{categoryName}</h1>
        </div>
        <div className="product-container">{products}</div>
      </div>
    </div>
  );
}
