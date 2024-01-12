import React from "react";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboardPage.css";

function DashboardPage() {
  return (
    <div className="mainContainer">
      <Sidebar />
      <Card />
    </div>
  );
}

export default DashboardPage;
