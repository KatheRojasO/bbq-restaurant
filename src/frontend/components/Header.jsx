import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/logo.png";

export default function Header() {
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <img src={img} alt="logo-hot-grill" />
        </Link>
        <div className="navbar-buttons">
          <Link to="/menu">
            <button>Our Menu</button>
          </Link>
          <Link to="/contact">
            <button>Contact us</button>
          </Link>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faUserCircle} color="white" size="2x" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
