import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

// Si vas a usar iconos (p.ej. FontAwesome), importa la librería

const Footer = () => {
  return (
    <footer>
      {/* Botón de acción centrado */}
      <h1 className="footer-title">¡PON A PRUEBA LO APRENDIDO!</h1>
      <div className="footer-action">
        <div className="footer-action-btn-container">
          <img src="/interrogation.png" className="img-interrogation" />
          <h1 className="footer-title">Quiz</h1>
          <button
            className="footer-action-btn"
            onClick={() => (window.location.href = "/quiz")}
            title="Juega ahora un quiz interactivo sobre enfermedades cardiovasculares"
          >
            Intentar
          </button>
        </div>
      </div>
      {/* Sección superior del Footer */}
      <div className="footer-top">
        <ul>
          <li>
            <Link to="/Map_site">Mapa de la página web</Link>
          </li>
          <li>
            <a href="mailto:soporteNe9@gmail.com" className="mail">
              soporteNe9@gmail.com
            </a>
          </li>
          <li>
            <Link to="/politica-privacidad">Política de privacidad</Link>
          </li>
          <li>
            <Link to="/ayuda">Ayuda</Link>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>
      </div>

      <hr />

      {
        <div className="footer-bottom">
          <p>©2025, All rights reserved</p>
          <span>Heart Visuals</span>
          <div className="social-icons">
            <a
              href="https://github.com/camilo1210/PI-Proyect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      }
    </footer>
  );
};

export default Footer;
