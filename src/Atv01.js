// Atv01.js
import React from 'react';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

function Atv01() {
  return (
    <>
      <h2>Atividade 01</h2>

      <div className="container my-5">

      <div className="card p-3 mb-4" style={{ backgroundColor: '#e0f7fa' }}>
      <div className="card-text display-4 text-center">
      <Letreiro />
      </div>
      </div>

      <div className="card p-3 mb-4" style={{ backgroundColor: '#e0f7fa' }}>
      <div className="card-text display-4 text-center">
      <Relogio />
      </div>
      </div>

      </div>
      
      <Link to="/" className="btn btn-primary mt-5">Voltar</Link>
    </>
  );
}

export default Atv01;
