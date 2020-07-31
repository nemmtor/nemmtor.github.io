import React from 'react';

import logo from '../../assets/logo.svg';
import './styles.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="brand">
        <img src={logo} alt="log" className="logo" />
        <span className="developer">Front-End Dev</span>
      </div>
      <div className="burger-container">
        <div className="burger-part" />
        <div className="burger-part" />
        <div className="burger-part" />
      </div>
    </nav>
  );
};

export default Nav;
