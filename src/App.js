import React from 'react';

import AsideNav from './components/AsideNav';
import Container from './components/Container';
import ContentContainer from './components/ContentContainer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Skills from './components/Skills';

export default function App() {
  return (
    <Container>
      <Nav />
      <ContentContainer>
        <AsideNav />
        <Header>asd</Header>
        <Main>
          <Skills />
        </Main>
      </ContentContainer>
    </Container>
  );
}
