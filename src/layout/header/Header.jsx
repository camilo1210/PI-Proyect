import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <NavLink to="/enfermedades" end>
              Enfermedades
            </NavLink>
            {isHovered && (
              <ul className="sub-menu">
                <li>
                  <NavLink to="/Aqui va el link">Sindrome Del Corazon Roto</NavLink>
                </li>
                <li>
                  <NavLink to="/Aqui va el link">Hipertensión Arterial</NavLink>
                </li>
                <li>
                  <NavLink to="/Aqui va el link"> Insuficiencia Cardíaca</NavLink>
                </li>
                <li>
                  <NavLink to="/Aqui va el link">Miocardiopatía Dilatada</NavLink>
                </li>
                <li>
                  <NavLink to="/Aortic_stenosis">Estenosis aórtica</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/quiz" end>
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink to="/About_us" end>
              Sobre nosotros
            </NavLink>
          </li>
          <li>
            <button className="btnClose">
              <NavLink to="/login" end>
                Cerrar sesión
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
