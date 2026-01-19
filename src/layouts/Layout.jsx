import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      <nav style={{ backgroundColor: '#333', padding: '20px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link></li>
          <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Acerca de</Link></li>
          <li><Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Servicios</Link></li>
          <li><Link to="/portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portafolio</Link></li>
          <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contacto</Link></li>
        </ul>
      </nav>
      <main style={{ flex: 1, overflow: 'auto', padding: 0, margin: 0 }}>
        <Outlet />
      </main>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center', flexShrink: 0 }}>
        <p style={{ margin: 0 }}>&copy; 2026. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
