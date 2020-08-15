import React from 'react';

import {
  babel,
  gimp,
  git,
  html,
  javascript,
  material,
  npm,
  php,
  presta,
  react,
  sass,
  styled,
  trello,
  typescript,
  webpack,
} from 'assets/tech-icons';

import './styles.scss';

const mySkills = [
  {
    title: 'I feel confident with',
    skills: [
      { name: 'html5', icon: html },
      { name: 'css3/scss', icon: sass },
      { name: 'javascript', icon: javascript },
      { name: 'react', icon: react },
      { name: 'git', icon: git },
      { name: 'styled components', icon: styled },
      { name: 'material ui', icon: material },
    ],
  },
  {
    title: 'I am currently learning',
    skills: [
      { name: 'typescript', icon: typescript },
      { name: 'php', icon: php },
      { name: 'prestashop', icon: presta },
    ],
  },
  {
    title: 'Tools that I use',
    skills: [
      { name: 'babel', icon: babel },
      { name: 'gimp', icon: gimp },
      { name: 'npm & yarn', icon: npm },
      { name: 'webpack', icon: webpack },
      { name: 'trello', icon: trello },
    ],
  },
];

const Skills = () => {
  return (
    <>
      {mySkills.map(({ skills, title }) => (
        <article className="skills-type">
          <h3 className="skills-type__title">{title}</h3>
          <ul className="skills__list">
            {skills.map(({ name, icon }) => (
              <li key={name} className="skills__item">
                <img className="skills__icon" src={icon} alt={name} />
                <span className="skills__name">{name}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
};

export default Skills;
