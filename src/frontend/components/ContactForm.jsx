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
    <div id="form">
      <form className="form-info">
        <input type="text" placeholder="Full name"/>
        <input type="text" placeholder="Email"/>
        <input type="date" placeholder="Day"/>
        <input type="time" placeholder="Time"/>
        <button>Book a table</button>
      </form>
    </div>
  );
}

// <form className="form-info" onSubmit={(event) => handleSubmit(event)}>
//         <input type="text" placeholder="Full name" onChange={(event) => setName(event.target.value)}/>
//         <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
//         <input type="date" placeholder="Day" onChange={(event) => setDate(event.target.value)} />
//         <input type="time" placeholder="Time" onChange={(event) => setTime(event.target.value)} />
//         <button>Book a table</button>
//       </form>