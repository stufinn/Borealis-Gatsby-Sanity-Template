import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success" />
    <div className="success  settings__greyGradientBkgd">
      <h1>Success!</h1>
      <p>
        Thanks for getting in touch,
        <br />
        your form was successfully submitted.
      </p>
      <p>We will be in touch with you soon!</p>
      <Link className="settings__mainButton success__button">
        Back to Home Page
      </Link>
    </div>
  </Layout>
)

export default SuccessPage
