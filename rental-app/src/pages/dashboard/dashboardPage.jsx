import React from "react";
import Card from "../../components/Card/Card"
import Sidebar from "../../components/Sidebar/Sidebar"
import './dashboardPage.css'

function DashboardPage() {
  return (
   
      <div className="mainContainer">
    <Sidebar />
    <Card />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab laborum ut blanditiis culpa at harum animi itaque est dolore praesentium, maiores incidunt, mollitia vel, commodi tenetur odio nemo inventore! Tenetur.</p>
  </div>

  );
}

export default DashboardPage;
