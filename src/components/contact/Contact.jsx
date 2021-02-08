import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import InputText from '../input-text/InputText';
import Textarea from '../text-area/Textarea';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="section-title">get in touch</h2>
      </ScrollAnimation>

      <h3>
        If you wanna get in touch, talk to me about a project idea, fill up the
        form below or send an email to{' '}
        <a href="mailto:lucas.fber@gmail.com"> lucas.fber@gmail.com </a>
      </h3>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <form>
          <InputText type="text" label="Name" required />
          <InputText type="email" label="Email" required />
          <InputText type="text" label="Subject" required />
          <Textarea label="Message" required />
          <div className="form-control">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </ScrollAnimation>
    </section>
  );
}
