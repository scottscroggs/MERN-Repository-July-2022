import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => { 
    // fetch("https://pokeapi.co/api/v2/pokemon")
    //     .then(response => {
    //       return response.json();

    //   }).then(response => {
    //       setPokemon(response.results)

    //   }).catch(err=>{
    //       console.log(err);
    //   });

    //Using Axios instead of the Fetch method shown above.
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        setPokemon(response.data.results)
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
