import React, { Component } from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/">
        <button>HOME</button>
      </a>
      <a href="/about">
        <button>ABOUT</button>
      </a>
    </div>
  );
}

export default Sidebar;
