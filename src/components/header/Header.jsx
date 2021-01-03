import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuButton } from '../../assets/menu.svg';
import { ReactComponent as CloseButton } from '../../assets/close.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
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
      <button className="toggle-menu">
        <MenuButton />
      </button>
      <button className="toggle-menu">
        <CloseButton />
      </button>
    </header>
  );
}
