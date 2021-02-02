import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    if (e.target.value !== '') setIsTyping(true);
    else setIsTyping(false);
  };

  return (
    <section className="contact">
      <h2 className="section-title">get in touch</h2>
      <h3>
        If you wanna get in touch, talk to me about a project idea or just say
        hi, fill up the form below or send an email to
        <a href="mailto:lucas.fber@gmail.com">lucas.fber@gmail.com </a> and lets
        talk.
      </h3>
      <form>
        <div className="input-wrapper">
          <input
            className={isTyping ? 'fill' : ''}
            type="text"
            onChange={handleChange}
          />
          <span className={isTyping ? 'typing' : ''}>Name</span>
        </div>
        {/* <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea cols="30" rows="10" placeholder="Message" /> */}
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
