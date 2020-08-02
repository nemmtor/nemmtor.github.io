import React from 'react';

import htmlIcon from '../../assets/html.svg';
import sassIcon from '../../assets/sass.svg';
import jsIcon from '../../assets/javascript.svg';
import reactIcon from '../../assets/react.svg';
import gitIcon from '../../assets/git.svg';
import bsIcon from '../../assets/bootstrap.svg';
import materialIcon from '../../assets/material.png';
import tsIcon from '../../assets/typescript.svg';
import phpIcon from '../../assets/php.svg';
import prestaIcon from '../../assets/presta.png';
import babelIcon from '../../assets/babel.svg';
import gimpIcon from '../../assets/gimp.svg';
import herokuIcon from '../../assets/heroku.svg';
import npmIcon from '../../assets/npm.svg';
import webpackIcon from '../../assets/webpack.svg';
import trelloIcon from '../../assets/trello.svg';
import './styles.scss';

const confident = [
  { name: 'html5', icon: htmlIcon },
  { name: 'css3/scss', icon: sassIcon },
  { name: 'javascript', icon: jsIcon },
  { name: 'react', icon: reactIcon },
  { name: 'git', icon: gitIcon },
  { name: 'bootstrap', icon: bsIcon },
  { name: 'material ui', icon: materialIcon },
];

const currentlyLearning = [
  { name: 'typescript', icon: tsIcon },
  { name: 'php', icon: phpIcon },
  { name: 'prestashop', icon: prestaIcon },
];

const tools = [
  { name: 'babel', icon: babelIcon },
  { name: 'gimp', icon: gimpIcon },
  { name: 'heroku', icon: herokuIcon },
  { name: 'npm & yarn', icon: npmIcon },
  { name: 'webpack', icon: webpackIcon },
  { name: 'trello', icon: trelloIcon },
];

const Skills = () => {
  return (
    <>
      <article className="skills-type">
        <h3 className="skills-type__title">I feel confident working with</h3>
        <ul className="skills__list">
          {confident.map((skill) => (
            <li key={skill.name} className="skills__item">
              <img className="skills__icon" src={skill.icon} alt={skill.name} />
              <span className="skills__name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="skills-type">
        <h3 className="skills-type__title">I am currently learning</h3>
        <ul className="skills__list">
          {currentlyLearning.map((skill) => (
            <li key={skill.name} className="skills__item">
              <img className="skills__icon" src={skill.icon} alt={skill.name} />
              <span className="skills__name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="skills-type">
        <h3 className="skills-type__title">Tools that I use</h3>
        <ul className="skills__list">
          {tools.map((skill) => (
            <li key={skill.name} className="skills__item">
              <img className="skills__icon" src={skill.icon} alt={skill.name} />
              <span className="skills__name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Skills;
