import React from "react";
import { Link as LinkS } from "react-scroll";
// import { Link } from "react-router-dom";
import './Home.css';
import {FaDownload} from 'react-icons/fa'
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleHome = () => {
    scroll.scrollToBottom();
  };

  return (
    <nav>
      <ul>
        <li className="SocialLogo" onClick={toggleHome}>Logo</li>
      </ul>
      <ul>
        <li><LinkS to="projects">Projects</LinkS></li>
        <li><LinkS to="about">About Me</LinkS></li>
        <li><LinkS to="comments">Comments</LinkS></li>
        <li><LinkS to="contact">Contact</LinkS></li>
        <li><Link to="https://github.com/EdwinPilePrazeres/Resume/blob/master/EdwinPile-CurriculumVitae_en.docx?raw=true" download>Download CV <FaDownload /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
