import React, { useState } from 'react';

import logo from '../../assets/logo.svg';
import './styles.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav">
      <div className="nav__brand">
        <img src={logo} alt="log" className="nav__logo" />
        <span className="nav__dev">Front-End Dev</span>
      </div>
      <button className="nav__cta" type="button">
        Hire me
      </button>
      <button
        type="button"
        className={`burger ${isOpen ? 'open' : ''}`}
        onClick={handleClick}
      >
        <div className="burger-part" />
        <div className="burger-part" />
        <div className="burger-part" />
      </button>
      <ul className="nav__list">
        <li className="nav__item">Home</li>
        <li className="nav__item">Home</li>
        <li className="nav__item">Home</li>
        <li className="nav__item">Home</li>
        <li className="nav__item">Home</li>
      </ul>
    </nav>
  );
};

export default Nav;
