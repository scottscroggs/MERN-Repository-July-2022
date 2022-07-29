import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => { 
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
          return response.json();

      }).then(response => {
          setPokemon(response.results)

      }).catch(err=>{
          console.log(err);
      });
    }) 
  return (
    <div className="App">
      <h1>List of Pokemon from an API</h1>
      <ul>
        {
          pokemon.map((pokemonObj, index)=>{
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
