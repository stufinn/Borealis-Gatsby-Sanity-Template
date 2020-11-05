import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="notFound settings__greyGradientBkgd">
      <h1>About Us</h1>

      <Link className="settings__mainButton notFound__button">
        Back to Home Page
      </Link>
    </div>
  </Layout>
)

export default About
