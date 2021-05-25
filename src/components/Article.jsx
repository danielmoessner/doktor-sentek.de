import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';

function Component({ header, html }) {
  return (
    <section>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 right-0 transform translate-x-64 xl:translate-x-1/4"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-64 xl:-translate-x-1/4"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 right-0 transform translate-x-64 xl:translate-x-1/4"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          {header && (
            <header className="mb-6 text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-teal-800 font-semibold tracking-wide uppercase">
                  {header.pretitle}
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {header.title}
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">{header.text}</p>
            </header>
          )}
          <div
            className="prose prose-teal lg:prose-lg text-gray-500 mx-auto"
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </section>
  );
}

Component.defaultProps = {
  header: null,
};

Component.propTypes = {
  header: PropTypes.shape({
    pretitle: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  html: PropTypes.string.isRequired,
};

export default Component;
