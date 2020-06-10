import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ServiceLink = ({
  icon,
  alt = "Image Placeholder",
  name = "",
  url = "#",
  description = "",
}) => {
  // const [plusState, setPlusState] = useState(true)

  const data = useStaticQuery(graphql`
    query ServiceLinkQuery {
      plusQuery1: allFile(filter: { name: { eq: "+-1" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const plusIconA = data.plusQuery1.edges[0].node.childImageSharp.fixed
  // const plusIconB = data.plusQuery2.edges[0].node.childImageSharp.fixed

  return (
    <div className="indexPage_serviceIconContainer">
      <Img className="indexPage__serviceIcon" fluid={icon} alt={alt} />
      {/* This div for grid layout purposes */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {name}
        </h2>
        <p style={{ fontSize: "1rem", textAlign: "center" }}>{description}</p>
        <Link
          to={url}
          // onMouseOver={() => setPlusState(false)}
          // onMouseOut={() => setPlusState(true)}
        >
          <Img fixed={plusIconA} className="index__plusLink index__plusIconA" />

          {/* <Img fixed={plusIconB} className="index__plusLink index__plusIconB" /> */}
        </Link>
      </div>
    </div>
  )
}

export default ServiceLink
