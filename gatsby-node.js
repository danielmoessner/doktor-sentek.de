const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create the animal pages
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { collection: { eq: "animal" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
      allOperationYaml {
        nodes {
          id
          slug
        }
      }
      allSicknessYaml {
        nodes {
          id
          slug
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `wildtiere/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/animal.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
  result.data.allOperationYaml.nodes.forEach((node) => {
    createPage({
      path: `operationen/${node.slug}/`,
      component: path.resolve(`./src/templates/operation.jsx`),
      context: {
        slug: node.slug,
        id: node.id,
      },
    });
  });
  result.data.allSicknessYaml.nodes.forEach((node) => {
    createPage({
      path: `krankheitsbilder/${node.slug}/`,
      component: path.resolve(`./src/templates/sickness.jsx`),
      context: {
        slug: node.slug,
        id: node.id,
      },
    });
  });
};
