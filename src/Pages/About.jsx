import React from "react";
import New from './New';
import "../Pages/About.css";

const About = () => {
  return (
    <div className="about">
      <span className="new-span">New Releases</span>
      <div id="About"></div>
      <New/>
    </div>
  );
};

export default About;
