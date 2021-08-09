import PropTypes from 'prop-types';

const ChildrenData = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
  PropTypes.string,
]);

export default ChildrenData;
