import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Appointments from '../components/Appointments';
import Header from '../components/Header';
import lineBreaks from '../utils/lineBreaks';
import Indication from '../components/Indication';

function Page({ data }) {
  const page = data.pagesYaml;
  const contact = data.settingsYaml;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header title={page.header.title} subtitle={page.header.text} />
      <section>
        <div className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {page.contact.title1}
                </h2>
                <div className="mt-3">
                  <p
                    className="text-lg text-gray-500"
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{ __html: lineBreaks(page.contact.text1) }}
                  />
                </div>
                <div className="mt-9">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-400"
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
                    <a
                      href={`tel:${contact.phone}`}
                      className="ml-3 text-base font-medium text-gray-600 hover:text-teal-800"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex mt-6">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-400"
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
                    <a
                      href={`mailto:${contact.email}`}
                      className="ml-3 text-base font-medium text-gray-600 hover:text-teal-800"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex mt-6">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-400"
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
                      <address
                        className=""
                        // eslint-disable-next-line
                        dangerouslySetInnerHTML={{ __html: lineBreaks(contact.address) }} 
                      />
                    </div>
                  </div>
                  <div className="flex mt-6">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-400"
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
                    <div className="ml-3 text-base text-gray-500">{contact.fax}</div>
                  </div>
                </div>
                <div className="mt-9">
                  <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {page.contact.title2}
                  </h2>
                  <iframe
                    className="w-full mt-3"
                    title="Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.4125763402276!2d12.056870416396459!3d54.137337122867955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ac56621be6c67b%3A0xfbc52ed0b5426d9c!2sTrelleborger%20Str.%2010B%2C%2018107%20Rostock!5e0!3m2!1sde!2sde!4v1626190176670!5m2!1sde!2sde"
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
                  {page.contact.title3}
                </h2>
                <div className="mt-3">
                  <Appointments />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Indication />
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
      header {
        title
        text
      }
      contact {
        title1
        title2
        title3
        text1
      }
    }
    settingsYaml(slug: { eq: "contact" }) {
      phone
      address
      email
      fax
    }
  }
`;
