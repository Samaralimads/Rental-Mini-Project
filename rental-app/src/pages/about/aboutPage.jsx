import React from "react";
import "./aboutPage.css";

const TeamMember = ({ name, image, github }) => {
  return (
    <div className="team-member">
      <img className="profileImg" src={image} alt={`${name}'s Avatar`} />
      <h3>{name}</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <img
          className="gitImg"
          src="/github-mark.png"
          alt="GitHub Icon"
        />
      </a>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className="firstParagraph">Welcome to our React Mini project!</p>
      <p className="secondParagraph">
        This page provides information about the project and the team members.
      </p>

      <h2>Project Description</h2>
      <p className="thirdParagraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        repellendus mollitia officia neque sed ex voluptatibus nemo, eveniet,
        doloremque velit dolor illo error nulla corporis laboriosam debitis
        aspernatur quod voluptatem?
      </p>

      <h2>Team Members</h2>
      <div className="team-members-container">
        <TeamMember
          name="Evan"
          image="/evan.jpeg"
          github="https://github.com/Zevinos"
        />
        <TeamMember
          name="Michaël"
          image="/Michaël.png"
          github="https://github.com/michaelrasolo"
        />
        <TeamMember
          name="Samara"
          image="/Samara.png"
          github="https://github.com/Samaralimads"
        />
      </div>
    </div>
  );
};

export default AboutPage;
