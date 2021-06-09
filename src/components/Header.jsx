import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import GatsbyImageData from '../types/GatsbyImageData';
import Container from './Container';

function Component({ title, subtitle, sideImage }) {
  return (
    <header className="bg-teal-800 shadow">
      {title && subtitle && (
        <div className="relative overflow-hidden">
          <Container>
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
              <div className="max-w-xl py-8 md:pt-8 md:pb-10">
                <h1 className="text-4xl font-medium text-teal-050 md:text-5xl sm:tracking-tight">
                  {title}
                </h1>
                <p className="mt-2 text-xl text-teal-050 lg:mt-5">{subtitle}</p>
              </div>
              {sideImage && (
                <div className="w-full md:w-1/2 pt-5 md:pt-0">
                  <div className="aspect-h-8 aspect-w-16">
                    <div className="">
                      <GatsbyImage
                        className="w-auto max-w-full h-full"
                        objectFit="contain"
                        loading="eager"
                        image={sideImage}
                        objectPosition="50% 50%"
                        alt={title}
                      />
                    </div>
                  </div>
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
  title: '',
  subtitle: '',
  sideImage: null,
};

Component.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sideImage: GatsbyImageData,
};

export default Component;
