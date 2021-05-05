const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      operations: allMarkdownRemark(filter: { frontmatter: { collection: { eq: "operation" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      illnesses: allMarkdownRemark(filter: { frontmatter: { collection: { eq: "illness" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      therapies: allMarkdownRemark(filter: { frontmatter: { collection: { eq: "therapy" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  result.data.operations.nodes.forEach((node) => {
    createPage({
      path: `operationen/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/operation.jsx`),
      context: {
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
  result.data.illnesses.nodes.forEach((node) => {
    createPage({
      path: `krankheitsbilder/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/illness.jsx`),
      context: {
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
  result.data.therapies.nodes.forEach((node) => {
    createPage({
      path: `konservative-therapien/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/therapy.jsx`),
      context: {
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
};
