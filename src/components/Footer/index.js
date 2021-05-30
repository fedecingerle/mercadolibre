import React from "react";
import Logo from "../../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
function Footer() {
  return (
    <div className="container">
      <img className="image" alt="fedeCingerleLogo" src={Logo} />
      <div className="textContainer">
        Made with
        <FontAwesomeIcon icon={faHeart} /> Fede
      </div>
    </div>
  );
}

export default Footer;
