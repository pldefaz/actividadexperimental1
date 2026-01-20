import Hero from "../components/Hero";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        <Section title="Bienvenido a mi Página">
          <p>
            Esta es la página de inicio del sitio. Aquí se presenta información
            general sobre el proyecto y su propósito principal.
          </p>
        </Section>

        <Section title="¿Qué encontrarás aquí?">
          <ul>
            <li>Información clara y organizada</li>
            <li>Navegación sencilla entre páginas</li>
            <li>Componentes reutilizables en React</li>
            <li>Buenas prácticas de estructura y diseño</li>
          </ul>
        </Section>
      </main>
    </>
  );
}
