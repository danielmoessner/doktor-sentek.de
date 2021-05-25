import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className="bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default Layout;
