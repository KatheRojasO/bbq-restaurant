import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingObject = {
      name: name,
      email: email,
      date: date,
      time: time
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        bookingObject,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      event.target.reset();
      setFormSubmit(true)
  };

  return (
    <form className="contact-form" onSubmit={(event) => handleSubmit(event)}>
      <div className="message">
        <p>{formSubmit && "We received your booking. See you soon!"}</p>
      </div>
      <div className="form-inputs">
        <label className="add-form-label">
          Full name:
          <input type="text" onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="add-form-label">
          Email:
          <input type="email"  onChange={(event) => setEmail(event.target.value)}  />
        </label>
        <label className="add-form-label">
          Date:
          <input type="date" min="2023-01" onChange={(event) => setDate(event.target.value)} />
        </label>
        <label className="add-form-label">
          Time:
          <input type="time" min="11:00" max="21:00" onChange={(event) => setTime(event.target.value)}  />
        </label>
      </div>
      <div className="form-button">
        <button className="book-button">Book a table</button>
      </div>
    </form>
  );
}