import React from "react";

export default function CategoryProducts({ products }) {
  const { id, name, image, price, description, servedWith } = products;

  return (
    <article className="category-products">
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
        <hr/>
      </div>
    </article>
  );
}
