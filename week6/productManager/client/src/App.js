import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Adding Default below makes it the default path */}
          <Route element={<Main/>} path="/" default/> 

          {/* The :id part of our path is a variable that we must give value to. */}
          <Route element={<Detail/>} path="/product/:id" />    

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
