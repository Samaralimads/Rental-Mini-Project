import React from "react";
import "./Footer.css";
import GhLogo from "./github logo.png";
function Footer() {
  return (
    <div className="Footer">
      <a href="https://github.com/Samaralimads/Rental-Mini-Project">
        <img src={GhLogo} className="GitLogo"></img>
      </a>
    </div>
  );
}

export default Footer;
