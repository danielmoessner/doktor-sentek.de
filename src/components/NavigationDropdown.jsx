import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import NavigationDropdownLink from './NavigationDropdownLink';

function Component({
  children,
  links,
  linkPrepend,
  linksTitle,
  links2,
  startLinks,
  endLinks,
  links2Title,
  pageLink,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let timeout;
  const close = () => {
    timeout = setTimeout(() => setDropdownOpen(false), 200);
  };
  const open = () => {
    clearTimeout(timeout);
    setDropdownOpen(true);
  };
  const instantClose = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className={`relative inline-flex items-center group text-gray-500 ${
        dropdownOpen ? 'bg-teal-700 text-teal-050' : ''
      }`}
    >
      <Link
        to={pageLink}
        onMouseOver={open}
        onMouseLeave={close}
        onFocus={() => {}}
        className="border-transparent px-4 transition hover:border-teal-700 inline-flex items-center pt-1 border-b-2 text-base font-medium h-full focus:outline-none"
        aria-expanded="false"
      >
        <span>{children}</span>

        <svg
          className="text-gray-400 ml-2 h-5 w-5 group-hover:text-teal-050"
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
      </Link>

      <Transition
        enter="transition ease-out duration-200"
        show={dropdownOpen}
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        className="absolute z-10 transform translate-y-full bottom-0 w-screen max-w-sm"
        onMouseOver={open}
        onMouseLeave={close}
        onFocus={() => {}}
      >
        <div className="rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-1 bg-teal-900 bg-opacity-80 py-3">
            <div className="-ml-2">
              {startLinks.map((link) => (
                <NavigationDropdownLink key={link.link} to={link.link} close={instantClose}>
                  {link.text}
                </NavigationDropdownLink>
              ))}
            </div>
            {linksTitle && (
              <div className="text-sm pt-5 text-teal-800 uppercase px-3 font-medium tracking-wide">
                {linksTitle}
              </div>
            )}
            {links.map((link) => (
              <NavigationDropdownLink
                key={link.title}
                to={`${linkPrepend}${link.slug}/`}
                close={instantClose}
              >
                {link.title}
              </NavigationDropdownLink>
            ))}
            {links2Title && (
              <div className="pt-5 text-sm text-teal-800 uppercase px-3 font-medium tracking-wide">
                {links2Title}
              </div>
            )}
            {links2.map((link) => (
              <NavigationDropdownLink
                key={link.slug}
                to={`${linkPrepend}${link.slug}/`}
                close={instantClose}
              >
                {link.title}
              </NavigationDropdownLink>
            ))}
            <div className="-ml-2">
              {endLinks.map((link) => (
                <NavigationDropdownLink key={link.link} to={link.link} close={instantClose}>
                  {link.text}
                </NavigationDropdownLink>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

Component.defaultProps = {
  startLinks: [],
  endLinks: [],
  linksTitle: '',
  links2Title: '',
  links2: [],
  linkPrepend: '',
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    })
  ).isRequired,
  links2: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
  startLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  endLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  linksTitle: string,
  links2Title: string,
  linkPrepend: PropTypes.string,
  pageLink: PropTypes.string.isRequired,
};

export default Component;
