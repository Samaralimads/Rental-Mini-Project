import React, { Component } from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="/">
        <button>HOME</button>
      </a>
      <a href="/about">
        <button>ABOUT</button>
      </a>
    </aside>
  );
}

export default Sidebar;
