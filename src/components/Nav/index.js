import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import logo from '../../assets/logo.svg';
import './styles.scss';

const SCROLL_DURATION = 500;
const SCROLL_OFFSET = 120;
const SCROLL_DELAY = 0;

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
        <li>
          <Link
            className="nav__item"
            onClick={handleClick}
            to="home"
            smooth
            duration={SCROLL_DURATION}
            delay={SCROLL_DELAY}
            ignoreCancelEvents
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav__item"
            onClick={handleClick}
            to="skills"
            smooth
            duration={SCROLL_DURATION}
            offset={SCROLL_OFFSET}
            delay={SCROLL_DELAY}
            ignoreCancelEvents
          >
            What I know
          </Link>
        </li>
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
