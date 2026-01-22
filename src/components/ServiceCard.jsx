import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <article>
      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <Link to="/contacto">Ir a contacto</Link>
    </article>
  );
};

export default ServiceCard;
