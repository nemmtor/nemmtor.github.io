import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const AsideNav = ({ currentSection, isNavOpen, sections }) => {
  return (
    <aside className={`aside ${isNavOpen ? 'aside--hidden' : ''}`}>
      <div className="aside__bar" />
      <ul className="aside__list">
        {sections.map(({ name, title }, index) => (
          <li
            className={`aside__section ${
              currentSection === name ? 'aside__section--active' : ''
            }`}
            key={name}
          >
            <span className="aside__section-index">{`0${index + 1}`}</span>
            <span className="aside__section-name">{title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

AsideNav.propTypes = {
  currentSection: PropTypes.string,
  isNavOpen: PropTypes.bool.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
    }),
  ).isRequired,
};

AsideNav.defaultProps = {
  currentSection: null,
};

export default AsideNav;
