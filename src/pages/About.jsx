import Section from "../components/Section";

export default function About() {
  return (
    <main>
      <Section title="Quiénes somos">
        <p>
          Somos un equipo dedicado al desarrollo de un sitio web informativo
          utilizando React, aplicando buenas prácticas de estructura,
          navegación y reutilización de componentes.
        </p>
      </Section>

      <Section title="Misión">
        <p>
          Desarrollar una aplicación web clara y organizada que permita al
          usuario navegar de forma sencilla entre las diferentes secciones.
        </p>
      </Section>

      <Section title="Visión">
        <p>
          Convertir este proyecto en una base sólida para futuros desarrollos
          web, manteniendo un código limpio y escalable.
        </p>
      </Section>

      <Section title="Valores">
        <ul>
          <li>Responsabilidad</li>
          <li>Trabajo en equipo</li>
          <li>Calidad</li>
          <li>Organización</li>
        </ul>
      </Section>
    </main>
  );
}
