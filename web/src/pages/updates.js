import React, { useState } from "react"
import { graphql } from "gatsby"

import BlogCard from "../components/blog/BlogCard"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const BlogPage = ({ data }) => {
  const blogPosts = data.allSanityBlogPost.edges
  console.log(data)

  const [postCount, setpostCount] = useState(3)

  let displayBlogPosts = blogPosts.slice(0, postCount)

  // const backgroundImage =
  //   data.backgroundImage.edges[0].node.childImageSharp.fluid

  // const backgroundFluidImageStack = [
  //   backgroundImage,
  //   `linear-gradient(0deg, rgba(18,47,111,1) 0%,rgba(18,47,111,1) 20%, rgba(255,255,255,0) 100%)`,
  // ].reverse()

  const increasePostCount = () => {
    return setpostCount(postCount + 5)
  }

  return (
    <Layout>
      <SEO title="Updates" />
      <div>
        <div
          // className="blog__contentContainer"
          className="flex items-center flex-col pt-20"
          style={{ paddingBottom: "25px" }}
        >
          <h1 className="blog__title">
            <span className="settings__textEmph">Updates</span>
          </h1>
          <div className="blog__posts">
            {displayBlogPosts.map(post => {
              /* check if featureImage exists on query, if so, add fluid property, if not assign null */

              const fluid = post.node.featureImage
                ? post.node.featureImage.asset.fluid
                : null

              return (
                <div className="blog__post" key={post.node.id}>
                  <BlogCard
                    title={post.node.title}
                    text={post.node.summary}
                    date={
                      post.node.publishedDate ||
                      post.node._createdAt.substr(0, 10)
                    }
                    handle={post.node.slug.current}
                    fluid={fluid}
                  />
                </div>
              )
            })}
          </div>
          {blogPosts.length > displayBlogPosts.length && (
            <button
              className="settings__mainButton"
              onClick={() => increasePostCount()}
            >
              More Posts
            </button>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityBlogPost(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          title
          slug {
            current
          }
          id
          summary
          publishedDate
          _createdAt
          featureImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }

    backgroundImage: allFile(
      filter: { relativePath: { eq: "indexBackground.jpg" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default BlogPage
