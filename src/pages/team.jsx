import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Header from '../components/Header';

function Page({ data }) {
  const members = data.allMarkdownRemark.nodes.map((node) => ({
    ...node.frontmatter,
    html: node.html,
  }));

  return (
    <Layout
      header={
        // eslint-disable-next-line
        <Header
          title="Team"
          subtitle="Wir freuen uns darauf Sie in unserer Praxis begrüßen zu dürfen"
        />
      }
    >
      <section>
        <div className="bg-white" id="aerzte">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <ul className="space-y-12 max-w-4xl mx-auto sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              {members.map((member) => (
                <li className="sm:py-8" key={member.title} id={member.slug}>
                  <div className="space-y-4 sm:grid sm:grid-cols-12 sm:items-start sm:gap-12 sm:space-y-0">
                    <div className="sm:col-span-3 h-full">
                      <div className="sticky top-32">
                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                          <GatsbyImage
                            className="object-cover shadow-lg rounded-lg"
                            image={member.image.childImageSharp.gatsbyImageData}
                            alt={member.title}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-9">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{member.title}</h3>
                          <p className="text-teal-600">{member.subtitle}</p>
                        </div>
                        <div
                          className="prose prose-lg"
                          // eslint-disable-next-line
                          dangerouslySetInnerHTML={{ __html: member.html }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
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
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "member" } } }) {
      nodes {
        html
        frontmatter {
          title
          excerpt
          slug
          subtitle
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
