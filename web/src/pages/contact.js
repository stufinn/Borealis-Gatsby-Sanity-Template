import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import urlBuilder from "@sanity/image-url"
// import PortableText from "@sanity/block-content-to-react"
import { FaPhone, FaStoreAlt } from "react-icons/fa"

import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => {
  // custom header from Sanity. If none provided, this will be null
  const headerImage = null
  const fluid = data.mapQuery.edges[0].node.childImageSharp.fluid

  return (
    //pass custom header to Layout
    <Layout headerImage={headerImage ? headerImage.asset : null}>
      {/* <SEO title={`${data.sanityContactPage.title}`} /> */}
      <div className="contactPage settings__greyGradientBkgd">
        <h1 style={{ textAlign: "center" }}>Title Here</h1>
        <div className="contactPage__content">
          <div className="contactPage__contactItems">
            <div className="contactPage__contactItemContainer">
              <FaPhone className="contactPage__icon" />
              <div className="contactPage__number">
                <h3 style={{ marginBottom: 5 }}>Phone</h3>
                <div style={{ lineHeight: "1.2em" }}>
                  <div>Calgary: (403) 992-7805</div>{" "}
                  <div>Cochrane: (403) 701-5557</div>
                </div>
              </div>
            </div>
            <div className="contactPage__contactItemContainer">
              <FaStoreAlt className="contactPage__icon" />
              <div className="contactPage__hours">
                <h3 style={{ marginBottom: 5 }}>Business Hours</h3>
                <div style={{ lineHeight: "1.2em" }}>
                  24 Hours, 7 Days a Week
                </div>
              </div>
            </div>
          </div>
          {/* <PortableText blocks={rawRichText} serializers={serializer} /> */}
          <div className="contactPage__form">
            <ContactForm />
          </div>
        </div>
      </div>
      <Img className="contactPage__map" fluid={fluid} />
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query {
    mapQuery: allFile(filter: { name: { eq: "calgary_cochrane_map" } }) {
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
`
