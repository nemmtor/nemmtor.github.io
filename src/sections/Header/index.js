import React from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';

import './styles.scss';
import { rightArrow } from 'assets';
import { SCROLL_DURATION, SCROLL_OFFSET } from 'scrollconfig';

const Header = ({ id }) => {
  const handleCtaClick = () => {
    scroller.scrollTo('contact', {
      // duration * 5 because there are 5 sections ahead and
      // SCROLL_DURATION is duration for scrolling through 1 section
      duration: SCROLL_DURATION * 5,
      offset: SCROLL_OFFSET,
      smooth: true,
    });
  };

  return (
    <header className="header" id={id}>
      <div className="hero-wrapper">
        <section className="hero">
          <h1 className="hero__title">
            Your next front-end developer
            <span>Kacper Witas</span>
          </h1>
          <button className="hero__cta" onClick={handleCtaClick} type="button">
            <span>Hire me</span>
            <img alt="Arrow right" src={rightArrow} />
          </button>
        </section>
      </div>
      <section className="header__info">
        <article className="header__info-item">
          <h2 className="header__info-header">With high standards</h2>
          <p className="header__info-text">
            Getting really good at what I do is my goal. I want to become
            professional developer.
          </p>
        </article>
        <article className="header__info-item">
          <h2 className="header__info-header">With passion</h2>
          <p className="header__info-text">
            I just love coding. Growing my skills is what gives me confidence
            and smile on my face.
          </p>
        </article>
        <article className="header__info-item">
          <h2 className="header__info-header">With Loyalty</h2>
          <p className="header__info-text">
            I want to find a place where I can stay for a long time and become
            important part of a dev team.
          </p>
        </article>
      </section>
    </header>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
