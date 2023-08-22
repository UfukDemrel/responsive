import React from "react";
import New from './New';
import "../Pages/About.css";

const About = () => {
  return (
    <div id="About">
      <span className="new-span">New Releases</span>
      <New/>
    </div>
  );
};

export default About;
