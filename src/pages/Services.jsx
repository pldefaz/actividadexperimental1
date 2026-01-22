import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Aplicaciones modernas con React"
    },
    {
      id: 2,
      title: "Diseño UI/UX",
      description: "Interfaces limpias y funcionales"
    },
    {
      id: 3,
      title: "Soporte Técnico",
      description: "Mantenimiento y mejoras continuas"
    }
  ];

  return (
    <main>
      <h1>Servicios</h1>

      <section>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>

      <Link to="/contacto">¿Te interesa algún servicio? Contáctanos</Link>
    </main>
  );
};


export default  Services();