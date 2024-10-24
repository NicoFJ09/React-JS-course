import React, { useState, useEffect } from 'react';
import './Content.css';

const Content = () => {
  const [name, setName] = useState(''); // Define el estado inicial como una cadena vacía

  const handleNameChange = () => {
    const names = ["pepe", "juan", "luis"];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  }

  useEffect(() => {
    const initialName = handleNameChange();
    setName(initialName); // Establece el estado inicial cuando el componente se monta
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monta

  const handleClick = () => {
    console.log('Button clicked');
  }

  const handleClick2 = () => {
    console.log(`Button clicked by ${name}`);
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main className="main">
      <p className="paragraph">hello {name}</p>
      <button onClick={handleClick2}>Click me</button>
      <button onClick={handleClick3}>Click me too</button>
      <button onClick={handleClick}>Let's begin</button>
    </main>
  )
}

export default Content;