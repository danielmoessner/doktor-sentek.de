import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Article from '../components/Article';

function Page({ data }) {
  const illness = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };
  const page = data.pagesYaml;
  const header = {
    pretitle: page.pretitle,
    title: illness.title,
    text: illness.excerpt,
  };
  const image = illness.meta.image ? illness.meta.image.childImageSharp.resize.src : '';

  return (
    <Layout>
      <Seo title={illness.meta.title} description={illness.meta.description} image={image} />
      <Article header={header} html={illness.html} />
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
    pagesYaml(slug: { eq: "illness" }) {
      pretitle
    }
    markdownRemark(frontmatter: { collection: { eq: "illness" }, slug: { eq: $slug } }) {
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
