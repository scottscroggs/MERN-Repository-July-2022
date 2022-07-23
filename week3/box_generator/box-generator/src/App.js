import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';
import Box from './components/Box';

function App() {
  
  //This will be an array that holds all of the colors.
  const [boxColors, setBoxColors] = useState([]);
  
  return (
    <div className="App">
      <Form boxColors = {boxColors} setBoxColors = {setBoxColors} />
      <Box boxColors = {boxColors} />
    </div>
  );
}

export default App;
