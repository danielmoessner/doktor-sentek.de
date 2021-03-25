import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Component({ to, children }) {
  return (
    <Link
      to={to}
      className="p-3 block rounded-md hover:bg-teal-050 hover:text-teal-900 text-gray-900"
    >
      <p className="text-base font-medium">{children}</p>
    </Link>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Component;
