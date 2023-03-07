import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import data from "../json/mainpage.json";

export default function HomePage() {
  const items = data.info.map((item) => (
    <li
      className={item.invert ? "menu-option-right" : "menu-option-left"}
      key={item.id}
    >
      <img className="description-img" src={item.image} alt="options" />
      <div className="description">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <Link to={item.href}>
          <button>{item.text}</button>
        </Link>
      </div>
    </li>
  ));

  return (
    <div className="home-page">
      <div className="container">
        <Hero />
        {items}
      </div>
    </div>
  );
}
