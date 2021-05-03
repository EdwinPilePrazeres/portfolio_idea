import React from "react";
import "./Footer.css";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="FooterContainer">
      <div className="FooterWrap">
        <div className="SocialMedia">
          <div className="SocialMediaWrap">
            <div
              className="SocialLogo"
              to="/portfolio_idea"
              onClick={toggleHome}
            >
              Logo
            </div>
            <div className="WebsiteRights">
              Logo © {new Date().getFullYear()} All Rights reserved.
            </div>
            <div className="SocialIconWrap">
              <div className="SocialIcons">
                <div
                  className="SocialIconLink"
                  href="//www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </div>
              </div>
              <div className="SocialIcons">
                <div
                  className="SocialIconLink"
                  href="//www.instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </div>
              </div>
              <div className="SocialIcons">
                <div
                  className="SocialIconLink"
                  href="//www.youtube.com/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </div>
              </div>
              <div className="SocialIcons">
                <div
                  className="SocialIconLink"
                  href="//www.Linkedin.com/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="footer">
    // <div className="container">
    //   <div className="grid">
    //     <h2>
    //       get in <span>touch</span>
    //     </h2>
    //     <p>Legacy EPP Copyright</p>
    //   </div>
    //   <div className="grid">
    //     <div className="info">
    //       <p>micorreo@correo.com</p>
    //       <p>Click here to contact me</p>
    //       <ul>
    //         <li>Facebook</li>
    //         <li>Instagram</li>
    //         <li>Linkedin</li>
    //         <li>Gmail</li>
    //       </ul>
    //     </div>
    //     <div className="services">
    //       <p>terms and services</p>
    //       <p>Privacy policy</p>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default Footer;
