import React, { useState } from 'react';
import './index.css'; 

const App = () => {
  const [random, setRandom] = useState("white");

  const handleClick = () => {
    const chars = "abcdef0123456789";
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const str = Math.floor(Math.random() * chars.length);
      color += chars[str];
    }
    setRandom(color);
  };

  return (
    <div className="app-container" style={{ backgroundColor: random }}>
      <button className="color-button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default App;
