import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import AnimalComponent from '../components/Animal';

function animal({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const image = data.markdownRemark.frontmatter.image.childImageSharp.fluid;

  return (
    <Layout>
      <AnimalComponent
        title={frontmatter.title}
        category={frontmatter.category}
        excerpt={frontmatter.excerpt}
        body={html}
        image={image}
      />
    </Layout>
  );
}

animal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default animal;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        category
        excerpt
        slug
        title
        image {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              src
              sizes
              srcSet
            }
          }
        }
      }
    }
  }
`;
