import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Component({ to, children }) {
  return (
    <Link
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      to={to}
    >
      {children}
    </Link>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Component;
