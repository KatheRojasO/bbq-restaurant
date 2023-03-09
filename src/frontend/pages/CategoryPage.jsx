import React from "react";
import CategoryProducts from "../components/CategoryProducts";
import Hero from "../components/Hero";

export default function CategoryPage({ categoryImg, categoryName, menuItems }) {
  const products = menuItems
    .filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    )
    .map(filteredProducts => <CategoryProducts products={filteredProducts}/>);

  return (
    <div className="category-page">
      <div className="container">
        <h1>CategoryPage</h1>
        {products}
      </div>
    </div>
  );
}
