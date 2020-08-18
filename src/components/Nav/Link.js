import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

import { SCROLL_DELAY, SCROLL_DURATION, SCROLL_OFFSET } from 'scrollconfig';

const Link = ({
  handleClick,
  handleKeyDown,
  handleSetActive,
  index,
  isNavOpen,
  name,
  title,
}) => (
  <ScrollLink
    activeClass="nav__list-item--active"
    className="nav__list-item"
    delay={SCROLL_DELAY}
    duration={SCROLL_DURATION + 150 * index}
    onClick={handleClick}
    offset={SCROLL_OFFSET}
    onKeyDown={handleKeyDown}
    onSetActive={handleSetActive}
    role="menuitem"
    tabIndex={isNavOpen ? '0' : '-1'}
    to={name}
    smooth
    spy
  >
    {title}
  </ScrollLink>
);

Link.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Link;
