import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Main = ({ children }) => <main className="main">{children}</main>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
