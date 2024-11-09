// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      <h1 className="mt-5">LABORATÓRIO ENGENHARIA DE SOFTWARE</h1>
      
      <div className="d-flex flex-column mt-4">
        <Link to="/Atv01" className="btn btn-primary mb-3">Atividade 01</Link>
        <Link to="/Atv02" className="btn btn-primary mb-3">Atividade 02</Link>
        <Link to="/Atv03" className="btn btn-primary mb-3">Atividade 03</Link>
        <Link to="/Atv04" className="btn btn-primary mb-3">Atividade 04</Link>
      </div>

      <footer className="mt-auto py-3 text-center">
        <p>&copy; {new Date().getFullYear()} André Fernandes Guirro</p>
      </footer>
    </div>
  );
}

export default Home;
