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
  const therapies = data.therapies.nodes.map((node) => node.frontmatter);
  const antiAging = data.antiAging.frontmatter;
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
        <div className="pb-32 pt-4">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-100 lg:max-w-7xl">
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
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
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="pb-32 pt-4">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-100 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                {page.content.operationsHeading}
              </h2>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {operations.map((post) => (
                <div key={post.slug}>
                  <Link to={`/krankheitsbilder/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.excerpt}</p>
                  </Link>
                  <div className="mt-3">
                    <Link
                      to={`/krankheitsbilder/${post.slug}`}
                      className="text-base font-semibold text-teal-600 hover:text-teal-500"
                    >
                      {page.content.button}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="pb-32 pt-4">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-100 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                {page.content.therapiesHeading}
              </h2>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {therapies.map((post) => (
                <div key={post.slug}>
                  <Link to={`/krankheitsbilder/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.excerpt}</p>
                  </Link>
                  <div className="mt-3">
                    <Link
                      to={`/krankheitsbilder/${post.slug}`}
                      className="text-base font-semibold text-teal-600 hover:text-teal-500"
                    >
                      {page.content.button}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="pb-32 pt-4">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-100 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                {page.content.moreHeading}
              </h2>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              <div>
                <Link to="/anti-aging/" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{antiAging.header.title}</p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">
                    {antiAging.header.text}
                  </p>
                </Link>
                <div className="mt-3">
                  <Link
                    to="/anti-aging/"
                    className="text-base font-semibold text-teal-600 hover:text-teal-500"
                  >
                    {page.content.button}
                  </Link>
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
    pagesYaml(slug: { eq: "focus" }) {
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
        operationsHeading
        therapiesHeading
        moreHeading
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
    antiAging: markdownRemark(
      frontmatter: { slug: { eq: "anti-aging" }, collection: { eq: "page" } }
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
