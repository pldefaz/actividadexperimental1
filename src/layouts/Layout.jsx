import { Outlet, NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  color: '#fff',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  borderBottom: isActive ? '2px solid #fff' : 'none',
  paddingBottom: '4px'
});   
  
export default function Layout() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      <nav style={{ backgroundColor: '#333', padding: '20px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
          <li><NavLink to="/" end style={linkStyle}>Inicio</NavLink></li>
          <li><NavLink to="/about" style={linkStyle}>Acerca de</NavLink></li>
          <li><NavLink to="/services" style={linkStyle}>Servicios</NavLink></li>
          <li><NavLink to="/portfolio" style={linkStyle}>Portafolio</NavLink></li>
          <li><NavLink to="/contact" style={linkStyle}>Contacto</NavLink></li>
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
