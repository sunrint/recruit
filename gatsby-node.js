const path = require("path");

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/job.tsx');

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: {
          order: DESC,
          fields: [frontmatter___date],
        },
        limit: 1000,
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    });
  });
};
