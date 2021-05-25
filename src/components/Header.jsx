import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import GatsbyImageData from '../types/GatsbyImageData';
import Container from './Container';

function Component({ title, subtitle, image, sideImage }) {
  return (
    <header className="bg-teal-800 shadow">
      {image && !title && !subtitle && (
        <div className="">
          <GatsbyImage image={image} alt={title} />
        </div>
      )}
      {title && subtitle && (
        <div className="relative overflow-hidden">
          <Container>
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
              <div className="max-w-xl py-8 md:pt-12 md:pb-16">
                <h1 className="text-4xl font-medium text-teal-050 md:text-5xl sm:tracking-tight">
                  {title}
                </h1>
                <p className="mt-2 text-xl text-teal-050 lg:mt-5">{subtitle}</p>
              </div>
              {sideImage && (
                <div className="w-full md:w-1/2 pt-5 md:pt-0">
                  <GatsbyImage className="w-full max-w-full h-auto" image={sideImage} alt={title} />
                </div>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

Component.defaultProps = {
  image: null,
  title: '',
  subtitle: '',
  sideImage: null,
};

Component.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: GatsbyImageData,
  sideImage: GatsbyImageData,
};

export default Component;
