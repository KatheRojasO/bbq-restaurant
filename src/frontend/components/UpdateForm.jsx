import React, { useState } from "react";

export default function UpdateForm({ onClick, onUpdateItem, item }) {
  const { id } = item;
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [servedWith, setServedWith] = useState(item.servedWith);
  const [price, setPrice] = useState(item.price);
  const [imageURL, setImageURL] = useState(item.imageURL);
  const [category, setCategory] = useState(item.category);

  function onSubmit(event) {
    event.preventDefault();

    const itemObject = {
      id: id,
      name: name,
      description: description,
      price: price,
      servedWith: servedWith,
      image: imageURL,
      category: category,
    };
    onUpdateItem(itemObject);
  }

  return (
    <form className="update-form" onSubmit={(event) => onSubmit(event)}>
      <div className="form-title">
        <h3>Update info:</h3>
      </div>
      <div className="form-inputs">
        <label>
          Product name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Product description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Served with:
          <input
            type="text"
            value={servedWith}
            onChange={(event) => setServedWith(event.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            min="1"
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <label>
          Image link:
          <input
            type="text"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
      </div>
      <div className="form-button">
        <button>Update item</button>
      </div>
    </form>
  );
}
