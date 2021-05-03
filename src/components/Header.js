import React from "react";
import "./Home.css";
import Logo4 from "./Images/4.jpg";
import diamond from "./Images/diamond.png";
import SVGwaveW from "./Images/wave_white.svg";

const Header = () => {
  return (
    <div className="first_session">
      <img src={Logo4} alt="" className="bg_img" />
      <div className="content">
        <div className="mini">
          <h2>
            Control your own level of <span></span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
        </div>
        <img src={diamond} alt="Diamond" />
      </div>
      <img src={SVGwaveW} alt="" className="wave" />
      {/* 
        Don't allow your emotions to overpower your intelligence */}
    </div>
  );
};
export default Header;
