import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Section = ({ children, title }) => {
  return (
    <section className="section">
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Section.defaultProps = {
  title: '',
};

export default Section;
