import React, { useState } from 'react';
import './ColorBox.css';

const ColorBox = ({ colorName }) => {
  const [textColor, setTextColor] = useState('black'); // Estado para el color del texto

  const toggleTextColor = () => {
    setTextColor(prevColor => (prevColor === 'black' ? 'white' : 'black'));
  };

  return (
    <div className="main-container">
      <div
        className="color-box"
        style={{ backgroundColor: colorName || 'white', color: textColor }} // Fondo blanco si no hay un color válido
      >
        {colorName || 'empty value'}
      </div>
      <button className="toggle-button" onClick={toggleTextColor}>Toggle Text Color</button>
    </div>
  );
}

export default ColorBox;