import React, { useState } from "react";
import Modal from "./Modal";

export default function ItemMenu({ item, onUpdateItem ,onDeleteItem }) {

    const { id, name, image, alt, price, description, servedWith } = item;

    const [isOpen, setIsOpen] = useState(false);
    
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
          <button onClick={() => setIsOpen(true)}>Modify</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} item={item} onUpdateItem={onUpdateItem}>Fancy Modal</Modal>
          <button onClick={() => onDeleteItem(id)}>Delete</button>
        </ul>
      </article>
    </div>
  );
}
