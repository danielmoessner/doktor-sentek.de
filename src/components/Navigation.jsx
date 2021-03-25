import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Transition } from '@headlessui/react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Button from './Button';
import NavigationLink from './NavigationLink';
import NavigationDropdown from './NavigationDropdown';
import NavigationMobileLink from './NavigationMobileLink';

function Component() {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`
    {
      allOperationYaml {
        nodes {
          slug
          title
        }
      }
      allIllnessYaml {
        nodes {
          slug
          title
        }
      }
    }
  `);
  const illnessLinks = data.allIllnessYaml.nodes;
  const operationLinks = data.allOperationYaml.nodes;

  return (
    <nav className="border-b border-gray-100">
      <div className="max-w-6xl mx-auto lg:px-6">
        <div className="">
          <div className="flex flex-col divide-y divide-gray-100">
            <div className="pt-3 pb-4 px-4 sm:px-6 lg:px-0">
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
                  <Link
                    className="text-base font-medium text-gray-600 hover:text-teal-800"
                    to="tel:098 128287348"
                  >
                    089 18287374
                  </Link>
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
                  <Link
                    className="text-base font-medium text-gray-600 hover:text-teal-800"
                    to="mailto:info@email.de"
                  >
                    info@email.de
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <nav className="bg-white">
                <div className="relative flex flex-row-reverse justify-between h-24 px-4 sm:px-6 lg:px-0">
                  <div className="flex items-center lg:hidden">
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
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
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-teal-600.svg"
                        alt="Workflow"
                      />
                      <img
                        className="hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-teal-600-mark-gray-800-text.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                      <NavigationLink to="/">Startseite</NavigationLink>
                      <NavigationDropdown linkPrepend="krankheitsbilder/" links={illnessLinks}>
                        Krankheitsbilder
                      </NavigationDropdown>
                      <NavigationLink to="/nicht-operative-therapie/">
                        Nicht-operative Therapie
                      </NavigationLink>
                      <NavigationDropdown linkPrepend="operationen/" links={operationLinks}>
                        Operationen
                      </NavigationDropdown>
                      <NavigationLink to="/team/">Team</NavigationLink>
                      <div className="self-center">
                        <Button to="/kontakt/">Sprechstunden</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                  <div className="pt-2 pb-4 space-y-1">
                    <NavigationMobileLink to="/">Startseite</NavigationMobileLink>
                    {illnessLinks.map((link) => (
                      <NavigationMobileLink key={link.slug} to={`/krankheitsbilder/${link.slug}/`}>
                        <div className="flex space-x-2">
                          <div>Krankheitsbild:</div>
                          <div>{link.title}</div>
                        </div>
                      </NavigationMobileLink>
                    ))}
                    <NavigationMobileLink to="/nicht-operative-therapie/">
                      Nicht-operative Therapie
                    </NavigationMobileLink>
                    {operationLinks.map((link) => (
                      <NavigationMobileLink key={link.slug} to={`/operationen/${link.slug}/`}>
                        <div className="flex space-x-2">
                          <div>Operation:</div>
                          <div>{link.title}</div>
                        </div>
                      </NavigationMobileLink>
                    ))}
                    <NavigationMobileLink to="/team/">Team</NavigationMobileLink>
                    <NavigationMobileLink to="/kontakt/">Sprechstunden</NavigationMobileLink>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
