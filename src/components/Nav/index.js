import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import logo from '../../assets/logo.svg';
import './styles.scss';

const SCROLL_DURATION = 300;
const SCROLL_DELAY = 300;
const SCROLL_OFFSET = -60;

const Nav = ({ triggerNav, sections }) => {
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
        {sections.map((section, index) => (
          <li key={section.name}>
            <Link
              className="nav__item"
              onClick={handleClick}
              to={section.name}
              smooth
              duration={SCROLL_DURATION + index * 300}
              delay={SCROLL_DELAY}
              offset={SCROLL_OFFSET}
              ignoreCancelEvents
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  triggerNav: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default Nav;
