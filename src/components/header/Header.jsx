import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuButton } from '../../assets/menu.svg';
import { ReactComponent as CloseButton } from '../../assets/close.svg';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ toggle, setToggle }) {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className={toggle ? 'menu show' : 'menu'}>
        <button className="close-menu">
          <CloseButton onClick={() => setToggle(false)} />
        </button>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a className="resume-link" href="#">
              My Resume
            </a>
          </li>
        </ul>
      </nav>
      <button className="toggle-menu" onClick={() => setToggle(true)}>
        <MenuButton />
      </button>
    </header>
  );
}
