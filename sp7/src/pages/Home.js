import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="container mt-5">
      <h2>Bienvenido a crea tu presupuesto</h2>
      <p>Puedes crear tu presupuesto personalizado clicando <Link to="/budget">Aquí</Link>.</p>
    </div>
  );
}

export default Home