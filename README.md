# Proyecto React Router - Single Page Application

## Descripción del Proyecto

Aplicación web tipo Single Page Application (SPA) desarrollada con React y React Router, que implementa un sistema de navegación completo con rutas estáticas y dinámicas. El proyecto simula un sitio web corporativo con portafolio de servicios, información empresarial y sistema de contacto.

## Objetivo

Implementar una aplicación web funcional que demuestre el uso de React Router para crear una experiencia de navegación fluida, con componentes reutilizables y buenas prácticas de desarrollo.

## Tecnologías Utilizadas

- React 18+
- React Router DOM v6
- Vite (build tool)
- CSS3 (estilos personalizados)

## Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. Clonar el repositorio
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instalar dependencias
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo
   ```bash
   npm run dev
   ```

4. Abrir en el navegador
   ```
   http://localhost:5173
   ```

5. Compilar para producción
   ```bash
   npm run build
   ```

## Mapa de Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| / | Home.jsx | Página principal con hero y secciones informativas |
| /acerca | About.jsx | Información sobre la empresa (misión, visión, valores) |
| /servicios | Services.jsx | Lista de servicios ofrecidos |
| /servicios/:id | ServiceDetail.jsx | Detalle individual de cada servicio (ruta dinámica) |
| /portafolio | Portafolio.jsx | Galería de proyectos realizados |
| /contacto | Contact.jsx | Formulario de contacto |
| * | NotFound.jsx | Página 404 (ruta no encontrada) |

## Estructura del Proyecto

```
src/
├── app/
│   └── router.jsx          # Configuración de rutas
├── layouts/
│   └── MainLayout.jsx      # Layout principal con Header/Footer
├── pages/
│   ├── Home.jsx            # Página de inicio
│   ├── About.jsx           # Página acerca de
│   ├── Services.jsx        # Página de servicios
│   ├── ServiceDetail.jsx   # Detalle de servicio (dinámica)
│   ├── Portafolio.jsx      # Página de portafolio
│   ├── Contact.jsx         # Página de contacto
│   └── NotFound.jsx        # Página 404
├── components/
│   ├── Header.jsx          # Cabecera del sitio
│   ├── Navbar.jsx          # Menú de navegación
│   ├── Footer.jsx          # Pie de página
│   ├── Hero.jsx            # Banner principal
│   ├── Section.jsx         # Sección reutilizable
│   ├── ServiceCard.jsx     # Tarjeta de servicio
│   ├── PortafolioCard.jsx  # Tarjeta de proyecto
│   └── ContactForm.jsx     # Formulario de contacto
├── styles/
│   └── global.css          # Estilos globales
└── main.jsx                # Punto de entrada
```

## Características Implementadas

### Requisitos Básicos
- Proyecto configurado con Vite + React
- React Router DOM instalado y configurado
- 6 páginas (5 obligatorias + 1 extra)
- Layout principal con Header, Footer y Outlet
- Navegación con NavLink (estado activo visible)
- Links contextuales entre páginas
- Página 404 para rutas no encontradas
- Diseño responsive básico

### Componentes Reutilizables
- PortafolioCard - Tarjetas de proyectos
- ServiceCard - Tarjetas de servicios
- Hero - Banner principal
- Section - Secciones genéricas
- ContactForm - Formulario de contacto

### Funcionalidad Extra (Nota Adicional)
- Ruta dinámica /servicios/:id
- Uso de useParams() para leer parámetros
- Navegación hacia rutas dinámicas desde Services

### Buenas Prácticas
- Separación clara de carpetas (pages, layouts, components)
- Componentes funcionales pequeños y enfocados
- Nombres descriptivos y consistentes
- Sin código duplicado
- Estilos globales consistentes
- Código limpio sin console.log

## Sistema de Diseño

### Paleta de Colores
- Primary: #4A90E2 (Azul)
- Secondary: #50C878 (Verde)
- Accent: #E94B3C (Rojo)
- Dark: #2C3E50
- Light: #ECF0F1

### Tipografía
- Fuente principal: Segoe UI, sans-serif
- H1: 2.5rem
- H2: 2rem
- H3: 1.5rem
- Body: 16px

### Espaciado
Sistema de espaciado basado en múltiplos de 0.5rem:
- XS: 0.5rem
- SM: 1rem
- MD: 1.5rem
- LG: 2rem
- XL: 3rem

## Capturas de Pantalla

### Página Principal
Página de inicio con hero y secciones informativas

### Portafolio
Galería de proyectos con diseño de cards

### Detalle de Servicio
Vista detallada de un servicio con información completa

## Equipo de Desarrollo

- Persona A: Configuración base + Router + 404
- Persona B: Layout + Header + Footer
- Persona C: Páginas Home y About
- Persona D: Páginas Contact y Services
- Persona E: Portafolio + Rutas dinámicas + Estilos + README

## Notas Técnicas

### Navegación Dinámica
El proyecto implementa rutas dinámicas usando el patrón /servicios/:id:

```jsx
// En router.jsx
{
  path: '/servicios/:id',
  element: <ServiceDetail />
}

// En ServiceDetail.jsx
const { id } = useParams();
```

### Componentes Reutilizables
Todos los componentes siguen el principio de responsabilidad única y son fácilmente reutilizables:

```jsx
<PortafolioCard proyecto={proyecto} />
<ServiceCard servicio={servicio} />
```

### Responsive Design
El diseño se adapta a tres breakpoints principales:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## Futuras Mejoras

- Implementar backend real para formulario de contacto
- Agregar animaciones con Framer Motion
- Integrar sistema de autenticación
- Añadir modo oscuro/claro
- Implementar lazy loading de imágenes
- Agregar tests unitarios con Jest/Vitest

## Licencia

Este proyecto es de uso académico para el curso de Programación Integrativa de Componentes Web.
