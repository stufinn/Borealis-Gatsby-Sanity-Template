import React, { useState } from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url"
import Img from "gatsby-image"
import { useTransition } from "react-spring"

import Layout from "../components/layout"
import MoreInfo from "../components/moreInfo"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"
import ServiceBlurb from "../components/servicePages/serviceBlurb"
import FeatureImage from "../components/FeatureImage"

// TO DO: Add rich text content!

const urlFor = source =>
  urlBuilder({
    projectId: "ij3w87az",
    dataset: "production",
  }).image(source)

const serializer = {
  types: {
    inlineImage: props => (
      <figure className="image">
        <img
          alt={props.node.alt}
          src={urlFor(props.node.asset).url()}
          style={{ maxWidth: "500px" }}
        />
      </figure>
    ),
  },
}

const ServicePageTemplate = ({ data }) => {
  const [moreInfoView, setMoreInfoView] = useState(false)

  const serviceName = data.sanityPages.title
  const rawMainContent = data.sanityPages._rawMainContent
  const sampleContactImage =
    data.sampleContactImage.edges[0].node.childImageSharp.fluid
  const sampleIconFluid =
    data.backupIconFluid.edges[0].node.childImageSharp.fluid

  // set default values

  // Ternary operators to check if data is being pulled successfully from Sanity. If not, uses default image.
  const contactImage = data.sanityPages.contactImage
    ? data.sanityPages.contactImage.asset.fluid
    : sampleContactImage

  const iconFluid = data.sanityPages.serviceIcon.asset
    ? data.sanityPages.serviceIcon.asset.fluid
    : sampleIconFluid

  const iconAlt = data.sanityPages.serviceIcon.alt
    ? data.sanityPages.serviceIcon.alt
    : "Service icon"

  const moreInfoImage = data.sanityPages.moreInfoImage
    ? data.sanityPages.moreInfoImage.asset.fluid
    : null

  const transitions = useTransition(moreInfoView, null, {
    from: { opacity: 0, transform: "scaleY(0)" },
    enter: { opacity: 1, transform: "scaleY(1)" },
    leave: { opacity: 0, transform: "scaleY(0)" },
  })

  return (
    <Layout>
      <SEO title={`${data.sanityPages.title}`} />

      <div className="servicePage__mainContent settings__FH-NavContact">
        <div className="servicePage__header">
          <div className="servicePage__iconContainer">
            <Img
              className="servicePage__icon"
              fluid={iconFluid}
              // style={{ width: 250 }}
              alt={iconAlt}
            />
          </div>
          <div className="servicePage__summary">
            {/* <h2 className="servicePage__summaryTitle">
              {serviceName} is{" "}
              <span style={{ color: "rgb(245, 192, 7)" }}>cool</span>
            </h2> */}
            <h1 className="servicePage__summaryTitle">
              <span style={{ color: "rgb(245, 192, 7)" }}>{serviceName}</span>
            </h1>
            <p className="servicePage__summaryText">
              {data.sanityPages.description}
            </p>

            <button
              onClick={() => setMoreInfoView(!moreInfoView)}
              className="servicePage__summaryButton settings__mainButton"
            >
              {moreInfoView ? "X Close" : "Learn More"}
            </button>
          </div>
        </div>
        {/* Display More info container only if state of moreInfoView is True */}
        {/* <Spring
          from={{ opacity: 0, marginTop: -500 }}
          to={{ opacity: 1, marginTop: 0 }}
        >
          {props => <div style={props}>Hello</div>}
        </Spring> */}

        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <MoreInfo
                key={key}
                style={props}
                title={serviceName}
                moreInfoImage={moreInfoImage}
                rawMainContent={rawMainContent}
              />
            )
        )}

        <div
          className={`servicePage__learnMore ${
            !moreInfoView ? "null" : "servicePage__learnMoreVisible"
          }`}
          style={{ display: "none" }}
        >
          <div className="servicePage__learnMoreContent">
            <h2 className="servicePage__learnMoreTitle">
              More About {serviceName}
            </h2>
            {moreInfoImage ? <FeatureImage fluid={moreInfoImage} /> : null}
            <div style={{ marginTop: 25 }}>
              <PortableText blocks={rawMainContent} serializers={serializer} />
            </div>
          </div>
        </div>
        {/* Service Blurbs */}
        {/* only render if serviceblurb1 exists */}
        {data.sanityPages.blurb1 ? (
          <div className="servicePage__blurbsContainer">
            {/* <div></div> */}
            <div className="servicePage__blurbs">
              {/* check if blurb1 exists */}
              {data.sanityPages.blurb1 ? (
                <ServiceBlurb
                  className="servicePage__blurb1"
                  title={data.sanityPages.blurb1Title}
                  content={data.sanityPages.blurb1}
                />
              ) : null}
              {/* check if blurb2 exists */}
              {data.sanityPages.blurb2 ? (
                <ServiceBlurb
                  className="servicePage__blurb2"
                  title={data.sanityPages.blurb2Title}
                  content={data.sanityPages.blurb2}
                />
              ) : null}

              {/* check if blurb3 exists */}
              {data.sanityPages.blurb3 ? (
                <ServiceBlurb
                  className="servicePage__blurb3"
                  title={data.sanityPages.blurb3Title}
                  content={data.sanityPages.blurb3}
                />
              ) : null}
            </div>
            {/* <div></div> */}
          </div>
        ) : null}
        <div className="servicePage__contactFormContainer">
          {/* pull this image from Sanity */}
          <Img className="servicePage__contactFormImage" fluid={contactImage} />

          <div className="servicePage__contactForm">
            <h3
              className="servicePage__contactFormTitle"
              style={{ textAlign: "center" }}
            >
              Schedule Service
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

// "$slug: String!" means that we are pulling in the slug from the context (passed in ServicePageTemplate) and that it must be a string value
// "(slug: { current: { eq: $slug } })" means that the slug from the query needs to match the value from the context, so that we get info for the correct page.
//see video 16 of LUT gatsby/shopify

export const query = graphql`
  query sanityPagesQuery($slug: String!) {
    sanityPages(slug: { current: { eq: $slug } }) {
      id
      title
      description
      _rawMainContent
      moreInfoImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      blurb1Title
      blurb2Title
      blurb3Title
      blurb1
      blurb2
      blurb3
      serviceIcon {
        alt
        asset {
          path
          url
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      contactImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

    backupIconFluid: allFile(filter: { name: { eq: "Plumbing2" } }) {
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

    sampleContactImage: allFile(
      filter: { name: { eq: "sampleServiceImage" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ServicePageTemplate
