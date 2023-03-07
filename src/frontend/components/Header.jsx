import React from "react";
import img from "../assets/images/logo.png";

export default function Header() {
  return (
    <nav>
      <div className="container">
        <img src={img} alt="logo-hot-grill" />
        <div className="navbar-buttons">
          <button>Our Menu</button>
          <button>Contact us</button>
        </div>
      </div>
    </nav>
  );
}
