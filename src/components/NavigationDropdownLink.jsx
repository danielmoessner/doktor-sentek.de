import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Component({ to, children, close }) {
  return (
    <Link
      to={to}
      onClick={close}
      className="py-3 px-5 block hover:bg-teal-700 hover:text-teal-050 text-teal-050"
    >
      <p className="text-base font-medium">{children}</p>
    </Link>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  close: PropTypes.func.isRequired,
};

export default Component;
