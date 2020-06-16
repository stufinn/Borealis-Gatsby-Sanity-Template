import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notFound settings__greyGradientBkgd">
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
      <Link className="settings__mainButton notFound__button">
        Back to Home Page
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
