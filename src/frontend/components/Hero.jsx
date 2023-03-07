import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-items">
          <h1>HOT GRILL</h1>
          <h2>Your BBQ. How you want it.</h2>
          <Link to="/menu">
            <button>Check our menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
