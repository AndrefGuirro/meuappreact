// Atv02.js
import React from 'react';
import { Link } from 'react-router-dom';
import Letreiro from './Letreiro';

function Atv02() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <h2 className="text-center mt-4">Atividade 02</h2>

      <div className="container my-5 flex-grow-1">
        <div className="card p-3 mb-4" style={{ backgroundColor: '#e0f7fa' }}>
          <div className="card-text display-4 text-center">      
            <Letreiro />
          </div>
        </div>
        <Link to="/" className="btn btn-primary mt-5">Voltar</Link>
      </div>

      <footer className="py-3 text-center">
        <p>&copy; {new Date().getFullYear()} André Fernandes Guirro</p>
      </footer>      
    </div>
  );
}

export default Atv02;
