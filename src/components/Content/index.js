import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Content = ({ children, isNavOpen }) => (
  <div className={`content ${isNavOpen ? 'moved' : ''}`}>{children}</div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
};

export default Content;
