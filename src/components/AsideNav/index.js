import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const AsideNav = ({ isNavOpen, sections }) => (
  <aside className={`aside ${isNavOpen ? 'aside--hidden' : ''}`}>
    <div className="aside__bar" />
    <ul className="aside__list">
      {sections.map(({ name }, index) => (
        <li className="aside__section" key={name}>
          <span className="aside__section-index">{`0${index + 1}`}</span>
          <span className="aside__section-name">{name}</span>
        </li>
      ))}
    </ul>
  </aside>
);

AsideNav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default AsideNav;
