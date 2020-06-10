import React from "react"
import BackgroundImage from "gatsby-background-image"

import SectionTitle from "../SectionTitle"
import BlogCard from "../blog/BlogCard"
import { Link, useStaticQuery, graphql } from "gatsby"

// Parameters include the image for the BackgroundImage component

const IndexBottomContainer = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query IndexBottomContainerQuery {
      postQuery: allSanityBlogPost(
        limit: 1
        sort: { fields: _createdAt, order: DESC }
      ) {
        edges {
          node {
            slug {
              current
            }
            title
            summary
            publishedDate
            _createdAt
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage fluid={fluid}>
      <div className="indexPage__bottomContainer">
        <SectionTitle className="indexPage__whatWeDoTitle">
          <span
            style={{
              borderTop: "solid white  1px",
              marginTop: 40,
              paddingTop: 12,
            }}
          >
            Latest <span style={{ color: "rgb(245, 192, 7)" }}>News</span>
          </span>
        </SectionTitle>
        <div className="indexPage__blogCardContainer">
          <BlogCard
            title={data.postQuery.edges[0].node.title}
            text={data.postQuery.edges[0].node.summary}
            handle={data.postQuery.edges[0].node.slug.current}
            date={
              data.postQuery.edges[0].node.publishedDate ||
              data.postQuery.edges[0].node._createdAt.substr(0, 10)
            }
          />
          {/* <div className="indexPage__readMoreContainer"> */}
          <Link
            to="/updates"
            className="settings__mainButton index__readMoreButton"
          >
            More Articles
          </Link>
          {/* </div> */}
        </div>
      </div>
    </BackgroundImage>
  )
}

export default IndexBottomContainer
