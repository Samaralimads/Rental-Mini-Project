import React, { useState } from "react";
import "./Card.css";
import JSON from "../../assets/rentals.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Card() {
  const [visibleCount, setVisibleCount] = useState(20);
  const [rentalListing, setRentalListing] = useState(
    JSON.results.slice(0, visibleCount)
  );

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 20);
    setRentalListing(JSON.results.slice(0, visibleCount + 20));
  };
  const handleDelete = (id) => {
    const updatedListing = rentalListing.filter((place) => place.id !== id);
    setRentalListing(updatedListing);
  };

  return (
    <main>
      {rentalListing.map((place) => (
        <div className="cardContainer" key={place.id}>
          <Link>
            <img
              src={place.picture_url.url}
              alt="Picture"
              className="cardImage"
            />
          </Link>
          <div className="cardInfos">
            <Link className="cardTitle">{place.name}</Link>
            <p className="cardDesc">
            <FontAwesomeIcon icon={faMapPin} /> {place.city}, {place.country}
            </p>
            <p className="cardPrice">Capacity: {place.accommodates} pax</p>
            <p className="cardPrice">{place.price}€ / night</p>
            <button className="deleteBtn" onClick={() => handleDelete(place.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}

      {rentalListing.length < JSON.results.length && (
        <button onClick={handleSeeMore}>See More</button>
      )}
    </main>
  );
}

export default Card;
