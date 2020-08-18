import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

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

gsap.registerPlugin(ScrollTrigger);

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
  const skillsRef = useRef([]);

  useEffect(() => {
    skillsRef.current.forEach((skills) => {
      gsap.fromTo(
        skills,
        { opacity: 0, y: 50 },
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          ease: 'power4.out',
          scrollTrigger: {
            markers: true,
            trigger: skills,
            start: '-=75vh center',
          },
        },
      );
    });
  }, []);
  return (
    <>
      {mySkills.map(({ skills, title }) => (
        <article
          className="skills-type"
          key={title}
          ref={(skill) => {
            skillsRef.current.push(skill);
          }}
        >
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
