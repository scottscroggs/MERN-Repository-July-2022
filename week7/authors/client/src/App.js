import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import AuthorDetail from './components/AuthorDetail'
import AuthorUpdate from './components/AuthorUpdate'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* Adding Default below makes it the default path */}
        <Route element={<Main/>} path="/" default/> 

        {/* The :id part of our path is a variable that we must give value to. */}
        <Route element={<AuthorDetail/>} path="/author/:id" />    

        <Route element={<AuthorUpdate/>} path="/author/edit/:id"/>

      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
