import React, { useState } from 'react';
import New from './New';
import "../Pages/About.css";

const About = () => {
  const [searchQuery] = useState('');

  return (
    <div id="About" style={{ padding: "7% 0" }}>
      <h1 className="new-span">New Releases</h1>
      <New searchQuery={searchQuery} />
    </div>
  );
};

export default About;
