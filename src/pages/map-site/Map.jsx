// src/pages/home/Map.jsx
import "./Map.css";
import { NavLink } from "react-router-dom";

const Map = () => {
  return (
    <div className="sitemap-container">
      <h1>Mapa del Sitio</h1>

      <div className="cards-container map">
        <div className="sitemap-card">
          <h3>Página principal</h3>
          <NavLink to="/">Inicio</NavLink>
        </div>

        <div className="sitemap-card">
          <h3>Sobre Nosotros</h3>
          <NavLink to="/About_us">Conócenos</NavLink>
        </div>

        <div className="sitemap-card">
          <h3>Enfermedades</h3>
          <ul>
            <li><NavLink to="/Aortic_stenosis"> Estenosis Aórtica</NavLink></li>
            <li><NavLink to="/Broken_heart_syndrome">Síndrome del Corazón Roto</NavLink></li>
            <li><NavLink to="/Cardiac_hypertension">Hipertensión Cardíaca</NavLink></li>
            <li><NavLink to="/Dilated-cardiomyopathy">Miocardiopatía Dilatada</NavLink></li>
            <li><NavLink to="/Heart_failure">Insuficiencia Cardíaca</NavLink></li>
          </ul>
        </div>

        <div className="sitemap-card">
          <h3>Quiz</h3>
          <NavLink to="/quiz">Quiz Interactivo</NavLink>
        </div>

        <div className="sitemap-card">
          <h3>Perfil</h3>
          <NavLink to="/Profile">Perfil de Usuario</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Map;
