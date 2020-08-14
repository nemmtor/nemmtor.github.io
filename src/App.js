import React, { useState } from 'react';

import {
  AsideNav,
  About,
  Content,
  Header,
  Main,
  Nav,
  Projects,
  Section,
  Skills,
} from './components';

const sections = [
  { name: 'home', Component: Header, title: 'Home' },
  { name: 'skills', Component: Skills, title: 'What I know' },
  { name: 'projects', Component: Projects, title: 'Projects' },
  { name: 'about', Component: About, title: 'About me' },
  { name: 'contact', Component: Skills, title: 'Contact' },
];

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState();

  const triggerNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Nav
        triggerNav={triggerNav}
        sections={sections}
        setCurrentSection={setCurrentSection}
      />
      <AsideNav
        isNavOpen={isNavOpen}
        sections={sections}
        currentSection={currentSection}
      />
      <Content isNavOpen={isNavOpen}>
        <Header id="home" />
        <Main>
          {sections.map(({ name, Component, title }) => {
            if (name === 'home') {
              return null;
            }
            return (
              <Section id={name} title={title} key={name}>
                <Component />
              </Section>
            );
          })}
        </Main>
      </Content>
    </>
  );
}
