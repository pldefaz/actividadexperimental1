import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();

  // Base de datos simulada de servicios
  const servicios = {
    1: {
      titulo: 'Desarrollo Web',
      descripcion: 'Creamos sitios web modernos, responsivos y optimizados para SEO',
      detalles: [
        'Diseño responsive adaptado a todos los dispositivos',
        'Optimización de velocidad y rendimiento',
        'Integración con APIs y servicios externos',
        'Mantenimiento y soporte técnico continuo'
      ],
      precio: 'Desde $500',
      duracion: '4-8 semanas'
    },
    2: {
      titulo: 'Desarrollo Móvil',
      descripcion: 'Aplicaciones nativas e híbridas para iOS y Android',
      detalles: [
        'Desarrollo nativo con Swift y Kotlin',
        'Aplicaciones híbridas con React Native',
        'Integración con servicios en la nube',
        'Publicación en App Store y Google Play'
      ],
      precio: 'Desde $1000',
      duracion: '8-12 semanas'
    },
    3: {
      titulo: 'Consultoría IT',
      descripcion: 'Asesoramiento tecnológico para mejorar tus procesos',
      detalles: [
        'Análisis de infraestructura actual',
        'Recomendaciones de mejora',
        'Implementación de soluciones',
        'Capacitación de personal'
      ],
      precio: 'Desde $300',
      duracion: '2-4 semanas'
    }
  };

  const servicio = servicios[id];

  if (!servicio) {
    return (
      <div className="service-detail-container">
        <h1>Servicio no encontrado</h1>
        <p>El servicio que buscas no existe.</p>
        <Link to="/services" className="btn-volver">
          Volver a Servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      <Link to="/services" className="btn-volver">
        ← Volver a Servicios
      </Link>

      <header className="service-detail-header">
        <h1>{servicio.titulo}</h1>
        <p className="service-subtitle">{servicio.descripcion}</p>
      </header>

      <section className="service-info">
        <div className="info-card">
          <h3>💰 Inversión</h3>
          <p>{servicio.precio}</p>
        </div>
        <div className="info-card">
          <h3>⏱️ Duración</h3>
          <p>{servicio.duracion}</p>
        </div>
      </section>

      <section className="service-detalles">
        <h2>¿Qué incluye este servicio?</h2>
        <ul>
          {servicio.detalles.map((detalle, index) => (
            <li key={index}>{detalle}</li>
          ))}
        </ul>
      </section>

      <section className="service-cta">
        <h2>¿Interesado en este servicio?</h2>
        <p>Contáctanos para recibir una cotización personalizada</p>
        <Link to="/contact" className="btn-contacto">
          Solicitar Cotización
        </Link>
      </section>
    </div>
  );
};

export default ServiceDetail;