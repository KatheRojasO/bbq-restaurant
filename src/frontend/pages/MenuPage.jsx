import React from "react";
import Hero from "../components/Hero";
import ItemCategory from "../components/ItemCategory";

export default function MenuPage({ state }) {
  const [categoryItems, setCategoryItems] = state;

  // same as AdminPage you are adding 3 lines of code for not using CSS properly
  const Items = categoryItems.map((item) => (
    <>
      <ItemCategory key={item.id} item={item} />
      <hr />
    </>
  ));

  return (
    <div className="menu-page">
      <div className="container">
        <Hero />
        <div className="menu-categories">
          <h1>Our Menu</h1>
          {Items}
        </div>
      </div>
    </div>
  );
}
