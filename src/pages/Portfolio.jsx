import React from 'react';
import PortafolioCard from '../components/PortafolioCard';

const Portafolio = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'Sistema de Gestión Empresarial',
      descripcion: 'Aplicación web para gestión de inventarios y ventas desarrollada con React y Node.js',
      tecnologias: ['React', 'Node.js', 'MongoDB'],
      imagen: 'https://via.placeholder.com/400x250/4A90E2/ffffff?text=Proyecto+1'
    },
    {
      id: 2,
      titulo: 'Plataforma E-Learning',
      descripcion: 'Sistema educativo en línea con cursos interactivos y seguimiento de progreso',
      tecnologias: ['React', 'Express', 'PostgreSQL'],
      imagen: 'https://via.placeholder.com/400x250/E94B3C/ffffff?text=Proyecto+2'
    },
    {
      id: 3,
      titulo: 'App Móvil de Delivery',
      descripcion: 'Aplicación móvil para pedidos de comida con geolocalización en tiempo real',
      tecnologias: ['React Native', 'Firebase', 'Google Maps API'],
      imagen: 'https://via.placeholder.com/400x250/6BCF7F/ffffff?text=Proyecto+3'
    },
    {
      id: 4,
      titulo: 'Dashboard Analítico',
      descripcion: 'Panel de control con visualización de datos y métricas empresariales',
      tecnologias: ['React', 'D3.js', 'Chart.js'],
      imagen: 'https://via.placeholder.com/400x250/F4A742/ffffff?text=Proyecto+4'
    }
  ];

  return (
    <div className="portafolio-container">
      <header className="portafolio-header">
        <h1>Nuestro Portafolio</h1>
        <p>Conoce algunos de los proyectos que hemos desarrollado con éxito</p>
      </header>

      <section className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <PortafolioCard 
            key={proyecto.id}
            proyecto={proyecto}
          />
        ))}
      </section>

      <section className="portafolio-cta">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Estamos listos para ayudarte a convertir tus ideas en realidad</p>
      </section>
    </div>
  );
};

export default Portafolio;
