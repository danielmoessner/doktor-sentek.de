import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Article from '../components/Article';

function Page({ data }) {
  const therapy = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };
  const page = data.pagesYaml;
  const header = {
    pretitle: page.pretitle,
    title: therapy.title,
    text: therapy.excerpt,
  };

  return (
    <Layout>
      <Seo
        title={therapy.meta.title}
        description={therapy.meta.description}
        image={therapy.meta.image.childImageSharp.resize.src}
      />
      <Article header={header} html={therapy.html} />
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
    pagesYaml(slug: { eq: "therapy" }) {
      pretitle
    }
    markdownRemark(frontmatter: { collection: { eq: "therapy" }, slug: { eq: $slug } }) {
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
