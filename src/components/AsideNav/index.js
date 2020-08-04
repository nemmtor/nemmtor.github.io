import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const AsideNav = ({ isNavOpen }) => (
  <aside className={`aside-container ${isNavOpen ? 'hidden' : ''}`}>
    <div className="aside__bar" />
    <ul className="aside__list">
      <li className="aside__item aside__item--active">
        <span>01</span>
        <span>Home</span>
      </li>
      <li className="aside__item">
        <span>02</span>
        <span>What I know</span>
      </li>
      <li className="aside__item">
        <span>03</span>
        <span>Projects</span>
      </li>
      <li className="aside__item">
        <span>04</span>
        <span>About me</span>
      </li>
      <li className="aside__item">
        <span>05</span>
        <span>Contact</span>
      </li>
    </ul>
  </aside>
);

AsideNav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default AsideNav;
