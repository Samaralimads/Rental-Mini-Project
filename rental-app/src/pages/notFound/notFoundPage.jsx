import React from "react";
import "./notFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <img
        className="notFoundImg"
        src="Error1.png"
        alt="Not Found Image"
      />
      <h1>404 Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button>Back to home</button>
    </div>
  );
};

export default NotFoundPage;
