import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import GatsbyImageData from '../types/GatsbyImageData';

function Component({ title, subtitle, image }) {
  return (
    <header>
      {image && (
        <div className="">
          <GatsbyImage image={image} alt={title} />
        </div>
      )}
      {title && subtitle && (
        <div className="bg-gray-50 shadow relative overflow-hidden">
          <div className="max-w-7xl mx-auto py-8 px-4 relative sm:py-12 sm:px-6 lg:px-8 lg:flex lg:justify-between">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                {title}
              </h1>
              <p className="mt-2 text-xl text-gray-500 lg:mt-5">{subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

Component.defaultProps = {
  image: null,
  title: '',
  subtitle: '',
};

Component.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: GatsbyImageData,
};

export default Component;
