import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuButton } from '../../assets/menu.svg';
import { ReactComponent as CloseButton } from '../../assets/close.svg';

import './Header.css';

const Header = ({ toggle, setToggle }) => (
  <header className="header">
    <div className="logo-wrapper">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <nav className={toggle ? 'menu show' : 'menu'}>
      <button className="close-menu" type="button">
        <CloseButton onClick={() => setToggle(false)} />
      </button>
      <ul>
        <li>
          <a onClick={() => setToggle(false)} href="#about">
            About
          </a>
        </li>
        <li>
          <a onClick={() => setToggle(false)} href="#experience">
            Experience
          </a>
        </li>
        <li>
          <Link onClick={() => setToggle(false)} to="/work">
            Work
          </Link>
        </li>
        <li>
          <a onClick={() => setToggle(false)} href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="resume-link" href="#/resume">
            My Resume
          </a>
        </li>
      </ul>
    </nav>
    <button
      type="button"
      className="toggle-menu"
      onClick={() => setToggle(true)}
    >
      <MenuButton />
    </button>
  </header>
);

Header.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};

export default Header;
