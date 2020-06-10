import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { animated } from "react-spring"

import PortableText from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url"

import FeatureImage from "../components/FeatureImage"

const MoreInfo = props => {
  console.log("style", props.moreInfoImage)

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

  const styles = {
    ...props.style,
  }

  return (
    <animated.div
      style={styles}
      className="servicePage__learnMore"
      id="learnMore"
    >
      <div className="servicePage__learnMoreContent">
        <h2 className="servicePage__learnMoreTitle">
          More About {props.title}
        </h2>
        {props.moreInfoImage && <FeatureImage fluid={props.moreInfoImage} />}
        <div style={{ marginTop: 25 }}>
          <PortableText
            blocks={props.rawMainContent}
            serializers={serializer}
          />
        </div>
      </div>
    </animated.div>
  )
}

export default MoreInfo
