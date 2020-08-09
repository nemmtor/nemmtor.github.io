import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

const SCROLL_DURATION = 300;
const SCROLL_DELAY = 300;
const SCROLL_OFFSET = -100;

const Link = ({
  onClick,
  onKeyDown,
  title,
  isOpen,
  name,
  setCurrentSection,
}) => (
  <ScrollLink
    activeClass="nav__list-item--active"
    className="nav__list-item"
    tabIndex={isOpen ? '0' : '-1'}
    onKeyDown={onKeyDown}
    to={name}
    smooth
    onClick={onClick}
    offset={SCROLL_OFFSET}
    delay={SCROLL_DELAY}
    duration={SCROLL_DURATION}
    onSetActive={() => {
      setCurrentSection(name);
    }}
    spy
  >
    {title}
  </ScrollLink>
);

Link.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  setCurrentSection: PropTypes.func.isRequired,
};

export default Link;
