/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';

import { SCROLL_DURATION, SCROLL_OFFSET } from 'scrollconfig';

import './styles.scss';

const AsideNav = ({ currentSection, isNavOpen, sections }) => {
  const handleClick = (name) => {
    scroller.scrollTo(name, {
      duration: SCROLL_DURATION,
      offset: SCROLL_OFFSET,
      smooth: true,
    });
  };

  const asideRef = useRef(null);
  useEffect(() => {
    gsap.timeline().from(asideRef.current, {
      x: -120,
      delay: 0.5,
      duration: 0.5,
      ease: 'power4.out',
    });
  }, []);

  return (
    <aside
      className={`aside ${isNavOpen ? 'aside--hidden' : ''}`}
      ref={asideRef}
    >
      <div className="aside__bar" />
      <ul className="aside__list">
        {sections.map(({ name, title }, index) => (
          <li
            className={`aside__section ${
              currentSection === name ? 'aside__section--active' : ''
            }`}
            key={name}
          >
            <span
              className="aside__section-index"
              onClick={() => {
                if (currentSection !== name) {
                  handleClick(name);
                }
              }}
              role="none"
            >{`0${index + 1}`}</span>
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
