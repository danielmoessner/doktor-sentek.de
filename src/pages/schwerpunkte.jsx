import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';

function Page({ data }) {
  const page = data.pagesYaml;
  const operations = data.operations.nodes.map((node) => node.frontmatter);
  const therapies = data.therapies.nodes.map((node) => node.frontmatter);

  return (
    <Layout
      header={
        // eslint-disable-next-line
        <Header
          title={page.header.title}
          subtitle={page.header.text}
        />
      }
    >
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <section className="bg-white">
        <div className="py-32">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-100 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Operationen
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
                      Mehr erfahren
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
                Konservative Therapie
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
                      Mehr erfahren
                    </Link>
                  </div>
                </div>
              ))}
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
      }
    }
    operations: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "operation" } } }
      sort: { fields: frontmatter___title }
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
      sort: { fields: frontmatter___title }
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
