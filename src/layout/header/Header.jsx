import { useCallback, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "@/assets/logo.png";
import { useLocation } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hideTimer = useRef(null);
  const { loginGoogleWithPopup } = useAuthStore();
  const navigate = useNavigate();

  // ----- manejadores comunes -----
  const handleEnter = () => {
    clearTimeout(hideTimer.current); // evita que se cierre si vuelve a entrar
    setIsHovered(true);
  };

  const handleLeave = () => {
    hideTimer.current = setTimeout(() => {
      setIsHovered(false); // se ejecuta 1 s después
    }, 100);
  };

  const location = useLocation();
  const isEnfermedadesActive =
    location.pathname.includes("/Broken_heart_syndrome") ||
    location.pathname.includes("/Heart_failure") ||
    location.pathname.includes("/Dilated-cardiomyopathy") ||
    location.pathname.includes("/Aortic_stenosis");

    const handleLogin = useCallback (() => {
      loginGoogleWithPopup()
      .then(()=> navigate("login"))
      .catch(()=> navigate("/"))
    }, [loginGoogleWithPopup, navigate]);

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>

          <li
            className="nav-item"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <span
              className={`nav-link ${isEnfermedadesActive ? "active" : ""}`}
            >
              Enfermedades
            </span>
            {isHovered && (
              <ul
                className="sub-menu"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <li>
                  <NavLink to="/Broken_heart_syndrome">
                    Sindrome Del Corazon Roto
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Cardiac_hypertension">
                    Hipertensión Arterial
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Heart_failure">Insuficiencia Cardíaca</NavLink>
                </li>
                <li>
                  <NavLink to="/Dilated-cardiomyopathy">
                    Miocardiopatía Dilatada
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Aortic_stenosis">Estenosis aórtica</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <NavLink to="/quiz" end>
              Quiz
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About_us" end>
              Sobre nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <button className="btnClose">
              <NavLink to="/login" end>
                Iniciar sesión
              </NavLink>
            </button>
          </li>
          {/* <li className="nav-item">
            <button className="btnClose">
              <NavLink to="/login" end>
                Cerrar sesión
              </NavLink>
            </button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
