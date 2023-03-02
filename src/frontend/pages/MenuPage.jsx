import React from "react";
import ItemMenu from "../components/ItemMenu";

export default function MenuPage({ data }) {
  const Items = data.map((item) => <ItemMenu key={item.id} item={item} />);
  return (
    <div>
      <h2> Items Created: </h2>
      {Items}
    </div>
  );
}
