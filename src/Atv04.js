// Atv01.js
import React from 'react';
import { Link } from 'react-router-dom';
import Componente from './Componente';

function Atv04() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <h2 className="text-center mt-4">Atividade 04</h2>

      <div className="container my-4 flex-grow-1">
        
        

        

        <Link to="/" className="btn btn-primary mt-5">Voltar</Link>
      </div>

      <footer className="py-3 text-center">
        <p>&copy; {new Date().getFullYear()} André Fernandes Guirro</p>
      </footer>
    </div>
  );
}

export default Atv04;
