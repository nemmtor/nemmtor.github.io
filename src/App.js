import React from 'react';

import AsideNav from './components/AsideNav';
import ContentContainer from './components/ContentContainer';
import Container from './components/Container';
import Header from './components/Header';
import Nav from './components/Nav';

export default function App() {
  return (
    <Container>
      <Nav />
      <ContentContainer>
        <AsideNav />
        <Header>asd</Header>
      </ContentContainer>
    </Container>
  );
}
