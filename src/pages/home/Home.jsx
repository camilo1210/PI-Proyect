import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div />
      <h1 className="welcome">Bienvenido.</h1>
      <h1 className="home-title">
        Cuidemos Nuestro Corazón: Conoce,
        <br />
        Previene y Actúa
      </h1>
      <p className="home-description">
        El corazón es el motor de nuestra vida, pero muchas veces ignoramos las
        señales de alerta. En esta plataforma, te brindamos información clave
        sobre enfermedades cardíacas como la insuficiencia cardíaca, el síndrome
        del corazón roto, la hipertensión arterial, la miocardiopatía dilatada y
        la estenosis aórtica. Aprende cómo prevenirlas, detectarlas a tiempo y
        cuidar tu salud cardiovascular.
      </p>
      {/* =============================Recuadro Corazón roto================================================================*/}
      <div className="card left">
        <div className="title">Síndrome del corazón roto</div>
        <p>
          Cuando el estrés o una emoción intensa afectan tu corazón como si
          fuera un ataque, pero sin serlo. ¿Puede el corazón realmente romperse?
        </p>
        <button className="btnClose">
          <NavLink to="/Broken_heart_syndrome" end>
            Saber más
          </NavLink>
        </button>
      </div>
      {/* ============================Recuadro Hipertensión arterial===============================================================*/}
      <div className="card right">
        <div className="title">Hipertensión Arterial</div>
        <p>
          Una amenaza silenciosa que obliga al corazón a trabajar sin descanso,
          sin mostrar señales evidentes… hasta que es demasiado tarde.
        </p>
        <button className="btnClose">
          <NavLink to="/Cardiac_hypertension" end>
            Saber más
          </NavLink>
        </button>
      </div>
      {/* ===================================Recuadro Insuficiencia Cardíaca============================================================*/}
      <div className="card left">
        <div className="title">Insuficiencia Cardíaca</div>
        <p>
          Cuando el corazón pierde la capacidad de bombear con fuerza, cada
          actividad se vuelve un reto. ¿Es el final… o hay esperanza?
        </p>
        <button className="btnClose">
          <NavLink to="/Heart_failure" end>
            Saber más
          </NavLink>
        </button>
      </div>
      {/* ===========================Recuadro Miocardiopatía Dilatada==================================================================*/}
      <div className="card right">
        <div className="title">Miocardiopatía Dilatada</div>
        <p>
          El corazón se agranda tratando de compensar su debilidad, pero en el
          proceso pierde su fuerza. ¿Qué lo causa y cómo afecta tu vida?
        </p>
        <button className="btnClose">
          <NavLink to="/Dilated-cardiomyopathy" end>
            Saber más
          </NavLink>
        </button>
      </div>
      {/* ============================Recuadro Estenosis Aórtica==================================================================*/}
      <div className="card left">
        <div className="title">Estenosis Aórtica</div>
        <p>
          Cuando la principal salida del corazón se estrecha, cada latido se
          convierte en un esfuerzo mayor. ¿Cómo puede un simple ‘bloqueo’
          cambiarlo todo?
        </p>
        <button className="btnClose">
          <NavLink to="/Aortic_stenosis" end>
            Saber más
          </NavLink>
        </button>
      </div>
      {/* ===========================================================================================================================*/}
    </div>
  );
};

export default Home;
