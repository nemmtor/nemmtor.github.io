import React from 'react';

import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2020{' '}
        <a className="footer__link" href="https://github.com/nemmtor">
          Kacper Witas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
