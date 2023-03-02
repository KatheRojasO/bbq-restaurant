import React from "react";

export default function ItemMenu({ item }) {

    const { name, image, alt, price, description, servedWith } = item;
  return (
    <div>
      <article>
        <h3>{name}</h3>
        <ul>
          <li>
            <img src={image} alt={alt} />
          </li>
          <li>{price}:-</li>
          <li>{description}</li>
          <li>{servedWith}</li>
        </ul>
      </article>
    </div>
  );
}
