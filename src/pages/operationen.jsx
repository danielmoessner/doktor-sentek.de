import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Indication from '../components/Indication';

function Page({ data }) {
  const page = data.pagesYaml;
  const operations = data.operations.nodes.map((node) => node.frontmatter);
  const outpatientSurgery = data.outpatientSurgery.frontmatter;
  const inpatientSurgery = data.inpatientSurgery.frontmatter;

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
            <div>
              <Link to="/stationaeres-operieren/" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {inpatientSurgery.header.title}
                </p>
                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                  {inpatientSurgery.header.text}
                </p>
              </Link>
              <div className="mt-3">
                <Link
                  to="/stationaeres-operieren/"
                  className="text-base font-semibold text-teal-600 hover:text-teal-500"
                >
                  {page.content.button}
                </Link>
              </div>
            </div>
            <div>
              <Link to="/ambulantes-operieren/" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {outpatientSurgery.header.title}
                </p>
                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                  {outpatientSurgery.header.text}
                </p>
              </Link>
              <div className="mt-3">
                <Link
                  to="/ambulantes-operieren/"
                  className="text-base font-semibold text-teal-600 hover:text-teal-500"
                >
                  {page.content.button}
                </Link>
              </div>
            </div>
            {operations.map((operation) => (
              <div key={operation.slug}>
                <Link to={`/operationen/${operation.slug}`} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{operation.title}</p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">{operation.excerpt}</p>
                </Link>
                <div className="mt-3">
                  <Link
                    to={`/operationen/${operation.slug}`}
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
    pagesYaml(slug: { eq: "operations" }) {
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
    outpatientSurgery: markdownRemark(
      frontmatter: { slug: { eq: "outpatient-surgery" }, collection: { eq: "page" } }
    ) {
      frontmatter {
        header {
          title
          text
        }
      }
    }
    inpatientSurgery: markdownRemark(
      frontmatter: { slug: { eq: "inpatient-surgery" }, collection: { eq: "page" } }
    ) {
      frontmatter {
        header {
          title
          text
        }
      }
    }
    operations: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "operation" } } }
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
