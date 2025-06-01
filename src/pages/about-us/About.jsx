import React from 'react';
import './About.css';

const AboutUs = () => {
  const members = [
    { name: "Javier Mauricio Ortiz", email: "javiermauriciootriz@gmail.com", role: "Scrum Master & Desarrollador FullStack" },
    { name: "Andrick Buitrago Piedrahita", email: "sterraquio@hotmail.com", role: "Scrum Master & Desarrollador FullStack" },
    { name: "Miembro 3", email: "email3@example.com", phone: "345678901", role: "CMO" },
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
          testo
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
