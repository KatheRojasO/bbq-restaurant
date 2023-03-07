import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/logo.png";

export default function Header() {
  return (
    <nav>
      <div className="container">
        <img src={img} alt="logo-hot-grill" />
        <div className="navbar-buttons">
          <Link to="/menu">
            <button>Our Menu</button>
          </Link>
          <Link to="/contact">
            <button>Contact us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
