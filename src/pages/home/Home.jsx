import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

/* Lista de enfermedades,Un arreglo de objetos */
/*const diseases = [
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
    link: "/Cardiac_hypertension",
  },
  {
    title: "Insuficiencia cardíaca",
    description:
      "Cuando el corazón pierde la capacidad de bombear con fuerza, cada actividad se vuelve un reto. ¿Es el final… o hay esperanza?",
    link: "/Heart_failure",
  },
  {
    title: "Miocardiopatía dilatada",
    description:
      "El corazón se agranda tratando de compensar su debilidad, pero en el proceso pierde su fuerza. ¿Qué lo causa y cómo afecta tu vida?",
    link: "/Dilated-cardiomyopathy",
  },
  {
    title: "Estenosis aórtica",
    description:
      "Cuando la principal salida del corazón se estrecha, cada latido se convierte en un esfuerzo mayor. ¿Cómo puede un simple ‘bloqueo’ cambiarlo todo?",
    link: "/Aortic_stenosis",
  },
];*/

const Home = () => {
  return (
    <div className="home-container"><div/>
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
      {/*  <div className="diseases-grid">
        {diseases.map((e, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{e.title}</h3>
            <p className="card-description">{e.description}</p>
            <NavLink to={e.link} className="card-button" end>
              Saber más
            </NavLink>*/}
      {/* nuevo codigo tarjetas  */}

      <div className="card left">
        <div className="title">¿QUE ES?</div>
        <p>
          La miocardiopatía dilatada (MCD) es una enfermedad del músculo
          cardíaco en la cual el ventrículo izquierdo, que es la principal
          cámara de bombeo del corazón, se agranda (dilata) y pierde fuerza para
          contraerse y bombear sangre de forma eficiente al resto del cuerpo.
          Con el tiempo, esto puede afectar a otras cámaras del corazón y causar
          insuficiencia cardíaca.
        </p>
      </div>

      <div className="card right">
        <div className="title">¿CUALES SON SUS SINTOMAS?</div>
        <p>
          La causa puede variar, desde enfermedades del corazón hasta
          condiciones crónicas como la hipertensión. Un diagnóstico adecuado es
          esencial.
        </p>
      </div>
    </div>
    
  );
};

export default Home;
