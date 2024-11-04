// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>LABORATÓRIO ENGENHARIA DE SOFTWARE</h1>
      <h2>Atividades React</h2>    
        
          
            <Link to="/Atv01" className="btn btn-primary m-2">Atividade 01</Link>          
          
            <Link to="/Atv02" className="btn btn-primary m-2">Atividade 02</Link>

            <Link to="/Atv03" className="btn btn-primary m-2">Atividade 03</Link>        
      
    </div>
  );
}

export default Home;
