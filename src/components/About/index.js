import React from 'react';

import './styles.scss';
import me from '../../assets/me.jpeg';

const About = () => (
  <article className="about">
    <img className="about__img" src={me} alt="Kacper Witas" />
    <p className="about__text">
      <span>
        Hi, my name is Kacper Witas, I&apos;m 26 years old IT passionate, based
        in Toruń, Poland. I&apos;m happy father of two wonderful kids. Currently
        on my last year of IT engineering studies at WSB University.
      </span>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        earum placeat harum ipsam odit enim doloribus ipsa, id fuga explicabo
        aperiam sed similique dignissimos qui perferendis eveniet nobis, quod
        eum beatae voluptas cupiditate officiis? Odit tempore maiores quaerat
        necessitatibus perspiciatis cupiditate? Neque beatae ratione sit, autem
        sapiente tempora quisquam earum iusto obcaecati recusandae quis harum
        animi vero sed optio libero? Magnam neque at libero ipsa ullam corporis
        magni consequatur quos.
      </span>
    </p>
  </article>
);
export default About;
