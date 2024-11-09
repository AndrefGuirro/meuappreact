// Atv01.js
import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';

function Atv04() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <h2 className="text-center mt-4">Atividade 04</h2>
      <Gallery />
      <Profile />

      
      <Link to="/" className="btn btn-primary mt-5">Voltar</Link>

      <footer className="py-3 text-center">
        <p>&copy; {new Date().getFullYear()} André Fernandes Guirro</p>
      </footer>
    </div>
  );
}

export default Atv04;
