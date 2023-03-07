// import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { readDocuments } from "./backend/scripts/firestore";
import "./frontend/styles/styles.css";
// import AdminPage from "./frontend/pages/AdminPage";
import Header from "./frontend/components/Header";
import Footer from "./frontend/components/Footer";
import HomePage from "./frontend/pages/HomePage";
import MenuPage from "./frontend/pages/MenuPage";
import ContactPage from "./frontend/pages/ContactPage";

export default function App() {
  // const [menuItems, setMenuItems] = useState([]);
  // const [status, setStatus] = useState(0);

  // useEffect(() => {
  //   async function loadData(collectionName) {
  //     const data = await readDocuments(collectionName).catch(onFail);
  //     onSuccess(data);
  //   }
  //   loadData("menuItems");
  // }, []);

  // function onSuccess(data) {
  //   setMenuItems(data);
  //   setStatus(1);
  // }
  // function onFail() {
  //   setStatus(2);
  // }

  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Routes>
          <Route path="/menu" element={<MenuPage/>}/>
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>

      {/* {status === 0 && <p>Loading...⏱️</p>}
      {status === 1 && <AdminPage state={[menuItems, setMenuItems]} />}
      {status === 2 && <p>Error...❌</p>} */}
    </div>
  );
}
