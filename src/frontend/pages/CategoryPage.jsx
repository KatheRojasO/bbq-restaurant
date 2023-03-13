import React from "react";
import CategoryProducts from "../components/CategoryProducts";

export default function CategoryPage({ categoryImg, categoryName, menuItems }) {
  // this works but is confusing, you can break it down into a constant that do the filter and then another for the map
  const products = menuItems
    .filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    )
    .map((filteredProducts) => (
      <CategoryProducts
        categoryName={categoryName}
        products={filteredProducts}
      />
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
