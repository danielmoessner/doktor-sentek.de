import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navigation from './Navigation';

function Layout({ children, header }) {
  return (
    <div>
      <Navigation />
      {header}
      <main className="bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  header: null,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  header: PropTypes.element,
};

export default Layout;
