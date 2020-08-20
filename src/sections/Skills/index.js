import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

import skillsData from './skillsData';
import './styles.scss';

const Skills = () => {
  // Ref for each skill article so I can animate each on scroll
  const skillsRef = useRef([]);

  useEffect(() => {
    // Animate each skill article on scroll
    skillsRef.current.forEach((skills) => {
      gsap.from(skills, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: skills,
          start: '-=75vh center',
        },
      });
    });
  }, []);

  return (
    <>
      {skillsData.map(({ skills, title }) => (
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
