import React, { useEffect, useState } from "react";
import "./frontend/styles/styles.css"
import { readDocuments } from "./backend/scripts/firestore";
import AdminPage from "./frontend/pages/AdminPage";

export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData(collectionName) {
      const data = await readDocuments(collectionName).catch(onFail);
      onSuccess(data);
    }
    loadData("menuItems");
  }, []);

  function onSuccess(data) {
    setMenuItems(data);
    setStatus(1);
  }
  function onFail() {
    setStatus(2);
  }

  return (
    <div>
      {status === 0 && <p>Loading...⏱️</p>}
      {status === 1 && <AdminPage state={[menuItems, setMenuItems]}/>}
      {status === 2 && <p>Error...❌</p>}
    </div>
  );
}
