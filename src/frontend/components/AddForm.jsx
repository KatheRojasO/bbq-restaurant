import React, { useState } from "react";

export default function AddForm({onCreateItem}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [servedWith, setServedWith] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState(""); 
  const [category, setCategory] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    const itemObject = {
        name:name,
        description: description,
        price: price,
        servedWith: servedWith,
        image: imageURL,
        category: category,
    };
    onCreateItem(itemObject)
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h3>Add a new plate to Hot Grill page:</h3>
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
      <button>Add item</button>
    </form>
  );
}
