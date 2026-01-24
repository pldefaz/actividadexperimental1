import React from 'react';

const PortafolioCard = ({ proyecto }) => {
  return (
    <article className="portafolio-card">
      <div className="card-image">
        <img src={proyecto.imagen} alt={proyecto.titulo} />
      </div>
      
      <div className="card-content">
        <h3>{proyecto.titulo}</h3>
        <p className="card-description">{proyecto.descripcion}</p>
        
        <div className="card-tecnologias">
          {proyecto.tecnologias.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PortafolioCard;