import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="" end>
        Enfermedades
        </NavLink>
        <NavLink to="/quiz" end>
          Quiz
        </NavLink>
        <NavLink to="" end>
          Sobre nosotros
        </NavLink>
        <NavLink 
      to="/logout" 
      end 
      style={({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
      })}>
      Cerrar sesión
     </NavLink>




      </nav>
    </header>
  );
};

export default Header;
