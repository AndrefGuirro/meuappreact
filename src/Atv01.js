// Atv01.js
import React from 'react';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

function Atv01() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <h2 className="text-center mt-4">Atividade 01</h2>

      <div className="container my-4 flex-grow-1">
        <div className="card p-3 mb-4" style={{ backgroundColor: '#e0f7fa' }}>
          <div className="card-text display-4 text-center">
            <Letreiro />
          </div>
        </div>

        <div className="card p-1 mb-4" style={{ backgroundColor: '#e0f7fa' }}>
          <div className="card-text display-5 text-center">
            <Relogio />
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

export default Atv01;
