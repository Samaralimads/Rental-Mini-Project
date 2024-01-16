import React, { Component } from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Create a new place</h2>
      <form
      // onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="newTitle">Place Title:</label>
          <input
            type="text"
            id="newTitle"
            name="newTitle"
            // value={}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newCity">City:</label>
          <input
            type="text"
            id="newCity"
            name="newCity"
            // value={}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newCountry">Country:</label>
          <input
            type="text"
            id="newCountry"
            name="newCountry"
            // value={}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newAccomodates">Accomodates:</label>
          <input
            type="number"
            id="newAccomodates"
            name="newAccomodates"
            // value={}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newImageURL">Image URL:</label>
          <input
            type="text"
            id="newImageURL"
            name="newImageURL"
            // value={}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newPricePerNight">Price per Night:</label>
          <input
            type="number"
            id="newPricePerNight"
            name="newPricePerNight"
            // value={}
            // onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="cardBtn">
          Add Place
        </button>
      </form>
    </aside>
  );
}

export default Sidebar;
