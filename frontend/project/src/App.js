import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import About from './pages/about';

function App() {
  const [mode, setMode] = useState('light'); // Initialize mode to 'light'

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <div className={mode}>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
