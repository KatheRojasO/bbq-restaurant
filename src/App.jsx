import React, { useEffect, useState } from "react";
import { readDocuments } from "./backend/scripts/firestore";
import MenuPage from "./frontend/pages/MenuPage";

export default function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData(collectionName) {
      const data = await readDocuments(collectionName).catch(onFail);
      onSuccess(data);
    }
    loadData("pork");
  }, []);

  function onSuccess(data) {
    setData(data);
    setStatus(1);
  }
  function onFail() {
    setStatus(2)
  }

  return (
    <div>
      <h1>Admin interface</h1>
      
      {status === 0 && <p>Loading...⏱️</p>}
      {status === 1 && <MenuPage data={data} />}
      {status === 2 && <p>Error...❌</p>}
    </div>
  );
}
