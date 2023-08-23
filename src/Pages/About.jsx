import React from "react";
import New from './New';
import "../Pages/About.css";

const About = () => {
  return (
    <div id="About" style={{ padding: "7% 0" }}>
      <h1 className="new-span">New Releases</h1>
      <New/>
    </div>
  );
};

export default About;
