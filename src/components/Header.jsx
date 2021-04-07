import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';

function Component({ title, subtitle }) {
  return (
    <header className="bg-gray-50 shadow relative">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-xl text-gray-500">{subtitle}</p>
        </div>
        <div className="mt-10 w-full max-w-xs" />
      </div>
    </header>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Component;
