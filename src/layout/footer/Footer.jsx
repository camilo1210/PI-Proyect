import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

// Si vas a usar iconos (p.ej. FontAwesome), importa la librería

const Footer = () => {
  return (
    <footer>
      {/* Sección superior del Footer */}
      <div className="footer-top">
        {/* Lista de enlaces (puedes usar <ul> y <li> o <nav> y <Link>/ <a>) */}
        <ul>
          <li>
            <Link to="/mapa">Mapa de la página web</Link>
          </li>
          <li>
            {/* Para un enlace mailto o texto */}
            <a href="mailto:soporteNe9@gmail.com">soporteNe9@gmail.com</a>
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
          {
            <div className="social-icons">
              <FaFacebook href="" />
              <FaInstagram href="" />
              <FaGithub href="https://github.com/camilo1210/PI-Proyect" />
            </div>
          }
        </div>
      }
    </footer>
  );
};

export default Footer;
