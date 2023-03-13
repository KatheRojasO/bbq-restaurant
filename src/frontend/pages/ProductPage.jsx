import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductPage({ menuItems }) {
  const navigate = useNavigate();
  const params = useParams();

  const productInfo = menuItems.find((product) => product.id === params.id);

  return (
    <div className="product-page">
      <div className="container">
        <img src={productInfo.image} alt="product-img" />
        <div className="product-price">
          {/* double H1 */}
          <h1>{productInfo.name}</h1>
          <h1>{productInfo.price}:-</h1>
        </div>
        <p>{productInfo.description}</p>
        <h1>Served with:</h1>
        <p>{productInfo.servedWith}</p>
      </div>
      <div className="button-container">
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}
