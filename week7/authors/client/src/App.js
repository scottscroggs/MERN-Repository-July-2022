import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AuthorDetail from './components/AuthorDetail'
import AuthorUpdate from './components/AuthorUpdate'
import AuthorList from './components/AuthorList'
import AuthorForm from './components/AuthorForm'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite Authors</h1>
        <Routes>
          {/* Adding Default below makes it the default path */}
          <Route element={<AuthorList/>} path="/" default/> 

          <Route element={<AuthorForm />} path="/new"/>

          <Route element={<AuthorDetail/>} path="/author/:id" />    

          <Route element={<AuthorUpdate/>} path="/author/edit/:id"/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
