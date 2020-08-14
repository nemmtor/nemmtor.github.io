import React, { useState } from 'react';
import PropTypes from 'prop-types';

import arrowUp from '../../assets/arrow-up.svg';
import github from '../../assets/github.png';
import world from '../../assets/world.svg';

const Project = ({ details }) => {
  const { img, title, description, urls, stack } = details;

  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <article className="project">
      <div className="project__image-container">
        <img src={img.src} alt={img.alt} className="project__image" />
      </div>
      <div
        className={`project__details ${
          isActive ? 'project__details--active' : ''
        }`}
      >
        <button type="button" className="project__toggle" onClick={toggle}>
          <img src={arrowUp} alt="Arrow up" />
        </button>

        <h4 className="project__title">{title}</h4>
        <p className="project__description">{description}</p>
        <div className="project__stack">
          Tech stack:
          {stack.map(({ alt, src }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="project__stack-item"
            />
          ))}
        </div>
        <a
          className="project__link"
          href={urls.repo}
          tabIndex={isActive ? '0' : '-1'}
        >
          <img className="project__link-icon" src={github} alt="Github" />
          Code
        </a>
        <a
          className="project__link"
          href={urls.live}
          tabIndex={isActive ? '0' : '-1'}
        >
          <img className="project__link-icon" src={world} alt="Github" />
          Live
        </a>
      </div>
    </article>
  );
};

Project.propTypes = {
  details: PropTypes.shape({
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    urls: PropTypes.shape({
      repo: PropTypes.string.isRequired,
      live: PropTypes.string.isRequired,
    }).isRequired,
    stack: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
