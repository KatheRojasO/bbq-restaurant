import React, { useState } from "react";
import Modal from "./Modal";

export default function ItemMenu({ item, onUpdateItem, onDeleteItem }) {
  const { id, name, image, alt, price, description, servedWith } = item;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="item-menu">
      <div className="container">
        <ul className="list">
          <li className="list-item-img">
            <img src={image} alt={alt} />
          </li>
          <div className="list-header">
            <li className="list-item-name">{name}</li>
            <li className="list-item-price">{price}:-</li>
          </div>
          <li className="list-item-description">{description}</li>
          <li className="list-item-servedWith">
            <b>Served with: </b>
            {servedWith}
          </li>
          <div className="list-buttons">
            <button onClick={() => setIsOpen(true)}>Modify</button>
            <Modal
              open={isOpen}
              onClose={() => setIsOpen(false)}
              item={item}
              onUpdateItem={onUpdateItem}
            />
            <button onClick={() => onDeleteItem(id)}>Delete</button>
          </div>
        </ul>
      </div>
    </article>
  );
}
