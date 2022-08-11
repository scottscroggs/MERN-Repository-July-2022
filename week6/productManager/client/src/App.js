import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail'
import Update from './components/Update'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Adding Default below makes it the default path */}
          <Route element={<Main/>} path="/" default/> 

          {/* The :id part of our path is a variable that we must give value to. */}
          <Route element={<Detail/>} path="/product/:id" />    

          <Route element={<Update/>} path="/product/edit/:id"/>

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
