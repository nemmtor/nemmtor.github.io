import React from 'react';

import lux from '../../assets/lux.png';

import lovematcher from '../../assets/lovematcher.png';
import html from '../../assets/html.svg';
import sass from '../../assets/sass.svg';
import javascript from '../../assets/javascript.svg';
import php from '../../assets/php.svg';
import react from '../../assets/react.svg';
import styledcomponents from '../../assets/styledcomponents.png';

import Project from './Project';

import './styles.scss';

const myProjects = [
  {
    title: 'Lux Adam Jankowski',
    description: 'Single page website made with HTML5, SCSS, JS and PHP.',
    img: {
      src: lux,
      alt: 'Macbook with opened webpage',
    },
    urls: {
      repo: 'https://github.com/nemmtor/lux-remonty',
      live: 'https://lux-remonty.pl',
    },
    stack: [
      {
        src: html,
        alt: 'html',
      },
      {
        src: sass,
        alt: 'sass',
      },
      {
        src: javascript,
        alt: 'javascript',
      },
      {
        src: php,
        alt: 'php',
      },
    ],
  },
  {
    title: 'Love Matcher App',
    description:
      'App which will tell you if you and your crush match each other, made with React',
    img: {
      src: lovematcher,
      alt: 'Mobile phone with opened app',
    },
    urls: {
      repo: 'https://github.com/nemmtor/love-matcher',
      live: 'https://love-matcher.netlify.app/',
    },
    stack: [
      {
        src: react,
        alt: 'react',
      },
      {
        src: styledcomponents,
        alt: 'styled components',
      },
    ],
  },
];

const Projects = () => {
  return (
    <>
      {myProjects.map((details) => (
        <Project details={details} key={details.title} />
      ))}
    </>
  );
};

export default Projects;
