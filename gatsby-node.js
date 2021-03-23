const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allDatoCmsProduct {
        nodes {
          originalId
          slug
        }
      }
    }
  `);

  result.data.allDatoCmsProduct.nodes.forEach(({ slug, originalId: id }) => {
    createPage({
      path: `/products/${slug}`,
      component: path.resolve(`./src/templates/product-template.js`),
      context: { slug, id },
    });
  });
};
