import React from "react";
import { Link } from "react-router-dom";

export default function CategoryProducts({ categoryName, products }) {
  const { id, name, image, price, description } = products;

  const productUrl = `/${categoryName}/${id}`;

  return (
    <article className="category-products">
      <Link to={productUrl}>
        <div className="container">
          <ul className="list" key={id}>
            <li className="list-item-img">
              <img src={image} alt={name} />
            </li>
            <div className="list-header">
              <li className="list-item-name">{name}</li>
              <li className="list-item-price">{price}:-</li>
            </div>
            <li className="list-item-description">{description}</li>
          </ul>
          <hr />
        </div>
      </Link>
    </article>
  );
}
