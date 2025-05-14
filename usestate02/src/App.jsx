
import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('white');

  const handleColor = (clr) => {
    setColor(clr);
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      <button onClick={() => handleColor("red")}>Red</button>
      <button onClick={() => handleColor("orange")}>Orange</button>
      <button onClick={() => handleColor("blue")}>Blue</button>
    </div>
  );
};

export default App;

