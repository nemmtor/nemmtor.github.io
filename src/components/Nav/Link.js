import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ onClick, onKeyDown, title, isOpen }) => (
  <button
    className="nav__list-item"
    onClick={onClick}
    onKeyDown={onKeyDown}
    type="button"
    tabIndex={isOpen ? '0' : '-1'}
    role="menuitem"
  >
    {title}
  </button>
);

Link.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Link;
