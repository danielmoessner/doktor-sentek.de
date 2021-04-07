import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';

function Page({ data }) {
  const page = data.pagesYaml;

  return (
    <Layout
      header={
        // eslint-disable-next-line
        <Header
          title="Kontakt"
          subtitle="Wir freuen uns darauf Sie in unserer Praxis begrüßen zu dürfen"
        />
      }
    >
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <section>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Kontakt</h2>
                <div className="mt-3">
                  <p className="text-lg text-gray-500">Wir freuen uns auf Ihren Anruf</p>
                </div>
                <div className="mt-9">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-400"
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>+1 (555) 123 4567</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-400"
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>support@example.com</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <address>
                        Straße 123
                        <br />
                        12345 Stadt
                      </address>
                    </div>
                  </div>
                </div>
                <div className="mt-9">
                  <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Anfahrt</h2>
                  <iframe
                    className="w-full mt-3"
                    title="Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.9845732358253!2d12.683652515845118!3d53.52233238001632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47abf8e87c9242b5%3A0xe046cee4ec56306c!2sMEDICLIN%20M%C3%BCritz-Klinikum!5e0!3m2!1sde!2sde!4v1617796258987!5m2!1sde!2sde"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-12 sm:mt-16 md:mt-0">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Sprechstundenzeiten
                </h2>
                <div className="mt-3">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Montag</dt>
                      <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2 sm:text-right">
                        8:00 - 17:00 Uhr
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Dienstag</dt>
                      <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2 sm:text-right">
                        8:00 - 17:00 Uhr
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Mittwoch</dt>
                      <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2 sm:text-right">
                        8:00 - 17:00 Uhr
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Donnerstag</dt>
                      <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2 sm:text-right">
                        8:00 - 17:00 Uhr
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Freitag</dt>
                      <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2 sm:text-right">
                        8:00 - 17:00 Uhr
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Samstag</dt>
                      <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2 sm:text-right">
                        Geschlossen
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "contact" }) {
      meta {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
        description
        title
      }
    }
  }
`;
