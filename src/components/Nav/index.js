import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import logo from '../../assets/logo.svg';
import './styles.scss';

const SCROLL_DURATION = 300;
const SCROLL_DELAY = 300;
const SCROLL_OFFSET = -80;

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
        className={`nav__burger ${isOpen ? 'nav__burger--open' : ''}`}
        onClick={handleClick}
      >
        <div className="nav__burger-part" />
        <div className="nav__burger-part" />
        <div className="nav__burger-part" />
      </button>
      <ul className={`nav__list ${isOpen ? 'nav__list--active' : ''}`}>
        {sections.map(({ name, title }, index) => (
          <li key={name}>
            <Link
              className="nav__list-item"
              onClick={handleClick}
              to={name}
              smooth
              duration={SCROLL_DURATION + index * 300}
              delay={SCROLL_DELAY}
              offset={SCROLL_OFFSET}
              ignoreCancelEvents
            >
              {title}
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