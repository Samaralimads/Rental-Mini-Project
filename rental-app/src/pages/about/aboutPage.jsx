import React from "react";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to our React Mini project! This page provides information about
        the project and the team members.
      </p>

      <h2>Project Description</h2>
      <p>Describe the project</p>

      <h2>Team Members</h2>
      {/* <ul>
        <li>
          <strong>Team Member 1:</strong> Full Name
          <br />
          GitHub:{" "}
          <a
            href="https://github.com/username1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br />
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/username1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
     
      </ul> */}
    </div>
  );
};

export default AboutPage;
