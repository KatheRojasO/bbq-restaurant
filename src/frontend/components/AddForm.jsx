import React, { useState } from "react";

export default function AddForm({ options, onCreateItem }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [servedWith, setServedWith] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    const itemObject = {
      name: name,
      description: description,
      price: price,
      servedWith: servedWith,
      image: imageURL,
      category: category,
    };
    onCreateItem(itemObject);
    setFormSubmit(true)
  }

  return (
    <form className="add-form" onSubmit={(event) => onSubmit(event)}>
      <div className="form-title">
        <h3>Add a new plate to Hot Grill page:</h3>
      </div>
      <div className="message">
        <p>{formSubmit && "The product was created succesfully "}</p>
      </div>
      <div className="form-inputs">
        <label className="add-form-label">
          Product name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="add-form-label">
          Product description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label className="add-form-label">
          Served with:
          <input
            type="text"
            value={servedWith}
            onChange={(event) => setServedWith(event.target.value)}
          />
        </label>
        <label className="add-form-label">
          Price:
          <input
            type="number"
            value={price}
            min="1"
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <label className="add-form-label">
          Image link:
          <input
            type="text"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
        </label>
        <label for="category-select" className="add-form-label">
          Category:
          <select name="categories" id="category-select" onChange={(event) => setCategory(event.target.value)}>
            <option value="">--Please choose a category-</option>
            {options}
          </select>
        </label>
      </div>
      <div className="form-button">
        <button className="add-button">Add item</button>
      </div>
    </form>
  );
}

{/* <input
  type="text"
  value={category}
  onChange={(event) => setCategory(event.target.value)}
/>; */}
