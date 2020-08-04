import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Section = ({ children, title, id }) => {
  return (
    <section id={id} className="section">
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Section.defaultProps = {
  title: '',
};

export default Section;
