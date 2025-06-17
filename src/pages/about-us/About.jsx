import React from 'react';
import './About.css';

const AboutUs = () => {
  const members = [
    { name: "Javier Mauricio Ortiz", email: "javiermauriciootriz@gmail.com", role: "Scrum Master & Desarrollador FullStack" ,disease: "Miocardiopatía" },

    { name: "Andrick Buitrago Piedrahita", email: "andrickbuitrago706@gmail.com", role: "Scrum Master & Desarrollador FullStack",disease: "Estenosis Aortica" },

    { name: "Luisa María Llantén Correa", email: "luisamariallanten@gmail.com", role: "Scrum Master & Desarrollador FullStack", disease: "Insuficiencia Cardiaca" },

    { name: "Cristian Camilo Pavas", email: "camilopavasrios@gmail.com", role: "Administrador de bases de datos & Desarrollador FullStack", disease: "Sindrome del Corazon roto" },
  ];

  return (
    <div className="about-container">
      <h1 className="title">Sobre Nosotros</h1>

      <div className="team-section">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            {/* <div className="avatar" /> */}
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.phone}</p>
            <p>{member.role}</p>
            <p>{member.disease}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
