import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const { sanityHomePage } = data
  const { title } = sanityHomePage
  debugger
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          minHeight: 500,
          display: "grid",
          alignContent: "center",
          justifyContent: "center",
        }}
        className="text-red-700 font-bold"
      >
        <h1>{title}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    sanityHomePage {
      title
    }
  }
`

export default IndexPage
