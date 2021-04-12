import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Component({ small, to, children }) {
  return (
    <Link
      className={`inline-flex items-center border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 
      ${small ? 'px-4 py-2' : 'px-6 py-3'}`}
      to={to}
    >
      {children}
    </Link>
  );
}

Component.defaultProps = {
  small: false,
};

Component.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  small: PropTypes.bool,
};

export default Component;
