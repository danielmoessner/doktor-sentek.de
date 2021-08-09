import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Article from '../components/Article';
import DynamicForm from '../components/DynamicForm';

function Page({ data }) {
  const page = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };
  const fields = [
    {
      label: page.form.name1,
      name: 'vorname',
    },
    {
      label: 'Kategorie',
      type: 'hidden',
      className: 'hidden',
      name: 'category',
      value: 'Anti Aging',
    },
    {
      label: page.form.name2,
      name: 'nachname',
    },
    {
      label: page.form.phone,
      name: 'phone',
      type: 'tel',
      className: 'sm:col-span-2',
    },
    {
      label: page.form.email,
      name: 'email',
      type: 'email',
      className: 'sm:col-span-2',
    },
    {
      label: page.form.message,
      name: 'nachricht',
      element: 'textarea',
      required: false,
      className: 'sm:col-span-2',
      attrs: {
        rows: 3,
      },
    },
  ];

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Article header={page.header} html={page.html} />
      <section
        className="relative py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
        id="formular"
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

          <div className="mt-12">
            <h2 className="text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {page.form.title}
            </h2>
            <div className="mt-8">
              <DynamicForm
                fields={fields}
                name="antiagingformular"
                dataProtectionText={page.form.dataProtection}
                successHeading={page.form.successTitle}
                successText={page.form.successText}
              />
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
    markdownRemark(frontmatter: { slug: { eq: "anti-aging" } }) {
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
        header {
          pretitle
          text
          title
        }
        form {
          title
          email
          successTitle
          button
          successText
          phone
          name2
          message
          name1
          dataProtection
        }
      }
    }
  }
`;
