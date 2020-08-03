import React, { useState } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/logo.svg';
import './styles.scss';

const Nav = ({ triggerNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    triggerNav();
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
      <ul className={`nav__list ${isOpen ? 'active' : ''}`}>
        <li className="nav__item">Home</li>
        <li className="nav__item">What I know</li>
        <li className="nav__item">Projects</li>
        <li className="nav__item">About me</li>
        <li className="nav__item">Contact</li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  triggerNav: PropTypes.func.isRequired,
};

export default Nav;
