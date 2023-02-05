import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import './LivroLista.js';

import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

function App() {
  return (
      <React.StrictMode>
        <BrowserRouter>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">Catálogo</Link>
              <Link to="dados" className="navbar-brand">Dados</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<LivroLista />} />
            <Route path="dados" element={<LivroDados />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  );
}

export default App;
