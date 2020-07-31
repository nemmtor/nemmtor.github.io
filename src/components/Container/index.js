import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
