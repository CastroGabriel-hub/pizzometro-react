import { useState } from 'react';
import './App.css';

function App() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [message,setMessage] = useState('');

  function calcular(){
    let slicesNeeded = (adults * 3) + (children * 2);
    let giantAmount = Math.round(slicesNeeded / 12);
    let familyAmount = Math.round((slicesNeeded % 12) / 10);
    let standardAmount = Math.round(((slicesNeeded % 12) % 10) / 8);

    setMessage(`${standardAmount} pizzas tamanho convencional, ${familyAmount} do tamanho familia e ${giantAmount} pizzas do tamanho gigante.` );
    
  }

  return (
    <div className='app'>
      <h1>Pizzômetro</h1>
      <label>Quantidade de adultos: </label>
      <input  
        type="number"
        value={adults}
        onChange={(event) => {setAdults(event.target.value)}}
      />
      <label>Quantidade de crianças: </label>
      <input  
        type="number"
        value={children}
        onChange={(event) => {setChildren(event.target.value)}}
      />

      <button onClick={calcular}>Calcular</button>
      <p>{ message }</p>
    </div>
  );
}

export default App;
