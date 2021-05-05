import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Transition } from '@headlessui/react';
import { Link, useStaticQuery, graphql } from 'gatsby';
// import { SearchIcon } from '@heroicons/react/solid';
import NavigationLink from './NavigationLink';
import NavigationDropdown from './NavigationDropdown';
import NavigationMobileLink from './NavigationMobileLink';
import Logo from './LogoSvg';

function Component() {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`
    {
      contact: settingsYaml(slug: { eq: "contact" }) {
        phone
        email
      }
      illnesses: allMarkdownRemark(
        filter: { frontmatter: { collection: { eq: "illness" } } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
      navigation: settingsYaml(slug: { eq: "navigation" }) {
        link1
        link2
        link3
        link4
        link5
        link6
        focus {
          inpatientSurgery
          outpatientSurgery
          operations
          therapies
          antiAging
        }
        mobileLink2
        mobileLink4
      }
    }
  `);
  const { contact, navigation } = data;
  const illnessLinks = data.illnesses.nodes.map((node) => node.frontmatter);
  const focusLinks = [
    {
      title: navigation.focus.operations,
      slug: '/operationen',
    },
    {
      title: navigation.focus.therapies,
      slug: '/konservative-therapien',
    },
    {
      title: navigation.focus.antiAging,
      slug: '/anti-aging',
    },
  ];
  const contactLinks = [
    {
      title: 'Kontaktdaten',
      slug: '/kontakt',
    },
    {
      title: 'Sprechzeiten',
      slug: '/kontakt',
    },
    {
      title: 'Anfahrt',
      slug: '/kontakt',
    },
  ];

  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto lg:px-6">
          <div className="">
            <div className="border-b border-gray-100">
              <div className="pt-3 pb-4 px-4 sm:px-6 lg:px-0">
                <div className="flex flex-row">
                  <div className="flex flex-row space-x-7">
                    <div className="flex flex-row items-center">
                      <svg
                        className="w-6 h-6 text-teal-800 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        className="text-base font-medium text-gray-600 hover:text-teal-800"
                        href={`tel:${contact.phone}`}
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex flex-row items-center">
                      <svg
                        className="w-6 h-6 text-teal-800 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        className="text-base font-medium text-gray-600 hover:text-teal-800"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex-1 flex items-center justify-center pl-2 lg:ml-6 lg:justify-end">
                      <div className="max-w-lg w-full lg:max-w-xs">
                        <form method="GET" action="/suche/" className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            id="search"
                            name="suche"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                            placeholder="Suche"
                            type="search"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="border-b border-gray-100 lg:sticky lg:top-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto lg:px-6">
          <div className="">
            <div>
              <nav className="bg-white">
                <div className="relative flex flex-row-reverse justify-between h-24 px-4 sm:px-6 lg:px-0">
                  <div className="flex items-center lg:hidden relative">
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      type="button"
                      className="absolute right-0 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Menü öffnen</span>
                      <svg
                        className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                      <svg
                        className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                    <Link
                      to="/"
                      className="px-10 sm:px-4 md:px-0 flex-shrink-0 flex items-center text-teal-900 w-80"
                    >
                      <Logo />
                    </Link>
                    <div className="hidden lg:ml-6 lg:flex">
                      <NavigationLink to="/">{navigation.link1}</NavigationLink>
                      <NavigationLink to="/team/">{navigation.link2}</NavigationLink>
                      <NavigationDropdown
                        pageLink="/krankheitsbilder/"
                        linkPrepend="/krankheitsbilder/"
                        links={illnessLinks}
                      >
                        {navigation.link3}
                      </NavigationDropdown>
                      <NavigationDropdown pageLink="/schwerpunkte/" links={focusLinks}>
                        {navigation.link4}
                      </NavigationDropdown>
                      <NavigationDropdown pageLink="/kontakt/" links={contactLinks}>
                        {navigation.link5}
                      </NavigationDropdown>
                    </div>
                  </div>
                </div>

                <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                  <div className="pt-2 pb-4 space-y-1">
                    <NavigationMobileLink to="/">{navigation.link1}</NavigationMobileLink>
                    <NavigationMobileLink to="/team/">{navigation.link2}</NavigationMobileLink>
                    {illnessLinks.map((link) => (
                      <NavigationMobileLink key={link.slug} to={`/krankheitsbilder/${link.slug}/`}>
                        <div className="flex space-x-2">
                          <div>{navigation.mobileLink2}</div>
                          <div>{link.title}</div>
                        </div>
                      </NavigationMobileLink>
                    ))}
                    <NavigationMobileLink to="/operationen/">
                      {navigation.focus.operations}
                    </NavigationMobileLink>
                    <NavigationMobileLink to="/operationen/">
                      {navigation.focus.therapies}
                    </NavigationMobileLink>
                    <NavigationMobileLink to="/operationen/">
                      {navigation.focus.antiAging}
                    </NavigationMobileLink>
                    <NavigationMobileLink to="/kontakt/">{navigation.link5}</NavigationMobileLink>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
