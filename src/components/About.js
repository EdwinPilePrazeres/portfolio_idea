import React from "react";
import './Home.css'
import SVGwaveW from "./Images/wave_white.svg";

const About = () => {
  return (
    <div className="fourth_session" id="about">
      <h2>About Me</h2>
      <div className="content">
        <img src={require("./Images/diamond.png").default} alt="" />
        <section>
          <p>
            I am Self Taught Software Engineer. Highly motivated seeking to
            launch a career building web applications and services. Familiar
            with development and deployment process for many web-based
            technologies.
          </p>

          <h3>Skills</h3>
          <ul>
            <li>HTML5/CSS3</li>
            <li>Javascript ES6</li>
            <li>React/React Hooks</li>
            <li>API Design Knowledge</li>
            <li>Git/ Version Control Systems</li>
          </ul>
        </section>
      </div>
      <img src={SVGwaveW} alt="" className="wave" />
    </div>
  );
};

export default About;
