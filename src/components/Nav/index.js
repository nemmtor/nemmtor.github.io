import React from 'react';

import logo from '../../assets/logo.svg';
import './styles.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <img src={logo} alt="log" className="nav__logo" />
        <span className="nav__dev">Front-End Dev</span>
      </div>
      <button className="nav__cta" type="button">
        Hire me
      </button>
      <div className="burger-container">
        <div className="burger-part" />
        <div className="burger-part" />
        <div className="burger-part" />
      </div>
    </nav>
  );
};

export default Nav;
