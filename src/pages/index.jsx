import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import Seo from '../components/Seo';
import Footer from '../components/Footer';

function Page({ data }) {
  const page = data.pagesYaml;

  return (
    <div>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Navigation />

      <main>main</main>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "home" }) {
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
    }
  }
`;
