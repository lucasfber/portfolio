export default function Contact() {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      <h3>
        If you wanna get in touch, talk to me about a project idea or just say
        hi, fill up the form below or send an email to
        <a href="mailto:lucas.fber@gmail.com">lucas.fber@gmail.com</a>and let's
        talk.
      </h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea cols="30" rows="10" placeholder="Message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
