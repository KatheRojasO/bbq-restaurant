import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { readDocuments } from "./backend/scripts/firestore";
import "./frontend/styles/styles.css";
import AdminPage from "./frontend/pages/AdminPage";
import Header from "./frontend/components/Header";
import Footer from "./frontend/components/Footer";
import HomePage from "./frontend/pages/HomePage";
import MenuPage from "./frontend/pages/MenuPage";
import ContactPage from "./frontend/pages/ContactPage";
import CategoryPage from "./frontend/pages/CategoryPage";
import ProductPage from "./frontend/pages/ProductPage";

// naming: This is not a -1 points or something but is easier to rename the folders backend and frontend to admin and customer
// folder inside folder, the backend foldr only exist to hold the folder firebase. A js folder inside src was more than enought 
export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]); // notice that this will show all the products of all categories, it will get messy really fast
  const [status, setStatus] = useState(0);

  // doing a double loading is a sign that this can be refactor/broken down into 2 loading pages
  useEffect(() => {
    async function loadItemsData(collectionName) {
      const data = await readDocuments(collectionName).catch(onFail);
      setMenuItems(data);
      onSuccess(data);
    }
    async function loadCategoryData(collectionName) {
      const categoryData = await readDocuments(collectionName).catch(onFail);
      setCategoryItems(categoryData);
      onSuccess(categoryData);
    }
    loadItemsData("menuItems");
    loadCategoryData("categories");
  }, []);

  function onSuccess() {
    setStatus(1);
  }
  function onFail() {
    setStatus(2);
  }

  const categoryRoute = categoryItems.map((itemName) => (
    <Route
      path={`/${itemName.name}`}
      element={
        <CategoryPage
          categoryImg={itemName.image}
          categoryName={itemName.name}
          menuItems={menuItems}
        />
      }
    />
  ));

  const productRoute = categoryItems.map((itemName) => (
    <Route
      path={`/${itemName.name}/:id`}
      element={<ProductPage menuItems={menuItems} />}
    />
  ));

  // nesting -1, what happened here?
  // just by the look, you should have stopped and refactored
  return (
    <div className="App">
      <BrowserRouter>
        {status === 0 && <p>Loading...⏱️</p>}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            element={<MenuPage state={[categoryItems, setCategoryItems]} />}
          />
          {categoryRoute}
          {productRoute}
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/dashboard"
            element={
              status === 1 && (
                <AdminPage
                  categoryItems={categoryItems}
                  state={[menuItems, setMenuItems]}
                />
              )
            }
          />
        </Routes>
        {status === 2 && <p>Error...❌</p>}
      </BrowserRouter>
      <Footer />
    </div>
  );
}
