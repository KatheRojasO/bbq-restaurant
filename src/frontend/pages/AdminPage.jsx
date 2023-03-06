import React from "react";
import {
  createDocument,
  deleteDocument,
  updateDocument,
} from "../../backend/scripts/firestore";
import img from "../assets/images/logo.png";
import AddForm from "../components/AddForm";
import ItemMenu from "../components/ItemMenu";

export default function MenuPage({ state }) {
  const [menuItems, setMenuItems] = state;

  const Items = menuItems.map((item) => (
    <>
      <ItemMenu
        key={item.id}
        item={item}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
      />
      <hr />
    </>
  ));

  async function onCreateItem(itemObject) {
    //Here we upload to the database
    const documentId = await createDocument("menuItems", itemObject);
    const newItem = { id: documentId, ...itemObject };
    const result = [...menuItems, newItem];
    setMenuItems(result);
  }

  async function onUpdateItem(itemObject) {
    const clonedMenuItems = [...menuItems];
    const itemIndex = clonedMenuItems.findIndex(
      (item) => item.id === itemObject.id
    );
    await updateDocument("menuItems", itemObject);
    clonedMenuItems[itemIndex] = itemObject;
    setMenuItems(clonedMenuItems);
  }

  async function onDeleteItem(id) {
    const clonedMenuItems = [...menuItems];
    const itemIndex = clonedMenuItems.findIndex((item) => item.id === id);
    await deleteDocument("menuItems", id);
    clonedMenuItems.splice(itemIndex, 1);
    setMenuItems(clonedMenuItems);
  }

  return (
    <div className="admin-page">
      <div className="container">
        <div className="dashboard-header">
          <img src={img} alt="logo"></img>
          <h1>Hot Grill Dashboard</h1>
        </div>
        <h2>Welcome, admin!</h2>
        <AddForm onCreateItem={onCreateItem} />
        {Items}
      </div>
    </div>
  );
}
