import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Article from '../components/Article';
import Header from '../components/Header';

function Page({ data, location }) {
  let formSent = false;
  if (location.hash && location.hash === '#formular-danke') formSent = true;
  const operation = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };
  const page = data.pagesYaml;
  const header = {
    pretitle: page.pretitle,
    title: operation.title,
    text: operation.excerpt,
  };
  const [enabled, setEnabled] = useState(false);

  return (
    <Layout>
      <Seo
        title={operation.meta.title}
        description={operation.meta.description}
        image={operation.meta.image.childImageSharp.resize.src}
      />
      <Header image={operation.image.childImageSharp.gatsbyImageData} />
      <Article header={header} html={operation.html} />

      <div
        className="relative py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
        id="formular-danke"
      >
        <div className="max-w-xl mx-auto" id="formular">
          <svg
            className="absolute bottom-0 left-0 transform -translate-x-64 xl:-translate-x-1/4"
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

          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {!formSent ? page.form.title : page.form.successTitle}
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              {!formSent ? page.form.text : page.form.successText}
            </p>
          </div>
          {!formSent && (
            <div className="mt-12">
              <form
                action={`${location.pathname}#formular-danke`}
                method="POST"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                data-netlify="true"
                name="operationsgespraech"
              >
                <input type="hidden" name="form-name" value="operationsgespraech" />
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                    {page.form.name1}
                    <div className="mt-1">
                      <input
                        type="text"
                        required
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                    {page.form.name2}
                    <div className="mt-1">
                      <input
                        type="text"
                        required
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                    {page.form.phone}
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="tel"
                        required
                        id="tel"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {page.form.email}
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="operation" className="block text-sm font-medium text-gray-700">
                    {page.form.operation}
                    <div className="mt-1">
                      <input
                        defaultValue={operation.title}
                        id="operation"
                        name="operation"
                        required
                        type="text"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {page.form.message}
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setEnabled(!enabled)}
                        className={`${
                          enabled ? 'bg-teal-600' : 'bg-gray-200'
                        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}
                        role="switch"
                        aria-checked="false"
                      >
                        <input
                          className="transform sr-only translate-x-3 translate-y-2"
                          type="checkbox"
                          checked={enabled}
                          onChange={() => {}}
                          required
                        />
                        <span
                          aria-hidden="true"
                          className={`${
                            enabled ? 'translate-x-5' : 'translate-x-0'
                          } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                        />
                      </button>
                    </div>
                    <div className="ml-3">
                      <p className="text-base text-gray-500">{page.form.dataProtection}</p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    {page.form.button}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line
  location: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  query($slug: String!) {
    pagesYaml(slug: { eq: "operation" }) {
      content {
        pretitle
      }
      form {
        title
        successText
        successTitle
        operation
        hoursLabel
        text
        name1
        name2
        phone
        email
        hours {
          hour
          active
        }
        message
        dataProtection
        button
      }
    }
    markdownRemark(frontmatter: { collection: { eq: "operation" }, slug: { eq: $slug } }) {
      id
      html
      frontmatter {
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
        title
        excerpt
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
