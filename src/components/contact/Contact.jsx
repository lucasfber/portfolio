import React /*  { useState }  */ from 'react';
import './Contact.css';

export default function Contact() {
  /* const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    if (e.target.value !== '') setIsTyping(true);
    else setIsTyping(false);
  };
 */
  return (
    <section className="contact">
      <h2 className="section-title">get in touch</h2>
      <h3>
        If you wanna get in touch, talk to me about a project idea, fill up the
        form below or send an email to{' '}
        <a href="mailto:lucas.fber@gmail.com"> lucas.fber@gmail.com </a>
      </h3>
      <form>
        <div className="input-data">
          <input type="text" required />
          <div className="underline" />
          <span>Name</span>
        </div>
        <div className="input-data">
          <input type="email" required />
          <div className="underline" />
          <span>Email</span>
        </div>
        <div className="input-data">
          <input type="text" required />
          <div className="underline" />
          <span>Subject</span>
        </div>
        <div className="textarea-data">
          <textarea cols="30" rows="10" required />
          <div className="underline" />
          <span>Message</span>
        </div>
        <div className="form-control">
          <input type="submit" value="Submit" />
        </div>

        {/*         <div className="input-wrapper">
          <input
            className={isTyping ? 'fill' : ''}
            type="text"
            onChange={handleChange}
          />
          <span className={isTyping ? 'typing' : ''}>Name</span>
        </div> */}
        {/* <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea cols="30" rows="10" placeholder="Message" />
        <input type="submit" value="Submit" /> */}
      </form>
    </section>
  );
}
