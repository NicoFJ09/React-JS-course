import React, { useState } from 'react';
import ColorBox from './ColorBox/ColorBox';
import TextInput from './TextInput/TextInput';

const App = () => {
  const [colorName, setColorName] = useState(''); // Define el estado inicial como una cadena vacía

  return (
    <div className="App">
      <ColorBox colorName={colorName} />
      <TextInput onInputChange={setColorName} />
    </div>
  );
}

export default App;