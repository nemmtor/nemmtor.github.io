import React, { useState } from 'react';

import AsideNav from './components/AsideNav';
import Container from './components/Container';
import ContentContainer from './components/ContentContainer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Section from './components/Section';
import Skills from './components/Skills';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const triggerNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Container>
      <Nav triggerNav={triggerNav} />
      <AsideNav isNavOpen={isNavOpen} />
      <ContentContainer isNavOpen={isNavOpen}>
        <Header id="home" />
        <Main>
          <Section id="skills" title="What I know">
            <Skills />
          </Section>
        </Main>
      </ContentContainer>
    </Container>
  );
}
