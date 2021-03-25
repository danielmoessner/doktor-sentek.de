import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Transition } from '@headlessui/react';
import NavigationDropdownLink from './NavigationDropdownLink';

function Component({ children, links, linkPrepend }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="group border-transparent text-gray-500 transition hover:border-teal-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium h-full focus:outline-none"
        aria-expanded="false"
      >
        <span>{children}</span>

        <svg
          className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <Transition
        enter="transition ease-out duration-200"
        show={dropdownOpen}
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        className="absolute z-10 transform translate-y-20 top-0 w-screen max-w-xs"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-1 bg-white py-3">
            {links.map((link) => (
              <NavigationDropdownLink key={link.slug} to={`/${linkPrepend}${link.slug}/`}>
                {link.title}
              </NavigationDropdownLink>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    })
  ).isRequired,
  linkPrepend: PropTypes.string.isRequired,
};

export default Component;
