import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { upArrow, world } from 'assets';
import { github } from 'assets/tech-icons';

const Project = ({ details }) => {
  const { description, img, stack, title, urls } = details;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProjectDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="project">
      <div className="project__image-container">
        <img alt={img.alt} className="project__image" src={img.src} />
      </div>
      <div
        className={`project__details ${
          isExpanded ? 'project__details--active' : ''
        }`}
      >
        <button
          className="project__toggle"
          onClick={toggleProjectDetails}
          type="button"
        >
          <img alt="Arrow up" src={upArrow} />
        </button>

        <h4 className="project__title">{title}</h4>
        <p className="project__description">{description}</p>
        <div className="project__stack">
          Tech stack:
          {stack.map(({ alt, src }) => (
            <img
              alt={alt}
              className="project__stack-item"
              key={alt}
              src={src}
            />
          ))}
        </div>
        <a
          className="project__link"
          href={urls.repo}
          tabIndex={isExpanded ? '0' : '-1'}
        >
          <img alt="Github" className="project__link-icon" src={github} />
          Code
        </a>
        <a
          className="project__link"
          href={urls.live}
          tabIndex={isExpanded ? '0' : '-1'}
        >
          <img alt="Github" className="project__link-icon" src={world} />
          Live
        </a>
      </div>
    </article>
  );
};

Project.propTypes = {
  details: PropTypes.shape({
    description: PropTypes.string.isRequired,
    img: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    stack: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      live: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Project;
