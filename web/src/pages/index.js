import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>Hello from the home page</div>
    </Layout>
  )
}

export default IndexPage
