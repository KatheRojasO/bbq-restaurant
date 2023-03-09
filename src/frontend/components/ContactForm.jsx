import React, { useState } from "react";
// import emailjs from "emailjs-com";

export default function Form() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     const bookingObject = {
  //       name: name,
  //       email: email,
  //       date: date,
  //       time: time
  //     };

  //     emailjs.sendForm(
  //       process.env.REACT_APP_EMAILJS_SERVICE_ID,
  //       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  //       bookingObject.current,
  //       process.env.REACT_APP_EMAILJS_USER_ID
  //     );
  //     event.target.reset();
  //   };

  return (
    <form className="contact-form">
      <div className="form-inputs">
        <label className="add-form-label">
          Full name:
          <input type="text" />
        </label>
        <label className="add-form-label">
          Email:
          <input type="email" />
        </label>
        <label className="add-form-label">
          Date:
          <input type="date" min="2023-01" />
        </label>
        <label className="add-form-label">
          Time:
          <input type="time"  min="11:00" max="21:00" />
        </label>
      </div>
      <div className="form-button">
        <button className="book-button">Book a table</button>
      </div>
    </form>
  );
}

// <form className="form-info" onSubmit={(event) => handleSubmit(event)}>
//         <input type="text" placeholder="Full name" onChange={(event) => setName(event.target.value)}/>
//         <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
//         <input type="date" placeholder="Day" onChange={(event) => setDate(event.target.value)} />
//         <input type="time" placeholder="Time" onChange={(event) => setTime(event.target.value)} />
//         <button>Book a table</button>
//       </form>

