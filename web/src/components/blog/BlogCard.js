import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ButtonLink from "../ButtonLink"

export default ({
  fluid = null,
  text = "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web de- signs. The passage is attributed to an unknown.....",
  title = "Post Title",
  handle = "#",
  date = null,
}) => {
  const data = useStaticQuery(graphql`
    query BlogCardQuery {
      defaultBlogImageQuery: allFile(
        filter: { name: { eq: "defaultBlogImage" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const defaultBlogImage =
    data.defaultBlogImageQuery.edges[0].node.childImageSharp.fluid

  // if fluid is null (i.e. not passed in as a prop), use default image
  fluid = fluid ? fluid : defaultBlogImage

  return (
    <div className="blogCard">
      <div style={{ padding: 15 }}>
        <Img className="blogCard__image" fluid={fluid} />
      </div>
      <div className="blogCard__content">
        <h3 className="blogCard__title">{title}</h3>
        {date ? <div className="blogCard__date">Published: {date}</div> : null}
        <p className="blogCard__text">{text}</p>

        <ButtonLink
          url={`/updates/${handle}`}
          text="Continue Reading"
          classNames="indexPage__buttonLink"
        />
      </div>
    </div>
  )
}
