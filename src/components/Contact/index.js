import React, { useState } from "react";
import style from "./Contact.module.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className={style.contact} id="contact">
      <div className={style.left}>
        <img src="asssets/shake.svg" alt="" />
      </div>
      <div className={style.right}>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
