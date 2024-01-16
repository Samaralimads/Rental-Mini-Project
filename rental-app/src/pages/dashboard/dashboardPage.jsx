import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboardPage.css";

function DashboardPage() {
  const [rentalListing, setRentalListing] = useState([]);

  const updateRentalListing = (newPlace) => {
    setRentalListing((prevListing) => [...prevListing, newPlace]);
  };

  return (
    <div className="mainContainer">
      {/* Pass the updateRentalListing prop to the Sidebar component */}
      <Sidebar updateRentalListing={updateRentalListing} />
      <Card rentalListing={rentalListing} />
    </div>
  );
}

export default DashboardPage;
