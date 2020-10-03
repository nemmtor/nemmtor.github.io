import gsap from 'gsap';
import React, { useEffect } from 'react';

import './styles.scss';
import { me } from 'assets';

const About = () => {
  useEffect(() => {
    gsap.from('.about__text-part > strong', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.about__text',
        start: 'top center',
      },
    });
  }, []);

  return (
    <article className="about">
      <div className="about__img-container">
        <img alt="Kacper Witas" className="about__img" src={me} />
      </div>
      <p className="about__text">
        <span className="about__text-part">
          Hi, my name is Kacper Witas, I&apos;m 26 years old{' '}
          <strong>IT passionate</strong>, based in Toruń, Poland. I&apos;m a{' '}
          <strong>happy father</strong> of two wonderful kids. Currently on my
          last year of IT engineering studies at WSB University.
        </span>
        <span className="about__text-part">
          I started coding back in 2018, my first programming language was{' '}
          <strong>python</strong>. I was motivated to learn programming because
          I had programming lessons at university and I quickly fallen in love
          with it. After some time I switched to <strong>javascript</strong>{' '}
          because I wanted to jump deep into <strong>web development</strong>. I
          still use python, mainly to automate boring office related work via
          selenium.
        </span>
        <span className="about__text-part">
          My biggest goal at the moment is to find my first webdev related job
          so I can become a professional developer and do what I love for the
          living. I&apos;m sure I&apos;ll fit perfectly in your company.
        </span>
      </p>
    </article>
  );
};
export default About;
