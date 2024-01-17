import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Navbar">
      <Link to="/" className="navLogoContainer">
        <img src="/logo.png" alt="Rental Logo" className="navLogo" />
      <h1 className="navTitle">AppRentals</h1>
      </Link>
      <NavLink className="navbarLinksContainer">
        <Link to="/" className="navbarLink">HOME</Link>
        <Link to="/about" className="navbarLink">ABOUT</Link>
      </NavLink>
      
    </nav>
  );
}

export default NavBar;
