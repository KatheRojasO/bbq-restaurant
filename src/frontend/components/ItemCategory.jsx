import React from "react";
import { Link } from "react-router-dom";

export default function ItemCategory({ item }) {
  const { id, name, image, alt, description, invert } = item;
  
  return (
    <article className="item-category">
      <Link to={`/${name}`}>
        <div className="container">
          <li
            className={invert ? "menu-option-right" : "menu-option-left"}
            key={id}
          >
            <img className="category-img" src={image} alt={alt} />
            <div className="category-description">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </li>
        </div>
      </Link>
    </article>
  );
}
