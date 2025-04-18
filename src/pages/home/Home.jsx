import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

/* Lista de enfermedades,Un arreglo de objetos */
const diseases = [
  {
    title: "Síndrome del corazón roto",
    description:
      "Cuando el estrés o una emoción intensa afectan tu corazón como si fuera un ataque, pero sin serlo. ¿Puede el corazón realmente romperse?",
    link: "/Broken_heart_syndrome",
  },
  {
    title: "Hipertensión arterial",
    description:
      "Una amenaza silenciosa que obliga al corazón a trabajar sin descanso, sin mostrar señales evidentes… hasta que es demasiado tarde.",
    link: "/Aqui va el link de su enfermedad",
  },
  {
    title: "Insuficiencia cardíaca",
    description:
      "Cuando el corazón pierde la capacidad de bombear con fuerza, cada actividad se vuelve un reto. ¿Es el final… o hay esperanza?",
    link: "/Aqui va el link de su enfermedad",
  },
  {
    title: "Miocardiopatía dilatada",
    description:
      "El corazón se agranda tratando de compensar su debilidad, pero en el proceso pierde su fuerza. ¿Qué lo causa y cómo afecta tu vida?",
    link: "/Aqui va el link de su enfermedad",
  },
  {
    title: "Estenosis aórtica",
    description:
      "Cuando la principal salida del corazón se estrecha, cada latido se convierte en un esfuerzo mayor. ¿Cómo puede un simple ‘bloqueo’ cambiarlo todo?",
    link: "/Aortic_stenosis",
  },
];

const Home = () => {
  return (
    <div className="home-container">
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

      {/* se crea una funcion de recorre el arreglo y crea una tarjeta para cada elemento de "diseases[]" */}
      <div className="diseases-grid">
        {diseases.map((e, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{e.title}</h3>
            <p className="card-description">{e.description}</p>
              <NavLink to={e.link} className="card-button" end>
                Saber más
              </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
