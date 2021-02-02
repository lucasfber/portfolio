import './Hero.css';
import PropTypes from 'prop-types';

export default function Hero({ isBlur }) {
  const preventDefaultClick = (e) => {
    if (isBlur) e.preventDefault();
  };

  return (
    <section className="hero">
      <div className="main-text">
        <h1>
          Hi, I'm <span>Lucas Bertoldo</span>. <br />
        </h1>
        <h2>Turning ideas into reality.</h2>
        <a
          className="btn-cta"
          href="mailto:lucas.fber@gmail.com"
          onClick={preventDefaultClick}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

Hero.propTypes = {
  isBlur: PropTypes.bool.isRequired,
};
