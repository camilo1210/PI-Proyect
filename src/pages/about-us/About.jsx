import React from 'react';
import './About.css';

const AboutUs = () => {
  const members = [
    { name: "Javier Mauricio Ortiz", email: "javiermauriciootriz@gmail.com", role: "Scrum Master & Desarrollador FullStack" },
    { name: "Andrick Buitrago Piedrahita", email: "sterraquio@hotmail.com", role: "Scrum Master & Desarrollador FullStack" },
    { name: "Luisa María Llantén Correa", email: "luisamariallanten@gmail.com", role: "Scrum Master & Desarrollador FullStack"},
    { name: "Miembro 4", email: "email4@example.com", phone: "456789012", role: "COO" },
    { name: "Miembro 5", email: "email5@example.com", phone: "567890123", role: "CFO" },
  ];

  return (
    <div className="about-container">
      <h1 className="title">Sobre Nosotros</h1>

      <div className="team-section">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="avatar" />
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.phone}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2 className="section-title">Sobre la página</h2>
        <p>
          Está página web fue creada como parte de un proyecto de la asignatura "Proyecto Integrador" del programa de Tecnología en desarrollo de software de la Universidad Del Valle.
          La idea central es mostrar de manera sencilla y gráfica las enfermedades del órgano humano llamado corazón, así mismo sus síntomas, tratamientos y recomendaciones para cuidarlo.
          Como detalle adicional, la página cuenta con el apartado de "Quiz" en el cuál se pueden responder preguntas relacionadas con la tematica de las enfermedades del corazón humano y sus síntomas.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Sobre nuestro grupo</h2>
        <p>
          testo
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
