/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

// async function that accepts and object
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // const pages = await graphql(`
  //   {
  //     allSanityPages {
  //       edges {
  //         node {
  //           id
  //           slug {
  //             current
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // // The above will grab all of our pages on startup, based on this query

  // pages.data.allSanityPages.edges.forEach(edge => {
  //   createPage({
  //     path: edge.node.slug.current,
  //     component: path.resolve("./src/templates/ServicePageTemplate.js"),
  //     context: {
  //       id: edge.node.id,
  //       slug: edge.node.slug.current,
  //     },
  //   })
  // })

  const blogposts = await graphql(`
    {
      allSanityBlogPost {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  blogposts.data.allSanityBlogPost.edges.forEach(edge => {
    createPage({
      path: `updates/${edge.node.slug.current}`,
      component: path.resolve("./src/templates/BlogPostTemplate.js"),
      context: {
        id: edge.node.id,
        slug: edge.node.slug.current,
      },
    })
  })
}
