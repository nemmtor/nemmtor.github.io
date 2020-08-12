import React from 'react';

import lux from '../../assets/lux.png';
import lovematcher from '../../assets/lovematcher.png';

import './styles.scss';

const myProjects = [
  {
    title: 'Lux Adam Jankowski WebPage',
    description:
      'Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati quae dolore laudantium quia explicabo?',
    img: lux,
    imgAlt: 'Image of MacBook with opened webpage',
  },
  {
    title: 'Love Matcher App',
    description:
      'Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati quae dolore laudantium quia explicabo?',
    img: lovematcher,
    imgAlt: 'Image of mobile phone with opened app',
  },
];

const Projects = () => (
  <>
    {myProjects.map(({ title, description, img, imgAlt }) => (
      <article className="project">
        <div className="project__image-container">
          <img src={img} alt={imgAlt} className="project__image" />
        </div>
        <div className="project__details">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </article>
    ))}
  </>
);

export default Projects;
