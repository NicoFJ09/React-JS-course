import React, { useState } from 'react';
import './TextInput.css'; // Importa el archivo CSS

const TextInput = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState(''); // Define el estado inicial como una cadena vacía

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value); // Llama a la función de devolución de llamada con el nuevo valor
  };

  return (
    <div className="text-input-container">
      <input
        className="text-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add color name"
      />
    </div>
  );
}

export default TextInput;