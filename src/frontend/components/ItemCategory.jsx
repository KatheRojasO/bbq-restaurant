import React from "react";

export default function ItemCategory({ item }) {
  const { id, name, image, alt, description, invert } = item;
  console.log(item)
  return (
    <article className="item-category">
      <div className="container">
        <li
          className={invert? "menu-option-right" : "menu-option-left"}
          key={id}
        >
          <img className="category-img" src={image} alt={alt} />
          <div className="category-description">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </li>
      </div>
    </article>
  );
}

{
  /* <article className="item-category">
          <div className="container">
            <ul className="list">
              <li className="item-img">
                <img src={image} alt={alt} />
              </li>
              <div className="list-header">
                <li className="list-item-name">{name}</li>
              </div>
              <li className="list-item-description">{description}</li>
            </ul>
          </div>
        </article>
      ); */
}
