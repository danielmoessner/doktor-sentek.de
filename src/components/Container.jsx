import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
