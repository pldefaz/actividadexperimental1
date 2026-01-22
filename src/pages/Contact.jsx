import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <h1>Contacto</h1>

      <section>
        <p>
          Si deseas más información sobre nuestros servicios, completa el
          siguiente formulario y nos pondremos en contacto contigo.
        </p>
      </section>

      <ContactForm />
    </main>
  );
};

export default Contact;