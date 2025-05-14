import React, { useState } from 'react';
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import './index.css'; 

const App = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(prev => !prev);
  };

  return (
    <div className={`app-container ${theme ? 'dark-theme' : 'light-theme'}`}>
      <button className="theme-button" onClick={handleTheme}>
        {theme ? <CiSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default App;
