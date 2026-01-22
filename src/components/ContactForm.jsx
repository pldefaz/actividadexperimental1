const ContactForm = () => {
  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input type="text" placeholder="Tu nombre" />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" placeholder="correo@ejemplo.com" />
      </div>

      <div>
        <label>Mensaje:</label>
        <textarea placeholder="Escribe tu mensaje"></textarea>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
