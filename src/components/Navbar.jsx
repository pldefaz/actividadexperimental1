import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: "white",
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: "8px",
  fontWeight: 600,
  background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
});
    
export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <NavLink to="/" end style={linkStyle}>
        Inicio
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        Acerca de
      </NavLink>
      <NavLink to="/services" style={linkStyle}>
        Servicios
      </NavLink>
      <NavLink to="/portfolio" style={linkStyle}>
        Portafolio
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contacto
      </NavLink>
    </nav>
  );
}
