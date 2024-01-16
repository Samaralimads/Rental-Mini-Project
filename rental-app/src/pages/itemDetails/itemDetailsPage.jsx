import React, { useState, useEffect } from "react";
import "./ItemDetailsPage.css";
import JSON from "../../assets/rentals.json";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  faTrash,
  faPenToSquare,
  faRotateLeft,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemDetailsPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  // const [itemName, setItemName] = useState("");
  // const [itemImage, setItemImage] = useState("");
  // const [itemCity, setItemCity] = useState("");
  // const [itemPrice, setItemPrice] = useState("");
  // const [itemAccommodates, setItemAccommodates] = useState(0);
  // const [itemDescription, setItemDescription] = useState("");
  const [disabled, setDisabled] = useState(false);

  async function fetchItemDetails() {
    try {
      const response = await axios.get(
        `https://json-server-rentals.vercel.app/results/${itemId}`
      );
      const itemData = response.data;
      setItem(itemData);
      console.log(item);

      // setItemName(item.name);
      // setItemCity(`${item.city}, ${item.country}`);
      // setItemPrice(item.price);
      // setItemImage(item.picture_url.url);
      // setItemAccommodates(item.accommodates);
      // setItemDescription(item.description);
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  }

  useEffect(() => {
    fetchItemDetails();
  }, [itemId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hey')
    setDisabled(!disabled);
  };
  const handleEdit = (e) => {
    e.preventDefault()
    setDisabled((prevDisabled) => !prevDisabled
    );
  };

async function handleDelete() {
  try {
    
  } catch (error) {
    
  }
}

  useEffect(() => {}, []);
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div className="ItemDetailsPage">
      <div className="leftContainerItem">
        <img
          className="itemPicture"
          src={item.picture_url.url}
          alt={item.name}
        />
      </div>
      <div className="rightContainerItem">
        <form className="itemForm" onSubmit={handleSubmit}>
          <div className="itemInput" >
            <label htmlFor="name">Item Name:</label>
            <input
              
              disabled={disabled}
              type="text"
              id="name"
              className="itemTitle"
              value={item.name}
              onChange={(e) =>
                setItem({ ...item, [e.target.id]: e.target.value })
              }
            />
          </div>
          <div className="itemSecondaryInputs">
            <div className="itemInput">
              <label htmlFor="city">City:</label>
              <input
                disabled={disabled}
                type="text"
                id="city"
                className="itemCity"
                value={item.city}
                onChange={(e) =>
                  setItem({ ...item, [e.target.id]: e.target.value })
                }
              />
            </div>
            <div className="itemInput">
              <label htmlFor="price">Price:</label>
              <input
                disabled={disabled}
                type="text"
                id="price"
                className="itemPrice"
                value={item.price}
                onChange={(e) =>
                  setItem({ ...item, [e.target.id]: e.target.value })
                }
              />
            </div>
            <div className="itemInput">
              <label htmlFor="accommodates">Accommodates:</label>
              <input
                disabled={disabled}
                type="number"
                id="accommodates"
                className="itemPax"
                min={0}
                value={item.accommodates}
                onChange={(e) =>
                  setItem({ ...item, [e.target.id]: e.target.value })
                }
              />
            </div>
          </div>
          <div className="itemInput">
            <label htmlFor="description">Description:</label>
            <textarea
              disabled={disabled}
              type="text"
              id="description"
              className="itemDesc"
              value={item.description}
              onChange={(e) =>
                setItem({ ...item, [e.target.id]: e.target.value })
              }
              rows="10"
            />
          </div>

          <div className="itemBtnContainer">
            {disabled ? (
              <button
                className="cardBtn"
                type="button"
                onClick={handleEdit}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit
              </button>
            ) : (
              <button className="cardBtn" type="submit">
                <FontAwesomeIcon icon={faFloppyDisk} />
                Save
              </button>
            )}
            <button
              className="cardBtn"
              type="button"
              onClick={() => handleDelete()}
            >
              <FontAwesomeIcon icon={faTrash} />
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
