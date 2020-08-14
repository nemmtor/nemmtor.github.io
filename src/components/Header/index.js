import React from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';

import './styles.scss';
import arrow from '../../assets/arrow-right.svg';

const Header = ({ id }) => {
  const handleCtaClick = () => {
    scroller.scrollTo('contact', {
      duration: 1500,
      smooth: true,
      offset: -60,
    });
  };

  return (
    <header id={id} className="header">
      <div className="hero-wrapper">
        <section className="hero">
          <h1 className="hero__title">
            Your next front-end developer
            <span>Kacper Witas</span>
          </h1>
          <button type="button" className="hero__cta" onClick={handleCtaClick}>
            <span>Hire me</span>
            <img src={arrow} alt="Arrow right" />
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
