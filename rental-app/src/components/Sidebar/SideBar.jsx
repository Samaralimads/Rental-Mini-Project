import React, { useState } from "react";
import "./Sidebar.css";
import axios from "axios";
const API_URL = "https://json-server-rentals.vercel.app/results/";

function Sidebar({ updateRentalListing }) {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [accommodates, setAccommodates] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [pricePerNight, setPricePerNight] = useState(0);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleAccommodates = (e) => setAccommodates(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handlePricePerNight = (e) => setPricePerNight(e.target.value);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newPlace = {
        name:title,
        city,
        country,
        accommodates,
        picture_url: { url: imageUrl },
        price:pricePerNight,
      };

      const response = await axios.post(`${API_URL}`, newPlace);
      updateRentalListing(response.data);

      setTitle("");
      setCity("");
      setCountry("");
      setAccommodates(0);
      setImageUrl("");
      setPricePerNight(0);

      console.log(response);
      alert("Allez la ! You successully added a place.");
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
          <label htmlFor="newAccommodates">Accommodates:</label>
          <input
            type="number"
            id="newAccommodates"
            name="newAccommodates"
            value={accommodates}
            onChange={handleAccommodates}
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
