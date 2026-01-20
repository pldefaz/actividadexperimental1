import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header style={{ padding: "24px 16px" }}>
      <h1 style={{ marginBottom: 8 }}>Bienvenido a nuestro sitio</h1>
      <p style={{ maxWidth: 720, lineHeight: 1.6 }}>
        Un sitio informativo construido con React + React Router. Aquí encontrarás
        quiénes somos, qué hacemos y cómo contactarnos.
      </p>

      {/* Link contextual obligatorio */}
      <div style={{ marginTop: 16 }}>
        <Link
          to="/services"
          style={{
            display: "inline-block",
            padding: "10px 14px",
            border: "1px solid #ccc",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Ver más
        </Link>
      </div>
    </header>
  );
}
