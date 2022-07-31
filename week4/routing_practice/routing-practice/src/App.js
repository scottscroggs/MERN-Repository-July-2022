import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ParamComponent from './components/ParamComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={<ParamComponent />} />
          <Route path="/:word/:color/:backColor" element={<ParamComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
