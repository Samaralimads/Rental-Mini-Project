import React from "react";
import "./notFoundPage.css";
import { useNavigate } from "react-router";
const NotFoundPage = () => {
  const navigate=useNavigate()
  return (
    <div className="notFound">
      <img
        className="notFoundImg"
        src="Error1.png"
        alt="Not Found Image"
      />
      <h1>404 Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={()=> navigate("/")}>Back to home</button>
    </div>
  );
};

export default NotFoundPage;
