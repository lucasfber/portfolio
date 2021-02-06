import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import Hero from '../components/hero/Hero';
import Work from '../components/work/Work';
import './Home.css';

const Home = ({ isBlur, setToggle }) => {
  const disposeMenu = () => {
    if (isBlur) setToggle(false);
  };

  return (
    <main className={isBlur ? 'blur' : ''} onClick={disposeMenu}>
      <Hero isBlur={isBlur} />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
};

Home.propTypes = {
  isBlur: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};

export default Home;
