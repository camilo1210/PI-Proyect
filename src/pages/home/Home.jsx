import React from 'react';
import logo from "@/assets/logo.png";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Bienvenido.</h1>
            <h1 className="home-title"> 
                Cuidemos Nuestro Corazón: Conoce,<br />
                Previene y Actúa
            </h1>
            <img src={logo} alt="Icono de la página" className="icono" />
            
            <p className="home-description">
                El corazón es el motor de nuestra vida, pero muchas veces ignoramos las señales de alerta. En esta plataforma, te brindamos información clave sobre enfermedades cardíacas como la insuficiencia cardíaca, el síndrome del corazón roto, la hipertensión arterial, la miocardiopatía dilatada y la estenosis aórtica. Aprende cómo prevenirlas, detectarlas a tiempo y cuidar tu salud cardiovascular. 💖
            </p>
            
            <div className="contenedor">

      <div className="encabezado">Conoce sobre las enfermedades</div>

      <h2 className="titulo">Síndrome del corazón roto</h2>

      <p className="descripcion">
        Cuando el estrés o una emoción intensa afectan tu corazón como si fuera un ataque, pero sin serlo.
        ¿Puede el corazón realmente romperse?
      </p>

      <button className="boton">Saber más</button>
    </div>
        
        </div>
        
    );
};

export default Home;

