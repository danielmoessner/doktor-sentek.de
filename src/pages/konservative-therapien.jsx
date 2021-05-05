import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Indication from '../components/Indication';

function Page({ data }) {
  const page = data.pagesYaml;
  const therapies = data.therapies.nodes.map((node) => node.frontmatter);

  return (
    <Layout
      header={
        // eslint-disable-next-line
        <Header
          title={page.header.title}
          subtitle={page.header.text}
          image={page.header.image.childImageSharp.gatsbyImageData}
        />
      }
    >
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Indication />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {therapies.map((therapy) => (
              <div key={therapy.slug}>
                <Link to={`/konservative-therapien/${therapy.slug}/`} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{therapy.title}</p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">{therapy.excerpt}</p>
                </Link>
                <div className="mt-3">
                  <Link
                    to={`/konservative-therapien/${therapy.slug}/`}
                    className="text-base font-semibold text-teal-600 hover:text-teal-500"
                  >
                    {page.content.button}
                  </Link>
                </div>
              </div>
            ))}
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
    pagesYaml(slug: { eq: "therapies" }) {
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
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      content {
        button
      }
    }
    therapies: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "therapy" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          title
          excerpt
          slug
        }
      }
    }
  }
`;
