// App.tsx
import React, { useState } from 'react';
import SevenSegmentDisplay from './SevenSegmentDisplay.tsx';
import './SevenSegmentDisplay.css';

const App = () => {
  const [digit, setDigit] = useState(0);

  const handleInputChange = (e) => {
    const inputDigit = Math.max(0, Math.min(9, Number(e.target.value)));
    setDigit(inputDigit);
  };

  return (
    <div className="App">
      <h1>7-Segment Display</h1>
      <input
        type="number"
        min="0"
        max="9"
        value={digit}
        onChange={handleInputChange}
        placeholder="Enter a digit (0-9)"
      />
      <SevenSegmentDisplay digit={digit} />
    </div>
  );
};

export default App;
