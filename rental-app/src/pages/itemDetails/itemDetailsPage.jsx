import React, { useState, useEffect } from "react";
import "./ItemDetailsPage.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  faTrash,
  faPenToSquare,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemDetailsPage() {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [disabled, setDisabled] = useState(true);

  async function fetchItemDetails() {
    try {
      const response = await axios.get(
        `https://json-server-rentals.vercel.app/results/${itemId}`
      );
      const itemData = response.data;
      setItem(itemData);
      console.log(item);
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  }

  useEffect(() => {
    fetchItemDetails();
  }, [itemId]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://json-server-rentals.vercel.app/results/${itemId}`,
        item
      );
      // Success case
      if (response.status === 200) {
        alert("Item updated successfully");
        setDisabled(!disabled);
      } else {
        // Fail case
        alert("Oh oh, Error updating item. Try again bruh.");
      }
    } catch (error) {
      console.error("Error updating item:", error);

      alert("Oh oh, Error updating item. Try again bruh.");
    }
  }
  const handleEdit = async (e) => {
    e.preventDefault();
    setDisabled((prevDisabled) => !prevDisabled);
  };

  async function handleDelete() {
    try {
      const confirmDelete = window.confirm(
        "Bruh, you sure you want to delete that?"
      );
      if (!confirmDelete) {
        return;
      }

      await axios.delete(
        `https://json-server-rentals.vercel.app/results/${itemId}`
      );

      alert("Item deleted successfully");
      navigate(`/`);
    } catch (error) {
      console.error("Error deleting item:", error);
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
          <div className="itemInput">
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
              <button className="cardBtn" type="button" onClick={handleEdit}>
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
