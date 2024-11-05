// Atv03.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Atv03() {
  // Estados para armazenar a contagem de homens, mulheres e total
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  
  // Função para atualizar o total
  const getTotal = () => homens + mulheres;

  // Funções para incrementar e decrementar a contagem de homens e mulheres
  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => setHomens(homens > 0 ? homens - 1 : 0);
  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => setMulheres(mulheres > 0 ? mulheres - 1 : 0);

  // Função para resetar as contagens
  const resetarContagem = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="container text-center">
      <h1>Atividade 03</h1>
      <h2>Contador de Pessoas</h2>
      
      <div className="my-4">
        <h3>Total</h3>
        <div className="display-4">{getTotal()}</div>
        <button onClick={resetarContagem} className="btn btn-outline-secondary mt-3">
          <i className="bi bi-arrow-clockwise"></i> Resetar
        </button>
      </div>

      <div className="row">
        <div className="col">
          <img src="/imagens/homem.jpg" alt="Homem" style={{ width: '50px' }} />
          <h4>Homens</h4>
          <div className="btn-group mt-2">
            <button onClick={incrementarHomens} className="btn btn-success">+</button>
            <button onClick={decrementarHomens} className="btn btn-danger">-</button>
          </div>
          <div className="mt-2">{homens}</div>
        </div>
        
        <div className="col">
          <img src="/imagens/mulher.jpg" alt="Mulher" style={{ width: '50px' }} />
          <h4>Mulheres</h4>
          <div className="btn-group mt-2">
            <button onClick={incrementarMulheres} className="btn btn-success">+</button>
            <button onClick={decrementarMulheres} className="btn btn-danger">-</button>
          </div>
          <div className="mt-2">{mulheres}</div>
        </div>
      </div>

      <Link to="/" className="btn btn-primary mt-5">Voltar</Link>
    </div>
  );
}

export default Atv03;
