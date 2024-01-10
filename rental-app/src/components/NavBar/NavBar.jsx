import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="Navbar">
      <a href="#" className="navLogoContainer" >
        <img src="/logo.png" alt="Rental Logo" className="navLogo" />
      </a>
      <h1>AppRentals</h1>
      <span></span>
    </div>
  );
}

export default NavBar;
