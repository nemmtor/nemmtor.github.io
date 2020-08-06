import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { scroller } from 'react-scroll';

import logo from '../../assets/logo.svg';
import './styles.scss';
import Link from './Link';

const SCROLL_DURATION = 300;
const SCROLL_DELAY = 300;
const SCROLL_OFFSET = -80;

// TODO: FIX ENTER ON LAST LINK

const Nav = ({ triggerNav, sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const burger = useRef();

  const toggleNav = () => {
    triggerNav();
    setIsOpen(!isOpen);
  };

  const handleClick = (index, name) => {
    scroller.scrollTo(name, {
      duration: SCROLL_DURATION + index * 300,
      delay: SCROLL_DELAY,
      offset: SCROLL_OFFSET,
      smooth: true,
    });
    toggleNav();
  };

  // For trapping focus inside nav
  const handleKeyDown = (e, index) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.click();
    }

    // Handle tab for first item
    if (index === 0) {
      if (!e.shiftKey) return;
      e.preventDefault();
      if (e.keyCode === 9) {
        burger.current.focus();
      }
    }

    // Handle tab for last item
    if (index === sections.length - 1) {
      if (e.shiftKey) return;
      e.preventDefault();
      if (e.keyCode === 9) {
        burger.current.focus();
      }
    }
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
        aria-label="Toggle navigation"
        aria-controls="navigation"
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={toggleNav}
        ref={burger}
      >
        <div className="nav__burger-part" />
        <div className="nav__burger-part" />
        <div className="nav__burger-part" />
      </button>
      <ul
        id="navigation"
        role="menu"
        className={`nav__list ${isOpen ? 'nav__list--active' : ''}`}
      >
        {sections.map(({ name, title }, index) => (
          <li key={name} role="none">
            <Link
              title={title}
              onClick={() => handleClick(index, name)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              isOpen={isOpen}
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
