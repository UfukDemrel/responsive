import React, { useState } from 'react';
import New from './New';
import "../Pages/About.css";

const About = () => {
  const [searchQuery] = useState('');

  return (
    <div id="About" style={{ padding: "13% 0" }}>
      <New searchQuery={searchQuery} />
    </div>
  );
};

export default About;
