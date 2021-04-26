import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Article from '../components/Article';

function Page({ data }) {
  const page = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Article header={page.header} html={page.html} />
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
    markdownRemark(frontmatter: { slug: { eq: "inpatient-surgery" } }) {
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
      }
    }
  }
`;
