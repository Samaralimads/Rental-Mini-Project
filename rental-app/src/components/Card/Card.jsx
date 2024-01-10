import React, { useState } from "react";
import "./Card.css";
import JSON from "../../assets/rentals.json";
// Displaying PICTURE NAME CITY COUNTRY PRICE/NIGHT
function Card() {
  const [rentalListing, setRentalListing] = useState(JSON.results);
  console.log(rentalListing);
  return (
    <main>

      {rentalListing.map((place) => {
          return (
          <div className="cardContainer">
            <img
              src={place.picture_url.url}
              alt="Picture"
              className="cardImage"
            />
            <div className="cardInfos">
              <h2 className="cardTitle">
                {place.city}, {place.country}
              </h2>
              <p className="cardDesc">{place.name}</p>
              <p className="cardPrice">{place.price}€</p>
            </div>
          </div>
        );
    })}
    </main>
  );
}

export default Card;
