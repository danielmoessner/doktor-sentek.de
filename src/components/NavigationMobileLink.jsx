import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';

function Component({ to, children }) {
  return (
    <Link
      className="border-transparent text-gray-500 hover:bg-teal-050 hover:border-teal-500 hover:text-teal-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
      activeClassName="bg-teal-050 border-teal-500 text-teal-700"
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
