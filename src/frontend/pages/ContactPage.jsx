import React from "react";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="info-table">
          <h1>Opening times</h1>
          <p>Tuesday to Sunday 11.00 - 21.00</p>
          <hr />
          <h1>Book a table</h1>
          <ContactForm />
          <hr />
        </div>
        <div className="location">
          <h1>Address</h1>
          <p>Klara Norra kyrkogata 26, 111 22</p>
          <p>Stockholm, Sweden</p>
          <Map />
        </div>
      </div>
    </div>
  );
}
