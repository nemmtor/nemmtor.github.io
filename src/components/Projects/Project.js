import React, { useState } from 'react';
import PropTypes from 'prop-types';

import arrowUp from '../../assets/arrow-up.svg';

const Project = ({ details }) => {
  const { img, title, description } = details;

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
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="project__toggle-container">
          <button type="button" className="project__toggle" onClick={toggle}>
            <img src={arrowUp} alt="Arrow up" />
          </button>
        </div>
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
