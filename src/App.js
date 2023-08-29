import React, { useState, useEffect } from 'react';
import './App.css';
import './Slider.css';
import './Pages/Skiils.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate loading state
    setTimeout(() => {
      setLoading(false);
    }, 2500); // Change the delay time as needed
  }, []);

  return (
    <div className='wrapper'>
      <div className="container">
        {loading ? (
          <div className="loading"><span class="loader"></span></div>
        ) : (
          <><Navbar />
        
            <Home/>
            <About/>
            <Skills/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
