import React from 'react';

import lux from '../../assets/lux.png';

import lovematcher from '../../assets/lovematcher.png';
import Project from './Project';

import './styles.scss';

const myProjects = [
  {
    title: 'Lux Adam Jankowski WebPage',
    description:
      'Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati quae dolore laudantium quia explicabo?',
    img: {
      src: lux,
      alt: 'Macbook with opened webpage',
    },
  },
  {
    title: 'Love Matcher App',
    description:
      'Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati quae dolore laudantium quia explicabo?',
    img: {
      src: lovematcher,
      alt: 'Mobile phone with opened app',
    },
  },
];

const Projects = () => {
  return (
    <>
      {myProjects.map((details) => (
        <Project details={details} />
      ))}
    </>
  );
};

export default Projects;
