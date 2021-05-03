import React from "react";
import "../Home.css";
import SVGwaveB from "../Images/wave_black.svg";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="sixth_session" id="contact">
      <h2>Contact me</h2>
      <ContactCard />
      <img src={SVGwaveB} alt="" className="wave" />
    </div>
  );
};

export default Contact;
