import { graphql } from 'gatsby';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Seo from '../components/Seo';
import Indication from '../components/Indication';

function Page({ data, location }) {
  const page = data.pagesYaml;
  const operations = data.operations.nodes.map((node) => ({
    type: 'Operation',
    ...node.frontmatter,
  }));
  const therapies = data.therapies.nodes.map((node) => ({
    type: 'Konservative Therapie',
    ...node.frontmatter,
  }));
  const illnesses = data.illnesses.nodes.map((node) => ({
    type: 'Krankheitsbilder',
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
      <Indication />
      <section>
        {results.map((result) => (
          <div key={`${result.slug}${result.type}`}>{result.title}</div>
        ))}
      </section>
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
