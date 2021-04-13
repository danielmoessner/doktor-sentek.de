import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Article from '../components/Article';

function Page({ data }) {
  const operation = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };
  const page = data.pagesYaml;
  const header = {
    pretitle: page.pretitle,
    title: operation.title,
    text: operation.excerpt,
  };
  const image = operation.meta.image ? operation.meta.image.childImageSharp.resize.src : '';

  return (
    <Layout>
      <Seo title={operation.meta.title} description={operation.meta.description} image={image} />
      <Article header={header} html={operation.html} />
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  query($slug: String!) {
    pagesYaml(slug: { eq: "operation" }) {
      pretitle
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
      }
    }
  }
`;
