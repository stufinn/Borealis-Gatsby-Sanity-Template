import React from "react"
import { graphql } from "gatsby"
// import PortableText from "@sanity/block-content-to-react"
// import urlBuilder from "@sanity/image-url"
// import Image from "../components/image"
import SEO from "../components/seo"
// import { node } from "prop-types"

import Layout from "../components/layout"
// import BackgroundImage from "gatsby-background-image"

// import IndexHeader from "../components/header/indexHeader"

// const urlFor = source =>
//   urlBuilder({
//     projectId: "ij3w87az",
//     dataset: "production",
//   }).image(source)

// console.log(process.env)

// const serializer = {
//   types: {
//     inlineImage: props => {
//       return (
//         <figure>
//           <img
//             alt={props.node.alt}
//             src={urlFor(props.node.asset)
//               .width(200)
//               .url()}
//           />
//           {/* <figcaption>{props.node.caption}</figcaption> */}
//         </figure>
//       )
//     },
//   },
// }

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>Hello from the home page</div>
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
//   query {
//     indexBackground: allFile(
//       filter: { relativePath: { eq: "indexBackground.jpg" } }
//     ) {
//       edges {
//         node {
//           relativePath
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `
