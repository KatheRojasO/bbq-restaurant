import React from "react";
import { createDocument } from "../../backend/scripts/firestore";
import Formulary from "../components/Formulary";
import ItemMenu from "../components/ItemMenu";

export default function MenuPage({ state }) {
  const [menuItems, setMenuItems] = state;

  const Items = menuItems.map((item) => <ItemMenu key={item.id} item={item} />);

  async function onCreateItem(data) {
    //Here we upload to the database
    const documentId = await createDocument("menuItems", data);
    const newItem = { id: documentId, ...data };
    const result = [...menuItems, newItem]
    setMenuItems(result);
  }

  return (
    <div>
      <h2> Products Created: </h2>
      <Formulary onCreateItem={onCreateItem} />
      {Items}
    </div>
  );
}
