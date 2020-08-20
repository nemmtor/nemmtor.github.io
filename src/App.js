import React, { useState } from 'react';

import { AsideNav, ContentContainer, Nav, Section } from 'components';
import { About, Contact, Footer, Header, Projects, Skills } from 'sections';

const sections = [
  { name: 'home', Component: Header, title: 'Home' },
  { name: 'skills', Component: Skills, title: 'What I know' },
  { name: 'projects', Component: Projects, title: 'Projects' },
  { name: 'about', Component: About, title: 'About me' },
  { name: 'contact', Component: Contact, title: 'Contact' },
];

export default function App() {
  // use state for dealing with triggering navigation as it can be
  // triggered by few components in a component tree
  const [isNavOpen, setIsNavOpen] = useState(false);

  // used here because aside nav will show current section based
  // on nav active class
  const [currentSection, setCurrentSection] = useState();

  return (
    <>
      <Nav
        isNavOpen={isNavOpen}
        sections={sections}
        setCurrentSection={setCurrentSection}
        setIsNavOpen={setIsNavOpen}
      />

      <AsideNav
        currentSection={currentSection}
        isNavOpen={isNavOpen}
        sections={sections}
      />

      <ContentContainer isNavOpen={isNavOpen}>
        <Header id="home" />
        <main>
          {sections.map(({ Component, name, title }) => {
            // omit the header as it is outside of main
            return (
              name !== 'home' && (
                <Section id={name} title={title} key={name}>
                  <Component />
                </Section>
              )
            );
          })}
        </main>
      </ContentContainer>
      <Footer />
    </>
  );
}
