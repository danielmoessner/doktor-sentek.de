import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Component({ to, children }) {
  return (
    <Link
      to={to}
      className="border-transparent text-gray-500 transition hover:border-teal-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      activeClassName="border-teal-600 text-gray-900" // , Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
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
