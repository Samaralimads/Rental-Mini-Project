import React, { Component } from "react";
import "./Sidebar.css";
import { useState } from "react";
import axios from "axios";
const API_URL = "https://json-server-rentals.vercel.app/results/";

function Sidebar() {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [accomodates, setAccomodates] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [pricePerNight, setPricePerNight] = useState(0);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleAccomodates = (e) => setAccomodates(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handlePricePerNight = (e) => setPricePerNight(e.target.value);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newPlace = {
        title,
        city,
        country,
        accomodates,
        imageUrl,
        pricePerNight,
      };

      const response = await axios.post(`${API_URL}`, newPlace);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <aside className="sidebar">
      <h2>Add a New Place to Rent</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newTitle">Place Title:</label>
          <input
            type="text"
            id="newTitle"
            name="newTitle"
            value={title}
            onChange={handleTitle}
            required
          />
        </div>
        <div>
          <label htmlFor="newCity">City:</label>
          <input
            type="text"
            id="newCity"
            name="newCity"
            value={city}
            onChange={handleCity}
            required
          />
        </div>
        <div>
          <label htmlFor="newCountry">Country:</label>
          <input
            type="text"
            id="newCountry"
            name="newCountry"
            value={country}
            onChange={handleCountry}
            required
          />
        </div>
        <div>
          <label htmlFor="newAccomodates">Accomodates:</label>
          <input
            type="number"
            id="newAccomodates"
            name="newAccomodates"
            value={accomodates}
            onChange={handleAccomodates}
            required
          />
        </div>
        <div>
          <label htmlFor="newImageURL">Image URL:</label>
          <input
            type="text"
            id="newImageURL"
            name="newImageURL"
            value={imageUrl}
            onChange={handleImageUrl}
            required
          />
        </div>
        <div>
          <label htmlFor="newPricePerNight">Price per Night:</label>
          <input
            type="number"
            id="newPricePerNight"
            name="newPricePerNight"
            value={pricePerNight}
            onChange={handlePricePerNight}
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
