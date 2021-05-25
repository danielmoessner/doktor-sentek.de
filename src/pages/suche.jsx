import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Seo from '../components/Seo';
import Indication from '../components/Indication';

function Page({ data, location }) {
  const page = data.pagesYaml;
  const operations = data.operations.nodes.map((node) => ({
    type: 'operationen',
    ...node.frontmatter,
  }));
  const therapies = data.therapies.nodes.map((node) => ({
    type: 'konservative-therapien',
    ...node.frontmatter,
  }));
  const illnesses = data.illnesses.nodes.map((node) => ({
    type: 'krankheitsbilder',
    ...node.frontmatter,
  }));
  const allItems = operations.concat(therapies).concat(illnesses);
  const [results, setResults] = useState(allItems);

  const params = new URLSearchParams(location.search);
  const search = params.get('suche');
  if (search) {
    const newResults = allItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    if (results.length !== newResults.length) setResults(newResults);
  }

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header title={page.header.title} subtitle={page.header.text} />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {results.map((result) => (
              <div key={`${result.slug}${result.type}`}>
                <Link to={`/${result.type}/${result.slug}/`} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{result.title}</p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">{result.excerpt}</p>
                </Link>
                <div className="mt-3">
                  <Link
                    to={`/${result.type}/${result.slug}/`}
                    className="text-base font-semibold text-teal-600 hover:text-teal-500"
                  >
                    {page.content.button}
                  </Link>
                </div>
              </div>
            ))}
            {results.length === 0 ? <p>{page.content.noResults}</p> : ''}
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
  // eslint-disable-next-line
  location: PropTypes.object.isRequired
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "search" }) {
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
      content {
        button
        noResults
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
    illnesses: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "illness" } } }
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
