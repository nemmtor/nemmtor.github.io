import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ContentContainer = ({ children, isNavOpen }) => (
  <div className={`scene ${isNavOpen ? 'rotated' : ''}`}>
    <div className="content-container">{children}</div>
  </div>
);

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
};

export default ContentContainer;
