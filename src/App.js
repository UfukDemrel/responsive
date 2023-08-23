import React from 'react';
import './App.css';
import './Slider.css';
import './Pages/Skiils.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
// import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skiils';
// import Projects from './Pages/Projects';

function App() {
  return (
    <div className='wrapper'>
      <div className="container">
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
