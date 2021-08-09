import React from 'react';
import PropTypes from 'prop-types';
import ChildrenData from '../types/ChildrenData';

function Component({
  name,
  autoComplete,
  type,
  element,
  label,
  attrs,
  className,
  required,
  placeholder,
  children,
  value,
}) {
  const Tag = element;

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        <div className="mt-1">
          <Tag
            type={type}
            name={name}
            id={name}
            defaultValue={value}
            required={required}
            autoComplete={autoComplete}
            placeholder={placeholder}
            className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
            // eslint-disable-next-line
            {...attrs}
          >
            {children}
          </Tag>
        </div>
      </label>
    </div>
  );
}

Component.defaultProps = {
  autoComplete: '',
  type: 'text',
  element: 'input',
  attrs: {},
  className: '',
  required: true,
  value: '',
  children: null,

  placeholder: '',
};

export const InputProps = {
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  element: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: ChildrenData,
  className: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
};

Component.propTypes = InputProps;

export default Component;
