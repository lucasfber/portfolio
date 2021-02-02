import React from 'react';

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="section-title">get in touch</h2>
      <h3>
        If you wanna get in touch, talk to me about a project idea or just say
        hi, fill up the form below or send an email to
        <a href="mailto:lucas.fber@gmail.com">lucas.fber@gmail.com</a>
        and lets talk.
      </h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea cols="30" rows="10" placeholder="Message" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
