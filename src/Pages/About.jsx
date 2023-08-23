import React from "react";
import New from './New';
import "../Pages/About.css";

const About = () => {
  return (
    <div id="About">
      <h1 style={{padding:"5% 0"}}>
      <span className="new-span">New Releases</span>
      <New/>
      </h1>
    </div>
  );
};

export default About;
